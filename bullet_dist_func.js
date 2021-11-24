
function vectorFromCoords(a,b)
{
    return [a[0]-b[0],a[1]-b[1],a[2]-b[2]];
}
function vectorLength(a)
{
    return Math.sqrt(a[0]**2+a[1]**2+a[2]**2)
}
function dotProduct(a,b)
{
    return a[0]*b[0]+a[1]*b[1]+a[2]*b[2];
}

function OnBulletImpact()
{
    var entity = Entity.GetEntityFromUserID(Event.GetInt("userid"));
    var impact = [Event.GetFloat("x"), Event.GetFloat("y"), Event.GetFloat("z")];

   
    var localEye = Entity.GetEyePosition(Entity.GetLocalPlayer());
    //if entity valid and is enemy
    if (Entity.IsValid(entity) && Entity.IsEnemy(entity))
    {
        //if enemy isnt dormant
        if (!Entity.IsDormant(entity))
        {
            //get the source of the bullet(enemy eye pos)
            source = Entity.GetEyePosition(entity);
            

            sourceToImpact=vectorFromCoords(localEye,impact)
            sourceToPlayer=vectorFromCoords(localEye,localEye)

            toPlayerLength=vectorLength(sourceToPlayer)
            toImpactLength=vectorLength(sourceToImpact)
            dotProd=dotProduct(sourceToPlayer,sourceToImpact)
            if(dotProd<=0)
            {
                Cheat.Print("noones shooting at u lol"+"\n")
            }
            else
            {
                dotLength=dotProd/toImpactLength;
                distance=toString(Math.sqrt(toPlayerLength**2-dotLength**2))
                
                
                Cheat.Print(distance);
                Cheat.Print("\n");
            }

        }
    }

}


Cheat.RegisterCallback("bullet_impact", "OnBulletImpact");