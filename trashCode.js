/*
const TYPE_SUBTAB=0;
const TYPE_TEXTBOX=1;
const TYPE_COLORPICKER=2;
const TYPE_MULTIDROPDOWN=3;
const TYPE_DROPDOWN=4;
const TYPE_HOTKEY=5;
const TYPE_SLIDERFLOAT=6;
const TYPE_SLIDERINT=7;
const TYPE_CHECKBOX=8;
const TYPE_SEPERATOR=9;
*/
//pointless dont use
//ok this is pasted
//make the ui load this shit instead, to avoid fuckery
//i didnt paste this from dhdj, i promise :(


//ACTS LIKE A PROXY FOR VARS<---->UI SETTINGS, SO I DONT END UP BREAKING MY BRAIN
/*
var UI_SETTINGS=
{
    JS_SETTINGS :
    {
        PATH : main_path
    },

    AA_SETTINGS : 
    {
        PATH : aa_path,
        //uses index of presets cuz it will fuck shit up if i dont
        ACTIVE_PRESET : 0,
        DROPDOWNS : 
        {
            //mode tabs
            realModeValue :
            {
                NAME : "Real Mode",
                VALUE : 0,
            },
            fakeModeValue :
            {
                NAME : "Fake Mode",
                VALUE : 0,
            },
            LBYModeValue :
            {
                NAME : "LBY Mode",
                VALUE : 0,
            },
            
            //switch tabs
            realSwitchValue :
            {
                NAME : "Real Switch Phase",
                VALUE : 0,
            },
            fakeSwitchValue :
            {
                NAME : "Fake Switch Phase",
                VALUE : 0,
            },
            LBYSwitchValue :
            {
                NAME : "LBY Switch Phase",
                VALUE : 0,
            },
        },

        //SLIDERS
        //number of switch phases
        SLIDERS : 
        {
            maxRealSwitchValue :
            {
                NAME : "Active Real Switch Phases",
                VALUE : 0,
            },
            maxFakeSwitchValue :
            {
                NAME : "Active Fake Switch Phases",
                VALUE : 0,
            },
            maxLBYSwitchValue :
            {
                NAME : "Active LBY Switch Phases",
                VALUE : 0,
            },
            //offsets
            realOffset : 
            {
                NAME : "Real Offset",
                VALUE : 0,
            },

            fakeOffset : 
            {
                NAME : "Fake Offset",
                VALUE : 0,
            },
            LBYOffset : 
            {
                NAME : "LBY Offset",
                VALUE : 0,
            },

            //deltas
            realDelta : 
            {
                NAME : "Real Delta",
                VALUE : 0,
            },

            fakeDelta : 
            {
                NAME : "Fake Delta",
                VALUE : 0,
            },
            LBYDelta : 
            {
                NAME : "LBY Delta",
                VALUE : 0,
            },

            //delays
            realDelay : 
            {
                NAME : "Real Delay",
                VALUE : 0,
            },

            fakeDelay : 
            {
                NAME : "Fake Delay",
                VALUE : 0,
            },
            LBYDelay : 
            {
                NAME : "LBY Delay",
                VALUE : 0,
            },
            //delay offsets
            realDelayOffset : 
            {
                NAME : "Real Delay Offset",
                VALUE : 0,
            },

            fakeDelayOffset : 
            {
                NAME : "Fake Delay Offset",
                VALUE : 0,
            },
            LBYDelayOffset : 
            {
                NAME : "LBY Delay Offset",
                VALUE : 0,
            },
        }
        

    },

    AA_MANAGER_SETTINGS :
    {
        PATH : aa_control_path,
        
    },

    VISUALS_SETTINGS :
    {

    }

};
*/
//nvm lol
//


//retard var decls
var lastHitTime = 0.0;

var lastImpactTimes = [0.0];
//why
var lastImpacts =[[0.0, 0.0, 0.0]];

//function gets called when ANY player gets hurt
function OnHurt()
{
    //if the player that got hurt isnt local player
    if (Entity.GetEntityFromUserID(Event.GetInt("userid")) !== Entity.GetLocalPlayer()) return;

        //from player_hurt event
        var hitbox = Event.GetInt('hitgroup');
        //if hit head or legs(kek)
        if (hitbox == 1 || hitbox == 6 || hitbox == 7)
        {
            var curtime = Global.Curtime();
            // if didnt switch in the last .5 secs ig
            if (Math.abs(lastHitTime - curtime) > 0.5)
            {
                lastHitTime = curtime;
                antiBruteSwitch=true;
            }
        }
  
  
}
function OnBulletImpact()
{

    var curtime = Global.Curtime();
    //doesnt switch again if switched in the last .5 secs
    if (Math.abs(lastHitTime - curtime) < 0.5) return;

    var entity = Entity.GetEntityFromUserID(Event.GetInt("userid"));
    var impact = [Event.GetFloat("x"), Event.GetFloat("y"), Event.GetFloat("z"), curtime];

    //whats this
    //nvm its bullt source
    var source;
    
    //if bullet comes from enemy
    if (Entity.IsValid(entity) && Entity.IsEnemy(entity))
    {
        //if enemy isnt dormant
        if (!Entity.IsDormant(entity))
        {
            //get the source of the bullet(enemy eye pos)
            source = Entity.GetEyePosition(entity);
        }
        //
        else if (Math.abs(lastImpactTimes[entity] - curtime) < 0.1)
        {
            //whats this?
            //why is the index "entity" when the array contains coordinate values?
            source = lastImpacts[entity];
        }
        else
        {
            lastImpacts[entity] = impact;
            lastImpactTimes[entity] = curtime;
            return;
        }
        //variable stuff ig, no idea what some of them are
        //NVM, THIS SHIT IS SO FUNNY HAHHAHA
        //only bodydist is actually used, everything else is basically placeholders rofll
        var local = Entity.GetLocalPlayer();
        var localEye = Entity.GetEyePosition(local);
        //var localOrigin = Entity.GetProp(local, "CBaseEntity", "m_vecOrigin");

        var headDist=pointRayDistance(localEye,source,impact)

        
        if(headDist<100.0)
        {
            doSwitch=true;
        }

        
        

      
        //if bullet went close to the player BODY
        /*
        if (bodyDist < 85.0)
        {
            var realAngle = Local.GetRealYaw();
            var fakeAngle = Local.GetFakeYaw();
            //get bullet dist from head
            var headVec = ClosestPointOnRay(localEye, source, impact);
            var headDist = VectorDistance(localEye, headVec);

            //get bullet dist from feet(lmao)
            var feetVec = ClosestPointOnRay(localOrigin, source, impact);
            var feetDist = VectorDistance(localOrigin, feetVec);
            var closestRayPoint;
            var realPos;
            var fakePos;
            //no idea what this is
            if (bodyDist < headDist && bodyDist < feetDist)
            {            
                closestRayPoint = bodyVec;
                realPos = ExtendVector(bodyVec, realAngle + 180.0, 10.0);
                fakePos = ExtendVector(bodyVec, fakeAngle + 180.0, 10.0);
            }
            else if (feetDist < headDist)
            {                         
                closestRayPoint = feetVec;
                var realPos1 = ExtendVector(bodyVec, realAngle - 30.0 + 60.0, 10.0);
                var realPos2 = ExtendVector(bodyVec, realAngle - 30.0 - 60.0, 10.0);
                var fakePos1 = ExtendVector(bodyVec, fakeAngle - 30.0 + 60.0, 10.0);
                var fakePos2 = ExtendVector(bodyVec, fakeAngle - 30.0 - 60.0, 10.0);
                if (VectorDistance(feetVec, realPos1) < VectorDistance(feetVec, realPos2))
                {
                    realPos = realPos1;
                }
                else
                {
                    realPos = realPos2;
                }
                if (VectorDistance(feetVec, fakePos1) < VectorDistance(feetVec, fakePos2))
                {
                    fakePos = fakePos1;
                }
                else
                {
                    fakePos = fakePos2;
                }
            }
            else                         
            {
                closestRayPoint = headVec;
                realPos = ExtendVector(bodyVec, realAngle, 10.0);
                fakePos = ExtendVector(bodyVec, fakeAngle, 10.0);
            }
            headDist = headDist.toFixed(1);

            //if bullet shot closer to fake
            if (VectorDistance(closestRayPoint, fakePos) < VectorDistance(closestRayPoint, realPos))
            {
                lastHitTime = curtime;

                antiBruteSwitch=true;
            }
        }
        lastImpacts[entity] = impact;
        lastImpactTimes[entity] = curtime;
        */
    }
}
