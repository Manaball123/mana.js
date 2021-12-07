



UI.AddHotkey(["Scripts", "Keys", "JS Keybinds"], "Enable Flick", "Fake Flick");
UI.AddHotkey(["Scripts", "Keys", "JS Keybinds"], "Enable Flick Inverter", "Fake Flick Inverter");
UI.AddSliderInt( [ "Scripts", "Keys"], "flick delay", 1, 16 )
UI.AddSliderInt( [ "Scripts", "Keys"], "sleep delay", 1, 256 )
UI.AddSliderInt( [ "Scripts", "Keys"], "sleep random offset", 0, 64 )
var begintime = Globals.Tickcount();
var sleep;
var initDelay;
/*
function main(){
    if (Globals.Realtime() > globaltime + delay){
        globaltime = Globals.Realtime();
        */
function getRandomInt(multiplier)
{
    var baseMultiplier;
    if(Math.round(Math.random)==0)
    {
        baseMultiplier=-1;
    }
    else
    {
        baseMultiplier=1;
    }
    return Math.round(Math.random()*multiplier)*baseMultiplier;
}
function getSequence(flickDel,sleepDel)
{   //
    
    var flick=begintime+flickDel;
    var sleep=begintime+sleepDel;
    
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
        initDelay=true;
        return(1);
    }

}
function main() 
{

    
    
    if (UI.GetValue(["Scripts", "Keys", "JS Keybinds", "Enable Flick"])==true)
    {  
        var flick = UI.GetValue(["Scripts", "Keys", "flick delay"]);
        var sleep = UI.GetValue(["Scripts", "Keys", "sleep delay"]);
        var SleepOffset = UI.GetValue(["Scripts", "Keys", "sleep random offset"]);
        if(initDelay==true)
        {
            initDelay=false;
            sleepDelay=getRandomInt(SleepOffset)+sleep;
            if(sleepDelay<1)
            {
                sleepDelay=1;
            }
        }

        switch(getSequence(flick,sleepDelay))
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

