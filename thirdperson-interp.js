


//vars
var distCache = 0

const distThreshold = 50
var weight = 0

UI.AddHotkey(["Misc.", "Keys", "Keys", "Key assignment"], "Animated Thirdperson", "Animated Thirdperson")
UI.AddSliderInt(["Misc.", "View", "Camera"], "Animated Thirdperson Distance", 100, 500)
UI.AddSliderFloat(["Misc.", "View", "Camera"], "Interpolation Time", 0.1, 2);

function Interpolate(v1,v2,weight)
{
    return v1 + (v2 - v1) * weight
}  

function Clamp(val, min, max) 
{ 
    return Math.min(Math.max(min, val), max) 
}


function OnDraw()
{
    interpTime = UI.GetValue(["Misc.", "View", "Camera", "Interpolation Time"])
    maxDist = UI.GetValue(["Misc.", "View", "Camera", "Animated Thirdperson Distance"])
    isActive = UI.GetHotkeyState(["Misc.", "Keys", "Keys", "Key assignment", "Animated Thirdperson"]),
    
    weightDelta = (Globals.Frametime() / interpTime) * (maxDist - distThreshold);
    if(isActive)
    {
        weight += weightDelta
    }
    else
    {
        weight -= weightDelta
    }
    weight = Clamp(weight, 0, 1)
    

    //toggle if weight drops 2 zero
    if(weight <= 0)
    {
        UI.SetValue(["Misc.", "Keys", "Keys", "Key assignment", "Thirdperson"], false)
    }
    else
    {
        UI.SetValue(["Misc.", "Keys", "Keys", "Key assignment", "Thirdperson"], true)
    }

    var dist = Interpolate(distThreshold, maxDist, weight)
    UI.SetValue(["Misc.", "View", "Camera", "Thirdperson distance"], dist)


    

    
    

}


function OnLoad()
{
    //cache settings
    distCache = UI.GetValue(["Misc.", "View", "Camera", "Thirdperson distance"])
}


function OnUnload() 
{
    //restore values
    UI.SetValue(["Misc.", "View", "Camera", "Thirdperson distance"], distCache);
    //UI.SetValue(["Misc.", "Keys", "Keys", "Key assignment", "Thirdperson"], false)
}


Cheat.RegisterCallback("Draw", "OnDraw");
Cheat.RegisterCallback("Unload", "OnUnload");