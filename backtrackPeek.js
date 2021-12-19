//made by Mana#1092
//trash code below dont look

UI.AddSubTab(["Config", "SUBTAB_MGR"], "Backtrack Peek Settings")

const settingsPath = ["Config", "SUBTAB_MGR", "Backtrack Peek Settings", "SHEET_MGR", "Backtrack Peek Settings"];
UI.AddMultiDropdown(settingsPath ,"Hitboxes",["Head","Neck","Pelvis","Body","Thorax","Chest","Upper Chest","Left Thigh","Right Thigh","Left Calf","Right Calf","Left Foot","Right Foot","Left Hand","Right Hand","Left Upper Arm","Left Upper Forearm","Right Upper Arm","Right Upper Forearm"]);
UI.AddSliderInt(settingsPath, "Tick Trigger", 0, 16 );
UI.AddHotkey(["Scripts", "Keys", "JS Keybinds"], "Select Position", "Select Position");
UI.AddHotkey(["Scripts", "Keys", "JS Keybinds"], "Disable Selection", "Disable Selection");
UI.AddColorPicker(settingsPath, "Outline Color")
UI.AddColorPicker(settingsPath, "Circle Color")

UI.AddSliderInt(settingsPath,"Mindmg",1,101)

UI.AddColorPicker(indics_path,"FD Color");
UI.AddSliderInt(indics_path,"FD x",0,3840);
UI.AddSliderInt(indics_path,"FD y",0,2160);


//cache settings so i dont run for loop every frame
hitboxesCache = 0;


var hitboxes = [];

var tickTrigger = 0;

var cache = []
var selectedPoint = []
var mindmg = 1;

var peekOut = false;

var peekActive = false;
var enemies = Entity.GetEnemies().filter(function(e) { return !Entity.IsDormant(e) && Entity.IsValid(e); });

const screensize = Render.GetScreenSize()

function getDropdownValue(value, index)
{
    var mask = 1 << index;
    return value & mask ? true : false;
}

function ANGLE2VEC(angle) 
{
	var pitch = angle[0];
	var yaw = angle[1];
	return [Math.cos(DEG2RAD(pitch)) * Math.cos(DEG2RAD(yaw)), Math.cos(DEG2RAD(pitch)) * Math.sin(DEG2RAD(yaw)), -Math.sin(DEG2RAD(pitch))];
}
function DEG2RAD(degree)
{
    return degree * Math.PI / 180.0;
}


function updateUI()
{
    hitboxesValue = UI.GetValue(settingsPath.concat("Hitboxes"))
    tickTrigger = UI.GetValue(settingsPath.concat("Tick Trigger"))
    if(hitboxesValue != hitboxesCache)
    {
        hitboxesCache = hitboxesValue
        hitboxes = [];
        for(i=0;i<19;i++)
        {
            if(getDropdownValue(hitboxesValue,i))
            {
                hitboxes.push(i)
            }
        }
    }

}
function VectorAdd(a, b)
{
    return [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
}
function VectorSubtract(a, b)
{
    return [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
}
function VectorLength(a)
{
    return Math.sqrt(a[1]**2+a[2]**2+a[3]**2);
}

function VectorNormalize(vec)
{
    var length = VectorLength(vec[0], vec[1], vec[2]);
    return [vec[0] / length, vec[1] / length, vec[2] / length];
}
function  adjustAngle(angle) {
    if (angle < 0) {
        angle = (90 + angle * (-1));
    } else if (angle > 0) {
        angle = (90 - angle);
    }

    return angle;
}

//3d circle func from fourms, credits goes to this guy i think
// https://www.onetap.com/members/epiccsgohaker1337.74887/

Render.Filled3DCircle = function(position, radius, degrees, start_at, color, fill_color) 
{
    //position, radius, color, fill_color: self explanatory
    //degrees: circle span(can be used to make half circles too, but use 360 for full circle)
    //start_at: start span at x degrees
    var old_x, old_y;

    //clamp degrees between 360 and 0
    degrees = degrees < 361 && degrees || 360; 
    degrees = degrees > -1 && degrees || 0;
    start_at += 1;

    for (rot = start_at; rot < degrees + start_at + 1; rot += start_at * 8) {
        rot_r = rot * (Math.PI / 180);
        line_x = radius * Math.cos(rot_r) + position[0], line_y = radius * Math.sin(rot_r) + position[1];

        var curr = Render.WorldToScreen([line_x, line_y, position[2]]);
        var cur = Render.WorldToScreen([position[0], position[1], position[2]]);

        if (cur[0] != null && curr[0] != null && old_x != null) {
            Render.Polygon([[curr[0], curr[1]], [old_x, old_y], [cur[0], cur[1]]], fill_color)
            Render.Line(curr[0], curr[1], old_x, old_y, color)
        }

        old_x = curr[0], old_y = curr[1];
    }
}

function hitscan(origin, target, hitboxes)
{
    if(Entity.IsValid(target) == true && Entity.IsAlive(target) && Entity.IsDormant(target) == false)
    {
        localPlayer = Entity.GetLocalPlayer()
        origin[2] += Entity.GetProp(localPlayer, "CBasePlayer", "m_vecViewOffset[2]")[0];
        maxDmg = -1;
        currentDmg = -1;
        for(var i in hitboxes)
        {
            
            currentDmg = Trace.Bullet(localPlayer, target, origin, Entity.GetHitboxPosition(target, hitboxes[i]))[1]
            //Cheat.Print("scanning "+ target.toString()+" 's "+hitboxes[i]+", damage is "+currentDmg.toString()+"\n")
            //overrides the maxdmg thing if damage is increased relative to previous results
            maxDmg = currentDmg > maxDmg ? currentDmg : maxDmg
            //did i do this right? i hope i did....

        }
        Cheat.Print(target.toString()+"'s maxdmg is"+ maxDmg.toString()+"\n")
        return maxDmg; 
    }   
    else 
    {
        Cheat.Print("entity is dormant\n")
        return -1;
    }
}
function getSelectedPosition()
{
    if(UI.GetValue(["Scripts", "Keys", "JS Keybinds", "Select Position"])==true)
    {
        UI.ToggleHotkey(["Scripts", "Keys", "JS Keybinds", "Select Position"])
        
        angle = Local.GetCameraAngles();
        vector = ANGLE2VEC(angle);
        entity = Entity.GetLocalPlayer();
        origin = Entity.GetRenderOrigin(entity);
        origin[2] += Entity.GetProp(entity, "CBasePlayer", "m_vecViewOffset[2]")[0];
        rayLength = 8192
        end = [origin[0] + vector[0] * rayLength, origin[1] + vector[1] * rayLength, origin[2] + vector[2] * rayLength];
        result = Trace.Line(entity, origin, end);
        if(result[1] != 1)
        {
            selectedPoint = [origin[0] + vector[0] * rayLength * result[1], origin[1] + vector[1] * rayLength * result[1], origin[2] + vector[2] * rayLength * result[1]];
            peekActive = true;
            
        }
        else
        {
            selectedPoint = []
        }

    }
}
function renderSelectedPosition()
{
    if(peekActive == true && selectedPoint.length != 0)
    {
        //scanPoint = JSON.parse(JSON.stringify(selectedPoint))
        //screenPos = Render.WorldToScreen(scanPoint[0], scanPoint[1], scanPoint[2] + Entity.GetProp(Entity.GetLocalPlayer(), "CBasePlayer", "m_vecViewOffset[2]")[0]);
        //Cheat.Print("val is"+selectedPoint.toString())
        Render.Filled3DCircle(selectedPoint,10,360,0,UI.GetColor(settingsPath.concat("Outline Color")), UI.GetColor(settingsPath.concat("Circle Color")))
        
        //Render.FilledCircle(screenPos[0],screenPos[1],10,UI.GetColor(settingsPath.concat("Circle Color")))
    };
}
function checkCache()
{
    //if cache length isnt long enough, repopulates it or some shit idk
    if(cache.length < tickTrigger + 1)
    {
        for(i = 0;i < tickTrigger + 1;i++)
        {
            if(cache[i] == null)
            {
                cache[i] = 0;
            }
        }
    }
    //if cache array to long
    if(cache.length > tickTrigger + 1)
    {
        cache = []
        for(i = 0;i < tickTrigger;i++)
        {
            
            cache[i] = 0;
            
        }
    }
    //Cheat.Print("cache is "+ cache.toString()+'\n')
    if(peekActive == false){return;}

    if(cache[0] == 1)
    {
        peekOut = true;
        Cheat.Print("TRIGGER CALLED "+'\n')
        cache.shift();
        cache[tickTrigger] = 0;
    }
    else
    {
        cache.shift();
        cache[tickTrigger] = 0;
    }
}
function checkTargets()
{
    if(peekActive == false){return;}

    localPlayer = Entity.GetLocalPlayer();
    origin = JSON.parse(JSON.stringify(selectedPoint));
    origin[2] += Entity.GetProp(localPlayer, "CBasePlayer", "m_vecViewOffset[2]")[0];
    //check each enemy's hitbox cache poses
    for(i in enemies)
    {
        
        enemyDamage = hitscan(origin, enemies[i], hitboxes)
        Cheat.Print("function returned "+ hitscan(origin, enemies[i], hitboxes).toString())
        Cheat.Print("enemy damage is" + enemyDamage.toString()+'\n')
        if(enemyDamage >= mindmg)
        {
            //sets the trigger
            Cheat.Print("trigger set \n")
            cache[tickTrigger] = 1
            return;
        }
    };
}

function moveToPoint()
{
    if(peekOut==true)
    {
        localplayerPos = Entity.GetProp(Entity.GetLocalPlayer(), "CBaseEntity", "m_vecOrigin");
        /*
        
        deltaVector = VectorSubtract(selectedPoint, localplayerPos)
        moveVector = VectorNormalize(VectorSubtract(selectedPoint, localplayerPos));
        distance = VectorLength(deltaVector[0],deltaVector[1]);

        serCMD.SetMovement([Math.cos(realAngle) * (distance < 20 ? 50 + distance * 5 : 450), Math.sin(realAngle) * (distance < 20 ? 50 + distance * 5 : 450), 0]);
        */

        //pasted shit below
        var vecToPeek = VectorSubtract(selectedPoint,localplayerPos)
		var angle = Math.atan2(vecToPeek[1], vecToPeek[0]) * (180 / Math.PI);;
		var viewYaw = Local.GetViewAngles()[1] - 180;
		var realAngle = (adjustAngle(angle - viewYaw) + 90) * (Math.PI / 180);
		var distance = VectorLength(localplayerPos, [selectedPoint[0], selectedPoint[1], localplayerPos[2]]);
		UserCMD.SetMovement([Math.cos(realAngle) * (distance < 20 ? 50 + distance * 5 : 450), Math.sin(realAngle) * (distance < 20 ? 50 + distance * 5 : 450), 0]);
    }
}
function disableMovement()
{ 
    peekActive = false;
    peekOut = false;
}

function drawPeekIndicator()
{
    var font = Render.GetFont( "calibri.ttf", 32, false)
    
    if(peekOut == true)
    {
        Render.String(screensize[0]/2,screensize[1]/2, 0, "PEEK", [255,255,255,255], font)

    }
    else
    {
        Render.String(screensize[0]/2,screensize[1]/2, 0, "PEEK", [255,0,0,255], font)
    }
}

function cm()
{
    if(UI.GetValue(["Scripts", "Keys", "JS Keybinds", "Disable Selection"])==true)
    {
        peekActive = false;
        peekOut  = false;
    }
    getSelectedPosition();
    checkTargets();
    checkCache();
    moveToPoint();
}
function onDraw()
{
    mindmg = UI.GetValue(settingsPath.concat("Mindmg"))
    updateUI();
    renderSelectedPosition();
    drawPeekIndicator();
    
}
Cheat.RegisterCallback("CreateMove","cm")
Cheat.RegisterCallback("Draw","onDraw");
Cheat.RegisterCallback("ragebot_fire","disableMovement")


