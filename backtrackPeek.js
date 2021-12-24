//made by Mana#1092
//trash code below dont look
//TODO: make autopeek compatible(goes back after not able to shoot)
UI.AddSubTab(["Config", "SUBTAB_MGR"], "Backtrack Peek Settings")
UI.AddSubTab(["Visuals", "SUBTAB_MGR"], "Backtrack Peek Indicators")

const settingsPath = ["Config", "SUBTAB_MGR", "Backtrack Peek Settings", "SHEET_MGR", "Backtrack Peek Settings"];
const indicators_path = ["Visuals","SUBTAB_MGR","Backtrack Peek Indicators","SHEET_MGR","Backtrack Peek Indicators"]

UI.AddMultiDropdown(settingsPath ,"Hitboxes",["Head","Neck","Pelvis","Body","Thorax","Chest","Upper Chest","Left Thigh","Right Thigh","Left Calf","Right Calf","Left Foot","Right Foot","Left Hand","Right Hand","Left Upper Arm","Left Upper Forearm","Right Upper Arm","Right Upper Forearm"]);
UI.AddSliderInt(settingsPath, "Tick Trigger", 0, 16 );
UI.AddSliderInt(settingsPath, "Disable after X ticks", 0, 16 );
UI.AddHotkey(["Scripts", "Keys", "JS Keybinds"], "Select Position", "Select Position");
//UI.AddHotkey(["Scripts", "Keys", "JS Keybinds"], "Disable Selection", "Disable Selection");

UI.AddSliderInt(settingsPath,"Point Distance",1,128)
UI.AddSliderInt(settingsPath, "Circle Radius",1,32)
UI.AddColorPicker(settingsPath, "Active Outline Color")
UI.AddColorPicker(settingsPath, "Active Circle Color")

UI.AddColorPicker(settingsPath, "Inactive Outline Color")
UI.AddColorPicker(settingsPath, "Inactive Circle Color")

UI.AddSliderInt(settingsPath,"Mindmg",1,101)
UI.AddSliderInt(settingsPath,"Mindmg Override",1,101)

UI.AddTextbox(indicators_path,"Font")
UI.AddSliderInt(indicators_path,"Font Size",1,64)
UI.AddSliderInt(indicators_path,"Reload script after setting the font",0,0)

UI.AddColorPicker(indicators_path,"Peek Active");
UI.AddColorPicker(indicators_path,"Peek Inactive");
UI.AddSliderInt(indicators_path,"Peek x",0,3840);
UI.AddSliderInt(indicators_path,"Peek y",0,2160);

UI.AddColorPicker(indicators_path,"Peek Timer Color");
UI.AddSliderInt(indicators_path,"Peek Timer x",0,3840)
UI.AddSliderInt(indicators_path,"Peek Timer y",0,2160)

UI.AddColorPicker(indicators_path,"Point Position Color");
UI.AddSliderInt(indicators_path,"Point Position x",0,3840)
UI.AddSliderInt(indicators_path,"Point Position y",0,2160)

const direction_indexes = ["none","left","right"]
//cache settings so i dont run for loop every frame
hitboxesCache = 0;


var hitboxes = [];

var tickTrigger = 0;
var timer = 0;
var peekedoutTicks = 0;

var triggerPeek = false;
var selectedPoint = []
var mindmg = 1;

var peekOut = false;

var peekActive = false;
var peekPosPhase = 0;
var enemies = Entity.GetEnemies()

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
function adjustAngle(angle) {
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
        //Cheat.Print("hitboxes is "+hitboxes.toString()+"\n")
        for(var i in hitboxes)
        {
            
            currentDmg = Trace.Bullet(localPlayer, target, origin, Entity.GetHitboxPosition(target, hitboxes[i]))[1]
            //Cheat.Print("scanning "+ target.toString()+" 's "+ hitboxes[i]+", damage is "+currentDmg.toString()+"\n")
            //overrides the maxdmg thing if damage is increased relative to previous results
            maxDmg = currentDmg > maxDmg ? currentDmg : maxDmg
            //did i do this right? i hope i did....

        }
        //Cheat.Print(Entity.GetName(target).toString()+"'s maxdmg is"+ maxDmg.toString()+"\n")
        return maxDmg; 
    }   
    else 
    {
        //Cheat.Print(Entity.GetName(target).toString()+" is dormant\n")
        return -1;
    }
}
function getSelectedPosition()
{
    //setting peekpoint depending on camangle instead, this is useless for now
    /*
    if(UI.GetValue(["Scripts", "Keys", "JS Keybinds", "Select Position"])==true)
    {
        UI.ToggleHotkey(["Scripts", "Keys", "JS Keybinds", "Select Position"])
        
        angle = Local.GetCameraAngles();
        vector = ANGLE2VEC(angle);
        entity = Entity.GetLocalPlayer();
        origin = Entity.GetProp(entity, "CBaseEntity", "m_vecOrigin")
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
    */
    if(UI.GetValue(["Scripts", "Keys", "JS Keybinds", "Select Position"])==true)
    {
        UI.ToggleHotkey(["Scripts", "Keys", "JS Keybinds", "Select Position"])
        peekPosPhase++;
        if(peekPosPhase > 2)
        {
            
            disableMovement();
            return;

        }
        else
        {
            peekActive = true;
        }
        
    }
    if(peekOut){return;}
    angle = Local.GetCameraAngles();
    if(peekPosPhase == 0)
    {
        UI.SetHotkeyState(["Rage", "Anti Aim","General", "Key assignment", "Right direction"], "Toggle");
        UI.SetHotkeyState(["Rage", "Anti Aim", "General", "Key assignment","Left direction"], "Toggle"); 
        disableMovement();
        return;
        
    }
    if(peekPosPhase == 1)
    {
        angle[1] += 90;
        UI.SetHotkeyState(["Rage", "Anti Aim","General", "Key assignment", "Right direction"], "Always");
        UI.SetHotkeyState(["Rage", "Anti Aim", "General", "Key assignment","Left direction"], "Toggle"); 
    }
    else
    {
        angle[1] -=90;   
        UI.SetHotkeyState(["Rage", "Anti Aim","General", "Key assignment", "Right direction"], "Toggle");
        UI.SetHotkeyState(["Rage", "Anti Aim", "General", "Key assignment","Left direction"], "Always");
        
    }
    angle[0] = 0 
    vector = ANGLE2VEC(angle);
    length = UI.GetValue(settingsPath.concat("Point Distance"));
    entity = Entity.GetLocalPlayer();
    origin = Entity.GetProp(entity, "CBaseEntity", "m_vecOrigin");
    selectedPoint = [origin[0] + vector[0] * length, origin[1] + vector[1] * length, origin[2]];



}
function renderSelectedPosition()
{
    if(peekActive == true && selectedPoint.length != 0)
    {
        localPlayer = Entity.GetLocalPlayer();
        origin = JSON.parse(JSON.stringify(selectedPoint))
        origin[2] += Entity.GetProp(localPlayer, "CBasePlayer", "m_vecViewOffset[2]")[0];
        screenPos = Render.WorldToScreen(origin)

        Render.Filled3DCircle(selectedPoint, UI.GetValue(settingsPath.concat("Circle Radius")), 360, 0, peekOut ? UI.GetColor(settingsPath.concat("Active Outline Color")) : UI.GetColor(settingsPath.concat("Inactive Outline Color")), peekOut ? UI.GetColor(settingsPath.concat("Active Circle Color")) : UI.GetColor(settingsPath.concat("Inactive Circle Color")))
        Render.FilledCircle(screenPos[0],screenPos[1],10,peekOut ? UI.GetColor(settingsPath.concat("Active Circle Color")) : UI.GetColor(settingsPath.concat("Inactive Circle Color")))
    };
}
function checkTrigger()
{
    if(triggerPeek == true)
    {
        if(timer >= tickTrigger)
        {
            peekOut = true;
            timer = 0;

        }
        else
        {
            timer++;
        }
    }
}
function checkTargets()
{
    if(peekActive == false){return;}
    enemies = Entity.GetEnemies();
    localPlayer = Entity.GetLocalPlayer();
    origin = JSON.parse(JSON.stringify(selectedPoint));

    //origin[2] += Entity.GetProp(localPlayer, "CBasePlayer", "m_vecViewOffset[2]")[0];
    //check each enemy's hitbox cache poses
    for(i in enemies)
    {
        
        enemyDamage = hitscan(origin, enemies[i], hitboxes)
        enemyHealth = Entity.GetProp(enemies[i], "CBasePlayer", "m_iHealth")

        //Cheat.Print("enemy damage is" + enemyDamage.toString()+'\n')

        if(enemyDamage >= mindmg || enemyDamage > enemyHealth)
        {
            //sets the trigger
            //Cheat.Print("trigger set \n")
            triggerPeek = true;
            
            return;
        }
    };
}

function moveToPoint()
{
    if(peekOut == true)
    {
        
        localplayerPos = Entity.GetProp(Entity.GetLocalPlayer(), "CBaseEntity", "m_vecOrigin");
        //pasted shit below(kinda)
        var vecToPeek = VectorSubtract(selectedPoint,localplayerPos)
		var angle = Math.atan2(vecToPeek[1], vecToPeek[0]) * (180 / Math.PI);;
		var viewYaw = Local.GetViewAngles()[1] - 180;
		var realAngle = (adjustAngle(angle - viewYaw) + 90) * (Math.PI / 180);
		var distance = VectorLength(localplayerPos, [selectedPoint[0], selectedPoint[1], localplayerPos[2]]);
        
        if(distance <= 10)
        {
            peekedoutTicks++;
            if(peekedoutTicks>=4)
            {
                disableMovement();
                return;
            }
             
        }
        
		UserCMD.SetMovement([Math.cos(realAngle) * 450, Math.sin(realAngle) * 450, 0]);
        
    }
}
//disables movements when ragebot fires
function disableMovement()
{ 
    peekedoutTicks = 0;
    peekActive = false;
    peekOut = false;
    triggerPeek = false;
    peekPosPhase = 0;
    timer = 0;
    UI.SetHotkeyState(["Rage", "Anti Aim","General", "Key assignment", "Right direction"], "Toggle");
    UI.SetHotkeyState(["Rage", "Anti Aim", "General", "Key assignment","Left direction"], "Toggle"); 
}

function drawPeekIndicator()
{
    var font = Render.GetFont(UI.GetString(indicators_path.concat("Font")), UI.GetValue(indicators_path.concat("Font Size")), false)
    if(font == null){ return;}
    if(peekActive == true || UI.IsMenuOpen())
    {
        if(peekOut == true)
        {
            Render.String(UI.GetValue(indicators_path.concat("Peek x")), UI.GetValue(indicators_path.concat("Peek y")), 0, "PEEKING", UI.GetColor(indicators_path.concat("Peek Active")), font)

        }
        else
        {
            Render.String(UI.GetValue(indicators_path.concat("Peek x")), UI.GetValue(indicators_path.concat("Peek y")), 0, "PEEKING", UI.GetColor(indicators_path.concat("Peek Inactive")), font)
        }
    }

    if(triggerPeek == true || UI.IsMenuOpen())
    {
        Render.String(UI.GetValue(indicators_path.concat("Peek Timer x")), UI.GetValue(indicators_path.concat("Peek Timer y")), 0, "Peeking After " + (tickTrigger-timer).toString()+" Ticks",UI.GetColor(indicators_path.concat("Peek Timer Color")), font)
    }
    Render.String(UI.GetValue(indicators_path.concat("Point Position x")), UI.GetValue(indicators_path.concat("Point Position y")), 0, "Current Point Position: " + direction_indexes[peekPosPhase],UI.GetColor(indicators_path.concat("Point Position Color")), font)
}   


function cm()
{

    checkTargets();
    checkTrigger();
    moveToPoint();
    getSelectedPosition();
}
function onDraw()
{
    mindmg = UI.GetValue(["Rage", "General", "General","Key assignment", "Damage override"]) == 1 ? UI.GetValue(settingsPath.concat("Mindmg")) : UI.GetValue(settingsPath.concat("Mindmg"))
    updateUI();
    renderSelectedPosition();
    drawPeekIndicator();
    
}
Cheat.RegisterCallback("CreateMove","cm")
Cheat.RegisterCallback("Draw","onDraw");
Cheat.RegisterCallback("ragebot_fire","disableMovement")


