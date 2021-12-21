//pasted from fourms



function can_shift_shot(ticks_to_shift) {
    //get local player and weapon
    var me = Entity.GetLocalPlayer();
    var wpn = Entity.GetWeapon(me);

    //if player and weapon is invalid for some reason
    if (me == null || wpn == null)
    {
        return false;
    }

    
    var tickbase = Entity.GetProp(me, "CCSPlayer", "m_nTickBase");
    var curtime = Globals.TickInterval() * (tickbase-ticks_to_shift)

    if (curtime < Entity.GetProp(me, "CCSPlayer", "m_flNextAttack"))
    {
        return false;
    }

    if (curtime < Entity.GetProp(wpn, "CBaseCombatWeapon", "m_flNextPrimaryAttack"))
    {
        return false;
    }

    return true;
}

//on cm
function _TBC_CREATE_MOVE() {
    var is_charged = Exploit.GetCharge()

    Exploit[(is_charged != 1 ? "Enable" : "Disable") + "Recharge"]()

    if (can_shift_shot(16) && is_charged != 1) {
        Exploit.DisableRecharge();
        Exploit.Recharge()
    }

    Exploit.OverrideTolerance(0);
    Exploit.OverrideShift(17);
}

//on unload
function _TBC_UNLOAD() {
    Exploit.EnableRecharge();
}

Cheat.RegisterCallback("CreateMove", "_TBC_CREATE_MOVE");
Cheat.RegisterCallback("Unload", "_TBC_UNLOAD");

