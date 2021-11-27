



UI.AddHotkey(["Scripts", "Keys", "JS Keybinds"], "Enable Flick", "Fake Flick");
UI.AddHotkey(["Scripts", "Keys", "JS Keybinds"], "Enable Flick Inverter", "Fake Flick Inverter");
UI.AddSliderInt( [ "Scripts", "Keys"], "flick delay", 1, 16 )
UI.AddSliderInt( [ "Scripts", "Keys"], "sleep delay", 1, 256 )
var begintime = Globals.Tickcount();


/*
function main(){
    if (Globals.Realtime() > globaltime + delay){
        globaltime = Globals.Realtime();
        */
function getSequence()
{   //
    var d1 = UI.GetValue(["Scripts", "Keys", "flick delay"]);
    var d2 = UI.GetValue(["Scripts", "Keys", "sleep delay"]);
    var flick=begintime+d1
    var sleep=begintime+d2
    
    var currentTime=Globals.Tickcount()
    if(currentTime >= begintime && currentTime <= flick)
    {
        return(0);
    }
    //if sleeping
    else if(currentTime > flick && currentTime <= sleep)
    {
        return(1);
    }
    //restart
    else
    {
        begintime=currentTime;
        return(1);
    }

}
function main() 
{

    
    
    if (UI.GetValue(["Scripts", "Keys", "JS Keybinds", "Enable Flick"])==true)
    {  
        switch(getSequence())
        {
            //do flick
            case 0:
                if (UI.GetValue(["Scripts", "Keys", "JS Keybinds", "Enable Flick Inverter"])==true)
                {
                    UI.SetHotkeyState(["Rage", "Anti Aim","General", "Key assignment", "Left direction"], "Always");
                    UI.SetHotkeyState(["Rage", "Anti Aim", "General", "Key assignment","Right direction"], "Toggle");
                }
                else
                {
                    UI.SetHotkeyState(["Rage", "Anti Aim","General", "Key assignment", "Right direction"], "Always");
                    UI.SetHotkeyState(["Rage", "Anti Aim", "General", "Key assignment","Left direction"], "Toggle");
                }
                break;
            
            //sleep
            case 1:
                if (UI.GetValue(["Scripts", "Keys", "JS Keybinds", "Enable Flick Inverter"])==true)
                {
                    UI.SetHotkeyState(["Rage", "Anti Aim","General", "Key assignment", "Right direction"], "Always");
                    UI.SetHotkeyState(["Rage", "Anti Aim", "General", "Key assignment","Left direction"], "Toggle");
                }
                else
                {
                    UI.SetHotkeyState(["Rage", "Anti Aim","General", "Key assignment", "Left direction"], "Always");
                    UI.SetHotkeyState(["Rage", "Anti Aim", "General", "Key assignment","Right direction"], "Toggle");
                }
                break;
            


        }
            
        
    } 
    else
    {
        UI.SetHotkeyState(["Rage", "Anti Aim", "General", "Key assignment","Right direction"], "Toggle");
        UI.SetHotkeyState(["Rage", "Anti Aim", "General", "Key assignment","Left direction"], "Toggle");
    }

        

}

Cheat.RegisterCallback("CreateMove", "main")

