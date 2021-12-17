//search for "TODO" to get a list of shit u need to do

const { UI, Cheat, Entity, Globals, Local, AntiAim } = require("./onetap");

//TODO:
//antibruteforce(bullet_impact event)

//TODO: check for slowwalk keybind name




//TODO: ui updates
//verify auth intergity with password

//POTENTIAL FIX FOR ARRAYS: make function that populates AA[index] with THE ARRAY, not the template array variable
//same goes with aa preset manager(use for loop)

//POTENTIAL FL+RAGE SOLUTION
//Hiding the ui elements of said items but tewaking their values might work...?

//UI Subtabs
//Config Password
UI.AddSubTab([ "Config", "SUBTAB_MGR" ], "Secrets");
//js subtab
UI.AddSubTab([ "Config", "SUBTAB_MGR" ], "mana.js 1.0")
//aa subtab
UI.AddSubTab([ "Rage", "SUBTAB_MGR" ], "Custom Anti-Aim")
UI.AddSubTab([ "Rage", "SUBTAB_MGR" ], "AA Preset Manager")

UI.AddSubTab(["Visuals","SUBTAB_MGR"], "Indicators")
UI.AddSubTab(["Visuals","SUBTAB_MGR"], "Crosshair Indicators")


//Config

//AUTH SYSTEM


const main_path=["Config", "SUBTAB_MGR", "mana.js 1.0", "SHEET_MGR", "mana.js 1.0"];
const aa_path=["Rage", "SUBTAB_MGR", "Custom Anti-Aim", "Custom Anti-Aim"];
const aa_control_path=["Rage", "SUBTAB_MGR", "AA Preset Manager", "AA Preset Manager"];
const rage_keybinds=["Rage", "SUBTAB_MGR", "General", "SHEET_MGR", "General", "Key assignment"];
const aa_keybinds=["Rage", "SUBTAB_MGR", "Anti Aim", "SHEET_MGR", "General", "Key assignment"];
const aa_default_path=["Rage", "SUBTAB_MGR", "Anti Aim", "SHEET_MGR", "Directions"];
const exploits_keybinds=["Rage", "SUBTAB_MGR", "Exploits", "SHEET_MGR", "Keys", "Key assignment"];
const exploits_path=["Rage", "SUBTAB_MGR", "Exploits", "SHEET_MGR", "General"]
//const secrets_path=["Config", "SUBTAB_MGR", "Secrets", "SHEET_MGR", "Secrets"];

//hey, if ur not using my aa, then FUCK YOU
//not making a toggle for custom aa, if u dont know what I meant
//ahhhhh finally
//my eyes and brain


//HAHAHA NOW WE HAVE A UNIFORM 3 LAYERS OBJECT
//IN YOUR FACE DATAFILE CHAR LIMIT
//FUCK YOU BAHAHAHAH
const presetTemplate = {
    general : 
    {
        modes : 
        {
            real : 0,
            fake : 0,
            LBY : 0,
        },
        //active modes
        AASettings : 
        {
            pitchMode : 0
        },

        misc : 
        {
            presetName : "Mana Default AA"
        }

        
        
    },//general settings(pitch, at targets, etc)
    static : 
    {
        real :
        {
            offset : 0,
        },
        fake :
        {
            offset : 0,
        },
        LBY :
        {
            offset : 0,
        }
    },
    jitter : 
    {
        real :
        {
            offset : 0,
            delta : 0,
            delay : 0,
            delayOffset : 0,

        },
        fake :
        {
            offset : 0,
            delta : 0,
            delay : 0,
            delayOffset : 0,

        },
        LBY :
        {
            offset : 0,
            delta : 0,
            delay : 0,
            delayOffset : 0,

        }

    },
    switch : 
    {
        real : 
        {
            offset : [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            delay : [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            delayOffset : [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            activePhases : 1
        },
        fake : 
        {
            offset : [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            delay : [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            delayOffset : [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 
            activePhases : 1
        },
        LBY : 
        {
            offset : [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            delay : [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            delayOffset : [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            activePhases : 1
        },


    },
    sway : 
    {
        real : 
        {
            offset : 0,
            delta : 0,
            delay : 0,
        },
        fake : 
        {
            offset : 0,
            delta : 0,
            delay : 0,
        },
        LBY : 
        {
            offset : 0,
            delta : 0,
            delay : 0,
        },
 
    },
    random : 
    {
        real : 
        {
            offset : 0,
            delta : 0,
            delay : 0,
            delayOffset : 0,
        },
        fake : 
        {
            offset : 0,
            delta : 0,
            delay : 0,
            delayOffset : 0,
        },
        LBY : 
        {
            offset : 0,
            delta : 0,
            delay : 0,
            delayOffset : 0,
        },


    },
    

    
    //self explanatory
}
var AA=
[
    JSON.parse(JSON.stringify(presetTemplate))
];


const AA_MODE_TEMPLATE =
{
    switchMode : 0,
    dodgeBruteforce : 0,
    activePresets : 0,
    switchDelay : 0,
    switchDelta : 0,
}

//rework this for obvious reasons
//im fine with ids representing unimportant values
//I GET TO DECIDE WHT IS AND ISNT BTW
var AA_MANAGER=
{
    "Dormant" : JSON.parse(JSON.stringify(AA_MODE_TEMPLATE)),
    "Running" : JSON.parse(JSON.stringify(AA_MODE_TEMPLATE)),
    "Crouching" : JSON.parse(JSON.stringify(AA_MODE_TEMPLATE)),
    "On Peek" : JSON.parse(JSON.stringify(AA_MODE_TEMPLATE)),
    "In Air" : JSON.parse(JSON.stringify(AA_MODE_TEMPLATE)),
    "DT Active" : JSON.parse(JSON.stringify(AA_MODE_TEMPLATE)),
    "HS Active" : JSON.parse(JSON.stringify(AA_MODE_TEMPLATE)),
    "Zeusing" : JSON.parse(JSON.stringify(AA_MODE_TEMPLATE)),
    "Knifing" : JSON.parse(JSON.stringify(AA_MODE_TEMPLATE)),
    "Fake-Ducking" : JSON.parse(JSON.stringify(AA_MODE_TEMPLATE)),
    "Slow-Walking" : JSON.parse(JSON.stringify(AA_MODE_TEMPLATE)),
    "On Use" : JSON.parse(JSON.stringify(AA_MODE_TEMPLATE)),
    "Override Key 1" : JSON.parse(JSON.stringify(AA_MODE_TEMPLATE)),
    "Override Key 2" : JSON.parse(JSON.stringify(AA_MODE_TEMPLATE)),
    "Override Key 3" : JSON.parse(JSON.stringify(AA_MODE_TEMPLATE)),
    "Override Key 4" : JSON.parse(JSON.stringify(AA_MODE_TEMPLATE)),
} 

var RAGEBOT={};

var VISUALS= 
{
    //GENERAL SETTINGS
    //REMEMBER THE 255 CHAR LIMIT PLEASE
    general : 
    {
        indicators : 0,
        crosshairIndicators : 0,
        customCrosshair: 0,
        rechargeBar : 0,
        rainbowMenuFrame : 0,
        watermark : 0,
        
    },
    //MULTIDROPDOWN SETTINGS(WHICH INDICTS TO TOGGLE, ETC)
    activeItems : 
    {
        rainbowBars : 0,
        activeIndicators : 0,
        activeCrosshairIndicators : 0,

    },
    customCrosshair : 
    {
        color1 : [0,0,0,255],
        color2 : [0,0,0,255],
        length : 100,
        thickness : 2,
        distance : 10,

    },
    indicators : 
    {

    },
    crosshairIndicators :
    {

    },
    rainbow : 
    {
        changeRate = 1,
        colorOffset = 10,
    },
    customColors : 
    {
        "Custom 1" : [0,0,0,255],
        "Custom 2" : [0,0,0,255],
        "Custom 3" : [0,0,0,255],
        "Custom 4" : [0,0,0,255],
        "Custom 5" : [0,0,0,255],
        "Custom 6" : [0,0,0,255],
        "Custom 7" : [0,0,0,255],
        "Custom 8" : [0,0,0,255],
        "Custom 9" : [0,0,0,255],
        "Custom 10" : [0,0,0,255],
        "Custom 11" : [0,0,0,255],
        "Custom 12" : [0,0,0,255],
        "Custom 13" : [0,0,0,255],
        "Custom 14" : [0,0,0,255],
        "Custom 15" : [0,0,0,255],
        "Custom 16" : [0,0,0,255],
    }


};

//misc
var EXPLOIT
var MISC = 
{

    backtrackPeek :
    {
        //indexes of all the targets
        hitscan : [0,2,3],
        ticks : 10,
        
    },
}
//config related

var CONFIG_INFO =
{
    configName : "Mana",
    owner : "manaball123",
    password : "ilikecocks",

    //length of aa preset array
    presetsLength : 1,

}


//USE JSON.PARSE AND STRINGTIFY

function saveConfig()
{
    DataFile.Save(configName);


    //aa
    for(i=0;i<AA.length;i++)
    {
        string1 = i.toString()+"_"
        Object.keys(AA[i]).forEach(function(key1)
        {
            string2 = key1+"_"
            Object.keys(AA[i][key1]).forEach(function(key2)
            {
                string3 = key2+"_"
                Object.keys(AA[i][key1][key2]).forEach(function(key3)
                {
                    DataFile.SetKey(configName,"AA_" + string1 + string2 + string3 + key3, JSON.stringify(AA[i][key1][key2][key3]));
                })
            })
        })
        
    }

    //aa manager
    Object.keys(AA_MANAGER).forEach(function(key)
    {
        DataFile.SetKey(configName, "AA_MANAGER_" + key, JSON.stringify(AA_MANAGER[key]));
    })

    CONFIG_INFO.owner = Cheat.GetUsername();
    CONFIG_INFO.presetsLength = AA.length

    Object.keys(CONFIG_INFO).forEach(function(key)
    {
        DataFile.SetKey(configName, "CONFIG_INFO_" + key, JSON.stringify(CONFIG_INFO))
    })

}
function loadConfig()
{
    DataFile.Load(configName);
    //load config info first
    Object.keys(CONFIG_INFO).forEach(function(key)
    {
        CONFIG_INFO[key] = JSON.parse(DataFile.GetKey(configName, "CONFIG_INFO_" + key))
    })


    //populates aa array with stuff first
    for(i = 0;i < CONFIG_INFO.presetsLength;i++)
    {
        AA[i] = JSON.parse(JSON.stringify(presetTemplate))
    }
    for(i=0;i<AA.length;i++)
    {
        string1 = i.toString() + "_";
        Object.keys(AA[i]).forEach(function(key1)
        {
            string2 = key1 + "_";
            Object.keys(AA[i][key1]).forEach(function(key2)
            {
                string3 = key2 + "_";
                Object.keys(AA[i][key1][key2]).forEach(function(key3)
                {
                    AA[i][key1][key2][key3] = JSON.parse(DataFile.GetKey(configName, "AA_" + string1 + string2 + string3 + key3));
                })
            })
        })
        
    }

    Object.keys(AA_MANAGER).forEach(function(key)
    {
        AA_MANAGER[key]=JSON.parse(DataFile.GetKey(configName, "AA_MANAGER_" + key));
    })
    
//print function from ot discord
Cheat.LongPrint = function (string) {
        for (x = 0; x < string.length; x += 255) {
            Cheat.Print(string.substring(x, x + 255))
        }
    }
    
}
//3d circle func from fourms, credits goes to this guy i think
// https://www.onetap.com/members/epiccsgohaker1337.74887/

Render.Filled3DCircle = function(position, radius, degrees, start_at, color, fill_color) {
    //position, radius, color, fill_color: self explanatory
    //degrees: circle span(can be used to make half circles too, but use 360 for full circle)
    //start_at: start span at x degrees
    var old_x, old_y;

    //clamp degrees between 360 and 0
    degrees = degrees < 361 && degrees || 360; 
    degrees = degrees > -1 && degrees || 0;
    start_at += 1;

    for (rot = start_at; rot < degrees + start_at + 1; rot += start_at * 8) {
        rot_r = rot * (Math.PI / 180);
        line_x = radius * Math.cos(rot_r) + position[0], line_y = radius * Math.sin(rot_r) + position[1];

        var curr = Render.WorldToScreen([line_x, line_y, position[2]]);
        var cur = Render.WorldToScreen([position[0], position[1], position[2]]);

        if (cur[0] != null && curr[0] != null && old_x != null) {
            Render.Polygon([[curr[0], curr[1]], [old_x, old_y], [cur[0], cur[1]]], fill_color)
            Render.Line(curr[0], curr[1], old_x, old_y, color)
        }

        old_x = curr[0], old_y = curr[1];
    }
}

Render.Circle3D = function(position, radius, degrees, start_at, color) {
    //position, radius, color: self explanatory
    //degrees: circle span(can be used to make half circles too, but use 360 for full circle)
    //start_at: start span at x degrees
    var old_x, old_y;

    //clamp degrees between 360 and 0
    degrees = degrees < 361 && degrees || 360; 
    degrees = degrees > -1 && degrees || 0;
    start_at += 1;

    for (rot = start_at; rot < degrees + start_at + 1; rot += start_at * 8) {
        rot_r = rot * (Math.PI / 180);
        line_x = radius * Math.cos(rot_r) + position[0], line_y = radius * Math.sin(rot_r) + position[1];

        var curr = Render.WorldToScreen([line_x, line_y, position[2]]);
        var cur = Render.WorldToScreen([position[0], position[1], position[2]]);

        if (cur[0] != null && curr[0] != null && old_x != null) {
            Render.Line(curr[0], curr[1], old_x, old_y, color)
        }
        old_x = curr[0], old_y = curr[1];
    }
}

function NOT(variable)
{
    return variable == 1 ? 0 : 1;
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
function ANGLE2VEC(angle) {
    pitch = angle[0];
    yaw = angle[1];
    return [Math.cos(DEG2RAD(pitch)) * Math.cos(DEG2RAD(yaw)), Math.cos(DEG2RAD(pitch)) * Math.sin(DEG2RAD(yaw)), -Math.sin(DEG2RAD(pitch))];
}

function getWallDistance(entity, angle) {
    vector = ANGLE2VEC(angle);
    origin = Entity.GetRenderOrigin(entity);
    origin[2] += Entity.GetProp(entity, "CBasePlayer", "m_vecViewOffset[2]")[0];
    end = [origin[0] + vector[0] * 8192, origin[1] + vector[1] * 8192, origin[2] + vector[2] * 8192];
    result = Trace.Line(entity, origin, end);
    if (result[1] != 1) {
        wall = [origin[0] + vector[0] * result[1] * 8192, origin[1] + vector[1] * result[1] * 8192, origin[2] + vector[2] * result[1] * 8192];
        distance = Math.sqrt(Math.pow(origin[0] - wall[0], 2) + Math.pow(origin[1] - wall[1], 2) + Math.pow(origin[2] - wall[2], 2));
        return distance;
    } else {
        return 0;
    }
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

function VectorNormalize(vec)
{
    var length = VectorLength(vec[0], vec[1], vec[2]);
    return [vec[0] / length, vec[1] / length, vec[2] / length];
}

function VectorDot(a, b)
{
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}
function VectorDistance(a, b)
{
    return VectorLength(a[0] - b[0], a[1] - b[1], a[2] - b[2]);
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

    return Math.sqrt(pointLength**2-sideLength**2)
}

//Paths




//vars

const angleTypes = ["real", "fake", "LBY"];
const fonts = 
{
    Arial = "Arial.ttf"
}
const indicatorItems = ["AA Behavior","AA Preset","Hide Shots","Double Tap","Choke","Desync","Hitchance and Mindmg","Target"];
const crosshairIndicatorItems = ["AA Behavior","AA Preset","Hide Shots","Double Tap","Hitchance and Mindmg","Target","Fakelag History"];

var fakeLagCache = [0,0,0,0]

var screenResolution = Render.GetScreenSize();
var rainbowColor = [0,0,0,255]


var presetCache=99;
var realModeCache=99;
var fakeModeCache=99;
var LBYModeCache=99;

//forces an update
var presetVal=0;
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


var enableFakeLag = true;


//timers:
//0=real,1=fake,2=lby
var jitterTimer = 
{
    real : Globals.Tickcount(),
    fake : Globals.Tickcount(),
    LBY : Globals.Tickcount()
};

var switchTimer = 
{
    real : Globals.Tickcount(),
    fake : Globals.Tickcount(),
    LBY : Globals.Tickcount()
};

var swayTimer = 
{
    real : Globals.Tickcount(),
    fake : Globals.Tickcount(),
    LBY : Globals.Tickcount()
};

var randomTimer = 
{
    real : Globals.Tickcount(),
    fake : Globals.Tickcount(),
    LBY : Globals.Tickcount()
};

var swayCycleTimer = 
{
    real : 0,
    fake : 0,
    LBY : 0
};


var currentTime=Globals.Tickcount();
var jitterTimeOffset = 
{
    real : 0,
    fake : 0,
    LBY : 0
};

var jitterPhaseCounter = 
{
    real : 0,
    fake : 0,
    LBY : 0
};

var switchPhaseCounter = 
{
    real : 0,
    fake : 0,
    LBY : 0
};
var switchTimeOffset = 
{
    real : 0,
    fake : 0,
    LBY : 0
};

var randomTimeOffset = 
{
    real : 0,
    fake : 0,
    LBY : 0
};

var randomAngleOffset = 
{
    real : 0,
    fake : 0,
    LBY : 0
};


var doSwitch=false;

const PLAYER_TEMPLATE=
{
    health : 100,
    weapons : [],

    position : [0.0,0.0,0.0],
    positionHistories : 
    [
        [0.0,0.0,0.0],
        [0.0,0.0,0.0],
        [0.0,0.0,0.0],
        [0.0,0.0,0.0],
        [0.0,0.0,0.0],
        [0.0,0.0,0.0],
        [0.0,0.0,0.0],
        [0.0,0.0,0.0],
        [0.0,0.0,0.0],
        [0.0,0.0,0.0],
        [0.0,0.0,0.0],
        [0.0,0.0,0.0],
    ]

};

var enemies = Entity.GetEnemies();
var players = Entity.GetPlayers();
var targetsPositions = 
{

};

var targetsPosCaches = [];
//TODO: SEE IF THIS WORKS
for(i=0;i<MISC.backtrackPeek.ticks-1;i++)
{
    targetsPosCaches[i] = {}
}


//UI Elements
//password
/*
UI.AddCheckbox(secrets_path,"Protect Config With Password")
UI.AddTextbox(secrets_path,"Config Password:");
UI.AddCheckbox(secrets_path,"Save Password")
*/
//update config settings
UI.AddCheckbox(main_path,"UPDATE CONFIG");

//aa settings(presets and stuff)
UI.AddDropdown(aa_path,"Presets",[""],0);
UI.AddTextbox(aa_path,"Rename Selected Preset:");
UI.AddCheckbox(aa_path,"Confirm");
//real
UI.AddDropdown(aa_path,"Real Mode",["Static","Jitter","Switch","Sway","Random"],0);
UI.AddDropdown(aa_path,"Real Switch Phase",["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16"],0);
UI.AddSliderInt(aa_path,"Active Real Switch Phases",1,16);
UI.AddSliderInt(aa_path,"Real Offset",-180,180);
UI.AddSliderInt(aa_path,"Real Delta",-180,180);
UI.AddSliderInt(aa_path,"Real Delay",1,256);
UI.AddSliderInt(aa_path,"Real Delay Offset",0,128);

//fake
UI.AddDropdown(aa_path,"Fake Mode",["Static","Jitter","Switch","Sway","Random"],0);
UI.AddDropdown(aa_path,"Fake Switch Phase",["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16"],0);
UI.AddSliderInt(aa_path,"Active Fake Switch Phases",1,16);
UI.AddSliderInt(aa_path,"Fake Offset",-180,180);
UI.AddSliderInt(aa_path,"Fake Delta",-180,180);
UI.AddSliderInt(aa_path,"Fake Delay",1,256);
UI.AddSliderInt(aa_path,"Fake Delay Offset",0,128);

//lby
UI.AddDropdown(aa_path,"LBY Mode",["Static","Jitter","Switch","Sway","Random"],0);
UI.AddDropdown(aa_path,"LBY Switch Phase",["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16"],0);
UI.AddSliderInt(aa_path,"Active LBY Switch Phases",1,16);
UI.AddSliderInt(aa_path,"LBY Offset",-180,180);
UI.AddSliderInt(aa_path,"LBY Delta",-180,180);
UI.AddSliderInt(aa_path,"LBY Delay",1,256);
UI.AddSliderInt(aa_path,"LBY Delay Offset",0,128);

//preset interface
UI.AddTextbox(main_path,"New Preset Name:");
UI.AddCheckbox(main_path,"Create New Preset");
UI.AddCheckbox(main_path,"SAVE CONFIG")
UI.AddCheckbox(main_path,"LOAD CONFIG")
UI.AddTextbox(main_path,"Config Name:")

//preset management interface
UI.AddDropdown(aa_control_path, "Conditions" ,["Dormant", "Running", "Slow-Walking", "Crouching", "In Air", "On Peek", "Fake-Ducking", "HS Active", "DT Active", "On Use", "Knifing", "Zeusing", "Override Key 1", "Override Key 2", "Override Key 3", "Override Key 4"],0);
UI.AddDropdown(aa_control_path, "Switch" , ["Conditional", "On Interval"],0);
UI.AddCheckbox(aa_control_path, "Anti Bruteforce");
UI.AddMultiDropdown(aa_control_path, "Presets" ,[""]);
UI.AddSliderInt(aa_control_path, "Switch Delay" , 1 , 256);
UI.AddSliderInt(aa_control_path,"Switch Delta" ,1 , 256);

//keybinds
UI.AddHotkey(rage_keybinds,"AA Override Key 1" , "AA 1");
UI.AddHotkey(rage_keybinds,"AA Override Key 2" , "AA 2");
UI.AddHotkey(rage_keybinds,"AA Override Key 3" , "AA 3");
UI.AddHotkey(rage_keybinds,"AA Override Key 4" , "AA 4");
//doubletap 
UI.AddSliderInt("Doubletap Tick Shift",1,64);
UI.AddSliderInt("Doubletap Tolerance",0,16);

//indicators
UI.AddMultiDropdown(indicators_path,"Active Indicators", indicatorItems)
UI.AddMultiDropdown(crosshair_indicators_path,"Active Crosshair Indicators",crosshairIndicatorItems)





function updatePlayerslist()
{
    enemies = Entity.GetEnemies();
    players = Entity.GetPlayers();
}


function updateCachePositions()
{
    //iterate through every rage target
    for(i = 0;i < enemies.length;i++)
    {
        if(Entity.IsDormant(enemies[i])==false)
        {
            //initialize an object for the target caches
            targetsPositions[enemies[i]] = [];
            //iterate through every hitbox selected
            for(i = 0;i <= MISC.backtrackPeek.hitscan.length;i++)
            {
                targetsPositions[enemies[i]][MISC.backtrackPeek.hitscan[i]] = Entity.GetHitboxPosition(enemies[i], MISC.backtrackPeek.hitscan[i])
            }
        }
    }
    //now for the caching part
    targetsPosCaches[0] = JSON.parse(JSON.stringify(targetsPositions))
    //every cache gets overridden by previous
    for(i = MISC.backtrackPeek.ticks-1;i > 0;i--)
    {
        //for example, slot 14 gets the value of slot 13(14 automatically discarded)
        targetsPosCaches[i] = JSON.parse(JSON.stringify(targetsPosCaches[i-1]))
    }

}
//credits to Factor#7953 in ot scripting discord
function cm()
{
    const enemies = Entity.GetEnemies().filter(function(e) { return !Entity.IsDormant(e) && Entity.IsValid(e); });
    const hitboxes = [
        0, // head
        9, // left calf
        10, // right calf
        16, // left forearm
        18 // right forearm
    ];
    
    cache.push([]);
    if(cache.length > 14)
        cache.pop();
    const currentTick = cache.length - 1;

    for(var i in enemies)
    {
        cache[currentTick].push({ hitboxes: [] });
        const currentEnemy = cache[currentTick].length - 1;
        for(var j in hitboxes)
        {
            cache[currentTick][currentEnemy].hitboxes.push(Entity.GetHitboxPosition(enemies[i], hitboxes[j]));
        }
    }
}

function clearCache()
{
    enemies = [];
    players = [];
    rageTargets = [];
    //most importantly
    targetsPositions = {};
}

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

function getActiveCount(value,maxIndex)
{
    if(value == 0)
    {
        return 0;
    }
    var found = 0;
    for(i = 0;i <= maxIndex;i++)
    {
        if(getDropdownValue(value, i) == true)
        {
            found++;
        }
    }
    return found;
}

function getActiveItems(value,maxIndex)
{
    if(value == 0)
    {
        return [];
    }
    var activeItems = []
    for(i = 0;i <= maxIndex;i++)
    {
        if(getDropdownValue(value, i) == true)
        {
            activeItems = activeItems.concat(i)
        }
    }
    return activeItems;

}

function getValueFromCounter(value, varConter, maxIndex)
{
    if(value == 0)
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
        if(getDropdownValue(value, i) == true)
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
    Object.keys(AA).forEach(function(key)
    {
        presetNames=presetNames.concat(AA[key].presetName)
    });
    
    Cheat.Print(presetNames.toString())
    UI.UpdateList(aa_path.concat("Presets"),presetNames);
    UI.UpdateList(aa_control_path.concat("Presets"),presetNames);


}

//the reason this is a thing is due to how resource intensive it is to read a ton of sliders every single tick
//so sliders are essentially just an interface and youd actually have to update a config for it to work
//nvm it isnt but im keeping this anyway
function updateConfig()
{
    //Cheat.Print(UI.GetValue(aa_path.concat("Presets")).toString());
    UI.SetValue(["Config", "Cheat", "General", "Restrictions"], 0);
    
    
    if(UI.GetValue(main_path.concat("UPDATE CONFIG"))==1)
    {
        // do magic here
        /*
        if(UI.GetValue(secrets_path.concat("Protect Config With Password"))==1)
        {
                                                                                                                                                                                                                      
            
        }
        */

        uiUpdate=false;
        presetUpdate=false;
        if(initAA==true)
        {
            initAA=false;
            //disables default ot aa
            UI.SetValue(aa_default_path.concat("Yaw offset"),0);
            UI.SetValue(aa_default_path.concat("Jitter offset"),0);
            UI.SetEnabled(aa_default_path.concat("Yaw offset"),0);
            UI.SetEnabled(aa_default_path.concat("Jitter offset"),0);
            //set default shit to 0
            updatePresetNames();
        }
        //load and save
        if(UI.GetValue(main_path.concat("SAVE CONFIG")) == 1)
        {
            UI.SetValue(main_path.concat("SAVE CONFIG"), 0)
            configName = UI.GetString(main_path.concat("Config Name:"))
            saveConfig();
        }
        if(UI.GetValue(main_path.concat("LOAD CONFIG")) == 1)
        {
            UI.SetValue(main_path.concat("LOAD CONFIG"), 0)
            configName = UI.GetString(main_path.concat("Config Name:"))
            loadConfig();
            //forces stuff to switch
            presetCache = 420;
            realModeCache = 420;
            fakeModeCache = 420;
            LBYModeCache = 420;
            realSwitchCache = 420;
            fakeSwitchCache = 420;
            LBYSwitchCache = 420;
        }

        
        presetVal=UI.GetValue(aa_path.concat("Presets"));
        if(typeof presetVal != Number)
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
            CONFIG_INFO.presetsLength++;
        }
        if(UI.GetValue(aa_path.concat("Confirm")))
        {
            UI.SetValue(aa_path.concat("Confirm") , 0);
            
            AA[presetVal].presetName = UI.GetString(aa_path.concat("Rename Selected Preset:"));
            updatePresetNames();
        }
        
        //save data from ui to aa array
        //verify auth intergity with password

        if(presetVal != presetCache)
        {
            presetCache = presetVal;
            uiUpdate = true;
            UI.SetValue(aa_path.concat("Real Mode") , AA[presetVal].modes.real);
            UI.SetValue(aa_path.concat("Fake Mode") , AA[presetVal].modes.fake);
            UI.SetValue(aa_path.concat("LBY Mode") , AA[presetVal].modes.LBY);
            
        }
        //if stuff here changed

        realModeVal=UI.GetValue(aa_path.concat("Real Mode"));
        fakeModeVal=UI.GetValue(aa_path.concat("Fake Mode")); 
        LBYModeVal=UI.GetValue(aa_path.concat("LBY Mode"));
        realSwitchVal=UI.GetValue(aa_path.concat("Real Switch Phase"));
        fakeSwitchVal=UI.GetValue(aa_path.concat("Fake Switch Phase"));
        LBYSwitchVal=UI.GetValue(aa_path.concat("LBY Switch Phase"));

        modeVal=UI.GetString(aa_control_path.concat("Conditions"));
        //Cheat.Print(AA)


        if(realModeVal!=realModeCache)
        {
            //Cheat.Print("updated this thing");
            realModeCache = realModeVal;
            AA[presetVal].modes.real = realModeVal;
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

                    UI.SetValue(aa_path.concat("Real Offset"), AA[presetVal].static.real.offset);
                    break;
                case 1:
                    //jitter
                    UI.SetEnabled(aa_path.concat("Real Switch Phase"), 0);
                    UI.SetEnabled(aa_path.concat("Active Real Switch Phases"), 0);
                    UI.SetEnabled(aa_path.concat("Real Offset"), 1);
                    UI.SetEnabled(aa_path.concat("Real Delta"), 1);
                    UI.SetEnabled(aa_path.concat("Real Delay"), 1);
                    UI.SetEnabled(aa_path.concat("Real Delay Offset"), 1);

                    UI.SetValue(aa_path.concat("Real Offset"), AA[presetVal].jitter.real.offset);
                    UI.SetValue(aa_path.concat("Real Delta"), AA[presetVal].jitter.real.delta);
                    UI.SetValue(aa_path.concat("Real Delay"), AA[presetVal].jitter.real.delay);
                    
                    UI.SetValue(aa_path.concat("Real Delay Offset"), AA[presetVal].jitter.real.delayOffset);
                    break;
                case 2:
                    //switch

                   
                    UI.SetEnabled(aa_path.concat("Real Switch Phase"),1);
                    UI.SetEnabled(aa_path.concat("Active Real Switch Phases"),1);
                    UI.SetEnabled(aa_path.concat("Real Offset"),1);
                    UI.SetEnabled(aa_path.concat("Real Delta"),0);
                    UI.SetEnabled(aa_path.concat("Real Delay"),1);
                    UI.SetEnabled(aa_path.concat("Real Delay Offset"),1);

                    UI.SetValue(aa_path.concat("Real Switch Phase"),0);
                    UI.SetValue(aa_path.concat("Active Real Switch Phases"),AA[presetVal].switch.real.activePhases+1);
                    UI.SetValue(aa_path.concat("Real Offset"),AA[presetVal].switch.real.offset[0]);
                    UI.SetValue(aa_path.concat("Real Delay"),AA[presetVal].switch.real.delay[0]);
                    UI.SetValue(aa_path.concat("Real Delay Offset"),AA[presetVal].switch.real.delayOffset[0]);
                    break;
                
                case 3:
                    //sway
                    UI.SetEnabled(aa_path.concat("Real Switch Phase"),0);
                    UI.SetEnabled(aa_path.concat("Active Real Switch Phases"),0);
                    UI.SetEnabled(aa_path.concat("Real Offset"),1);
                    UI.SetEnabled(aa_path.concat("Real Delta"),1);
                    UI.SetEnabled(aa_path.concat("Real Delay"),1);
                    UI.SetEnabled(aa_path.concat("Real Delay Offset"),0);

                    UI.SetValue(aa_path.concat("Real Offset"),AA[presetVal].sway.real.offset);
                    UI.SetValue(aa_path.concat("Real Delta"),AA[presetVal].sway.real.delta);
                    UI.SetValue(aa_path.concat("Real Delay"),AA[presetVal].sway.real.delay);
                    break;
                case 4:
                    //random
                    UI.SetEnabled(aa_path.concat("Real Switch Phase"),0);
                    UI.SetEnabled(aa_path.concat("Active Real Switch Phases"),0);
                    UI.SetEnabled(aa_path.concat("Real Offset"),1);
                    UI.SetEnabled(aa_path.concat("Real Delta"),1);
                    UI.SetEnabled(aa_path.concat("Real Delay"),1);
                    UI.SetEnabled(aa_path.concat("Real Delay Offset"),1);

                    UI.SetValue(aa_path.concat("Real Offset"), AA[presetVal].random.real.offset);
                    UI.SetValue(aa_path.concat("Real Delta"), AA[presetVal].random.real.delta);
                    UI.SetValue(aa_path.concat("Real Delay"), AA[presetVal].random.real.delay);
                    UI.SetValue(aa_path.concat("Real Delay Offset"), AA[presetVal].random.real.delayOffset);
                    break;

            }
                

            uiUpdate=true;
        }
        if(fakeModeVal!=fakeModeCache)
        {

            fakeModeCache=fakeModeVal;
            AA[presetVal].modes.fake=fakeModeVal;
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

                    UI.SetValue(aa_path.concat("Fake Offset"),AA[presetVal].static.fake.offset);
                    break;
                case 1:
                    //jitter
                    UI.SetEnabled(aa_path.concat("Fake Switch Phase"),0);
                    UI.SetEnabled(aa_path.concat("Active Fake Switch Phases"),0);
                    UI.SetEnabled(aa_path.concat("Fake Offset"),1);
                    UI.SetEnabled(aa_path.concat("Fake Delta"),1);
                    UI.SetEnabled(aa_path.concat("Fake Delay"),1);
                    UI.SetEnabled(aa_path.concat("Fake Delay Offset"),1);

                    UI.SetValue(aa_path.concat("Fake Offset"),AA[presetVal].jitter.fake.offset);
                    UI.SetValue(aa_path.concat("Fake Delta"),AA[presetVal].jitter.fake.delta);
                    UI.SetValue(aa_path.concat("Fake Delay"),AA[presetVal].jitter.fake.delay);
                    UI.SetValue(aa_path.concat("Fake Delay Offset"),AA[presetVal].jitter.fake.delayOffset);
                    break;
                case 2:
                    //switch

                    UI.SetEnabled(aa_path.concat("Fake Switch Phase"),1);
                    UI.SetEnabled(aa_path.concat("Active Fake Switch Phases"),1);
                    UI.SetEnabled(aa_path.concat("Fake Offset"),1);
                    UI.SetEnabled(aa_path.concat("Fake Delta"),0);
                    UI.SetEnabled(aa_path.concat("Fake Delay"),1);
                    UI.SetEnabled(aa_path.concat("Fake Delay Offset"),1);

                    UI.SetValue(aa_path.concat("Fake Switch Phase"),0);
                    UI.SetValue(aa_path.concat("Active Fake Switch Phases"),AA[presetVal].switch.fake.activePhases+1);
                    UI.SetValue(aa_path.concat("Fake Offset"),AA[presetVal].switch.fake.offset[0]);
                    UI.SetValue(aa_path.concat("Fake Delay"),AA[presetVal].switch.fake.delay[0]);
                    UI.SetValue(aa_path.concat("Fake Delay Offset"),AA[presetVal].switch.fake.delayOffset[0]);
                    
                    break;
                
                case 3:
                    //sway
                    UI.SetEnabled(aa_path.concat("Fake Switch Phase"),0);
                    UI.SetEnabled(aa_path.concat("Active Fake Switch Phases"),0);
                    UI.SetEnabled(aa_path.concat("Fake Offset"),1);
                    UI.SetEnabled(aa_path.concat("Fake Delta"),1);
                    UI.SetEnabled(aa_path.concat("Fake Delay"),1);
                    UI.SetEnabled(aa_path.concat("Fake Delay Offset"),0);

                    UI.SetValue(aa_path.concat("Fake Offset"), AA[presetVal].sway.fake.offset);
                    UI.SetValue(aa_path.concat("Fake Delta"), AA[presetVal].sway.fake.delta);
                    UI.SetValue(aa_path.concat("Fake Delay"), AA[presetVal].sway.fake.delay);
                    break;
                case 4:
                    //random
                    UI.SetEnabled(aa_path.concat("Fake Switch Phase"),0);
                    UI.SetEnabled(aa_path.concat("Active Fake Switch Phases"),0);
                    UI.SetEnabled(aa_path.concat("Fake Offset"),1);
                    UI.SetEnabled(aa_path.concat("Fake Delta"),1);
                    UI.SetEnabled(aa_path.concat("Fake Delay"),1);
                    UI.SetEnabled(aa_path.concat("Fake Delay Offset"),1);

                    UI.SetValue(aa_path.concat("Fake Offset"),AA[presetVal].random.fake.offset);
                    UI.SetValue(aa_path.concat("Fake Delta"),AA[presetVal].random.fake.delta);
                    UI.SetValue(aa_path.concat("Fake Delay"),AA[presetVal].random.fake.delay);
                    UI.SetValue(aa_path.concat("Fake Delay Offset"),AA[presetVal].random.fake.delayOffset);
                    break;
                    
            }

            uiUpdate=true;
        }
        if(LBYModeVal!=LBYModeCache)
        {
            LBYModeCache=LBYModeVal;
            AA[presetVal].modes.LBY=LBYModeVal;
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

                    UI.SetValue(aa_path.concat("LBY Offset"),AA[presetVal].static.LBY.offset);
                    break;
                case 1:
                    //jitter
                    UI.SetEnabled(aa_path.concat("LBY Switch Phase"),0);
                    UI.SetEnabled(aa_path.concat("Active LBY Switch Phases"),0);
                    UI.SetEnabled(aa_path.concat("LBY Offset"),1);
                    UI.SetEnabled(aa_path.concat("LBY Delta"),1);
                    UI.SetEnabled(aa_path.concat("LBY Delay"),1);
                    UI.SetEnabled(aa_path.concat("LBY Delay Offset"),1);

                    UI.SetValue(aa_path.concat("LBY Offset"),AA[presetVal].jitter.LBY.offset);
                    UI.SetValue(aa_path.concat("LBY Delta"),AA[presetVal].jitter.LBY.delta);
                    UI.SetValue(aa_path.concat("LBY Delay"),AA[presetVal].jitter.LBY.delta);
                    UI.SetValue(aa_path.concat("LBY Delay Offset"),AA[presetVal].jitter.LBY.delayOffset);
                    break;
                case 2:
                    //switch

                    UI.SetEnabled(aa_path.concat("LBY Switch Phase"),1);
                    UI.SetEnabled(aa_path.concat("Active LBY Switch Phases"),1);
                    UI.SetEnabled(aa_path.concat("LBY Offset"),1);
                    UI.SetEnabled(aa_path.concat("LBY Delta"),0);
                    UI.SetEnabled(aa_path.concat("LBY Delay"),1);
                    UI.SetEnabled(aa_path.concat("LBY Delay Offset"),1);

                    UI.SetValue(aa_path.concat("LBY Switch Phase"),0);
                    UI.SetValue(aa_path.concat("Active LBY Switch Phases"),AA[presetVal].switch.LBY.activePhases+1);
                    UI.SetValue(aa_path.concat("LBY Offset"),AA[presetVal].switch.LBY.offset[0]);
                    UI.SetValue(aa_path.concat("LBY Delay"),AA[presetVal].switch.LBY.delay[0]);
                    UI.SetValue(aa_path.concat("LBY Delay Offset"),AA[presetVal].switch.LBY.delayOffset[0]);
                    break;
                
                case 3:
                    //sway
                    UI.SetEnabled(aa_path.concat("LBY Switch Phase"),0);
                    UI.SetEnabled(aa_path.concat("Active LBY Switch Phases"),0);
                    UI.SetEnabled(aa_path.concat("LBY Offset"),1);
                    UI.SetEnabled(aa_path.concat("LBY Delta"),1);
                    UI.SetEnabled(aa_path.concat("LBY Delay"),1);
                    UI.SetEnabled(aa_path.concat("LBY Delay Offset"),0);

                    UI.SetValue(aa_path.concat("LBY Offset"),AA[presetVal].sway.LBY.offset);
                    UI.SetValue(aa_path.concat("LBY Delta"),AA[presetVal].sway.LBY.delta);
                    UI.SetValue(aa_path.concat("LBY Delay"),AA[presetVal].sway.LBY.delay);
                    break;
                case 4:
                    //random
                    UI.SetEnabled(aa_path.concat("LBY Switch Phase"),0);
                    UI.SetEnabled(aa_path.concat("Active LBY Switch Phases"),0);
                    UI.SetEnabled(aa_path.concat("LBY Offset"),1);
                    UI.SetEnabled(aa_path.concat("LBY Delta"),1);
                    UI.SetEnabled(aa_path.concat("LBY Delay"),1);
                    UI.SetEnabled(aa_path.concat("LBY Delay Offset"),1);

                    UI.SetValue(aa_path.concat("LBY Offset"),AA[presetVal].random.LBY.offset);
                    UI.SetValue(aa_path.concat("LBY Delta"),AA[presetVal].random.LBY.delta);
                    UI.SetValue(aa_path.concat("LBY Delay"),AA[presetVal].random.LBY.delay);
                    UI.SetValue(aa_path.concat("LBY Delay Offset"),AA[presetVal].random.LBY.delayOffset);
                    break;
                    
            }

            uiUpdate=true;
        }
        //update switch ui
        //real
        if(AA[presetVal].modes.real == 2)
        {

            realSwitchVal = UI.GetValue(aa_path.concat("Real Switch Phase"))
            if(realSwitchVal!=realSwitchCache)
            {
                realSwitchCache = realSwitchVal;
                UI.SetValue(aa_path.concat("Real Offset"),AA[presetVal].switch.real.offset[realSwitchVal]);
                UI.SetValue(aa_path.concat("Real Delay"),AA[presetVal].switch.real.delay[realSwitchVal]);
                UI.SetValue(aa_path.concat("Real Delay Offset"),AA[presetVal].switch.real.delayOffset[realSwitchVal]);
                uiUpdate=true;
            }
        }
        //fake
        if(AA[presetVal].modes.fake == 2)
        {

            fakeSwitchVal = UI.GetValue(aa_path.concat("Fake Switch Phase"))
            if(fakeSwitchVal != fakeSwitchCache)
            {
                fakeSwitchCache=fakeSwitchVal;
                UI.SetValue(aa_path.concat("Fake Offset"), AA[presetVal].switch.fake.offset[fakeSwitchVal]);
                UI.SetValue(aa_path.concat("Fake Delay"), AA[presetVal].switch.fake.delay[fakeSwitchVal]);
                UI.SetValue(aa_path.concat("Fake Delay Offset"), AA[presetVal].switch.fake.delayOffset[fakeSwitchVal]);
                uiUpdate=true;
            }
        }
        //lby
        if(AA[presetVal].modes.LBY == 2)
        {

            LBYSwitchVal = UI.GetValue(aa_path.concat("LBY Switch Phase"))
            if(LBYSwitchVal!=LBYSwitchCache)
            {
                LBYSwitchCache=LBYSwitchVal;
                UI.SetValue(aa_path.concat("LBY Offset"),AA[presetVal].switch.LBY.offset[LBYSwitchVal]);
                UI.SetValue(aa_path.concat("LBY Delay"),AA[presetVal].switch.LBY.delay[LBYSwitchVal]);
                UI.SetValue(aa_path.concat("LBY Delay Offset"),AA[presetVal].switch.LBY.delayOffset[LBYSwitchVal]);
                uiUpdate=true;
            }
        }


        //update aa values if ui isnt updating
        if(uiUpdate==false)
        {
            //do stuff

            //real
            //Cheat.Print(AA[presetVal][6][0].toString()+"IS CURRENT MODE\n")
            switch(AA[presetVal].modes.real)
            {
                //static
                case 0:
                    AA[presetVal].static.real.offset = UI.GetValue(aa_path.concat("Real Offset"));
                    break;
                //jitter
                case 1:
                    AA[presetVal].jitter.real.offset = UI.GetValue(aa_path.concat("Real Offset"));
                    AA[presetVal].jitter.real.delta = UI.GetValue(aa_path.concat("Real Delta"));
                    AA[presetVal].jitter.real.delay = UI.GetValue(aa_path.concat("Real Delay"));
                    AA[presetVal].jitter.real.delayOffset = UI.GetValue(aa_path.concat("Real Delay Offset"));
                    break;
                //switch
                case 2:
                    
                    AA[presetVal].switch.real.offset[realSwitchVal] = UI.GetValue(aa_path.concat("Real Offset"));
                    AA[presetVal].switch.real.delay[realSwitchVal] = UI.GetValue(aa_path.concat("Real Delay"));
                    AA[presetVal].switch.real.activePhases = UI.GetValue(aa_path.concat("Active Real Switch Phases"))-1;
                    break;
                //sway
                case 3:
                    AA[presetVal].sway.real.offset = UI.GetValue(aa_path.concat("Real Offset"));
                    AA[presetVal].sway.real.delta = UI.GetValue(aa_path.concat("Real Delta"));
                    AA[presetVal].sway.real.delay = UI.GetValue(aa_path.concat("Real Delay"));
                    break;
                //random
                case 4:
                    AA[presetVal].random.real.offset = UI.GetValue(aa_path.concat("Real Offset"));
                    AA[presetVal].random.real.delta = UI.GetValue(aa_path.concat("Real Delta"));
                    AA[presetVal].random.real.delay = UI.GetValue(aa_path.concat("Real Delay"));
                    AA[presetVal].random.real.delayOffset = UI.GetValue(aa_path.concat("Real Delay Offset"))
                    break;
            }
            //fake
            switch(AA[presetVal].modes.fake)
            {
                //static
                case 0:
                    AA[presetVal].static.fake.offset = UI.GetValue(aa_path.concat("Fake Offset"));
                    break;
                //jitter
                case 1:
                    AA[presetVal].jitter.fake.offset = UI.GetValue(aa_path.concat("Fake Offset"));
                    AA[presetVal].jitter.fake.delta = UI.GetValue(aa_path.concat("Fake Delta"));
                    AA[presetVal].jitter.fake.delay =UI.GetValue(aa_path.concat("Fake Delay"));
                    AA[presetVal].jitter.fake.delayOffset =UI.GetValue(aa_path.concat("Fake Delay Offset"));
                    break;
                //switch
                case 2:
                    AA[presetVal].switch.fake.offset[fakeSwitchVal] = UI.GetValue(aa_path.concat("Fake Offset"));
                    AA[presetVal].switch.fake.delay[fakeSwitchVal] = UI.GetValue(aa_path.concat("Fake Delay"));
                    AA[presetVal].switch.fake.activePhases = UI.GetValue(aa_path.concat("Active Fake Switch Phases"))-1;
                    break;
                //sway
                case 3:
                    AA[presetVal].sway.fake.offset = UI.GetValue(aa_path.concat("Fake Offset"));
                    AA[presetVal].sway.fake.delta = UI.GetValue(aa_path.concat("Fake Delta"));
                    AA[presetVal].sway.fake.delay = UI.GetValue(aa_path.concat("Fake Delay"));
                    break;
                //random
                case 4:
                    AA[presetVal].random.fake.offset = UI.GetValue(aa_path.concat("Fake Offset"));
                    AA[presetVal].random.fake.delta = UI.GetValue(aa_path.concat("Fake Delta"));
                    AA[presetVal].random.fake.delay = UI.GetValue(aa_path.concat("Fake Delay"));
                    AA[presetVal].random.fake.delayOffset = UI.GetValue(aa_path.concat("Fake Delay Offset"));
                    break;
            }
            //lby
            switch(AA[presetVal].modes.LBY)
            {
                //static
                case 0:
                    AA[presetVal].static.LBY.offset = UI.GetValue(aa_path.concat("LBY Offset"));
                    break;
                //jitter
                case 1:
                    AA[presetVal].jitter.LBY.offset = UI.GetValue(aa_path.concat("LBY Offset"));
                    AA[presetVal].jitter.LBY.delta = UI.GetValue(aa_path.concat("LBY Delta"));
                    AA[presetVal].jitter.LBY.delay = UI.GetValue(aa_path.concat("LBY Delay"));
                    AA[presetVal].jitter.LBY.delayOffset = UI.GetValue(aa_path.concat("LBY Delay Offset"));
                    break;
                //switch
                case 2:
                    AA[presetVal].switch.LBY.offset[LBYSwitchVal]=UI.GetValue(aa_path.concat("LBY Offset"));
                    AA[presetVal].switch.LBY.delay[LBYSwitchVal]=UI.GetValue(aa_path.concat("LBY Delay"));
                    AA[presetVal].switch.LBY.activePhases=UI.GetValue(aa_path.concat("Active LBY Switch Phases"))-1;
                    break;
                //sway
                case 3:
                    AA[presetVal].sway.LBY.offset = UI.GetValue(aa_path.concat("LBY Offset"));
                    AA[presetVal].sway.LBY.delta = UI.GetValue(aa_path.concat("LBY Delta"));
                    AA[presetVal].sway.LBY.delay = UI.GetValue(aa_path.concat("LBY Delay"));
                    break;
                //random
                case 4:
                    AA[presetVal].random.LBY.offset = UI.GetValue(aa_path.concat("LBY Offset"));
                    AA[presetVal].random.LBY.delta = UI.GetValue(aa_path.concat("LBY Delta"));
                    AA[presetVal].random.LBY.delay = UI.GetValue(aa_path.concat("LBY Delay"));
                    AA[presetVal].random.LBY.delayOffset = UI.GetValue(aa_path.concat("LBY Delay Offset"))
                    break;
            }
        }
        //AA Manager UI
        //TEST UI.GetString
        if(typeof modeVal != String)
        {
            modeVal = "Dormant"
        }
        /*
        Cheat.Print(modeVal)
        Cheat.Print(AA_MANAGER[modeVal].toString())
        */
        if(modeVal != modeCache)
        {
            modeCache = modeVal;
            UI.SetValue(aa_control_path.concat("Switch"),AA_MANAGER[modeVal].switchMode);
            UI.SetValue(aa_control_path.concat("Anti Bruteforce"),AA_MANAGER[modeVal].dodgeBruteforce);
            UI.SetValue(aa_control_path.concat("Presets"),AA_MANAGER[modeVal].activePresets)
            presetUpdate = true;
            if(AA_MANAGER[modeVal].switchMode == 0)
            {
                UI.SetEnabled(aa_control_path.concat("Switch Delay"),0);
                UI.SetEnabled(aa_control_path.concat("Switch Delta"),0);

                UI.SetValue(aa_control_path.concat("Anti Bruteforce"),AA_MANAGER[modeVal].dodgeBruteforce);
            }
            else
            {
                UI.SetEnabled(aa_control_path.concat("Switch Delay"),1);
                UI.SetEnabled(aa_control_path.concat("Switch Delta"),1);

                UI.SetValue(aa_control_path.concat("Anti Bruteforce"),AA_MANAGER[modeVal].dodgeBruteforce);
                UI.SetValue(aa_control_path.concat("Switch Delay"),AA_MANAGER[modeVal].switchDelay);
                UI.SetValue(aa_control_path.concat("Switch Delta"),AA_MANAGER[modeVal].switchDelta);
            }
        }
        if(presetUpdate == false)
        {
            AA_MANAGER[modeVal].switchMode = UI.GetValue(aa_control_path.concat("Switch"));
            AA_MANAGER[modeVal].dodgeBruteforce = UI.GetValue(aa_control_path.concat("Anti Bruteforce"));
            AA_MANAGER[modeVal].activePresets =UI.GetValue(aa_control_path.concat("Presets"));
            AA_MANAGER[modeVal].switchDelay=UI.GetValue(aa_control_path.concat("Switch Delay"));
            AA_MANAGER[modeVal].switchDelta=UI.GetValue(aa_control_path.concat("Switch Delta"));
        }
  
        
    }
  
}

//fake lag
function updateFakelag()
{
    //TODO: make this thing
}


//fake duck from fourms
function fastDuckUpdate() {
    var buttons = UserCMD.GetButtons();
    var localPlayer = Entity.GetLocalPlayer();
    //TODO
    //MAKE THIS ADJUSTABLE
    //also make this 100-x if u can be bothered(makes settings less counter-intuitive than it already is)
    var maxLevel=31;
    var minlevel=80;

    //var valve = Entity.GetProp(Entity.GetGameRulesProxy(), "CCSGameRulesProxy", "m_bIsValveDS");
    //if (!valve) { return;}

        //using the fluctuate duck thing regardless of game server mode
    if (UI.GetValue(["Rage", "Anti Aim", "General", "Key assignment", "Fake duck"])) 
    {
        enableFakeLag = false;
        duckAmount = Entity.GetProp(localPlayer, "CCSPlayer", "m_flDuckAmount");
        UserCMD.Choke();
        //
        if (duckAmount <= maxLevel / 100) 
        {
            crouch = true
        };
        //if too low
        if (duckAmount >= minlevel / 100) 
        {
            crouch = false;
            UserCMD.Send()
        };
        if (crouch) 
        {
            //duck
            UserCMD.SetButtons(buttons | (1 << 2));
        } 
        else 
        {
        //unduck
            UserCMD.SetButtons(buttons | (1 << 22));
        }

        //camfix below
        eyePos = Entity.GetEyePosition(localPlayer);
        origin = Entity.GetRenderOrigin(localPlayer);
        eyePos[2] = origin[2] + 46 + (18 - (maxLevel + 1) / 100 * 18);
        cameraPos=Local.GetCameraPosition();
        //if not pressing ctrl
        if(!Input.IsKeyPressed(0x11))
        {
            //do thirdperson camfix if enabled
            if(UI.GetValue(["Misc.","Keys","General","Key assignment","Thirdperson"])==1)
            {
                angles=Local.GetViewAngles();
                 angles[0]=angles[0]*-1;
                if(angles[1]>0)
                {
                    angles[1]=angles[1]-180;
                }
            
                else
                {
                    angles[1]=180+angles[1];
                }
                back = getWallDistance(localPlayer, angles);
                angles=ANGLE2VEC(angles);
                thirdDistance=UI.GetValue(["Misc.","View","General","Thirdperson Distance"]);
                if(back<thirdDistance)
                {
                    thirdDistance=back-10;
                }
                Local.SetCameraPosition([eyePos[0]+angles[0]*thirdDistance,eyePos[1]+angles[1]*thirdDistance,eyePos[2]+angles[2]*thirdDistance]);
            }
            else
            {
                Local.SetCameraPosition([eyePos[0],eyePos[1],eyePos[2]]);
            }
        }
    } 
    else 
    {
        //unduck if not active at all(lol)
        UserCMD.SetButtons(buttons | (1 << 22));
        enableFakeLag = true;
    }
    //}
}
//best shit ever made no cap B)
//TODO: actually make it
function autoBacktrackPeek()
{

}


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

function getIndicatorString(item)
{
    crosshairIndicatorItems
    switch(item)
    {
        case "AA Behavior":
            return currentAAMode;

        case "AA Preset":
            return AA[modeCounter].general.misc.presetName;

        case "Hide Shots":
            return "HS";

        case "Double Tap":
            return "DT";
        
        case "Hitchance and Mindmg":
            return "wip, fuck you";
        
        case "Target":
            return "again, wip";
        
        case "Fakelag History":
            return fakeLagCache[0].toString() + ">>" + fakeLagCache[1].toString() + ">>"+ fakeLagCache[2].toString() + ">>" + fakeLagCache[3].toString();
        
    }
    ["AA Behavior","AA Preset","Hide Shots","Double Tap","Hitchance and Mindmg","Target","Fakelag History"]
}

function renderCrosshairIndicators(activeItems)
{
    font = Render.GetFont(fonts.Arial)
    hueDegree = (Globals.Realtime() % (360 * VISUALS.rainbow.changeRate))/VISUALS.rainbow.changeRate;
    rainbowRGB = HSV2RGB(hueDegree1, 1, 1);
    rainbowColor = [rainbowRGB.r, rainbowRGB.g, rainbowRGB.b, 255];

    textOffset = 10

    for(i = 0;i < activeItems.length;i++)
    {
        if(i==2 && UI.GetValue(exploits_keybinds.concat("Double tap"))==false)
        {

        }
        Render.String(screenResolution[0] / 2,(screenResolution[1] / 2) - textOffset * i , 0, getIndicatorString(), rainbowColor,font)
    }
}

function renderItems()
{
    
    screenResolution = Render.GetScreenSize();
    //use this
    hueDegree1 = (Globals.Realtime() % (360 * VISUALS.rainbow.changeRate))/VISUALS.rainbow.changeRate;
    rainbowRGB1 = HSV2RGB(hueDegree1, 1, 1);
    rainbowColor1 = [rainbowRGB1.r, rainbowRGB1.g, rainbowRGB1.b, 255];

    //for rainbow bars
    hueDegree2 = ((Globals.Realtime() + VISUALS.rainbow.colorOffset) % (360 * VISUALS.rainbow.changeRate))/VISUALS.rainbow.changeRate;
    rainbowRGB2 = HSV2RGB(hueDegree2, 1, 1);
    rainbowColor2 = [rainbowRGB2.r, rainbowRGB2.g, rainbowRGB2.b, 255];

    renderCrosshairIndicators();





    
    
}

function overrideDoubletap()
{
    Exploit.OverrideShift(UI.GetValue(exploits_path.concat("Doubletap Shift")))
    Exploit.OverrideTolerance(UI.GetValue(exploits_path.concat("Doubletap Tolerance")))
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
            var curtime = Globals.Curtime();
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

    var curtime = Globals.Curtime();
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
            antiBruteSwitch=true;
        }

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
    
    //Cheat.Print("set mode "+mode);
    //Cheat.Print(" with value"+value.toString()+"\n");
    
    AntiAim.SetOverride(1)
    switch(mode)
    {
        case "real":
            AntiAim.SetRealOffset(value);
            break;
        case "fake":
            AntiAim.SetFakeOffset(value);
            break;
        case "LBY":
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
        key=angleTypes[i];
        //Cheat.Print("current iterating key "+ key +" which has a value of " + AA[preset].modes[key].toString()+"\n")


        switch(AA[preset].modes[key])
        {
            //static
            case 0:
                SetOffset(AA[preset].static[key].offset, key);
                break;

            //jitter
            case 1:

                //if time to change phase
                if(currentTime>=clampTo(jitterTimer[key] + AA[preset].jitter[key].delay + jitterTimeOffset[key], 1, 0))
                {
                   
                    
                    jitterTimer[key] = currentTime;
                    //generates offsets if randomized set to true
                    if(AA[preset].jitter[key].delayOffset != 0)
                    {
                        jitterTimeOffset[key] = Math.round(zeroToNegOne(Math.round(Math.random()))*Math.random()*AA[preset].jitter[key].delayOffset);
                    }
                    else
                    {
                        jitterTimeOffset[key]=0;
                    }
                    
                    
                    jitterPhaseCounter[key] = NOT(jitterPhaseCounter[key]);
                    
                }        
                
                
                if(jitterPhaseCounter[key] == 0)
                {
                    SetOffset(AA[preset].jitter[key].offset, key);
                }
                else
                {
                    SetOffset(AA[preset].jitter[key].offset + AA[preset].jitter[key].delta, key);
                } 
                break;
                

            //switch
            case 2:
                            
                //if phase completed
                
                if(currentTime >= clampTo(switchTimer[key] + AA[preset].switch[key].delay[switchPhaseCounter[key]] + switchTimeOffset[key], 1, 0))
                {
                    switchTimer[key] = currentTime;
                    //if phase index maxed out
                    if(switchPhaseCounter[key] >= AA[preset].switch[key].activePhases)
                    {
                        switchPhaseCounter[key] = 0;
                    }
                    else
                    {
                        switchPhaseCounter[key]++;
                    }

                    //set offset from phase
                    if(AA[preset].switch[key].delayOffset[switchPhaseCounter[key]] != 0)
                    {
                        switchTimeOffset[key] = Math.round(zeroToNegOne(Math.round(Math.random())) * Math.random() * AA[preset].switch[key].delayOffset[switchPhaseCounter[key]]);
                    }
                    else
                    {
                        switchTimeOffset[key] = 0;                      
                    }

                }
                
                SetOffset(AA[preset].switch[key].offset[switchPhaseCounter[key]], key);
                break;

            //sway
            case 3:

                if(currentTime <= clampTo(swayTimer[key] + AA[preset].sway[key].delay, 1, 0))
                {
                    swayCycleTimer[key] = clampTo(swayTimer[key] + AA[preset].sway[key].delay, 1, 0) - currentTime;
                    //delta=(finish-start)
                    //percentage=(fullCycleTime-currentTime)/timePerCycle
                    
                    SetOffset(Math.round(AA[preset].sway[key].offset+(AA[preset].sway[key].delta * (swayCycleTimer[key] / AA[preset].sway[key].delay))), key);
                }
                else
                {
                    swayTimer[key] = currentTime;
                    swayCycleTimer[key] = 0;
                    SetOffset(AA[preset].sway[key].offset, key);
                }
                break;

            //random
            case 4:
                if(currentTime >= clampTo(randomTimer[key] + AA[preset].random[key].delay + randomTimeOffset[key], 1, 0))
                {
                    randomTimer[key] = currentTime;
                    //generates offsets if offset nonzero
                    if(AA[preset].random[key].delayOffset != 0)
                    {
                        randomTimeOffset[key] = Math.round(zeroToNegOne(Math.round(Math.random())) * Math.random() * AA[preset].random[key].delayOffset);
                    }
                    else
                    {
                        randomTimeOffset[key] = 0;                      
                    }
                    //generates angle offset
                    randomAngleOffset[key] = Math.round(zeroToNegOne(Math.round(Math.random())) * Math.random() * AA[preset].random[key].delta);
                    
                
                }
                SetOffset(randomAngleOffset[key], key);
                break;
         
        }
    }
    
}

//handles presets ig
function switchAA()
{
    var localPlayer = Entity.GetLocalPlayer();
    //Cheat.Print("switch aa called\n");
     //if legit aa(highest prio)
    /*
    else if(epeeking)
    {
        currentAAMode = "On Use";
    }
    */
    //if overriding(SECOND highest priority)
    if(UI.GetHotkeyState(rage_keybinds.concat("AA Override Key 4")==1))
    {
        currentAAMode = "Override Key 4";
    }
    else if(UI.GetHotkeyState(rage_keybinds.concat("AA Override Key 3")==1))
    {
        currentAAMode = "Override Key 3";
    }
    else if(UI.GetHotkeyState(rage_keybinds.concat("AA Override Key 2")==1))
    {
        currentAAMode = "Override Key 2";
    }
    else if(UI.GetHotkeyState(rage_keybinds.concat("AA Override Key 1")==1))
    {
        currentAAMode = "Override Key 1";
    }
   
    else if(UI.GetHotkeyState(rage_keybinds.concat("Slow walk")==1))
    {
        currentAAMode = "Slow-Walking";
    }
    
    else if(UI.GetValue(aa_keybinds.concat("Fake duck"))==1)
    {
        currentAAMode = "Fake-Ducking";
    }
    else if(getWeapons(localPlayer)=="knife")
    {
        currentAAMode = "Knifing";
    }
    else if(getWeapons(localPlayer) =="zeus x27")
    {
        currentAAMode = "Zeusing";
    }
    
    else if(UI.GetValue(exploits_keybinds.concat("Hide shots"))==true)
    {
        currentAAMode = "HS Active";
    }
    
    else if(UI.GetValue(exploits_keybinds.concat("Double tap"))==true)
    {
        currentAAMode = "DT Active";
    }
    
    //in air
    else if(isInAir(localPlayer))
    {
        currentAAMode = "In Air";
    }
    /*
    else if(onpeek)
    {
        currentAAMode=5;
    }
    */
    
    else if(isDucking(localPlayer))
    {
        currentAAMode = "Crouching";
    }
    
    //if running
    else if(getVelocity(Entity.GetLocalPlayer()) > 1)
    {
        currentAAMode = "Running";
    }
    
    //dormant
    else
    {
        currentAAMode = "Dormant";
    }
    //if aa loop should continue(hasnt changed mode yet)
    //Cheat.Print("current aa mode: "+currentAAMode.toString()+"\n")
    if(currentAAMode==cachedAAMode)
    {
        //Cheat.Print("CONTINUING LOOP\n");
        currentTime=Globals.Tickcount();

        //if current phase finished
        if(AA_MANAGER[currentAAMode].switchMode != 0)
        {
            if(currentTime >= clampTo(modeTimer + modeDelay + modeDelta, 1, 0))
            {
                doSwitch=true;
                modeTimer=Globals.Tickcount();
                //generate random offsets if enabled
                if(AA_MANAGER[currentAAMode].switchDelta != 0)
                {
                    modeOffset=zeroToNegOne(Math.round(Math.random()))*Math.random()*AA_MANAGER[currentAAMode].switchDelta;
                }
                else
                {
                    modeOffset=0;
                }
            }
        
        
        }
        if(AA_MANAGER[currentAAMode].dodgeBruteforce == 1)
        {
            if(antiBruteSwitch==true)
            {
                antiBruteSwitch=false;
                doSwitch=true;
            }
        }
        //if either forced a switch or reached time
        if(doSwitch==true)
        {
            doSwitch=false;
            //possible optmization, but im lazy
            //calculate and save length internally
            if(modeCounter < getActiveCount(AA_MANAGER[currentAAMode].activePresets,AA.length-1))
            {    
                modeCounter++;
            }
            else 
            {
                modeCounter=0;
            }
     
        }
        updateAA(getValueFromCounter(AA_MANAGER[currentAAMode].activePresets, modeCounter, AA.length-1));

    }
    //restart loop if not
    else
    {
        updateAA(getValueFromCounter(AA_MANAGER[currentAAMode].activePresets, 0, AA.length-1));
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
Cheat.RegisterCallback("CreateMove","overrideDoubletap");
Cheat.RegisterCallback("player_connect","updatePlayerlist");
Cheat.RegisterCallback("player_disconnect","updatePlayerlist");
Cheat.RegisterCallback("CreateMove","updateRageTargets");
