

const bar_path = ["Visuals","SUBTAB_MGR","Recharge Bar","SHEET_MGR","Recharge Bar"]

UI.AddSubTab(["Visuals", "SUBTAB_MGR"], "Recharge Bar")

UI.AddColorPicker(bar_path,"Color 1");
UI.AddColorPicker(bar_path,"Color 2");
UI.AddSliderInt(bar_path,"Length",10,1024);
UI.AddSliderInt(bar_path,"Height",10,1024);
UI.AddSliderInt(bar_path,"x",0,3840);
UI.AddSliderInt(bar_path,"y",10,2160);






function onDraw()
{
    barlength = UI.GetValue(bar_path.concat("Length")) * Exploit.GetCharge()
    Render.GradientRect(UI.GetValue(bar_path.concat("x")),UI.GetValue(bar_path.concat("y")),barlength,UI.GetValue(bar_path.concat("Height")),1,UI.GetColor(bar_path.concat("Color 1")),UI.GetColor(bar_path.concat("Color 2")))
    
}

Cheat.RegisterCallback("Draw","onDraw")

