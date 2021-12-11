

UI.AddSliderInt( [ "Scripts", "Keys"], "real", -180, 180 )
UI.AddSliderInt( [ "Scripts", "Keys"], "fake", -180, 180 )
UI.AddSliderInt( [ "Scripts", "Keys"], "lby", -180, 180 )
function anti_aim()
{
    var real = UI.GetValue(["Scripts", "Keys", "real"]);
    var fake = UI.GetValue(["Scripts", "Keys", "fake"]);
    var lby = UI.GetValue(["Scripts", "Keys", "lby"]);
    AntiAim.SetOverride(1)
    AntiAim.SetFakeOffset(fake)
    AntiAim.SetRealOffset(real)
    AntiAim.SetLBYOffset(lby)
}

Cheat.RegisterCallback("CreateMove","anti_aim")