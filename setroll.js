UI.AddSliderInt( [ "Scripts", "Keys"], "roll", -180, 180 )

function getVelocity() {
	var velocity = Entity.GetProp(Entity.GetLocalPlayer(), "CBasePlayer", "m_vecVelocity[0]");
	return Math.sqrt(velocity[0] * velocity[0] + velocity[1] * velocity[1]);
}
function SetRoll()
{
    var roll = UI.GetValue(["Scripts", "Keys", "roll"]);
    
    if(getVelocity() < 5)
    {
        currentAngles = Local.GetViewAngles()
        UserCMD.SetViewAngles([currentAngles[0], currentAngles[1], roll])
    }
    
}



