
const bar_path = ["Visuals","SUBTAB_MGR","Recharge Bar","SHEET_MGR","Recharge Bar"]
const indics_path = ["Visuals","SUBTAB_MGR","Other Indicators","SHEET_MGR","Other Indicators"]

UI.AddSubTab(["Visuals", "SUBTAB_MGR"], "Recharge Bar")
UI.AddSubTab(["Visuals", "SUBTAB_MGR"], "Other Indicators")


UI.AddColorPicker(bar_path,"Color 1");
UI.AddColorPicker(bar_path,"Color 2");
UI.AddSliderInt(bar_path,"Length",10,1024);
UI.AddSliderInt(bar_path,"Height",10,1024);
UI.AddSliderInt(bar_path,"x",0,3840);
UI.AddSliderInt(bar_path,"y",0,2160);

UI.AddSliderInt(indics_path,"Text Size");

UI.AddColorPicker(indics_path,"DT Active Color");
UI.AddColorPicker(indics_path,"DT Inactive Color");
UI.AddSliderInt(indics_path,"DT x",0,3840);
UI.AddSliderInt(indics_path,"DT y",0,2160);

UI.AddColorPicker(indics_path,"HS Color");
UI.AddSliderInt(indics_path,"HS x",0,3840);
UI.AddSliderInt(indics_path,"HS y",0,2160);

UI.AddColorPicker(indics_path,"FD Color");
UI.AddSliderInt(indics_path,"FD x",0,3840);
UI.AddSliderInt(indics_path,"FD y",0,2160);

UI.AddColorPicker(indics_path,"Mindmg Color");
UI.AddSliderInt(indics_path,"Mindmg x",0,3840);
UI.AddSliderInt(indics_path,"Mindmg y",0,2160);



UI.AddSliderInt



function clamp(mode, value, limit)
{
    if(mode == 0)
    {
        return value < limit ? limit : value
    }
    else
    {
        return value > limit ? limit : value
    }
}

//subtracts length by this value, shit variable naming ik
var barLengthFix = 20

function onDraw()
{

    var font = Render.GetFont( "Minecraft.ttf", UI.GetValue(indics_path.concat("Text Size")), false)

    barlength = clamp(0, UI.GetValue(bar_path.concat("Length")) * Exploit.GetCharge() - barLengthFix, 0)
    Render.GradientRect(UI.GetValue(bar_path.concat("x")),UI.GetValue(bar_path.concat("y")),barlength,UI.GetValue(bar_path.concat("Height")),1,UI.GetColor(bar_path.concat("Color 1")),UI.GetColor(bar_path.concat("Color 2")))
    if(UI.GetValue(["Rage", "Exploits", "Keys", "Key assignment", "Double tap"]) == 1)
    {
        if(Exploit.GetCharge < 1)
        {
            Render.String(UI.GetValue(indics_path.concat("DT x")),UI.GetValue(indics_path.concat("DT y")), 0, "DT", UI.GetColor(indics_path.concat("DT Inactive Color")), font)
        }
        else
        {
            Render.String(UI.GetValue(indics_path.concat("DT x")),UI.GetValue(indics_path.concat("DT y")), 0, "DT", UI.GetColor(indics_path.concat("DT Active Color")), font)
        }
    }
    if(UI.GetValue(["Rage", "Exploits", "Keys", "Key assignment", "Hide Shots"]) == 1)
    {
        Render.String(UI.GetValue(indics_path.concat("HS x")),UI.GetValue(indics_path.concat("HS y")), 0, "HS", UI.GetColor(indics_path.concat("HS Color")), font)
    }

    if(UI.GetValue(["Rage", "Anti Aim", "General", "Key assignment", "Fake duck"]) == 1)
    {
        Render.String(UI.GetValue(indics_path.concat("FD x")),UI.GetValue(indics_path.concat("FD y")), 0, "FD", UI.GetColor(indics_path.concat("FD Color")), font)
    }
    if(UI.GetValue(["Rage", "General", "Keys", "Key assignment", "Minimum override"]) == 1)
    {
        Render.String(UI.GetValue(indics_path.concat("Mindmg x")),UI.GetValue(indics_path.concat("Mindmg y")), 0, "Mindmg Override", UI.GetColor(indics_path.concat("Mindmg Color")), font)
    }
    
    
    

    
}

Cheat.RegisterCallback("Draw","onDraw")

