
function hitscan(origin, target, hitboxes)
{
    if(Entity.IsValid(target) == true && Entity.IsAlive(target) && Entity.IsDormant(target) == false)
    {
        localPlayer = Entity.GetLocalPlayer()
        maxDmg = -1;
        currentDmg = -1;
        for(var i in hitboxes)
        {
            currentDmg = Trace.Bullet(localPlayer, target, origin, Entity.GetHitboxPosition(target, hitboxes[i]))
            //overrides the maxdmg thing if damage is increased relative to previous results
            maxdmg = currentDmg > maxDmg ? currentDmg : maxDmg
            //did i do this right? i hope i did....

        }
        //Cheat.Print(Entity.GetName(target).toString()+"'s maxdmg is"+ maxDmg.toString()+"\n")
        return maxDmg;
    }   
    else 
    {
        //Cheat.Print("Entity "+Entity.GetName(target).toString()+" is invalid or dormant \n")
        return -1;
    }
}