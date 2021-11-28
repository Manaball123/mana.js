

//js subtab
UI.AddSubTab([ "Config","SUBTAB_MGR" ],"mana.js 1.0")
//aa subtab
UI.AddSubTab([ "Rage","SUBTAB_MGR" ],"Custom Anti-Aim")
var presetTemplate=
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
var AA=[presetTemplate];

var presetNames=["1"];

const main_path=["Config","SUBTAB_MGR","mana.js 1.0","SHEET_MGR","mana.js 1.0"];
const aa_path=["Rage","SUBTAB_MGR","Custom Anti-Aim","Custom Anti-Aim"];

//preset interface
UI.AddTextbox(main_path,"New Preset Name:");
UI.AddCheckbox(main_path,"Create New Preset");

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

}

function main()
{
    if(UI.GetValue(main_path.concat("Create New Preset"))==1)
    {
        UI.SetValue(main_path.concat("Create New Preset"),0);
        currentLength=AA.length;
        Cheat.Print("appending template to index:  "+currentLength.toString()+"\n")
        Cheat.Print("AA array before append: "+AA.toString()+"\n");
        AA[currentLength]=presetTemplate;
        Cheat.Print("AA array after append: "+AA.toString()+"\n");
        AA[currentLength][6]=UI.GetString(main_path.concat("New Preset Name:"));
        Cheat.Print("AA array after rename: "+AA.toString()+"\n");
        //updatePresetNames();


    }
}


Cheat.RegisterCallback("Draw","main")