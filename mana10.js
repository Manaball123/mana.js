//search for "TODO" to get a list of shit u need to do

const { UI, Cheat, Entity, Globals, Local, AntiAim, Exploit } = require("./onetap");

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
const exploits_path=["Rage", "SUBTAB_MGR", "Exploits", "SHEET_MGR", "General"];
//const secrets_path=["Config", "SUBTAB_MGR", "Secrets", "SHEET_MGR", "Secrets"];

//preset template
const presetTemplate = {
    //general settings(pitch, at targets, etc)
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
    },
    
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

//aa manager shit
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

//exploit stuff(dt,hs,fl)
var EXPLOIT = 
{
    doubletap : 
    {
        
    }
}
//misc
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

function saveConfig(configName)
{
    

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

    DataFile.Save(configName);

}
function loadConfig(configName)
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

}

//print function from ot discord
/*
Cheat.LongPrint = function (string) 
{
    for (x = 0; x < string.length; x += 255) 
    {
        Cheat.Print(string.substring(x, x + 255))
    }
    
    
}
*/
//prints a line, any value can be used
Cheat.PrintDebug() = function (value)
{
    string = value.toString();
    for (x = 0; x < string.length; x += 255) 
    {
        Cheat.Print(string.substring(x, x + 255))
    }
    Cheat.Print("\n");
}
//3d circle func from fourms, credits goes to this guy i think
// https://www.onetap.com/members/epiccsgohaker1337.74887/

Render.Filled3DCircle = function(position, radius, degrees, start_at, color, fill_color) 
{
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
const weaponNames = ["General", "USP", "Glock", "Five Seven", "Tec-9", "Deagle", "Revolver", "Dualies", "P250", "CZ-75", "Mac10", "P90", "MP5", "MP7", "MP9", "UMP45", "PP-Bizon", "M4A1-S", "M4A4", "AK47", "AUG", "SG553", "FAMAS", "GALIL", "AWP", "SSG08", "SCAR20", "G3SG1", "M249", "XM1014", "MAG7", "Negev", "Sawed off","Nova"];
const angleTypes = ["real", "fake", "LBY"];
const angleTypesCAPS = ["Real", "Fake", "LBY"]
const fonts = 
{
    Arial = "Arial.ttf",
    Calibri = "Calibri.ttf",
}

var fakeLagCache = [0,0,0,0]

var screenResolution = Render.GetScreenSize();
var rainbowColor = [0,0,0,255]

var uiUpdate=false;
var presetUpdate=false;

var currentAAMode=0;
var cachedAAMode=0;



var modeCounter=0;
var modeTimer=0.0;
var modeOffset=0.0;

var initAA=true;
var initializePresets=true;


var enableFakelag = true;


var minimumDamage = 1;
var hitchance  = 1;

//keeps track of time related stuff
var TIMERS = 
{
    currentTime : Globals.Tickcount(),

    jitter : {

        real : Globals.Tickcount(),
        fake : Globals.Tickcount(),
        LBY : Globals.Tickcount()
    },
    jitterOffset = 
    {
        real : 0,
        fake : 0,
        LBY : 0
    },

    switch : 
    {
        real : Globals.Tickcount(),
        fake : Globals.Tickcount(),
        LBY : Globals.Tickcount()
    },
    sway :
    {
        real : Globals.Tickcount(),
        fake : Globals.Tickcount(),
        LBY : Globals.Tickcount()
    },
    random :
    {
        real : Globals.Tickcount(),
        fake : Globals.Tickcount(),
        LBY : Globals.Tickcount()
    },
    swayCycle : 
    {
        real : 0,
        fake : 0,
        LBY : 0
    }

}
//keeps track of other stuff(other than time)
var COUNTERS =
{
    doAntiBruteSwitch = false,
    jitter :
    {
        real : 0,
        fake : 0,
        LBY : 0
    },
    switch :
    {
        real : 0,
        fake : 0,
        LBY : 0
    },
    random :
    {
        real : 0,
        fake : 0,
        LBY : 0
    },
    randomAngleOffset = 
    {
        real : 0,
        fake : 0,
        LBY : 0
    },
}

const PLAYER_TEMPLATE=
{
    health : 100,
    money : 0,
    id : 0,
    name : "",
    //list of weapons
    weapons : [],
    //render origin
    renderOrigin : [0.0,0.0,0.0],
    //position
    position : [0.0,0.0,0.0],

};

var enemies = Entity.GetEnemies();
var players = Entity.GetPlayers();

var presetNames = [""];

//UI STUFF BELOW
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

const AA_MODES_ELEMENTS = ["Static", "Jitter", "Switch", "Sway", "Random"];
const AA_SWITCH_ELEMENTS = ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16"];

const UI_CONTROL_ELEMETS = 
{
    JS_SETTINGS : []
}
//UI Elements
/*
        {
            name : "",
            type : ,
            properties :
            {

                enabled : true,
            },
            value : ,
        },
*/

class UI_ELEMENT
{
    constructor(name,type,properties)
    {
        self.name = name;
        self.type = type;
        
        //default values
        if(type == TYPE_TEXTBOX)
        {
            self.value = "";
        }
        else if(type == TYPE_MULTIDROPDOWN || type == TYPE_DROPDOWN || type == TYPE_SLIDERFLOAT || type == TYPE_SLIDERINT || type == TYPE_CHECKBOX || type == TYPE_SEPERATOR )
        {
            self.value = 0;
        }
        else if(type == TYPE_COLORPICKER)
        {
            self.value == [255,255,255,255]
        }

        if(properties != null)
        {
            self.properties = properties
            //if didn't explicitly disable the element
            if(properties.enabled == null)
            {
                self.properties.enabled = 1
            }

            //if caching is needed
            if(properties.saveCache == true)
            {
                self.cache = 0
                self.properties.saveCache = null
            }
        }
        else
        {
            self.properties = {enabled : 1}
        }
        
    }
    
}
const PATHS =
{
    JS_SETTINGS : main_path,
    AA_SETTINGS : aa_path,
    AA_MANAGER_SETTINGS : aa_control_path,
    //TODO: FIX
    VISUALS_SETTINGS : visuals_path

};

var UI_SETTINGS=
{


//==========================================================================================        GENERAL SETTINGS      =================================================================================================================
    JS_SETTINGS :
    {
        updateConfig : new UI_ELEMENT("UPDATE CONFIG", TYPE_CHECKBOX),
        newPresetName : new UI_ELEMENT("New Preset Name:", TYPE_TEXTBOX),
        createPreset : new UI_ELEMENT("Create New Preset", TYPE_TEXTBOX),
        saveConfig : new UI_ELEMENT("SAVE CONFIG", TYPE_CHECKBOX),
        saveConfig : new UI_ELEMENT("LOAD CONFIG", TYPE_CHECKBOX),
        configName : new UI_ELEMENT("SAVE CONFIG", TYPE_TEXTBOX),     
    },

//==========================================================================================        AA      =================================================================================================================
    AA_SETTINGS : 
    {

        //presets
        presetSelection : new UI_ELEMENT("Presets", TYPE_DROPDOWN, {elements : presetNames, searchable : 0, saveCache : true}),
        renamePreset : new UI_ELEMENT("Rename Selected Preset:", TYPE_TEXTBOX),
        confirmRename : new UI_ELEMENT("Confirm", TYPE_CHECKBOX),

        //actual aa settings

        //------------------------------------------------------------------------     real    -----------------------------------------------------
        realMode : new UI_ELEMENT("Real Mode", TYPE_DROPDOWN, {elements : AA_MODES_ELEMENTS, searchable : 0}),
        realSwitchPhase : new UI_ELEMENT("Real Switch Phase", TYPE_DROPDOWN, {elements : AA_SWITCH_ELEMENTS, searchable : 1, enabled : 0}),
        activeRealSwitchPhases : new UI_ELEMENT("Active Real Switch Phases", TYPE_SLIDERINT,{min : 1, max : 16, enabled : 0}),
        realOffset : new UI_ELEMENT("Real Offset", TYPE_SLIDERINT, {min : -180, max : 180, enabled : 0}),
        realDelta : new UI_ELEMENT("Real Delta", TYPE_SLIDERINT, {min : -180, max : 180, enabled : 0}),
        realDelay : new UI_ELEMENT("Real Delay", TYPE_SLIDERINT, {min : 1, max : 256, enabled : 0}),
        realDelayOffset : new UI_ELEMENT("Real Delay Offset", TYPE_SLIDERINT, {min : 0, max : 128, enabled : 0}),

        //-----------------------------------------------------     fake    ----------------------------------------
        fakeMode : new UI_ELEMENT("Fake Mode", TYPE_DROPDOWN, {elements : AA_MODES_ELEMENTS, searchable : 0}),
        fakeSwitchPhase : new UI_ELEMENT("Fake Switch Phase", TYPE_DROPDOWN, {elements : AA_SWITCH_ELEMENTS, searchable : 1, enabled : 0}),
        activeFakeSwitchPhases : new UI_ELEMENT("Active Fake Switch Phases", TYPE_SLIDERINT,{min : 1, max : 16, enabled : 0}),
        fakeOffset : new UI_ELEMENT("Fake Offset", TYPE_SLIDERINT, {min : -180, max : 180, enabled : 0}),
        fakeDelta : new UI_ELEMENT("Fake Delta", TYPE_SLIDERINT, {min : -180, max : 180, enabled : 0}),
        fakeDelay : new UI_ELEMENT("Fake Delay", TYPE_SLIDERINT, {min : 1, max : 256, enabled : 0}),
        fakeDelayOffset : new UI_ELEMENT("Fake Delay Offset", TYPE_SLIDERINT, {min : 0, max : 128, enabled : 0}),

        //-------------------------------------------------------------     LBY     -----------------------------------------
        LBYMode : new UI_ELEMENT("LBY Mode", TYPE_DROPDOWN, {elements : AA_MODES_ELEMENTS, searchable : 0}),
        LBYSwitchPhase : new UI_ELEMENT("LBY Switch Phase", TYPE_DROPDOWN, {elements : AA_SWITCH_ELEMENTS, searchable : 1, enabled : 0}),
        activeLBYSwitchPhases : new UI_ELEMENT("Active LBY Switch Phases", TYPE_SLIDERINT,{min : 1, max : 16, enabled : 0}),
        LBYOffset : new UI_ELEMENT("LBY Offset", TYPE_SLIDERINT, {min : -180, max : 180, enabled : 0}),
        LBYDelta : new UI_ELEMENT("LBY Delta", TYPE_SLIDERINT, {min : -180, max : 180, enabled : 0}),
        LBYDelay : new UI_ELEMENT("LBY Delay", TYPE_SLIDERINT, {min : 1, max : 256, enabled : 0}),
        LBYDelayOffset : new UI_ELEMENT("LBY Delay Offset", TYPE_SLIDERINT, {min : 0, max : 128, enabled : 0})
    },

//==========================================================================================        PRESET MANAGER      =================================================================================================================
    AA_MANAGER_SETTINGS :
    {
        AAConditions : new UI_ELEMENT("Conditions", TYPE_DROPDOWN, {elements : ["Dormant", "Running", "Slow-Walking", "Crouching", "In Air", "On Peek", "Fake-Ducking", "HS Active", "DT Active", "On Use", "Knifing", "Zeusing", "Override Key 1", "Override Key 2", "Override Key 3", "Override Key 4"], searchable : 1, saveCache : true}),
        presetSwitchConditions : new UI_ELEMENT("Switch", TYPE_DROPDOWN, {elements : ["Dodge Bruteforce", "On Interval"]}),
        switchDelay :  new UI_ELEMENT("Switch Delay", TYPE_SLIDERINT, {min : 1, max : 256, enabled : 0}),
        switchDelta : new UI_ELEMENT("Switch Delta", TYPE_SLIDERINT, {min : 1, max : 256, enabled : 0})
    },

//==========================================================================================        EXPLOIT SETTINGS        ===================================================================================================================
    EXPLOITS_SETTINGS : 
    {

    },
//==========================================================================================        FAKELAG SETTINGS        ===================================================================================================================
    FAKELAG_SETTINGS : 
    {

    },
    INDICATOR_SETTINGS :
    {
        
    },
    CROSSHAIR_INDICATOR_SETTINGS :
    {

    }
    

};
//password
/*
UI.AddCheckbox(secrets_path,"Protect Config With Password")
UI.AddTextbox(secrets_path,"Config Password:");
UI.AddCheckbox(secrets_path,"Save Password")
*/
//update config settings
UI.AddCheckbox(main_path,"UPDATE CONFIG");

//["Static","Jitter","Switch","Sway","Random"]
//["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16"]
//


//keybinds
UI.AddHotkey(rage_keybinds,"AA Override Key 1" , "AA 1");
UI.AddHotkey(rage_keybinds,"AA Override Key 2" , "AA 2");
UI.AddHotkey(rage_keybinds,"AA Override Key 3" , "AA 3");
UI.AddHotkey(rage_keybinds,"AA Override Key 4" , "AA 4");

UI.AddHotkey(rage_keybinds,"Mindmg Override Key 1", "Mindmg 1");
UI.AddHotkey(rage_keybinds,"Mindmg Override Key 2", "Mindmg 2");
UI.AddHotkey(rage_keybinds,"Mindmg Override Key 3", "Mindmg 3");
UI.AddHotkey(rage_keybinds,"Mindmg Override Key 4", "Mindmg 4");

//exploits
UI.AddSliderInt("Doubletap Tick Shift",1,64);
UI.AddSliderInt("Doubletap Tolerance",0,16);

//indicators
UI.AddMultiDropdown(indicators_path,"Active Indicators", indicatorItems)
UI.AddMultiDropdown(crosshair_indicators_path,"Active Crosshair Indicators",crosshairIndicatorItems)





function updatePlayerslist()
{
    enemies = Entity.GetEnemies();
    teammates = Entity.GetTeammates();
    players = Entity.GetPlayers();
    rageTargets = Ragebot.GetTargets();
}


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
function addItem(category,key)
{
    
    switch(UI_SETTINGS[category][key].type)
    {
        case TYPE_CHECKBOX:
            UI.AddCheckbox(PATHS[category], UI_SETTINGS[category][key].name);
            break; 

        case TYPE_SLIDERINT:
            UI.AddSliderInt(PATHS[category], UI_SETTINGS[category][key].name, UI_SETTINGS[category][key].properties.min, UI_SETTINGS[category][key].properties.max);
            break;

        case TYPE_MULTIDROPDOWN:
            UI.AddMultiDropdown(PATHS[category], UI_SETTINGS[category][key].name, UI_SETTINGS[category][key].properties.elements, UI_SETTINGS[category][key].properties.searchable);
            

        case TYPE_DROPDOWN:
            UI.AddDropdown(PATHS[category], UI_SETTINGS[category][key].name, UI_SETTINGS[category][key].properties.elements, UI_SETTINGS[category][key].properties.searchable);
            break;
    
        case TYPE_TEXTBOX:
            UI.AddTextbox(PATHS[category], UI_SETTINGS[category][key].name);
            break;
    
        case TYPE_SEPERATOR:
            UI.AddSliderInt(PATHS[category], UI_SETTINGS[category][key].name, 0, 0);
            break;
        
    }
    UI.SetValue(PATHS[category].concat(UI_SETTINGS[category][key].name), UI_SETTINGS[category][key].value);
    UI.SetEnabled(PATHS[category].concat(UI_SETTINGS[category][key].name), UI_SETTINGS[category][key].properties.enabled);
}

function updateItem(category,key,value,visibility)
{
    UI.SetValue(PATHS[category].concat(UI_SETTINGS[category][key].name), UI_SETTINGS[category][key].value);
    if(visibility != null)
    {   
        UI.SetEnabled(PATHS[category].concat(UI_SETTINGS[category][key].name), UI_SETTINGS[category][key].properties.enabled);
    }
    
}

function initUI()
{
    Object.keys(UI_SETTINGS).forEach(function(key1)
    {
        Object.keys(UI_SETTINGS[key1]).forEach(function(key2)
        {
            addItem(key1, key2);
        });
    });
}

function updateUIObject()
{
    Object.keys(UI_SETTINGS).forEach(function(key1)
    {
        Object.keys(UI_SETTINGS[key1]).forEach(function(key2)
        {
            if(UI_SETTINGS[key1][key2].type == TYPE_COLORPICKER)
            {
                UI_SETTINGS[key1][key2].value = UI.GetColor(PATHS[key1].concat(UI_SETTINGS[key1][key2].name))
            }
            else if(UI_SETTINGS[key1][key2].type == TYPE_TEXTBOX)
            {
                UI_SETTINGS[key1][key2].value = UI.GetString(PATHS[key1].concat(UI_SETTINGS[key1][key2].name))
            }
            else
            {
                UI_SETTINGS[key1][key2].value = UI.GetValue(PATHS[key1].concat(UI_SETTINGS[key1][key2].name));
            }
            
        });
    });
}

//the reason this is a thing is due to how resource intensive it is to read a ton of sliders every single tick
//so sliders are essentially just an interface and youd actually have to update a config for it to work
//nvm it isnt but im keeping this anyway
function updateConfig()
{
    //Cheat.Print(UI.GetValue(aa_path.concat("Presets")).toString());
    UI.SetValue(["Config", "Cheat", "General", "Restrictions"], 0);
    
    
    if(UI.GetValue(main_path.concat("UPDATE CONFIG")) == 1)
    {
        // do magic here
        /*
        if(UI.GetValue(secrets_path.concat("Protect Config With Password"))==1)
        {
                                                                                                                                                                                                                      
            
        }
        */
        
        uiUpdate=false;
        presetUpdate=false;
        if(initMenuElements==true)
        {
            initMenuElements=false;
            //disables default ot aa
            //TODO: make this disable most ot default ui
            UI.SetValue(aa_default_path.concat("Yaw offset"), 0);
            UI.SetValue(aa_default_path.concat("Jitter offset"), 0);
            UI.SetEnabled(aa_default_path.concat("Yaw offset"), 0);
            UI.SetEnabled(aa_default_path.concat("Jitter offset"), 0);
            initUI();
            //set default shit to 0
            updatePresetNames();
        }
        //load and save
        if(UI.GetValue(main_path.concat("SAVE CONFIG")) == 1)
        {
            UI.SetValue(main_path.concat("SAVE CONFIG"), 0)
            saveConfig(UI.GetString(main_path.concat("Config Name:")));
        }
        if(UI.GetValue(main_path.concat("LOAD CONFIG")) == 1)
        {
            UI.SetValue(main_path.concat("LOAD CONFIG"), 0)
            loadConfig(UI.GetString(main_path.concat("Config Name:")));
            //forces stuff to switch
            
            presetCache = 420;
            realModeCache = 420;
            fakeModeCache = 420;
            LBYModeCache = 420;
            realSwitchCache = 420;
            fakeSwitchCache = 420;
            LBYSwitchCache = 420;
        }

        updateUIObject();

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
        /*
        realModeVal = UI_SETTINGS.AA_SETTINGS.realMode.value;
        fakeModeVal = UI_SETTINGS.AA_SETTINGS.fakeMode.value;
        LBYModeVal = UI_SETTINGS.AA_SETTINGS.realMode.value;
        realSwitchVal=UI.GetValue(aa_path.concat("Real Switch Phase"));
        fakeSwitchVal=UI.GetValue(aa_path.concat("Fake Switch Phase"));
        LBYSwitchVal=UI.GetValue(aa_path.concat("LBY Switch Phase"));
        */
        modeVal=UI.GetString(aa_control_path.concat("Conditions"));
        //Cheat.Print(AA)
        

        for(i = 0;i < 3;i++)
        {
            if(UI_SETTINGS.AA_SETTINGS[angleTypes[i]+"Mode"].value != UI_SETTINGS.AA_SETTINGS[angleTypes[i]+"Mode"].cache)
                {
                    //Cheat.Print("updated this thing");
                    UI_SETTINGS.AA_SETTINGS[angleTypes[i]+"Mode"].cache = UI_SETTINGS.AA_SETTINGS[angleTypes[i]+"Mode"].value;

                    AA[presetVal].modes[angleTypes[i]] = UI_SETTINGS.AA_SETTINGS[angleTypes[i]+"Mode"].value;

                    switch(UI_SETTINGS.AA_SETTINGS[angleTypes[i]+"Mode"].value)
                    {
                        case 0:
                            //static
                            UI.SetEnabled(aa_path.concat(angleTypesCAPS[i] + " Switch Phase"),0);
                            UI.SetEnabled(aa_path.concat("Active " + angleTypesCAPS[i] + " Switch Phases"),0);
                            UI.SetEnabled(aa_path.concat(angleTypesCAPS[i] + " Offset"), 1);
                            UI.SetEnabled(aa_path.concat(angleTypesCAPS[i] + " Delta"), 0);
                            UI.SetEnabled(aa_path.concat(angleTypesCAPS[i] + " Delay"), 0); 
                            UI.SetEnabled(aa_path.concat(angleTypesCAPS[i] + " Delay Offset"), 0);

                            UI.SetValue(aa_path.concat(angleTypesCAPS[i] + " Offset"), AA[presetVal].static[angleTypes[i]].offset);
                            break;
                        case 1:
                            //jitter
                            UI.SetEnabled(aa_path.concat(angleTypesCAPS[i] + " Switch Phase"),0);
                            UI.SetEnabled(aa_path.concat("Active " + angleTypesCAPS[i] + " Switch Phases"),0);
                            UI.SetEnabled(aa_path.concat(angleTypesCAPS[i] + " Offset"), 1);
                            UI.SetEnabled(aa_path.concat(angleTypesCAPS[i] + " Delta"), 1);
                            UI.SetEnabled(aa_path.concat(angleTypesCAPS[i] + " Delay"), 1); 
                            UI.SetEnabled(aa_path.concat(angleTypesCAPS[i] + " Delay Offset"), 1);

                            UI.SetValue(aa_path.concat(angleTypesCAPS[i] + " Offset"), AA[presetVal].jitter[angleTypes[i]].offset);
                            UI.SetValue(aa_path.concat(angleTypesCAPS[i] + " Delta"), AA[presetVal].jitter[angleTypes[i]].delta);
                            UI.SetValue(aa_path.concat(angleTypesCAPS[i] + " Delay"), AA[presetVal].jitter[angleTypes[i]].delay);
                            UI.SetValue(aa_path.concat(angleTypesCAPS[i] + " Delay Offset"), AA[presetVal].jitter[angleTypes[i]].delayOffset); 
                            break;
                        case 2:
                            //switch

                        
                            UI.SetEnabled(aa_path.concat(angleTypesCAPS[i] + " Switch Phase"),1);
                            UI.SetEnabled(aa_path.concat("Active " + angleTypesCAPS[i] + " Switch Phases"),1);
                            UI.SetEnabled(aa_path.concat(angleTypesCAPS[i] + " Offset"), 1);
                            UI.SetEnabled(aa_path.concat(angleTypesCAPS[i] + " Delta"), 0);
                            UI.SetEnabled(aa_path.concat(angleTypesCAPS[i] + " Delay"), 1); 
                            UI.SetEnabled(aa_path.concat(angleTypesCAPS[i] + " Delay Offset"), 1);

                            UI.SetValue(aa_path.concat(angleTypesCAPS[i] + " Switch Phase"),0);
                            UI.SetValue(aa_path.concat("Active " + angleTypesCAPS[i] + " Switch Phases"),AA[presetVal].switch[angleTypes[i]].activePhases+1);
                            UI.SetValue(aa_path.concat(angleTypesCAPS[i] + " Offset"),AA[presetVal].switch[angleTypes[i]].offset[0]);
                            UI.SetValue(aa_path.concat(angleTypesCAPS[i] + " Delay"),AA[presetVal].switch[angleTypes[i]].delay[0]);
                            UI.SetValue(aa_path.concat(angleTypesCAPS[i] + " Delay Offset"),AA[presetVal].switch[angleTypes[i]].delayOffset[0]);
                            
                            break;
                        
                        case 3:
                            //sway
                            UI.SetEnabled(aa_path.concat(angleTypesCAPS[i] + " Switch Phase"),0);
                            UI.SetEnabled(aa_path.concat("Active " + angleTypesCAPS[i] + " Switch Phases"),0);
                            UI.SetEnabled(aa_path.concat(angleTypesCAPS[i] + " Offset"), 1);
                            UI.SetEnabled(aa_path.concat(angleTypesCAPS[i] + " Delta"), 1);
                            UI.SetEnabled(aa_path.concat(angleTypesCAPS[i] + " Delay"), 1); 
                            UI.SetEnabled(aa_path.concat(angleTypesCAPS[i] + " Delay Offset"), 0);

                            UI.SetValue(aa_path.concat(angleTypesCAPS[i] + " Offset"),AA[presetVal].sway.real.offset);
                            UI.SetValue(aa_path.concat(angleTypesCAPS[i] + " Delta"),AA[presetVal].sway.real.delta);
                            UI.SetValue(aa_path.concat(angleTypesCAPS[i] + " Delay"),AA[presetVal].sway.real.delay);
                            
                            break;
                        case 4:
                            //random
                            UI.SetEnabled(aa_path.concat(angleTypesCAPS[i] + " Switch Phase"),0);
                            UI.SetEnabled(aa_path.concat("Active " + angleTypesCAPS[i] + " Switch Phases"),0);
                            UI.SetEnabled(aa_path.concat(angleTypesCAPS[i] + " Offset"), 1);
                            UI.SetEnabled(aa_path.concat(angleTypesCAPS[i] + " Delta"), 1);
                            UI.SetEnabled(aa_path.concat(angleTypesCAPS[i] + " Delay"), 1); 
                            UI.SetEnabled(aa_path.concat(angleTypesCAPS[i] + " Delay Offset"), 1);

                            UI.SetValue(aa_path.concat(angleTypesCAPS[i] + " Offset"), AA[presetVal].random[angleTypes[i]].offset);
                            UI.SetValue(aa_path.concat(angleTypesCAPS[i] + " Delta"), AA[presetVal].random[angleTypes[i]].delta);
                            UI.SetValue(aa_path.concat(angleTypesCAPS[i] + " Delay"), AA[presetVal].random[angleTypes[i]].delay);
                            UI.SetValue(aa_path.concat(angleTypesCAPS[i] + " Delay Offset"), AA[presetVal].random[angleTypes[i]].delayOffset);
                            
                            break;

                    }
                    uiUpdate=true;
                    updateUIObject();
                }
        }
       
        //update switch ui
        //real
        for(i = 0;i < 3;i++)
        {
            if(AA[presetVal].modes.real == 2)
            {

                realSwitchVal = UI.GetValue(aa_path.concat(angleTypesCAPS[i] + " Switch Phase"))
                if(UI_SETTINGS.AA_SETTINGS[angleTypes[i]+"Mode"].value != UI_SETTINGS.AA_SETTINGS[angleTypes[i]+"Mode"].cache)
                {
                    UI_SETTINGS.AA_SETTINGS[angleTypes[i]+"Mode"].cache = UI_SETTINGS.AA_SETTINGS[angleTypes[i]+"Mode"].value;

                    UI.SetValue(aa_path.concat(angleTypesCAPS[i]+" Offset"), AA[presetVal].switch[angleTypes[i]].offset[UI_SETTINGS.AA_SETTINGS[angleTypes[i]+"Mode"].value]);
                    UI.SetValue(aa_path.concat(angleTypesCAPS[i]+" Delay"), AA[presetVal].switch[angleTypes[i]].delay[UI_SETTINGS.AA_SETTINGS[angleTypes[i]+"Mode"].value]);
                    UI.SetValue(aa_path.concat(angleTypesCAPS[i]+" Delay Offset"), AA[presetVal].switch[angleTypes[i]].delayOffset[UI_SETTINGS.AA_SETTINGS[angleTypes[i]+"Mode"].value]);
                    uiUpdate=true;
                }
            }
        }
        


        //update aa values if ui isnt updating
        if(uiUpdate==false)
        {
            
            //do stuff
            //real
            //Cheat.Print(AA[presetVal][6][0].toString()+"IS CURRENT MODE\n")
            for(i = 0;i < 3;i++)
            {
                switch(AA[presetVal].modes[angleTypes[i]])
                {
                    //static
                    case 0:
                        AA[presetVal].static[angleTypes[i]].offset = UI.GetValue(aa_path.concat(angleTypesCAPS[i] + " Offset"));
                        break;
                    //jitter
                    case 1:
                        AA[presetVal].jitter[angleTypes[i]].offset = UI.GetValue(aa_path.concat(angleTypesCAPS[i] + " Offset"));
                        AA[presetVal].jitter[angleTypes[i]].delta = UI.GetValue(aa_path.concat(angleTypesCAPS[i] + " Delta"));
                        AA[presetVal].jitter[angleTypes[i]].delay = UI.GetValue(aa_path.concat(angleTypesCAPS[i] + " Delay"));
                        AA[presetVal].jitter[angleTypes[i]].delayOffset = UI.GetValue(aa_path.concat(angleTypesCAPS[i] + "Real Delay Offset"));
                        break;
                    //switch
                    case 2:
                        
                        AA[presetVal].switch[angleTypes[i]].offset[UI_SETTINGS.AA_SETTINGS[angleTypes[i] + " Switch Phase"]] = UI.GetValue(aa_path.concat(angleTypesCAPS[i] + " Offset"));
                        AA[presetVal].switch[angleTypes[i]].delay[realSwitchVal] = UI.GetValue(aa_path.concat(angleTypesCAPS[i] + " Delay"));
                        AA[presetVal].switch[angleTypes[i]].activePhases = UI.GetValue(aa_path.concat("Active " + angleTypesCAPS[i] + " Switch Phases"))-1;
                        break;
                    //sway
                    case 3:
                        AA[presetVal].sway[angleTypes[i]].offset = UI.GetValue(aa_path.concat(angleTypesCAPS[i] + " Offset"));
                        AA[presetVal].sway[angleTypes[i]].delta = UI.GetValue(aa_path.concat(angleTypesCAPS[i] + " Delta"));
                        AA[presetVal].sway[angleTypes[i]].delay = UI.GetValue(aa_path.concat(angleTypesCAPS[i] + " Delay"));
                        break;
                    //random
                    case 4:
                        AA[presetVal].random[angleTypes[i]].offset = UI.GetValue(aa_path.concat(angleTypesCAPS[i] + " Offset"));
                        AA[presetVal].random[angleTypes[i]].delta = UI.GetValue(aa_path.concat(angleTypesCAPS[i] + " Delta"));
                        AA[presetVal].random[angleTypes[i]].delay = UI.GetValue(aa_path.concat(angleTypesCAPS[i] + " Delay"));
                        AA[presetVal].random[angleTypes[i]].delayOffset = UI.GetValue(aa_path.concat(angleTypesCAPS[i] + " Delay Offset"))
                        break;
                }
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
                UI.SetEnabled(aa_control_path.concat("Switch Delay"), 0);
                UI.SetEnabled(aa_control_path.concat("Switch Delta"), 0);

                UI.SetValue(aa_control_path.concat("Anti Bruteforce"),AA_MANAGER[modeVal].dodgeBruteforce);
            }
            else
            {
                UI.SetEnabled(aa_control_path.concat("Switch Delay"), 1);
                UI.SetEnabled(aa_control_path.concat("Switch Delta"), 1);

                UI.SetValue(aa_control_path.concat("Anti Bruteforce"),AA_MANAGER[modeVal].dodgeBruteforce);
                UI.SetValue(aa_control_path.concat("Switch Delay"),AA_MANAGER[modeVal].switchDelay);
                UI.SetValue(aa_control_path.concat("Switch Delta"),AA_MANAGER[modeVal].switchDelta);
            }
        }
        if(presetUpdate == false)
        {
            AA_MANAGER[modeVal].switchMode = UI.GetValue(aa_control_path.concat("Switch"));
            AA_MANAGER[modeVal].dodgeBruteforce = UI.GetValue(aa_control_path.concat("Anti Bruteforce"));
            AA_MANAGER[modeVal].activePresets = UI.GetValue(aa_control_path.concat("Presets"));
            AA_MANAGER[modeVal].switchDelay = UI.GetValue(aa_control_path.concat("Switch Delay"));
            AA_MANAGER[modeVal].switchDelta = UI.GetValue(aa_control_path.concat("Switch Delta"));
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
    Exploit.OverrideMaxProcessedTicks(UI.GetValue(exploits_path.concat("Max Processed Ticks")))
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
//get player weapon
//courtesy to dhdj
function getCurrentWeapon(player) 
{
	if (!Entity.IsAlive(player)) return General;
	var weapon = Entity.GetProp(player, "CBasePlayer", "m_hActiveWeapon");
	if (weapon === "m_hActiveWeapon") return General;
	weapon = (Entity.GetProp(weapon, "CBaseAttributableItem", "m_iItemDefinitionIndex") & 0xFFFF);
	if (weaponNames[weapon] != undefined) {
		return weaponNames[weapon];
	} else {
		return General;
	}
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
    else if(getWeapons(localPlayer)=="weapon_knife")
    {
        currentAAMode = "Knifing";
    }
    else if(getWeapons(localPlayer) =="weapon_taser")
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

function onDraw()
{
    updateConfig()
    renderIndicators()

}
function onCM() 
{
    switchAA();
    overrideDoubletap();
    updateRageTargets();
}

Cheat.RegisterCallback("Draw","onDraw");
Cheat.RegisterCallback("CreateMove","onCM");
Cheat.RegisterCallback("Draw","renderIndicators");
//the antibruteforce i pasted
Cheat.RegisterCallback("player_hurt", "OnHurt");
Cheat.RegisterCallback("bullet_impact", "OnBulletImpact");
Cheat.RegisterCallback("CreateMove","overrideDoubletap");
Cheat.RegisterCallback("player_connect","updatePlayerlist");
Cheat.RegisterCallback("player_disconnect","updatePlayerlist");
Cheat.RegisterCallback("CreateMove","updateRageTargets");
