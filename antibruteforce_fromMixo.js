//courtesy to mixologist(srsly tho ty for figuring the if player is hit thing)
//time to decipher this shit lmfao


//ABORTED DECIPHERING DUE TO BEING RETARDED AT MATH(sad)
//CORE FUNCTION AT LINE 68

//do output in line 145 and line 269

//adding ui elements
UI.AddSubTab(["Rage", "SUBTAB_MGR"], "MIXO-YAW");
UI.AddCheckbox(["Rage", "MIXO-YAW", "MIXO-YAW"], "Anti bruteforce");

//deg2rad function

function radian(degree)
{
    return degree * Math.PI / 180.0;
}
function ExtendVector(vector, angle, extension)
{
    //get angle in radians
    var radianAngle = radian(angle);
    
    return [extension * Math.cos(radianAngle) + vector[0], extension * Math.sin(radianAngle) + vector[1], vector[2]];
}

//vector calc functions
function VectorAdd(a, b)
{
    return [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
}
function VectorSubtract(a, b)
{
    return [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
}
function VectorMultiply(a, b)
{
    return [a[0] * b[0], a[1] * b[1], a[2] * b[2]];
}

//get abseloute vector magnitude
function VectorLength(x, y, z)
{
    return Math.sqrt(x * x + y * y + z * z);
}


//dont know what exactly this is, but it is somewhat related to getting the "abseloute direction" of a given vector(for example[1,2]returns the same value of[2,4])
function VectorNormalize(vec)
{
    var length = VectorLength(vec[0], vec[1], vec[2]);
    return [vec[0] / length, vec[1] / length, vec[2] / length];
}
//damn i need to get better at vectors tbh

//OK I KNOW WHAT THIS IS
//DOT PRODUCT: PROJECTION OF A VECTOR TO ANOTHER * OTHER VECTOR

function VectorDot(a, b)
{
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}
function VectorDistance(a, b)
{
    return VectorLength(a[0] - b[0], a[1] - b[1], a[2] - b[2]);
}

//REAL SHIT

function ClosestPointOnRay(target, rayStart, rayEnd)
{
    //delta of the vectors(range that bullet travels)
    
    var to = VectorSubtract(target, rayStart);
    var dir = VectorSubtract(rayEnd, rayStart);
    //length of bullet beam
    var length = VectorLength(dir[0], dir[1], dir[2]);
    
    //proving my theory that this is some sort of "abseloute direction"
    dir = VectorNormalize(dir);

    //dot product of the enemy bullet beam to enemy--> player
    var rangeAlong = VectorDot(dir, to);


    //these check for if angle between 2 rays >90
    if (rangeAlong < 0.0)
    {
        return rayStart;
    }
    if (rangeAlong > length)
    {
        return rayEnd;
    }

    //WHAT. IS. THIS. 
    //Seriously, what the fuck is this???
    //goddamn fucking chink, confuses me on the VERY FUCKING LAST PART OF THIS SHIT REEEEEEEEEEEEEEEEEEEEEEEE
    
    //ok....? I kinda know what this, but shouldnt it be vector subtract or something?
    return VectorAdd(rayStart, VectorMultiply(dir, [rangeAlong, rangeAlong, rangeAlong]));
}



//retard var decls
var lastHitTime = 0.0;

//HAHAHA look at this shit, tfw u indent a single fucking array lmfao
var lastImpactTimes =
[
    0.0
];
var lastImpacts =
[
    [0.0, 0.0, 0.0]
];

//function gets called when ANY player gets hurt
function OnHurt()
{
    //break if antibrute not enabled(lol)
    if (!UI.GetValue(["Rage", "MIXO-YAW", "MIXO-YAW", "Anti bruteforce"])) return;

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
                //OUTPUT OF THIS WHOLE THING IS HERE:::




                //change this to whatever ur using to switch directions/mode(maybe add a counter)
                UI.ToggleHotkey(["Rage", "Anti Aim", "General", "Key assignment", "AA Direction inverter"])




                //Cheat.PrintChat("\x04 [MIXO-YAW] \x02On Hit Anti MIXO-YAW\n")
            }
        }
  
  
}
function OnBulletImpact()
{

    //again, break if not enabled
    if (!UI.GetValue(["Rage", "MIXO-YAW", "MIXO-YAW", "Anti bruteforce"])) return;

    var curtime = Global.Curtime();

    //doesnt switch again if switched in the last .5 secs
    if (Math.abs(lastHitTime - curtime) < 0.5) return;

    var entity = Entity.GetEntityFromUserID(Event.GetInt("userid"));
    var impact = [Event.GetFloat("x"), Event.GetFloat("y"), Event.GetFloat("z"), curtime];

    //whats this
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
        var localOrigin = Entity.GetProp(local, "CBaseEntity", "m_vecOrigin");
        var localBody = VectorMultiply(VectorAdd(localEye, localOrigin), [0.5, 0.5, 0.5]);
        
        
        var bodyVec = ClosestPointOnRay(localBody, source, impact);
        var bodyDist = VectorDistance(localBody, bodyVec);
      
        //if bullet went close to the player BODY
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

                


                UI.ToggleHotkey(["Rage", "Anti Aim", "General", "Key assignment", "AA Direction inverter"])
                //Cheat.PrintChat("\x04 [MIXO-YAW Anti brute] 子弹与头部距离 "+headDist+"\n")
            }
        }
        lastImpacts[entity] = impact;
        lastImpactTimes[entity] = curtime;
    }
}

Cheat.RegisterCallback("player_hurt", "OnHurt");
Cheat.RegisterCallback("bullet_impact", "OnBulletImpact");