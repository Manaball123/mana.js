UI.AddSubTab( [ "Config","SUBTAB_MGR" ], "Password");
//js subtab
UI.AddSubTab([ "Config","SUBTAB_MGR" ],"mana.js 1.0")
//aa subtab
UI.AddSubTab([ "Rage","SUBTAB_MGR" ],"Custom Anti-Aim")
UI.AddSubTab([ "Rage","SUBTAB_MGR",],"AA Preset Manager")

const main_path=["Config","SUBTAB_MGR","mana.js 1.0","SHEET_MGR","mana.js 1.0"];
const aa_path=["Rage","SUBTAB_MGR","Custom Anti-Aim","Custom Anti-Aim"];
const aa_control_path=["Rage","SUBTAB_MGR","AA Preset Manager","AA Preset Manager"];
const rage_keybinds=["Rage", "SUBTAB_MGR", "General", "SHEET_MGR", "General", "Key assignment"]
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

UI.AddMultiDropdown(aa_control_path,"Presets",["1","2","3"]);
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


function main()
{
    //Cheat.Print(toString(testArray[0]));
    var variable1=UI.GetValue(aa_control_path.concat("Presets"))
    Cheat.Print("value of var is "+variable1.toString()+"\n")
    Cheat.Print(presetTemplate.toString())
    //THIS IS HOW U DO GET AND SET DROPDOWNS. PERIOD.
    UI.SetValue(aa_control_path.concat("Presets"),setDropdownValue(UI.GetValue(aa_control_path.concat("Presets")),2,true))
    

}

function add(a,b)
{
    return a+b;
}
function subtract(a,b)
{
    return add(a,-b)
}

function multiply(a,b)
{
    result=0;
    for(i=0;i<b;i++)
    {
        result=add(result,a)
    }
}

function exponentiation(a,b)
{
    result=0;
    for(i=0;i,b;i++)
    {
        result=add(multiply(a,a),result)
    }
}





Cheat.RegisterCallback("Draw","main");






