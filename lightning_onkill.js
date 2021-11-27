function onPlayerDeath()
{
    var local = Entity.GetLocalPlayer();
    //player that died
    var entity = Entity.GetEntityFromUserID(Event.GetInt("userid"));
    if(Entity.GetEntityFromUserID(Event.GetInt("attacker"))==local)
    {
        World.CreateLightningStrike(true,Entity.GetRenderOrigin( entity ));
    }

}

Cheat.RegisterCallback("player_death","onPlayerDeath")