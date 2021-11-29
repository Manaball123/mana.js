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
UI.AddSubTab( [ "Config","SUBTAB_MGR" ], "Password");
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



        AA[i][0][x]:values for static
            0: real offset
            1: fake offset
            2: lby offset


        
        AA[i][1][x]:values for jitter
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


        
        AA[i][2][x]: values for switch
            AA[i][2][0]: values for real offset
            AA[i][2][1]: values for fake offset
            AA[i][2][2]: values for lby offset
            
            //calculated internally
            AA[i][2][3]: values for max index of switch

            (delay[0]=time between 0--->1)
            AA[i][2][4]: values for real offset switch delay
            AA[i][2][5]: values for fake offset switch delay
            AA[i][2][6]: values for lby offset switch delay

            

        AA[i][3][x]: values for sway
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
            

            
        AA[i][4][x]: values for random
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
    


        AA[i][5][x]: active mode(0=static,1=jitter,2=switch,3=sway,4=random) for real(0),fake(1), and lby(2)



        AA[i][6]: name of aa preset
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

*/

var AA=[];

var AA_MANAGER=[];

var RAGEBOT=[];

function keyToData(type)
{
    switch(type)
    {
        //aa settings
        case 0:
            var indStr1="AA_";

            //iterate through every preset
            for(i=0;i<AA.length;i++)
            {

                var indStr2=toString(i)+"_"
                
                //static
                var indStr3="0_"
                for(j=0;j<AA[i][0].length;j++)
                {
                    var indStr4=toString(j)

                    AA[i][0][j]=parseInt(DataFile.GetKey(configName,indStr1+indStr2+indStr3+indStr4));
                }

                //jitter
                var indStr3="1_"
                for(j=0;j<AA[i][1].length;j++)
                {
                    var indStr4=toString(j)
                    
                    if(j<=8)
                    {
                        AA[i][1][j]=parseInt(DataFile.GetKey(configName,indStr1+indStr2+indStr3+indStr4));
                    }
                    else
                    {
                        AA[i][1][j]=parseFloat(DataFile.GetKey(configName,indStr1+indStr2+indStr3+indStr4));
                    }
                }

                //switch
                var indStr3="2_"
                for(j=0;j<AA[i][2].length;j++)
                {
                    var indStr4=toString(j)+"_"
                    
                    if(j<=3)
                    {
                        for(k=0;k<AA[i][2][l];k++)
                        {
                        var indStr5=toString(k)
                        AA[i][4][j]=parseInt(DataFile.GetKey(configName,indStr1+indStr2+indStr3+indStr4+indStr5));
                        }   
                    }
                    else
                    {
                        for(k=0;k<AA[i][2][l];k++)
                        {
                        var indStr5=toString(k)
                        AA[i][4][j]=parseFloat(DataFile.GetKey(configName,indStr1+indStr2+indStr3+indStr4+indStr5));
                        }   
                    }    
                }
                //sway
                var indStr3="3_"
                for(j=0;j<AA[i][3].length;j++)
                {
                    var indStr4=toString(j)

                    if(j<=5)
                    {
                        AA[i][3][j]=parseInt(DataFile.GetKey(configName,indStr1+indStr2+indStr3+indStr4));
                    }
                    else
                    {
                        AA[i][3][j]=parseFloat(DataFile.GetKey(configName,indStr1+indStr2+indStr3+indStr4));
                    }
                }

                //random
                var indStr3="4_"
                for(j=0;j<AA[i][4].length;j++)
                {
                    var indStr4=toString(j)
                    if(j<=8)
                    {
                        AA[i][4][j]=parseInt(DataFile.GetKey(configName,indStr1+indStr2+indStr3+indStr4));
                    }
                    else
                    {
                        AA[i][4][j]=parseFloat(DataFile.GetKey(configName,indStr1+indStr2+indStr3+indStr4));
                    }
                    
                }
                //modes
                var indStr3="5_"
                for(j=0;j<AA[i][5].length;j++)
                {
                    var indStr4=toString(j)

                    AA[i][5][j]=parseInt(DataFile.GetKey(configName,indStr1+indStr2+indStr3+indStr4));
                }
                //name
                var indStr3="6"

                AA[i][6][0]=DataFile.GetKey(configName,indStr1+indStr2+indStr3)
                
            }
            break;

        //preset manager
        case 1: 
            var indStr1="MANAGER_"
            for(i=0;i<AA_MANAGER.length;i++)
            {   
                var indStr2=toString(i)+"_"
                AA_MANAGER[i][0]
            }
            break;

        
    }
}

function dataToKey(type)
{
    switch(type)
    {
        //aa settings
        case 0:
            var indStr1="AA_";

            //iterate through every preset
            for(i=0;i<AA.length;i++)
            {

                var indStr2=toString(i)+"_"
                
                //static
                var indStr3="0_"
                for(j=0;j<AA[i][0].length;j++)
                {
                    var indStr4=toString(j)

                    DataFile.SetKey(configName,indStr1+indStr2+indStr3+indStr4,toString(AA[i][0][j]));
                }

                //jitter
                var indStr3="1_"
                for(j=0;j<AA[i][1].length;j++)
                {
                    var indStr4=toString(j)

                    DataFile.SetKey(configName,indStr1+indStr2+indStr3+indStr4,toString(AA[i][1][j]));
                }

                //switch
                var indStr3="2_"
                for(j=0;j<AA[i][2].length;j++)
                {
                    var indStr4=toString(j)+"_"
                    for(k=0;k<AA[i][2][l];k++)
                    {
                        var indStr5=toString(k)
                        DataFile.SetKey(configName,indStr1+indStr2+indStr3+indStr4+indStr5,toString(AA[i][2][j][k]));
                    }       
                }
                //sway
                var indStr3="3_"
                for(j=0;j<AA[i][3].length;j++)
                {
                    var indStr4=toString(j)

                    DataFile.SetKey(configName,indStr1+indStr2+indStr3+indStr4,toString(AA[i][3][j]));
                }

                //random
                var indStr3="4_"
                for(j=0;j<AA[i][4].length;j++)
                {
                    var indStr4=toString(j)

                    DataFile.SetKey(configName,indStr1+indStr2+indStr3+indStr4,toString(AA[i][4][j]));
                }
                //modes
                var indStr3="5_"
                for(j=0;j<AA[i][5].length;j++)
                {
                    var indStr4=toString(j)

                    DataFile.SetKey(configName,indStr1+indStr2+indStr3+indStr4,toString(AA[i][5][j]));
                }
                //name
                var indStr3="6"

                DataFile.SetKey(configName,indStr1+indStr2+indStr3,AA[i][6][0])
                
            }
            break;
        
    }
}


function NOT(variable)
{
    if(variable==0)
    {
        return 1;
    }
    else
    {
        return 0;
    }
}


function zeroToNegOne(variable)
{
    if(variable==0)
    {
        return -1;
    }
    else
    {
        return variable;
    }
}

function clampTo(variable,to,mode)
{
    if(mode==0)
    {
        if(variable<to)
        {
            return to;
        }
        else
        {
            return variable;
        }
    }
    else
    {
        if(variable>to)
        {
            return to;
        }
        else
        {
            return variable;
        }
    }
}

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

//Paths

const main_path=["Config","SUBTAB_MGR","mana.js 1.0","SHEET_MGR","mana.js 1.0"];
const aa_path=["Rage","SUBTAB_MGR","Custom Anti-Aim","Custom Anti-Aim"];
const aa_control_path=["Rage","SUBTAB_MGR","AA Preset Manager","AA Preset Manager"];
const rage_keybinds=["Rage", "SUBTAB_MGR", "General", "SHEET_MGR", "General", "Key assignment"]


//vars
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

var presetNames=["1"];
var configName="Mana1";
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

//UI Elements
//password

UI.AddTextbox([ "Config","SUBTAB_MGR","Password","SHEET_MGR","Password" ], "Config Password:");
//update config settings
UI.AddCheckbox(main_path,"UPDATE CONFIG");

//aa settings(presets and stuff)
UI.AddDropdown(aa_path,"Presets",presetNames,0);
UI.AddTextbox(aa_path,"Rename Selected Preset");
UI.AddCheckbox(aa_path,"Confirm");
//real
UI.AddDropdown(aa_path,"Real Mode",["Static","Jitter","Switch","Sway","Random"],0);
UI.AddDropdown(aa_path,"Real Switch Phase",["1","2"],0);
UI.AddSliderInt(aa_path,"Number Of Real Switch Phases",1,16);
UI.AddSliderInt(aa_path,"Real Offset",-180,180);
UI.AddSliderInt(aa_path,"Real Delta",-180,180);
UI.AddSliderInt(aa_path,"Real Delay",1,256);
UI.AddCheckbox(aa_path,"Randomized Real Delay");
UI.AddSliderInt(aa_path,"Real Delay MaxDelta",1,128);

//fake
UI.AddDropdown(aa_path,"Fake Mode",["Static","Jitter","Switch","Sway","Random"],0);
UI.AddDropdown(aa_path,"Fake Switch Phase",["1","2"],0);
UI.AddSliderInt(aa_path,"Number Of Fake Switch Phases",1,16);
UI.AddSliderInt(aa_path,"Fake Offset",-60,60);
UI.AddSliderInt(aa_path,"Fake Delta",-60,60);
UI.AddSliderInt(aa_path,"Fake Delay",1,256);
UI.AddCheckbox(aa_path,"Randomized Fake Delay");
UI.AddSliderInt(aa_path,"Fake Delay MaxDelta",1,128);

//lby
UI.AddDropdown(aa_path,"LBY Mode",["Static","Jitter","Switch","Sway","Random"],0);
UI.AddDropdown(aa_path,"LBY Switch Phase",["1","2"],0);
UI.AddSliderInt(aa_path,"Number Of LBY Switch Phases",1,16);
UI.AddSliderInt(aa_path,"LBY Offset",-30,30);
UI.AddSliderInt(aa_path,"LBY Delta",-30,30);
UI.AddSliderInt(aa_path,"LBY Delay",1,256);
UI.AddCheckbox(aa_path,"Randomized LBY Delay");
UI.AddSliderInt(aa_path,"LBY Delay MaxDelta",1,128);

//preset interface
UI.AddTextbox(main_path,"New Preset Name:");
UI.AddCheckbox(main_path,"Create New Preset");

//preset management interface
UI.AddDropdown(aa_control_path,"Conditions",["Standing","Running","Slow-Walking","Crouching","In Air","On Peek","Fake-Ducking","HS Active","DT Active","On Use","Knifing","Zeusing","Override Key 1","Override Key 2","Override Key 3","Override Key 4"],0);
UI.AddDropdown(aa_control_path,"Switch",["Conditional","Sequenced","Random"],0);
UI.AddCheckbox(aa_control_path,"Anti Bruteforce");
UI.AddMultiDropdown(aa_control_path,"Presets",["1"]);
UI.AddSliderInt(aa_control_path,"Switch Delay",1,256);
UI.AddSliderInt(aa_control_path,"Switch Delta",1,256);

//keybinds
UI.AddHotkey(rage_keybinds,"AA Override Key 1","AA 1");
UI.AddHotkey(rage_keybinds,"AA Override Key 2","AA 2");
UI.AddHotkey(rage_keybinds,"AA Override Key 3","AA 3");
UI.AddHotkey(rage_keybinds,"AA Override Key 4","AA 4");




//not needed?
function modeToString(variable)
{
    switch(variable)
    {
        case 0:
            return "Static";
        
        case 1:
            return "Jitter";
            
        case 2:
            return "Switch";
        
        case 3:
            return "Sway";
        
        case 4:
            return "Random";
    }
}

//converts internal index to user-named aa presets
//GODDAMN THIS FUNCTION
function findIndex(variable)
{
    indexLen=AA.length
    i=0;
    while(i<indexLen)
    {
        if(AA[i][6]==variable)
        {
            return(i);
        }
        else
        {
            i++
        }
    }
}
function setDropdownValue( value, index, enable ) 
{ // credits ed
    var mask = 1 << index;
  
    return enable ? ( value | mask ) : ( value & ~mask );
}

function getDropdownValue(value, index)
{
    var mask = 1 << index;
    return value & mask ? true : false;
}

function addAAPreset(index,name)
{
    AA[index]=
    [
        [0,0,0], //static
        [0,0,0,0,0,0,0,0,0,1.0,1.0,1.0,1.0,1.0,1.0], //jitter
        [
            //arrays for switch, can potentially be changed
            [0,0],//real
            [0,0],//fake
            [0,0],//lby
            [1,1,1],//real,fake,lby max index of phase
            [1.0,1.0],//real delay
            [1.0,1.0],//fake delay
            [1.0,1.0]//lby delay
            
        ],
        [0,0,0,0,0,0,1.0,1.0,1.0], //sway
        [0,0,0,0,0,0,0,0,0,1.0,1.0,1.0,1.0,1.0,1.0], //random
        [0,0,0],
        "Mana Default AA"
    ];
    AA[index][6]=name;
}



function updatePresetNames()
{
    presetNames=[]
    Cheat.Print("Preset names are currently "+presetNames.toString()+"\n")
    for(i=0;i<AA.length;i++)
    {
        Cheat.Print("aa i 6 is currently "+AA[i][6]+"\n")
        presetNames[i]=AA[i][6]
        Cheat.Print("i is "+i.toString()+"\n")
        Cheat.Print("Preset names are currently "+presetNames.toString()+"\n")
        Cheat.Print("processing current perset name which is "+presetNames[i]+"\n")
        
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
        uiUpdate=false;
        presetUpdate=false;
        if(initAA==true)
        {
            addAAPreset(0,"Mana Default AA")
            initAA=false;
            updatePresetNames();
            for(i=0;i<16;i++)
            {
                AA_MANAGER[i]=[0,0,0,0,0];
            }
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
            addAAPreset(currentLength,UI.GetString(main_path.concat("New Preset Name:")))
            updatePresetNames();


        }
        //if(UI.GetValue(aa_path.concat("")))
        //TODO: ui updates(half done)
        //save data from ui to aa array
        //verify auth intergity with password

        


        if(presetVal!=presetCache)
        {
            presetCache=presetVal;
            uiUpdate=true;
            UI.SetValue(aa_path.concat("Real Mode"),AA[presetVal][5][0]);
            UI.SetValue(aa_path.concat("Fake Mode"),AA[presetVal][5][1]);
            UI.SetValue(aa_path.concat("LBY Mode"),AA[presetVal][5][2]);
            
        }
        //if stuff here changed
        realModeVal=UI.GetValue(aa_path.concat("Real Mode"));
        fakeModeVal=UI.GetValue(aa_path.concat("Fake Mode")); 
        LBYModeVal=UI.GetValue(aa_path.concat("LBY Mode"));
        modeVal=UI.GetValue(aa_control_path.concat("Conditions"))



        if(realModeVal!=realModeCache)
        {
            realModeCache=realModeVal;
            AA[presetVal][5][0]=realModeVal;
            switch(AA[presetVal][5][0])
            {
                case 0:
                    //static
                    UI.SetEnabled(aa_path.concat("Real Switch Phase"),0);
                    UI.SetEnabled(aa_path.concat("Number Of Real Switch Phases"),0);
                    UI.SetEnabled(aa_path.concat("Real Offset"),1);
                    UI.SetEnabled(aa_path.concat("Real Delta"),0);
                    UI.SetEnabled(aa_path.concat("Real Delay"),0);
                    UI.SetEnabled(aa_path.concat("Randomized Real Delay"),0);
                    UI.SetEnabled(aa_path.concat("Real Delay MaxDelta"),0);

                    UI.SetValue(aa_path.concat("Real Offset"),AA[presetVal][0][0]);
                    break;
                case 1:
                    //jitter
                    UI.SetEnabled(aa_path.concat("Real Switch Phase"),0);
                    UI.SetEnabled(aa_path.concat("Number Of Real Switch Phases"),0);
                    UI.SetEnabled(aa_path.concat("Real Offset"),1);
                    UI.SetEnabled(aa_path.concat("Real Delta"),1);
                    UI.SetEnabled(aa_path.concat("Real Delay"),1);
                    UI.SetEnabled(aa_path.concat("Randomized Real Delay"),1);
                    UI.SetEnabled(aa_path.concat("Real Delay MaxDelta"),1);

                    UI.SetValue(aa_path.concat("Real Offset"),AA[presetVal][1][0]);
                    UI.SetValue(aa_path.concat("Real Delta"),AA[presetVal][1][3]);
                    UI.SetValue(aa_path.concat("Real Delay"),AA[presetVal][1][9]);
                    UI.SetValue(aa_path.concat("Randomized Real Delay"),AA[presetVal][1][6]);
                    UI.SetValue(aa_path.concat("Real Delay MaxDelta"),AA[presetVal][1][12]);
                    break;
                case 2:
                    //switch

                    //TODO: ADD A SWITCH CACHE SOMEWHERE ELSE
                    UI.SetEnabled(aa_path.concat("Real Switch Phase"),1);
                    UI.SetEnabled(aa_path.concat("Number Of Real Switch Phases"),1);
                    UI.SetEnabled(aa_path.concat("Real Offset"),1);
                    UI.SetEnabled(aa_path.concat("Real Delta"),0);
                    UI.SetEnabled(aa_path.concat("Real Delay"),1);
                    UI.SetEnabled(aa_path.concat("Randomized Real Delay"),0);
                    UI.SetEnabled(aa_path.concat("Real Delay MaxDelta"),0);

                    //CHECK IF THIS WORKS
                    UI.SetValue(aa_path.concat("Real Switch Phase"),0);
                    UI.SetValue(aa_path.concat("Number Of Real Switch Phases"),AA[presetVal][2][3][0]+1);
                    UI.SetValue(aa_path.concat("Real Offset"),AA[presetVal][2][0][0]);
                    UI.SetValue(aa_path.concat("Real Delay"),AA[presetVal][2][4][0]);
                    break;
                
                case 3:
                    //sway
                    UI.SetEnabled(aa_path.concat("Real Switch Phase"),0);
                    UI.SetEnabled(aa_path.concat("Number Of Real Switch Phases"),0);
                    UI.SetEnabled(aa_path.concat("Real Offset"),1);
                    UI.SetEnabled(aa_path.concat("Real Delta"),1);
                    UI.SetEnabled(aa_path.concat("Real Delay"),1);
                    UI.SetEnabled(aa_path.concat("Randomized Real Delay"),0);
                    UI.SetEnabled(aa_path.concat("Real Delay MaxDelta"),0);

                    UI.SetValue(aa_path.concat("Real Offset"),AA[presetVal][3][0]);
                    UI.SetValue(aa_path.concat("Real Delta"),AA[presetVal][3][3]);
                    UI.SetValue(aa_path.concat("Real Delay"),AA[presetVal][3][6]);
                    break;
                case 4:
                    //random
                    UI.SetEnabled(aa_path.concat("Real Switch Phase"),0);
                    UI.SetEnabled(aa_path.concat("Number Of Real Switch Phases"),0);
                    UI.SetEnabled(aa_path.concat("Real Offset"),1);
                    UI.SetEnabled(aa_path.concat("Real Delta"),1);
                    UI.SetEnabled(aa_path.concat("Real Delay"),1);
                    UI.SetEnabled(aa_path.concat("Randomized Real Delay"),1);
                    UI.SetEnabled(aa_path.concat("Real Delay MaxDelta"),1);

                    UI.SetValue(aa_path.concat("Real Offset"),AA[presetVal][4][0]);
                    UI.SetValue(aa_path.concat("Real Delta"),AA[presetVal][4][3]);
                    UI.SetValue(aa_path.concat("Randomized Real Delay"),AA[presetVal][4][6]);
                    UI.SetValue(aa_path.concat("Real Delay"),AA[presetVal][4][9]);
                    UI.SetValue(aa_path.concat("Real Delay MaxDelta"),AA[presetVal][4][12]);
                    break;

            }
                

            uiUpdate=true;
        }
        if(fakeModeVal!=fakeModeCache)
        {

            fakeModeCache=fakeModeVal;
            AA[presetVal][5][1]=fakeModeVal;
            switch(AA[presetVal][5][1])
            {
                case 0:
                    //static
                    UI.SetEnabled(aa_path.concat("Fake Switch Phase"),0);
                    UI.SetEnabled(aa_path.concat("Number Of Fake Switch Phases"),0);
                    UI.SetEnabled(aa_path.concat("Fake Offset"),1);
                    UI.SetEnabled(aa_path.concat("Fake Delta"),0);
                    UI.SetEnabled(aa_path.concat("Fake Delay"),0);
                    UI.SetEnabled(aa_path.concat("Randomized Fake Delay"),0);
                    UI.SetEnabled(aa_path.concat("Fake Delay MaxDelta"),0);

                    UI.SetValue(aa_path.concat("Fake Offset"),AA[presetVal][0][1]);
                    break;
                case 1:
                    //jitter
                    UI.SetEnabled(aa_path.concat("Fake Switch Phase"),0);
                    UI.SetEnabled(aa_path.concat("Number Of Fake Switch Phases"),0);
                    UI.SetEnabled(aa_path.concat("Fake Offset"),1);
                    UI.SetEnabled(aa_path.concat("Fake Delta"),1);
                    UI.SetEnabled(aa_path.concat("Fake Delay"),1);
                    UI.SetEnabled(aa_path.concat("Randomized Fake Delay"),1);
                    UI.SetEnabled(aa_path.concat("Fake Delay MaxDelta"),1);

                    UI.SetValue(aa_path.concat("Fake Offset"),AA[presetVal][1][1]);
                    UI.SetValue(aa_path.concat("Fake Delta"),AA[presetVal][1][4]);
                    UI.SetValue(aa_path.concat("Fake Delay"),AA[presetVal][1][10]);
                    UI.SetValue(aa_path.concat("Randomized Fake Delay"),AA[presetVal][1][7]);
                    UI.SetValue(aa_path.concat("Fake Delay MaxDelta"),AA[presetVal][1][13]);
                    break;
                case 2:
                    //switch

                    //TODO: ADD A SWITCH CACHE SOMEWHERE ELSE
                    UI.SetEnabled(aa_path.concat("Fake Switch Phase"),1);
                    UI.SetEnabled(aa_path.concat("Number Of Fake Switch Phases"),1);
                    UI.SetEnabled(aa_path.concat("Fake Offset"),1);
                    UI.SetEnabled(aa_path.concat("Fake Delta"),0);
                    UI.SetEnabled(aa_path.concat("Fake Delay"),1);
                    UI.SetEnabled(aa_path.concat("Randomized Fake Delay"),0);
                    UI.SetEnabled(aa_path.concat("Fake Delay MaxDelta"),0);

                    //CHECK IF THIS WORKS
                    UI.SetValue(aa_path.concat("Fake Switch Phase"),0);
                    UI.SetValue(aa_path.concat("Number Of Fake Switch Phases"),AA[presetVal][2][3][1]+1);
                    UI.SetValue(aa_path.concat("Fake Offset"),AA[presetVal][2][1][0]);
                    UI.SetValue(aa_path.concat("Fake Delay"),AA[presetVal][2][5][0]);
                    break;
                
                case 3:
                    //sway
                    UI.SetEnabled(aa_path.concat("Fake Switch Phase"),0);
                    UI.SetEnabled(aa_path.concat("Number Of Fake Switch Phases"),0);
                    UI.SetEnabled(aa_path.concat("Fake Offset"),1);
                    UI.SetEnabled(aa_path.concat("Fake Delta"),1);
                    UI.SetEnabled(aa_path.concat("Fake Delay"),1);
                    UI.SetEnabled(aa_path.concat("Randomized Fake Delay"),0);
                    UI.SetEnabled(aa_path.concat("Fake Delay MaxDelta"),0);

                    UI.SetValue(aa_path.concat("Fake Offset"),AA[presetVal][3][2]);
                    UI.SetValue(aa_path.concat("Fake Delta"),AA[presetVal][3][4]);
                    UI.SetValue(aa_path.concat("Fake Delay"),AA[presetVal][3][7]);
                    break;
                case 4:
                    //random
                    UI.SetEnabled(aa_path.concat("Fake Switch Phase"),0);
                    UI.SetEnabled(aa_path.concat("Number Of Fake Switch Phases"),0);
                    UI.SetEnabled(aa_path.concat("Fake Offset"),1);
                    UI.SetEnabled(aa_path.concat("Fake Delta"),1);
                    UI.SetEnabled(aa_path.concat("Fake Delay"),1);
                    UI.SetEnabled(aa_path.concat("Randomized Fake Delay"),1);
                    UI.SetEnabled(aa_path.concat("Fake Delay MaxDelta"),1);

                    UI.SetValue(aa_path.concat("Fake Offset"),AA[presetVal][4][1]);
                    UI.SetValue(aa_path.concat("Fake Delta"),AA[presetVal][4][4]);
                    UI.SetValue(aa_path.concat("Randomized Fake Delay"),AA[presetVal][4][7]);
                    UI.SetValue(aa_path.concat("Fake Delay"),AA[presetVal][4][10]);
                    UI.SetValue(aa_path.concat("Fake Delay MaxDelta"),AA[presetVal][4][13]);
                    break;
                    
            }

            uiUpdate=true;
        }
        if(LBYModeVal!=LBYModeCache)
        {
            LBYModeCache=LBYModeVal;
            AA[presetVal][5][2]=LBYModeVal;
            switch(AA[presetVal][5][2])
            {
                case 0:
                    //static
                    UI.SetEnabled(aa_path.concat("LBY Switch Phase"),0);
                    UI.SetEnabled(aa_path.concat("Number Of LBY Switch Phases"),0);
                    UI.SetEnabled(aa_path.concat("LBY Offset"),1);
                    UI.SetEnabled(aa_path.concat("LBY Delta"),0);
                    UI.SetEnabled(aa_path.concat("LBY Delay"),0);
                    UI.SetEnabled(aa_path.concat("Randomized LBY Delay"),0);
                    UI.SetEnabled(aa_path.concat("LBY Delay MaxDelta"),0);

                    UI.SetValue(aa_path.concat("LBY Offset"),AA[presetVal][0][2]);
                    break;
                case 1:
                    //jitter
                    UI.SetEnabled(aa_path.concat("LBY Switch Phase"),0);
                    UI.SetEnabled(aa_path.concat("Number Of LBY Switch Phases"),0);
                    UI.SetEnabled(aa_path.concat("LBY Offset"),1);
                    UI.SetEnabled(aa_path.concat("LBY Delta"),1);
                    UI.SetEnabled(aa_path.concat("LBY Delay"),1);
                    UI.SetEnabled(aa_path.concat("Randomized LBY Delay"),1);
                    UI.SetEnabled(aa_path.concat("LBY Delay MaxDelta"),1);

                    UI.SetValue(aa_path.concat("LBY Offset"),AA[presetVal][1][2]);
                    UI.SetValue(aa_path.concat("LBY Delta"),AA[presetVal][1][5]);
                    UI.SetValue(aa_path.concat("LBY Delay"),AA[presetVal][1][11]);
                    UI.SetValue(aa_path.concat("Randomized LBY Delay"),AA[presetVal][1][8]);
                    UI.SetValue(aa_path.concat("LBY Delay MaxDelta"),AA[presetVal][1][14]);
                    break;
                case 2:
                    //switch

                    //TODO: ADD A SWITCH CACHE SOMEWHERE ELSE
                    UI.SetEnabled(aa_path.concat("LBY Switch Phase"),1);
                    UI.SetEnabled(aa_path.concat("Number Of LBY Switch Phases"),1);
                    UI.SetEnabled(aa_path.concat("LBY Offset"),1);
                    UI.SetEnabled(aa_path.concat("LBY Delta"),0);
                    UI.SetEnabled(aa_path.concat("LBY Delay"),1);
                    UI.SetEnabled(aa_path.concat("Randomized LBY Delay"),0);
                    UI.SetEnabled(aa_path.concat("LBY Delay MaxDelta"),0);

                    //CHECK IF THIS WORKS
                    UI.SetValue(aa_path.concat("LBY Switch Phase"),0);
                    UI.SetValue(aa_path.concat("Number Of LBY Switch Phases"),AA[presetVal][2][3][2]+1);
                    UI.SetValue(aa_path.concat("LBY Offset"),AA[presetVal][2][2][0]);
                    UI.SetValue(aa_path.concat("LBY Delay"),AA[presetVal][2][6][0]);
                    break;
                
                case 3:
                    //sway
                    UI.SetEnabled(aa_path.concat("LBY Switch Phase"),0);
                    UI.SetEnabled(aa_path.concat("Number Of LBY Switch Phases"),0);
                    UI.SetEnabled(aa_path.concat("LBY Offset"),1);
                    UI.SetEnabled(aa_path.concat("LBY Delta"),1);
                    UI.SetEnabled(aa_path.concat("LBY Delay"),1);
                    UI.SetEnabled(aa_path.concat("Randomized LBY Delay"),0);
                    UI.SetEnabled(aa_path.concat("LBY Delay MaxDelta"),0);

                    UI.SetValue(aa_path.concat("LBY Offset"),AA[presetVal][3][2]);
                    UI.SetValue(aa_path.concat("LBY Delta"),AA[presetVal][3][5]);
                    UI.SetValue(aa_path.concat("LBY Delay"),AA[presetVal][3][8]);
                    break;
                case 4:
                    //random
                    UI.SetEnabled(aa_path.concat("LBY Switch Phase"),0);
                    UI.SetEnabled(aa_path.concat("Number Of LBY Switch Phases"),0);
                    UI.SetEnabled(aa_path.concat("LBY Offset"),1);
                    UI.SetEnabled(aa_path.concat("LBY Delta"),1);
                    UI.SetEnabled(aa_path.concat("LBY Delay"),1);
                    UI.SetEnabled(aa_path.concat("Randomized LBY Delay"),1);
                    UI.SetEnabled(aa_path.concat("LBY Delay MaxDelta"),1);

                    UI.SetValue(aa_path.concat("LBY Offset"),AA[presetVal][4][2]);
                    UI.SetValue(aa_path.concat("LBY Delta"),AA[presetVal][4][5]);
                    UI.SetValue(aa_path.concat("Randomized LBY Delay"),AA[presetVal][4][8]);
                    UI.SetValue(aa_path.concat("LBY Delay"),AA[presetVal][4][11]);
                    UI.SetValue(aa_path.concat("LBY Delay MaxDelta"),AA[presetVal][4][14]);
                    break;
                    
            }

            uiUpdate=true;
        }
        //update switch ui
        //real
        if(AA[presetVal][5][0]==2)
        {

            realSwitchVal=UI.GetValue(aa_path.concat("Real Switch Phase"))
            if(realSwitchVal!=realSwitchCache)
            {
                realSwitchCache=realSwitchVal;
                UI.SetValue(aa_path.concat("Real Offset"),AA[presetVal][2][0][realSwitchVal]);
                UI.SetValue(aa_path.concat("Real Delay"),AA[presetVal][2][4][realSwitchVal]);
                uiUpdate=true;
            }
        }
        //fake
        if(AA[presetVal][5][1]==2)
        {
            

            fakeSwitchVal=UI.GetValue(aa_path.concat("Fake Switch Phase"))
            if(fakeSwitchVal!=fakeSwitchCache)
            {
                fakeSwitchCache=fakeSwitchVal;
                UI.SetValue(aa_path.concat("Fake Offset"),AA[presetVal][2][1][realSwitchVal]);
                UI.SetValue(aa_path.concat("Fake Delay"),AA[presetVal][2][5][realSwitchVal]);
                uiUpdate=true;
            }
        }
        //lby
        if(AA[presetVal][5][2]==2)
        {

            LBYSwitchVal=UI.GetValue(aa_path.concat("LBY Switch Phase"))
            if(LBYSwitchVal!=LBYSwitchCache)
            {
                LBYSwitchCache=LBYSwitchVal;
                UI.SetValue(aa_path.concat("LBY Offset"),AA[presetVal][2][2][realSwitchVal]);
                UI.SetValue(aa_path.concat("LBY Delay"),AA[presetVal][2][6][realSwitchVal]);
                uiUpdate=true;
            }
        }


        //update aa values if ui isnt updating
        //TODO: ADD 
        if(uiUpdate==false)
        {
            //do stuff

            //real
            switch(AA[presetVal][5][0])
            {
                //static
                case 0:
                    AA[presetVal][0][0]=UI.GetValue(aa_path.concat("Real Offset"));
                    break;
                //jitter
                case 1:
                    AA[presetVal][1][0]=UI.GetValue(aa_path.concat("Real Offset"));
                    AA[presetVal][1][3]=UI.GetValue(aa_path.concat("Real Delta"));
                    AA[presetVal][1][9]=UI.GetValue(aa_path.concat("Real Delay"));
                    AA[presetVal][1][6]=UI.GetValue(aa_path.concat("Randomized Real Delay"));
                    AA[presetVal][1][12]=UI.GetValue(aa_path.concat("Real Delay MaxDelta"));
                    break;
                //switch
                case 2:
                    AA[presetVal][2][0][realSwitchVal]=UI.GetValue(aa_path.concat("Real Offset"));
                    AA[presetVal][2][4][realSwitchVal]=UI.GetValue(aa_path.concat("Real Delay"));
                    break;
                //sway
                case 3:
                    AA[presetVal][3][0]=UI.GetValue(aa_path.concat("Real Offset"));
                    AA[presetVal][3][3]=UI.GetValue(aa_path.concat("Real Delta"));
                    AA[presetVal][3][6]=UI.GetValue(aa_path.concat("Real Delay"));
                    break;
                //random
                case 4:
                    AA[presetVal][4][0]=UI.GetValue(aa_path.concat("Real Offset"));
                    AA[presetVal][4][3]=UI.GetValue(aa_path.concat("Real Delta"));
                    AA[presetVal][4][9]=UI.GetValue(aa_path.concat("Real Delay"));
                    AA[presetVal][4][6]=UI.GetValue(aa_path.concat("Randomized Real Delay"));
                    AA[presetVal][4][12]=UI.GetValue(aa_path.concat("Real Delay MaxDelta"))
                    break;
            }
            //fake
            switch(AA[presetVal][5][1])
            {
                //static
                case 0:
                    AA[presetVal][0][1]=UI.GetValue(aa_path.concat("Fake Offset"));
                    break;
                //jitter
                case 1:
                    AA[presetVal][1][1]=UI.GetValue(aa_path.concat("Fake Offset"));
                    AA[presetVal][1][4]=UI.GetValue(aa_path.concat("Fake Delta"));
                    AA[presetVal][1][10]=UI.GetValue(aa_path.concat("Fake Delay"));
                    AA[presetVal][1][7]=UI.GetValue(aa_path.concat("Randomized Fake Delay"));
                    AA[presetVal][1][13]=UI.GetValue(aa_path.concat("Fake Delay MaxDelta"));
                    break;
                //switch
                case 2:
                    AA[presetVal][2][1][realSwitchVal]=UI.GetValue(aa_path.concat("Fake Offset"));
                    AA[presetVal][2][5][realSwitchVal]=UI.GetValue(aa_path.concat("Fake Delay"));
                    break;
                //sway
                case 3:
                    AA[presetVal][3][1]=UI.GetValue(aa_path.concat("Fake Offset"));
                    AA[presetVal][3][4]=UI.GetValue(aa_path.concat("Fake Delta"));
                    AA[presetVal][3][7]=UI.GetValue(aa_path.concat("Fake Delay"));
                    break;
                //random
                case 4:
                    AA[presetVal][4][1]=UI.GetValue(aa_path.concat("Fake Offset"));
                    AA[presetVal][4][4]=UI.GetValue(aa_path.concat("Fake Delta"));
                    AA[presetVal][4][10]=UI.GetValue(aa_path.concat("Fake Delay"));
                    AA[presetVal][4][7]=UI.GetValue(aa_path.concat("Randomized Fake Delay"));
                    AA[presetVal][4][13]=UI.GetValue(aa_path.concat("Fake Delay MaxDelta"));
                    break;
            }
            //lby
            switch(AA[presetVal][5][2])
            {
                //static
                case 0:
                    AA[presetVal][0][2]=UI.GetValue(aa_path.concat("LBY Offset"));
                    break;
                //jitter
                case 1:
                    AA[presetVal][1][2]=UI.GetValue(aa_path.concat("LBY Offset"));
                    AA[presetVal][1][5]=UI.GetValue(aa_path.concat("LBY Delta"));
                    AA[presetVal][1][11]=UI.GetValue(aa_path.concat("LBY Delay"));
                    AA[presetVal][1][8]=UI.GetValue(aa_path.concat("Randomized LBY Delay"));
                    AA[presetVal][1][14]=UI.GetValue(aa_path.concat("LBY Delay MaxDelta"));
                    break;
                //switch
                case 2:
                    AA[presetVal][2][2][realSwitchVal]=UI.GetValue(aa_path.concat("LBY Offset"));
                    AA[presetVal][2][6][realSwitchVal]=UI.GetValue(aa_path.concat("LBY Delay"));
                    break;
                //sway
                case 3:
                    AA[presetVal][3][2]=UI.GetValue(aa_path.concat("LBY Offset"));
                    AA[presetVal][3][5]=UI.GetValue(aa_path.concat("LBY Delta"));
                    AA[presetVal][3][8]=UI.GetValue(aa_path.concat("LBY Delay"));
                    break;
                //random
                case 4:
                    AA[presetVal][4][2]=UI.GetValue(aa_path.concat("LBY Offset"));
                    AA[presetVal][4][5]=UI.GetValue(aa_path.concat("LBY Delta"));
                    AA[presetVal][4][11]=UI.GetValue(aa_path.concat("LBY Delay"));
                    AA[presetVal][4][8]=UI.GetValue(aa_path.concat("Randomized LBY Delay"));
                    AA[presetVal][4][14]=UI.GetValue(aa_path.concat("LBY Delay MaxDelta"))
                    break;
            }
        }
        //AA Manager UI
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
    
    

    //Cheat.Print( UI.GetChildren(["Config","SUBTAB_MGR","mana.js 1.0","SHEET_MGR","mana.js 1.0"]) + '\n')
    
}



//COURTESY TO MIXOLOGIST
//REMEMBER TO EDIT
//each time this activates, settings in menu gets updated
//IMPORTANT

UI.AddSubTab(["Rage", "SUBTAB_MGR"], "MIXO-YAW");
UI.AddCheckbox(["Rage", "MIXO-YAW", "MIXO-YAW"], "Anti bruteforce");



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

                doSwitch=true;
            }
        }
        lastImpacts[entity] = impact;
        lastImpactTimes[entity] = curtime;
    }
}
//mode: 0=real, 1=fake, 2=lby
function SetOffset(value,mode)
{
    
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
    AntiAim.SetOverride(1);
    currentTime=Globals.Tickcount();
    //iterate through 3 angle types
    for(i=0;i<3;i++)
    {

    
        switch(AA[preset][5][i])
        {
            //static
            case 0:
                SetOffset(AA[preset][0][i],i);
                break;

            //jitter
            case 1:

                //if time to change phase
                if(currentTime>=clampTo(jitterTimer[i]+AA[preset][1][i+9]+jitterTimeOffset[i],1,0))
                {
                    
                    jitterTimer[i]=currentTime;
                    //generates offsets if randomized set to true
                    if(AA[preset][1][i+6]==1)
                    {
                        jitterTimeOffset[i]=Math.round(zeroToNegOne(Math.round(Math.random()))*Math.random()*AA[preset][1][i+12]);
                    }
                    else
                    {
                        jitterTimeOffset[i]=0;
                    }
                    
                    
                    jitterPhaseCounter[i]=NOT(jitterPhaseCounter[i]);
                    
                }        
                if(jitterPhaseCounter[i]==0)
                {
                    SetOffset(AA[preset][1][i],i);
                }
                else
                {
                    SetOffset(AA[preset][1][i]+AA[preset][1][i+3],i);
                } 
                

            //switch
            case 2:
                
                
                //if phase completed
                if(currentTime>=clampTo(switchTimer[i]+AA[preset][2][i+4][i],1,0))
                {
                    //if phase index maxed out
                    if(switchPhaseCounter[i]>=AA[preset][2][3][i])
                    {
                        switchPhaseCounter[i]=0;
                    }
                    else
                    {
                        switchPhaseCounter[i]++;
                    }
                    //set offset from phase
                    SetOffset(AA[preset][2][i][switchPhaseCounter],i);
                    
                }
                break;



            //sway
            case 3:
                swayCycleTimer[i]=clampTo(swayTimer[i]+AA[preset][3][i+6],1,0);
                if(currentTime<=swayCycleTimer[i])
                {
                    //delta=(finish-start)
                    //percentage=(fullCycleTime-currentTime)/timePerCycle

                    SetOffset(Math.round(AA[preset][3][i]+(AA[preset][3][i+3]*(swayCycleTimer[i]/AA[preset][3][i+6]))),i);
                }
                else
                {
                    swayTimer[i]=currentTime;
                    SetOffset(AA[preset][3][i]);
                }
                break;

            //random
            case 4:
                if(currentTime>=clampTo(jitterTimer[i]+AA[preset][1][i+6]+randomTimeOffset[i],1,0))
                {
                    randomTimer[i]=currentTime;
                    //generates offsets if randomized set to true
                    if(AA[preset][1][9+i]==1)
                    {
                        RandomTimeOffset[i]=Math.round(zeroToNegOne(Math.round(Math.random()))*Math.random()*AA[preset][4][i+12]);
                    }
                    else
                    {
                        RandomTimeOffset[i]=0;                      
                    }
                    SetOffset(Math.round(zeroToNegOne(Math.round(Math.random()))*Math.random()*AA[preset][4][i+3],i));
                
                }
                break;
                
              
               
        }
    }
    
}


//handles presets ig
function switchAA()
{
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
    /*
    else if(fakeduck)
    {
        currentAAMode=6;
    }
    else if(knifing)
    {
        currentAAMode=10;
    }
    else if(zeusing)
    {
        currentAAMode=11;
    }
    else if(hideshot)
    {
        currentAAMode=7;
    }
    
    else if(dt)
    {
        currentAAMode=8;
    }
    else if(inAir)
    {
        currentAAMode=4;
    }
    else if(onpeek)
    {
        currentAAMode=5;
    }
    else if(crouching)
    {
        currentAAMode=3;
    }
    else if(running)
    {
        currentAAMode=1;
    }
    */
    //dormant
    else
    {
        currentAAMode=0;
    }
    //if aa loop should continue(hasnt changed mode yet)
    if(currentAAMode==cachedAAMode)
    {
        currentTime=Globals.Tickcount();

        //if current phase finished/forced a switch
        if(AA_MANAGER[currentAAMode][0]!=0 )
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
        if(doSwitch==true)
        {
            doSwitch=false

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
            updateAA(AA_MANAGER[currentAAMode][2][modeCounter]);
                
        }
        
        

    }
    //restart loop if not
    else
    {
        updateAA(AA[AA_MANAGER[currentAAMode][2][0]])
        cachedAAMode=currentAAMode;
        modeCounter=0;
        modeTimer=Globals.Tickcount();
        
        modeOffset=0;
    }
    

    
    
}


Cheat.RegisterCallback("Draw","updateConfig");
Cheat.RegisterCallback("CreateMove","switchAA");
//the antibruteforce i pasted
Cheat.RegisterCallback("player_hurt", "OnHurt");
Cheat.RegisterCallback("bullet_impact", "OnBulletImpact");
