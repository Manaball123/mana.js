
//UI Subtabs
//Config Password
UI.AddSubTab( [ "Config","SUBTAB_MGR" ], "Password");
//js subtab
UI.AddSubTab([ "Config","SUBTAB_MGR" ],"mana.js 1.0")
//aa subtab
UI.AddSubTab([ "Rage","SUBTAB_MGR" ],"Custom Anti-Aim")
UI.AddSubTab([ "Rage","SUBTAB_MGR","Custom Anti-Aim" ],"Custom Anti-Aim")

//CALC FUNCTIONS




//Config

//AUTH SYSTEM
    








//handles save file to usable data


/*
    0=antiaim data
    
    
*/


/*Index explanations:
    AA[i]:preset number
    AA[i][x]:mode(0=static,1=jitter,2=switch,3=sway,4=random)

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
            6: real jitter delay
            7: fake jitter delay 
            8: lby jiter delay
            9: is at random intervals(1 or 0)
            10: real jitter interval offset
            11. fake jitter interval offset
            12. lby jitter interval offset
        
        AA[i][2][x]: values for switch
            AA[i][2][0]: values for real offset
            AA[i][2][1]: values for fake offset
            AA[i][2][2]: values for lby offset
            (delay[0]=time between 0--->1)
            AA[i][2][3]: values for real offset switch delay
            AA[i][2][4]: values for fake offset switch delay
            AA[i][2][5]: values for lby offset switch delay

        AA[i][3][x]: values for sway
            0: real start
            1: real end
            2: fake start
            3: fake end
            4: lby start
            5: lby end
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
            6: real delay
            7: fake delay
            8: lby delay
    
    AA[i][5]: active mode(0=static,1=jitter,2=switch,3=sway,4=random)
    AA[i][6]: name of aa
*/
var presetTemplate=
[
    [0,0,0], //static
    [0,0,0,0,0,0,0,0,0,0,0,0,0], //jitter
    [
        //arrays for switch, can potentially be changed
        [0,0],//real
        [0,0],//fake
        [0,0],//lby
        [1.0,1.0],//real delay
        [1.0,1.0],//fake delay
        [1.0,1.0]//lby delay
    ],
    [0,0,0,0,0,0,1.0,1.0,1.0], //sway
    [0,0,0,0,0,0,1.0,1.0,1.0], //random
    0,
    "Mana Default AA"
]
var AA=[presetTemplate]

var RAGEBOT=[]

function keyToData(type)
{
    switch(type)
    {
        //aa settings
        case 0:
            

            
    }
}


//Paths

const main_path=["Config","SUBTAB_MGR","mana.js 1.0","SHEET_MGR","mana.js 1.0"];
const aa_path=["Rage","SUBTAB_MGR","Custom Anti-Aim","Presets"]
const aa_control_path=["Rage"]
//UI Elements
//password
UI.AddTextbox([ "Config","SUBTAB_MGR","Password","SHEET_MGR","Password" ], "Config Password:");
//update config settings
UI.AddCheckbox(main_path,"UPDATE CONFIG(Tick this only if you're configuring)");

//aa settings(presets and stuff)
UI.AddDropdown(aa_path,"Presets")
/*
UI.AddSubTab(["Config", "SUBTAB_MGR"], "Config Subtab");
UI.AddDropdown(["Config", "SUBTAB_MGR", "Config Subtab", "Config Subtab"], "Dropdown", ["element 1", "element 2"], 0);
*/


//test file writing
var configName="Mana1";
DataFile.Load(configName);
DataFile.SetKey(configName, "1", "1");
DataFile.Save(configName);
//timers:

//0=real,1=fake,2=lby
jitterTimer=[Globals.Realtime(),Globals.Realtime(),Globals.Realtime()]
//aa
function updateAA(preset) 
{
    switch(AA[preset][5])
    {
        //static
        case 0:
            AntiAim.SetRealOffset(AA[preset][0][0]);
            AntiAim.SetFakeOffset(AA[preset][0][1]);
            AntiAim.SetLBYOffset(AA[preset][0][2]);
            break;
        //jitter
        case 1:
            

        //switch
        case 2:

        //sway
        case 3:

        //random
        case 4:
    }
    
}

//each time this activates, settings in menu gets updated
//IMPORTANT
//the reason this is a thing is due to how resource intensive it is to read a ton of sliders every single tick
//so sliders are essentially just an interface and youd actually have to update a config for it to work
function updateConfig()
{
    
    const DoUpdate = UI.GetValue(main_path.concat("UPDATE CONFIG(Tick this only if you're configuring)"))
    if(DoUpdate==1)
    {
        // do magic here
        UI.SetValue(main_path.concat("UPDATE CONFIG"),0);
        
        
        
    }
    

    //Cheat.Print( UI.GetChildren(["Config","SUBTAB_MGR","mana.js 1.0","SHEET_MGR","mana.js 1.0"]) + '\n')
    
}


function switchAA()
{

}

  

Cheat.RegisterCallback("CreateMove","updateConfig");
