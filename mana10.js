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
UI.AddSubTab([ "Config", "SUBTAB_MGR" ], "Secrets");
//js subtab
UI.AddSubTab([ "Config", "SUBTAB_MGR" ], "mana.js 1.0")
//aa subtab
UI.AddSubTab([ "Rage", "SUBTAB_MGR" ], "Custom Anti-Aim")
UI.AddSubTab([ "Rage", "SUBTAB_MGR" ], "AA Preset Manager")


//Config

//AUTH SYSTEM


const main_path=["Config", "SUBTAB_MGR", "mana.js 1.0", "SHEET_MGR", "mana.js 1.0"];
const aa_path=["Rage", "SUBTAB_MGR", "Custom Anti-Aim", "Custom Anti-Aim"];
const aa_control_path=["Rage", "SUBTAB_MGR", "AA Preset Manager", "AA Preset Manager"];
const rage_keybinds=["Rage", "SUBTAB_MGR", "General", "SHEET_MGR", "General", "Key assignment"];
const aa_keybinds=["Rage", "SUBTAB_MGR", "Anti Aim", "SHEET_MGR", "General", "Key assignment"];
const aa_default_path=["Rage", "SUBTAB_MGR", "Anti Aim", "SHEET_MGR", "Directions"];
const exploits_keybinds=["Rage", "SUBTAB_MGR", "Exploits", "SHEET_MGR", "Keys", "Key assignment"];
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

var RAGEBOT=[];

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
    },
    //MULTIDROPDOWN SETTINGS(WHICH INDICTS TO TOGGLE, ETC)
    activeItems : 
    {
        activeIndicators : 0,
        activeCrosshairIndicators : 0,

    }

};
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

    return Math.sqrt(pointLength**2-sideLength**2)
}

//Paths




//vars
const screen_size = Render.GetScreenSize();
const angleTypes = ["real", "fake", "LBY"];
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
UI.AddDropdown(aa_control_path, "Switch" , ["Conditional","On Interval"],0);
UI.AddCheckbox(aa_control_path, "Anti Bruteforce");
UI.AddMultiDropdown(aa_control_path, "Presets" ,[""]);
UI.AddSliderInt(aa_control_path, "Switch Delay" , 1 , 256);
UI.AddSliderInt(aa_control_path,"Switch Delta" ,1 , 256);

//keybinds
UI.AddHotkey(rage_keybinds,"AA Override Key 1" , "AA 1");
UI.AddHotkey(rage_keybinds,"AA Override Key 2" , "AA 2");
UI.AddHotkey(rage_keybinds,"AA Override Key 3" , "AA 3");
UI.AddHotkey(rage_keybinds,"AA Override Key 4" , "AA 4");




//converts internal index to user-named aa presets


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

function getActiveDropdowns(value,maxIndex)
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
        
        //TODO: ui updates(half done)
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

                    //TODO: ADD A SWITCH CACHE SOMEWHERE ELSE
                   
                    UI.SetEnabled(aa_path.concat("Real Switch Phase"),1);
                    UI.SetEnabled(aa_path.concat("Active Real Switch Phases"),1);
                    UI.SetEnabled(aa_path.concat("Real Offset"),1);
                    UI.SetEnabled(aa_path.concat("Real Delta"),0);
                    UI.SetEnabled(aa_path.concat("Real Delay"),1);
                    UI.SetEnabled(aa_path.concat("Real Delay Offset"),1);

                    //CHECK IF THIS WORKS
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

                    //TODO: ADD A SWITCH CACHE SOMEWHERE ELSE
                    UI.SetEnabled(aa_path.concat("Fake Switch Phase"),1);
                    UI.SetEnabled(aa_path.concat("Active Fake Switch Phases"),1);
                    UI.SetEnabled(aa_path.concat("Fake Offset"),1);
                    UI.SetEnabled(aa_path.concat("Fake Delta"),0);
                    UI.SetEnabled(aa_path.concat("Fake Delay"),1);
                    UI.SetEnabled(aa_path.concat("Fake Delay Offset"),1);

                    //CHECK IF THIS WORKS
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

                    //TODO: ADD A SWITCH CACHE SOMEWHERE ELSE
                    UI.SetEnabled(aa_path.concat("LBY Switch Phase"),1);
                    UI.SetEnabled(aa_path.concat("Active LBY Switch Phases"),1);
                    UI.SetEnabled(aa_path.concat("LBY Offset"),1);
                    UI.SetEnabled(aa_path.concat("LBY Delta"),0);
                    UI.SetEnabled(aa_path.concat("LBY Delay"),1);
                    UI.SetEnabled(aa_path.concat("LBY Delay Offset"),1);

                    //CHECK IF THIS WORKS
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
        //TODO: ADD 
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
//helpers pasted from galaxysense thing
/*
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
*/
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
    
    else if(exploits_keybinds.concat("Hide shots"))
    {
        currentAAMode = "HS Active";
    }
    
    else if(exploits_keybinds.concat("Double tap"))
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
            if(modeCounter < getActiveDropdowns(AA_MANAGER[currentAAMode].activePresets,AA.length-1))
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



