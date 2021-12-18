


const exploits_path = ["Rage", "SUBTAB_MGR", "Exploits", "SHEET_MGR", "Keys", "Key assignment"];
var dtdisabled = false;
var tickDelay = 14;
var timer = 0;

function toggleDT()
{   
    Cheat.Print(" fired\n")
    if(UI.GetValue(exploits_path.concat("Double tap")) == 1)
    {
        if(Entity.IsLocalPlayer(Entity.GetEntityFromUserID(Event.GetInt("userid"))))
        {
            Cheat.Print(" cewcfired\n")
            //if(Event.GetInt("weapon") == "weapon_knife")
            //{
                //added this print thingy
                Cheat.Print("knife fired\n")
                UI.ToggleHotkey(exploits_path.concat("Double tap"))
                dtdisabled = true;
            //}

        }
    }
}

function retoggle()
{
    //Cheat.Print(UI.GetValue(exploits_path.concat("Double tap")).toString())
    if(dtdisabled)
    {
        Exploit.OverrideShift(14)
        Exploit.OverrideTolerance(0)
        if(timer >= tickDelay)
        {
            UI.ToggleHotkey(exploits_path.concat("Double tap"));
            dtdisabled = false;
            timer = 0;
        }
        else
        {
            timer++;
        }
        
    }
}

Cheat.RegisterCallback("weapon_fire","toggleDT");
Cheat.RegisterCallback("CreateMove","retoggle");
