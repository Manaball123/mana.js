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


UI.AddMultiDropdown(aa_control_path,"Presets",["1","2","3"]);

var testArray=[template]
function main()
{
    //Cheat.Print(toString(testArray[0]));
    var variable1=UI.GetValue(aa_control_path.concat("Presets"))
    Cheat.Print("value of var is "+variable1.toString()+"\n")

}


Cheat.RegisterCallback("Draw","main");






