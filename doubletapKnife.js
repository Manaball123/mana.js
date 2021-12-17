const { Entity, UI, Cheat } = require("./onetap");



const exploits_path = ["Rage", "SUBTAB_MGR", "Exploits", "SHEET_MGR", "Keys", "Key assignment"];
var dtdisabled = false;
var tickDelay = 14;
var timer = 0;

function toggleDT()
{   
    
    if(UI.GetHotkeyState(exploits_path.concat("Double tap")) == 1)
    {
        if(Event.GetInt("userid") == Entity.GetLocalPlayer())
        {
            if(Event.GetInt("weapon") == "weapon_knife")
            {
                //added this print thingy
                Cheat.Print("knife fired\n")
                UI.SetHotkeyState(exploits_path.concat("Double tap"), 0)
                dtdisabled = true;
            }

        }
    }
}

function retoggle()
{
    if(dtdisabled)
    {
        if(timer >= tickDelay)
        {
            UI.SetHotkeyState(exploits_path.concat("Double tap"), 1);
            dtdisabled = false;
        }
        else
        {
            timer++;
        }
        
    }
}

Cheat.RegisterCallback("weapon_fire","toggleDT");
Cheat.RegisterCallback("CreateMove","retoggle");
