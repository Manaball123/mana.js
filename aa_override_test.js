// /AA INVERTER DOES NOT AFFACT OVERRIDES

function anti_aim()
{
    AntiAim.SetOverride(1)
    AntiAim.SetFakeOffset(60)
    AntiAim.SetRealOffset(-10)
}

Cheat.RegisterCallback("CreateMove","anti_aim")