//made by Mana#1092
//trash code below dont look

const { Entity, Trace } = require("./onetap");


UI.AddSubTab(["Config", "SUBTAB_MGR"], "Backtrack Peek Settings")

const settingsPath = ["Config", "SUBTAB_MGR", "Backtrack Peek Settings", "SHEET_MGR", "Backtrack Peek Settings"];
UI.AddMultiDropdown(settingsPath ,"Hitboxes",["Head","Neck","Pelvis","Body","Thorax","Chest","Upper Chest","Left Thigh","Right Thigh","Left Calf","Right Calf","Left Foot","Right Foot","Left Hand","Right Hand","Left Upper Arm","Left Upper Forearm","Right Upper Arm","Right Upper Forearm"]);
UI.AddSliderInt(settingsPath, "Tick Trigger", 0, 16 );
UI.AddHotkey(["Scripts", "Keys", "JS Keybinds"], "Select Position", "Select Position");
UI.AddHotkey(["Scripts", "Keys", "JS Keybinds"], "Disable Selection", "Disable Selection");
UI.AddColorPicker(settingsPath, "Outline Color")
UI.AddColorPicker(settingsPath, "Circle Color")

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
        maxDmg = 0;
        currentDmg = 0;
        for(var i in hitboxes)
        {
            currentDmg = Trace.Bullet(localPlayer, target, origin, Entity.GetHitboxPosition(target, hitboxes[i]))
            //overrides the maxdmg thing if damage is increased relative to previous results
            maxdmg = currentDmg > maxDmg ? currentDmg : maxDmg
            //did i do this right? i hope i did....

        }
        return maxDmg;
    }   
    else 
    {
        return 0;
    }
}
function getSelectedPosition()
{
    if(UI.GetValue(["Scripts", "Keys", "JS Keybinds", "Select Position"])==true)
    {
        
        angle = Local.GetCameraAngles();
        vector = ANGLE2VEC(angle);
        entity = Entity.GetLocalPlayer();
        origin = Entity.GetRenderOrigin(entity);
        origin[2] += Entity.GetProp(entity, "CBasePlayer", "m_vecViewOffset[2]")[0];
        rayLength = 65536
        end = [origin[0] + vector[0] * rayLength, origin[1] + vector[1] * rayLength, origin[2] + vector[2] * rayLength];
        result = Trace.Line(entity, origin, end);
        if(result[1] != 1)
        {
            result[1] = 1 - result[1]
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
    if(peekActive)
    {
    screenPos = Render.WorldToScreen(selectedPoint);
    Render.Filled3DCircle(screenPos[0],screenPos[1],360,0,UI.GetColor(settingsPath.concat("Outline Color")), UI.GetColor(settingsPath.concat("Circle Color")))
    };
}
function checkCache()
{
    if(peekActive == false){return;}

    if(cache[0] == 1)
    {
        peekOut = true;
        cache.shift();
    }
    else
    {
        cache.shift();
    }
}
function checkTargets()
{
    if(peekActive == false){return;}

    localPlayer = Entity.GetLocalPlayer();
    origin = selectedPoint;
    origin[2] += Entity.GetProp(localPlayer, "CBasePlayer", "m_vecViewOffset[2]")[0];
    //check each enemy's hitbox cache poses
    for(i in enemies)
    {
        if(mindmg >= hitscan(origin, enemies[i], hitboxes))
        {
            //sets the trigger
            cache[tickTrigger] = 1
            return;
        }
    };
}

function moveToPoint()
{
    if(peekOut)
    {
        
        localplayerPos = Entity.GetProp(Entity.GetLocalPlayer(), "CBaseEntity", "m_vecOrigin");
        deltaVector = VectorSubtract(selectedPoint, localplayerPos)
        moveVector = VectorNormalize(VectorSubtract(selectedPoint, localplayerPos));
        distance = VectorLength(deltaVector[0],deltaVector[1]);

        UserCMD.SetMovement([moveVector[0] * (distance < 20 ? 50 + distance * 5 : 450), moveVector[1] * (distance < 20 ? 50 + distance * 5 : 450), 0]);
    }
}
function disableMovement()
{ 
    peekActive = false;
    peekOut = false;
}

function cm()
{
    if(UI.GetValue(["Scripts", "Keys", "JS Keybinds", "Disable Selection"])==true)
    {
        peekActive = false;
    }
    getSelectedPosition();
    checkTargets();
    moveToPoint();
}
function onDraw()
{
    updateUI();
    renderSelectedPosition();
}
Cheat.RegisterCallback("CreateMove","cm")
Cheat.RegisterCallback("Draw","onDraw");
Cheat.RegisterCallback("ragebot_fire","disableMovement")


