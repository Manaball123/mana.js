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
            1: real end
            2: fake start
            3: fake end
            4: lby start
            5: lby end

            //calculated internally
            6: real delta
            7: fake delta
            8: lby delta
        
           
            9: real sway time
            10: fake sway time
            11: lby sway time
            

            
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
var presetTemplate
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
    [0,0,0,0,0,0,0,0,0,1.0,1.0,1.0], //sway
    [0,0,0,0,0,0,0,0,0,1.0,1.0,1.0,1.0,1.0,1.0], //random
    [0,0,0],
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

                    if(j<=8)
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
    else
    {
        return(variable)
    }
}

function clampTo01(variable)
{
    if(variable<0.01)
    {
        return(0.01)
    }
    else
    {
        return(variable)
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
//real
UI.AddDropdown(aa_path,"Real Mode",["Static","Jitter","Switch","Sway","Random"])
UI.AddDropdown(aa_path,"Switch Phase",["1","2"])
UI.AddSliderInt(aa_path,"Real Offset",min,max)
UI.AddSliderInt(aa_path,"Real Delta",min,max)
UI.AddSliderFloat(aa_path,"Real Delay",0.01,3.0)
UI.AddCheckbox(aa_path,"Varying delay")
UI.AddSliderFloat(aa_path,"Real Delay MaxDelta",0.01,1.0)

//fake
UI.AddDropdown(aa_path,"Fake Mode",["Static","Jitter","Switch","Sway","Random"])
UI.AddDropdown(aa_path,"Switch Phase",["1","2"])
UI.AddSliderInt(aa_path,"Fake Offset",min,max)
UI.AddSliderInt(aa_path,"Fake Delta",min,max)
UI.AddSliderFloat(aa_path,"Fake Delay",0.01,3.0)
UI.AddCheckbox(aa_path,"Varying Fake Delay")
UI.AddSliderFloat(aa_path,"Fake Delay MaxDelta",0.01,1.0)

//lby
UI.AddDropdown(aa_path,"LBY Mode",["Static","Jitter","Switch","Sway","Random"])
UI.AddDropdown(aa_path,"Switch Phase",["1","2"])
UI.AddSliderInt(aa_path,"LBY Offset",min,max)
UI.AddSliderInt(aa_path,"LBY Delta",min,max)
UI.AddSliderFloat(aa_path,"LBY Delay",0.01,3.0)
UI.AddCheckbox(aa_path,"Varying LBY Delay")
UI.AddSliderFloat(aa_path,"LBY Delay MaxDelta",0.01,1.0)

/*
UI.AddSubTab(["Config", "SUBTAB_MGR"], "Config Subtab");
UI.AddDropdown(["Config", "SUBTAB_MGR", "Config Subtab", "Config Subtab"], "Dropdown", ["element 1", "element 2"], 0);
*/
var presetCache=UI.GetValue(aa_path,"Presets")
var realModeCache=UI.GetValue(aa_path,"Real Mode")
var fakeModeCache=UI.GetValue(aa_path,"Real Mode")
var LBYModeCache=UI.GetValue(aa_path,"LBY Mode")

var presetVal=UI.GetValue(aa_path,"Presets")
var realModeVal=UI.GetValue(aa_path,"Real Mode")
var fakeModeVal=UI.GetValue(aa_path,"Real Mode")
var LBYModeVal=UI.GetValue(aa_path,"LBY Mode")

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
                if(currentTime>=clampTo01(jitterTimer[i]+AA[preset][1][i+9]+jitterTimeOffset[i]))
                {
                    
                    jitterTimer[i]=currentTime;
                    //generates offsets if randomized set to true
                    if(AA[preset][1][i+6]==1)
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
                
                
                //if phase completed
                if(currentTime>=clampTo01(switchTimer[i]+AA[preset][2][i+4][i]))
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
                let swayCycleTimer=clampTo01(swayTimer[i]+AA[preset][3][i+9])
                if(currentTime<=swayCycleTimer)
                {
                    //delta=(finish-start)
                    //percentage=(fullCycleTime-currentTime)/timePerCycle

                    SetOffset(AA[preset][3][i]+(AA[preset][3][i+9]*(swayCycleTimer/AA[preset][3][i+9])),i);
                }
                else
                {
                    swayTimer[i]=currentTime;
                    SetOffset(AA[preset][3][i]);
                }
                break;

            //random
            case 4:
                if(currentTime>=clampTo01(jitterTimer[i]+AA[preset][1][i+6]+randomTimeOffset[i]))
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
        presetVal=UI.GetValue(aa_path,"Presets")
        realModeVal=UI.GetValue(aa_path,"Real Mode")
        fakeModeVal=UI.GetValue(aa_path,"Real Mode")
        LBYModeVal=UI.GetValue(aa_path,"LBY Mode")
        //updating aa tab
        if(presetVal!=presetCache || realModeVal!=realModeCache || fakeModeVal!=fakeModeCache || LBYModeVal!=LBYModeCache)

        


        
        
        
    }
    

    //Cheat.Print( UI.GetChildren(["Config","SUBTAB_MGR","mana.js 1.0","SHEET_MGR","mana.js 1.0"]) + '\n')
    
}


function switchAA()
{

}

  

Cheat.RegisterCallback("CreateMove","updateConfig");
