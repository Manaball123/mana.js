//TODO:
//antibruteforce(bullet_impact event)






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
            9: real randomized intervals(1 or 0)
            10: fake randomized intervals(1 or 0)
            11: lby randomized intervals(1 or 0)
            12: real jitter interval offset
            13. fake jitter interval offset
            14. lby jitter interval offset
        
        AA[i][2][x]: values for switch
            AA[i][2][0]: values for real offset
            AA[i][2][1]: values for fake offset
            AA[i][2][2]: values for lby offset
            (delay[0]=time between 0--->1)
            AA[i][2][3]: values for real offset switch delay
            AA[i][2][4]: values for fake offset switch delay
            AA[i][2][5]: values for lby offset switch delay

            //calculated internally
            AA[i][2][6]: values for max index of switch

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
            
            //calculated internally
            9: real delta
            10: fake delta
            11: lby delta
        
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
            9: real randomized intervals(1 or 0)
            10: fake randomized intervals(1 or 0)
            11: lby randomized intervals(1 or 0)
            12: real randomize interval offset
            13. fake randomize interval offset
            14. lby randomize interval offset
    
    AA[i][5][x]: active mode(0=static,1=jitter,2=switch,3=sway,4=random) for real(0),fake(1), and lby(2)
    AA[i][6]: name of aa
*/
var presetTemplate
[
    [0,0,0], //static
    [0,0,0,0,0,0,1.0,1.0,1.0,0,1.0,1.0,1.0], //jitter
    [
        //arrays for switch, can potentially be changed
        [0,0],//real
        [0,0],//fake
        [0,0],//lby
        [1.0,1.0],//real delay
        [1.0,1.0],//fake delay
        [1.0,1.0],//lby delay
        [1,1,1]//real,fake,lby max index of phase
    ],
    [0,0,0,0,0,0,1.0,1.0,1.0,0,0,0], //sway
    [0,0,0,0,0,0,1.0,1.0,1.0,0,1.0,1.0,1.0], //random
    0,
    "Mana Default AA"
]
var AA=[presetTemplate]

var RAGEBOT=[]

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
                for(j=0;j<AA[i][0].length;j++)
                {
                    var indStr3=toString(j)

                    DataFile.SetKey(configName,AA[i][0][j],indStr1+indStr2+indStr3);
                }

                //jitter
                for(k=0;k<AA[i][1].length;k++)
                {
                    var indStr3=toString(k)

                    DataFile.SetKey(configName,AA[i][1][k],indStr1+indStr2+indStr3);
                }

                //switch
                for(l=0;l<AA[i][2].length;l++)
                {
                    var indStr3=toString(l)+"_"
                    for(m=0;m<AA[i][2][l];m++)
                    {
                        var indStr4=toString(m)
                        DataFile.SetKey(configName,AA[i][2][l][m],indStr1+indStr2+indStr3+indStr4);
                    }       
                }
                //sway
                for(o=0;o<AA[i][3].length;o++)
                {
                    var indStr3=toString(o)

                    DataFile.SetKey(configName,AA[i][3][o],indStr1+indStr2+indStr3);
                }

                //random
                for(p=0;p<AA[i][4].length;p++)
                {
                    var indStr3=toString(p)

                    DataFile.SetKey(configName,AA[i][4][p],indStr1+indStr2+indStr3);
                }


            }
            break;
        
    }
}

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
                for(j=0;j<AA[i][0].length;j++)
                {
                    var indStr3=toString(j)

                    AA[i][0][j]=DataFile.GetKey(configName,indStr1+indStr2+indStr3);
                }

                //jitter
                for(k=0;k<AA[i][1].length;k++)
                {
                    var indStr3=toString(k)

                    AA[i][1][k]=DataFile.GetKey(configName,indStr1+indStr2+indStr3);
                }

                //switch
                for(l=0;l<AA[i][2].length;l++)
                {
                    var indStr3=toString(l)+"_"
                    for(m=0;m<AA[i][2][l];m++)
                    {
                        var indStr4=toString(m)
                        AA[i][2][l][m]=DataFile.GetKey(configName,indStr1+indStr2+indStr3+indStr4);
                    }       
                }
                //sway
                for(o=0;o<AA[i][3].length;o++)
                {
                    var indStr3=toString(o)

                    AA[i][3][o]=DataFile.GetKey(configName,indStr1+indStr2+indStr3);
                }

                //random
                for(p=0;p<AA[i][4].length;p++)
                {
                    var indStr3=toString(p)

                    AA[i][4][p]=DataFile.GetKey(configName,indStr1+indStr2+indStr3);
                }


            }
            break;
        
    }
}


function NOT(variable)
{
    if(variable==0)
    {
        return(1);
    }
    else
    {
        return(0);
    }
}


function zeroToNegOne(variable)
{
    if(variable==0)
    {
        return(-1)
    }
}

function clampTo01(variable)
{
    if(variable<0.01)
    {
        return(0.01)
    }
}

//Paths

const main_path=["Config","SUBTAB_MGR","mana.js 1.0","SHEET_MGR","mana.js 1.0"];
const aa_path=["Rage","SUBTAB_MGR","Custom Anti-Aim","Custom Anti-Aim"]
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
var jitterTimer=[Globals.Realtime(),Globals.Realtime(),Globals.Realtime()]
var switchTimer=[Globals.Realtime(),Globals.Realtime(),Globals.Realtime()]
var swayTimer=[Globals.Realtime(),Globals.Realtime(),Globals.Realtime()]
var randomTimer=[Globals.Realtime(),Globals.Realtime(),Globals.Realtime()]

var jitterTimeOffset=[0.0,0.0,0.0]
var jitterPhaseCounter=[0,0,0]
var switchPhaseCounter=[0,0,0]
var randomTimeOffset=[0.0,0.0,0.0]
var randomOffsetHolder=[0,0,0]

//mode: 0=real, 1=fake, 2=lby
function SetOffset(value,mode)
{
    value=clampTo01(value)
    switch(mode)
    {
        case 0:
            AntiAim.SetRealOffset(value);
            break;
        case 1:
            AntiAim.SetFakeOffset(value);
            break;
        case 2:
            AntiAim.setLBYOffset(value);
            break;
    }
}

//aa
function updateAA(preset) 
{
    AntiAim.SetOverride(1)
    var currentTime=Globals.Realtime()
    //real
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
                if(currentTime>=jitterTimer[i]+AA[preset][1][i+6]+jitterTimeOffset[i])
                {
                    
                    jitterTimer[i]=currentTime;
                    //generates offsets if randomized set to true
                    if(AA[preset][1][9+i]==1)
                    {
                        jitterTimeOffset[i]=zeroToNegOne(Math.round(Math.random()))*Math.random()*AA[preset][1][i+12];
                    }
                    else
                    {
                        jitterTimeOffset[i]=0.0;
                    }
                    jitterPhaseCounter[i]=NOT(jitterPhaseCounter);
                 
                }        
                if(jitterPhaseCounter[i]==0)
                {
                    SetOffset(AA[preset][1][i],i);
                }
                else
                {
                    SetOffset(AA[preset][1][i]+AA[preset][1][i+3],i);
                }
                break;
                

            //switch
            case 2:
                
                let phases=(AA[preset][2][6][i])
                //if phase completed
                if(currentTime>=jitterTimer[i]+AA[preset][2][i+3][i])
                {
                    //if phase index maxed out
                    if(switchPhaseCounter[i]>=phases)
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
                let swayCycleTimer=swayTimer[i]+AA[preset][3][i+6]
                if(currentTime<=swayCycleTimer)
                {
                    //delta=(finish-start)
                    //percentage=(fullCycleTime-currentTime)/timePerCycle

                    SetOffset(AA[preset][3][i]+(AA[preset][3][i+9]*(swayCycleTimer/AA[preset][3][i+6])),i);
                }
                else
                {
                    swayTimer[i]=currentTime;
                    SetOffset(AA[preset][3][i]);
                }
                break;

            //random
            case 4:
                if(currentTime>=jitterTimer[i]+AA[preset][1][i+6]+randomTimeOffset[i])
                {
                    randomTimer[i]=currentTime;
                    //generates offsets if randomized set to true
                    if(AA[preset][1][9+i]==1)
                    {
                        RandomTimeOffset[i]=zeroToNegOne(Math.round(Math.random()))*Math.random()*AA[preset][4][i+12];
                    }
                    else
                    {
                        RandomTimeOffset[i]=0.0;                      
                    }
                    SetOffset(zeroToNegOne(Math.round(Math.random()))*Math.random()*AA[preset][4][i+3],i);
                
                }
                break;
                
              
               
        }
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
        
        //updating aa tab


        
        
        
    }
    

    //Cheat.Print( UI.GetChildren(["Config","SUBTAB_MGR","mana.js 1.0","SHEET_MGR","mana.js 1.0"]) + '\n')
    
}


function switchAA()
{

}

  

Cheat.RegisterCallback("CreateMove","updateConfig");
