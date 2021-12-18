const { Entity } = require("./onetap");

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