//TODO:
//antibruteforce(bullet_impact event)

//TODO: check for slowwalk keybind name

//TODO: check if aa inverter inverts overridden aa DONE. IT DOESNT.



//TODO: ui updates
        //verify auth intergity with password

//POTENTIAL FIX FOR ARRAYS: make function that populates AA[index] with THE ARRAY, not the template array variable
//same goes with aa preset manager(use for loop)

//POTENTIAL FL+RAGE SOLUTION
//Hiding the ui elements of said items but tewaking their values might work...?

//UI Subtabs
//Config Password
UI.AddSubTab( [ "Config","SUBTAB_MGR" ], "Secrets");
//js subtab
UI.AddSubTab([ "Config","SUBTAB_MGR" ],"mana.js 1.0")
//aa subtab
UI.AddSubTab([ "Rage","SUBTAB_MGR" ],"Custom Anti-Aim")
UI.AddSubTab([ "Rage","SUBTAB_MGR",],"AA Preset Manager")


//CALC FUNCTIONS




//Config

//AUTH SYSTEM
    



//handles save file to usable data




/*Index explanations:
    AA[i]:preset number

        AA[i][0]: Misc settings(at targets, auto dir, etc)

        AA[i][1][x]:values for static
            0: real offset
            1: fake offset
            2: lby offset


        
        AA[i][2][x]:values for jitter
            0: real offset
            1: fake offset
            2: lby offset

            3: real jitter
            4: fake jitter
            5: lby jitter

            6: real randomized intervals(1 or 0)
            7: fake randomized intervals(1 or 0)
            8: lby randomized intervals(1 or 0)

            9: real jitter delay
            10: fake jitter delay 
            11: lby jiter delay

            12: real jitter interval offset
            13. fake jitter interval offset
            14. lby jitter interval offset


        
        AA[i][3][x]: values for switch
            AA[i][2][0]: values for real offset
            AA[i][2][1]: values for fake offset
            AA[i][2][2]: values for lby offset
            
            AA[i][2][3]: values for max index of switch

            (delay[0]=time between 0--->1)
            AA[i][2][4]: values for real offset switch delay
            AA[i][2][5]: values for fake offset switch delay
            AA[i][2][6]: values for lby offset switch delay

            

        AA[i][4][x]: values for sway
            0: real start
            1: fake start
            2: lby start

            //calculated internally
            3: real delta
            4: fake delta
            5: lby delta
        
           
            6: real sway time
            7: fake sway time
            8: lby sway time
            

            
        AA[i][5][x]: values for random
            0: real offset
            1: fake offset
            2: lby offset
            3: real delta
            4: fake delta
            5: lby delta

            6: real randomized intervals(1 or 0)
            7: fake randomized intervals(1 or 0)
            8: lby randomized intervals(1 or 0)

            9: real delay
            10: fake delay
            11: lby delay

            12: real randomize interval offset
            13. fake randomize interval offset
            14. lby randomize interval offset
    


        AA[i][6][x]: active mode(0=static,1=jitter,2=switch,3=sway,4=random) for real(0),fake(1), and lby(2)



        AA[i][7]: name of aa preset
*/

/*
ALSO ADD FORCE SWITCH KEY

AA_MANAGER index explanations

0=Standing 
1=Running 
2=Slow-Walking
3=Crouching 
4=In Air 
5=On Peek 
6=Fake-Ducking
7:HS Active
8:DT Active
9:On Use
10:Knifing
11:Zeusing
12:Override Key 1 
13:Override Key 2     
14:Override Key 3
15:Override Key 4


[i][0]: General Settings:
    0: no/conditional switch(only when antibruteforce)
    1: sequenced switch
    2: random switch

[i][1]:
    0: no antibruteforce
    1: complex antibruteforce(forces an aa switch,if switch enabled)

[i][2]:
    INT representing active multidropdown options

[i][3]: Switch Delay

[i][4]: Switch Delta


RENDERING SETTINGS
[0]: general settings

*/

//hey, if ur not using my aa, then FUCK YOU
//not making a toggle for custom aa, if u dont know what I meant
//ahhhhh finally
//my eyes and brain
var presetTemplate = {
    general : [0],//general settings(pitch, at targets, etc)
    staticSettings : 
    {
        realOffset : 0,
        fakeOffset : 0,
        LBYOffset : 0
    },
    jitterSettings : 
    {
        realOffset : 0,
        fakeOffset : 0,
        LBYOffset : 0,

        realDelta : 0,
        fakeDelta : 0,
        LBYDelta : 0,

        realDelay : 0,
        fakeDelay : 0,
        LBYDelay : 0,

        //RANDOMIZE WHEN NONZERO, EZPZ
        realDelayOffset : 0,
        fakeDelayOffset : 0,
        LBYDelayOffset : 0,
    },
    switchSettings : 
    {
        realOffset : [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],//real
        fakeOffset : [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],//fake
        LBYOffset : [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],//lby

        realDelay : [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],//real delay
        fakeDelay : [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],//fake delay
        LBYDelay : [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],//lby delay

        activePhases : [1,1,1],//real,fake,lby max index of phase
        
    },
    swaySettings : 
    {
        realOffset : 0,
        fakeOffset : 0,
        LBYOffset : 0,

        realDelta : 0,
        fakeDelta : 0,
        LBYDelta : 0,

        realDelay : 0,
        fakeDelay : 0,
        LBYDelay : 0,
    },
    randomSettings : 
    {
        realOffset : 0,
        fakeOffset : 0,
        LBYOffset : 0,

        realDelta : 0,
        fakeDelta : 0,
        LBYDelta : 0,

        realDelay : 0,
        fakeDelay : 0,
        LBYDelay : 0,

        //RANDOMIZE WHEN NONZERO, EZPZ
        realDelayOffset : 0,
        fakeDelayOffset : 0,
        LBYDelayOffset : 0,

    },
    modes : [0,0,0],//active modes

    presetName : "Mana Default AA"
    //self explanatory
}
var AA=
[
    JSON.parse(JSON.stringify(presetTemplate))
];

/*
var a1 =
{
    switchMode : 0,
    dodgeBruteforce : 0,
    activePresets : 0,
    switchDelay : 0,
    switchDelta : 0,
}
*/
//rework this for obvious reasons
//im fine with ids representing unimportant values
//I GET TO DECIDE WHT IS AND ISNT BTW
var AA_MANAGER=
{
    dormant : 
    {
        switchConditions : 0,
        antiBruteforce : 0,
        activePresets : 0,
        delay : 0,
        delayDelta : 0,
    },
    running : 
    {
        switchConditions : 0,
        antiBruteforce : 0,
        activePresets : 0,
        delay : 0,
        delayDelta : 0,
    },
    crouching : 
    {
        switchConditions : 0,
        antiBruteforce : 0,
        activePresets : 0,
        delay : 0,
        delayDelta : 0,
    },
    peeking : 
    {
        switchConditions : 0,
        antiBruteforce : 0,
        activePresets : 0,
        delay : 0,
        delayDelta : 0,
    },
    inAir : 
    {
        switchConditions : 0,
        antiBruteforce : 0,
        activePresets : 0,
        delay : 0,
        delayDelta : 0,
    },
    doubleTapActive : 
    {
        switchConditions : 0,
        antiBruteforce : 0,
        activePresets : 0,
        delay : 0,
        delayDelta : 0,
    },
    hideShotsActive : 
    {
        switchConditions : 0,
        antiBruteforce : 0,
        activePresets : 0,
        delay : 0,
        delayDelta : 0,
    },
    zeusing : 
    {
        switchConditions : 0,
        antiBruteforce : 0,
        activePresets : 0,
        delay : 0,
        delayDelta : 0,
    },
    knifing : 
    {
        switchConditions : 0,
        antiBruteforce : 0,
        activePresets : 0,
        delay : 0,
        delayDelta : 0,
    },
    fakeDucking : 
    {
        switchConditions : 0,
        antiBruteforce : 0,
        activePresets : 0,
        delay : 0,
        delayDelta : 0,
    },
    slowWalking : 
    {
        switchConditions : 0,
        antiBruteforce : 0,
        activePresets : 0,
        delay : 0,
        delayDelta : 0,
    },
    onUse : 
    {
        switchConditions : 0,
        antiBruteforce : 0,
        activePresets : 0,
        delay : 0,
        delayDelta : 0,
    },
    override1 : 
    {
        switchConditions : 0,
        antiBruteforce : 0,
        activePresets : 0,
        delay : 0,
        delayDelta : 0,
    },
    override2 : 
    {
        switchConditions : 0,
        antiBruteforce : 0,
        activePresets : 0,
        delay : 0,
        delayDelta : 0,
    },
    override3 : 
    {
        switchConditions : 0,
        antiBruteforce : 0,
        activePresets : 0,
        delay : 0,
        delayDelta : 0,
    },
    override4 : 
    {
        switchConditions : 0,
        antiBruteforce : 0,
        activePresets : 0,
        delay : 0,
        delayDelta : 0,
    }
}

var RAGEBOT=[];


//
var RENDER=
[
    //GENERAL SETTINGS
    //REMEMBER THE 255 CHAR LIMIT PLEASE
    {
    indicators : 0,
    crosshairIndicators : 0,
    customCrosshair: 0,
    rechargeBar : 0,
    rainbowMenuFrame : 0,
    },
    //MULTIDROPDOWN SETTINGS(WHICH INDICTS TO TOGGLE, ETC)
    {
        activeIndicators : 0,
        activeCrosshairIndicators : 0,

    }

];
//config owner, password
var SECRETS=["manaball123","configPass"]

var configName="Mana"

//USE JSON.PARSE AND STRINGTIFY
function NOT(variable)
{
    return variable == 1 ? 0 : 1;
}
function saveConfig()
{
    Datafile.SetKey(configName,"AA",JSON.stringify(AA));
    Datafile.SetKey(configName,"AA_MANAGER",JSON.stringify(AA_MANAGER));
    Datafile.SetKey(configName,"SECRETS",JSON.stringify(SECRETS))

}
function loadConfig()
{

    AA=JSON.parse(Datafile.GetKey(configName,"AA"));
    AA_MANAGER=JSON.parse(Datafile.GetKey(configName,"AA_MANAGER"));
    SECRETS=JSON.parse(Datafile.GetKey(configName,"SECRETS"));
}

function zeroToNegOne(variable)
{
    return variable == 0 ? -1 : 1;
}

function clampTo(variable,to,mode)
{
    if(mode==0)
    {
        
        return variable<to ? to : variable;
    }
    else
    {
        return variable>to ? to : variable;
    }
}

//deg2rad function

function DEG2RAD(degree)
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
function VectorLength(a)
{
    return Math.sqrt(a[1]**2+a[2]**2+a[3]**2);
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
function ANGLE2VEC(angle) {
	var pitch = angle[0];
	var yaw = angle[1];
	return [Math.cos(DEG2RAD(pitch)) * Math.cos(DEG2RAD(yaw)), Math.cos(DEG2RAD(pitch)) * Math.sin(DEG2RAD(yaw)), -Math.sin(DEG2RAD(pitch))];
}
//REAL SHIT
//recoding this, confusing af
function pointRayDistance(point, rayStart, rayEnd)
{
    //delta of the vectors(range that bullet travels)
    
    var startToPoint = VectorSubtract(point, rayStart);
    var startToEnd = VectorSubtract(rayEnd, rayStart);
    //length of bullet beam
    var rayLength = VectorLength(startToEnd);
    var pointLength = VectorLength(startToPoint)
    
    //proving my theory that this is some sort of "abseloute direction"

    //dot product of the enemy bullet beam to enemy--> player
    var dotProduct = VectorDot(startToPoint, startToEnd);
    var sideLength = dotProduct/rayLength


    //these check for if angle between 2 rays >90 or point too far
    if (dotProduct < 0.0)
    {
        return rayStart;
    }
    if (sideLength > rayLength)
    {
        return rayEnd;
    }

    return sqrt(pointLength**2-sideLength**2)
}

//Paths

const main_path=["Config","SUBTAB_MGR","mana.js 1.0","SHEET_MGR","mana.js 1.0"];
const aa_path=["Rage","SUBTAB_MGR","Custom Anti-Aim","Custom Anti-Aim"];
const aa_control_path=["Rage","SUBTAB_MGR","AA Preset Manager","AA Preset Manager"];
const rage_keybinds=["Rage", "SUBTAB_MGR", "General", "SHEET_MGR", "General", "Key assignment"];
const aa_keybinds=["Rage", "SUBTAB_MGR", "Anti Aim", "SHEET_MGR", "General","Key assignment"];
const exploits_keybinds=["Rage", "SUBTAB_MGR", "Exploits", "SHEET_MGR", "Keys","Key assignment"];
const aa_default_path=["Rage", "SUBTAB_MGR", "Anti Aim", "SHEET_MGR", "Directions"];
const secrets_path=[ "Config","SUBTAB_MGR","Secrets","SHEET_MGR","Secrets"];


//vars
const screen_size = Render.GetScreenSize();
var presetCache=99;

var realModeCache=99;
var fakeModeCache=99;
var LBYModeCache=99;

var presetVal=0;
//forces an update
var realModeVal=0;
var fakeModeVal=0;
var LBYModeVal=0;



//forces an update
var realSwitchCache=99;
var fakeSwitchCache=99;
var LBYSwitchCache=99;

var realSwitchVal=0;
var fakeSwitchVal=0;
var LBYSwitchVal=0;

var modeVal=0;
var modeCache=0;

var uiUpdate=false;
var presetUpdate=false;

var currentAAMode=0;
var cachedAAMode=0;



var modeCounter=0;
var modeTimer=0.0;
var modeOffset=0.0;

var initAA=true;
var initializePresets=true;

var presetNames=["Mana Default AA"];

//timers:
//0=real,1=fake,2=lby
var jitterTimer=[Globals.Tickcount(),Globals.Tickcount(),Globals.Tickcount()];
var switchTimer=[Globals.Tickcount(),Globals.Tickcount(),Globals.Tickcount()];
var swayTimer=[Globals.Tickcount(),Globals.Tickcount(),Globals.Tickcount()];
var randomTimer=[Globals.Tickcount(),Globals.Tickcount(),Globals.Tickcount()];
var swayCycleTimer=[0,0,0];

var currentTime=Globals.Tickcount();
var jitterTimeOffset=[0,0,0];
var jitterPhaseCounter=[0,0,0];
var switchPhaseCounter=[0,0,0];
var randomTimeOffset=[0,0,0];
var randomOffsetHolder=[0,0,0];

var doSwitch=false;


//indicator settings
//PERFECT THIS THING BEFORE STRUCTURING IT
//general settings

//multidropdown setting
var rainbowBars=0;

var crosshairLength=100;
var crosshairDist=10;
var crosshairThickness=2;


//colors are gonna be a BIG CONCERN due to the fucky nature of it
//u can only fit 14 colors in a key, which means that we HAVE TO SPLIT IT INTO ARRAYS :(
var crosshairColor1=[255,255,255,255];
var crosshairColor2=[255,255,255,255];



//UI Elements
//password
UI.AddCheckbox(secrets_path,"Protect Config With Password")
UI.AddTextbox(secrets_path,"Config Password:");
UI.AddCheckbox(secrets_path,"Save Password")
//update config settings
UI.AddCheckbox(main_path,"UPDATE CONFIG");

//aa settings(presets and stuff)
UI.AddDropdown(aa_path,"Presets",presetNames,0);
UI.AddTextbox(aa_path,"Rename Selected Preset:");
UI.AddCheckbox(aa_path,"Confirm");
//real
UI.AddDropdown(aa_path,"Real Mode",["Static","Jitter","Switch","Sway","Random"],0);
UI.AddDropdown(aa_path,"Real Switch Phase",["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16"],0);
UI.AddSliderInt(aa_path,"Active Real Switch Phases",1,16);
UI.AddSliderInt(aa_path,"Real Offset",-60,60);
UI.AddSliderInt(aa_path,"Real Delta",-60,60);
UI.AddSliderInt(aa_path,"Real Delay",1,256);
UI.AddSliderInt(aa_path,"Real Delay Offset",1,128);

//fake
UI.AddDropdown(aa_path,"Fake Mode",["Static","Jitter","Switch","Sway","Random"],0);
UI.AddDropdown(aa_path,"Fake Switch Phase",["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16"],0);
UI.AddSliderInt(aa_path,"Active Fake Switch Phases",1,16);
UI.AddSliderInt(aa_path,"Fake Offset",-180,180);
UI.AddSliderInt(aa_path,"Fake Delta",-180,180);
UI.AddSliderInt(aa_path,"Fake Delay",1,256);
UI.AddSliderInt(aa_path,"Fake Delay Offset",1,128);

//lby
UI.AddDropdown(aa_path,"LBY Mode",["Static","Jitter","Switch","Sway","Random"],0);
UI.AddDropdown(aa_path,"LBY Switch Phase",["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16"],0);
UI.AddSliderInt(aa_path,"Active LBY Switch Phases",1,16);
UI.AddSliderInt(aa_path,"LBY Offset",-60,60);
UI.AddSliderInt(aa_path,"LBY Delta",-60,60);
UI.AddSliderInt(aa_path,"LBY Delay",1,256);
UI.AddSliderInt(aa_path,"LBY Delay Offset",1,128);

//preset interface
UI.AddTextbox(main_path,"New Preset Name:");
UI.AddCheckbox(main_path,"Create New Preset");
UI.AddCheckbox(main_path,"SAVE CONFIG")
UI.AddCheckbox(main_path,"Config Name:")

//preset management interface
UI.AddDropdown(aa_control_path, "Conditions" ,["Standing","Running","Slow-Walking","Crouching","In Air","On Peek","Fake-Ducking","HS Active","DT Active","On Use","Knifing","Zeusing","Override Key 1","Override Key 2","Override Key 3","Override Key 4"],0);
UI.AddDropdown(aa_control_path, "Switch" , ["Conditional","Sequenced","Random"],0);
UI.AddCheckbox(aa_control_path, "Anti Bruteforce");
UI.AddMultiDropdown(aa_control_path, "Presets" ,presetNames);
UI.AddSliderInt(aa_control_path, "Switch Delay" , 1 , 256);
UI.AddSliderInt(aa_control_path,"Switch Delta" ,1 , 256);

//keybinds
UI.AddHotkey(rage_keybinds,"AA Override Key 1" , "AA 1");
UI.AddHotkey(rage_keybinds,"AA Override Key 2" , "AA 2");
UI.AddHotkey(rage_keybinds,"AA Override Key 3" , "AA 3");
UI.AddHotkey(rage_keybinds,"AA Override Key 4" , "AA 4");




//converts internal index to user-named aa presets
//GODDAMN THIS FUNCTION

function setDropdownValue(value, index, enable) 
{ // credits ed
    var mask = 1 << index;
  
    return enable ? ( value | mask ) : ( value & ~mask );
}

function getDropdownValue(value, index)
{
    var mask = 1 << index;
    return value & mask ? true : false;
}

function getValueFromCounter(value, varConter, maxIndex)
{
    if(value==0)
    {
        return 0;
    }
    var i=0
    var found=0
    //there are 2 seperate parameters
    //1. i must be less or equal to maxIndex
    //2. a "true" must be found varCounter times before returning the index counter
    while(true)
    {
        //should not be called, but in case something goes wrong
        if(i > maxIndex)
        {
            i=0;
        }
        if(getDropdownValue(value, i))
        {
            found++;
            if(found > varConter)
            {
                return i;
            }
        }
        i++;
    }

}

function addAAPreset(index, newPresetName)
{
    AA[index] = JSON.parse(JSON.stringify(presetTemplate))
    AA[index].presetName = newPresetName;
    
}



function updatePresetNames()
{
    presetNames=[]
    for(i = 0; i < AA.length; i++)
    {
        presetNames[i] = AA[i].presetName      
    }
    

    UI.UpdateList(aa_path.concat("Presets"),presetNames);
    UI.UpdateList(aa_control_path.concat("Presets"),presetNames);


}

//the reason this is a thing is due to how resource intensive it is to read a ton of sliders every single tick
//so sliders are essentially just an interface and youd actually have to update a config for it to work
function updateConfig()
{
    //Cheat.Print(UI.GetValue(aa_path.concat("Presets")).toString());
     
    
    if(UI.GetValue(main_path.concat("UPDATE CONFIG"))==1)
    {
        // do magic here
        if(UI.GetValue(secrets_path.concat("Protect Config With Password"))==1)
        {
                                                                                                                                                                                                                      
            
        }

        uiUpdate=false;
        presetUpdate=false;
        if(initAA==true)
        {
            initAA=false;
            UI.SetValue(aa_default_path.concat("Yaw offset"),0);
            UI.SetValue(aa_default_path.concat("Jitter offset"),0);
            UI.SetEnabled(aa_default_path.concat("Yaw offset"),0);
            UI.SetEnabled(aa_default_path.concat("Jitter offset"),0);
            updatePresetNames();
        }

        
        presetVal=UI.GetValue(aa_path.concat("Presets"));
        if(presetVal==null)
        {
            UI.SetValue(aa_path.concat("Presets"),0);
            presetVal=0;
        }

        //updating aa tab
        if(UI.GetValue(main_path.concat("Create New Preset"))==1)
        {
            UI.SetValue(main_path.concat("Create New Preset"),0);
            currentLength=AA.length;
            addAAPreset(currentLength , UI.GetString(main_path.concat("New Preset Name:")));
            updatePresetNames();
        }
        if(UI.GetValue(aa_path.concat("Confirm")))
        {
            UI.GetValue(aa_path.concat("Confirm") , 0);
            AA[presetVal].presetName = UI.GetString(aa_path.concat("Rename Selected Preset:"));
        }
        
        //TODO: ui updates(half done)
        //save data from ui to aa array
        //verify auth intergity with password

        if(presetVal != presetCache)
        {
            presetCache = presetVal;
            uiUpdate = true;
            UI.SetValue(aa_path.concat("Real Mode") , AA[presetVal][6][0]);
            UI.SetValue(aa_path.concat("Fake Mode") , AA[presetVal][6][1]);
            UI.SetValue(aa_path.concat("LBY Mode") , AA[presetVal][6][2]);
            
        }
        //if stuff here changed
        realModeVal=UI.GetValue(aa_path.concat("Real Mode"));
        fakeModeVal=UI.GetValue(aa_path.concat("Fake Mode")); 
        LBYModeVal=UI.GetValue(aa_path.concat("LBY Mode"));
        realSwitchVal=UI.GetValue(aa_path.concat("Real Switch Phase"));
        fakeSwitchVal=UI.GetValue(aa_path.concat("Fake Switch Phase"));
        LBYSwitchVal=UI.GetValue(aa_path.concat("LBY Switch Phase"));
        modeVal=UI.GetValue(aa_control_path.concat("Conditions"));



        if(realModeVal!=realModeCache)
        {
            realModeCache=realModeVal;
            AA[presetVal][6][0]=realModeVal;
            switch(realModeVal)
            {
                case 0:
                    //static
                    UI.SetEnabled(aa_path.concat("Real Switch Phase"),0);
                    UI.SetEnabled(aa_path.concat("Active Real Switch Phases"),0);
                    UI.SetEnabled(aa_path.concat("Real Offset"), 1);
                    UI.SetEnabled(aa_path.concat("Real Delta"), 0);
                    UI.SetEnabled(aa_path.concat("Real Delay"), 0); 
                    UI.SetEnabled(aa_path.concat("Real Delay Offset"), 0);

                    UI.SetValue(aa_path.concat("Real Offset"), AA[presetVal].staticSettings.realOffset);
                    break;
                case 1:
                    //jitter
                    UI.SetEnabled(aa_path.concat("Real Switch Phase"), 0);
                    UI.SetEnabled(aa_path.concat("Active Real Switch Phases"), 0);
                    UI.SetEnabled(aa_path.concat("Real Offset"), 1);
                    UI.SetEnabled(aa_path.concat("Real Delta"), 1);
                    UI.SetEnabled(aa_path.concat("Real Delay"), 1);
                    UI.SetEnabled(aa_path.concat("Real Delay Offset"), 1);

                    UI.SetValue(aa_path.concat("Real Offset"), AA[presetVal].jitterSettings.realOffset);
                    UI.SetValue(aa_path.concat("Real Delta"), AA[presetVal].jitterSettings.realDelta);
                    UI.SetValue(aa_path.concat("Real Delay"), AA[presetVal].jitterSettings.realDelay);
                    
                    UI.SetValue(aa_path.concat("Real Delay Offset"), AA.jitterSettings.realDelayOffset);
                    break;
                case 2:
                    //switch

                    //TODO: ADD A SWITCH CACHE SOMEWHERE ELSE
                   
                    UI.SetEnabled(aa_path.concat("Real Switch Phase"),1);
                    UI.SetEnabled(aa_path.concat("Active Real Switch Phases"),1);
                    UI.SetEnabled(aa_path.concat("Real Offset"),1);
                    UI.SetEnabled(aa_path.concat("Real Delta"),0);
                    UI.SetEnabled(aa_path.concat("Real Delay"),1);
                    UI.SetEnabled(aa_path.concat("Real Delay Offset"),0);

                    //CHECK IF THIS WORKS
                    UI.SetValue(aa_path.concat("Real Switch Phase"),0);
                    UI.SetValue(aa_path.concat("Active Real Switch Phases"),AA[presetVal].switchSettings.activePhases[0]+1);
                    UI.SetValue(aa_path.concat("Real Offset"),AA[presetVal].switchSettings.realOffset[0]);
                    UI.SetValue(aa_path.concat("Real Delay"),AA[presetVal].switchSettings.realDelay[0]);
                    break;
                
                case 3:
                    //sway
                    UI.SetEnabled(aa_path.concat("Real Switch Phase"),0);
                    UI.SetEnabled(aa_path.concat("Active Real Switch Phases"),0);
                    UI.SetEnabled(aa_path.concat("Real Offset"),1);
                    UI.SetEnabled(aa_path.concat("Real Delta"),1);
                    UI.SetEnabled(aa_path.concat("Real Delay"),1);
                    UI.SetEnabled(aa_path.concat("Real Delay Offset"),0);

                    UI.SetValue(aa_path.concat("Real Offset"),AA[presetVal].swaySettings.realOffset);
                    UI.SetValue(aa_path.concat("Real Delta"),AA[presetVal].swaySettings.realDelta);
                    UI.SetValue(aa_path.concat("Real Delay"),AA[presetVal].swaySettings.realDelay);
                    break;
                case 4:
                    //random
                    UI.SetEnabled(aa_path.concat("Real Switch Phase"),0);
                    UI.SetEnabled(aa_path.concat("Active Real Switch Phases"),0);
                    UI.SetEnabled(aa_path.concat("Real Offset"),1);
                    UI.SetEnabled(aa_path.concat("Real Delta"),1);
                    UI.SetEnabled(aa_path.concat("Real Delay"),1);
                    UI.SetEnabled(aa_path.concat("Real Delay Offset"),1);

                    UI.SetValue(aa_path.concat("Real Offset"), AA[presetVal].randomSettings.realOffset);
                    UI.SetValue(aa_path.concat("Real Delta"), AA[presetVal].realDelta);
                    UI.SetValue(aa_path.concat("Real Delay"), AA[presetVal].realDelay);
                    UI.SetValue(aa_path.concat("Real Delay Offset"), AA[presetVal].realDelayOffset);
                    break;

            }
                

            uiUpdate=true;
        }
        if(fakeModeVal!=fakeModeCache)
        {

            fakeModeCache=fakeModeVal;
            AA[presetVal][6][1]=fakeModeVal;
            switch(fakeModeVal)
            {
                case 0:
                    //static
                    UI.SetEnabled(aa_path.concat("Fake Switch Phase"), 0);
                    UI.SetEnabled(aa_path.concat("Active Fake Switch Phases"), 0);
                    UI.SetEnabled(aa_path.concat("Fake Offset"), 1);
                    UI.SetEnabled(aa_path.concat("Fake Delta"), 0);
                    UI.SetEnabled(aa_path.concat("Fake Delay"), 0);
                    UI.SetEnabled(aa_path.concat("Fake Delay Offset"), 0);

                    UI.SetValue(aa_path.concat("Fake Offset"),AA[presetVal].staticSettings.fakeOffset);
                    break;
                case 1:
                    //jitter
                    UI.SetEnabled(aa_path.concat("Fake Switch Phase"),0);
                    UI.SetEnabled(aa_path.concat("Active Fake Switch Phases"),0);
                    UI.SetEnabled(aa_path.concat("Fake Offset"),1);
                    UI.SetEnabled(aa_path.concat("Fake Delta"),1);
                    UI.SetEnabled(aa_path.concat("Fake Delay"),1);
                    UI.SetEnabled(aa_path.concat("Fake Delay Offset"),1);

                    UI.SetValue(aa_path.concat("Fake Offset"),AA[presetVal].jitterSettings.fakeOffset);
                    UI.SetValue(aa_path.concat("Fake Delta"),AA[presetVal].jitterSettings.fakeDelta);
                    UI.SetValue(aa_path.concat("Fake Delay"),AA[presetVal].jitterSettings.fakeDelay);
                    UI.SetValue(aa_path.concat("Fake Delay Offset"),AA[presetVal].jitterSettings.fakeDelayOffset);
                    break;
                case 2:
                    //switch

                    //TODO: ADD A SWITCH CACHE SOMEWHERE ELSE
                    UI.SetEnabled(aa_path.concat("Fake Switch Phase"),1);
                    UI.SetEnabled(aa_path.concat("Active Fake Switch Phases"),1);
                    UI.SetEnabled(aa_path.concat("Fake Offset"),1);
                    UI.SetEnabled(aa_path.concat("Fake Delta"),0);
                    UI.SetEnabled(aa_path.concat("Fake Delay"),1);
                    UI.SetEnabled(aa_path.concat("Fake Delay Offset"),0);

                    //CHECK IF THIS WORKS
                    UI.SetValue(aa_path.concat("Fake Switch Phase"),0);
                    UI.SetValue(aa_path.concat("Active Fake Switch Phases"),AA[presetVal].switchSettings.activePhases[1]+1);
                    UI.SetValue(aa_path.concat("Fake Offset"),AA[presetVal].switchSettings.fakeOffset[0]);
                    UI.SetValue(aa_path.concat("Fake Delay"),AA[presetVal].switchSettings.fakeDelay[0]);
                    break;
                
                case 3:
                    //sway
                    UI.SetEnabled(aa_path.concat("Fake Switch Phase"),0);
                    UI.SetEnabled(aa_path.concat("Active Fake Switch Phases"),0);
                    UI.SetEnabled(aa_path.concat("Fake Offset"),1);
                    UI.SetEnabled(aa_path.concat("Fake Delta"),1);
                    UI.SetEnabled(aa_path.concat("Fake Delay"),1);
                    UI.SetEnabled(aa_path.concat("Fake Delay Offset"),0);

                    UI.SetValue(aa_path.concat("Fake Offset"), AA[presetVal].swaySettings.fakeOffset);
                    UI.SetValue(aa_path.concat("Fake Delta"), AA[presetVal].swaySettings.fakeDelta);
                    UI.SetValue(aa_path.concat("Fake Delay"), AA[presetVal].swaySettings.fakeDelay);
                    break;
                case 4:
                    //random
                    UI.SetEnabled(aa_path.concat("Fake Switch Phase"),0);
                    UI.SetEnabled(aa_path.concat("Active Fake Switch Phases"),0);
                    UI.SetEnabled(aa_path.concat("Fake Offset"),1);
                    UI.SetEnabled(aa_path.concat("Fake Delta"),1);
                    UI.SetEnabled(aa_path.concat("Fake Delay"),1);
                    UI.SetEnabled(aa_path.concat("Fake Delay Offset"),1);

                    UI.SetValue(aa_path.concat("Fake Offset"),AA[presetVal].randomSettings.fakeOffset);
                    UI.SetValue(aa_path.concat("Fake Delta"),AA[presetVal].randomSettings.fakeDelta);
                    UI.SetValue(aa_path.concat("Fake Delay"),AA[presetVal].randomSettings.fakeDelay);
                    UI.SetValue(aa_path.concat("Fake Delay Offset"),AA[presetVal].randomSettings.fakeDelayOffset);
                    break;
                    
            }

            uiUpdate=true;
        }
        if(LBYModeVal!=LBYModeCache)
        {
            LBYModeCache=LBYModeVal;
            AA[presetVal][6][2]=LBYModeVal;
            switch(LBYModeVal)
            {
                case 0:
                    //static
                    UI.SetEnabled(aa_path.concat("LBY Switch Phase"),0);
                    UI.SetEnabled(aa_path.concat("Active LBY Switch Phases"),0);
                    UI.SetEnabled(aa_path.concat("LBY Offset"),1);
                    UI.SetEnabled(aa_path.concat("LBY Delta"),0);
                    UI.SetEnabled(aa_path.concat("LBY Delay"),0);
                    UI.SetEnabled(aa_path.concat("LBY Delay Offset"),0);

                    UI.SetValue(aa_path.concat("LBY Offset"),AA[presetVal].staticSettings);
                    break;
                case 1:
                    //jitter
                    UI.SetEnabled(aa_path.concat("LBY Switch Phase"),0);
                    UI.SetEnabled(aa_path.concat("Active LBY Switch Phases"),0);
                    UI.SetEnabled(aa_path.concat("LBY Offset"),1);
                    UI.SetEnabled(aa_path.concat("LBY Delta"),1);
                    UI.SetEnabled(aa_path.concat("LBY Delay"),1);
                    UI.SetEnabled(aa_path.concat("LBY Delay Offset"),1);

                    UI.SetValue(aa_path.concat("LBY Offset"),AA[presetVal].jitterSettings.LBYOffset);
                    UI.SetValue(aa_path.concat("LBY Delta"),AA[presetVal].jitterSettings.LBYDelta);
                    UI.SetValue(aa_path.concat("LBY Delay"),AA[presetVal].jitterSettings.LBYDelay);
                    UI.SetValue(aa_path.concat("LBY Delay Offset"),AA[presetVal].jitterSettings.LBYDelayOffset);
                    break;
                case 2:
                    //switch

                    //TODO: ADD A SWITCH CACHE SOMEWHERE ELSE
                    UI.SetEnabled(aa_path.concat("LBY Switch Phase"),1);
                    UI.SetEnabled(aa_path.concat("Active LBY Switch Phases"),1);
                    UI.SetEnabled(aa_path.concat("LBY Offset"),1);
                    UI.SetEnabled(aa_path.concat("LBY Delta"),0);
                    UI.SetEnabled(aa_path.concat("LBY Delay"),1);
                    UI.SetEnabled(aa_path.concat("LBY Delay Offset"),0);

                    //CHECK IF THIS WORKS
                    UI.SetValue(aa_path.concat("LBY Switch Phase"),0);
                    UI.SetValue(aa_path.concat("Active LBY Switch Phases"),AA[presetVal].switchSettings.activePhases[2]+1);
                    UI.SetValue(aa_path.concat("LBY Offset"),AA[presetVal].switchSettings.LBYOffset[0]);
                    UI.SetValue(aa_path.concat("LBY Delay"),AA[presetVal].switchSettings.LBYDelay[0]);
                    break;
                
                case 3:
                    //sway
                    UI.SetEnabled(aa_path.concat("LBY Switch Phase"),0);
                    UI.SetEnabled(aa_path.concat("Active LBY Switch Phases"),0);
                    UI.SetEnabled(aa_path.concat("LBY Offset"),1);
                    UI.SetEnabled(aa_path.concat("LBY Delta"),1);
                    UI.SetEnabled(aa_path.concat("LBY Delay"),1);
                    UI.SetEnabled(aa_path.concat("LBY Delay Offset"),0);

                    UI.SetValue(aa_path.concat("LBY Offset"),AA[presetVal].swaySettings.LBYOffset);
                    UI.SetValue(aa_path.concat("LBY Delta"),AA[presetVal].swaySettings.LBYDelta);
                    UI.SetValue(aa_path.concat("LBY Delay"),AA[presetVal].swaySettings.LBYDelay);
                    break;
                case 4:
                    //random
                    UI.SetEnabled(aa_path.concat("LBY Switch Phase"),0);
                    UI.SetEnabled(aa_path.concat("Active LBY Switch Phases"),0);
                    UI.SetEnabled(aa_path.concat("LBY Offset"),1);
                    UI.SetEnabled(aa_path.concat("LBY Delta"),1);
                    UI.SetEnabled(aa_path.concat("LBY Delay"),1);
                    UI.SetEnabled(aa_path.concat("LBY Delay Offset"),1);

                    UI.SetValue(aa_path.concat("LBY Offset"),AA[presetVal].randomSettings.LBYOffset);
                    UI.SetValue(aa_path.concat("LBY Delta"),AA[presetVal].randomSettings.LBYDelta);
                    UI.SetValue(aa_path.concat("LBY Delay"),AA[presetVal].randomSettings.LBYDelay);
                    UI.SetValue(aa_path.concat("LBY Delay Offset"),AA[presetVal].randomSettings.LBYDelayOffset);
                    break;
                    
            }

            uiUpdate=true;
        }
        //update switch ui
        //real
        if(AA[presetVal].modes[0] == 2)
        {

            
            realSwitchVal = UI.GetValue(aa_path.concat("Real Switch Phase"))
            if(realSwitchVal!=realSwitchCache)
            {
                realSwitchCache = realSwitchVal;
                UI.SetValue(aa_path.concat("Real Offset"),AA[presetVal][3][0][realSwitchVal]);
                UI.SetValue(aa_path.concat("Real Delay"),AA[presetVal][3][3][realSwitchVal]);
                uiUpdate=true;
            }
        }
        //fake
        if(AA[presetVal].modes[1] == 2)
        {

            fakeSwitchVal = UI.GetValue(aa_path.concat("Fake Switch Phase"))
            if(fakeSwitchVal!=fakeSwitchCache)
            {
                fakeSwitchCache=fakeSwitchVal;
                UI.SetValue(aa_path.concat("Fake Offset"),AA[presetVal][3][1][fakeSwitchVal]);
                UI.SetValue(aa_path.concat("Fake Delay"),AA[presetVal][3][4][fakeSwitchVal]);
                uiUpdate=true;
            }
        }
        //lby
        if(AA[presetVal].modes[2]==2)
        {

            LBYSwitchVal=UI.GetValue(aa_path.concat("LBY Switch Phase"))
            if(LBYSwitchVal!=LBYSwitchCache)
            {
                LBYSwitchCache=LBYSwitchVal;
                UI.SetValue(aa_path.concat("LBY Offset"),AA[presetVal][3][2][LBYSwitchVal]);
                UI.SetValue(aa_path.concat("LBY Delay"),AA[presetVal][3][5][LBYSwitchVal]);
                uiUpdate=true;
            }
        }


        //update aa values if ui isnt updating
        //TODO: ADD 
        if(uiUpdate==false)
        {
            //do stuff

            //real
            //Cheat.Print(AA[presetVal][6][0].toString()+"IS CURRENT MODE\n")
            switch(AA[presetVal][6][0])
            {
                //static
                case 0:
                    AA[presetVal][1][0] = UI.GetValue(aa_path.concat("Real Offset"));
                    break;
                //jitter
                case 1:
                    AA[presetVal][2][0] = UI.GetValue(aa_path.concat("Real Offset"));
                    AA[presetVal][2][3] = UI.GetValue(aa_path.concat("Real Delta"));
                    AA[presetVal][2][9] = UI.GetValue(aa_path.concat("Real Delay"));
                    AA[presetVal][2][12] = UI.GetValue(aa_path.concat("Real Delay Offset"));
                    break;
                //switch
                case 2:
                    
                    AA[presetVal][3][0][realSwitchVal]=UI.GetValue(aa_path.concat("Real Offset"));
                    AA[presetVal][3][3][realSwitchVal]=UI.GetValue(aa_path.concat("Real Delay"));
                    AA[presetVal][3][6][0]=UI.GetValue(aa_path.concat("Active Real Switch Phases"))-1;
                    break;
                //sway
                case 3:
                    AA[presetVal][4][0]=UI.GetValue(aa_path.concat("Real Offset"));
                    AA[presetVal][4][3]=UI.GetValue(aa_path.concat("Real Delta"));
                    AA[presetVal][4][6]=UI.GetValue(aa_path.concat("Real Delay"));
                    break;
                //random
                case 4:
                    AA[presetVal][5][0]=UI.GetValue(aa_path.concat("Real Offset"));
                    AA[presetVal][5][3]=UI.GetValue(aa_path.concat("Real Delta"));
                    AA[presetVal][5][9]=UI.GetValue(aa_path.concat("Real Delay"));
                    AA[presetVal][5][12]=UI.GetValue(aa_path.concat("Real Delay Offset"))
                    break;
            }
            //fake
            switch(AA[presetVal][6][1])
            {
                //static
                case 0:
                    AA[presetVal][1][1]=UI.GetValue(aa_path.concat("Fake Offset"));
                    break;
                //jitter
                case 1:
                    AA[presetVal][2][1]=UI.GetValue(aa_path.concat("Fake Offset"));
                    AA[presetVal][2][4]=UI.GetValue(aa_path.concat("Fake Delta"));
                    AA[presetVal][2][10]=UI.GetValue(aa_path.concat("Fake Delay"));
                    AA[presetVal][2][13]=UI.GetValue(aa_path.concat("Fake Delay Offset"));
                    break;
                //switch
                case 2:
                    AA[presetVal][3][1][fakeSwitchVal]=UI.GetValue(aa_path.concat("Fake Offset"));
                    AA[presetVal][3][4][fakeSwitchVal]=UI.GetValue(aa_path.concat("Fake Delay"));
                    AA[presetVal][3][6][1]=UI.GetValue(aa_path.concat("Active Fake Switch Phases"))-1;
                    break;
                //sway
                case 3:
                    AA[presetVal][4][1]=UI.GetValue(aa_path.concat("Fake Offset"));
                    AA[presetVal][4][4]=UI.GetValue(aa_path.concat("Fake Delta"));
                    AA[presetVal][4][7]=UI.GetValue(aa_path.concat("Fake Delay"));
                    break;
                //random
                case 4:
                    AA[presetVal][5][1]=UI.GetValue(aa_path.concat("Fake Offset"));
                    AA[presetVal][5][4]=UI.GetValue(aa_path.concat("Fake Delta"));
                    AA[presetVal][5][10]=UI.GetValue(aa_path.concat("Fake Delay"));
                    AA[presetVal][5][13]=UI.GetValue(aa_path.concat("Fake Delay Offset"));
                    break;
            }
            //lby
            switch(AA[presetVal][6][2])
            {
                //static
                case 0:
                    AA[presetVal][1][2]=UI.GetValue(aa_path.concat("LBY Offset"));
                    break;
                //jitter
                case 1:
                    AA[presetVal][2][2]=UI.GetValue(aa_path.concat("LBY Offset"));
                    AA[presetVal][2][5]=UI.GetValue(aa_path.concat("LBY Delta"));
                    AA[presetVal][2][11]=UI.GetValue(aa_path.concat("LBY Delay"));
                    AA[presetVal][2][14]=UI.GetValue(aa_path.concat("LBY Delay Offset"));
                    break;
                //switch
                case 2:
                    AA[presetVal][3][2][LBYSwitchVal]=UI.GetValue(aa_path.concat("LBY Offset"));
                    AA[presetVal][3][5][LBYSwitchVal]=UI.GetValue(aa_path.concat("LBY Delay"));
                    AA[presetVal][3][6][2]=UI.GetValue(aa_path.concat("Active LBY Switch Phases"))-1;
                    break;
                //sway
                case 3:
                    AA[presetVal][4][2]=UI.GetValue(aa_path.concat("LBY Offset"));
                    AA[presetVal][4][5]=UI.GetValue(aa_path.concat("LBY Delta"));
                    AA[presetVal][4][8]=UI.GetValue(aa_path.concat("LBY Delay"));
                    break;
                //random
                case 4:
                    AA[presetVal][5][2]=UI.GetValue(aa_path.concat("LBY Offset"));
                    AA[presetVal][5][5]=UI.GetValue(aa_path.concat("LBY Delta"));
                    AA[presetVal][5][11]=UI.GetValue(aa_path.concat("LBY Delay"));
                    AA[presetVal][5][14]=UI.GetValue(aa_path.concat("LBY Delay Offset"))
                    break;
            }
        }
        //AA Manager UI
        //TEST UI.GetString
        if(modeVal!=modeCache)
        {
            modeCache=modeVal;
            UI.SetValue(aa_control_path.concat("Switch"),AA_MANAGER[modeVal][0]);
            UI.SetValue(aa_control_path.concat("Anti Bruteforce"),AA_MANAGER[modeVal][1]);
            UI.SetValue(aa_control_path.concat("Presets"),AA_MANAGER[modeVal][2])
            presetUpdate=true;
            switch(AA_MANAGER[modeVal][0])
            {
                case 0:
                    UI.SetEnabled(aa_control_path.concat("Switch Delay"),0);
                    UI.SetEnabled(aa_control_path.concat("Switch Delta"),0);
                    break;
                case 1:
                    UI.SetEnabled(aa_control_path.concat("Switch Delay"),1);
                    UI.SetEnabled(aa_control_path.concat("Switch Delta"),0);
             
                    UI.SetValue(aa_control_path.concat("Switch Delay"),AA_MANAGER[modeVal][3]);
                    break;
                case 2:
                    UI.SetEnabled(aa_control_path.concat("Switch Delay"),1);
                    UI.SetEnabled(aa_control_path.concat("Switch Delta"),1);

                    UI.SetValue(aa_control_path.concat("Switch Delay"),AA_MANAGER[modeVal][3]);
                    UI.SetValue(aa_control_path.concat("Switch Delta"),AA_MANAGER[modeVal][3]);
                    break;
            }
        }
        if(presetUpdate==false)
        {
            AA_MANAGER[modeVal][0]=UI.GetValue(aa_control_path.concat("Switch"));
            AA_MANAGER[modeVal][1]=UI.GetValue(aa_control_path.concat("Anti Bruteforce"));
            AA_MANAGER[modeVal][2]=UI.GetValue(aa_control_path.concat("Presets"));
            AA_MANAGER[modeVal][3]=UI.GetValue(aa_control_path.concat("Switch Delay"));
            AA_MANAGER[modeVal][4]=UI.GetValue(aa_control_path.concat("Switch Delta"));
        }
  
        
    }
  
}
//helpers pasted from galaxysense thing
const mirage = [
    //[ "Balcony", "Stand ", 15, [-1170.448974609375,-2351.35009765625,-112.76617431640625], [-6.143388271331787,14.879289627075195,0 ], "Oneway" ],
    [ "Palace Entrance", "Fake duck + E", 15, [-32.827205657958984,-1747.707763671875,-116.18266296386719], [-13.562880516052246,-80.47711944580078,0 ], "Oneway"  ],
    [ "Palace Entrace", "Crouch + E", 25, [146.87937927246094,-2078.0126953125,9.615781784057617], [-0.2739872932434082,-108.96994018554688,0 ], "Oneway"  ],
    [ "Sniper's Nest", "Crouch + E (manual)", 40, [-886.25830078125,-1317.399658203125,-120.41223907470703], [-0.3445321321487427,-177.3930206298828,0 ], "Oneway"  ],
    [ "Cat Box", "Stand ", 10, [-691.8399658203125,-885.2897338867188,-182.1551055908203], [-1.4627931118011475,102.77088165283203,0 ], "Oneway"  ],
    [ "Connector", "Stand ", 1, [-758.4989013671875,-1321.30224609375,-108.56095123291016], [10.404932975769043,82.45069122314453,0 ], "Oneway"  ],
    [ "Cat", "Fake duck ", 10, [-1495.3671875,-1112.000732421875,-183.45028686523438], [-2.77838134765625,38.17058563232422,0 ], "Oneway"  ],
    [ "Apartments", "Fake duck ", 0, [-2336.7314453125,766.5013427734375,-79.1664810180664], [-5.943861484527588,-2.0283021926879883,0 ], "Oneway"  ],
    [ "Cat", "Fake duck ", 0, [-394.3824768066406,-796.3460693359375,-216.0263214111328], [-5.173882484436035,122.90838623046875,0 ], "Oneway"  ],
    [ "T Stairs", "Stand ", 25, [275.092529296875,316.94354248046875,-201.4618377685547], [0.7233693599700928,11.497645378112793,0 ], "Oneway"  ],
    [ "Top Mid", "Stand ", 35, [219.89126586914063,877.2789306640625,-76.8647232055664], [2.8979110717773438,-90.38306427001953,0 ], "Oneway"  ],
    [ "House Stairs / Top Mid Connector", "Fake duck ", 32, [454.9155578613281,852.4118041992188,-53.246543884277344], [16.369403839111328,-44.87099838256836,0 ], "Oneway"  ],
    [ "Underpass Stairs", "Fake duck ", 10, [-1264.1064453125,218.20901489257813,-120.45449829101563], [12.757319450378418,27.84868621826172,0 ], "Oneway"  ],
    [ "Underpass Stairs", "Stand ", 15, [-1124.922119140625,310.01190185546875,-100.71343994140625], [29.21480369567871,42.90019226074219,0 ], "Wallbang" ],
    [ "Market Entrace", "Fake duck ", 0, [-1705.237548828125,-1220.2938232421875,-207.29591369628906], [-7.482339859008789,79.5807113647461,0 ], "Oneway"],
    [ "Apartment Entrance", "Stand ", 12, [-374.2903137207031,779.552978515625,-20.803316116333008], [1.6386109590530396,-161.68849182128906,0 ], "Oneway" ],
    [ "Underpass Stairs", "Crouch ", 12, [-1101.185791015625,522.3583984375,-38.548126220703125], [80.03816223144531,-51.8855094909668,0 ], "Oneway" ],
    [ "Right Side Connector", "Stand ", 10, [-842.7730102539063,32.43463134765625,-108.64161682128906], [1.2841607332229614,-85.02303314208984,0 ], "Oneway" ],
    [ "Palace Entrance", "Fake duck ", 0, [-811.739013671875,-1145.87060546875,-72.66464233398438], [-2.2234721183776855,-50.907833099365234,0 ], "Oneway" ],
    [ "CT Stairs", "Stand ", 20, [-1495.1767578125,-1588.8564453125,-201.6099395751953], [-0.707923412322998,-79.56673431396484,0 ], "Oneway" ],
    [ "CT Spawn", "Stand ", 1, [-1722.5516357421875,-680.75244140625,-108.86699676513672], [3.074936866760254,-86.70063781738281,0 ], "Wallbang" ],
    [ "Market Entrace", "Stand (AWP)", 10, [-2231.71142578125,32.56330490112305,-108.5659408569336], [-0.22803455591201782,-47.783348083496094,0 ], "Wallbang" ],
    [ "A Ramp", "Fake duck ", 0, [-291.80877685546875,-2112.17333984375,-53.190345764160156], [7.508554935455322,48.7481803894043,0 ], "Oneway" ],
    [ "Palace/A Ramp Connector", "Fake duck + E", 0, [1127.9307861328125,228.2334747314453,-185.51644897460938], [-1.6344425678253174,-89.02660369873047,0 ], "ESP Oneway" ],
    [ "Apartments + House", "Fake duck + E", 0, [-477.98028564453125,492.88311767578125,-99.00080871582031], [-0.6445350646972656,89.8587417602539,0 ], "Oneway" ],
    [ "Ramp", "Crouch ", 0, [780.37841796875,-1550.7978515625,-60.35479736328125], [18.644933700561523,-176.00025939941406,0 ], "Oneway" ],
    [ "House exit", "Stand", 0, [-859.4331665039063,614.7947387695313,-14.041431427001953], [2.2666337490081787,7.958107948303223,0 ], "Oneway" ],
    [ "Apartment entrance", "Stand (AWP)", 0, [-1843.001220703125,488.68048095703125,-101.81539916992188], [-2.849693775177002,3.4349939823150635,0 ], "Oneway" ],
    [ "B Van", "Fake duck ", 0, [-2259.607421875,677.5836791992188,7.429899215698242], [5.68641996383667,-71.17919158935547,0 ], "Oneway" ],
    [ "Palace", "Stand (manual shoot/ESP) ", 0, [-1506.1005859375,-990.6868896484375,-149.39236450195313], [-3.874444007873535,-38.0708122253418,0 ], "Wallbang" ],
    [ "Top Mid", "Stand", 0, [-266.930573,-366.495056,-103.172424], [1.882086,19.124743,0 ], "Oneway" ],
    [ "Balcony", "Stand ", 1, [462.96588134765625,-2084.01904296875,18.9892520904541], [1.6673067808151245,177.59693908691406,0 ], "Wallbang" ]
];

const dust2 = [
    [ "T Spawn", "Fake duck ", 0, [-1828.306884765625,-455.19976806640625,141.17587280273438], [-2.199988603591919,-17.8001766204834,0 ], "Oneway" ],
    [ "Tunnels", "Fake duck + E", 0, [-2071.30908203125,2895.8076171875,82.59713745117188], [0.7149654626846313,-83.99018859863281,0 ], "Oneway" ],
    [ "Tunnels Exit", "Crouch ", 0, [-776.18408203125,2555.6904296875,-25.649532318115234], [-4.512523174285889,-147.3076629638672,0 ], "Wallbang" ],
    [ "Mid/Cat", "Fake duck ", 0, [-210.51968383789063,542.5650634765625,47.2431755065918], [5.387450218200684,100.62740325927734,0 ], "Oneway" ],
    [ "Long Doors / Blue", "Fake duck ", 25, [1299.95654296875,620.3975219726563,-3.8381288051605225], [1.5557122230529785,150.635986328125,0 ], "Oneway" ],
    [ "A Site / Long", "Fake duck ", 0, [1528.8955078125,505.183837890625,-49.267723083496094], [-3.854454517364502,99.73228454589844,0 ], "Oneway" ],
    [ "A Site", "Fake duck (Long Plant)", 0, [1570.482421875,461.5287170410156,-63.220176696777344], [-5.327244758605957,99.6102294921875,0 ], "Oneway" ],
    [ "B Doors", "Crouch ", 0, [16.597061157226563,2311.9716796875,17.10267448425293], [-0.5667411088943481,-177.3401641845703,0 ], "Wallbang" ],
    [ "Long Cross / Ramp", "Fake duck ", 0, [493.2771911621094,2613.61572265625,143.1537322998047], [5.055543422698975,-37.76759338378906,0 ], "Oneway" ],
    [ "Long Doors", "Stand ", 1, [1372.70068359375,1358.381103515625,50.24076843261719], [-0.30388620495796204,-139.5752716064453,0 ], "Wallbang" ],
    [ "Long Doors Box", "Stand ", 1, [530.4532470703125,826.2880249023438,62.459720611572266], [0.7473396062850952,-50.05582046508789,0 ], "Wallbang" ],
    [ "Outside Long House", "Stand ", 10, [554.1951293945313,353.6593017578125,69.35932159423828], [2.23449444770813,-145.07130432128906,0 ], "Oneway" ],
    [ "Top Mid", "Stand ", 10, [654.1134033203125,297.8545227050781,59.560081481933594], [0.6505045294761658,-179.7573699951172,0 ], "Oneway" ],
    [ "Lower Tunnels", "Stand ", 35, [-216.03515625,1160.060791015625,89.53584289550781], [11.780013084411621,153.25389099121094,0 ], "Wallbang" ],
    [ "Cat", "Stand ", 10, [-874.2039794921875,1464.575927734375,-53.34953308105469], [-10.956621170043945,-24.002500534057617,0 ], "Oneway" ]
];
const inferno = [
    [ "library | risk", "Stand ", 0, [2491.488974609375,1232.55009765625,215.03000000000625], [12.100088271331787,-170.540089627075195,0 ], "Oneway" ],
    [ "barrels | risk", "Crouch ", 0, [2477.968974609375,-130.53009765625,135.65000000000625], [2.090088271331787,168.650089627075195,0 ], "Oneway" ],
    [ "box", "Fake duck ", 0, [1999.968974609375,480.60009765625,206.65000000000625], [-10.090088271331787,-100.650089627075195,0 ], "Oneway" ],
    [ "box2", "Fake duck ", 0, [2013.97,701.99,210.61], [-0.28,1.18,0 ], "Oneway" ],
    [ "BigBox", "Fake duck ", 0, [2083.79,182.85,210.18], [0.21,76.14,0 ], "Oneway" ],
    [ "Barrels2 | risk", "Fake duck+min dmg ", 0, [63.91,2603.67,206.03], [2.33,4.84,0 ], "Oneway" ],
    [ "Docs", "Fake duck+min dmg ", 0, [753.09,1871.93,177.94], [-2.13,174.72,0 ], "Oneway" ],
    [ "Window", "Fake duck", 0, [-5.32,383.99,230.03], [3.58,79.43,0 ], "Oneway" ],
    [ "BigBox2", "Fake duck+min dmg (AWP)", 0, [2148.63,301.60,206.03], [-13.03,-110.59,0 ], "Oneway" ],
];
const overpass = [
    [ "Barrels", "Stand ", 15, [-806.2734033203125,392.8045227050781,145.030081481933594], [8.943388271331787,-67.049289627075195,0 ], "Oneway" ],
    [ "Water", "Fake duck", 15, [-1169.75,256.00,76.78], [0.97,-78.36,0 ], "Oneway" ],
    [ "Window", "Stand ", 15, [-1672.8734033203125,450.7745227050781,353.030081481933594], [6.843388271331787,-50.989289627075195,0 ], "Oneway" ],
    [ "Kill window | risk", "Stand ", 15, [-416.0434033203125,-2467.3245227050781,267.030081481933594], [-0.163388271331787,113.539289627075195,0 ], "Oneway" ],
    [ "Stairs", "Fake duck ", 15, [-628.59,-1168.31,123.18], [-0.34,114.22,0 ], "Oneway" ],
    [ "Wooden", "Stand | risk ", 15, [-1049.98,-302.36,163.93], [-0.14,-63.30,0 ], "Shooting" ],
    [ "Cement", "Fake duck ", 15, [-1178.99,171.99,143.03], [-12.23,150.72,0 ], "Oneway" ],
];
const cobblestone = [
    [ "Outside", "Min dmg | risk (Scar) ", 15, [73.81,-1292.57,-70.09], [-5.55,77.47,0 ], "Oneway" ],
    [ "Stairs", "Min dmg", 15, [668.03,-466.79,-0.86], [-0.15,147.68,0 ], "Oneway" ],
];
const short_dust = [
    [ "Car", "Fake Duck", 15, [70.52,494.88,46.30], [-0.37,98.23,0 ], "Oneway" ],
];
const vertigo = [
    [ "Box", "Fake Duck | risk", 15, [-2107.30,954.03,11790.03], [5.45,-110.75,0 ], "Oneway" ],
    [ "Box2", "Fake Duck", 15, [-1435.92,660.21,11921.28], [5.45,-110.75,0 ], "Oneway" ],
    [ "Box", "Stand | risk", 15, [-2113.13,879.35,11893.03], [2.03,-67.31,0 ], "Oneway" ],
    [ "Container", "Min dmg | Stand", 15, [-1900.03,684.36,11840.03], [-10.17,-19.12,0 ], "Oneway" ],
    [ "Container2", "Fake duck", 15, [-2342.90,741.01,11843.03], [5.04,-95.87,0 ], "Oneway" ],
];
const office = [
    [" ",  "Crouch | Stand (AWP)", 15, [-488.09,-1369.03,-193.97], [-4.63,97.02,0 ], "Oneway" ],
    [" ",  "Fake duck", 15, [-744,-416,-187], [-0.52,1.39,0 ], "Oneway" ],
    [" ", "Stand", 15, [-774,-307,-77], [8.05,-113,0 ], "Oneway" ],
    [" ", "Fake duck", 15, [1024.42,-1072.03,-164.28], [-0.20,107,0 ], "Oneway" ],
    [" ",  "Stand", 15, [ 18, -764.733398, -121.746964], [-1.358088, 74.478157, 0], "Oneway" ],
    [" ",  "Stand", 15, [ -0.204876 ,-887.967957,-126.317039], [-1.392609 ,78.579758 ,0.000000], "Oneway" ],
    [" ",  "Fake duck", 15, [  174.968750, -104.789978 ,-113.037590], [2.613178 ,-98.549133, 0.000000], "Oneway" ],
    [" ",  "Fake duck", 15, [  366.431168, -428.199738, -114.615715], [-0.103847 ,1.141723, 0.000000], "Oneway" ],
    ["",  "Stand", 15, [  625.584717, -389.167236, -95.968750], [2.543516, -172.531570, 0.000000], "Oneway" ],
    [" ",  "Stand", 15, [  797.682739, -573.968750, -95.968750], [0.767023, -37.171745, 0.000000], "Oneway" ],
    [" ",  "Fake duck", 15, [  811.329346, -1072.375366, -143.436768], [-0.074401, 77.782188, 0.000000], "Oneway" ],
    [" ",  "Stand", 15, [ 669.717529, -289.459137, -95.968750], [0.343555, -55.699059, 0.000000], "Oneway" ],


];
const maps = {
    "de_mirage": mirage,
    "de_dust2": dust2,
    "de_inferno": inferno,
    "de_mirage": mirage,
    "de_overpass": overpass,
    "de_dust2": dust2,
    "de_cbble": cobblestone,
    "de_shortdust": short_dust,
    "de_vertigo": vertigo,
    "cs_office": office
};
//courtesy to dhdj
//dont know how it works but cool rainbow :D
function HSV2RGB(h, s, v) {
	var r, g, b, i, f, p, q, t;

	i = Math.floor(h * 6);
	f = h * 6 - i;
	p = v * (1 - s);
	q = v * (1 - f * s);
	t = v * (1 - (1 - f) * s);

	switch (i % 6) 
    {
		case 0:
			r = v,
			g = t,
			b = p;
			break;
		case 1:
			r = q,
			g = v,
			b = p;
			break;
		case 2:
			r = p,
			g = v,
			b = t;
			break;
		case 3:
			r = p,
			g = q,
			b = v;
			break;
		case 4:
			r = t,
			g = p,
			b = v;
			break;
		case 5:
			r = v,
            g = p,
			b = q;
			break;
	}

	return {
		r: Math.round(r * 255),
		g: Math.round(g * 255),
		b: Math.round(b * 255)
	};
}

function renderIndicators()
{
    
}



//COURTESY TO MIXOLOGIST
//REMEMBER TO EDIT
//IMPORTANT




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
                doSwitch=true;
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

                doSwitch=true;
            }
        }
        lastImpacts[entity] = impact;
        lastImpactTimes[entity] = curtime;
        */
    }
}

//again, courtesy to mixologist
//check for in air
function isInAir(player)
{
	var fv = Entity.GetProp(Entity.GetLocalPlayer(player), "CBasePlayer", "m_flFallVelocity");
	if(fv < -1 || fv > 1){
        //in_air = true;
		return true;
    }
    //in_air = false;
	return false;
}
//check velocity
function getVelocity(player)
{
	var velocity = Entity.GetProp(player, "CBasePlayer", "m_vecVelocity[0]");
	return Math.sqrt(velocity[0] * velocity[0] + velocity[1] * velocity[1]);
}

function isDucking(player) {
	return Entity_GetProp(player, "CCSPlayer", "m_flDuckAmount");
}

function getWeapons(player)
{
    return Entity.GetName(Entity.GetWeapon(player));
}

//mode: 0=real, 1=fake, 2=lby

function SetOffset(value,mode)
{
    
    //Cheat.Print("set mode "+mode.toString());
    //Cheat.Print(" with value"+value.toString()+"\n");
    
    AntiAim.SetOverride(1)
    switch(mode)
    {
        case 0:
            AntiAim.SetRealOffset(value);
            break;
        case 1:
            AntiAim.SetFakeOffset(value);
            break;
        case 2:
            AntiAim.SetLBYOffset(value);
            break;
    }
}

//aa
function updateAA(preset) 
{
    currentTime=Globals.Tickcount();
    //Cheat.Print("AA[preset][3][3][i] is "+AA[preset][3][3].toString()+"\n")
    //Cheat.Print("UPDATED AA WITH PRESET"+preset.toString()+"\n")
    //iterate through 3 angle types

    for(i=0;i<3;i++)
    {
        
    
        switch(AA[preset][6][i])
        {
            //static
            case 0:
                SetOffset(AA[preset][1][i],i);
                break;

            //jitter
            case 1:

                //if time to change phase
                if(currentTime>=clampTo(jitterTimer[i]+AA[preset][2][i+9]+jitterTimeOffset[i],1,0))
                {
                    
                    jitterTimer[i]=currentTime;
                    //generates offsets if randomized set to true
                    if(AA[preset][2][i+6]==1)
                    {
                        jitterTimeOffset[i]=Math.round(zeroToNegOne(Math.round(Math.random()))*Math.random()*AA[preset][2][i+12]);
                    }
                    else
                    {
                        jitterTimeOffset[i]=0;
                    }
                    
                    
                    jitterPhaseCounter[i]=NOT(jitterPhaseCounter[i]);
                    
                }        
                
                
                if(jitterPhaseCounter[i]==0)
                {
                    SetOffset(AA[preset][2][i],i);
                }
                else
                {
                    

                    SetOffset(AA[preset][2][i]+AA[preset][2][i+3],i);
                } 
                break;
                

            //switch
            case 2:
                
                
                //if phase completed
                
                if(currentTime>=clampTo(switchTimer[i]+AA[preset][3][i+3][switchPhaseCounter[i]],1,0))
                {
                    switchTimer[i]=currentTime;
                    //if phase index maxed out
                    if(switchPhaseCounter[i]>=AA[preset][3][6][i])
                    {
                        switchPhaseCounter[i]=0;
                    }
                    else
                    {
                        switchPhaseCounter[i]++;
                    }
                    //set offset from phase

                }
                
                SetOffset(AA[preset][3][i][switchPhaseCounter[i]],i);
                break;



            //sway
            case 3:
                
                
                if(currentTime<=clampTo(swayTimer[i]+AA[preset][4][i+6],1,0))
                {
                    swayCycleTimer[i]=clampTo(swayTimer[i]+AA[preset][4][i+6],1,0)-currentTime;
                    //delta=(finish-start)
                    //percentage=(fullCycleTime-currentTime)/timePerCycle
                    
                    SetOffset(Math.round(AA[preset][4][i]+(AA[preset][4][i+3]*(swayCycleTimer[i]/AA[preset][4][i+6]))),i);
                }
                else
                {
                    swayTimer[i]=currentTime;
                    swayCycleTimer[i]=0;
                    SetOffset(AA[preset][4][i],i);
                }
                break;

            //random
            case 4:
                if(currentTime>=clampTo(randomTimer[i]+AA[preset][5][i+9]+randomTimeOffset[i],1,0))
                {
                    randomTimer[i]=currentTime;
                    //generates offsets if randomized set to true
                    if(AA[preset][5][i+6]==1)
                    {
                        randomTimeOffset[i]=Math.round(zeroToNegOne(Math.round(Math.random()))*Math.random()*AA[preset][5][i+12]);
                    }
                    else
                    {
                        randomTimeOffset[i]=0;                      
                    }
                    //generates angle offset
                    randomOffsetHolder[i]=Math.round(zeroToNegOne(Math.round(Math.random()))*Math.random()*AA[preset][5][i+3]);
                    
                
                }
                SetOffset(randomOffsetHolder[i],i);
                break;
         
        }
    }
    
}



//handles presets ig
function switchAA()
{
    var localPlayer = Entity.GetLocalPlayer();
    //Cheat.Print("switch aa called\n");
    //if overriding(highest priority)
    if(UI.GetHotkeyState(rage_keybinds.concat("AA Override Key 4")==1))
    {
        currentAAMode=15;
    }
    else if(UI.GetHotkeyState(rage_keybinds.concat("AA Override Key 3")==1))
    {
        currentAAMode=14;
    }
    else if(UI.GetHotkeyState(rage_keybinds.concat("AA Override Key 2")==1))
    {
        currentAAMode=13;
    }
    else if(UI.GetHotkeyState(rage_keybinds.concat("AA Override Key 1")==1))
    {
        currentAAMode=12;
    }
    //if legit aa(second highest prio)
    /*
    else if(epeeking)
    {
        currentAAMode=9;
    }
    */
    else if(UI.GetHotkeyState(rage_keybinds.concat("Slow walk")==1))
    {
        currentAAMode=2;
    }
    
    else if(UI.GetValue(aa_keybinds.concat("Fake duck"))==1)
    {
        currentAAMode=6;
    }
    else if(getWeapons(localPlayer)=="knife")
    {
        currentAAMode=10;
    }
    else if(getWeapons(localPlayer) =="zeus x27")
    {
        currentAAMode=11;
    }
    
    else if(exploits_keybinds.concat("Hide shots"))
    {
        currentAAMode=7;
    }
    
    else if(exploits_keybinds.concat("Double tap"))
    {
        currentAAMode=8;
    }
    
    //in air
    else if(isInAir(localPlayer))
    {
        currentAAMode=4;
    }
    /*
    else if(onpeek)
    {
        currentAAMode=5;
    }
    */
    
    else if(isDucking(localPlayer))
    {
        currentAAMode=3;
    }
    
    //if running
    else if(getVelocity(Entity.GetLocalPlayer())>1)
    {
        currentAAMode=1;
    }
    
    //dormant
    else
    {
        currentAAMode=0;
    }
    //if aa loop should continue(hasnt changed mode yet)
    //Cheat.Print("current aa mode: "+currentAAMode.toString()+"\n")
    if(currentAAMode==cachedAAMode)
    {
        //Cheat.Print("CONTINUING LOOP\n");
        currentTime=Globals.Tickcount();

        //if current phase finished
        if(AA_MANAGER[currentAAMode][0]!=0)
        {
            if(currentTime>=clampTo(modeTimer+modeDelay+modeDelta,1,0))
            {
                doSwitch=true;
                modeTimer=Globals.Tickcount();
                //generate random offsets if enabled
                if(AA_MANAGER[currentAAMode][0]==2)
                {
                    modeOffset=zeroToNegOne(Math.round(Math.random()))*Math.random()*AA_MANAGER[currentAAMode][4];
                }
                else
                {
                    modeOffset=0;
                }
            }
        
        
        }
        //if either forced a switch or reached time
        if(doSwitch==true)
        {
            doSwitch=false;
            //possible optmization, but im lazy
            //calculate and save length internally
            if(modeCounter<AA_MANAGER[currentAAMode][2].length)
            {    
                modeCounter++;
            }
            else 
            {
                modeCounter=0;
            }
     
        }
        updateAA(getValueFromCounter(AA_MANAGER[currentAAMode][2],modeCounter,AA.length-1));
         
        

    }
    //restart loop if not
    else
    {
        updateAA(getValueFromCounter(AA_MANAGER[currentAAMode][2],0,AA.length-1));
        cachedAAMode=currentAAMode;
        modeCounter=0;
        modeTimer=Globals.Tickcount();
        modeOffset=0;
    }
    

    
    
}


Cheat.RegisterCallback("Draw","updateConfig");
Cheat.RegisterCallback("CreateMove","switchAA");
Cheat.RegisterCallback("Draw","renderIndicators");
//the antibruteforce i pasted
Cheat.RegisterCallback("player_hurt", "OnHurt");
Cheat.RegisterCallback("bullet_impact", "OnBulletImpact");

