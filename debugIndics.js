//haha here i am making js's now :)
//Mana#1092 

const { UI } = require("./onetap")

UI.AddSubTab(["Visuals", "SUBTAB_MGR"], "Debug Indicators")
const indicators_path = ["Visuals","SUBTAB_MGR","Debug Indicators","SHEET_MGR","Debug Indicators"]

UI.AddColorPicker(indicators_path, "Base Color")
UI.AddColorPicker(indicators_path, "Real Color")
UI.AddColorPicker(indicators_path, "Fake Color")
UI.AddColorPicker(indicators_path, "LBY Color")

UI.AddColorPicker(indicators_path, "Active Buttons Color")
UI.AddColorPicker(indicators_path, "Inactive Buttons Color")

UI.AddSliderInt(indicators_path, "Font Size", 1, 32)

UI.AddSliderInt(indicators_path,"Buttons x",0,3840);
UI.AddSliderInt(indicators_path,"Buttons y",0,2160);

UI.AddSliderInt(indicators_path,"Buttons x Offset",0,3840);
UI.AddSliderInt(indicators_path,"Buttons y Offset",0,2160);


const buttons_array = ["IN_ATTACK", "IN_JUMP", "IN_DUCK", "IN_FORWARD", "IN_BACK", "IN_USE", "IN_CANCEL", "IN_LEFT", "IN_RIGHT", "IN_MOVELEFT", "IN_MOVERIGHT", "IN_ATTACK2", "IN_RUN", "IN_RELOAD", "IN_ALT1", "IN_ALT2", "IN_SCORE", "IN_SPEED", "IN_WALK", "IN_ZOOM", "IN_WEAPON1", "IN_WEAPON2", "IN_RAWDUCK"]

//im just lazy kek
function getDropdownValue(value, index)
{
    var mask = 1 << index;
    return value & mask ? true : false;
}

function drawButtons() 
{
    var font = Render.GetFont("Calibri.ttf", UI.GetValue(indicators_path.concat("Font Size")), false)
    var buttons = UserCMD.GetButtons()
    for(i = 0; i <= 22; i++)
    {  
        Render.String(UI.GetValue(indicators_path.concat("Buttons x")) + i * UI.GetValue(indicators_path.concat("Buttons x Offset")), UI.GetValue(indicators_path.concat("Buttons y")) + i * UI.GetValue(indicators_path.concat("Buttons y Offset")), 0, buttons_array[i], getDropdownValue(buttons, i) ? UI.GetColor(indicators_path.concat("Active Buttons Color")) : UI.GetColor(indicators_path.concat("Inactive Buttons Color")), font)
    }

    
}

function drawAngleLines() 
{
    length = 20
    //cba making another slider
    localPlayer = Local.GetLocalPlayer()
    origin = Entity.GetRenderOrigin(localPlayer)
    origin2d = Render.WorldToScreen(origin)
    realAngle = Local.GetRealYaw()
    fakeAngle = Local.GetFakeYaw()
    realPos = [origin[0] + sin(realAngle), origin[1] + cos(realAngle), origin[2]]
    fakePos = [origin[0] + sin(fakeAngle), origin[1] + cos(fakeAngle), origin[2]]
    realPos2d = Render.WorldToScreen(realPos)
    fakePos2d = Render.WorldToScreen(fakePos)
    //base
    //cba making this cuz it involves getting targets relative angle and shit like that

    //real
    Render.Line(origin2d[0], origin2d[1], realPos2d[0], realPos[1], UI.GetColor(indicators_path.concat("Real Color")))
    //fake
    Render.Line(origin2d[0], origin2d[1], realPos2d[0], realPos[1], UI.GetColor(indicators_path.concat("Fake Color")))
}


function onDraw() 
{
    drawAngleLines()
}







