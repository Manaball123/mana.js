/* 
      FuturSense.uno
      Powered by aD#1337
      line 4956
  updated at 6.13.2021
*/
//auth fucked by Mana(lol)
//cant put this shit in an obfustacator due to it being badly coded(lmfao)
//Start load log
const updated_time = "13.3.2021"

//Menu UI
//rofl wtf is this shit, just use a  path constant
//OK REDOING SHIT SO IT FITS IN OBFIUSTACATOR(HOPEFULLY)
const futureSensePath=["Config", "FutureSense", "FutureSense"]
const futureSenseVisuals=["Config", "FS -> Visuals", "FS -> Visuals"]
UI.AddSubTab(["Config", "SUBTAB_MGR"], "FutureSense");
UI.AddSubTab(["Config", "SUBTAB_MGR"], "FS -> Visuals");
UI.AddSliderInt(futureSensePath, "========>Permium Anti-Aim<========", 0, 0);
UI.AddDropdown(futureSensePath, "AA mode", ["Default", "Full sway", "Ideal yaw", "Advanced sway", ], 0);
UI.AddCheckbox(futureSensePath, "Yaw & jitter");
UI.AddCheckbox(futureSensePath, "Fakelag & Anti-Brute");
UI.AddSliderInt(futureSensePath, "=============================", 0, 0);

//AA mode 1 "Normal sway AA"
UI.AddDropdown(futureSensePath, "Anti-Aim condition", ["Global", "Standing", "Moving", "Walking", "Jumping"], 1)

UI.AddCheckbox(futureSensePath, "[Global] Enable condition");
UI.AddCheckbox(futureSensePath, "[Global] Enable Low deleta");
UI.AddCheckbox(futureSensePath, "[Global] Advanced Jitter");
UI.AddSliderInt(futureSensePath, "[Global] Jitter limit", -180, 180);
UI.AddCheckbox(futureSensePath, "[Global] Offset Break");
UI.AddCheckbox(futureSensePath, "[Global] AA-Swing");
UI.AddCheckbox(futureSensePath, "[Global] Swing astrict");
UI.AddSliderInt(futureSensePath, "[Global] Sway Amount", 0, 60);
UI.AddSliderInt(futureSensePath, "[Global] Sway Range", 0, 360);
UI.AddSliderInt(futureSensePath, "[Global] Sway frequency", 1, 50);
UI.AddCheckbox(futureSensePath, "[Global] False jitter");
UI.AddSliderInt(futureSensePath, "[Global] False jitter Speed", 1, 100);
UI.AddSliderInt(futureSensePath, "[Global] False jitter Range", 1, 100);
UI.AddSliderInt(futureSensePath, "[Global] False jitter Step", 1, 10);
UI.AddCheckbox(futureSensePath, "[Global] AntiAim-Switch");
UI.AddSliderInt(futureSensePath, "[Global] Switch Delay", 1, 1000);
UI.AddSliderInt(futureSensePath, "[Global] Switch Yaw - A", -180, 180);
UI.AddSliderInt(futureSensePath, "[Global] Switch Yaw - B", -180, 180);
UI.AddSliderInt(futureSensePath, "[Global] Switch Yaw - C", -180, 180);

UI.AddCheckbox(futureSensePath, "[Standing] Enable condition");
UI.AddCheckbox(futureSensePath, "[Standing] Enable Low deleta");
UI.AddCheckbox(futureSensePath, "[Standing] Advanced Jitter");
UI.AddSliderInt(futureSensePath, "[Standing] Jitter limit", -180, 180);
UI.AddCheckbox(futureSensePath, "[Standing] Offset Break");
UI.AddCheckbox(futureSensePath, "[Standing] AA-Swing");
UI.AddCheckbox(futureSensePath, "[Standing] Swing astrict");
UI.AddSliderInt(futureSensePath, "[Standing] Sway Amount", 0, 60);
UI.AddSliderInt(futureSensePath, "[Standing] Sway Range", 0, 360);
UI.AddSliderInt(futureSensePath, "[Standing] Sway frequency", 1, 50);
UI.AddCheckbox(futureSensePath, "[Standing] False jitter");
UI.AddSliderInt(futureSensePath, "[Standing] False jitter Speed", 1, 100);
UI.AddSliderInt(futureSensePath, "[Standing] False jitter Range", 1, 100);
UI.AddSliderInt(futureSensePath, "[Standing] False jitter Step", 1, 10);
UI.AddCheckbox(futureSensePath, "[Standing] AntiAim-Switch");
UI.AddSliderInt(futureSensePath, "[Standing] Switch Delay", 1, 1000);
UI.AddSliderInt(futureSensePath, "[Standing] Switch Yaw - A", -180, 180);
UI.AddSliderInt(futureSensePath, "[Standing] Switch Yaw - B", -180, 180);
UI.AddSliderInt(futureSensePath, "[Standing] Switch Yaw - C", -180, 180);

UI.AddCheckbox(futureSensePath, "[Moving] Enable condition");
UI.AddCheckbox(futureSensePath, "[Moving] Enable Low deleta");
UI.AddCheckbox(futureSensePath, "[Moving] Advanced Jitter");
UI.AddSliderInt(futureSensePath, "[Moving] Jitter limit", -180, 180);
UI.AddCheckbox(futureSensePath, "[Moving] Offset Break");
UI.AddCheckbox(futureSensePath, "[Moving] AA-Swing");
UI.AddCheckbox(futureSensePath, "[Moving] Swing astrict");
UI.AddSliderInt(futureSensePath, "[Moving] Sway Amount", 0, 60);
UI.AddSliderInt(futureSensePath, "[Moving] Sway Range", 0, 360);
UI.AddSliderInt(futureSensePath, "[Moving] Sway frequency", 1, 50);
UI.AddCheckbox(futureSensePath, "[Moving] False jitter");
UI.AddSliderInt(futureSensePath, "[Moving] False jitter Speed", 1, 100);
UI.AddSliderInt(futureSensePath, "[Moving] False jitter Range", 1, 100);
UI.AddSliderInt(futureSensePath, "[Moving] False jitter Step", 1, 10);
UI.AddCheckbox(futureSensePath, "[Moving] AntiAim-Switch");
UI.AddSliderInt(futureSensePath, "[Moving] Switch Delay", 1, 1000);
UI.AddSliderInt(futureSensePath, "[Moving] Switch Yaw - A", -180, 180);
UI.AddSliderInt(futureSensePath, "[Moving] Switch Yaw - B", -180, 180);
UI.AddSliderInt(futureSensePath, "[Moving] Switch Yaw - C", -180, 180);

UI.AddCheckbox(futureSensePath, "[Walking] Enable condition");
UI.AddCheckbox(futureSensePath, "[Walking] Enable Low deleta");
UI.AddCheckbox(futureSensePath, "[Walking] Advanced Jitter");
UI.AddSliderInt(futureSensePath, "[Walking] Jitter limit", -180, 180);
UI.AddCheckbox(futureSensePath, "[Walking] Offset Break");
UI.AddCheckbox(futureSensePath, "[Walking] AA-Swing");
UI.AddCheckbox(futureSensePath, "[Walking] Swing astrict");
UI.AddSliderInt(futureSensePath, "[Walking] Sway Amount", 0, 60);
UI.AddSliderInt(futureSensePath, "[Walking] Sway Range", 0, 360);
UI.AddSliderInt(futureSensePath, "[Walking] Sway frequency", 1, 50);
UI.AddCheckbox(futureSensePath, "[Walking] False jitter");
UI.AddSliderInt(futureSensePath, "[Walking] False jitter Speed", 1, 100);
UI.AddSliderInt(futureSensePath, "[Walking] False jitter Range", 1, 100);
UI.AddSliderInt(futureSensePath, "[Walking] False jitter Step", 1, 10);
UI.AddCheckbox(futureSensePath, "[Walking] AntiAim-Switch");
UI.AddSliderInt(futureSensePath, "[Walking] Switch Delay", 1, 1000);
UI.AddSliderInt(futureSensePath, "[Walking] Switch Yaw - A", -180, 180);
UI.AddSliderInt(futureSensePath, "[Walking] Switch Yaw - B", -180, 180);
UI.AddSliderInt(futureSensePath, "[Walking] Switch Yaw - C", -180, 180);

UI.AddCheckbox(futureSensePath, "[Jumping] Enable condition");
UI.AddCheckbox(futureSensePath, "[Jumping] Enable Low deleta");
UI.AddCheckbox(futureSensePath, "[Jumping] Advanced Jitter");
UI.AddSliderInt(futureSensePath, "[Jumping] Jitter limit", -180, 180);
UI.AddCheckbox(futureSensePath, "[Jumping] Offset Break");
UI.AddCheckbox(futureSensePath, "[Jumping] AA-Swing");
UI.AddCheckbox(futureSensePath, "[Jumping] Swing astrict");
UI.AddSliderInt(futureSensePath, "[Jumping] Sway Amount", 0, 60);
UI.AddSliderInt(futureSensePath, "[Jumping] Sway Range", 0, 360);
UI.AddSliderInt(futureSensePath, "[Jumping] Sway frequency", 1, 50);
UI.AddCheckbox(futureSensePath, "[Jumping] False jitter");
UI.AddSliderInt(futureSensePath, "[Jumping] False jitter Speed", 1, 100);
UI.AddSliderInt(futureSensePath, "[Jumping] False jitter Range", 1, 100);
UI.AddSliderInt(futureSensePath, "[Jumping] False jitter Step", 1, 10);
UI.AddCheckbox(futureSensePath, "[Jumping] AntiAim-Switch");
UI.AddSliderInt(futureSensePath, "[Jumping] Switch Delay", 1, 1000);
UI.AddSliderInt(futureSensePath, "[Jumping] Switch Yaw - A", -180, 180);
UI.AddSliderInt(futureSensePath, "[Jumping] Switch Yaw - B", -180, 180);
UI.AddSliderInt(futureSensePath, "[Jumping] Switch Yaw - C", -180, 180);

//AA mode 3 "Advanced sway AA"
UI.AddSliderInt(futureSensePath, "---> Advanced sway AA <---", 0, 0);
UI.AddCheckbox(futureSensePath, "Enable walk AA");
UI.AddCheckbox(futureSensePath, "Advanced Jitter");
UI.AddSliderInt(futureSensePath, "Jitter limit", -180, 180);
UI.AddCheckbox(futureSensePath, "Offset Break");
UI.AddCheckbox(futureSensePath, "AA-Swing");
UI.AddCheckbox(futureSensePath, "Swing astrict");
UI.AddSliderInt(futureSensePath, "Sway Amount", 0, 60);
UI.AddSliderInt(futureSensePath, "Sway Range", 0, 360);
UI.AddSliderInt(futureSensePath, "Sway frequency", 1, 50);
UI.AddCheckbox(futureSensePath, "False jitter");
UI.AddSliderInt(futureSensePath, "False jitter Speed", 1, 100);
UI.AddSliderInt(futureSensePath, "False jitter Range", 1, 100);
UI.AddSliderInt(futureSensePath, "False jitter Step", 1, 10);
UI.AddCheckbox(futureSensePath, "AntiAim-Switch");
UI.AddSliderInt(futureSensePath, "Switch Delay", 1, 1000);
UI.AddSliderInt(futureSensePath, "Switch Yaw - A", -180, 180);
UI.AddSliderInt(futureSensePath, "Switch Yaw - B", -180, 180);
UI.AddSliderInt(futureSensePath, "Switch Yaw - C", -180, 180);

UI.AddSliderInt(futureSensePath, "---> Yaw & Jitter <---", 0, 0);
UI.AddSliderInt(futureSensePath, "Jitter value", -180, 180);
UI.AddCheckbox(futureSensePath, "Random Jitter");

UI.AddSliderInt(futureSensePath, "---> FakeLag <---", 0, 0);
UI.AddSliderInt(futureSensePath, "Fakelag Max", 0, 16);
UI.AddSliderInt(futureSensePath, "Fakelag Min", 0, 16);
UI.AddSliderInt(futureSensePath, "Fakelag Delay", 1, 40);
UI.AddSliderInt(futureSensePath, "Trigger fakelag Max", 0, 16);
UI.AddSliderInt(futureSensePath, "Trigger fakelag Min", 0, 16);
UI.AddSliderInt(futureSensePath, "Trigger fakelag Delay", 1, 40);
UI.AddSliderInt(futureSensePath, "Fakelag jitter Max", 0, 100);
UI.AddSliderInt(futureSensePath, "Fakelag jitter Min", 0, 100);
UI.AddSliderInt(futureSensePath, "Fakelag jitter Delay", 1, 40);
UI.AddCheckbox(futureSensePath, "FakeLag On Move");
UI.AddSliderInt(futureSensePath, "Move Fakelag", 0, 16);
UI.AddCheckbox(futureSensePath, "Fakelag On Auto Stop");
UI.AddSliderInt(futureSensePath, "Auto Stop Fakelag", 0, 16);
UI.AddCheckbox(futureSensePath, "Better coverage lag");

UI.AddSliderInt(futureSensePath, "---> Anti-Brute <---", 0, 0);
UI.AddCheckbox(futureSensePath, "On shot mode");
UI.AddSliderInt(futureSensePath, "On shot fakelag", 0, 16);
UI.AddCheckbox(futureSensePath, "Dynamic desync on shot");
UI.AddCheckbox(futureSensePath, "Leg movement");
UI.AddCheckbox(futureSensePath, "Anti Bruteforce");

UI.AddSliderInt(futureSensePath, "=====>Ragebot assist && Movement<====", 0, 0);
UI.AddCheckbox(futureSensePath, "AWP&Scout Flip");
UI.AddCheckbox(futureSensePath, "SemiRage assist");
UI.AddCheckbox(futureSensePath, "Edit autowall");
UI.AddCheckbox(futureSensePath, "Double Tap assist");
UI.AddCheckbox(futureSensePath, "DT DMG perdiction");
UI.AddCheckbox(futureSensePath, "Better DT recharge");
UI.AddDropdown(futureSensePath, "DT mode", ["Adaptive", "Best speed"], 0)
UI.AddCheckbox(futureSensePath, "Disable DT on other weapon");
UI.AddCheckbox(futureSensePath, "DMG override on key");
UI.AddCheckbox(futureSensePath, "Reduce hitchance");
UI.AddCheckbox(futureSensePath, "Legit AA on use");
UI.AddCheckbox(futureSensePath, "Jump Scout/Revolver Hitchance");
UI.AddSliderInt(futureSensePath, "Hitchance", 0, 100);
UI.AddSliderInt(futureSensePath, "---> Slowwalk speed <---", 0, 0);
UI.AddSliderInt(futureSensePath, "Speed", 0, 135);
UI.AddCheckbox(futureSensePath, "--> Jitter Speed");
UI.AddSliderInt(futureSensePath, "Jitter Min", 0, 135);
UI.AddSliderInt(futureSensePath, "Jitter Max", 0, 135);
UI.AddCheckbox(futureSensePath, "--> Individual speeds");
UI.AddSliderInt(futureSensePath, "Forward Speed", 0, 135);
UI.AddSliderInt(futureSensePath, "Side Speed", 0, 135);
UI.AddSliderInt(futureSensePath, "Back Speed", 0, 135);
UI.AddSliderInt(futureSensePath, "---> Pitch misc. <---", 0, 0);
UI.AddDropdown(futureSensePath, "Pitch Setting", ["Off", "Pitch zero", "Pitch zero on land", "Pitch down", "Fake pitch down"], 0);
UI.AddSliderInt(futureSensePath, "---> Freestading <---", 0, 0);
UI.AddCheckbox(futureSensePath, "Enable freestanding");
UI.AddDropdown(futureSensePath, "Freestanding Mode", ["Disabled", "Normal", "Reversed"], 0);

UI.AddSliderInt(futureSenseVisuals, "=======>indicators && Visuals<========", 0, 0);
UI.AddCheckbox(futureSenseVisuals, "Left TXT list indicator");
UI.AddColorPicker(futureSenseVisuals, "List indicator main color");
UI.AddCheckbox(futureSenseVisuals, "Health state indicator");
UI.AddCheckbox(futureSenseVisuals, "Top RGB line");
UI.AddCheckbox(futureSenseVisuals, "Crosshair hitmarker");
UI.AddCheckbox(futureSenseVisuals, "Bar indicator");
UI.AddSliderInt(futureSenseVisuals, "Pos_x", 10, 1920)
UI.AddSliderInt(futureSenseVisuals, "Pos_y", 10, 1080)
    /*
    UI.AddMultiDropdown(futureSenseVisuals, "active modules", ["Doubletap", "Fakelag", "Miscellaneous"]);
    UI.AddColorPicker(futureSenseVisuals, "doubletap accent")
    UI.AddColorPicker(futureSenseVisuals, "primary accent")
    UI.AddColorPicker(futureSenseVisuals, "secondary accent")
    UI.AddSliderInt(futureSenseVisuals, "pos_dt_x", 10, 1920)
    UI.AddSliderInt(futureSenseVisuals, "pos_dt_y", 10, 1080)
    UI.AddSliderInt(futureSenseVisuals, "pos_fl_x", 10, 1920)
    UI.AddSliderInt(futureSenseVisuals, "pos_fl_y", 10, 1080)
    UI.AddSliderInt(futureSenseVisuals, "pos_misc_x", 10, 1920)
    UI.AddSliderInt(futureSenseVisuals, "pos_misc_y", 10, 1080)
    */
UI.AddCheckbox(futureSenseVisuals, "Menu Border");
UI.AddCheckbox(futureSenseVisuals, "AA indicator");
UI.AddDropdown(futureSenseVisuals, "AA indicator mode", ["Ideal yaw", "Half triangle"], 0)
UI.AddColorPicker(futureSenseVisuals, "AA indicator Color");
UI.AddCheckbox(futureSenseVisuals, "AA indicator Desync base Color");
UI.AddCheckbox(futureSenseVisuals, "Display indicator");
UI.AddCheckbox(futureSenseVisuals, "Show Bullet Tracer");
UI.AddSliderInt(futureSenseVisuals, "Bullet Tracer Thickness", 1, 50);
UI.AddColorPicker(futureSenseVisuals, "Bullet Tracer Color");
UI.AddCheckbox(futureSenseVisuals, "Enable Aspect Ratio Changer");
UI.AddSliderFloat(futureSenseVisuals, "Aspect Ratio", 0.5, 3.10);
UI.AddCheckbox(futureSenseVisuals, "Free camera");
UI.AddSliderInt(futureSenseVisuals, "Free camera following speed", 2, 64);
UI.AddCheckbox(futureSenseVisuals, "Enable destroy watermark");
UI.AddSliderInt(futureSenseVisuals, "Pos - x", 0, 1920);
UI.AddSliderInt(futureSenseVisuals, "Pos - y", 0, 1080);
UI.AddDropdown(futureSenseVisuals, "Head portrait mode", ["?", "Custom texture"], 0)
UI.AddCheckbox(futureSenseVisuals, "Enable Weapon indicator");
UI.AddSliderInt(futureSenseVisuals, "Pos x", 0, 1920);
UI.AddSliderInt(futureSenseVisuals, "Pos y", 0, 1080);
UI.AddCheckbox(futureSenseVisuals, "Enable Heaven arrow");
UI.AddColorPicker(futureSenseVisuals, "Active arrow color");
UI.AddCheckbox(futureSenseVisuals, "Active head circle");
UI.AddSliderFloat(futureSenseVisuals, "Hit effect", 0, 2);
UI.AddCheckbox(futureSenseVisuals, "Enable watermark");
UI.AddColorPicker(futureSenseVisuals, "Watermark color");
UI.AddCheckbox(futureSenseVisuals, "Rainbow trail");
UI.AddSliderInt(futureSenseVisuals, "Rainbow Speed", 1, 10)
UI.AddSliderInt(futureSenseVisuals, "Residene time", 1, 20)
UI.AddSliderInt(futureSenseVisuals, "Thickness", 1, 3)
UI.AddCheckbox(futureSenseVisuals, "Destroy ball");
UI.AddColorPicker(futureSenseVisuals, "Destroy ball color");
//UI.AddCheckbox(futureSenseVisuals, "Draw hitbox");
UI.AddCheckbox(futureSenseVisuals, "Cool Box ESP");
UI.AddColorPicker(futureSenseVisuals, "Cool Box 1");
UI.AddColorPicker(futureSenseVisuals, "Cool Box 2");
UI.AddCheckbox(futureSenseVisuals, "health based color");
UI.AddCheckbox(futureSenseVisuals, "DT indicator");
UI.AddSliderInt(futureSenseVisuals, "Pos X", 0, 1920);
UI.AddSliderInt(futureSenseVisuals, "Pos Y", 0, 1080);
UI.AddColorPicker(futureSenseVisuals, "Bar color");
UI.AddSliderInt(futureSenseVisuals, "===========>Misc.<===========", 0, 0);
UI.AddCheckbox(futureSenseVisuals, "Scope fov");
UI.AddSliderInt(futureSenseVisuals, "Scope fov range", 50, 150);
UI.AddCheckbox(futureSenseVisuals, "Advanced logs");
UI.AddMultiDropdown(futureSenseVisuals, "Active log print", ["Shot log", "Buy log"])
UI.AddCheckbox(futureSenseVisuals, "Enable custom clantag");
UI.AddTextbox(futureSenseVisuals, "Custom Clantag")
UI.AddSliderInt(futureSenseVisuals, "Clantag Speed", 1, 50);
UI.AddCheckbox(futureSenseVisuals, "Ping spike");
UI.AddSliderInt(futureSenseVisuals, "Ping spike value", 0, 200);
UI.AddCheckbox(futureSenseVisuals, "Better strafe");

UI.AddHotkey(["Config", "SUBTAB_MGR", "Scripts", "SHEET_MGR", "Keys", "JS Keybinds"], "Autowall on key", "Autowall");
UI.AddHotkey(["Config", "SUBTAB_MGR", "Scripts", "SHEET_MGR", "Keys", "JS Keybinds"], "DMG override", "DMG override");
if (UI.GetValue(["Config", "FutureSense", "FutureSense", "Speed"]) == 0) {
    UI.SetValue(["Config", "FutureSense", "FutureSense", "Speed"], 40);
}
if (UI.GetValue(["Config", "FS -> Visuals", "FS -> Visuals", "Aspect Ratio"]) == 0) {
    UI.SetValue(["Config", "FS -> Visuals", "FS -> Visuals", "Aspect Ratio"], 1.50);
}

function UIEnabled() {
    // UI.AddSliderInt(futureSensePath, "===========>Anti-Aim<===========", 0, 0);

    // sway AA enable
    if (UI.GetValue(["Config", "FutureSense", "FutureSense", "AA mode"]) == 1) {
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "Anti-Aim condition"], 1)

        if (UI.GetValue(["Config", "FutureSense", "FutureSense", "Anti-Aim condition"]) == 0) {
            UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Global] Enable condition"], 1)
            if (UI.GetValue(["Config", "FutureSense", "FutureSense", "[Global] Enable condition"])) {
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Global] Enable Low deleta"], 1)
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Global] Advanced Jitter"], 1)
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Global] Jitter limit"], 1)
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Global] Offset Break"], 1)
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Global] AA-Swing"], 1)
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Global] Swing astrict"], 1)
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Global] Sway Amount"], 1)
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Global] Sway Range"], 1)
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Global] Sway frequency"], 1)
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Global] False jitter"], 1)
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Global] False jitter Speed"], 1)
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Global] False jitter Range"], 1)
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Global] False jitter Step"], 1)
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Global] AntiAim-Switch"], 1)
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Global] Switch Delay"], 1)
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Global] Switch Yaw - A"], 1)
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Global] Switch Yaw - B"], 1)
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Global] Switch Yaw - C"], 1)
            } else {
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Global] Enable Low deleta"], 0)
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Global] Advanced Jitter"], 0)
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Global] Jitter limit"], 0)
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Global] Offset Break"], 0)
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Global] AA-Swing"], 0)
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Global] Swing astrict"], 0)
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Global] Sway Amount"], 0)
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Global] Sway Range"], 0)
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Global] Sway frequency"], 0)
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Global] False jitter"], 0)
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Global] False jitter Speed"], 0)
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Global] False jitter Range"], 0)
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Global] False jitter Step"], 0)
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Global] AntiAim-Switch"], 0)
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Global] Switch Delay"], 0)
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Global] Switch Yaw - A"], 0)
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Global] Switch Yaw - B"], 0)
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Global] Switch Yaw - C"], 0)
            }
        } else {
            UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Global] Enable condition"], 0)
            UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Global] Enable Low deleta"], 0)
            UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Global] Advanced Jitter"], 0)
            UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Global] Jitter limit"], 0)
            UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Global] Offset Break"], 0)
            UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Global] AA-Swing"], 0)
            UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Global] Swing astrict"], 0)
            UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Global] Sway Amount"], 0)
            UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Global] Sway Range"], 0)
            UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Global] Sway frequency"], 0)
            UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Global] False jitter"], 0)
            UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Global] False jitter Speed"], 0)
            UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Global] False jitter Range"], 0)
            UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Global] False jitter Step"], 0)
            UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Global] AntiAim-Switch"], 0)
            UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Global] Switch Delay"], 0)
            UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Global] Switch Yaw - A"], 0)
            UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Global] Switch Yaw - B"], 0)
            UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Global] Switch Yaw - C"], 0)
        }

        //Standing
        if (UI.GetValue(["Config", "FutureSense", "FutureSense", "Anti-Aim condition"]) == 1) {
            UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Standing] Enable condition"], 1)
            if (UI.GetValue(["Config", "FutureSense", "FutureSense", "[Standing] Enable condition"])) {
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Standing] Enable Low deleta"], 1)
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Standing] Advanced Jitter"], 1)
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Standing] Jitter limit"], 1)
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Standing] Offset Break"], 1)
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Standing] AA-Swing"], 1)
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Standing] Swing astrict"], 1)
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Standing] Sway Amount"], 1)
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Standing] Sway Range"], 1)
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Standing] Sway frequency"], 1)
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Standing] False jitter"], 1)
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Standing] False jitter Speed"], 1)
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Standing] False jitter Range"], 1)
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Standing] False jitter Step"], 1)
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Standing] AntiAim-Switch"], 1)
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Standing] Switch Delay"], 1)
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Standing] Switch Yaw - A"], 1)
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Standing] Switch Yaw - B"], 1)
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Standing] Switch Yaw - C"], 1)
            } else {
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Standing] Enable Low deleta"], 0)
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Standing] Advanced Jitter"], 0)
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Standing] Jitter limit"], 0)
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Standing] Offset Break"], 0)
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Standing] AA-Swing"], 0)
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Standing] Swing astrict"], 0)
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Standing] Sway Amount"], 0)
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Standing] Sway Range"], 0)
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Standing] Sway frequency"], 0)
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Standing] False jitter"], 0)
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Standing] False jitter Speed"], 0)
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Standing] False jitter Range"], 0)
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Standing] False jitter Step"], 0)
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Standing] AntiAim-Switch"], 0)
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Standing] Switch Delay"], 0)
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Standing] Switch Yaw - A"], 0)
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Standing] Switch Yaw - B"], 0)
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Standing] Switch Yaw - C"], 0)
            }
        } else {
            UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Standing] Enable condition"], 0)
            UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Standing] Enable Low deleta"], 0)
            UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Standing] Advanced Jitter"], 0)
            UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Standing] Jitter limit"], 0)
            UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Standing] Offset Break"], 0)
            UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Standing] AA-Swing"], 0)
            UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Standing] Swing astrict"], 0)
            UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Standing] Sway Amount"], 0)
            UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Standing] Sway Range"], 0)
            UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Standing] Sway frequency"], 0)
            UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Standing] False jitter"], 0)
            UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Standing] False jitter Speed"], 0)
            UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Standing] False jitter Range"], 0)
            UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Standing] False jitter Step"], 0)
            UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Standing] AntiAim-Switch"], 0)
            UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Standing] Switch Delay"], 0)
            UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Standing] Switch Yaw - A"], 0)
            UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Standing] Switch Yaw - B"], 0)
            UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Standing] Switch Yaw - C"], 0)
        }

        //Moving
        if (UI.GetValue(["Config", "FutureSense", "FutureSense", "Anti-Aim condition"]) == 2) {
            UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Moving] Enable condition"], 1)
            if (UI.GetValue(["Config", "FutureSense", "FutureSense", "[Moving] Enable condition"])) {
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Moving] Enable Low deleta"], 1)
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Moving] Advanced Jitter"], 1)
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Moving] Jitter limit"], 1)
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Moving] Offset Break"], 1)
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Moving] AA-Swing"], 1)
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Moving] Swing astrict"], 1)
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Moving] Sway Amount"], 1)
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Moving] Sway Range"], 1)
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Moving] Sway frequency"], 1)
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Moving] False jitter"], 1)
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Moving] False jitter Speed"], 1)
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Moving] False jitter Range"], 1)
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Moving] False jitter Step"], 1)
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Moving] AntiAim-Switch"], 1)
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Moving] Switch Delay"], 1)
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Moving] Switch Yaw - A"], 1)
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Moving] Switch Yaw - B"], 1)
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Moving] Switch Yaw - C"], 1)
            } else {
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Moving] Enable Low deleta"], 0)
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Moving] Advanced Jitter"], 0)
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Moving] Jitter limit"], 0)
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Moving] Offset Break"], 0)
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Moving] AA-Swing"], 0)
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Moving] Swing astrict"], 0)
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Moving] Sway Amount"], 0)
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Moving] Sway Range"], 0)
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Moving] Sway frequency"], 0)
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Moving] False jitter"], 0)
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Moving] False jitter Speed"], 0)
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Moving] False jitter Range"], 0)
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Moving] False jitter Step"], 0)
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Moving] AntiAim-Switch"], 0)
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Moving] Switch Delay"], 0)
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Moving] Switch Yaw - A"], 0)
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Moving] Switch Yaw - B"], 0)
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Moving] Switch Yaw - C"], 0)
            }
        } else {
            UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Moving] Enable condition"], 0)
            UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Moving] Enable Low deleta"], 0)
            UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Moving] Advanced Jitter"], 0)
            UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Moving] Jitter limit"], 0)
            UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Moving] Offset Break"], 0)
            UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Moving] AA-Swing"], 0)
            UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Moving] Swing astrict"], 0)
            UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Moving] Sway Amount"], 0)
            UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Moving] Sway Range"], 0)
            UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Moving] Sway frequency"], 0)
            UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Moving] False jitter"], 0)
            UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Moving] False jitter Speed"], 0)
            UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Moving] False jitter Range"], 0)
            UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Moving] False jitter Step"], 0)
            UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Moving] AntiAim-Switch"], 0)
            UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Moving] Switch Delay"], 0)
            UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Moving] Switch Yaw - A"], 0)
            UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Moving] Switch Yaw - B"], 0)
            UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Moving] Switch Yaw - C"], 0)
        }

        //Walking
        if (UI.GetValue(["Config", "FutureSense", "FutureSense", "Anti-Aim condition"]) == 3) {
            UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Walking] Enable condition"], 1)
            if (UI.GetValue(["Config", "FutureSense", "FutureSense", "[Walking] Enable condition"])) {
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Walking] Enable Low deleta"], 1)
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Walking] Advanced Jitter"], 1)
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Walking] Jitter limit"], 1)
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Walking] Offset Break"], 1)
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Walking] AA-Swing"], 1)
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Walking] Swing astrict"], 1)
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Walking] Sway Amount"], 1)
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Walking] Sway Range"], 1)
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Walking] Sway frequency"], 1)
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Walking] False jitter"], 1)
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Walking] False jitter Speed"], 1)
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Walking] False jitter Range"], 1)
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Walking] False jitter Step"], 1)
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Walking] AntiAim-Switch"], 1)
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Walking] Switch Delay"], 1)
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Walking] Switch Yaw - A"], 1)
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Walking] Switch Yaw - B"], 1)
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Walking] Switch Yaw - C"], 1)
            } else {
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Walking] Enable Low deleta"], 0)
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Walking] Advanced Jitter"], 0)
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Walking] Jitter limit"], 0)
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Walking] Offset Break"], 0)
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Walking] AA-Swing"], 0)
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Walking] Swing astrict"], 0)
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Walking] Sway Amount"], 0)
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Walking] Sway Range"], 0)
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Walking] Sway frequency"], 0)
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Walking] False jitter"], 0)
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Walking] False jitter Speed"], 0)
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Walking] False jitter Range"], 0)
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Walking] False jitter Step"], 0)
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Walking] AntiAim-Switch"], 0)
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Walking] Switch Delay"], 0)
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Walking] Switch Yaw - A"], 0)
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Walking] Switch Yaw - B"], 0)
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Walking] Switch Yaw - C"], 0)
            }
        } else {
            UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Walking] Enable condition"], 0)
            UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Walking] Enable Low deleta"], 0)
            UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Walking] Advanced Jitter"], 0)
            UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Walking] Jitter limit"], 0)
            UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Walking] Offset Break"], 0)
            UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Walking] AA-Swing"], 0)
            UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Walking] Swing astrict"], 0)
            UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Walking] Sway Amount"], 0)
            UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Walking] Sway Range"], 0)
            UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Walking] Sway frequency"], 0)
            UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Walking] False jitter"], 0)
            UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Walking] False jitter Speed"], 0)
            UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Walking] False jitter Range"], 0)
            UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Walking] False jitter Step"], 0)
            UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Walking] AntiAim-Switch"], 0)
            UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Walking] Switch Delay"], 0)
            UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Walking] Switch Yaw - A"], 0)
            UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Walking] Switch Yaw - B"], 0)
            UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Walking] Switch Yaw - C"], 0)
        }

        //Jumping
        if (UI.GetValue(["Config", "FutureSense", "FutureSense", "Anti-Aim condition"]) == 4) {
            UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Jumping] Enable condition"], 1)
            if (UI.GetValue(["Config", "FutureSense", "FutureSense", "[Jumping] Enable condition"])) {
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Jumping] Enable Low deleta"], 1)
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Jumping] Advanced Jitter"], 1)
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Jumping] Jitter limit"], 1)
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Jumping] Offset Break"], 1)
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Jumping] AA-Swing"], 1)
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Jumping] Swing astrict"], 1)
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Jumping] Sway Amount"], 1)
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Jumping] Sway Range"], 1)
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Jumping] Sway frequency"], 1)
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Jumping] False jitter"], 1)
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Jumping] False jitter Speed"], 1)
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Jumping] False jitter Range"], 1)
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Jumping] False jitter Step"], 1)
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Jumping] AntiAim-Switch"], 1)
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Jumping] Switch Delay"], 1)
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Jumping] Switch Yaw - A"], 1)
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Jumping] Switch Yaw - B"], 1)
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Jumping] Switch Yaw - C"], 1)
            } else {
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Jumping] Enable Low deleta"], 0)
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Jumping] Advanced Jitter"], 0)
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Jumping] Jitter limit"], 0)
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Jumping] Offset Break"], 0)
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Jumping] AA-Swing"], 0)
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Jumping] Swing astrict"], 0)
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Jumping] Sway Amount"], 0)
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Jumping] Sway Range"], 0)
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Jumping] Sway frequency"], 0)
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Jumping] False jitter"], 0)
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Jumping] False jitter Speed"], 0)
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Jumping] False jitter Range"], 0)
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Jumping] False jitter Step"], 0)
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Jumping] AntiAim-Switch"], 0)
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Jumping] Switch Delay"], 0)
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Jumping] Switch Yaw - A"], 0)
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Jumping] Switch Yaw - B"], 0)
                UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Jumping] Switch Yaw - C"], 0)
            }
        } else {
            UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Jumping] Enable condition"], 0)
            UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Jumping] Enable Low deleta"], 0)
            UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Jumping] Advanced Jitter"], 0)
            UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Jumping] Jitter limit"], 0)
            UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Jumping] Offset Break"], 0)
            UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Jumping] AA-Swing"], 0)
            UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Jumping] Swing astrict"], 0)
            UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Jumping] Sway Amount"], 0)
            UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Jumping] Sway Range"], 0)
            UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Jumping] Sway frequency"], 0)
            UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Jumping] False jitter"], 0)
            UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Jumping] False jitter Speed"], 0)
            UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Jumping] False jitter Range"], 0)
            UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Jumping] False jitter Step"], 0)
            UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Jumping] AntiAim-Switch"], 0)
            UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Jumping] Switch Delay"], 0)
            UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Jumping] Switch Yaw - A"], 0)
            UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Jumping] Switch Yaw - B"], 0)
            UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Jumping] Switch Yaw - C"], 0)
        }

    } else {
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "Anti-Aim condition"], 0)

        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Global] Enable condition"], 0)
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Global] Enable Low deleta"], 0)
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Global] Advanced Jitter"], 0)
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Global] Jitter limit"], 0)
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Global] Offset Break"], 0)
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Global] AA-Swing"], 0)
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Global] Swing astrict"], 0)
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Global] Sway Amount"], 0)
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Global] Sway Range"], 0)
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Global] Sway frequency"], 0)
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Global] False jitter"], 0)
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Global] False jitter Speed"], 0)
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Global] False jitter Range"], 0)
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Global] False jitter Step"], 0)
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Global] AntiAim-Switch"], 0)
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Global] Switch Delay"], 0)
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Global] Switch Yaw - A"], 0)
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Global] Switch Yaw - B"], 0)
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Global] Switch Yaw - C"], 0)

        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Standing] Enable condition"], 0)
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Standing] Enable Low deleta"], 0)
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Standing] Advanced Jitter"], 0)
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Standing] Jitter limit"], 0)
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Standing] Offset Break"], 0)
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Standing] AA-Swing"], 0)
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Standing] Swing astrict"], 0)
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Standing] Sway Amount"], 0)
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Standing] Sway Range"], 0)
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Standing] Sway frequency"], 0)
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Standing] False jitter"], 0)
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Standing] False jitter Speed"], 0)
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Standing] False jitter Range"], 0)
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Standing] False jitter Step"], 0)
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Standing] AntiAim-Switch"], 0)
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Standing] Switch Delay"], 0)
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Standing] Switch Yaw - A"], 0)
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Standing] Switch Yaw - B"], 0)
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Standing] Switch Yaw - C"], 0)

        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Moving] Enable condition"], 0)
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Moving] Enable Low deleta"], 0)
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Moving] Advanced Jitter"], 0)
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Moving] Jitter limit"], 0)
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Moving] Offset Break"], 0)
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Moving] AA-Swing"], 0)
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Moving] Swing astrict"], 0)
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Moving] Sway Amount"], 0)
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Moving] Sway Range"], 0)
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Moving] Sway frequency"], 0)
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Moving] False jitter"], 0)
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Moving] False jitter Speed"], 0)
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Moving] False jitter Range"], 0)
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Moving] False jitter Step"], 0)
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Moving] AntiAim-Switch"], 0)
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Moving] Switch Delay"], 0)
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Moving] Switch Yaw - A"], 0)
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Moving] Switch Yaw - B"], 0)
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Moving] Switch Yaw - C"], 0)

        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Walking] Enable condition"], 0)
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Walking] Enable Low deleta"], 0)
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Walking] Advanced Jitter"], 0)
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Walking] Jitter limit"], 0)
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Walking] Offset Break"], 0)
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Walking] AA-Swing"], 0)
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Walking] Swing astrict"], 0)
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Walking] Sway Amount"], 0)
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Walking] Sway Range"], 0)
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Walking] Sway frequency"], 0)
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Walking] False jitter"], 0)
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Walking] False jitter Speed"], 0)
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Walking] False jitter Range"], 0)
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Walking] False jitter Step"], 0)
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Walking] AntiAim-Switch"], 0)
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Walking] Switch Delay"], 0)
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Walking] Switch Yaw - A"], 0)
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Walking] Switch Yaw - B"], 0)
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Walking] Switch Yaw - C"], 0)

        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Jumping] Enable condition"], 0)
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Jumping] Enable Low deleta"], 0)
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Jumping] Advanced Jitter"], 0)
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Jumping] Jitter limit"], 0)
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Jumping] Offset Break"], 0)
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Jumping] AA-Swing"], 0)
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Jumping] Swing astrict"], 0)
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Jumping] Sway Amount"], 0)
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Jumping] Sway Range"], 0)
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Jumping] Sway frequency"], 0)
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Jumping] False jitter"], 0)
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Jumping] False jitter Speed"], 0)
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Jumping] False jitter Range"], 0)
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Jumping] False jitter Step"], 0)
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Jumping] AntiAim-Switch"], 0)
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Jumping] Switch Delay"], 0)
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Jumping] Switch Yaw - A"], 0)
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Jumping] Switch Yaw - B"], 0)
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "[Jumping] Switch Yaw - C"], 0)
    }

    //Advanced sway AA
    if (UI.GetValue(["Config", "FutureSense", "FutureSense", "AA mode"]) == 3) {
        UI.SetValue(["Config", "FutureSense", "FutureSense", "Yaw & jitter"], 0)
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "---> Advanced sway AA <---"], 1)
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "Enable walk AA"], 1)
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "Advanced Jitter"], 1)
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "Jitter limit"], 1)
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "Offset Break"], 1)
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "Advanced Jitter"], 1)
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "Jitter limit"], 1)
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "Offset Break"], 1)
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "AA-Swing"], 1)
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "Swing astrict"], 1)
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "Sway Amount"], 1)
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "Sway Range"], 1)
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "Sway frequency"], 1)
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "False jitter"], 1)
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "False jitter Speed"], 1)
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "False jitter Range"], 1)
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "False jitter Step"], 1)
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "AntiAim-Switch"], 1)
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "Switch Delay"], 1)
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "Switch Yaw - A"], 1)
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "Switch Yaw - B"], 1)
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "Switch Yaw - C"], 1)
    } else {
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "---> Advanced sway AA <---"], 0)
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "Enable walk AA"], 0)
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "Advanced Jitter"], 0)
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "Jitter limit"], 0)
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "Offset Break"], 0)
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "Advanced Jitter"], 0)
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "Jitter limit"], 0)
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "Offset Break"], 0)
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "AA-Swing"], 0)
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "Swing astrict"], 0)
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "Sway Amount"], 0)
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "Sway Range"], 0)
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "Sway frequency"], 0)
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "False jitter"], 0)
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "False jitter Speed"], 0)
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "False jitter Range"], 0)
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "False jitter Step"], 0)
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "AntiAim-Switch"], 0)
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "Switch Delay"], 0)
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "Switch Yaw - A"], 0)
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "Switch Yaw - B"], 0)
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "Switch Yaw - C"], 0)
    }

    //Yaw jitter
    if (UI.GetValue(["Config", "FutureSense", "FutureSense", "Yaw & jitter"])) {
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "---> Yaw & Jitter <---"], 1)
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "Jitter value"], 1)
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "Random Jitter"], 1)
    } else {
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "---> Yaw & Jitter <---"], 0)
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "Jitter value"], 0)
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "Random Jitter"], 0)
    }

    //Fakelag
    if (UI.GetValue(["Config", "FutureSense", "FutureSense", "Fakelag & Anti-Brute"])) {
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "---> FakeLag <---"], 1)
        if(UI.GetValue(["Config", "FutureSense", "FutureSense", "Better coverage lag"])) {
            UI.SetEnabled(["Config", "FutureSense", "FutureSense", "Fakelag Max"], 0)
            UI.SetEnabled(["Config", "FutureSense", "FutureSense", "Fakelag Min"], 0)
            UI.SetEnabled(["Config", "FutureSense", "FutureSense", "Fakelag Delay"], 0)
            UI.SetEnabled(["Config", "FutureSense", "FutureSense", "Trigger fakelag Max"], 0)
            UI.SetEnabled(["Config", "FutureSense", "FutureSense", "Trigger fakelag Min"], 0)
            UI.SetEnabled(["Config", "FutureSense", "FutureSense", "Trigger fakelag Delay"], 0)
            UI.SetEnabled(["Config", "FutureSense", "FutureSense", "Fakelag jitter Max"], 0)
            UI.SetEnabled(["Config", "FutureSense", "FutureSense", "Fakelag jitter Min"], 0)
            UI.SetEnabled(["Config", "FutureSense", "FutureSense", "Fakelag jitter Delay"], 0)
            UI.SetEnabled(["Config", "FutureSense", "FutureSense", "FakeLag On Move"], 0)
            UI.SetEnabled(["Config", "FutureSense", "FutureSense", "Move Fakelag"], 0);
            UI.SetEnabled(["Config", "FutureSense", "FutureSense", "Fakelag On Auto Stop"], 0)
            UI.SetEnabled(["Config", "FutureSense", "FutureSense", "Auto Stop Fakelag"], 0);
        }else{
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "Fakelag Max"], 1)
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "Fakelag Min"], 1)
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "Fakelag Delay"], 1)
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "Trigger fakelag Max"], 1)
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "Trigger fakelag Min"], 1)
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "Trigger fakelag Delay"], 1)
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "Fakelag jitter Max"], 1)
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "Fakelag jitter Min"], 1)
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "Fakelag jitter Delay"], 1)
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "FakeLag On Move"], 1)
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "Move Fakelag"], 1);
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "Fakelag On Auto Stop"], 1)
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "Auto Stop Fakelag"], 1);
        }
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "Better coverage lag"], 1);
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "---> Anti-Brute <---"], 1)
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "On shot mode"], 1)
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "Leg movement"], 1)
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "Anti Bruteforce"], 1)
    } else {
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "Move Fakelag"], 0);
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "Auto Stop Fakelag"], 0);
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "---> FakeLag <---"], 0)
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "Fakelag Max"], 0)
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "Fakelag Min"], 0)
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "Fakelag Delay"], 0)
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "Trigger fakelag Max"], 0)
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "Trigger fakelag Min"], 0)
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "Trigger fakelag Delay"], 0)
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "Fakelag jitter Max"], 0)
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "Fakelag jitter Min"], 0)
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "Fakelag jitter Delay"], 0)
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "FakeLag On Move"], 0);
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "Fakelag On Auto Stop"], 0);
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "Better coverage lag"], 0);
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "---> Anti-Brute <---"], 0)
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "On shot mode"], 0)
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "Leg movement"], 0)
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "Anti Bruteforce"], 0)
    }

    if (UI.GetValue(["Config", "FutureSense", "FutureSense", "Fakelag Max"]) < UI.GetValue(["Config", "FutureSense", "FutureSense", "Fakelag Min"])) {
        UI.SetValue(["Config", "FutureSense", "FutureSense", "Fakelag Min"], UI.GetValue(["Config", "FutureSense", "FutureSense", "Fakelag Max"]))
    }

    if (UI.GetValue(["Config", "FutureSense", "FutureSense", "Trigger fakelag Max"]) < UI.GetValue(["Config", "FutureSense", "FutureSense", "Trigger fakelag Min"])) {
        UI.SetValue(["Config", "FutureSense", "FutureSense", "Trigger fakelag Min"], UI.GetValue(["Config", "FutureSense", "FutureSense", "Trigger fakelag Max"]))
    }

    if (UI.GetValue(["Config", "FutureSense", "FutureSense", "Fakelag jitter Max"]) < UI.GetValue(["Config", "FutureSense", "FutureSense", "Fakelag jitter Min"])) {
        UI.SetValue(["Config", "FutureSense", "FutureSense", "Fakelag jitter Min"], UI.GetValue(["Config", "FutureSense", "FutureSense", "Fakelag jitter Max"]))
    }

    //fakelag on move
    if (UI.GetValue(["Config", "FutureSense", "FutureSense", "FakeLag On Move"])) {
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "Move Fakelag"], 1);
    } else {
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "Move Fakelag"], 0);
    }
    //fakelag on autostop
    if (UI.GetValue(["Config", "FutureSense", "FutureSense", "Fakelag On Auto Stop"])) {
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "Auto Stop Fakelag"], 1)
    } else {
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "Auto Stop Fakelag"], 0)
    }

    if (UI.GetValue(["Config", "FutureSense", "FutureSense", "On shot mode"])) {
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "On shot fakelag"], 1)
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "Dynamic desync on shot"], 1)
    } else {
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "On shot fakelag"], 0)
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "Dynamic desync on shot"], 0)
    }

    // UI.AddSliderInt(futureSensePath, "=====>Ragebot assist && Movement<====", 0, 0);

    if (UI.GetValue(["Config", "FutureSense", "FutureSense", "SemiRage assist"])) {
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "Edit autowall"], 1);
    } else {
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "Edit autowall"], 0);
    }

    if (UI.GetValue(["Config", "FutureSense", "FutureSense", "Double Tap assist"])) {
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "DT DMG perdiction"], 1);

        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "Better DT recharge"], 1);
        if (UI.GetValue(["Config", "FutureSense", "FutureSense", "Better DT recharge"])) {
            UI.SetEnabled(["Config", "FutureSense", "FutureSense", "DT mode"], 1);
            UI.SetEnabled(["Config", "FutureSense", "FutureSense", "Disable DT on other weapon"], 1);
        } else {
            UI.SetEnabled(["Config", "FutureSense", "FutureSense", "DT mode"], 0);
            UI.SetEnabled(["Config", "FutureSense", "FutureSense", "Disable DT on other weapon"], 0);
        }
    } else {
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "DT DMG perdiction"], 0);
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "Better DT recharge"], 0);
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "DT mode"], 0);
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "Disable DT on other weapon"], 0);
    }

    if (UI.GetValue(["Config", "FutureSense", "FutureSense", "Jump Scout/Revolver Hitchance"])) {
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "Hitchance"], 1)
    } else {
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "Hitchance"], 0)
    }

    var min = UI.GetValue(["Config", "FutureSense", "FutureSense", "Jitter Min"]);
    var max = UI.GetValue(["Config", "FutureSense", "FutureSense", "Jitter Max"]);

    if (min > max) {
        UI.SetValue(["Config", "FutureSense", "FutureSense", "Jitter Max"], min);
    }

    if (max < min) {
        UI.SetValue(["Config", "FutureSense", "FutureSense", "Jitter Min"], max);
    }

    UI.SetEnabled(["Config", "FutureSense", "FutureSense", "Forward Speed"], 0);
    UI.SetEnabled(["Config", "FutureSense", "FutureSense", "Side Speed"], 0);
    UI.SetEnabled(["Config", "FutureSense", "FutureSense", "Back Speed"], 0);
    UI.SetEnabled(["Config", "FutureSense", "FutureSense", "Jitter Min"], 0);
    UI.SetEnabled(["Config", "FutureSense", "FutureSense", "Jitter Max"], 0);

    if (UI.GetValue(["Config", "FutureSense", "FutureSense", "--> Individual speeds"])) {
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "Forward Speed"], 1);
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "Side Speed"], 1);
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "Back Speed"], 1);
    }

    if (UI.GetValue(["Config", "FutureSense", "FutureSense", "--> Jitter Speed"])) {
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "Jitter Min"], 1);
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "Jitter Max"], 1);
    }

    if (UI.GetValue(["Config", "FutureSense", "FutureSense", "Enable freestanding"])) {
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "Freestanding Mode"], 1);
    } else {
        UI.SetEnabled(["Config", "FutureSense", "FutureSense", "Freestanding Mode"], 0);
    }

    if (UI.GetValue(["Config", "FS -> Visuals", "FS -> Visuals", "Left TXT list indicator"])) {
        UI.SetEnabled(["Config", "FS -> Visuals", "FS -> Visuals", "List indicator main color"], 1);
    } else {
        UI.SetEnabled(["Config", "FS -> Visuals", "FS -> Visuals", "List indicator main color"], 0);
    }
    if (UI.GetValue(["Config", "FS -> Visuals", "FS -> Visuals", "Bar indicator"])) {
        UI.SetEnabled(["Config", "FS -> Visuals", "FS -> Visuals", "Pos_x"], 1);
        UI.SetEnabled(["Config", "FS -> Visuals", "FS -> Visuals", "Pos_y"], 1);
    } else {
        UI.SetEnabled(["Config", "FS -> Visuals", "FS -> Visuals", "Pos_x"], 0);
        UI.SetEnabled(["Config", "FS -> Visuals", "FS -> Visuals", "Pos_y"], 0);
    }


    if (UI.GetValue(["Config", "FS -> Visuals", "FS -> Visuals", "AA indicator"])) {
        UI.SetEnabled(["Config", "FS -> Visuals", "FS -> Visuals", "AA indicator mode"], 1);
        UI.SetEnabled(["Config", "FS -> Visuals", "FS -> Visuals", "Display indicator"], 1);
        if (UI.GetValue(["Config", "FS -> Visuals", "FS -> Visuals", "AA indicator mode"]) == 1) {
            UI.SetEnabled(["Config", "FS -> Visuals", "FS -> Visuals", "AA indicator Color"], 1);
            UI.SetEnabled(["Config", "FS -> Visuals", "FS -> Visuals", "AA indicator Desync base Color"], 0);
        } else if (UI.GetValue(["Config", "FS -> Visuals", "FS -> Visuals", "AA indicator mode"]) == 0 && UI.GetValue(["Config", "FS -> Visuals", "FS -> Visuals", "AA indicator Desync base Color"]) == 1) {
            UI.SetEnabled(["Config", "FS -> Visuals", "FS -> Visuals", "AA indicator Color"], 0);
            UI.SetEnabled(["Config", "FS -> Visuals", "FS -> Visuals", "AA indicator Desync base Color"], 1);
        } else if (UI.GetValue(["Config", "FS -> Visuals", "FS -> Visuals", "AA indicator mode"]) == 0 && UI.GetValue(["Config", "FS -> Visuals", "FS -> Visuals", "AA indicator Desync base Color"]) == 0) {
            UI.SetEnabled(["Config", "FS -> Visuals", "FS -> Visuals", "AA indicator Color"], 1);
            UI.SetEnabled(["Config", "FS -> Visuals", "FS -> Visuals", "AA indicator Desync base Color"], 1);
        }
    } else {
        UI.SetEnabled(["Config", "FS -> Visuals", "FS -> Visuals", "AA indicator mode"], 0);
        UI.SetEnabled(["Config", "FS -> Visuals", "FS -> Visuals", "AA indicator Color"], 0);
        UI.SetEnabled(["Config", "FS -> Visuals", "FS -> Visuals", "AA indicator Desync base Color"], 0);
        UI.SetEnabled(["Config", "FS -> Visuals", "FS -> Visuals", "Display indicator"], 0);
    }

    if (UI.GetValue(["Config", "FS -> Visuals", "FS -> Visuals", "Show Bullet Tracer"])) {
        UI.SetEnabled(["Config", "FS -> Visuals", "FS -> Visuals", "Bullet Tracer Thickness"], 1);
        UI.SetEnabled(["Config", "FS -> Visuals", "FS -> Visuals", "Bullet Tracer Color"], 1);
    } else {
        UI.SetEnabled(["Config", "FS -> Visuals", "FS -> Visuals", "Bullet Tracer Thickness"], 0);
        UI.SetEnabled(["Config", "FS -> Visuals", "FS -> Visuals", "Bullet Tracer Color"], 0);
    }
    if (UI.GetValue(["Config", "FS -> Visuals", "FS -> Visuals", "Enable Aspect Ratio Changer"])) {
        UI.SetEnabled(["Config", "FS -> Visuals", "FS -> Visuals", "Aspect Ratio"], 1);
    } else {
        UI.SetEnabled(["Config", "FS -> Visuals", "FS -> Visuals", "Aspect Ratio"], 0);
    }
    if (UI.GetValue(["Config", "FS -> Visuals", "FS -> Visuals", "Free camera"])) {
        UI.SetEnabled(["Config", "FS -> Visuals", "FS -> Visuals", "Free camera following speed"], 1);
    } else {
        UI.SetEnabled(["Config", "FS -> Visuals", "FS -> Visuals", "Free camera following speed"], 0);
    }
    if (UI.GetValue(["Config", "FS -> Visuals", "FS -> Visuals", "Enable destroy watermark"])) {
        UI.SetEnabled(["Config", "FS -> Visuals", "FS -> Visuals", "Pos - x"], 1);
        UI.SetEnabled(["Config", "FS -> Visuals", "FS -> Visuals", "Pos - y"], 1);
        UI.SetEnabled(["Config", "FS -> Visuals", "FS -> Visuals", "Head portrait mode"], 1);
    } else {
        UI.SetEnabled(["Config", "FS -> Visuals", "FS -> Visuals", "Pos - x"], 0);
        UI.SetEnabled(["Config", "FS -> Visuals", "FS -> Visuals", "Pos - y"], 0);
        UI.SetEnabled(["Config", "FS -> Visuals", "FS -> Visuals", "Head portrait mode"], 0);
    }
    if (UI.GetValue(["Config", "FS -> Visuals", "FS -> Visuals", "Enable Weapon indicator"])) {
        UI.SetEnabled(["Config", "FS -> Visuals", "FS -> Visuals", "Pos x"], 1);
        UI.SetEnabled(["Config", "FS -> Visuals", "FS -> Visuals", "Pos y"], 1);
    } else {
        UI.SetEnabled(["Config", "FS -> Visuals", "FS -> Visuals", "Pos x"], 0);
        UI.SetEnabled(["Config", "FS -> Visuals", "FS -> Visuals", "Pos y"], 0);
    }
    if (UI.GetValue(["Config", "FS -> Visuals", "FS -> Visuals", "Enable Heaven arrow"])) {
        UI.SetEnabled(["Config", "FS -> Visuals", "FS -> Visuals", "Active arrow color"], 1);
    } else {
        UI.SetEnabled(["Config", "FS -> Visuals", "FS -> Visuals", "Active arrow color"], 0);
    }

    if (UI.GetValue(["Config", "FS -> Visuals", "FS -> Visuals", "Rainbow trail"])) {
        UI.SetEnabled(["Config", "FS -> Visuals", "FS -> Visuals", "Rainbow Speed"], 1);
        UI.SetEnabled(["Config", "FS -> Visuals", "FS -> Visuals", "Residene time"], 1);
        UI.SetEnabled(["Config", "FS -> Visuals", "FS -> Visuals", "Thickness"], 1);
    } else {
        UI.SetEnabled(["Config", "FS -> Visuals", "FS -> Visuals", "Rainbow Speed"], 0);
        UI.SetEnabled(["Config", "FS -> Visuals", "FS -> Visuals", "Residene time"], 0);
        UI.SetEnabled(["Config", "FS -> Visuals", "FS -> Visuals", "Thickness"], 0);
    }

    if (UI.GetValue(["Config", "FS -> Visuals", "FS -> Visuals", "Enable watermark"])) {
        UI.SetEnabled(["Config", "FS -> Visuals", "FS -> Visuals", "Watermark color"], 1);
    } else {
        UI.SetEnabled(["Config", "FS -> Visuals", "FS -> Visuals", "Watermark color"], 0);
    }
    if (UI.GetValue(["Config", "FS -> Visuals", "FS -> Visuals", "Destroy ball"])) {
        UI.SetEnabled(["Config", "FS -> Visuals", "FS -> Visuals", "Destroy ball color"], 1);
    } else {
        UI.SetEnabled(["Config", "FS -> Visuals", "FS -> Visuals", "Destroy ball color"], 0);
    }
    if (UI.GetValue(["Config", "FS -> Visuals", "FS -> Visuals", "Cool Box ESP"])) {
        if (UI.GetValue(["Config", "FS -> Visuals", "FS -> Visuals", "health based color"])) {
            UI.SetEnabled(["Config", "FS -> Visuals", "FS -> Visuals", "Cool Box 1"], 0);
            UI.SetEnabled(["Config", "FS -> Visuals", "FS -> Visuals", "Cool Box 2"], 0);
        } else {
            UI.SetEnabled(["Config", "FS -> Visuals", "FS -> Visuals", "Cool Box 1"], 1);
            UI.SetEnabled(["Config", "FS -> Visuals", "FS -> Visuals", "Cool Box 2"], 1);
        }
        UI.SetEnabled(["Config", "FS -> Visuals", "FS -> Visuals", "health based color"], 1);
    } else {
        UI.SetEnabled(["Config", "FS -> Visuals", "FS -> Visuals", "Cool Box 1"], 0);
        UI.SetEnabled(["Config", "FS -> Visuals", "FS -> Visuals", "Cool Box 2"], 0);
        UI.SetEnabled(["Config", "FS -> Visuals", "FS -> Visuals", "health based color"], 0);
    }
    if(UI.GetValue(["Config", "FS -> Visuals", "FS -> Visuals", "DT indicator"])) {
        UI.SetEnabled(["Config", "FS -> Visuals", "FS -> Visuals", "Pos X"], 1);
        UI.SetEnabled(["Config", "FS -> Visuals", "FS -> Visuals", "Pos Y"], 1);
        UI.SetEnabled(["Config", "FS -> Visuals", "FS -> Visuals", "Bar color"], 1);
    }else{
        UI.SetEnabled(["Config", "FS -> Visuals", "FS -> Visuals", "Pos X"], 0);
        UI.SetEnabled(["Config", "FS -> Visuals", "FS -> Visuals", "Pos Y"], 0);
        UI.SetEnabled(["Config", "FS -> Visuals", "FS -> Visuals", "Bar color"], 0);
    }
    if (UI.GetValue(["Config", "FS -> Visuals", "FS -> Visuals", "Scope fov"])) {
        UI.SetEnabled(["Config", "FS -> Visuals", "FS -> Visuals", "Scope fov range"], 1);
    } else {
        UI.SetEnabled(["Config", "FS -> Visuals", "FS -> Visuals", "Scope fov range"], 0);
    }
    if (UI.GetValue(["Config", "FS -> Visuals", "FS -> Visuals", "Advanced logs"])) {
        UI.SetEnabled(["Config", "FS -> Visuals", "FS -> Visuals", "Active log print"], 1);
    } else {
        UI.SetEnabled(["Config", "FS -> Visuals", "FS -> Visuals", "Active log print"], 0);
    }
    if (UI.GetValue(["Config", "FS -> Visuals", "FS -> Visuals", "Enable custom clantag"])) {
        UI.SetEnabled(["Config", "FS -> Visuals", "FS -> Visuals", "Custom Clantag"], 1);
        UI.SetEnabled(["Config", "FS -> Visuals", "FS -> Visuals", "Clantag Speed"], 1);
    } else {
        UI.SetEnabled(["Config", "FS -> Visuals", "FS -> Visuals", "Custom Clantag"], 0);
        UI.SetEnabled(["Config", "FS -> Visuals", "FS -> Visuals", "Clantag Speed"], 0);
    }
    if (UI.GetValue(["Config", "FS -> Visuals", "FS -> Visuals", "Ping spike"])) {
        UI.SetEnabled(["Config", "FS -> Visuals", "FS -> Visuals", "Ping spike value"], 1);
    } else {
        UI.SetEnabled(["Config", "FS -> Visuals", "FS -> Visuals", "Ping spike value"], 0);
    }
    UI.SetEnabled(["Config", "Cheat", "General", "RAGE QUIT"], 1)
}

//定义Normal sway AA 变量
const real = -60;
const up = true
const LBY = -60;
const fakelag = false;
const Trigger_fakelag = false;
const Fakelag_jitter = false;
const Loop_1 = 1;
const Loop_2 = 1;
const Loop_3 = 1;
const Shot = 0;
const BreakLeg = true
const speed = false;
const shot_time = 0

//定义Advanced sway AA 变量

lll = false;
const czz = 0;
const timer = ![],
    down = ![],
    man_timer = ![],
    AB_GoalVal = ![],
    a = 0,
    slide = ![],
    fakeoff = 1,
    slideYonsn = 0,
    man_init = ![],
    rgb_r = 0;
rgb_g = 100;
rgb_b = 255;
current_preset = 0;
const sw_timer = false;
const sw_cur = 1;

//定义 Filp weapon 变量
const flip = false

//定义Pitch Setting 
const groundCounter = 0;

const tab = "General"
const weapon_name_tag = 504
    //武器名称列表
const nameList = {
    1: "Deagle",
    2: "Dualies",
    3: "Five Seven",
    4: "Glock",
    7: "AK47",
    8: "AUG",
    9: "AWP",
    10: "FAMAS",
    11: "G3SG1",
    13: "GALIL",
    14: "M249",
    16: "M4A4",
    17: "Mac10",
    19: "P90",
    23: "MP5",
    24: "UMP45",
    25: "XM1014",
    26: "PP-Bizon",
    27: "MAG7",
    28: "Negev",
    29: "Sawed off",
    30: "Tec-9",
    32: "P2000",
    33: "MP7",
    34: "MP9",
    35: "Nova",
    36: "P250",
    38: "SCAR20",
    39: "SG553",
    40: "SSG08",
    60: "M4A1-S",
    61: "USP",
    63: "CZ-75",
    64: "Revolver"
};

//分辨率变量
const screen_size = Render.GetScreenSize();
const screen_width = Math.round(screen_size[0]);

const FS = {

    ExtendFunction: {

        getVelocity: function(index) {
            const velocity = Entity.GetProp(index, "CBasePlayer", "m_vecVelocity[0]");
            return Math.sqrt(multiply(velocity[0], velocity[0]) + multiply(velocity[1], velocity[1]));
        },

        duplicate: function(theObject) {
            return JSON.parse(JSON.stringify(theObject));
        },

        getCurrentWeapon: function(player) {
            if (!Entity.IsAlive(player)) return "General";
            const weapon = Entity.GetProp(player, "CBasePlayer", "m_hActiveWeapon");
            if (weapon === "m_hActiveWeapon") return "General";
            const weapon_name = (Entity.GetProp(weapon, "CBaseAttributableItem", "m_iItemDefinitionIndex") & 0xFFFF);
            if (nameList[weapon_name] != undefined) {
                return nameList[weapon_name];
            } else {
                return "General";
            }
        },

        draw_circle: function(x, y, radius, thickness, color) {
            var inner = radius - thickness;
            for (; radius > inner; --radius) {
                Render.Circle(x, y, radius, color);
            }
        },

        RGB: function(h, s, v) {
            var r, g, b, i, f, p, q, t;
            if (arguments.length === 1) {
                s = h.s, v = h.v, h = h.h;
            }
            i = Math.floor(multiply(h, 6));
            f = h * 6 - i;
            p = v * (1 - s);
            q = v * (1 - f * s);
            t = v * (1 - (1 - f) * s);
            switch (i % 6) {
                case 0:
                    r = v, g = t, b = p;
                    break;
                case 1:
                    r = q, g = v, b = p;
                    break;
                case 2:
                    r = p, g = v, b = t;
                    break;
                case 3:
                    r = p, g = q, b = v;
                    break;
                case 4:
                    r = t, g = p, b = v;
                    break;
                case 5:
                    r = v, g = p, b = q;
                    break;
            }
            return {
                r: Math.round(multiply(r, 255)),
                g: Math.round(multiply(g, 255)),
                b: Math.round(multiply(b, 255))
            };
        },

        normalize_yaw: function(angle) {
            const adjusted_yaw = angle;

            if (adjusted_yaw < -180)
                adjusted_yaw += 360;

            if (adjusted_yaw > 180)
                adjusted_yaw -= 360;

            return adjusted_yaw;
        },

        normalize_yaw_arrow: function(angle) {
            const angle = (angle % 360 + 360) % 360;
            return angle > 180 ? angle - 360 : angle;
        },

        calculate_yaw: function(src, to) {
            const delta = [src[0] - to[0], src[1] - to[1]]
            const yaw = Math.atan(delta[1] / delta[0])
            yaw = this.normalize_yaw_arrow(multiply(yaw, 180 / Math.PI))
                //yaw * 180 / Math.PI
            if (delta[0] >= 0) {
                yaw = this.normalize_yaw_arrow(yaw + 180)
            }
            return yaw
        },

        world_point_visible: function(origin) {
            const w2s = WorldToScreen(origin)
            if (w2s[0] < 0 || w2s[0] > screen_size[0] || w2s[1] < 0 || w2s[1] > screen_size[1]) {
                return false
            } else {
                return true
            }
        },

        draw_arc: function(x, y, radius, start_angle, percent, multiple, thickness, color) {
            const precision = (2 * Math.PI) / 30;
            const step = Math.PI / 180;
            const inner = radius - thickness;
            const end_angle = (start_angle + multiply(percent, multiple)) * step;
            const start_angle = (start_angle * Math.PI) / 180;

            for (; radius > inner; --radius) {
                for (var angle = start_angle; angle < end_angle; angle += precision) {
                    const cx = Math.round(x + multiply(radius, Math.cos(angle)));
                    const cy = Math.round(y + multiply(radius, Math.sin(angle)));

                    const cx2 = Math.round(x + multiply(radius, Math.cos(angle + precision)));
                    const cy2 = Math.round(y + multiply(radius, Math.sin(angle + precision)));

                    Render.Line(cx, cy, cx2, cy2, color);
                }
            }
        },

        draw_arc_state: function(x, y, size1, size2, start, percent, precision, color) {
            precision = 360 / precision;
            for (var _0xbdacx2 = start; _0xbdacx2 < start + percent - 1; _0xbdacx2 = _0xbdacx2 + precision) {
                const _0xbdacx11 = multiply(_0xbdacx2, Math['PI'] / 180);
                const _0xbdacx12 = (_0xbdacx2 + precision) * Math['PI'] / 180;
                const _0xbdacx13 = Math['cos'](_0xbdacx11);
                const _0xbdacx14 = Math['sin'](_0xbdacx11);
                const _0xbdacx15 = Math['cos'](_0xbdacx12);
                const _0xbdacx16 = Math['sin'](_0xbdacx12);
                const _0xbdacx17 = x + multiply(_0xbdacx13, size2);
                const _0xbdacx18 = y + multiply(_0xbdacx14, size2);
                const _0xbdacx19 = x + multiply(_0xbdacx13, size1);
                const _0xbdacx1a = y + multiply(_0xbdacx14, size1);
                const _0xbdacx1b = x + multiply(_0xbdacx15, size2);
                const _0xbdacx1c = y + multiply(_0xbdacx16, size2);
                const _0xbdacx1d = x + multiply(_0xbdacx15, size1);
                const _0xbdacx1e = y + multiply(_0xbdacx16, size1);
                Render.Polygon([
                    [_0xbdacx19, _0xbdacx1a],
                    [_0xbdacx1d, _0xbdacx1e],
                    [_0xbdacx17, _0xbdacx18]
                ], color);
                Render.Polygon([
                    [_0xbdacx17, _0xbdacx18],
                    [_0xbdacx1d, _0xbdacx1e],
                    [_0xbdacx1b, _0xbdacx1c]
                ], color)
            }
        },

        DEG2RAD: function(degree) {
            return (Math.PI / 180) * degree;
        },

        ANGLE2VEC: function(angle) {
            pitch = angle[0];
            yaw = angle[1];
            return [multiply(Math.cos(this.DEG2RAD(pitch)), Math.cos(this.DEG2RAD(yaw))), multiply(Math.cos(this.DEG2RAD(pitch)), Math.sin(this.DEG2RAD(yaw))), -Math.sin(this.DEG2RAD(pitch))];
        },


        getWallDistance: function(entity, angle) {
            vector = this.ANGLE2VEC(angle);
            origin = Entity.GetRenderOrigin(entity);
            origin[2] += Entity.GetProp(entity, "CBasePlayer", "m_vecViewOffset[2]")[0];
            end = [origin[0] + vector[0] * 8192, origin[1] + vector[1] * 8192, origin[2] + vector[2] * 8192];
            result = Trace.Line(entity, origin, end);
            if (result[1] != 1) {
                wall = [origin[0] + vector[0] * result[1] * 8192, origin[1] + vector[1] * result[1] * 8192, origin[2] + vector[2] * result[1] * 8192];
                distance = Math.sqrt(Math.pow(origin[0] - wall[0], 2) + Math.pow(origin[1] - wall[1], 2) + Math.pow(origin[2] - wall[2], 2));
                return distance;
            } else {
                return 0;
            }
        },

        getWallDistanceWithOrigin: function(entity, angle, origin) {
            const vector = this.ANGLE2VEC(angle);
            const end = [origin[0] + vector[0] * 8192, origin[1] + vector[1] * 8192, origin[2] + vector[2] * 8192];
            var result = Trace.Line(entity, origin, end);
            if (Entity.IsAlive(result[0]) && (Entity.IsEnemy(result[0]) || Entity.IsTeammate(result[0]))) {
                result = Trace.RawLine(0, origin, end, 0x40000000 + 0x20000000 + 0x10000000 + 0x8000000 + 0x4000000 + 0x2000000 + 0x1000000 + 0x20000 + 0x10000 + 0x8000 + 0x4000 + 0x2000 + 0x1000 + 0x800 + 0x400 + 0x200 + 0x100 + 0x80 + 0x40 + 0x20 + 0x10 + 0x8 + 0x4 + 0x02 + 0x01, 1);
            }
            if (result[1] != 1) {
                const wall = [origin[0] + vector[0] * result[1] * 8192, origin[1] + vector[1] * result[1] * 8192, origin[2] + vector[2] * result[1] * 8192];
                const distance = Math.sqrt(Math.pow(origin[0] - wall[0], 2) + Math.pow(origin[1] - wall[1], 2) + Math.pow(origin[2] - wall[2], 2));
                return distance;
            } else {
                return 0;
            }
        }
    }

}


//Anti-Aim 

function Get_Player_state() {
    const flags = Get_Prop('CBasePlayer', 'm_fFlags')

    const velocity = FS.ExtendFunction.getVelocity(Entity.GetLocalPlayer())
    const walk = UI.GetValue(["Rage", "Anti Aim", "General", "Key assignment", "Slow walk"])

    if (velocity < 3 && walk == false && UI.GetValue(["Config", "FutureSense", "FutureSense", "[Standing] Enable condition"])) {
        return "Standing"
    } else if (velocity > 3 && walk == false && UI.GetValue(["Config", "FutureSense", "FutureSense", "[Moving] Enable condition"])) {
        return "Moving"
    } else if (walk == true && UI.GetValue(["Config", "FutureSense", "FutureSense", "[Walking] Enable condition"])) {
        return "Walking"
    } else if (!(flags & 1 << 0) && !(flags & 1 << 18) && UI.GetValue(["Config", "FutureSense", "FutureSense", "[Jumping] Enable condition"])) {
        return "Jumping"
    } else {
        return "Global"
    }
}

const low_deleta = false
const jitter = false
const jitter_value = 0
const offset_break = false

const sway = false
const swing_astrict = false
const sway_amount = 0
const sway_range = 0
const sway_frequency = 0

const fake_jitter = false
const fake_jitter_speed = 0
const fake_jitter_range = 0
const fake_jitter_step = 0

const yaw_switch = false
const yaw_switch_delay = 0
const yaw_switch_a = 0
const yaw_switch_b = 0
const yaw_switch_c = 0

function Anti_Aim_mode1_update() {
    var AA_mode = Get_Player_state()
    if (UI.GetValue(["Config", "FutureSense", "FutureSense", "[Standing] Enable condition"]) == false && UI.GetValue(["Config", "FutureSense", "FutureSense", "[Moving] Enable condition"]) == false && UI.GetValue(["Config", "FutureSense", "FutureSense", "[Walking] Enable condition"]) == false && UI.GetValue(["Config", "FutureSense", "FutureSense", "[Jumping] Enable condition"]) == false && UI.GetValue(["Config", "FutureSense", "FutureSense", "[Global] Enable condition"]) == false) {
        AntiAim.SetOverride(0);
    } else {
        AntiAim.SetOverride(1);
    }
    switch (AA_mode) {
        //standing
        case "Standing":
            if (UI.GetValue(["Config", "FutureSense", "FutureSense", "[Standing] Enable condition"])) {
                low_deleta = UI.GetValue(["Config", "FutureSense", "FutureSense", "[Standing] Enable Low deleta"])
                jitter = UI.GetValue(["Config", "FutureSense", "FutureSense", "[Standing] Advanced Jitter"])
                jitter_value = UI.GetValue(["Config", "FutureSense", "FutureSense", "[Standing] Jitter limit"])
                offset_break = UI.GetValue(["Config", "FutureSense", "FutureSense", "[Standing] Offset Break"])

                sway = UI.GetValue(["Config", "FutureSense", "FutureSense", "[Standing] AA-Swing"])
                swing_astrict = UI.GetValue(["Config", "FutureSense", "FutureSense", "[Standing] Swing astrict"])
                sway_amount = UI.GetValue(["Config", "FutureSense", "FutureSense", "[Standing] Sway Amount"])
                sway_range = UI.GetValue(["Config", "FutureSense", "FutureSense", "[Standing] Sway Range"])
                sway_frequency = UI.GetValue(["Config", "FutureSense", "FutureSense", "[Standing] Sway frequency"])

                fake_jitter = UI.GetValue(["Config", "FutureSense", "FutureSense", "[Standing] False jitter"])
                fake_jitter_speed = UI.GetValue(["Config", "FutureSense", "FutureSense", "[Standing] False jitter Speed"])
                fake_jitter_range = UI.GetValue(["Config", "FutureSense", "FutureSense", "[Standing] False jitter Range"])
                fake_jitter_step = UI.GetValue(["Config", "FutureSense", "FutureSense", "[Standing] False jitter Step"])

                yaw_switch = UI.GetValue(["Config", "FutureSense", "FutureSense", "[Standing] AntiAim-Switch"])
                yaw_switch_delay = UI.GetValue(["Config", "FutureSense", "FutureSense", "[Standing] Switch Delay"])
                yaw_switch_a = UI.GetValue(["Config", "FutureSense", "FutureSense", "[Standing] Switch Yaw - A"])
                yaw_switch_b = UI.GetValue(["Config", "FutureSense", "FutureSense", "[Standing] Switch Yaw - B"])
                yaw_switch_c = UI.GetValue(["Config", "FutureSense", "FutureSense", "[Standing] Switch Yaw - C"])


                if (low_deleta) {
                    Walk_AA()
                } else {
                    clean_lowdeleta()
                    if (jitter) {
                        Jitter(jitter_value)
                    } else if (!jitter) {
                        UI.SetValue(["Rage", "Anti Aim", "Directions", "Jitter offset"], 0);
                        clean_jitter()
                    }

                    if (yaw_switch) {
                        Yaw_switch(yaw_switch_delay, yaw_switch_a, yaw_switch_b, yaw_switch_c)
                    } else if (!yaw_switch) {
                        clean_yawjitter()
                        UI.SetValue(["Rage", "Anti Aim", "Directions", "Yaw offset"], 0);
                    }

                }
                if (offset_break) {
                    Offset_break()
                } else if (sway) {
                    clean_offset_break()
                    Sway(swing_astrict, sway_amount, sway_range, sway_frequency)

                } else if (!sway) {
                    clean_sway()
                }
                if (fake_jitter) {
                    Fake_jitter(fake_jitter_speed, fake_jitter_range, fake_jitter_step)
                } else {
                    clean_fakejitter()
                }
            }
            break;

            //moving
        case "Moving":
            if (UI.GetValue(["Config", "FutureSense", "FutureSense", "[Moving] Enable condition"])) {
                low_deleta = UI.GetValue(["Config", "FutureSense", "FutureSense", "[Moving] Enable Low deleta"])
                jitter = UI.GetValue(["Config", "FutureSense", "FutureSense", "[Moving] Advanced Jitter"])
                jitter_value = UI.GetValue(["Config", "FutureSense", "FutureSense", "[Moving] Jitter limit"])
                offset_break = UI.GetValue(["Config", "FutureSense", "FutureSense", "[Moving] Offset Break"])

                sway = UI.GetValue(["Config", "FutureSense", "FutureSense", "[Moving] AA-Swing"])
                swing_astrict = UI.GetValue(["Config", "FutureSense", "FutureSense", "[Moving] Swing astrict"])
                sway_amount = UI.GetValue(["Config", "FutureSense", "FutureSense", "[Moving] Sway Amount"])
                sway_range = UI.GetValue(["Config", "FutureSense", "FutureSense", "[Moving] Sway Range"])
                sway_frequency = UI.GetValue(["Config", "FutureSense", "FutureSense", "[Moving] Sway frequency"])

                fake_jitter = UI.GetValue(["Config", "FutureSense", "FutureSense", "[Moving] False jitter"])
                fake_jitter_speed = UI.GetValue(["Config", "FutureSense", "FutureSense", "[Moving] False jitter Speed"])
                fake_jitter_range = UI.GetValue(["Config", "FutureSense", "FutureSense", "[Moving] False jitter Range"])
                fake_jitter_step = UI.GetValue(["Config", "FutureSense", "FutureSense", "[Moving] False jitter Step"])

                yaw_switch = UI.GetValue(["Config", "FutureSense", "FutureSense", "[Moving] AntiAim-Switch"])
                yaw_switch_delay = UI.GetValue(["Config", "FutureSense", "FutureSense", "[Moving] Switch Delay"])
                yaw_switch_a = UI.GetValue(["Config", "FutureSense", "FutureSense", "[Moving] Switch Yaw - A"])
                yaw_switch_b = UI.GetValue(["Config", "FutureSense", "FutureSense", "[Moving] Switch Yaw - B"])
                yaw_switch_c = UI.GetValue(["Config", "FutureSense", "FutureSense", "[Moving] Switch Yaw - C"])


                if (low_deleta) {
                    Walk_AA()
                } else {
                    clean_lowdeleta()
                    if (jitter) {
                        Jitter(jitter_value)
                    } else if (!jitter) {
                        UI.SetValue(["Rage", "Anti Aim", "Directions", "Jitter offset"], 0);
                        clean_jitter()
                    }

                    if (yaw_switch) {
                        Yaw_switch(yaw_switch_delay, yaw_switch_a, yaw_switch_b, yaw_switch_c)
                    } else if (!yaw_switch) {
                        clean_yawjitter()
                        UI.SetValue(["Rage", "Anti Aim", "Directions", "Yaw offset"], 0);
                    }

                }
                if (offset_break) {
                    Offset_break()
                } else if (sway) {
                    clean_offset_break()
                    Sway(swing_astrict, sway_amount, sway_range, sway_frequency)

                } else if (!sway) {
                    clean_sway()
                }
                if (fake_jitter) {
                    Fake_jitter(fake_jitter_speed, fake_jitter_range, fake_jitter_step)
                } else {
                    clean_fakejitter()
                }
            }
            break;

            //walking
        case "Walking":
            if (UI.GetValue(["Config", "FutureSense", "FutureSense", "[Walking] Enable condition"])) {
                low_deleta = UI.GetValue(["Config", "FutureSense", "FutureSense", "[Walking] Enable Low deleta"])
                jitter = UI.GetValue(["Config", "FutureSense", "FutureSense", "[Walking] Advanced Jitter"])
                jitter_value = UI.GetValue(["Config", "FutureSense", "FutureSense", "[Walking] Jitter limit"])
                offset_break = UI.GetValue(["Config", "FutureSense", "FutureSense", "[Walking] Offset Break"])

                sway = UI.GetValue(["Config", "FutureSense", "FutureSense", "[Walking] AA-Swing"])
                swing_astrict = UI.GetValue(["Config", "FutureSense", "FutureSense", "[Walking] Swing astrict"])
                sway_amount = UI.GetValue(["Config", "FutureSense", "FutureSense", "[Walking] Sway Amount"])
                sway_range = UI.GetValue(["Config", "FutureSense", "FutureSense", "[Walking] Sway Range"])
                sway_frequency = UI.GetValue(["Config", "FutureSense", "FutureSense", "[Walking] Sway frequency"])

                fake_jitter = UI.GetValue(["Config", "FutureSense", "FutureSense", "[Walking] False jitter"])
                fake_jitter_speed = UI.GetValue(["Config", "FutureSense", "FutureSense", "[Walking] False jitter Speed"])
                fake_jitter_range = UI.GetValue(["Config", "FutureSense", "FutureSense", "[Walking] False jitter Range"])
                fake_jitter_step = UI.GetValue(["Config", "FutureSense", "FutureSense", "[Walking] False jitter Step"])

                yaw_switch = UI.GetValue(["Config", "FutureSense", "FutureSense", "[Walking] AntiAim-Switch"])
                yaw_switch_delay = UI.GetValue(["Config", "FutureSense", "FutureSense", "[Walking] Switch Delay"])
                yaw_switch_a = UI.GetValue(["Config", "FutureSense", "FutureSense", "[Walking] Switch Yaw - A"])
                yaw_switch_b = UI.GetValue(["Config", "FutureSense", "FutureSense", "[Walking] Switch Yaw - B"])
                yaw_switch_c = UI.GetValue(["Config", "FutureSense", "FutureSense", "[Walking] Switch Yaw - C"])


                if (low_deleta) {
                    Walk_AA()
                } else {
                    clean_lowdeleta()
                    if (jitter) {
                        Jitter(jitter_value)
                    } else if (!jitter) {
                        UI.SetValue(["Rage", "Anti Aim", "Directions", "Jitter offset"], 0);
                        clean_jitter()
                    }

                    if (yaw_switch) {
                        Yaw_switch(yaw_switch_delay, yaw_switch_a, yaw_switch_b, yaw_switch_c)
                    } else if (!yaw_switch) {
                        clean_yawjitter()
                        UI.SetValue(["Rage", "Anti Aim", "Directions", "Yaw offset"], 0);
                    }

                }
                if (offset_break) {
                    Offset_break()
                } else if (sway) {
                    clean_offset_break()
                    Sway(swing_astrict, sway_amount, sway_range, sway_frequency)

                } else if (!sway) {
                    clean_sway()
                }
                if (fake_jitter) {
                    Fake_jitter(fake_jitter_speed, fake_jitter_range, fake_jitter_step)
                } else {
                    clean_fakejitter()
                }
            }
            break;

            //jumping
        case "Jumping":
            if (UI.GetValue(["Config", "FutureSense", "FutureSense", "[Jumping] Enable condition"])) {
                low_deleta = UI.GetValue(["Config", "FutureSense", "FutureSense", "[Jumping] Enable Low deleta"])
                jitter = UI.GetValue(["Config", "FutureSense", "FutureSense", "[Jumping] Advanced Jitter"])
                jitter_value = UI.GetValue(["Config", "FutureSense", "FutureSense", "[Jumping] Jitter limit"])
                offset_break = UI.GetValue(["Config", "FutureSense", "FutureSense", "[Jumping] Offset Break"])

                sway = UI.GetValue(["Config", "FutureSense", "FutureSense", "[Jumping] AA-Swing"])
                swing_astrict = UI.GetValue(["Config", "FutureSense", "FutureSense", "[Jumping] Swing astrict"])
                sway_amount = UI.GetValue(["Config", "FutureSense", "FutureSense", "[Jumping] Sway Amount"])
                sway_range = UI.GetValue(["Config", "FutureSense", "FutureSense", "[Jumping] Sway Range"])
                sway_frequency = UI.GetValue(["Config", "FutureSense", "FutureSense", "[Jumping] Sway frequency"])

                fake_jitter = UI.GetValue(["Config", "FutureSense", "FutureSense", "[Jumping] False jitter"])
                fake_jitter_speed = UI.GetValue(["Config", "FutureSense", "FutureSense", "[Jumping] False jitter Speed"])
                fake_jitter_range = UI.GetValue(["Config", "FutureSense", "FutureSense", "[Jumping] False jitter Range"])
                fake_jitter_step = UI.GetValue(["Config", "FutureSense", "FutureSense", "[Jumping] False jitter Step"])

                yaw_switch = UI.GetValue(["Config", "FutureSense", "FutureSense", "[Jumping] AntiAim-Switch"])
                yaw_switch_delay = UI.GetValue(["Config", "FutureSense", "FutureSense", "[Jumping] Switch Delay"])
                yaw_switch_a = UI.GetValue(["Config", "FutureSense", "FutureSense", "[Jumping] Switch Yaw - A"])
                yaw_switch_b = UI.GetValue(["Config", "FutureSense", "FutureSense", "[Jumping] Switch Yaw - B"])
                yaw_switch_c = UI.GetValue(["Config", "FutureSense", "FutureSense", "[Jumping] Switch Yaw - C"])

                if (low_deleta) {
                    Walk_AA()
                } else {
                    clean_lowdeleta()
                    if (jitter) {
                        Jitter(jitter_value)
                    } else if (!jitter) {
                        UI.SetValue(["Rage", "Anti Aim", "Directions", "Jitter offset"], 0);
                        clean_jitter()
                    }

                    if (yaw_switch) {
                        Yaw_switch(yaw_switch_delay, yaw_switch_a, yaw_switch_b, yaw_switch_c)
                    } else if (!yaw_switch) {
                        clean_yawjitter()
                        UI.SetValue(["Rage", "Anti Aim", "Directions", "Yaw offset"], 0);
                    }

                }
                if (offset_break) {
                    Offset_break()
                } else if (sway) {
                    clean_offset_break()
                    Sway(swing_astrict, sway_amount, sway_range, sway_frequency)

                } else if (!sway) {
                    clean_sway()
                }
                if (fake_jitter) {
                    Fake_jitter(fake_jitter_speed, fake_jitter_range, fake_jitter_step)
                } else {
                    clean_fakejitter()
                }
            }
            break;

            //Global
        default:
            if (UI.GetValue(["Config", "FutureSense", "FutureSense", "[Global] Enable condition"])) {
                low_deleta = UI.GetValue(["Config", "FutureSense", "FutureSense", "[Global] Enable Low deleta"])
                jitter = UI.GetValue(["Config", "FutureSense", "FutureSense", "[Global] Advanced Jitter"])
                jitter_value = UI.GetValue(["Config", "FutureSense", "FutureSense", "[Global] Jitter limit"])
                offset_break = UI.GetValue(["Config", "FutureSense", "FutureSense", "[Global] Offset Break"])

                sway = UI.GetValue(["Config", "FutureSense", "FutureSense", "[Global] AA-Swing"])
                swing_astrict = UI.GetValue(["Config", "FutureSense", "FutureSense", "[Global] Swing astrict"])
                sway_amount = UI.GetValue(["Config", "FutureSense", "FutureSense", "[Global] Sway Amount"])
                sway_range = UI.GetValue(["Config", "FutureSense", "FutureSense", "[Global] Sway Range"])
                sway_frequency = UI.GetValue(["Config", "FutureSense", "FutureSense", "[Global] Sway frequency"])

                fake_jitter = UI.GetValue(["Config", "FutureSense", "FutureSense", "[Global] False jitter"])
                fake_jitter_speed = UI.GetValue(["Config", "FutureSense", "FutureSense", "[Global] False jitter Speed"])
                fake_jitter_range = UI.GetValue(["Config", "FutureSense", "FutureSense", "[Global] False jitter Range"])
                fake_jitter_step = UI.GetValue(["Config", "FutureSense", "FutureSense", "[Global] False jitter Step"])

                yaw_switch = UI.GetValue(["Config", "FutureSense", "FutureSense", "[Global] AntiAim-Switch"])
                yaw_switch_delay = UI.GetValue(["Config", "FutureSense", "FutureSense", "[Global] Switch Delay"])
                yaw_switch_a = UI.GetValue(["Config", "FutureSense", "FutureSense", "[Global] Switch Yaw - A"])
                yaw_switch_b = UI.GetValue(["Config", "FutureSense", "FutureSense", "[Global] Switch Yaw - B"])
                yaw_switch_c = UI.GetValue(["Config", "FutureSense", "FutureSense", "[Global] Switch Yaw - C"])

                if (low_deleta) {
                    Walk_AA()
                } else {
                    clean_lowdeleta()
                    if (jitter) {
                        Jitter(jitter_value)
                    } else if (!jitter) {
                        UI.SetValue(["Rage", "Anti Aim", "Directions", "Jitter offset"], 0);
                        clean_jitter()
                    }

                    if (yaw_switch) {
                        Yaw_switch(yaw_switch_delay, yaw_switch_a, yaw_switch_b, yaw_switch_c)
                    } else if (!yaw_switch) {
                        clean_yawjitter()
                        UI.SetValue(["Rage", "Anti Aim", "Directions", "Yaw offset"], 0);
                    }

                }
                if (offset_break) {
                    Offset_break()
                } else if (sway) {
                    clean_offset_break()
                    Sway(swing_astrict, sway_amount, sway_range, sway_frequency)

                } else if (!sway) {
                    clean_sway()
                }
                if (fake_jitter) {
                    Fake_jitter(fake_jitter_speed, fake_jitter_range, fake_jitter_step)
                } else {
                    clean_fakejitter()
                }
            }
            break;
    }

}

function Jitter(value) {
    const min = Math.ceil((value * -1));
    const max = Math.floor(value);
    const subVal = (Math.floor(Math.random(subVal) * (max - min)) + min);
    UI.SetValue(["Rage", "Anti Aim", "Directions", "Jitter offset"], subVal);

}

function Offset_break() {
    const m2 = m2 + m1;
    const m1 = Math.floor(Math.random() * 100) - 50;
    const offsetVal = (m1 * -1);
    AntiAim.SetFakeOffset(m1);
    AntiAim.SetRealOffset(offsetVal);
}

function Sway(side, amount_a, range_a, speed_a) {
    const fake = Math.floor(Math.random() * (25 - 2) + 2);
    var LimitYonsn = amount_a
    var slideRange = range_a
    var slideRate = speed_a
    var limit = side
    const fake = Math.floor(Math.random() * (25 - 2) + 2);
    if (!limit) {
        if (slide) {
            if (slideYonsn > (slideRange / 2)) {
                slide = false;
            } else {
                slideYonsn += slideRate;
            }
        } else {
            if (slideYonsn < -(slideRange / 2)) {
                slide = true;
            } else {
                slideYonsn -= slideRate;
            }
        }
        slideRange += slideYonsn;
    } else if (limit) {
        if (slide) {
            if (slideYonsn > slideRange / 2) {
                slide = false;
            } else {
                slideYonsn += slideRate;
            }
        } else {
            if (slideYonsn < LimitYonsn / 1.8) {
                slide = true;
            } else {
                slideYonsn -= slideRate;
            }
        }
    }

    if (!UI.GetValue(["Rage", "Anti Aim", "General", "Key assignment", 'AA Direction inverter'])) {
        //                AntiAim.SetFakeOffset(0);
        AntiAim.SetRealOffset(slideYonsn);
        AntiAim.SetLBYOffset(-slideYonsn + fake * 0.2);
    } else if (UI.GetValue(["Rage", "Anti Aim", "General", "Key assignment", 'AA Direction inverter'])) {
        //               AntiAim.SetFakeOffset(0);
        AntiAim.SetRealOffset(-slideYonsn);
        AntiAim.SetLBYOffset(slideYonsn + fake * 0.2);
    }
}

function Fake_jitter(speed_a, range_a, step_a) {
    const FJ_Step = step_a
    const FJ_Range = range_a
    const FJ_Speed = speed_a
    const FJ_Extend = ((1e-9) / (FJ_Speed * 0x4ee0d1d72fd4780000000000000));
    const FJ_Retract = 1e-22 / (FJ_Speed * 9.999E30);
    //FJ_Speed * 0x7e3482f1e620c0000000000000
    if (a < FJ_Range && !down) {
        !timer && (lasttime = Globals.Curtime(), timer = !![]);
        if (Globals.Curtime() >= (lasttime + FJ_Extend)) {
            a += FJ_Step + 5;
            if (!areExploits()) {
                AntiAim.SetFakeOffset(0);
                if (!UI.GetValue(["Rage", "Anti Aim", "General", "Key assignment", 'AA Direction inverter'])) AntiAim.SetLBYOffset(a);
                else UI.GetValue(["Rage", "Anti Aim", "General", "Key assignment", 'AA Direction inverter']) && AntiAim.SetLBYOffset(-a);
            } else {
                AntiAim.SetFakeOffset(0);
                if (!UI.GetValue(["Rage", "Anti Aim", "General", "Key assignment", 'AA Direction inverter'])) AntiAim.SetLBYOffset(a);
                else UI.GetValue(["Rage", "Anti Aim", "General", "Key assignment", 'AA Direction inverter']) && AntiAim.SetLBYOffset(-a);
            }
            timer = ![];
        }
    } else {
        if (a >= FJ_Range || down) {
            down = !![];
            a <= 0 && (down = ![]);
            !timer && (lasttime = Globals.Curtime(), timer = ![]);
            if (Globals.Curtime() >= lasttime + FJ_Retract) {
                a -= FJ_Step + 5;
                if (!areExploits()) {
                    AntiAim.SetFakeOffset(0);
                    if (!UI.GetValue(["Rage", "Anti Aim", "General", "Key assignment", 'AA Direction inverter'])) AntiAim.SetLBYOffset(-(a + 80));
                    else UI.GetValue(["Rage", "Anti Aim", "General", "Key assignment", 'AA Direction inverter']) && AntiAim.SetLBYOffset((a + 80));
                } else {
                    AntiAim.SetFakeOffset(0);
                    if (!UI.GetValue(["Rage", "Anti Aim", "General", "Key assignment", 'AA Direction inverter'])) AntiAim.SetLBYOffset(-(a + 80));
                    else UI.GetValue(["Rage", "Anti Aim", "General", "Key assignment", 'AA Direction inverter']) && AntiAim.SetLBYOffset((a + 80));
                }
                timer = ![];
            }
        }
    }
}

function Yaw_switch(speed, a, b, c) {
    sw_delay = 0.001 * speed;
    if (!sw_timer) {
        sw_lasttime = Globals.Curtime();
        sw_timer = true;
    }
    if (Globals.Curtime() >= sw_lasttime + sw_delay) {
        if (sw_cur == 1) {
            sw_val = b;
            sw_cur += 1;
            sw_timer = false;
        } else if (sw_cur == 2) {
            sw_val = c;
            sw_cur += 1;
            sw_timer = false;
        } else if (sw_cur == 3) {
            sw_val = a;
            sw_cur = 1;
            sw_timer = false;
        }
        if (!UI.GetValue(["Rage", "Anti Aim", "General", "Key assignment", 'AA Direction inverter'])) {
            UI.SetValue(["Rage", "Anti Aim", "Directions", "Yaw offset"], sw_val);
        } else if (UI.GetValue(["Rage", "Anti Aim", "General", "Key assignment", 'AA Direction inverter'])) {
            UI.SetValue(["Rage", "Anti Aim", "Directions", "Yaw offset"], -sw_val);
        }
    }
}

function clean_lowdeleta() {
    low_deleta = false
}

function clean_jitter() {
    jitter = false
    jitter_value = 0
}

function clean_offset_break() {
    offset_break = false
}

function clean_sway() {
    sway = false
    swing_astrict = false
    sway_amount = 0
    sway_range = 0
    sway_frequency = 0
}

function clean_fakejitter() {
    fake_jitter = false
    fake_jitter_speed = 0
    fake_jitter_range = 0
    fake_jitter_step = 0
}

function clean_yawjitter() {
    yaw_switch = false
    yaw_switch_delay = 0
    yaw_switch_a = 0
    yaw_switch_b = 0
    yaw_switch_c = 0
}



var speed = false

const jitter = {
    RandomYawJitter : UI.GetValue(["Config", "FutureSense", "FutureSense", "Random Jitter"]),
    Range : UI.GetValue(["Config", "FutureSense", "FutureSense", "Jitter value"]),
    bg : this.Range,
    sg : (this.Range * -1),
    min : Math.ceil(this.sg),
    max : Math.floor(this.bg),
    subVal : (Math.floor(Math.random(this.subVal) * (this.max - this.min)) + this.min),
    rem : this.subVal / 2
}

function Options() {
    if (!Entity.IsAlive(Entity.GetLocalPlayer())) return;
    if (UI.GetValue(["Config", "FutureSense", "FutureSense", "Yaw & jitter"]) && !Input.IsKeyPressed(0x45)) {
        jitter.RandomYawJitter = UI.GetValue(["Config", "FutureSense", "FutureSense", "Random Jitter"]);
        jitter.Range = UI.GetValue(["Config", "FutureSense", "FutureSense", "Jitter value"]);
        jitter.bg = jitter.Range;
        jitter.sg = (jitter.Range * -1);
        jitter.min = Math.ceil(jitter.sg);
        jitter.max = Math.floor(jitter.bg);
        jitter.subVal = (Math.floor(Math.random(jitter.subVal) * (jitter.max - jitter.min)) + jitter.min);
        jitter.rem = jitter.subVal / 2;
        //JITTER 开始          
        if (!jitter.RandomYawJitter) {
            UI.SetValue(["Rage", "Anti Aim", "Directions", "Jitter offset"], jitter.Range);
        }
        if (jitter.RandomYawJitter) {
            UI.SetValue(["Rage", "Anti Aim", "Directions", "Yaw offset"],jitter.rem);
            UI.SetValue(["Rage", "Anti Aim", "Directions", "Jitter offset"], jitter.subVal);
        }

    }

    if (UI.GetValue(["Config", "FutureSense", "FutureSense", "Fakelag & Anti-Brute"]) == 1) {
        const max = UI.GetValue(["Config", "FutureSense", "FutureSense", "Fakelag Max"]);
        const min = UI.GetValue(["Config", "FutureSense", "FutureSense", "Fakelag Min"]);
        const trigger_max = UI.GetValue(["Config", "FutureSense", "FutureSense", "Trigger fakelag Max"]);
        const trigger_min = UI.GetValue(["Config", "FutureSense", "FutureSense", "Trigger fakelag Min"]);
        const FakeLagSpeed = UI.GetValue(["Config", "FutureSense", "FutureSense", "Fakelag Delay"])
        const trigger_fakeLagSpeed = UI.GetValue(["Config", "FutureSense", "FutureSense", "Trigger fakelag Delay"])
        const Jitter_fakeLagSpeed = UI.GetValue(["Config", "FutureSense", "FutureSense", "Fakelag jitter Delay"])
        const FinalLag = Math.floor(Math.random() * (max + 1 - min) + min);
        const Trigger_FinalLag = Math.floor(Math.random() * (trigger_max + 1 - trigger_min) + trigger_min);
        const Jittter_max = UI.GetValue(["Config", "FutureSense", "FutureSense", "Fakelag jitter Max"]);
        const Jittter_min = UI.GetValue(["Config", "FutureSense", "FutureSense", "Fakelag jitter Min"]);
        const Jitter_FinalLag = Math.floor(Math.random() * (Jittter_max + 1 - Jittter_min) + Jittter_min);
        if (!While_shot) {
            if (fakelag = false) {
                if (Loop_1 > FakeLagSpeed) {
                    UI.SetValue(["Rage", "Fake Lag", "Limit"], FinalLag);
                    Loop_1 = 0
                }
                Loop_1 = Loop_1 + 1;
                Fakelag = true;
            }

            if (fakelag = true) {
                if (Loop_1 > FakeLagSpeed) {
                    UI.SetValue(["Rage", "Fake Lag", "Limit"], FinalLag);
                    Loop_1 = 0
                }
                Loop_1 = Loop_1 + 1;
                Fakelag = false;
            }
        }

        if (Trigger_fakelag = false) {
            if (Loop_2 > trigger_fakeLagSpeed) {
                UI.SetValue(["Rage", "Fake Lag", "Trigger limit"], Trigger_FinalLag);
                Loop_2 = 0
            }
            Loop_2 = Loop_2 + 1;
            Trigger_fakelag = true;
        }

        if (Trigger_fakelag = true) {
            if (Loop_2 > trigger_fakeLagSpeed) {
                UI.SetValue(["Rage", "Fake Lag", "Trigger limit"], Trigger_FinalLag);
                Loop_2 = 0
            }
            Loop_2 = Loop_2 + 1;
            Trigger_fakelag = false;
        }

        if (Fakelag_jitter = false) {
            if (Loop_3 > Jitter_fakeLagSpeed) {
                UI.SetValue(["Rage", "Fake Lag", "Jitter"], Jitter_FinalLag);
                Loop_3 = 0
            }
            Loop_3 = Loop_3 + 1;
            Fakelag_jitter = true;
        }

        if (Fakelag_jitter = true) {
            if (Loop_3 > Jitter_fakeLagSpeed) {
                UI.SetValue(["Rage", "Fake Lag", "Jitter"], Jitter_FinalLag);
                Loop_3 = 0
            }
            Loop_3 = Loop_3 + 1;
            Fakelag_jitter = false;
        }
    }
}

function Leg_Animation_Break() {
    if (!UI.GetValue(["Config", "FutureSense", "FutureSense", "Leg movement"])) return
    const trufalse = 12 * Math.abs(Math.sin(64 * Globals.Realtime()))
    if (trufalse < 6) {
        UI.SetValue(["Misc.", "Movement", "Leg movement"], 0)
    } else if (trufalse > 6 && trufalse < 9.7) {
        UI.SetValue(["Misc.", "Movement", "Leg movement"], 1)
    } else {
        UI.SetValue(["Misc.", "Movement", "Leg movement"], 2)
    }
}

function Trigger_Fakelag() {
    if (UI.GetValue(["Config", "FutureSense", "FutureSense", "Fakelag & Anti-Brute"])) {
        const velocity = FS.ExtendFunction.getVelocity(Entity.GetLocalPlayer())
        if (UI.GetValue(["Config", "FutureSense", "FutureSense", "FakeLag On Move"]) == 1) {
            if (velocity > 90 && velocity != 0) {
                UI.SetValue(["Rage", "Fake Lag", "General", "Limit"], UI.GetValue(["Config", "FutureSense", "FutureSense", "Move Fakelag"]));
            }
        }
        if (UI.GetValue(["Config", "FutureSense", "FutureSense", "Fakelag On Auto Stop"]) == 1) {
            if (velocity < 60 && velocity != 0) {
                UI.SetValue(["Rage", "Fake Lag", "General", "Limit"], UI.GetValue(["Config", "FutureSense", "FutureSense", "Auto Stop Fakelag"]));
            }
        }
    }
}


//Anti Bruteforce

const multiplier = 300;
const shotEnd = {};
const resolvers = {}

function dodgeBruteforce(shouldInvert) {
    head = Entity.GetHitboxPosition(Entity.GetLocalPlayer(), 0);
    angles = Local.GetViewAngles();
    vector = FS.ExtendFunction.ANGLE2VEC([88, angles[1] + 60], angles[2]);
    head_left = [head[0] + vector[0] * multiplier, head[1] + vector[1] * multiplier, head[2]];
    vector = FS.ExtendFunction.ANGLE2VEC([88, angles[1] - 60], angles[2]);
    head_right = [head[0] + vector[0] * multiplier, head[1] + vector[1] * multiplier, head[2]];
    if (head != 0) {
        Object.keys(shotStart).forEach(function(key) {
            if (shotStart.hasOwnProperty(key) && shotEnd.hasOwnProperty(key) && shotStart[key] != undefined && shotEnd[key] != undefined && shotStart[key][0] != undefined) {
                start = JSON.parse(JSON.stringify(shotStart[key]));
                end = JSON.parse(JSON.stringify(shotEnd[key]));
                delete shotStart[key];
                delete shotEnd[key];
                if (shouldInvert) {
                    vec = [end[0] - start[0], end[1] - start[1], end[2] - start[2]];
                    equation = [vec[1], -vec[2] - vec[0], vec[1], (vec[0] * start[1]) - (vec[1] * start[0]) - (vec[1] * start[2]) + (vec[2] * start[1])];
                    distance = Math.abs((equation[0] * head[0]) + (equation[1] * head[1]) + (equation[2] * head[2]) + equation[3]) / Math.sqrt(Math.pow(equation[0], 2) + Math.pow(equation[1], 2) + Math.pow(equation[2], 2));
                    distance_left = Math.abs((equation[0] * head_left[0]) + (equation[1] * head_left[1]) + (equation[2] * head_left[2]) + equation[3]) / Math.sqrt(Math.pow(equation[0], 2) + Math.pow(equation[1], 2) + Math.pow(equation[2], 2));
                    distance_right = Math.abs((equation[0] * head_right[0]) + (equation[1] * head_right[1]) + (equation[2] * head_right[2]) + equation[3]) / Math.sqrt(Math.pow(equation[0], 2) + Math.pow(equation[1], 2) + Math.pow(equation[2], 2));
                    difference = Math.abs(distance_left - distance_right);
                    if (distance < 20 && distance > 5) {
                        if (UI.GetValue(["Rage", "Anti Aim", "General", "Key assignment", "AA Direction inverter"]) && (distance_left > distance_right || difference < 1)) {
                            UI.ToggleHotkey(["Rage", "Anti Aim", "General", "Key assignment", "AA Direction inverter"]);
                            resolvers[key] = UI.GetValue(["Rage", "Anti Aim", "General", "Key assignment", "AA Direction inverter"]);
                        } else if (!UI.GetValue(["Rage", "Anti Aim", "General", "Key assignment", "AA Direction inverter"]) && (distance_left < distance_right || difference < 1)) {
                            UI.ToggleHotkey(["Rage", "Anti Aim", "General", "Key assignment", "AA Direction inverter"]);
                            resolvers[key] = UI.GetValue(["Rage", "Anti Aim", "General", "Key assignment", "AA Direction inverter"]);
                        }
                    } else if ((distance >= 20 && distance < 40) || distance <= 5) {
                        UI.ToggleHotkey(["Rage", "Anti Aim", "General", "Key assignment", "AA Direction inverter"]);
                        resolvers[key] = UI.GetValue(["Rage", "Anti Aim", "General", "Key assignment", "AA Direction inverter"]);
                    }
                }
            }
        });
    }
}

//Anti Bruteforce

//on shot mode

function Shot_AA() {
    if (Input.IsKeyPressed(0x45)) return;
    UI.SetValue(["Rage", "Anti Aim", "Directions", "Yaw offset"], 0);
    UI.SetValue(["Rage", "Anti Aim", "Directions", "Jitter offset"], 0);
    AntiAim.SetLBYOffset(0);
    AntiAim.SetFakeOffset(-1.8);
    AntiAim.SetRealOffset(-29.4);
}

const shot_fl = {
    shot_FL : UI.GetValue(["Config", "FutureSense", "FutureSense", "On shot fakelag"]),
    shot_time : 6 * Math.abs(Math.sin(64 * Globals.Realtime())),
    valve : Entity.GetProp(Entity.GetGameRulesProxy(), "CCSGameRulesProxy", "m_bIsValveDS")
}

function ShotFL() {
    if (!UI.GetValue(["Config", "FutureSense", "FutureSense", "Fakelag & Anti-Brute"]) || UI.GetValue(["Rage", "Anti Aim", "General", "Key assignment", "Fake duck"])) return;
    shot_fl.shot_FL = UI.GetValue(["Config", "FutureSense", "FutureSense", "On shot fakelag"])
    shot_fl.shot_time = 6 * Math.abs(Math.sin(64 * Globals.Realtime()))
    shot_fl.valve = Entity.GetProp(Entity.GetGameRulesProxy(), "CCSGameRulesProxy", "m_bIsValveDS")
    if (Globals.ChokedCommands() > 8 && !areExploits() && shot_fl.valve != 1) {
        UI.SetValue(["Visuals", "Extra", "Extra", "Hold firing animation"], 1)
    } else if (Globals.ChokedCommands() < 8 && !areExploits() && shot_fl.valve != 1) {
        UI.SetValue(["Visuals", "Extra", "Extra", "Hold firing animation"], 0)
    } else if (Globals.ChokedCommands() > 3 && !areExploits() && shot_fl.valve == 1) {
        UI.SetValue(["Visuals", "Extra", "Extra", "Hold firing animation"], 1)
    } else if (Globals.ChokedCommands() < 5 && !areExploits() && shot_fl.valve == 1) {
        UI.SetValue(["Visuals", "Extra", "Extra", "Hold firing animation"], 0)
    } else if (areExploits() && Exploit.GetCharge() == 1) {
        UI.SetValue(["Visuals", "Extra", "Extra", "Hold firing animation"], 1)
    } else if (areExploits() && Exploit.GetCharge() != 1) {
        UI.SetValue(["Visuals", "Extra", "Extra", "Hold firing animation"], 0)
    } else {
        UI.SetValue(["Visuals", "Extra", "Extra", "Hold firing animation"], 0)
    }

    if (UI.GetValue(["Config", "FutureSense", "FutureSense", "Better coverage lag"])) {
        if (shot_fl.shot_time < 1.5) {
            UserCMD.Send();
            if (!areExploits()) {
                UI.SetValue(["Rage", "Exploits", "General", "Options"], setDropdownValue(UI.GetValue(["Rage", "Exploits", "General", "Options"]), 5, true));
            }
        } else if (shot_fl.shot_time > 1.4) {
            UserCMD.Choke();
            if (!areExploits()) {
                UI.SetValue(["Rage", "Exploits", "General", "Options"], setDropdownValue(UI.GetValue(["Rage", "Exploits", "General", "Options"]), 5, false));
            }
        }
    }
    if (UI.GetValue(["Config", "FutureSense", "FutureSense", "On shot mode"]) && While_shot == true && UI.GetValue(["Rage", "Anti Aim", "General", "Key assignment", "Fake duck"]) == 0) {
        if (!areExploits() && shot_fl.shot_FL > 6) {
            UI.SetValue(["Rage", "Fake Lag", "General", "Limit"], shot_fl.shot_FL);
            UserCMD.Choke();
            UI.SetValue(["Rage", "Exploits", "General", "Options"], setDropdownValue(UI.GetValue(["Rage", "Exploits", "General", "Options"]), 5, true));
        }

        if (!areExploits() && shot_fl.shot_FL < 7) {
            UI.SetValue(["Rage", "Fake Lag", "General", "Limit"], shot_fl.shot_FL);
            AntiAim.SetOverride(0);
            UserCMD.Send();
            UI.SetValue(["Rage", "Exploits", "General", "Options"], setDropdownValue(UI.GetValue(["Rage", "Exploits", "General", "Options"]), 5, false));
        }

        if (areExploits()) {
            UI.SetValue(["Rage", "Fake Lag", "General", "Limit"], UI.GetValue(["Config", "FutureSense", "FutureSense", "On shot fakelag"]));
            AntiAim.SetOverride(0);
            UserCMD.Send();

        }
    }

    if (UI.GetValue(["Config", "FutureSense", "FutureSense", "Dynamic desync on shot"]) && UI.GetValue(["Config", "FutureSense", "FutureSense", "On shot mode"])) {
        trufalse_1 = 67 * Math.abs(Math.sin(64 * Globals.Realtime())), trufalse_1 > 15 && UI.SetValue(["Rage", "Anti Aim", "SHEET_MGR", "On-shot desync"], 0), trufalse_1 < 10 && UI.SetValue(["Rage", "Anti Aim", "SHEET_MGR", "On-shot desync"], 1)
    }
    if (While_shot && UI.GetValue(["Config", "FutureSense", "FutureSense", "On shot mode"]) && UI.GetValue(["Config", "FutureSense", "FutureSense", "AA mode"]) != 0) {
        Shot_AA();
    }
}

//on shot mode

//custom AA

const filp_aa = {
    trufalse : 0,
    RealYaw : 0,
    FakeYaw : 0 
}

function filp_AA() {
    filp_aa.trufalse = 10 * Math.abs(Math.sin(64 * Globals.Realtime()))
    if (areExploits()) {
        if (filp_aa.trufalse < 6) {
            //UI.SetValue(["Rage", "Anti Aim", "Directions", "Yaw offset"], 1);
            UI.SetValue(["Rage", "Anti Aim", "Directions", "Jitter offset"], -2);
            filp_aa.RealYaw = 24
            filp_aa.FakeYaw = 4
            AntiAim.SetLBYOffset(filp_aa.FakeYaw);
            AntiAim.SetFakeOffset(0);
            AntiAim.SetRealOffset(filp_aa.RealYaw);
        } else if (filp_aa.trufalse > 4) {
            //UI.SetValue(["Rage", "Anti Aim", "Directions", "Yaw offset"], -1);
            UI.SetValue(["Rage", "Anti Aim", "Directions", "Jitter offset"], 2);
            filp_aa.RealYaw = -24
            filp_aa.FakeYaw = -4
            AntiAim.SetLBYOffset(filp_aa.FakeYaw);
            AntiAim.SetFakeOffset(0);
            AntiAim.SetRealOffset(filp_aa.RealYaw);
        } else {
            //UI.SetValue(["Rage", "Anti Aim", "Directions", "Yaw offset"], 0);
            UI.SetValue(["Rage", "Anti Aim", "Directions", "Jitter offset"], -4);
            Sway(true, 60, 161, 32)
        }
    } else {
        if (filp_aa.trufalse < 6) {
            //UI.SetValue(["Rage", "Anti Aim", "Directions", "Yaw offset"], 1);
            UI.SetValue(["Rage", "Anti Aim", "Directions", "Jitter offset"], -2);
            filp_aa.RealYaw = 30
            filp_aa.FakeYaw = 4
            AntiAim.SetLBYOffset(filp_aa.FakeYaw);
            AntiAim.SetFakeOffset(0);
            AntiAim.SetRealOffset(filp_aa.RealYaw);
        } else if (filp_aa.trufalse > 4) {
            //UI.SetValue(["Rage", "Anti Aim", "Directions", "Yaw offset"], -1);
            UI.SetValue(["Rage", "Anti Aim", "Directions", "Jitter offset"], 2);
            filp_aa.RealYaw = -36
            filp_aa.FakeYaw = -4
            AntiAim.SetLBYOffset(filp_aa.FakeYaw);
            AntiAim.SetFakeOffset(0);
            AntiAim.SetRealOffset(filp_aa.RealYaw);
        } else {
            //UI.SetValue(["Rage", "Anti Aim", "Directions", "Yaw offset"], 0);
            UI.SetValue(["Rage", "Anti Aim", "Directions", "Jitter offset"], -4);
            Sway(true, 60, 161, 32)

        }
    }
}

var Target_data = {};

const RadianToDegree = function(rad) {
  return rad * 180 / Math.PI;
}

function CalculateAngles(from, to) {

  const sub = [to[0] - from[0], to[1] - from[1], to[2] - from[2]];

  const hyp = Math.sqrt(sub[0] ** 2 + sub[1] ** 2);

  const yaw = RadianToDegree(Math.atan2(sub[1], sub[0]));
  const pitch = RadianToDegree(-Math.atan2(sub[2], hyp));

  return [pitch, yaw, 0];
}

function CalculateFOV(from, to, angles) {
  const calculated = CalculateAngles(from, to);

  const yaw_delta = angles[1] - calculated[1];
  const pitch_delta = angles[0] - calculated[0];

  if (yaw_delta > 180)
      yaw_delta -= 360;

  if (yaw_delta < -180)
      yaw_delta += 360;

  return Math.sqrt(yaw_delta * 2 + pitch_delta * 2);
}


function GetCrosshairTarget() {

  const me = Entity.GetLocalPlayer();
  const enemies = Entity.GetEnemies();

  const eye_pos = Entity.GetEyePosition(me);
  const eye_angles = Local.GetViewAngles();

  var Target_data = {target: null, fov: 180};

  for (var i = 0; i < enemies.length; i++) {

      const ent = enemies[i];

      if (!Entity.IsAlive(ent) || Entity.IsDormant(ent)) {
          continue;
      }

      const head_pos = Entity.GetHitboxPosition(ent, 0);

      const fov = CalculateFOV(eye_pos, head_pos, eye_angles);
      
      if (Target_data.fov > fov) {
        Target_data.fov = fov;
        Target_data.target = ent;
      }
  }

  return Target_data.target;
}

const ideal_aa = {
    Do_filp : false,
    Radom_angle_1 : 0
}
function Custom_AA() {
    if (Input.IsKeyPressed(0x45)) return;
        AntiAim.SetOverride(1);
    const target = GetCrosshairTarget()
    const flags = Get_Prop('CBasePlayer', 'm_fFlags')
    if (target != undefined) {
        if (Entity.IsDormant(target) == false) {
            ideal_aa.Do_filp = false
        } else if (Entity.IsDormant(target) == true) {
            ideal_aa.Do_filp = true
        } else if(maxDamage(target) < (UI.GetValue(["Rage", "Target", tab, "Minimum damage"]) - 30)){
            ideal_aa.Do_filp = true
        }else{
            ideal_aa.Do_filp = true
        }

        if(While_shot) {
            ideal_aa.Do_filp = true
        }
    } else {
        ideal_aa.Do_filp = true
    }
    ideal_aa.Radom_angle_1 = Math.floor(Math.random() * (0 + 1 - 4) + 4);
    if (!(flags & 1 << 0) && !(flags & 1 << 18)) {
        UI.SetValue(["Rage", "Anti Aim", "Directions", "Jitter offset"], 1);
        AntiAim.SetFakeOffset(0);
        AntiAim.SetRealOffset(-35);
        AntiAim.SetLBYOffset(-5);

    } else {
        if (!UI.GetValue(["Rage", "Anti Aim", "General", "Key assignment", "Slow walk"])) {
            if (ideal_aa.Do_filp == true) {
                filp_AA()
            } else if (ideal_aa.Do_filp == false) {
                if (UI.GetValue(["Rage", "Anti Aim", "General", "Key assignment", "AA Direction inverter"])) {
                    UI.SetValue(["Rage", "Anti Aim", "Directions", "Jitter offset"], ideal_aa.Radom_angle_1);
                    //AntiAim.SetFakeOffset(0);
                    //AntiAim.SetRealOffset(Radom_angle);
                    //AntiAim.SetLBYOffset(-60);
                    Sway(true, 60, 161, 32)
                } else {
                    //AntiAim.SetFakeOffset(0);
                    //AntiAim.SetRealOffset(-Radom_angle);
                    //AntiAim.SetLBYOffset(60);
                    Sway(true, 60, 161, 32)
                    //UI.SetValue(["Rage", "Anti Aim", "Directions", "Jitter offset"], -Radom_angle_1);
                }
            }
        }

        if (UI.GetValue(["Rage", "Anti Aim", "General", "Key assignment", "Slow walk"])) {
            Walk_AA();
        }
    }

}

//custom AA

//freestanding

const freestand = {
    angles : [],
    right : 0,
    left : 0,
    front : 0
}

function Freestanding_body() {
    if (!UI.GetValue(["Config", "FutureSense", "FutureSense", "Enable freestanding"]) || UI.GetValue(["Rage", "Anti Aim", "General", "Key assignment", "Fake duck"]) || Input.IsKeyPressed(0x45)) return;
    freestand.angles = Local.GetViewAngles();
    freestand.right = FS.ExtendFunction.getWallDistance(Entity.GetLocalPlayer(), [0, freestand.angles[1] + 60]);
    freestand.left = FS.ExtendFunction.getWallDistance(Entity.GetLocalPlayer(), [0, freestand.angles[1] - 60]);
    freestand.front = FS.ExtendFunction.getWallDistance(Entity.GetLocalPlayer(), [0, freestand.angles[1]]);
    if (UI.GetValue(["Misc.", "Keys", "General", "Key assignment", "Auto peek"])) {
        UI.SetValue(["Rage", "Anti Aim", "Directions", "Auto direction"], 1);
    } else {
        UI.SetValue(["Rage", "Anti Aim", "Directions", "Auto direction"], 0);
    }
    if (!UI.GetValue(["Rage", "Anti Aim", "General", "Key assignment", "Slow walk"]) && UI.GetValue(["Config", "FutureSense", "FutureSense", "Freestanding Mode"]) != 0) {
        if (freestand.front < 25) {
            if (UI.GetValue(["Config", "FutureSense", "FutureSense", "Freestanding Mode"]) == 2) {
                setInvert(freestand.right < freestand.left);
            } else if (UI.GetValue(["Config", "FutureSense", "FutureSense", "Freestanding Mode"]) == 1) {
                setInvert(freestand.left < freestand.right);
            }
        }
    }
}

//freestanding


//Advanced sway AA

const walk_aa = {
    Radom_angle : 0,
    Radom_angle_1 : 0,
    walkcount : 0
}
var jitter_cache = UI.GetValue(["Rage", "Anti Aim", "Directions", "Jitter offset"])
var yaw_cache = UI.GetValue(["Rage", "Anti Aim", "Directions", "Yaw offset"])

function Walk_AA() {
    if (Input.IsKeyPressed(0x45)) return;
    walk_aa.Radom_angle = Math.floor(Math.random() * (0 + 1 - 5) + 5);
    walk_aa.Radom_angle_1 = Math.floor(Math.random() * (27.5 + 1 - 29.0) + 29.0);
    if (UI.GetValue(["Rage", "Anti Aim", "General", "Key assignment", "Slow walk"])) {
        if (UI.GetValue(["Rage", "Anti Aim", "General", "Key assignment", 'AA Direction inverter'])) {
            walk_aa.walkcount++
            if (walk_aa.walkcount > 75) {
                AntiAim.SetLBYOffset(0);
                AntiAim.SetFakeOffset(-28);
                AntiAim.SetRealOffset(0);
                walk_aa.walkcount = 0;
            } else {
                UI.SetValue(["Rage", "Anti Aim", "Directions", "Yaw offset"], 18);
                UI.SetValue(["Rage", "Anti Aim", "Directions", "Jitter offset"], -walk_aa.Radom_angle);
                AntiAim.SetLBYOffset(0);
                AntiAim.SetFakeOffset(-2.4);
                AntiAim.SetRealOffset(-walk_aa.Radom_angle_1);
            }
        } else {
            UI.SetValue(["Rage", "Anti Aim", "Directions", "Yaw offset"], -18);
            UI.SetValue(["Rage", "Anti Aim", "Directions", "Jitter offset"], walk_aa.Radom_angle);
            AntiAim.SetLBYOffset(0);
            AntiAim.SetFakeOffset(2.4);
            AntiAim.SetRealOffset(28)
            walk_aa.walkcount++
            if (walk_aa.walkcount > 120) {
                UI.ToggleHotkey(["Rage", "Anti Aim", "General", "Key assignment", "AA Direction inverter"]);
                walk_aa.walkcount = 0;
            }
        }
    }
}
var switchC1;
var switchC2;
var switchC3;
var switchDelay;

function Anti_Aim_Loop() {
    if (Input.IsKeyPressed(0x45)) return;
    AntiAim.SetOverride(1);
    const $typeface = UI.GetValue(["Config", "FutureSense", "FutureSense", "Advanced Jitter"]);
    const $off = UI.GetValue(["Config", "FutureSense", "FutureSense", "Offset Break"]);
    const $sway = UI.GetValue(["Config", "FutureSense", "FutureSense", "AA-Swing"]);
    const $switch = UI.GetValue(["Config", "FutureSense", "FutureSense", "AntiAim-Switch"]);
    const $fake = UI.GetValue(["Config", "FutureSense", "FutureSense", "False jitter"]);
    isInverted = UI.GetValue(["Rage", "Anti Aim", "General", "Key assignment", 'AA Direction inverter']);


    if (!$typeface) {
        UI.SetValue(["Rage", "Anti Aim", "Directions", "Jitter offset"], 0);
    }

    if ($typeface) {
        const $Range = UI.GetValue(["Config", "FutureSense", "FutureSense", "Jitter limit"]);
        const bg = $Range;
        const sg = ($Range * -1);
        const min = Math.ceil(sg);
        const max = Math.floor(bg);
        const subVal = (Math.floor(Math.random(subVal) * (max - min)) + min);
        const rem = subVal / 2;
        UI.SetValue(["Rage", "Anti Aim", "Directions", "Yaw offset"], rem);
        UI.SetValue(["Rage", "Anti Aim", "Directions", "Jitter offset"], subVal);
    }
    if ($off) {
        const m2 = m2 + m1;
        const m1 = Math.floor(Math.random() * 100) - 50;
        const offsetVal = (m1 * -1);
        AntiAim.SetFakeOffset(m1);
        AntiAim.SetRealOffset(offsetVal);
    } {
        slideRange = UI.GetValue(["Config", "FutureSense", "FutureSense", "Sway Range"]);
        slideRate = UI.GetValue(["Config", "FutureSense", "FutureSense", "Sway frequency"]);
        limit = UI.GetValue(["Config", "FutureSense", "FutureSense", "Swing astrict"]);
        LimitYonsn = UI.GetValue(["Config", "FutureSense", "FutureSense", "Sway Amount"]);
        const fake = Math.floor(Math.random() * (25 - 2) + 2);
        if (!limit) {
            if (slide) {
                if (slideYonsn > (slideRange / 2)) {
                    slide = false;
                } else {
                    slideYonsn += slideRate;
                }
            } else {
                if (slideYonsn < -(slideRange / 2)) {
                    slide = true;
                } else {
                    slideYonsn -= slideRate;
                }
            }
            slideRange += slideYonsn;
        } else if (limit) {
            if (slide) {
                if (slideYonsn > slideRange / 2) {
                    slide = false;
                } else {
                    slideYonsn += slideRate;
                }
            } else {
                if (slideYonsn < LimitYonsn / 1.8) {
                    slide = true;
                } else {
                    slideYonsn -= slideRate;
                }
            }
        }

        if ($sway && !isInverted) {
            //                AntiAim.SetFakeOffset(0);
            AntiAim.SetRealOffset(slideYonsn);
            AntiAim.SetLBYOffset(-slideYonsn + fake * 0.2);
        } else if ($sway && isInverted) {
            //               AntiAim.SetFakeOffset(0);
            AntiAim.SetRealOffset(-slideYonsn);
            AntiAim.SetLBYOffset(slideYonsn + fake * 0.2);
        }
    }
    if ($fake) {
        FJ_Step = UI.GetValue(["Config", "FutureSense", "FutureSense", "False jitter Step"]) * 2;
        FJ_Range = UI.GetValue(["Config", "FutureSense", "FutureSense", "False jitter Range"]) / 2;
        FJ_Speed = UI.GetValue(["Config", "FutureSense", "FutureSense", "False jitter Speed"]) * 2;
        FJ_Extend = ((1e-9) / (FJ_Speed * 0x4ee0d1d72fd4780000000000000));
        FJ_Retract = 1e-22 / (FJ_Speed * 9.999E30);
        //FJ_Speed * 0x7e3482f1e620c0000000000000
        if (a < FJ_Range && !down) {
            !timer && (lasttime = Globals.Curtime(), timer = !![]);
            if (Globals.Curtime() >= (lasttime + FJ_Extend)) {
                a += FJ_Step;
                if (!areExploits()) {
                    AntiAim.SetFakeOffset(0);
                    if (!isInverted) AntiAim.SetLBYOffset(a);
                    else isInverted && AntiAim.SetLBYOffset(-a);
                } else {
                    AntiAim.SetFakeOffset(0);
                    if (!isInverted) AntiAim.SetLBYOffset(a);
                    else isInverted && AntiAim.SetLBYOffset(-a);
                }
                timer = ![];
            }
        } else {
            if (a >= FJ_Range || down) {
                down = !![];
                a <= 0 && (down = ![]);
                !timer && (lasttime = Globals.Curtime(), timer = ![]);
                if (Globals.Curtime() >= lasttime + FJ_Retract) {
                    a -= FJ_Step;
                    if (!areExploits()) {
                        AntiAim.SetFakeOffset(0);
                        if (!isInverted) AntiAim.SetLBYOffset(a);
                        else isInverted && AntiAim.SetLBYOffset(-a);
                    } else {
                        AntiAim.SetFakeOffset(0);
                        if (!isInverted) AntiAim.SetLBYOffset(a);
                        else isInverted && AntiAim.SetLBYOffset(-a);
                    }
                    timer = ![];
                }
            }
        }
    }


    if ($switch && !While_shot) {
        switchC1 = UI.GetValue(["Config", "FutureSense", "FutureSense", "Switch Yaw - A"]);
        switchC2 = UI.GetValue(["Config", "FutureSense", "FutureSense", "Switch Yaw - B"]);
        switchC3 = UI.GetValue(["Config", "FutureSense", "FutureSense", "Switch Yaw - C"]);
        switchDelay = UI.GetValue(["Config", "FutureSense", "FutureSense", "Switch Delay"]);
        sw_delay = 0.001 * switchDelay;
        if (!sw_timer) {
            sw_lasttime = Globals.Curtime();
            sw_timer = true;
        }
        if (Globals.Curtime() >= sw_lasttime + sw_delay) {
            if (sw_cur == 1) {
                sw_val = switchC2;
                sw_cur += 1;
                sw_timer = false;
            } else if (sw_cur == 2) {
                sw_val = switchC3;
                sw_cur += 1;
                sw_timer = false;
            } else if (sw_cur == 3) {
                sw_val = switchC1;
                sw_cur = 1;
                sw_timer = false;
            }
            if (!isInverted) {
                UI.SetValue(["Rage", "Anti Aim", "Directions", "Yaw offset"], sw_val);
            } else if (isInverted) {
                UI.SetValue(["Rage", "Anti Aim", "Directions", "Yaw offset"], -sw_val);
            }
        }
    }
}



function getScriptVal(name) {
    return UI.GetValue(futureSensePath, name);
}

function areExploits() {
    if (UI.GetValue(["Rage", "Exploits", "Keys", "Double tap"]) || UI.GetValue(["Rage", "Exploits", "Keys", "Hide shots"])) {
        return true;
    } else {
        return false;
    }
}

//Ragebot assist && movement

//Filp weapon

const reset_tick = function() {
    if (flip == true) {
        Global.ExecuteCommand("slot1");
        flip = false
    }
}

//SemiRage assist --> autowall on key 

function IsAvailable(targetPlayer_index) {
    if (Entity.IsValid(targetPlayer_index) == true && Entity.IsAlive(targetPlayer_index) && Entity.IsDormant(targetPlayer_index) == false) {
        return true;
    } else {
        return false;
    }
}

function TraceBoxs(targetPlayer_index) {
    if (IsAvailable(targetPlayer_index)) {
        var bulletTrace = [];
        const localPlayer_index = Entity.GetLocalPlayer();
        const startHeadPos = Entity.GetHitboxPosition(localPlayer_index, 0);
        for (var i = 0; i <= 18; ++i) {
            const endBoxPos = Entity.GetHitboxPosition(targetPlayer_index, i);
            const result = Trace.Bullet(targetPlayer_index, localPlayer_index, endBoxPos, startHeadPos);
            if (result != null) {
                bulletTrace[i] = {
                    damage: result[1],
                    visible: result[2]
                }
            } else {
                bulletTrace[i] = {
                    damage: null,
                    visible: null
                }
            }
        }
        return bulletTrace;
    } else {
        return null;
    }

}

function isVisible(targetPlayer_index) {
    if (IsAvailable(targetPlayer_index)) {
        const Data = TraceBoxs(targetPlayer_index);
        if (Data != null) {
            var Visible = false;
            for (j = 0; j <= 18; ++j) {
                Visible = (Visible == true ? Visible : Data[j].visible);
            }
            return Visible;
        }
    } else {
        return false;
    }
}

function maxDamage( targetPlayer_index ) {
    if (IsAvailable(targetPlayer_index)) {
        const Data = TraceBoxs(targetPlayer_index);
        if ( Data != null ) {
            var Damage = 0;
            for( j = 0; j<=18 ; ++j ) {
                const dmg = Data[j].damage;
                Damage = ( Damage > dmg ? Damage : dmg );
            }
            return Damage;
        }
    }else{
        return -1;
    }
}

var Edit_autowall = 0

function autowall() {
    const target = GetCrosshairTarget()
    const lAWallKey = UI.GetValue(["Config", "SUBTAB_MGR", "Scripts", "SHEET_MGR", "Keys", "JS Keybinds", "Autowall on key"]);
    if (target != undefined) {

        if (isVisible(target) && !lAWallKey) {
            UI.SetValue(["Rage", "Target", tab, "Disable autowall"], 0);
        } else if (!isVisible(target) && !lAWallKey) {
            UI.SetValue(["Rage", "Target", tab, "Disable autowall"], 1);
        } else if (lAWallKey) {
            UI.SetValue(["Rage", "Target", tab, "Disable autowall"], 0);
        } else if (!lAWallKey) {
            UI.SetValue(["Rage", "Target", tab, "Disable autowall"], 1);
        } else {
            UI.SetValue(["Rage", "Target", tab, "Disable autowall"], 0);
        }
    }else if(lAWallKey && target == undefined) {
       UI.SetValue(["Rage", "Target", tab, "Disable autowall"], 0);
    }else if(!lAWallKey && target == undefined) {
       UI.SetValue(["Rage", "Target", tab, "Disable autowall"], 1);
    }

}

//Double assist

var shift = 14
var distance = -1;

function can_shift_shot(ticks_to_shift) {
    const wpn = Entity.GetWeapon(Entity.GetLocalPlayer());
    if (Entity.GetLocalPlayer() == null || wpn == null) return false;
    const tickbase = Entity.GetProp(Entity.GetLocalPlayer(), "CCSPlayer", "m_nTickBase");
    const curtime = Globals.TickInterval() * (tickbase - ticks_to_shift)
    if (curtime < Entity.GetProp(Entity.GetLocalPlayer(), "CCSPlayer", "m_flNextAttack")) return false;
    if (curtime < Entity.GetProp(wpn, "CBaseCombatWeapon", "m_flNextPrimaryAttack")) return false;
    return true;
}

function getDropdownValue(value, index) {
    const mask = 1 << index;
    return value & mask ? true : false;
}

function setDropdownValue(value, index, enable) {
    const mask = 1 << index;
    return enable ? (value | mask) : (value & ~mask);
}

const other_weapons = [
    "41",
    "42",
    "43",
    "44",
    "45",
    "46",
    "47",
    "48",
    "49",
    "57",
    "59",
    "500",
    "503",
    "505",
    "506",
    "507",
    "508",
    "509",
    "512",
    "514",
    "515",
    "516",
    "517",
    "518",
    "519",
    "520",
    "521",
    "522"
];

function is_gun() {
    const weapon = Entity.GetProp(Entity.GetLocalPlayer(), "CBasePlayer", "m_hActiveWeapon");
    if (weapon != "m_hActiveWeapon") {
        const weapon_name = (Entity.GetProp(weapon, "CBaseAttributableItem", "m_iItemDefinitionIndex") & 0xFFFF);
        for (var i = 0; i < other_weapons.length; i++) {
            if (weapon_name == other_weapons[i]) {
                return false;
            }
        }
        return true;
    }
}

function is_single_gun() {
    const weapon = Entity.GetProp(Entity.GetLocalPlayer(), "CBasePlayer", "m_hActiveWeapon");
    if (weapon != "m_hActiveWeapon") {
        const weapon_name = (Entity.GetProp(weapon, "CBaseAttributableItem", "m_iItemDefinitionIndex") & 0xFFFF);

        if (weapon_name == "64" || weapon_name == "9" && weapon_name == "40") {
            return true
        } else {
            return false
        }

    }
}

function DT_recharge() {
    var doubletap_key = UI.GetValue(['Rage', 'Exploits', 'Keys', 'Key assignment', 'Double tap']);
    if (!doubletap_key || UI.GetValue(["Rage", "Anti Aim", "General", "Key assignment", "Fake duck"])) {
        Exploit.EnableRecharge();
        Exploit.OverrideMaxProcessTicks(Convar.GetFloat("sv_maxusrcmdprocessticks"));
        return;
    }

    const value_d = setDropdownValue(UI.GetValue(["Rage", "Exploits", "General", "Options"]), 0, true);
    UI.SetValue(["Rage", "Exploits", "General", "Options"], value_d);



    if (is_gun() == false && UI.GetValue(["Config", "FutureSense", "FutureSense", "Disable DT on other weapon"])) {
        UI.SetValue(["Rage", "Exploits", "General", "Double tap"], 0);
    } else if (is_gun() == true && UI.GetValue(["Config", "FutureSense", "FutureSense", "Disable DT on other weapon"]) && Exploit.GetCharge() != 1) {
        UI.SetValue(["Rage", "Exploits", "General", "Double tap"], 1);
    }

    const target = Ragebot.GetTarget();
    const weapon = Entity.GetProp(Entity.GetLocalPlayer(), "CBasePlayer", "m_hActiveWeapon");
    if (weapon != "m_hActiveWeapon") {
        if ((Entity.GetProp(weapon, "CBaseAttributableItem", "m_iItemDefinitionIndex") & 0xFFFF) == 64 && While_shot) {
            UI.SetValue(["Rage", "Exploits", "General", "Double tap"], 0);
        }
    }

    /*  if (weapon != "m_hActiveWeapon") {
     Cheat.Print((Entity.GetProp(weapon, "CBaseAttributableItem", "m_iItemDefinitionIndex") & 0xFFFF)+"\n")
     }*/

    if (can_shift_shot(17) && Exploit.GetCharge() != 1 && (!Entity.IsAlive(target) && !Entity.IsDormant(target) || target == null) && is_gun()) {
        Exploit.DisableRecharge();
        Exploit.Recharge();
        UI.SetValue(["Rage", "Exploits", "General", "Double tap"], 1);
    }else{
        if (Exploit.GetCharge() != 1) {
            UI.SetValue(["Rage", "Exploits", "General", "Double tap"], 0);
        }

    }

    const LocalPlayerIndex = Entity.GetLocalPlayer();
    const velocity = FS.ExtendFunction.getVelocity(Entity.GetLocalPlayer());

    distance = 0;
    /*
        for (i = 0; i < Enemies.length; i++) {
            if (Entity.IsValid(Enemies[i]) == true && Entity.IsAlive(Enemies[i]) && Entity.IsDormant(Enemies[i]) == false) {
                HitboxPos = Entity.GetHitboxPosition(LocalPlayerIndex, 0);
                BotEyePos = Entity.GetEyePosition(Enemies[i])
                ResultX = Math.abs(HitboxPos[0] - BotEyePos[0]);
                ResultY = Math.abs(HitboxPos[1] - BotEyePos[1]);
                ResultXX = ResultX * ResultX;
                ResultYY = ResultY * ResultY;
                ResultXY = ResultXX + ResultYY;
                ResultC = Math.sqrt(ResultXY);
                if (distance == -1 || ResultC < distance) {
                    distance = ResultC;
                }
            }
        }*/


    const target = GetCrosshairTarget()
    if (velocity < 60) {
        shift = shift + 4;
        tolerance = 0;
    }
    if (target != undefined && !UI.GetValue(["Config", "FutureSense", "FutureSense", "Reduce hitchance"])) {
        const HC_flag = UI.GetValue(["Rage", "Accuracy", tab, "Hitchance"])

        if (FS.ExtendFunction.getVelocity(target) > 160 && velocity < 60) {
            shift = 17;
            tolerance = 0;
        }

        Ragebot.ForceTargetHitchance(target, Get_Target_best_hc(target, HC_flag))
        if (Entity.IsValid(target) == true && Entity.IsAlive(target) && Entity.IsDormant(target) == false) {
            HitboxPos = Entity.GetHitboxPosition(LocalPlayerIndex, 0);
            BotEyePos = Entity.GetEyePosition(target)
            ResultX = Math.abs(HitboxPos[0] - BotEyePos[0]);
            ResultY = Math.abs(HitboxPos[1] - BotEyePos[1]);
            ResultXX = ResultX * ResultX;
            ResultYY = ResultY * ResultY;
            ResultXY = ResultXX + ResultYY;
            ResultC = Math.sqrt(ResultXY);
            if (distance == -1 || ResultC < distance) {
                distance = ResultC;
            }
        }

        tolerance = Math.floor(((distance - 300 / 150) / 1000) - 0.5);
    } else {
        tolerance = 0
    }



    if (tolerance < 0) {
        tolerance = 0;
    };
    if (tolerance > 2) {
        tolerance = 2;
    };
    shift = 17 - tolerance;

    if (shift > 17) {
        shift = 17;
    }
    if (shift < 14) {
        shift = 14;
    }
    Exploit.OverrideShift(shift);
    Exploit.OverrideTolerance(tolerance);
    if (Convar.GetFloat("sv_maxusrcmdprocessticks") < 16) {
        if (!is_single_gun()) {
            Exploit.OverrideMaxProcessTicks(17);
        } else {
            Exploit.OverrideMaxProcessTicks(20);
        }
    } else {
        Exploit.OverrideMaxProcessTicks(Convar.GetFloat("sv_maxusrcmdprocessticks"));
    }
}

function Speed_Dt() {
    const target = Ragebot.GetTarget();
    const weapon = Entity.GetProp(Entity.GetLocalPlayer(), "CBasePlayer", "m_hActiveWeapon");
    if (can_shift_shot(17) && Exploit.GetCharge() != 1 && (!Entity.IsAlive(target) && !Entity.IsDormant(target) || target == null) && is_gun()) {
        Exploit.DisableRecharge();
        Exploit.Recharge();
        UI.SetValue(["Rage", "Exploits", "General", "Double tap"], 1);
    }else{
        if (Exploit.GetCharge() != 1) {
            UI.SetValue(["Rage", "Exploits", "General", "Double tap"], 0);
        }

    }
    /*if(target != undefined) {
        Ragebot.ForceTargetHitchance(target, Get_Target_best_hc(target, HC_flag))
    }*/
    if (is_gun() == false && UI.GetValue(["Config", "FutureSense", "FutureSense", "Disable DT on other weapon"])) {
        UI.SetValue(["Rage", "Exploits", "General", "Double tap"], 0);
    } else if (is_gun() == true && UI.GetValue(["Config", "FutureSense", "FutureSense", "Disable DT on other weapon"]) && Exploit.GetCharge() != 1) {
        UI.SetValue(["Rage", "Exploits", "General", "Double tap"], 1);
    }
    if (weapon != "m_hActiveWeapon") {
        if ((Entity.GetProp(weapon, "CBaseAttributableItem", "m_iItemDefinitionIndex") & 0xFFFF) == 64 && While_shot) {
            UI.SetValue(["Rage", "Exploits", "General", "Double tap"], 0);
        }
    }
    Exploit.OverrideMaxProcessTicks(17);
    Exploit.OverrideShift(14);
    Exploit.OverrideTolerance(0);
}
function Get_Target_best_hc(player, nor_hc) {
   if (Entity.IsValid(player) == true && Entity.IsAlive(player) && Entity.IsDormant(player) == false && Entity.IsAlive(Entity.GetLocalPlayer())) {
            HitboxPos = Entity.GetHitboxPosition(Entity.GetLocalPlayer(), 0);
            BotEyePos = Entity.GetEyePosition(player)
            ResultX = Math.abs(HitboxPos[0] - BotEyePos[0]);
            ResultY = Math.abs(HitboxPos[1] - BotEyePos[1]);
            ResultXX = ResultX * ResultX;
            ResultYY = ResultY * ResultY;
            ResultXY = ResultXX + ResultYY;
            ResultC = Math.sqrt(ResultXY);
            if (distance == -1 || ResultC < distance) {
                distance = ResultC;
            }
        const target_speed = FS.ExtendFunction.getVelocity(player)
        const Local_spread = Entity.GetCCSWeaponInfo(Entity.GetLocalPlayer())["spread_alt"];
        const dis = Math.floor(((distance - 300 / 150) / 1000) - 0.4)

        var hc = Math.floor(nor_hc + (Local_spread / 100) - (target_speed / 100) + (Local_spread / 10000) - dis)
  }else{
   var hc = nor_hc
  }

    if (hc < nor_hc - 10) {
        var hc = nor_hc + 9
    } else if (hc > nor_hc + 10) {
        var hc = nor_hc - 9
    }
    return hc
}
const DTDMG = function() {
    const target = GetCrosshairTarget()
    if (target != undefined) {
        const startingdmg = Entity.GetProp(target, "CCSPlayer", "m_iHealth")
        var dtdmg = startingdmg / 2
        if (dtdmg > 25) {
            var dtdmg = 25
        }
    } else {
        var dtdmg = 18
    }
    if (While_shot) {
        UI.SetValue(["Rage", "Target", "SCAR20", "Minimum damage"], 18)
        UI.SetValue(["Rage", "Target", "G3SG1", "Minimum damage"], 18)
    } else if (!While_shot) {
        UI.SetValue(["Rage", "Target", "SCAR20", "Minimum damage"], dtdmg)
        UI.SetValue(["Rage", "Target", "G3SG1", "Minimum damage"], dtdmg)
    }
}

//--> DMG override

var tab_names = ["General", "USP", "Glock", "Five Seven", "Tec-9", "Deagle", "Revolver", "Dualies", "P250", "CZ-75", "Mac10", "P90", "MP5", "MP7", "MP9", "UMP45", "PP-Bizon", "M4A1-S", "M4A4", "AK47", "AUG", "SG553", "FAMAS", "GALIL", "AWP", "SSG08", "SCAR20", "G3SG1", "M249", "XM1014", "MAG7", "Negev", "Sawed off","Nova"];

function setup_menu() {
    for (var k = 0; k < tab_names.length; k++) {
        UI.AddSliderInt(["Rage", "Target", tab_names[k]], "Damage override", 1, 130);
        UI.AddCheckbox(["Rage", "Accuracy", tab_names[k]], "Reduce hitchance");
    }
}

setup_menu();

function DMG_override() {
    if (!UI.GetValue(["Config", "SUBTAB_MGR", "Scripts", "SHEET_MGR", "Keys", "JS Keybinds", "DMG override"])) return;
    const override = UI.GetValue(["Rage", "Target", tab, "Damage override"]);
    if (override == 1) {
        UI.SetValue(["Rage", "Target", tab, "Damage override"], 1)
    }
    const en = Entity.GetEnemies();
    for (var e = 0; e < en.length; e++) {
        Ragebot.ForceTargetMinimumDamage(en[e], override);
    }
}



//--> Reduce hitchance

function Reduce_hitchance() {

    const HC_flag = UI.GetValue(["Rage", "Accuracy", tab, "Hitchance"])
    const target = GetCrosshairTarget()
    if (target != undefined) {
        if (FS.ExtendFunction.getVelocity(target) > 160) {
            Ragebot.ForceTargetHitchance(target, HC_flag)
        } else {
            Ragebot.ForceTargetHitchance(target, HC_flag - 5)
        }
    }
}

//--> Legit AA on use

var lastTickUsed = false;

function LegitAAOnKey() {
    if (UI.GetValue(["Rage", "Anti Aim", "General", "Key assignment", "Fake duck"])) return;
    if (Input.IsKeyPressed(0x45)) {
        setUnbind();
        setStaticLegitAA();
        if (lastTickUsed) {
            if (getHostage() || getBomb()) {
                Cheat.ExecuteCommand("+use");
            } else {
                Cheat.ExecuteCommand("-use");
            }
        } else {
            Cheat.ExecuteCommand("+use");
            lastTickUsed = true;
        }
    } else {
        Cheat.ExecuteCommand("-use");
        lastTickUsed = false;
        setBind();
        aa_type(0, 1, 0);
        UI.SetValue(["Rage", "Anti Aim", "Directions", "At targets"], 1);
    }


}

const Tar = UI.GetValue(["Rage", "Anti Aim", "Directions", "At targets"]);

function aa_type(A, B, C) {
    if (Tar == 1) {
        UI.SetValue(["Rage", "Anti Aim", "Directions", "At targets"], A)
    }
    UI.SetValue(["Config", "Cheat", "General", "Restrictions"], 0);
    UI.SetValue(["Rage", "Anti Aim", "General", "Pitch mode"], B);
    UI.SetValue(["Rage", "Anti Aim", "Directions", "Yaw offset"], C);
}

function setStaticLegitAA() {
    if (UI.GetValue(["Rage", "Anti Aim", "General", "Key assignment", "Fake duck"])) return;
    if (UI.GetValue(["Config", "FutureSense", "FutureSense", "AA mode"]) != 0) {
        AntiAim.SetOverride(1);
    }
    UI.SetValue(["Rage", "Anti Aim", "Directions", "At targets"], 0)
    aa_type(0, 0, 180);
    var front = FS.ExtendFunction.getWallDistance(Entity.GetLocalPlayer(), [0, Local.GetViewAngles()[1] - 40]);

    UI.SetValue(["Rage", "Anti Aim", "Directions", "Jitter offset"], 0);
    if (front < 200) {
        const Radom_angle = Math.floor(Math.random() * (181 + 1 - 60) + 60);
        const Radom_angle_1 = Math.floor(Math.random() * (0 + 1 - 4) + 4);
        if (UI.GetValue(["Rage", "Anti Aim", "General", "Key assignment", "AA Direction inverter"])) {
            UI.SetValue(["Rage", "Anti Aim", "Directions", "Jitter offset"], Radom_angle_1);
            AntiAim.SetFakeOffset(0);
            AntiAim.SetRealOffset(Radom_angle);
            AntiAim.SetLBYOffset(-60);
        } else {
            AntiAim.SetFakeOffset(0);
            AntiAim.SetRealOffset(-Radom_angle);
            AntiAim.SetLBYOffset(60);
            UI.SetValue(["Rage", "Anti Aim", "Directions", "Jitter offset"], -Radom_angle_1);
        }
    } else if (front > 200) {
        filp_AA()
    }
}

var eUnbind = false;

function setUnbind() {
    if (UI.GetValue(["Rage", "Anti Aim", "General", "Key assignment", "Fake duck"])) return;
    if (!eUnbind) {
        eUnbind = true;
        Cheat.ExecuteCommand("unbind e");
    }
    Cheat.ExecuteCommand("-use");
}

function getHostage() {
    var hostages = Entity.GetEntitiesByClassID(97);
    for (var i = 0; i < hostages.length; i++) {
        var distance_to_hostage = getDistance(Entity.GetRenderOrigin(hostages[i]), Entity.GetRenderOrigin(Entity.GetLocalPlayer()));
        if (distance_to_hostage < 150 && distance_to_hostage > 10) {
            return true;
        }
    }
    return false;
}

function getBomb() {
    if (FS.ExtendFunction.getCurrentWeapon(Entity.GetLocalPlayer()) == "General") {
        return true;
    }
    return (Entity.GetProp(Entity.GetLocalPlayer(), "CBasePlayer", "m_szLastPlaceName") == "BombsiteA" || Entity.GetProp(Entity.GetLocalPlayer(), "CBasePlayer", "m_szLastPlaceName") == "BombsiteB")
}

function setBind() {
    if (UI.GetValue(["Rage", "Anti Aim", "General", "Key assignment", "Fake duck"])) return;
    if (eUnbind) {
        eUnbind = false;
        Cheat.ExecuteCommand("bind e +use");
    }
}


//--> jump shot

const Jump_shot = function() {
    if (!UI.GetValue(["Config", "FutureSense", "FutureSense", "Jump Scout/Revolver Hitchance"]) && tab != 'SSG08' && tab != 'Revolver') {
        return
    };
    const flags = Get_Prop('CBasePlayer', 'm_fFlags')
    if (!(flags & 1 << 0) && !(flags & 1 << 18)) {
        const target = Ragebot.GetTarget();
        const value = UI.GetValue(["Config", "FutureSense", "FutureSense", 'Hitchance']);
        Ragebot.ForceTargetHitchance(target, value);
    }
}

//Slowwalk

const slowwalk = {
    mins : 0,
    max : 0,
    speed : 0,
    fSpeed : 0,
    bSpeed : 0,
    sSpeed : 0,
    jitteramount : 0,
    key : false
}

function Slow_walk() {
    slowwalk.min = UI.GetValue(["Config", "FutureSense", "FutureSense", "Jitter Min"]);
    slowwalk.max = UI.GetValue(["Config", "FutureSense", "FutureSense", "Jitter Max"]);
    slowwalk.speed = UI.GetValue(["Config", "FutureSense", "FutureSense", "Speed"]);
    slowwalk.fSpeed = UI.GetValue(["Config", "FutureSense", "FutureSense", "Forward Speed"]);
    slowwalk.bSpeed = UI.GetValue(["Config", "FutureSense", "FutureSense", "Back Speed"]);
    slowwalk.sSpeed = UI.GetValue(["Config", "FutureSense", "FutureSense", "Side Speed"]);
    slowwalk.jitteramount = slowwalk.min + Math.floor(Math.random() * (slowwalk.max - slowwalk.min + 1))
    slowwalk.key = UI.GetValue(["Rage", "Anti Aim", "General", "Key assignment", "Slow walk"]);
    if (slowwalk.key) {
        if (UI.GetValue(["Config", "FutureSense", "FutureSense", "--> Jitter Speed"])) {
            fnspeed = slowwalk.speed + slowwalk.jitteramount
        } else {
            fnspeed = slowwalk.speed
        }

        fnfspeed = fnspeed;
        fnbspeed = fnspeed;
        fnsspeed = fnspeed;

        if (UI.GetValue(["Config", "FutureSense", "FutureSense", "--> Individual speeds"])) {
            if (UI.GetValue(["Config", "FutureSense", "FutureSense", "--> Jitter Speed"])) {
                fnfspeed = slowwalk.fSpeed + slowwalk.jitteramount
                fnbspeed = slowwalk.bSpeed + slowwalk.jitteramount
                fnsspeed = slowwalk.sSpeed + slowwalk.jitteramount
            } else {
                fnfspeed = slowwalk.fSpeed
                fnbspeed = slowwalk.bSpeed
                fnsspeed = slowwalk.sSpeed
            }
        }

        dir = [0, 0, 0];
        if (Input.IsKeyPressed(0x57)) {
            dir[0] += fnfspeed;
        }
        if (Input.IsKeyPressed(0x44)) {
            dir[1] += fnsspeed;
        }
        if (Input.IsKeyPressed(0x41)) {
            dir[1] -= fnsspeed;
        }

        if (Input.IsKeyPressed(0x53)) {
            dir[0] -= fnbspeed;
        }
        UserCMD.SetMovement(dir);
    }
}


//Slow walk

var Pitchcount = 0

function Pitch_Setting() {
    if (UI.GetValue(["Config", "FutureSense", "FutureSense", "Pitch Setting"]) == 0 || Input.IsKeyPressed(0x45)) return;

    if (UI.GetValue(["Config", "FutureSense", "FutureSense", "Pitch Setting"]) == 2) {
        const localPlayerFlags = Get_Prop("CBasePlayer", "m_fFlags")
        if (localPlayerFlags == 256 || localPlayerFlags == 262) {
            groundCounter = 0;
        }
        if (localPlayerFlags == 257 || localPlayerFlags == 261 || localPlayerFlags == 263) {
            groundCounter = groundCounter + 1;
        }
        if (groundCounter > 10 && groundCounter < 40) {
            UI.SetValue(["Rage", "SUBTAB_MGR", "Anti Aim", "SHEET_MGR", "General", "Pitch mode"], 3);
        } else {
            UI.SetValue(["Rage", "SUBTAB_MGR", "Anti Aim", "SHEET_MGR", "General", "Pitch mode"], 1);
        }
    }
    if (UI.GetValue(["Config", "FutureSense", "FutureSense", "Pitch Setting"]) == 4) {
        Pitchcount++
        if (Pitchcount > 10) {
            UI.SetValue(["Rage", "SUBTAB_MGR", "Anti Aim", "SHEET_MGR", "General", "Pitch mode"], 6);
        } else {
            UI.SetValue(["Rage", "SUBTAB_MGR", "Anti Aim", "SHEET_MGR", "General", "Pitch mode"], 1);
        }
        if (Pitchcount > 13) {
            Pitchcount = 0
        }
    }
    if (UI.GetValue(["Config", "FutureSense", "FutureSense", "Pitch Setting"]) == 3) {
        UI.SetValue(["Rage", "SUBTAB_MGR", "Anti Aim", "SHEET_MGR", "General", "Pitch mode"], 1);
    }
    if (UI.GetValue(["Config", "FutureSense", "FutureSense", "Pitch Setting"]) == 1) {
        UI.SetValue(["Rage", "SUBTAB_MGR", "Anti Aim", "SHEET_MGR", "General", "Pitch mode"], 0);
    }
}

//Indicators && Visuals

//list indicator

function Delta_Angle() {
    const real_angle = Local.GetRealYaw(),
        fake_angle = Local.GetFakeYaw();
    const delta = Math.ceil(Math.abs(FS.ExtendFunction.normalize_yaw(real_angle % 360 - fake_angle % 360)) / 2);
    return delta / 60
}

function Fake_angle_color(Angle) {
    const dormant = [186, 0, 16, 225]
    const active = [154, 205, 50, 255]
    const color_indicator_fake = [
        dormant[0] + (active[0] - dormant[0]) * Angle,
        dormant[1] + (active[1] - dormant[1]) * Angle,
        dormant[2] + (active[2] - dormant[2]) * Angle,
        255
    ];
    return color_indicator_fake;
}

var LC_count = 0;
var DT_color = [255, 255, 255, 255]

const List_indicator = function() {

    const IndicatorFont = Add_font("segoeuib.ttf", 23)
    const Choke_tick = Globals.ChokedCommands();

    const Fake_Arc = Math.ceil(Math.abs(FS.ExtendFunction.normalize_yaw(Local.GetRealYaw() % 360 - Local.GetFakeYaw() % 360)) / 2);

    var DMG = UI.GetValue(["Rage", "Target", tab, "Minimum damage"])
    var HC_flag = UI.GetValue(["Rage", "Accuracy", tab, "Hitchance"])

    const main_indicator_color = UI.GetColor(["Config", "FS -> Visuals", "FS -> Visuals", "List indicator main color"]);

    const override = UI.GetValue(["Rage", "Target", tab, "Damage override"]);
    const color_indicator_fake = Fake_angle_color(Delta_Angle());
    const flags = Get_Prop('CBasePlayer', 'm_fFlags')

    if (DMG == 0) {
        var DMG = "Auto"
    }
    if (weapon_name_tag == 507) {
        var DMG = "Auto"
        var HC_flag = "100"
    }


    if (UI.GetValue(["Config", "FutureSense", "FutureSense", "DMG override on key"]) && UI.GetValue(["Config", "SUBTAB_MGR", "Scripts", "SHEET_MGR", "Keys", "JS Keybinds", "DMG override"])) {
        var DMG = override
        var DMG_state = "Ovr"
    } else {
        var DMG_state = "Def"
    }
    if(UI.GetValue(["Rage", "Accuracy", tab, "Reduce hitchance"]) && UI.GetValue(["Config", "FutureSense", "FutureSense", "Reduce hitchance"])) {
       var hc_state = "Auto"
     }else if(!UI.GetValue(["Rage", "Accuracy", tab, "Reduce hitchance"]) && UI.GetValue(["Config", "FutureSense", "FutureSense", "Reduce hitchance"])){
       var hc_state = "Def"
     }else{
       var hc_state = "Def"
     }

    if (override < 1) {
        var override = 1
    }

    if (Exploit.GetCharge() != 1) {
        var DT_color = [255, 5, 5, 255]
    } else {
        var DT_color = [255, 255, 255, 255]
    }


    if (Entity.IsAlive(Entity.GetLocalPlayer())) {

        if (UI.GetValue(['Rage', 'Exploits', 'Keys', 'Key assignment', 'Double tap']) && !UI.GetValue(["Rage", "Anti Aim", "General", "Key assignment", "Fake duck"])) {
            Render.GradientRect(51, screen_size[1] - 498, 50, 24, 1, [0, 0, 0, 60], [0, 0, 0, 0]);
            Render.GradientRect(1, screen_size[1] - 498, 50, 24, 1, [0, 0, 0, 0], [0, 0, 0, 60]);
            Render.String(15, screen_size[1] - 503, 0, "DT", [0, 0, 0, 150], IndicatorFont);
            Render.String(17, screen_size[1] - 502, 0, "DT", DT_color, IndicatorFont);
        } else if (UI.GetValue(["Rage", "Exploits", "Keys", "Hide shots"]) && !UI.GetValue(["Rage", "Anti Aim", "General", "Key assignment", "Fake duck"])) {
            Render.GradientRect(51, screen_size[1] - 498, 50, 24, 1, [0, 0, 0, 60], [0, 0, 0, 0]);
            Render.GradientRect(1, screen_size[1] - 498, 50, 24, 1, [0, 0, 0, 0], [0, 0, 0, 60]);
            Render.String(15, screen_size[1] - 503, 0, "ONSHOT", [0, 0, 0, 150], IndicatorFont);
            Render.String(17, screen_size[1] - 502, 0, "ONSHOT", [102, 205, 0, 255], IndicatorFont);
        } else if (UI.GetValue(["Rage", "Anti Aim", "General", "Key assignment", "Fake duck"])) {
            Render.GradientRect(51, screen_size[1] - 498, 50, 24, 1, [0, 0, 0, 60], [0, 0, 0, 0]);
            Render.GradientRect(1, screen_size[1] - 498, 50, 24, 1, [0, 0, 0, 0], [0, 0, 0, 60]);
            Render.String(15, screen_size[1] - 503, 0, "DUCK", [0, 0, 0, 150], IndicatorFont);
            Render.String(17, screen_size[1] - 502, 0, "DUCK", [255, 255, 255, 255], IndicatorFont);
        }

        Render.GradientRect(51, screen_size[1] - 458, 50, 24, 1, [0, 0, 0, 60], [0, 0, 0, 0]);
        Render.GradientRect(1, screen_size[1] - 458, 50, 24, 1, [0, 0, 0, 0], [0, 0, 0, 60]);
        Render.String(15, screen_size[1] - 463, 0, "DMG - " + DMG + " " + DMG_state, [0, 0, 0, 150], IndicatorFont);
        Render.String(17, screen_size[1] - 462, 0, "DMG - " + DMG + " " + DMG_state, main_indicator_color, IndicatorFont);

        Render.GradientRect(51, screen_size[1] - 418, 50, 24, 1, [0, 0, 0, 60], [0, 0, 0, 0]);
        Render.GradientRect(1, screen_size[1] - 418, 50, 24, 1, [0, 0, 0, 0], [0, 0, 0, 60]);
        Render.String(15, screen_size[1] - 423, 0, "HC - " + HC_flag + "% "+hc_state, [0, 0, 0, 150], IndicatorFont);
        Render.String(17, screen_size[1] - 422, 0, "HC - " + HC_flag + "% "+hc_state, main_indicator_color, IndicatorFont);

        Render.GradientRect(51, screen_size[1] - 378, 50, 24, 1, [0, 0, 0, 60], [0, 0, 0, 0]);
        Render.GradientRect(1, screen_size[1] - 378, 50, 24, 1, [0, 0, 0, 0], [0, 0, 0, 60]);
        Render.String(15, screen_size[1] - 383, 0, "FAKE", [0, 0, 0, 150], IndicatorFont);
        Render.String(17, screen_size[1] - 382, 0, "FAKE", color_indicator_fake, IndicatorFont);
        FS.ExtendFunction.draw_arc_state(88, screen_size[1] - 365, 10, 4, 0, 360, 25, [25, 25, 25, 190])
        FS.ExtendFunction.draw_arc(88, screen_size[1] - 365, 9, 0, Fake_Arc, 6, 4, color_indicator_fake);

        Render.GradientRect(51, screen_size[1] - 338, 50, 24, 1, [0, 0, 0, 60], [0, 0, 0, 0]);
        Render.GradientRect(1, screen_size[1] - 338, 50, 24, 1, [0, 0, 0, 0], [0, 0, 0, 60]);
        Render.String(15, screen_size[1] - 343.5, 0, "FL", [0, 0, 0, 150], IndicatorFont);
        Render.String(17, screen_size[1] - 342.5, 0, "FL", [main_indicator_color[0], main_indicator_color[1], main_indicator_color[2], 255], IndicatorFont);
        FS.ExtendFunction.draw_arc_state(55, screen_size[1] - 325.5, 10, 4, 0, 360, 25, [25, 25, 25, 190])
        FS.ExtendFunction.draw_arc(55, screen_size[1] - 325.5, 9, 0, Choke_tick, 24, 4, [main_indicator_color[0], main_indicator_color[1], main_indicator_color[2], 255]);

        if (!(flags & 1 << 0) && !(flags & 1 << 18)) {
            Render.GradientRect(51, screen_size[1] - 298, 50, 24, 1, [0, 0, 0, 60], [0, 0, 0, 0]);
            Render.GradientRect(1, screen_size[1] - 298, 50, 24, 1, [0, 0, 0, 0], [0, 0, 0, 60]);

            LC_count++;
            if (LC_count > 18) {
                Render.String(15, screen_size[1] - 302, 0, "LC", [0, 0, 0, 150], IndicatorFont);
                Render.String(17, screen_size[1] - 304, 0, "LC", [102, 205, 0, 255], IndicatorFont);
                if (LC_count > 25) {
                    LC_count = 0;
                }
            } else {
                Render.String(15, screen_size[1] - 302, 0, "LC", [0, 0, 0, 150], IndicatorFont);
                Render.String(17, screen_size[1] - 304, 0, "LC", [255, 5, 5, 255], IndicatorFont);
            }
        } else {
            if (UI.GetValue(["Config", "FutureSense", "FutureSense", "Enable freestanding"])) {
                Render.GradientRect(51, screen_size[1] - 298, 50, 24, 1, [0, 0, 0, 60], [0, 0, 0, 0]);
                Render.GradientRect(1, screen_size[1] - 298, 50, 24, 1, [0, 0, 0, 0], [0, 0, 0, 60]);
                Render.String(15, screen_size[1] - 302, 0, "FREESTAND", [0, 0, 0, 150], IndicatorFont);
                Render.String(17, screen_size[1] - 304, 0, "FREESTAND", [102, 205, 0, 255], IndicatorFont);
            }
        }
    }
}

//Health state indicator

function health_state_draw() {
    if (!Entity.IsAlive(Entity.GetLocalPlayer())) return;
    const Neon_Indicator_Font = Add_font("segoeuib.ttf", 30);
    const Neon_Indicator_Font_Small = Add_font("segoeuib.ttf", 18);
    const HP_indicatorX = 50
    const HP_indicatorY = screen_size[1] - 60
    const hp = Get_Prop("CBasePlayer", "m_iHealth");
    const arm = Get_Prop("CCSPlayerResource", "m_iArmor");

    if (hp < 300) {
        Render.FilledRect(HP_indicatorX + 16, HP_indicatorY + 5, multiply(hp, 3), 16, [150, 25, 25, 120]);
        Render.FilledRect(HP_indicatorX + 10, HP_indicatorY, multiply(hp, 3), 16, [255, 50, 50, 240]);
    } else {
        Render.FilledRect(HP_indicatorX + 16, HP_indicatorY + 5, 300, 16, [150, 25, 25, 120]);
        Render.FilledRect(HP_indicatorX + 10, HP_indicatorY, 300, 16, [255, 50, 50, 240]);
    }
    if (arm < 300) {
        Render.FilledRect(HP_indicatorX + 16, HP_indicatorY - 5, multiply(arm, 3), 6, [150, 150, 150, 120]);
        Render.FilledRect(HP_indicatorX + 10, HP_indicatorY - 10, multiply(arm, 3), 6, [240, 240, 240, 240]);
    } else {
        Render.FilledRect(HP_indicatorX + 16, HP_indicatorY - 5, 300, 6, [150, 150, 150, 120]);
        Render.FilledRect(HP_indicatorX + 10, HP_indicatorY - 10, 300, 6, [240, 240, 240, 240]);
    }
    Render.String(HP_indicatorX + 345, HP_indicatorY - 10, 1, hp.toString(), [150, 25, 25, 120], Neon_Indicator_Font)
    Render.String(HP_indicatorX + 340, HP_indicatorY - 15, 1, hp.toString(), [255, 50, 50, 240], Neon_Indicator_Font)

    Render.String(HP_indicatorX + 385, HP_indicatorY - 20, 1, arm.toString(), [150, 150, 150, 120], Neon_Indicator_Font_Small)
    Render.String(HP_indicatorX + 380, HP_indicatorY - 23, 1, arm.toString(), [240, 240, 240, 240], Neon_Indicator_Font_Small)

    Render.Rect(HP_indicatorX - 25, HP_indicatorY - 10, 30, 30, [100, 100, 255, 250]);
    Render.Rect(HP_indicatorX - 25, HP_indicatorY - 10, 29, 29, [100, 100, 255, 250]);
    Render.String(HP_indicatorX - 10, HP_indicatorY - 18, 1, "1", [240, 240, 240, 240], Neon_Indicator_Font)
}



//RGB line

function line() {
    const colors = FS.ExtendFunction.RGB(Globals.Realtime() / 5 % 1, 1, 1)
    Render.GradientRect(0, 0, screen_width / 2, 4, 1, [colors.g, colors.b, colors.r, 255], [colors.r, colors.g, colors.b, 255]);
    Render.GradientRect(screen_width / 2, 0, screen_width / 2, 4, 1, [colors.r, colors.g, colors.b, 255], [colors.b, colors.r, colors.g, 255]);
}

//hitmarker

var shot_data = [];

var hurt_log = {
    hurt_logs: []
};

var hit = 0,
    hit_process = 0;

function Draw_hitamrker() {
    var delayspeed = 2
    if (hit == 1) {
        hit_process = hit_process + delayspeed;
        const color = [255, 255, 255, 255 - hit_process]
        Render.Line((screen_size[0] / 2) - 5, (screen_size[1] / 2) - 5, (screen_size[0] / 2) - 10, (screen_size[1] / 2) - 10, color)
        Render.Line((screen_size[0] / 2) + 5, (screen_size[1] / 2) - 5, (screen_size[0] / 2) + 10, (screen_size[1] / 2) - 10, color)

        Render.Line((screen_size[0] / 2) - 5, (screen_size[1] / 2) + 5, (screen_size[0] / 2) - 10, (screen_size[1] / 2) + 10, color)
        Render.Line((screen_size[0] / 2) + 5, (screen_size[1] / 2) + 5, (screen_size[0] / 2) + 10, (screen_size[1] / 2) + 10, color)
        if (color[3] <= 10) {
            hit--;
            hit_process = 0

        }
    } else if (hit > 1) {
        i = 0
        hit = 1;
    }
}

function Deaw_damage_logs() {
    const font = Add_font("segoeuib.ttf", 10);
    const x = screen_size[0] / 2,
        y = screen_size[1] / 2;
    for (var i = 0; i < hurt_log.hurt_logs.length; i++) {

        const current = hurt_log.hurt_logs[i];
        if (hurt_log.hurt_logs[i] != undefined) {
            if (hurt_log.hurt_logs[i].time + 2 < Globals.Curtime() || hurt_log.hurt_logs[i].time < 1 || hurt_log.hurt_logs[i].time == undefined) {
                delete hurt_log.hurt_logs[i]
            } else {
                if (hurt_log.hurt_logs[i].anim_time != undefined) {
                    hurt_log.hurt_logs[i].anim_time = Math.min(hurt_log.hurt_logs[i].anim_time + Globals.Frametime() / 5, 1);
                    if (current.anim_time === 1) {
                        hurt_log.hurt_logs.slice(i, 1);
                        continue;
                    }
                    Render.String(x - 20, y + 150 - i * 14, 1, "-" + current.dmg, [146, 255, 92, 120 * (1 - current.anim_time)], font);
                    Render.String(x + 5, y + 150 - i * 14, 0, current.name, [235, 235, 235, 120 * (1 - current.anim_time)], font);
                }
            }
        }
    }
}

//AA indicator

const Renderer = {};

function IdealYaw_Indicator() {
    if (!Entity.IsAlive(Entity.GetLocalPlayer())) return;
    const _0xbdacx4 = screen_size[0],
        _0xbdacx5 = screen_size[1];
    const _0xbdacx2f = UI.GetValue(['Rage', 'Anti Aim', 'General', 'Key assignment', 'AA Direction inverter']);
    const _0xbdacx30 = Local.GetViewAngles()[1] - Local.GetRealYaw();
    const scoped = Get_Prop("CCSPlayer", "m_bIsScoped")
    const delta = Delta_Angle();
    if (UI.GetValue(["Config", "FS -> Visuals", "FS -> Visuals", "AA indicator Desync base Color"])) {
        var color_indicator_fake = Fake_angle_color(delta);
    } else {
        var color_indicator_fake = UI.GetColor(["Config", "FS -> Visuals", "FS -> Visuals", "AA indicator Color"]);
    }

    if (!scoped) {
        FS.ExtendFunction.draw_arc_state(_0xbdacx4 / 2, _0xbdacx5 / 2, 11, 3, 0, 360, 36, [10, 10, 10, 100])

        if (_0xbdacx2f == 1) {
            FS.ExtendFunction.draw_arc_state(_0xbdacx4 / 2, _0xbdacx5 / 2, 10, 5, 270, 180, 25, color_indicator_fake)
        } else {
            FS.ExtendFunction.draw_arc_state(_0xbdacx4 / 2, _0xbdacx5 / 2, 10, 5, 90, 180, 25, color_indicator_fake)
        }
        FS.ExtendFunction.draw_arc_state(_0xbdacx4 / 2, _0xbdacx5 / 2, 20, 16, _0xbdacx30 - 135, 45, 25, [color_indicator_fake[0], color_indicator_fake[1], color_indicator_fake[2], 200])
    }
    if (scoped) {
        FS.ExtendFunction.draw_arc_state(_0xbdacx4 / 2, _0xbdacx5 / 2, 11, 3, 0, 360, 25, [10, 10, 10, 50])
        if (_0xbdacx2f == 1) {
            FS.ExtendFunction.draw_arc_state(_0xbdacx4 / 2, _0xbdacx5 / 2, 10, 6, 270, 180, 25, [color_indicator_fake[0], color_indicator_fake[1], color_indicator_fake[2], 120])
        } else {
            FS.ExtendFunction.draw_arc_state(_0xbdacx4 / 2, _0xbdacx5 / 2, 10, 6, 90, 180, 25, [color_indicator_fake[0], color_indicator_fake[1], color_indicator_fake[2], 120])
        }
        FS.ExtendFunction.draw_arc_state(_0xbdacx4 / 2, _0xbdacx5 / 2, 20, 16, _0xbdacx30 - 135, 45, 25, [color_indicator_fake[0], color_indicator_fake[1], color_indicator_fake[2], 120])
    }
}

const AA_indicator = function() {
    if (!Entity.IsAlive(Entity.GetLocalPlayer())) return;
    const realBorderColor = [200, 200, 255, 160]
    const fakeBorderColor = UI.GetColor(["Config", "FS -> Visuals", "FS -> Visuals", "AA indicator Color"]);
    if (!UI.GetValue(["Rage", "Anti Aim", "General", "Key assignment", "AA Direction inverter"])) {
        Render.Line(screen_size[0] / 2 + 102, screen_size[1] / 2, screen_size[0] / 2 + 75, screen_size[1] / 2 + 16, realBorderColor);
        Render.Line(screen_size[0] / 2 + 102, screen_size[1] / 2, screen_size[0] / 2 + 75, screen_size[1] / 2 - 16, realBorderColor);
        Render.Line(screen_size[0] / 2 + 80, screen_size[1] / 2, screen_size[0] / 2 + 75, screen_size[1] / 2 + 16, realBorderColor);
        Render.Line(screen_size[0] / 2 + 80, screen_size[1] / 2, screen_size[0] / 2 + 75, screen_size[1] / 2 - 16, realBorderColor);
        Render.Line(screen_size[0] / 2 - 102, screen_size[1] / 2, screen_size[0] / 2 - 75, screen_size[1] / 2 + 16, fakeBorderColor);
        Render.Line(screen_size[0] / 2 - 102, screen_size[1] / 2, screen_size[0] / 2 - 75, screen_size[1] / 2 - 16, fakeBorderColor);
        Render.Line(screen_size[0] / 2 - 80, screen_size[1] / 2, screen_size[0] / 2 - 75, screen_size[1] / 2 + 16, fakeBorderColor);
        Render.Line(screen_size[0] / 2 - 80, screen_size[1] / 2, screen_size[0] / 2 - 75, screen_size[1] / 2 - 16, fakeBorderColor);
        Render.Polygon([
            [screen_size[0] / 2 + 75, screen_size[1] / 2 + 16],
            [screen_size[0] / 2 + 80, screen_size[1] / 2],
            [screen_size[0] / 2 + 102, screen_size[1] / 2]
        ], realBorderColor);
        Render.Polygon([
            [screen_size[0] / 2 - 102, screen_size[1] / 2],
            [screen_size[0] / 2 - 80, screen_size[1] / 2],
            [screen_size[0] / 2 - 75, screen_size[1] / 2 + 16]
        ], fakeBorderColor);
    } else {
        Render.Line(screen_size[0] / 2 + 102, screen_size[1] / 2, screen_size[0] / 2 + 75, screen_size[1] / 2 + 16, fakeBorderColor);
        Render.Line(screen_size[0] / 2 + 102, screen_size[1] / 2, screen_size[0] / 2 + 75, screen_size[1] / 2 - 16, fakeBorderColor);
        Render.Line(screen_size[0] / 2 + 80, screen_size[1] / 2, screen_size[0] / 2 + 75, screen_size[1] / 2 + 16, fakeBorderColor);
        Render.Line(screen_size[0] / 2 + 80, screen_size[1] / 2, screen_size[0] / 2 + 75, screen_size[1] / 2 - 16, fakeBorderColor);
        Render.Line(screen_size[0] / 2 - 102, screen_size[1] / 2, screen_size[0] / 2 - 75, screen_size[1] / 2 + 16, realBorderColor);
        Render.Line(screen_size[0] / 2 - 102, screen_size[1] / 2, screen_size[0] / 2 - 75, screen_size[1] / 2 - 16, realBorderColor);
        Render.Line(screen_size[0] / 2 - 80, screen_size[1] / 2, screen_size[0] / 2 - 75, screen_size[1] / 2 + 16, realBorderColor);
        Render.Line(screen_size[0] / 2 - 80, screen_size[1] / 2, screen_size[0] / 2 - 75, screen_size[1] / 2 - 16, realBorderColor);
        Render.Polygon([
            [screen_size[0] / 2 + 75, screen_size[1] / 2 + 16],
            [screen_size[0] / 2 + 80, screen_size[1] / 2],
            [screen_size[0] / 2 + 102, screen_size[1] / 2]
        ], fakeBorderColor);
        Render.Polygon([
            [screen_size[0] / 2 - 102, screen_size[1] / 2],
            [screen_size[0] / 2 - 80, screen_size[1] / 2],
            [screen_size[0] / 2 - 75, screen_size[1] / 2 + 16]
        ], realBorderColor);
    }
}

function DisPlay_indicator() {
    if (!Entity.IsAlive(Entity.GetLocalPlayer())) return;
    var delta = Math.ceil(Math.abs(FS.ExtendFunction.normalize_yaw(Local.GetRealYaw() % 360 - Local.GetFakeYaw() % 360)) / 2);
    var YawColor = UI.GetColor(["Config", "FS -> Visuals", "FS -> Visuals", "AA indicator Color"]);
    //var color_indicator_fake = Fake_angle_color(delta);
    Render.GradientRect(screen_size[0] / 2, screen_size[1] / 2 + 25, 10 + delta, 3, 1, YawColor, [0, 0, 0, 0]);
    Render.GradientRect(screen_size[0] / 2 + 1 - (10 + delta), screen_size[1] / 2 + 25, 10 + delta, 3, 1, [0, 0, 0, 0], YawColor);

    Render.String(screen_size[0] / 2 - 21, screen_size[1] / 2 + 31, 0, "Future YAW", [0, 0, 0, 255], Add_font("segoeuib.ttf", 8))
    Render.String(screen_size[0] / 2 - 22, screen_size[1] / 2 + 30, 0, "Future YAW", YawColor, Add_font("segoeuib.ttf", 8))
}

//bar indicator

function Boo_indicator() {
    if (!Entity.IsAlive(Entity.GetLocalPlayer())) return;
    const Boo_indicator_Font = Add_font("segoeuib.ttf", 12);
    const Pos_x = UI.GetValue(["Config", "FS -> Visuals", "FS -> Visuals", "Pos_x"])
    const Pos_y = UI.GetValue(["Config", "FS -> Visuals", "FS -> Visuals", "Pos_y"])

    const Choke_tick = Globals.ChokedCommands();
    var Fake_Arc = Math.ceil(Math.abs(FS.ExtendFunction.normalize_yaw(Local.GetRealYaw() % 360 - Local.GetFakeYaw() % 360)) / 2);

    const DMG = UI.GetValue(["Rage", "Target", tab, "Minimum damage"])
    const HC_flag = UI.GetValue(["Rage", "Accuracy", tab, "Hitchance"])
    var vel = Math.ceil(FS.ExtendFunction.getVelocity(Entity.GetLocalPlayer()))

    if (Fake_Arc == undefined || Fake_Arc < undefined) {
        var Fake_Arc = 0
    }
    if (vel == undefined || vel > 300) {
        var vel = 0
    }

    Render.String(Pos_x - 2, Pos_y - 1, 0, "FutureSense.uno", [0, 0, 0, 100], Boo_indicator_Font)
    Render.String(Pos_x, Pos_y, 0, "FutureSense.uno", [255, 255, 255, 255], Boo_indicator_Font)

    Render.GradientRect(Pos_x, Pos_y + 17, 180, 1.5, 1, [0, 205, 255, 255], [0, 255, 255, 255]);

    Render.String(Pos_x, Pos_y + 19, 0, "chk:", [255, 255, 255, 255], Boo_indicator_Font)
    Render.FilledRect(Pos_x + 28, Pos_y + 25, 135, 8, [255, 255, 255, 50]);
    Render.GradientRect(Pos_x + 29, Pos_y + 26, multiply(Choke_tick, 8.4), 6, 1, [0, 180, 180, 255], [0, 255, 255, 255]);
    Render.String(Pos_x + 168, Pos_y + 19, 0, choke_history[0].toString(), [255, 255, 255, 255], Boo_indicator_Font)

    Render.String(Pos_x, Pos_y + 32, 0, "dsy:", [255, 255, 255, 255], Boo_indicator_Font)
    Render.FilledRect(Pos_x + 28, Pos_y + 38, 135, 8, [255, 255, 255, 50]);
    Render.GradientRect(Pos_x + 29, Pos_y + 39, multiply(Fake_Arc, 2.2), 6, 1, [0, 180, 180, 255], [0, 255, 255, 255]);
    Render.String(Pos_x + 168, Pos_y + 32, 0, Fake_Arc.toString(), [255, 255, 255, 255], Boo_indicator_Font)


    Render.String(Pos_x, Pos_y + 45, 0, "htc:", [255, 255, 255, 255], Boo_indicator_Font)
    Render.FilledRect(Pos_x + 28, Pos_y + 51, 135, 8, [255, 255, 255, 50]);
    Render.GradientRect(Pos_x + 29, Pos_y + 52, multiply(HC_flag, 1.3), 6, 1, [0, 180, 180, 255], [0, 255, 255, 255]);
    Render.String(Pos_x + 168, Pos_y + 45, 0, HC_flag.toString(), [255, 255, 255, 255], Boo_indicator_Font)

    Render.String(Pos_x - 0.5, Pos_y + 58, 0, "dmg:", [255, 255, 255, 255], Boo_indicator_Font)
    Render.FilledRect(Pos_x + 28, Pos_y + 64, 135, 8, [255, 255, 255, 50]);
    Render.GradientRect(Pos_x + 29, Pos_y + 65, DMG, 6, 1, [0, 180, 180, 255], [0, 255, 255, 255]);
    Render.String(Pos_x + 168, Pos_y + 58, 0, DMG.toString(), [255, 255, 255, 255], Boo_indicator_Font)

    Render.String(Pos_x, Pos_y + 71, 0, "spd:", [255, 255, 255, 255], Boo_indicator_Font)
    Render.FilledRect(Pos_x + 28, Pos_y + 77, 135, 8, [255, 255, 255, 50]);
    if (vel < 135) {
        Render.GradientRect(Pos_x + 29, Pos_y + 78, vel, 6, 1, [0, 180, 180, 255], [0, 255, 255, 255]);
    } else {
        Render.GradientRect(Pos_x + 29, Pos_y + 78, 135, 6, 1, [0, 180, 180, 255], [0, 255, 255, 255]);
    }
    Render.String(Pos_x + 168, Pos_y + 71, 0, vel.toString(), [255, 255, 255, 255], Boo_indicator_Font)

}
var choke_max = 0
var choke_history = [0, 0, 0, 0]
var choke_inactive = false

function update_choke_data() {
    const choked = Globals.ChokedCommands();

    choke_max = Math.max(choke_max, choked);

    if (Globals.Tickcount() % 16 == 0) {
        choke_history.unshift(choke_max);
        choke_max = 0;

        if (choke_history.length > 5)
            choke_history.pop();

        choke_inactive = true;

        for (var i = 0; i < choke_history.length; i++) {
            if (choke_history[i] > 1) {
                choke_inactive = false;
                break;
            }
        }
    }
}




//Bullet Tracer

var lastFireEyePos = [0, 0, 0];
var firedByRageBot = false;

function on_BulletImpact() {
    if (UI.GetValue(["Config", "FS -> Visuals", "FS -> Visuals", "Show Bullet Tracer"])) {
        player = Entity.GetEntityFromUserID(Event.GetInt("userid"));
        if (Entity.GetLocalPlayer() !== player) return;
        if (bullets.length >= 100) bullets = [];
        const eyePos = lastFireEyePos;
        bullets.push({
            "impact": [Event.GetFloat("x"), Event.GetFloat("y"), Event.GetFloat("z")],
            "origin": eyePos,
            "time": Globals.Curtime()
        });
    }
    if (UI.GetValue(["Config", "FutureSense", "FutureSense", "Anti Bruteforce"])) {
        if (Entity.IsEnemy(Entity.GetEntityFromUserID(Event.GetInt("userid")))) {
            shotEnd[Entity.GetEntityFromUserID(Event.GetInt("userid"))] = [Event.GetInt("x"), Event.GetInt("y"), Event.GetInt("z")];
        }
    }
}

var bullets = [];

function drawBulletTracer() {
    if (bullets.length < 1) return;
    var drew = 0;
    for (var i = bullets.length - 1; i >= 0; i--) {
        if (bullets[i] != undefined) {
            if (drew >= 3) {
                break;
            }
            drew++;
            if (bullets[i]["time"] + 2 < Globals.Curtime() || bullets[i]["time"] < 1 || bullets[i]["time"] == undefined) {
                delete bullets[i];
            } else {
                var impact = WorldToScreen(bullets[i]["impact"]);
                var origin = WorldToScreen(bullets[i]["origin"]);
                if (origin != undefined && impact != undefined) {
                    /*
                    if (origin[2] === 0 && !UI_GetValue(["Misc.", "Keys", "General", "Key assignment", "Thirdperson"])) {
                        var vector = [bullets[i]["impact"][0] - bullets[i]["origin"][0], bullets[i]["impact"][1] - bullets[i]["origin"][1], bullets[i]["impact"][2] - bullets[i]["origin"][2]];
                        var newOrigin = duplicate(bullets[i]["origin"]);
                        var length = getDistance(bullets[i]["impact"], newOrigin) - getDistance(bullets[i]["impact"], local_eye_position);
                        newOrigin[0] += vector[0] * (length / getDistance(bullets[i]["impact"], newOrigin) + 0.05);
                        newOrigin[1] += vector[1] * (length / getDistance(bullets[i]["impact"], newOrigin) + 0.05);
                        newOrigin[2] += vector[2] * (length / getDistance(bullets[i]["impact"], newOrigin) + 0.05);
                        origin = Render_WorldToScreen(newOrigin);
                    }*/
                    if (origin[2] === 0 || impact[2] === 0) {
                        var maximumTrial = 20;
                        var trials = 0;
                        var newOrigin = FS.ExtendFunction.duplicate(bullets[i]["origin"]);
                        while (origin[2] === 0 && impact[2] != 0) {
                            var vector = [bullets[i]["impact"][0] - bullets[i]["origin"][0], bullets[i]["impact"][1] - bullets[i]["origin"][1], bullets[i]["impact"][2] - bullets[i]["origin"][2]];
                            newOrigin[0] += vector[0] * 0.05;
                            newOrigin[1] += vector[1] * 0.05;
                            newOrigin[2] += vector[2] * 0.05;
                            origin = WorldToScreen(newOrigin);
                            trials++;
                            if (trials >= maximumTrial) {
                                break;
                            }
                        }
                        var trials = 0;
                        var newImpact = FS.ExtendFunction.duplicate(bullets[i]["impact"]);
                        while (impact[2] === 0 && origin[2] != 0) {
                            var vector = [bullets[i]["origin"][0] - bullets[i]["impact"][0], bullets[i]["origin"][1] - bullets[i]["impact"][1], bullets[i]["origin"][2] - bullets[i]["impact"][2]];
                            newImpact[0] += vector[0] * 0.05;
                            newImpact[1] += vector[1] * 0.05;
                            newImpact[2] += vector[2] * 0.05;
                            impact = Render.WorldToScreen(newImpact);
                            trials++;
                            if (trials >= maximumTrial) {
                                break;
                            }
                        }
                    }
                    //if (origin[1] < screen_size[1] && origin[0] < screen_size[0] && origin[0] > 0) {
                    Render.Line(impact[0], impact[1], origin[0], origin[1], UI.GetColor(["Config", "FS -> Visuals", "FS -> Visuals", "Bullet Tracer Color"]));
                    var step = Math.floor(UI.GetColor(["Config", "FS -> Visuals", "FS -> Visuals", "Bullet Tracer Color"])[3] / UI.GetValue(["Config", "FS -> Visuals", "FS -> Visuals", "Bullet Tracer Thickness"]));
                    for (var x = 1; x < UI.GetValue(["Config", "FS -> Visuals", "FS -> Visuals", "Bullet Tracer Thickness"]); x++) {
                        Render.Line(impact[0] + (x - 1), impact[1], origin[0] + x, origin[1], [UI.GetColor(["Config", "FS -> Visuals", "FS -> Visuals", "Bullet Tracer Color"])[0], UI.GetColor(["Config", "FS -> Visuals", "FS -> Visuals", "Bullet Tracer Color"])[1], UI.GetColor(["Config", "FS -> Visuals", "FS -> Visuals", "Bullet Tracer Color"])[2], UI.GetColor(["Config", "FS -> Visuals", "FS -> Visuals", "Bullet Tracer Color"])[3] - (x * step)]);
                        Render.Line(impact[0], impact[1] + (x - 1), origin[0], origin[1] + x, [UI.GetColor(["Config", "FS -> Visuals", "FS -> Visuals", "Bullet Tracer Color"])[0], UI.GetColor(["Config", "FS -> Visuals", "FS -> Visuals", "Bullet Tracer Color"])[1], UI.GetColor(["Config", "FS -> Visuals", "FS -> Visuals", "Bullet Tracer Color"])[2], UI.GetColor(["Config", "FS -> Visuals", "FS -> Visuals", "Bullet Tracer Color"])[3] - (x * step)]);
                        Render.Line(impact[0] - (x - 1), impact[1], origin[0] - x, origin[1], [UI.GetColor(["Config", "FS -> Visuals", "FS -> Visuals", "Bullet Tracer Color"])[0], UI.GetColor(["Config", "FS -> Visuals", "FS -> Visuals", "Bullet Tracer Color"])[1], UI.GetColor(["Config", "FS -> Visuals", "FS -> Visuals", "Bullet Tracer Color"])[2], UI.GetColor(["Config", "FS -> Visuals", "FS -> Visuals", "Bullet Tracer Color"])[3] - (x * step)]);
                        Render.Line(impact[0], impact[1] - (x - 1), origin[0], origin[1] - x, [UI.GetColor(["Config", "FS -> Visuals", "FS -> Visuals", "Bullet Tracer Color"])[0], UI.GetColor(["Config", "FS -> Visuals", "FS -> Visuals", "Bullet Tracer Color"])[1], UI.GetColor(["Config", "FS -> Visuals", "FS -> Visuals", "Bullet Tracer Color"])[2], UI.GetColor(["Config", "FS -> Visuals", "FS -> Visuals", "Bullet Tracer Color"])[3] - (x * step)]);
                    }
                    //}
                }
            }
        }
    }
}

//aspect radio

var orgaspect = Convar.GetFloat("r_aspectratio");
var string_orgaspect = orgaspect.toString();

function Aspect_radio() {
    var uiaspect = UI.GetValue(["Config", "FS -> Visuals", "FS -> Visuals", "Aspect Ratio"]);
    var string_uiaspect = uiaspect.toString();
    if (UI.GetValue(["Config", "FS -> Visuals", "FS -> Visuals", "Enable Aspect Ratio Changer"])) {
        Convar.SetString("r_aspectratio", string_uiaspect);
    } else {
        Convar.SetString("r_aspectratio", string_orgaspect);
    }
}

//Free camera

var local_eye_position = [0, 0, 0];

var cameraData = [];
for (var i = 0; i < 65; i++) {
    cameraData.push([
        [0, 0, 0],
        [0, 0, 0]
    ]);
}
var positionData = [];
for (var i = 0; i < 65; i++) {
    positionData.push([
        [0, 0, 0],
        [0, 0, 0]
    ]);
}
var thirdDistance = UI.GetValue(["Misc.", "View", "General", "Thirdperson Distance"])
if (UI.GetValue(["Config", "FS -> Visuals", "FS -> Visuals", "Free camera following speed"]) == 0) {
    UI.SetValue(["Config", "FS -> Visuals", "FS -> Visuals", "Free camera following speed"], 2)
}

function delayCamera() {
    if (!UI.GetValue(["Config", "FS -> Visuals", "FS -> Visuals", "Free camera"]) || !UI.GetValue(["Config", "FS -> Visuals", "FS -> Visuals", "Free camera"])) return;
    var valve = Entity.GetProp(Entity.GetGameRulesProxy(), "CCSGameRulesProxy", "m_bIsValveDS");
    var origin = Entity.GetRenderOrigin(Entity.GetLocalPlayer());
    var eyePos = local_eye_position;
    if (UI.GetValue(["Rage", "Anti Aim", "General", "Key assignment", "Fake duck"])) {
        if (valve && !Input.IsKeyPressed(0x11)) {
            eyePos[2] = origin[2] + 46 + (18 - (maxLevel + 1) / 100 * 18);
            origin[2] += 46 + (18 - (maxLevel + 1) / 100 * 18);
            /*if (UI_GetValue([Misc, "Keys", General, "Key assignment", "Thirdperson"]) && isDraw) {
                var screenPos = Render_WorldToScreen(eyePos);
                Render_FilledCircle(screenPos[0] + 1, screenPos[1], 7, [0, 0, 0, 150]);
                Render_Circle(screenPos[0] + 1, screenPos[1], 7, [255, 255, 255, 255]);
            }*/
        } else {
            eyePos[2] = origin[2] + 46 + (18 - 1 / 100 * 18);
            origin[2] += 46 + (18 - 1 / 100 * 18);
            /*if (UI_GetValue([Misc, "Keys", General, "Key assignment", "Thirdperson"]) && isDraw) {
                var screenPos = Render_WorldToScreen(eyePos);
                Render_FilledCircle(screenPos[0] + 1, screenPos[1], 7, [0, 0, 0, 150]);
                Render_Circle(screenPos[0] + 1, screenPos[1], 7, [255, 255, 255, 255]);
            }*/
        }
    } else {
        origin[2] += Entity.GetProp(Entity.GetLocalPlayer(), "CBasePlayer", "m_vecViewOffset[2]")[0];
    }
    var angles = Local.GetViewAngles();
    angles[0] = angles[0] * -1;
    if (angles[1] > 0) {
        angles[1] = angles[1] - 180;
    } else {
        angles[1] = 180 + angles[1];
    }
    cameraData.pop();
    cameraData.unshift([eyePos, angles]);
    positionData.pop();
    positionData.unshift(origin);
    showDelayedCamera();
}

var lastCameraAngle = [0, 0, 0];
var decVal = 0;
var decVelo = 0;

function showDelayedCamera() {
    if (!UI.GetValue(["Config", "FS -> Visuals", "FS -> Visuals", "Free camera"]) || !UI.GetValue(["Config", "FS -> Visuals", "FS -> Visuals", "Free camera"])) return;
    if (UI.GetValue(["Config", "FS -> Visuals", "FS -> Visuals", "Free camera"]) && cameraData[UI.GetValue(["Config", "FS -> Visuals", "FS -> Visuals", "Free camera following speed"]) - 1 - Math.floor(decVal)][0][0] != 0 && UI.GetValue(["Misc.", "Keys", "General", "Key assignment", "Thirdperson"]) == 1 && Entity.IsAlive(Entity.GetLocalPlayer())) {
        var localAngles = Local.GetViewAngles();
        localAngles[0] = localAngles[0] * -1;
        if (localAngles[1] > 0) {
            localAngles[1] = localAngles[1] - 180;
        } else {
            localAngles[1] = 180 + localAngles[1];
        }
        if (localAngles[0] != lastCameraAngle[0] || localAngles[1] != lastCameraAngle[1]) {
            if (decVal < (UI.GetValue(["Config", "FS -> Visuals", "FS -> Visuals", "Free camera following speed"]) * 0.6) - 2) {
                decVelo = 0.1;
            } else {
                decVelo = 0;
            }
        } else {
            if (decVal > 1) {
                decVelo = -0.3;
            } else {
                decVelo = 0;
            }
        }
        if (decVelo != 0) {
            if (decVal <= UI.GetValue(["Config", "FS -> Visuals", "FS -> Visuals", "Free camera following speed"]) - 1 && decVal >= 0) {
                decVal += decVelo;
            }
        }
        lastCameraAngle = cameraData[UI.GetValue(["Config", "FS -> Visuals", "FS -> Visuals", "Free camera following speed"]) - 1 - Math.floor(decVal)][1];
        var eyePos = cameraData[UI.GetValue(["Config", "FS -> Visuals", "FS -> Visuals", "Free camera following speed"]) - 1 - Math.floor(decVal)][0];
        var angles = cameraData[UI.GetValue(["Config", "FS -> Visuals", "FS -> Visuals", "Free camera following speed"]) - 1 - Math.floor(decVal)][1];
        var vector = FS.ExtendFunction.ANGLE2VEC(angles);
        var cameraPos = [eyePos[0] + vector[0] * thirdDistance, eyePos[1] + vector[1] * thirdDistance, eyePos[2] + vector[2] * thirdDistance];
        Local.SetCameraPosition(cameraPos);
    }
}

function calcDelayedCamera() {
    if (!UI.GetValue(["Config", "FS -> Visuals", "FS -> Visuals", "Free camera"]) || !UI.GetValue(["Config", "FS -> Visuals", "FS -> Visuals", "Free camera"])) return;
    if (UI.GetValue(["Config", "FS -> Visuals", "FS -> Visuals", "Free camera"]) && cameraData[UI.GetValue(["Config", "FS -> Visuals", "FS -> Visuals", "Free camera following speed"]) - 1][0][0] != 0 && UI.GetValue(["Misc.", "Keys", "General", "Key assignment", "Thirdperson"]) == 1 && Entity.IsAlive(Entity.GetLocalPlayer())) {
        var angles = cameraData[UI.GetValue(["Config", "FS -> Visuals", "FS -> Visuals", "Free camera following speed"]) - 1][1];
        var back = FS.ExtendFunction.getWallDistanceWithOrigin(Entity.GetLocalPlayer(), angles, positionData[UI.GetValue(["Config", "FS -> Visuals", "FS -> Visuals", "Free camera following speed"]) - 1]);
        var thirdDistanceCache = UI.GetValue(["Misc.", "View", "General", "Thirdperson Distance"])
        if (back - 30 < thirdDistanceCache) {
            thirdDistance = back - 35;
        } else {
            if (thirdDistanceCache > thirdDistance) {
                thirdDistance += 3;
            }
        }
        delayCamera(false);
    }
}

//Destroy watermark

function Destroy_watermark() {
    if (!Entity.IsAlive(Entity.GetLocalPlayer())) return;

    const font = Add_font("segoeuib.ttf", 11);
    const pos_x = UI.GetValue(["Config", "FS -> Visuals", "FS -> Visuals", "Pos - x"])
    const pos_y = UI.GetValue(["Config", "FS -> Visuals", "FS -> Visuals", "Pos - y"])
    const texture_mode = UI.GetValue(["Config", "FS -> Visuals", "FS -> Visuals", "Head portrait mode"])
    const texture = Render.AddTexture("ot/scripts/Head portrait.png");
    const money = Get_Prop("CCSPlayer", "m_iAccount")
    var weapon = FS.ExtendFunction.getCurrentWeapon(Entity.GetLocalPlayer());
    if (weapon == "General") {
        var weapon = "Knife"
    }
    const hp = Get_Prop("CBasePlayer", "m_iHealth");
    const wide = Render.TextSize(Cheat.GetUsername(), font)
    Render.FilledRect(pos_x - 110, pos_y - 10, 60, 20, [15, 15, 15, 255]);
    Render.GradientRect(pos_x - 130, pos_y - 10, 20, 20, 1, [0, 0, 0, 0], [15, 15, 15, 255]);
    Render.FilledRect(pos_x + 63, pos_y, 105, 20, [15, 15, 15, 255]);
    Render.GradientRect(pos_x + 168, pos_y, 20, 20, 1, [15, 15, 15, 255], [0, 0, 0, 0]);
    //128 20
    Render.FilledRect(pos_x + 59, pos_y - 28, wide[0] + 95, 20, [15, 15, 15, 255]);
    Render.GradientRect(pos_x + wide[0] + 154, pos_y - 28, 20, 20, 1, [15, 15, 15, 255], [0, 0, 0, 0]);

    Render.FilledCircle(pos_x, pos_y, 65, [15, 15, 15, 255]);
    Render.FilledCircle(pos_x, pos_y, 43, [30, 30, 30, 255]);
    if (texture_mode == 0) {
        Render.String(pos_x - 10, pos_y - 30, 0, "?", [255, 255, 255, 255], Add_font("segoeuib.ttf", 40))
    } else {
        Render.TexturedRect(pos_x - 41.5, pos_y - 41.5, 83, 83, texture);
        FS.ExtendFunction.draw_arc_state(pos_x, pos_y, 64, 45, 0, 360, 75, [15, 15, 15, 255])

    }
    FS.ExtendFunction.draw_circle(pos_x, pos_y, 46, 5, [20, 20, 20, 160])
    FS.ExtendFunction.draw_arc_state(pos_x, pos_y, 65, 62, 352, 100, 36, [20, 20, 20, 160])
    FS.ExtendFunction.draw_arc_state(pos_x, pos_y, 45, 42, 0, multiply(arm, 3.6), 36, [61, 122, 197, 255])
    FS.ExtendFunction.draw_arc_state(pos_x, pos_y, 65, 62, 352, multiply(hp, 3.4) + 1, 36, [47, 223, 34, 255])
    Render.String(pos_x - 105, pos_y - 7.5, 0, hp + " hp", [57, 233, 44, 255], font)
    Render.String(pos_x + 68, pos_y - 25, 0, Cheat.GetUsername() + " - WP: " + weapon, [255, 255, 255, 255], font)
    Render.String(pos_x + 68, pos_y + 3, 0, "Adventurer", [198, 170, 103, 255], font)
    Render.String(pos_x + 126, pos_y + 3, 0, " - $" + money, [255, 255, 255, 255], font)
}


//Weapon indicator

var Weapon_icon_list = {
    "61": "G",
    "4": "D",
    "2": "B",
    "64": "J",
    "1": "A",
    "36": "F",
    "30": "H",
    "34": "O",
    "17": "K",
    "26": "M",
    "24": "L",
    "7": "W",
    "39": "V",
    "8": "U",
    "60": "T",
    "16": "S",
    "40": "a",
    "9": "Z",
    "11": "X",
    "38": "Y",
    "25": "b",
    "27": "d",
    "14": "g",
    "28": "f",
    "32": "E",
    "10": "R",
    "3": "C",
    "33": "N",
    "24": "L",
    "19": "P",
    "63": "I",
    "23": "N",
    "13": "Q",
    "29": "c",
    "31": 'h',
    '35': "e",
    '44': 'j',
    '45': 'k',
    '46': 'l',
    '48': 'n',
    '43': 'm',
    '47': 'i',
    '49': 'o',
    "500": '1',
    "505": '2',
    "506": '3',
    "507": '4',
    "508": '5',
    "515": '8',
    "512": '0',
    "516": '9',
    "514": '7',
    "509": '6',
    '59': '1'
};

function Get_weapon_icon() {
    var weapon = Entity.GetProp(Entity.GetWeapon(Entity.GetLocalPlayer()), "CBaseAttributableItem", "m_iItemDefinitionIndex") & 0xFFFF;
    if (Weapon_icon_list[weapon] == undefined) {
        var weapon = "59"
    }
    return Weapon_icon_list[weapon]
}

function Get_weapon_icon_font(size) {
    const font = Render.GetFont("Wepon icon.ttf", size, false)
    if (!font) {
        Cheat.PrintChat("未找到Wepon icon.ttf 请将此文件放在脚本目录\n");
        Cheat.PrintLog("--> 未找到 Wepon icon.ttf 请将此文件放在脚本目录\n", [255, 100, 100, 255])
        Draw_actionbar(screen_size[0] / 2 - 50, 765, "Undefined font 'Wepon icon.ttf' please Install font")
        return false;
    }else{
        return font;
    }
}

function Get_bullet_icon_font(size) {
    const font = Render.GetFont("weaponbullet.ttf", size, false)
    if (!font) {
        Cheat.PrintChat("未找到weaponbullet.ttf 请将此文件放在脚本目录\n");
        Cheat.PrintLog("--> 未找到 weaponbullet.ttf 请将此文件放在脚本目录\n", [255, 100, 100, 255])
        Draw_actionbar(screen_size[0] / 2 - 50, 765, "Undefined font 'weaponbullet.ttf' please Install font")
        return false;
    }else{
        return font;
    }
}

function Weapon_indicator() {
    if (!Entity.IsAlive(Entity.GetLocalPlayer())) return;

    if (!Get_weapon_icon_font(60)) {
        return;
    }

    const Weapon_indicatorX = UI.GetValue(["Config", "FS -> Visuals", "FS -> Visuals", "Pos x"])
    const Weapon_indicatorY = UI.GetValue(["Config", "FS -> Visuals", "FS -> Visuals", "Pos y"])
    const weapon_font = Get_weapon_icon_font(60)
    const Weapon_Indicator_Font = Add_font("segoeuib.ttf", 30);
    const Weapon_Indicator_Font_Small = Add_font("segoeuib.ttf", 18);

    var bullets = Entity.GetProp(Entity.GetWeapon(Entity.GetLocalPlayer()), 'CBaseCombatWeapon', 'm_iClip1')
    var weapon_name = FS.ExtendFunction.getCurrentWeapon(Entity.GetLocalPlayer());
    if (weapon_name == "General") {
        var weapon_name = "Knife"
    }
    if (bullets < 0) {
        var bullets = 0
    }

    Render.String(Weapon_indicatorX + 5, Weapon_indicatorY - 5, 1, Get_weapon_icon(), [150, 50, 50, 150], weapon_font)
    Render.String(Weapon_indicatorX, Weapon_indicatorY, 1, Get_weapon_icon(), [255, 100, 100, 250], weapon_font)

    Render.String(Weapon_indicatorX, Weapon_indicatorY - 40, 1, weapon_name, [150, 50, 50, 150], Weapon_Indicator_Font_Small)
    Render.String(Weapon_indicatorX - 2, Weapon_indicatorY - 35, 1, weapon_name, [255, 100, 100, 250], Weapon_Indicator_Font_Small)

    Render.String(Weapon_indicatorX - 115, Weapon_indicatorY + 2, 1, bullets.toString(), [50, 50, 150, 150], Weapon_Indicator_Font)

    Render.String(Weapon_indicatorX - 120, Weapon_indicatorY + 7, 1, bullets.toString(), [100, 100, 255, 250], Weapon_Indicator_Font)
}

//Active head circle
var multhp = 3.6
var multarc = 6.5
var multfl = 24
var World_head_Pos = []
var Head_Pos = []

function Head_Circle() {
    if (!Entity.IsAlive(Entity.GetLocalPlayer())) return;

    World_head_Pos = GetHitboxPosition(Entity.GetLocalPlayer(), 0)
    Head_Pos = WorldToScreen(World_head_Pos)
    const Fake_Arc = Math.ceil(Math.abs(FS.ExtendFunction.normalize_yaw(Local.GetRealYaw() % 360 - Local.GetFakeYaw() % 360)) / 2);
    const Choke_tick = Globals.ChokedCommands();

    if (UI.GetValue(["Misc.", "Keys", "General", "Key assignment", "Thirdperson"])) {
        FS.ExtendFunction.draw_arc_state(Head_Pos[0] - 165, Head_Pos[1] - 120, 32, 8, 0, 360, 66, [10, 10, 10, 120])
        FS.ExtendFunction.draw_arc_state(Head_Pos[0] - 165, Head_Pos[1] - 120, 34, 10, 0, multiply(hp, multhp), 66, [50, 200, 50, 255])

        FS.ExtendFunction.draw_arc_state(Head_Pos[0] - 165, Head_Pos[1] - 120, 42, 36, 0, 360, 44, [10, 10, 10, 120])
        FS.ExtendFunction.draw_arc_state(Head_Pos[0] - 165, Head_Pos[1] - 120, 42, 36, 0, multiply(Fake_Arc, multarc), 44, [50, 200, 50, 255])


        FS.ExtendFunction.draw_arc_state(Head_Pos[0] - 165, Head_Pos[1] - 120, 50, 44, 0, 360, 44, [10, 10, 10, 120])
        FS.ExtendFunction.draw_arc_state(Head_Pos[0] - 165, Head_Pos[1] - 120, 50, 44, 0, multiply(Choke_tick, multfl), 44, [50, 200, 50, 255])
    }
}

function GetHitboxPosition(Player_index, Hitbox_index) {
    const pos = Entity.GetHitboxPosition(Player_index, Hitbox_index)
    return pos;
}

function WorldToScreen(point) {
        const screen = Render.WorldToScreen(point)
        return screen;
    }
    //Heaven arrow

const Entity_IsValid = Entity.IsValid
const Entity_IsAlive = Entity.IsAlive

function Get_arrow_color(player) {
    const color = UI.GetColor(["Config", "FS -> Visuals", "FS -> Visuals", "Active arrow color"])
    var alpha = 50 + FS.ExtendFunction.getVelocity(player)
    if (alpha > 255) {
        var alpha = 255
    } else if (alpha < 5) {
        var alpha = 50
    }

    return [color[0], color[1], color[2], alpha]
}

function DrawArrow() {
    if (!Entity.IsAlive(Entity.GetLocalPlayer()) || !UI.GetValue(["Config", "FS -> Visuals", "FS -> Visuals", "Enable Heaven arrow"])) return;

    const players_ab = Entity.GetEnemies();
    const local_origin = Entity.GetRenderOrigin(Entity.GetLocalPlayer());
    const view_angles = Local.GetViewAngles();
    const view_yaw = view_angles[1] - 180


    for (var ab = 0; ab < players_ab.length; ab++) {
        const player_for = players_ab[ab]
        if (Entity_IsValid(player_for) == 1 && Entity_IsAlive(player_for) == 1) {
            const player_origin = Entity.GetRenderOrigin(player_for);
            const yaw_cal = FS.ExtendFunction.calculate_yaw(local_origin, player_origin);
            const yaw_Orgin = adjust_angle(yaw_cal - view_yaw);
            const a = 320 + ab * 20

            if (!Entity.IsValid(player_for) || !Entity.IsAlive(player_for)) {
                continue;
            }
            if (Entity.IsDormant(player_for) && FS.ExtendFunction.getVelocity(player_for) < 30) {
                continue;
            }
            if (FS.ExtendFunction.world_point_visible(player_origin) && !Entity.IsDormant(player_for)) {
                FS.ExtendFunction.draw_arc_state(screen_size[0] / 2, screen_size[1] / 2, a, a - 18, yaw_Orgin - 15, 30, 66, Get_arrow_color(player_for));
            } else if (!FS.ExtendFunction.world_point_visible(player_origin) && !Entity.IsDormant(player_for)) {
                FS.ExtendFunction.draw_arc_state(screen_size[0] / 2, screen_size[1] / 2, a, a - 18, yaw_Orgin - 15, 30, 66, [180, 180, 180, 120])
            } else if (Entity.IsDormant(player_for) && Entity.GetRenderBox(player_for)[0]) {
                FS.ExtendFunction.draw_arc_state(screen_size[0] / 2, screen_size[1] / 2, a, a - 18, yaw_Orgin - 15, 30, 66, [80, 80, 80, 60])
            }
        }
    }
}

function adjust_angle(angle) {
    if (angle < 0) {
        angle = (90 + angle * (-1));
    } else if (angle > 0) {
        angle = (90 - angle);
    }
    return angle;
}


//Hiteffect

var alpha = 0;
var size = 0;

function hit_effect() {
    if (alpha === 0)
        return;

    const inc_alpha = ((1 / UI.GetValue(["Config", "FS -> Visuals", "FS -> Visuals", "Hit effect"])) * Global.Frametime()) * 255
    const inc_size = ((1 / UI.GetValue(["Config", "FS -> Visuals", "FS -> Visuals", "Hit effect"])) * Global.Frametime()) * 360

    alpha = clamp(alpha - inc_alpha, 0, 255);
    size = clamp(size - inc_size, 0, 360);

    const x = screen_size[0],
        y = screen_size[1];

    Render.GradientRect(0, 0, x, size, 0, [128, 195, 255, alpha], [128, 195, 255, 0]);
    Render.GradientRect(0, y - size, x, size, 0, [128, 195, 255, 0], [128, 195, 255, alpha]);
    Render.GradientRect(x - size, 0, size, y, 1, [128, 195, 255, 0], [128, 195, 255, alpha]);
    Render.GradientRect(0, 0, size, y, 1, [128, 195, 255, alpha], [128, 195, 255, 0]);
}

//watermark
/*
function Watermark() {
    if (!World.GetServerString())
        return;
    var width = Global.GetScreenSize()[0];
    var Font_big = Add_font("segoeuib.ttf", 18);
    var Font_Small = Add_font("segoeuib.ttf", 16);
    var Font = Add_font("segoeuib.ttf",18);

    var user = Cheat.GetUsername();
    var today = new Date();
    var hours1 = today.getHours();
    var minutes1 = today.getMinutes();
    var seconds1 = today.getSeconds();

    var hours = hours1 <= 9 ? "0" + hours1 + ":" : hours1 + ":";
    var minutes = minutes1 <= 9 ? "0" + minutes1 + ":" : minutes1 + ":";
    var seconds = seconds1 <= 9 ? "0" + seconds1 : seconds1;

    var Ping = Math.round(Get_Prop("CPlayerResource", "m_iPing")).toString()
    var server = World.GetServerString();

    var tickcount = Global.Tickcount();
    var color = RGB(tickcount % 350 / 350, 1, 1, 1, 255);
    Render.Rect(width - 300, 30, 290, 50, [200, 200, 200, 255]);
    Render.Rect(width - 300, 29, 291, 52, [200, 200, 200, 255]);
    Render.GradientRect(width - 300, 30, 290, 50, 1, [20, 20, 20, 255], [20, 20, 20, 100]);
    Render.GradientRect(width - 265, 52, 250, 2, 1, [color.r, color.b, color.g, 255], [color.g, color.r, color.b, 50]);

    Render.FilledCircle(width - 300, 50, 35, [10, 10, 10, 255]);
    Render.Circle(width - 300, 50, 33, [200, 200, 200, 255]);
    Render.Circle(width - 300, 50, 34, [200, 200, 200, 255]);
    Render.Circle(width - 300, 50, 35, [200, 200, 200, 255]);

    Render.String(width - 326, 30, 0, "Future", [color.r, color.g, color.b, 255], Font_big)
    Render.String(width - 324, 50, 0, "Sense", [3, 131, 31, 200], Font)

    Render.String(width - 260, 30, 0, "User:", [135, 206, 250, 255], Font)
    Render.String(width - 210, 32, 0, user, [200, 200, 205, 255], Font_Small)

    Render.String(width - 140, 30, 0, "| Time:", [135, 206, 250, 255], Font)
    Render.String(width - 75, 32, 0, hours + minutes + seconds, [200, 200, 205, 255], Font_Small)

    Render.String(width - 260, 55, 0, "Ping:", [135, 206, 250, 255], Font)
    Render.String(width - 218, 58, 0, Ping + "ms", [200, 200, 205, 255], Font_Small)

    Render.String(width - 180, 55, 0, "| IP:", [135, 206, 250, 255], Font)
    Render.String(width - 145, 58, 0, server, [200, 200, 205, 255], Font_Small)

}
*/
function Watermark() {
    if (!World.GetServerString())
        return;
    const color = UI.GetColor(["Config", "FS -> Visuals", "FS -> Visuals", "Watermark color"])
    const today = new Date();
    const hours1 = today.getHours();
    const minutes1 = today.getMinutes();
    const seconds1 = today.getSeconds();

    const hours = hours1 <= 9 ? "0" + hours1 + ":" : hours1 + ":";
    const minutes = minutes1 <= 9 ? "0" + minutes1 + ":" : minutes1 + ":";
    const seconds = seconds1 <= 9 ? "0" + seconds1 : seconds1;

    const server_tickrate = Globals.Tickrate().toString()
    const ebanaya_hueta = Math.round(Get_Prop("CPlayerResource", "m_iPing")).toString()
    const font = Add_font("segoeuib.ttf", 10);
    const text = "Futuresense.uno | " + Cheat.GetUsername() + " | delay: " + ebanaya_hueta + "ms | " + server_tickrate + "tick | " + hours + minutes + seconds;

    const w = Render.TextSize(text, font)[0] + 10;


    const x = screen_size[0] - w - 10;
    //61 122 197
    Render.FilledRect(x, 12, w, 18, [17, 17, 17, 120]);
    Render.GradientRect(x - 2, 13, 3, 17, 0, [color[0], color[1], color[2], 1], [color[0], color[1], color[2], 255]);
    Render.GradientRect(x, 27, 60, 3, 1, [color[0], color[1], color[2], 255], [color[0], color[1], color[2], 10]);
    Render.GradientRect(screen_size[0] - Render.TextSize(text, font)[1] - 58, 11, 60, 3, 1, [color[0], color[1], color[2], 1], [color[0], color[1], color[2], 255]);
    Render.GradientRect(screen_size[0] - w / 25, 12, 3, 17, 0, [color[0], color[1], color[2], 255], [color[0], color[1], color[2], 10]);
    Render.String(x + 3, 13, 0, text, [255, 255, 255, 255], font);
}

//Rainbow trail


function rgb(speed) {
    const r = Math.floor(Math.sin(Date.now() * speed) * 127 + 128)
    const g = Math.floor(Math.sin(Date.now() * speed + 2) * 127 + 128)
    const b = Math.floor(Math.sin(Date.now() * speed + 4) * 127 + 128)
    return [r, g, b]
}

var a_1 = []
var b_1 = []
var c = 0
var Trail_alpha = 150

function Rainbow_trail() {
    if (!Entity.IsValid(Entity.GetLocalPlayer()) || !Entity.IsAlive(Entity.GetLocalPlayer())) {
        a_1 = []
        return;
    }
    if (Date.now() > c && FS.ExtendFunction.getVelocity(Entity.GetLocalPlayer()) > 3) {
        a_1.push(Entity.GetRenderOrigin(Entity.GetLocalPlayer()))
        b_1.push(rgb(UI.GetValue(["Config", "FS -> Visuals", "FS -> Visuals", "Rainbow Speed"]) / 1000))
        c = Date.now() + 5
    }

    if (a_1.length > UI.GetValue(["Config", "FS -> Visuals", "FS -> Visuals", "Residene time"]) * 5) {
        while (a_1.length > UI.GetValue(["Config", "FS -> Visuals", "FS -> Visuals", "Residene time"]) * 5) {
            a_1.shift()
            b_1.shift()
        }
    }

    if (FS.ExtendFunction.getVelocity(Entity.GetLocalPlayer()) < 3) {
        a_1.shift()
        b_1.shift()
        Trail_alpha = 10
    } else {
        Trail_alpha = 150
    }


    for (var i = 0; i < a_1.length - 1; i++) {
        const d = WorldToScreen(a_1[i])
        const e = WorldToScreen(a_1[i + 1])
        const f = b_1[i].concat(Trail_alpha)

        Render.Line(d[0], d[1], e[0], e[1], f)

        if (UI.GetValue(["Config", "FS -> Visuals", "FS -> Visuals", "Thickness"]) > 1) {
            Render.Line(d[0] + 1, d[1] - 1, e[0] + 1, e[1] - 1, f)
            Render.Line(d[0] - 1, d[1] + 1, e[0] - 1, e[1] + 1, f)

            Render.Line(d[0] + 1, d[1] + 1, e[0] + 1, e[1] + 1, f)
            Render.Line(d[0] - 1, d[1] - 1, e[0] - 1, e[1] - 1, f)

            Render.Line(d[0] + 1, d[1] + 1, e[0] - 1, e[1] - 1, f)
            Render.Line(d[0] - 1, d[1] - 1, e[0] + 1, e[1] + 1, f)
        }

        if (UI.GetValue(["Config", "FS -> Visuals", "FS -> Visuals", "Thickness"]) == 3) {
            Render.Line(d[0] + 2, d[1] - 2, e[0] + 2, e[1] - 2, f)
            Render.Line(d[0] - 2, d[1] + 2, e[0] - 2, e[1] + 2, f)

            Render.Line(d[0] + 2, d[1] + 2, e[0] + 2, e[1] + 2, f)
            Render.Line(d[0] - 2, d[1] - 2, e[0] - 2, e[1] - 2, f)

            Render.Line(d[0] + 2, d[1] + 2, e[0] - 2, e[1] - 2, f)
            Render.Line(d[0] - 2, d[1] - 2, e[0] + 2, e[1] + 2, f)
        }
    }
}

//Cool Box ESP

function CoolBoxESP() {
        const plr = Entity.GetEntities()
        if (UI.GetValue(["Config", "FS -> Visuals", "FS -> Visuals", "health based color"]) == 0) {
            var clr1 = UI.GetColor(["Config", "FS -> Visuals", "FS -> Visuals", "Cool Box 1"])
            var clr2 = UI.GetColor(["Config", "FS -> Visuals", "FS -> Visuals", "Cool Box 2"])
            if (clr1[3] >= 128) {
                clr1[3] = 128
            }
        }
        for (i = 0; i < plr.length; i++) {
            if (UI.GetValue(["Config", "FS -> Visuals", "FS -> Visuals", "health based color"]) == 1) {
                const hp = Entity.GetProp(plr[i], "CBasePlayer", "m_iHealth")
                var clr1 = [250 - multiply(hp, 2.5), 5 + multiply(hp, 2.5), 0, 0]
                var clr2 = [250 - multiply(hp, 2.5), 5 + multiply(hp, 2.5), 0, 100]
            }

            if (!Entity.IsEnemy(plr[i]) || !Entity.IsAlive(plr[i]) || Entity.IsDormant(plr[i]) || !Entity.IsValid(plr[i])) {
                continue;
            }
            const bounds = Entity.GetRenderBox(plr[i])
            if (bounds[0] == 1) {
                Render.GradientRect(bounds[1], bounds[2], bounds[3] - bounds[1], bounds[4] - bounds[2], 0, [clr1[0], clr1[1], clr1[2], clr1[3]], [clr2[0], clr2[1], clr2[2], clr2[3]])
            }

        }
    }

//DT indicator

const states = "Dormant"
const UI_wh = {
    height : 0,
    width : 0,
    bar_width : 0,
    txt : " Future3.0 || TickBase(V) : 17 || States : " + states + " ",
    alpha : 0,
    Amin_speed : 4
}

function Recharge_indicator() {
    if (!Entity.IsAlive(Entity.GetLocalPlayer()) || !Get_weapon_icon_font(18) || !Get_bullet_icon_font(18)) return;

   const X = UI.GetValue(["Config", "FS -> Visuals", "FS -> Visuals","Pos X"])
   const Y = UI.GetValue(["Config", "FS -> Visuals", "FS -> Visuals","Pos Y"])
   const font = Add_font("segoeuib.ttf", 10)
   const txt_size = Render.TextSize(UI_wh.txt,font)
   const color = UI.GetColor(["Config", "FS -> Visuals", "FS -> Visuals","Bar color"])
   const weapon_font = Get_weapon_icon_font(18)
   const bullet_icon = Get_bullet_icon_font(16)
   if(UI.GetValue(["Rage", "Exploits", "Keys", "Double tap"])) {
       const recharge = Exploit.GetCharge()

       if(UI_wh.height < txt_size[1] + 5) {
         UI_wh.height = UI_wh.height + UI_wh.Amin_speed
       }
       if(UI_wh.width < txt_size[0]) {
        UI_wh.width = UI_wh.width + UI_wh.Amin_speed
       }
       if(UI_wh.alpha < 255) {
        UI_wh.alpha = UI_wh.alpha + UI_wh.Amin_speed
       }
       if(UI_wh.alpha > 255) {
        UI_wh.alpha = 255
       }
       if(recharge == 1 && UI_wh.bar_width < UI_wh.width) {
        UI_wh.bar_width = UI_wh.bar_width + UI_wh.Amin_speed
       }
       if(recharge != 1 && UI_wh.bar_width > 5) {
        UI_wh.bar_width = UI_wh.bar_width - UI_wh.Amin_speed
       }
       if(recharge == 1) {
        states = "Active"
       }else{
        states = "Dormant"
       }
       UI_wh.txt = "  Future3.0 || TickBase(V) : 17 || States : " + states + " "

   }else{
    if(UI_wh.height > 0) {
        UI_wh.height = UI_wh.height - UI_wh.Amin_speed
      }
      if(UI_wh.width > 0) {
       UI_wh.width = UI_wh.width - UI_wh.Amin_speed
      }  
      if(UI_wh.bar_width > 0) {
        UI_wh.bar_width = UI_wh.bar_width - UI_wh.Amin_speed
       }
       if(UI_wh.alpha > 0) {
        UI_wh.alpha = UI_wh.alpha - UI_wh.Amin_speed
       }
   }

   if(UI_wh.height != 0 && UI_wh.width != 0) {
    Render.FilledRect( X, Y - (txt_size[1] - 3), UI_wh.bar_width, 5, [color[0],color[1],color[2],255] );
    Render.FilledRect( X, Y, UI_wh.width, UI_wh.height, [ 0, 0, 0, 120 ]);
    Render.FilledRect( X, Y, 4, UI_wh.height, [color[0],color[1],color[2],255] );

      Render.String(X-1,Y-1,0,UI_wh.txt,[0,0,0,UI_wh.alpha],font)
      Render.String(X,Y,0,UI_wh.txt,[200,200,200,UI_wh.alpha],font)

      Render.String(X + 5,Y + 16,0,Get_weapon_icon(),[255,255,255,UI_wh.alpha],weapon_font)

      if(recharge == 1) {
        Render.String(X + 80,Y + 16,0,"AA",[255,255,255,UI_wh.alpha], bullet_icon)
      }else{
        Render.String(X + 80,Y + 16,0,"A",[255,255,255,UI_wh.alpha], bullet_icon)
      }

   }
}

//Scope fov

var normal_fov = UI.GetValue(["Misc.", "View", "General", "Field of view"])

function Scope_fov() {
        const is_scoped = Get_Prop("CCSPlayer", "m_bIsScoped")
        const scope_fov = UI.GetValue(["Config", "FS -> Visuals", "FS -> Visuals", "Scope fov range"])

        if (is_scoped) {
            UI.SetValue(["Misc.", "View", "General", "Field of view"], scope_fov)
        } else {
            UI.SetValue(["Misc.", "View", "General", "Field of view"], normal_fov)
        }
    }
    //clantag

var currentTick = 0;
var lastTick = 0;
var tag = "";
var slc = 0;

function cttolefttype(inputct) {
    const clantag_array = [];
    const str = inputct;
    const clntag_length = str.length;
    const i_a = 0;
    const i_i = clntag_length - 1;
    while (true) {
        if (i_a >= clntag_length + 1) {
            clantag_array.push(str.slice(0, clntag_length - i_i));
            i_i = i_i - 1;
            if (i_i == 0) {
                break;
            }
        } else {
            clantag_array.push(str.slice(0, clntag_length - i_a));
            i_a = i_a + 1;
        }
    }
    return (clantag_array)
}

function Clantag() {
    if (tag == "" || tag == " " || tag == "  " || tag == "   ") {
        var tag = "FutureSense.uno "
    } else {
        var tag = UI.GetString(["Config", "FS -> Visuals", "FS -> Visuals", "Custom Clantag"]);
    }
    currentTick = parseInt(multiply(Globals.Curtime(), 1000));
    if (currentTick - (10000 / UI.GetValue(["Config", "FS -> Visuals", "FS -> Visuals", "Clantag Speed"])) >= lastTick) {
        if (tag.length < 17 && tag.length > 3) {
            const array_clantag = cttolefttype(tag)
            Local.SetClanTag(array_clantag[slc]);
            if (slc == array_clantag.length - 1) {
                slc = 0
            } else {
                slc = slc + 1
            }
            lastTick = currentTick;
        }

    }
}


var maxLevel = 25;
var duckCount = 0;

function fastDuckUpdate() {
    const buttons = UserCMD.GetButtons();
    const valve = Entity.GetProp(Entity.GetGameRulesProxy(), "CCSGameRulesProxy", "m_bIsValveDS");
    const localPlayer = Entity.GetLocalPlayer();

    if (valve) {
        if (!UI.GetValue(["Rage", "Anti Aim", "General", "Key assignment", "Fake duck"])) {
            UserCMD.SetButtons(buttons | (1 << 22))
        }
        if (UI.GetValue(["Rage", "Anti Aim", "General", "Key assignment", "Fake duck"])) {
            const duckAmount = Get_Prop("CCSPlayer", "m_flDuckAmount");
            maxLevel = 8;
            duckCount++;
            if (duckCount > 20) {
                duckLevel = 10;
                if (duckCount > 28) {
                    duckCount = 0;
                }
            } else {
                duckLevel = 74;
            }
            UserCMD.Choke();
            if (duckAmount <= duckLevel / 100) {
                AntiAim.SetOverride(0);
                crouched = true
            };
            if (duckAmount >= 0.74) {
                crouched = false;
                UserCMD.Send()
            };
            if (duckAmount > 0.40) {
                AntiAim.SetOverride(0);
                UserCMD.Send()
            }
            if (While_shot == true) {
                UserCMD.Send();
                UI.ToggleHotkey(["Rage", "Anti Aim", "General", "Key assignment", "AA Direction inverter"]);
            }
            if (crouched) {
                UserCMD.SetButtons(buttons | (1 << 2));
            } else {
                UserCMD.SetButtons(buttons | (1 << 22));
            }
            if (!UI.GetValue(["Config", "FS -> Visuals", "FS -> Visuals", "Free camera"]) || UI.GetValue(["Misc.", "Keys", "General", "Key assignment", "Thirdperson"]) === 0) {
                eyePos = Entity.GetEyePosition(localPlayer);
                origin = Entity.GetRenderOrigin(Entity.GetLocalPlayer());
                eyePos[2] = origin[2] + 46 + (18 - (maxLevel + 1) / 100 * 18);
                cameraPos = Local.GetCameraPosition();
                if (UI.GetValue(["Misc.", "Keys", "General", "Key assignment", "Thirdperson"]) === 1) {
                    angles = Local.GetViewAngles();
                    angles[0] = angles[0] * -1;
                    if (angles[1] > 0) {
                        angles[1] = angles[1] - 180;
                    } else {
                        angles[1] = 180 + angles[1];
                    }
                    back = FS.ExtendFunction.getWallDistance(localPlayer, angles);
                    angles = FS.ExtendFunction.ANGLE2VEC(angles);
                    thirdDistanceCache = UI.GetValue(["Misc.", "View", "General", "Thirdperson Distance"]);
                    if (back < thirdDistanceCache) {
                        thirdDistance = back - 15;
                    } else {
                        if (thirdDistanceCache > thirdDistance) {
                            thirdDistance++;
                        }
                    }
                    Local.SetCameraPosition([eyePos[0] + angles[0] * thirdDistance, eyePos[1] + angles[1] * thirdDistance, eyePos[2] + angles[2] * thirdDistance]);
                } else {
                    Local.SetCameraPosition([eyePos[0], eyePos[1], eyePos[2]]);
                }
            }
        }
    } else if (!valve && !UI.GetValue(["Rage", "Anti Aim", "General", "Key assignment", "Fake duck"])) {
        UserCMD.SetButtons(buttons | (1 << 22));
    }
}


//Advanced logs

var hitboxes = [
    '头部',
    '头部',
    '胸部',
    '胃部',
    '左手',
    '右手',
    '左腿',
    '右腿',
    '?'
];

function HitgroupName(index) {
    return hitboxes[index] || 'body';
}

/*var tickRepeated = false;
var reason;
var detailedChatLog = []
var lastTickcount;

function Draw_hitlog() {
    if (!World.GetServerString()) return;
    if (lastTickcount == Globals.Tickcount()) {
        tickRepeated = true;
    } else {
        tickRepeated = false;
        lastTickcount = Globals.Tickcount();
    }
    if (!tickRepeated && Globals.Tickcount() % 16 === 0 && detailedChatLog.length != 0) {
        var currentTickCount = Globals.Tickcount();
        for (var i = 0; i < detailedChatLog.length; i++) {
            if (!Entity.IsAlive(Entity.GetLocalPlayer())) {
                Cheat.PrintChat("\x01[ Future\x06sense\x01 ] \x03空了\x08 " + Entity.GetName(detailedChatLog[i]["target"]) + " 的 \x10" + detailedChatLog[i]["hitbox"] + "\x08 原因 [\x07Death\x08]" + "\x08  (" + getHitchanceColor(detailedChatLog[i]["hitchance"]) + detailedChatLog[i]["hitchance"] + "%\x08)");
                detailedChatLog = [];
                break;
            }
            if (detailedChatLog[i]["expire"] < currentTickCount) {
                //Cheat.PrintChat("\x01[ Future\x06sense\x01 ] " + "\x03Missed\x08 " + Entity.GetName(detailedChatLog[i]["target"]) + "'s \x10" + detailedChatLog[i]["hitbox"] + "\x08 due to [\x07" + detailedChatLog[i]["reason"] + "\x08]" + "\x08  (" + getHitchanceColor(detailedChatLog[i]["hitchance"]) + detailedChatLog[i]["hitchance"] + "%\x08)");
                detailedChatLog = detailedChatLog.slice(1);
                i--;
            }
        }
    }
}*/

function BuyLogs() {
    if (UI.GetValue(["Config", "FS -> Visuals", "FS -> Visuals", "Advanced logs"]) && UI.GetValue(["Config", "FS -> Visuals", "FS -> Visuals", "Active log print"]) == 2 || UI.GetValue(["Config", "FS -> Visuals", "FS -> Visuals", "Active log print"]) == 3) {
        const ent = Entity.GetEntityFromUserID(Event.GetInt('userid'))
        const team = Event.GetInt('team')
        if (team != Get_Prop("CBaseEntity", "m_iTeamNum")) {
            var item = Event.GetString('weapon')
            item = item.replace("weapon_", "")
            item = item.replace("item_", "")
            item = item.replace("assaultsuit", "kevlar + helmet")
            item = item.replace("incgrenade", "molotov")
            if (item != "unknown") {
                const Player_name = Entity.GetName(ent)
                Cheat.PrintChat(" \x01[ Future\x06sense\x01 ] \x04" + Player_name + " \x01购买了 \x04" + item + " \n");
                Cheat.PrintColor([177, 252, 3, 1], "[FutureSense]");
                Cheat.Print(" " + Player_name + " 购买了 " + item + " \n");
                Cheat.PrintLog(" " + Player_name + " 购买了 " + item + " \n", [100, 255, 100, 255])
            }
        }
    }
}

//Destroy ball

var spiritVisible = 1;
var spirit_height = 50;
var spirit_lower_limit = 35;
var spirit_higher_limit = 55;
var spirit_direction = false;
var spirit_framecount = 0;
var spirit_last_height = 0;
var spirit_color = [0, 0, 0, 0];
var spirit_radius = 0;

var spirit_data = [];
for (var i = 0; i < 64; i++) {
    spirit_data.push([0, 0, 0]);
}

var position_history = [];
for (var i = 0; i < 129; i++) {
    position_history.push([0, 0, 0]);
}

function render_spirit() {
    var position = Entity.GetRenderOrigin(Entity.GetLocalPlayer());
    if (spirit_last_height != 0) {
        if (spirit_last_height > position[2] + 3) {
            spirit_last_height -= 0.1;
        }
        if (spirit_last_height < position[2] - 3) {
            spirit_last_height += 0.1;
        }
        position[2] = spirit_last_height;
    }
    spirit_last_height = position[2];

    position_history.pop();
    position_history.unshift(position);

    if (position_history[128][0] != 0) {
        position = position_history[128];
    }
    spirit_framecount += 1;

    position[2] += spirit_height;
    position[1] += Math.sin((spirit_framecount / 450) * Math.PI) * 55;
    position[0] += Math.cos((spirit_framecount / 450) * Math.PI) * 55;

    if (spirit_framecount % 2 == 0) {
        spirit_data.pop();
        spirit_data.unshift(position);
    }

    const screenpos = WorldToScreen(position);

    const cameraPos = Local.GetCameraPosition();
    const distance = Math.sqrt(Math.pow(cameraPos[0] - position[0], 2) + Math.pow(cameraPos[1] - position[1], 2) + Math.pow(cameraPos[2] - position[2], 2)).toFixed(0);
    const size = 275 - distance > 0 ? (275 - distance) / 8 + 10 : 10;
    const radius = UI.GetValue(["Misc.", "Keys", "General", "Key assignment", "Thirdperson"]) ? size : size + 10;
    spirit_radius = radius;

    spirit_color = UI.GetColor(["Config", "FS -> Visuals", "FS -> Visuals", "Destroy ball color"])
    if (spirit_color[3] == 0) {
        const colors = HSV2RGB(Global.Realtime() * 0.1, 1, 1);
        spirit_color = [colors.r * 0.7, colors.g * 0.7, colors.b * 0.7, 255]
    }

    if (screenpos[2] != 0) {
        Render.FilledCircle(screenpos[0] + 5, screenpos[1] - 5, radius - 10, [spirit_color[0], spirit_color[1], spirit_color[2], spiritVisible == 1 ? 220 : 50]);
        Render.FilledCircle(screenpos[0] + 4, screenpos[1] - 4, radius - 8, [spirit_color[0], spirit_color[1], spirit_color[2], spiritVisible == 1 ? 220 : 50]);
        Render.FilledCircle(screenpos[0] + 2, screenpos[1] - 2, radius - 4, [spirit_color[0], spirit_color[1], spirit_color[2], spiritVisible == 1 ? 220 : 50]);
        Render.FilledCircle(screenpos[0], screenpos[1], radius, [spirit_color[0], spirit_color[1], spirit_color[2], spiritVisible == 1 ? 220 : 50]);
    }
}

function render_historical_spirit() {
    const rate = UI.GetValue(["Misc.", "Keys", "General", "Key assignment", "Thirdperson"]) ? 40 : 15;

    for (var i = 0; i < spirit_data.length; i++) {
        if (spirit_data[i][0] == 0) {
            break;
        }

        const position = [spirit_data[i][0], spirit_data[i][1], spirit_data[i][2]];
        const screenpos = WorldToScreen(position);
        const radius = spirit_radius + (Math.pow(i, 1.8) / rate);

        if (screenpos[2] != 0) {
            Render.FilledCircle(screenpos[0], screenpos[1], radius, [spirit_color[0], spirit_color[1], spirit_color[2], spiritVisible == 1 ? 6 : 2]);
        }
    }
}


//MenuBorder

function MenuBorder() {
    const mp = UI.GetMenuPosition();
    const colors = HSV2RGB(Global.Realtime() / 2, 1, 1);
    const font = Add_font("segoeuib.ttf", 11);
    const today = new Date();
    const hours1 = today.getHours();
    const minutes1 = today.getMinutes();
    const seconds1 = today.getSeconds();
    const hours = hours1 <= 9 ? "0" + hours1 + ":" : hours1 + ":";
    const minutes = minutes1 <= 9 ? "0" + minutes1 + ":" : minutes1 + ":";
    const seconds = seconds1 <= 9 ? "0" + seconds1 : seconds1;

    Render.GradientRect(mp[0] - 5, mp[1], 20, mp[3], 0, [colors.r, colors.g, colors.b, 255], [colors.b, colors.g, colors.r, 255]);
    Render.GradientRect(mp[0] - 5, mp[1] - 5, mp[2] + 10, 20, 1, [colors.r, colors.g, colors.b, 255], [colors.b, colors.g, colors.r, 255]);
    Render.GradientRect(mp[0] - 15 + mp[2], mp[1], 20, mp[3], 0, [colors.b, colors.g, colors.r, 255], [colors.r, colors.g, colors.b, 255]);
    Render.GradientRect(mp[0] - 5, mp[1] - 15 + mp[3], mp[2] + 10, 20, 1, [colors.b, colors.g, colors.r, 255], [colors.r, colors.g, colors.b, 255]);

    Render.GradientRect(mp[0] - 6, mp[1] - 4, 1, mp[3] + 8, 0, [colors.r, colors.g, colors.b, 255], [colors.b, colors.g, colors.r, 255]);
    Render.GradientRect(mp[0] - 7, mp[1] - 2, 1, mp[3] + 4, 0, [colors.r, colors.g, colors.b, 255], [colors.b, colors.g, colors.r, 255]);
    Render.GradientRect(mp[0] - 8, mp[1], 1, mp[3], 0, [colors.r, colors.g, colors.b, 255], [colors.b, colors.g, colors.r, 255]);

    Render.GradientRect(mp[0] + mp[2] + 5, mp[1] - 4, 1, mp[3] + 8, 0, [colors.b, colors.g, colors.r, 255], [colors.r, colors.g, colors.b, 255]);
    Render.GradientRect(mp[0] + mp[2] + 6, mp[1] - 2, 1, mp[3] + 4, 0, [colors.b, colors.g, colors.r, 255], [colors.r, colors.g, colors.b, 255]);
    Render.GradientRect(mp[0] + mp[2] + 7, mp[1], 1, mp[3], 0, [colors.b, colors.g, colors.r, 255], [colors.r, colors.g, colors.b, 255]);

    Render.GradientRect(mp[0] - 4, mp[1] - 6, mp[2] + 8, 1, 1, [colors.r, colors.g, colors.b, 255], [colors.b, colors.g, colors.r, 255]);
    Render.GradientRect(mp[0] - 2, mp[1] - 7, mp[2] + 4, 1, 1, [colors.r, colors.g, colors.b, 255], [colors.b, colors.g, colors.r, 255]);
    Render.GradientRect(mp[0], mp[1] - 8, mp[2], 1, 1, [colors.r, colors.g, colors.b, 255], [colors.b, colors.g, colors.r, 255]);

    Render.GradientRect(mp[0] - 4, mp[1] + mp[3] + 5, mp[2] + 8, 1, 1, [colors.b, colors.g, colors.r, 255], [colors.r, colors.g, colors.b, 255]);
    Render.GradientRect(mp[0] - 2, mp[1] + mp[3] + 6, mp[2] + 4, 1, 1, [colors.b, colors.g, colors.r, 255], [colors.r, colors.g, colors.b, 255]);
    Render.GradientRect(mp[0], mp[1] + mp[3] + 7, mp[2], 1, 1, [colors.b, colors.g, colors.r, 255], [colors.r, colors.g, colors.b, 255]);


    Render.FilledRect(mp[0], mp[1] - 65, mp[2], 5, [255, 180, 50, 255]);
    Render.FilledRect(mp[0], mp[1] - 62, mp[2], 50, [35, 35, 35, 255]);
    Render.String(mp[0] + mp[2] / 2 - 78, mp[1] - 50, 0, "FutureSense.uno", [255, 255, 255, 255], Add_font("segoeuib.ttf", 20));
    Render.String(mp[0] + mp[2] - 114, mp[1] - 30, 0, "Logged in as " + uidnow, [255, 255, 255, 255], font);
    Render.String(mp[0] + 5, mp[1] - 30, 0, hours + minutes + seconds, [255, 255, 255, 255], font);

    /*Render.GradientRect(mp[0] + 160, mp[1] + mp[3] + 8, 180, 2, 100, [0, 150, 255, 255], [10, 240, 230, 255]);
    Render.GradientRect(mp[0] + 160, mp[1] + mp[3] + 10, 180, 50, 0, [0, 0, 0, countup(100)], [0, 0, 0, 10]);
    Render.String(mp[0] + 250, mp[1] + mp[3] + 10, 1, memes ? "Logged in as " + Cheat.GetUsername() + "" : "Logged in as " + Cheat.GetUsername() + "", memes ? [0, 0, 0, 255] : [0, 0, 0, 255], font);
    Render.String(mp[0] + 250, mp[1] + mp[3] + 26, 1, memes ? hours + minutes + seconds : hours + minutes + seconds, memes ? [0, 0, 0, 255] : [0, 0, 0, 255], font);
    Render.String(mp[0] + 250, mp[1] + mp[3] + 42, 1, memes ? "> FutureSense.uno <" : "> FutureSense.uno <", memes ? [0, 0, 0, 255] : [0, 0, 0, 255], font);
    Render.String(mp[0] + 250, mp[1] + mp[3] + 43, 1, memes ? "> FutureSense.uno <" : "> FutureSense.uno <", memes ? [7, 193, 255, 255] : [7, 193, 255, 255], font);
    Render.String(mp[0] + 250, mp[1] + mp[3] + 27, 1, memes ? hours + minutes + seconds : hours + minutes + seconds, memes ? [0, 0, 0, 255] : [255, 210, 0, 255], font);
    Render.String(mp[0] + 250, mp[1] + mp[3] + 11, 1, memes ? "Logged in as " + Cheat.GetUsername() + "" : "Logged in as " + Cheat.GetUsername() + "", memes ? [255, 255, 255, 255] : [255, 255, 255, 255], font);*/
}

/*
const Count = 0;
const count_input = 1;

function countup(num) {
    Count++;
    if (Count > 1) {
        if (Count > 10) {
            Count = 0;
        }
        if (count_input <= num - 2) {
            count_input = count_input + 2
        } else {
            count_input = num
        }
    }
    return count_input
}*/

//Chat instruction

var say_data = []

function On_Player_Say() {
    if (Entity.GetEntityFromUserID(Event.GetInt("userid")) == Entity.GetLocalPlayer()) {
        say_data.push({
            text: Event.GetString("text"),
            time: Globals.Curtime()
        })

        //单次执行命令
        const today = new Date();
        const hours1 = today.getHours();
        const minutes1 = today.getMinutes();
        const seconds1 = today.getSeconds();
        const hours = hours1 <= 9 ? "0" + hours1 + ":" : hours1 + ":";
        const minutes = minutes1 <= 9 ? "0" + minutes1 + ":" : minutes1 + ":";
        const seconds = seconds1 <= 9 ? "0" + seconds1 : seconds1;

        if (Event.GetString("text") == ".info") {
            Cheat.PrintChat(" \x06以 \x08" + Cheat.GetUsername() + " \x06登录 \x01Cheak:\x08Successful\x01\n");
            Cheat.PrintChat(" \x06Steam账户 \x08" + Entity.GetName(Entity.GetLocalPlayer()) + " \x01\n");
            Cheat.PrintChat(" \06服务器校准时间 \x08" + hours + minutes + seconds + " \x01\n")
            Cheat.PrintChat(" \06welcome to \x01Future\x06Sense\x01.uno \x01\n")
        }
        if (Event.GetString("text") == ".quit") {
            Cheat.ExecuteCommand("disconnect");
        }
        if (Event.GetString("text") == ".help") {
            Cheat.PrintChat(" \x06.info \x01-- \06返回相关信息\n");
            Cheat.PrintChat(" \x06.quit \x01-- \06返回大厅\n");
            Cheat.PrintChat(" \x06.exit \x01-- \06退出游戏\n")
            Cheat.PrintChat(" \06welcome to \x01Future\x06Sense\x01.uno \x01\n")
        }
    }
}

function Chat_instruction() {
    if (!Entity.IsAlive(Entity.GetLocalPlayer())) return;
    //多次执行命令
    for (var i = 0; i < say_data.length; i++) {
        if (say_data[i] != undefined && say_data[i].time != undefined) {
            if (say_data[i].time + 1 < Globals.Curtime() || say_data[i].time < 2 || say_data[i].time == undefined) {
                delete say_data[i]
            } else {
                if (say_data[i].text == ".exit") {
                    Cheat.ExecuteCommand("quit");
                }
            }
        }
    }
}

//Ping spike

function Ping_spike() {
    if (!World.GetServerString()) return;
    const ping = Math.round(Get_Prop("CPlayerResource", "m_iPing"))
    if (ping < UI.GetValue(["Config", "FS -> Visuals", "FS -> Visuals", "Ping spike value"])) {
        UI.SetValue(["Misc.", "Helpers", "General", "Extended backtracking"], 1)
    } else {
        UI.SetValue(["Misc.", "Helpers", "General", "Extended backtracking"], 0)
    }
}

//Draw hitbox
var Draw_hitbox = false
var hitbox_count = 0

function Draw_hitbox() {
        if (!World.GetServerString() || !Entity.IsAlive(Entity.GetLocalPlayer())) return;
        if (Draw_hitbox == true && hitbox_count < 10) {
            hitbox_count++
            Convar.SetFloat("sv_showlagcompensation", 1);
        } else if (Draw_hitbox == true && hitbox_count > 10) {
            Convar.SetFloat("sv_showlagcompensation", 0);
            hitbox_count = 0
            Draw_hitbox = false
        }

    }
    //UID cheak

Array.prototype.in_array = function(element) {
    for (var i = 0; i < this.length; i++) {
        if (this[i] == element) {
            return true;
        }
    }
    return false;
}


/*
const uidnow = Cheat.GetUsername();
//HAHAHAHAHAHAHAHAHA LOOOOOOOOOOOOOOOOOOOOL LMFAOOOOOOOOOOOOOOO
const user_array = ["bccm321123","Sherry18M","wjhzq052800","isss778","pxypxy123","1187314112","andtun","hebi","4lbez","Jasongay","qingchenyu","JayFrank0906","chuyangl","zovc2820","17626519064","LKPYHA","q1844488787","santong","acklsncsl","xiaogui66","liangzaimengnan","cat0102","manaball123" ];

    uid variable
    how to add :
 example: ["account 1","account 2",..........] 

//^--retard

//ONLY CHECK 
//ROFL
function UserNameCheak() {
    if (user_array.in_array(uidnow) == false) {
        Cheat.ExecuteCommand("quit");
    } else {
        //Load_log();
    }
}
*/
//FUTURESENSE AUTH SYSTEM FUCKED
//BOTTOM TEXT

function Draw_actionbar(X, Y, text) {
    Render.FilledRect(X, Y - 5, Render.TextSize("> " + text + " <", Add_font("segoeuib.ttf", 11))[0] + 40, 5, [255, 180, 50, 255]);
    Render.FilledRect(X, Y, Render.TextSize("> " + text + " <", Add_font("segoeuib.ttf", 11))[0] + 40, 25, [35, 35, 35, 255]);
    Render.String(X + 20, Y, 0, "> " + text + " <", [255, 255, 255, 255], Add_font("segoeuib.ttf", 11));
}


var load_count = 0

/*function Load_log() {

    Draw_actionbar(screen_size[0] / 2,800,"Log in as "+Cheat.GetUsername())
    Draw_actionbar(screen_size[0] / 2,765,"FutureSense.uno")

}*/

//循环执行Draw回调函数

Cheat.PrintLog("--> 欢迎使用 FutureSense.uno <--\n", [50, 255, 50, 255])
Cheat.PrintLog("--> 以 " + uidnow + " 登录\n <--", [100, 100, 100, 255])

var Menu_alpha = 0
var silde_count = 0

function OnDraw() {
    hp = Get_Prop("CBasePlayer", "m_iHealth");
    arm = Get_Prop("CCSPlayerResource", "m_iArmor");
    //Draw_actionbar(800,800,"FutureSense.uno")
    if (silde_count < screen_size[0]) {
        silde_count++
        Render.FilledRect(0, screen_size[1] - 25, screen_size[0], 25, [35, 35, 35, 150]);
        Draw_actionbar(silde_count, screen_size[1] - 25, "Loading")
    }
    if (load_count < 200) {
        load_count++
        Draw_actionbar(screen_size[0] / 2 - 50, 800, "Log in as " + Cheat.GetUsername())
        Draw_actionbar(screen_size[0] / 2 - 50, 765, "FutureSense.uno")
    }
    if (UI.GetValue(["Config", "FutureSense", "FutureSense", "Fakelag & Anti-Brute"])) {
        Leg_Animation_Break();

        Trigger_Fakelag();
    }
    if (UI.GetValue(["Config", "FS -> Visuals", "FS -> Visuals", "Left TXT list indicator"])) {
        List_indicator();
    }
    if (UI.GetValue(["Config", "FS -> Visuals", "FS -> Visuals", "Health state indicator"])) {
        health_state_draw();
        if (Entity.IsAlive(Entity.GetLocalPlayer())) {
            Convar.SetFloat("hidehud", 8);
        } else {
            Convar.SetFloat("hidehud", 0);
        }
    } else {
        Convar.SetFloat("hidehud", 0);
    }

    if (UI.GetValue(["Config", "FS -> Visuals", "FS -> Visuals", "Top RGB line"])) {
        line();
    }
    if (UI.GetValue(["Config", "FS -> Visuals", "FS -> Visuals", "Crosshair hitmarker"])) {
        Draw_hitamrker();
        Deaw_damage_logs();
    }
    if (UI.GetValue(["Config", "FS -> Visuals", "FS -> Visuals", "AA indicator"])) {
        if (UI.GetValue(["Config", "FS -> Visuals", "FS -> Visuals", "AA indicator mode"]) == 0) {
            IdealYaw_Indicator();
        }
        if (UI.GetValue(["Config", "FS -> Visuals", "FS -> Visuals", "AA indicator mode"]) == 1) {
            AA_indicator();
        }
        if (UI.GetValue(["Config", "FS -> Visuals", "FS -> Visuals", "Display indicator"]) == 1) {
            DisPlay_indicator()
        }
    }
    if (UI.GetValue(["Config", "FS -> Visuals", "FS -> Visuals", "Bar indicator"])) {
        Boo_indicator()
    }
    if (UI.GetValue(["Config", "FS -> Visuals", "FS -> Visuals", "Show Bullet Tracer"]) === 1) {
        drawBulletTracer();
    }
    if (UI.GetValue(["Config", "FS -> Visuals", "FS -> Visuals", "Free camera"])) {
        delayCamera(true);
    }
    if (UI.GetValue(["Config", "FS -> Visuals", "FS -> Visuals", "Enable destroy watermark"]) == 1) {
        Destroy_watermark();
    }
    if (UI.GetValue(["Config", "FS -> Visuals", "FS -> Visuals", "Enable Weapon indicator"]) == 1) {
        Weapon_indicator();
    }
    if (UI.GetValue(["Config", "FS -> Visuals", "FS -> Visuals", "Active head circle"]) == 1) {
        Head_Circle();
    }
    if (UI.GetValue(["Config", "FS -> Visuals", "FS -> Visuals", "Enable Heaven arrow"])) {
        DrawArrow();
    }
    if (UI.GetValue(["Config", "FS -> Visuals", "FS -> Visuals", "Hit effect"]) != 0) {
        hit_effect();
    }
    if (UI.GetValue(["Config", "FS -> Visuals", "FS -> Visuals", "Enable watermark"])) {
        Watermark();
    }
    //if (UI.GetValue(["Config", "FS -> Visuals", "FS -> Visuals", "Advanced logs"]) && UI.GetValue(["Config", "FS -> Visuals", "FS -> Visuals", "Active log print"]) == 1 || UI.GetValue(["Config", "FS -> Visuals", "FS -> Visuals", "Active log print"]) == 3) {
        //Draw_hitlog();
    //}
    if (UI.GetValue(["Config", "FS -> Visuals", "FS -> Visuals", "Rainbow trail"])) {
        Rainbow_trail();
    }
    if (UI.GetValue(["Config", "FS -> Visuals", "FS -> Visuals", "Cool Box ESP"])) {
        CoolBoxESP();
    }
    if (Entity.IsAlive(Entity.GetLocalPlayer()) && UI.GetValue(["Config", "FS -> Visuals", "FS -> Visuals", "Destroy ball"])) {

        if (Globals.Tickcount() % 2 == 0) {
            if (spirit_direction) {
                if (spirit_height >= spirit_higher_limit) {
                    spirit_direction = false;
                } else {
                    if (spirit_higher_limit - spirit_height < 2 || spirit_height - spirit_lower_limit < 2) {
                        spirit_height += 0.2;
                    } else {
                        spirit_height += 0.5;
                    }
                }
            } else {
                if (spirit_height <= spirit_lower_limit) {
                    spirit_direction = true;
                } else {
                    if (spirit_height - spirit_lower_limit < 2 || spirit_higher_limit - spirit_height < 2) {
                        spirit_height -= 0.2;
                    } else {
                        spirit_height -= 0.5;
                    }
                }
            }
        }
        render_spirit();
        render_historical_spirit();

    }
    if(UI.GetValue(["Config", "FS -> Visuals", "FS -> Visuals", "DT indicator"])) {
        Recharge_indicator();
    }
    if (UI.GetValue(["Config", "FS -> Visuals", "FS -> Visuals", "Scope fov"])) {
        Scope_fov();
    }
    if (UI.GetValue(["Config", "FS -> Visuals", "FS -> Visuals", "Enable custom clantag"])) {
        Clantag();
    }
    if (UI.IsMenuOpen()) {
        UIEnabled();
        if (UI.GetValue(["Config", "FS -> Visuals", "FS -> Visuals", "Menu Border"])) {
            MenuBorder();
            if (Menu_alpha > 99) {
                Menu_alpha = 100
            } else {
                Menu_alpha++
            }
            Render.FilledRect(0, 0, screen_size[0], screen_size[1], [0, 0, 0, Menu_alpha]);
        }
    } else {
        if (Menu_alpha > 0) {
            Menu_alpha--
            Render.FilledRect(0, 0, screen_size[0], screen_size[1], [0, 0, 0, Menu_alpha]);
        } else {
            Menu_alpha = 0
        }
    }
    if (UI.GetValue(["Config", "FS -> Visuals", "FS -> Visuals", "Ping spike"])) {
        Ping_spike();
    } else if (!UI.GetValue(["Config", "FS -> Visuals", "FS -> Visuals", "Ping spike"]) && Math.round(Get_Prop("CPlayerResource", "m_iPing")) > 80) {
        UI.SetValue(["Config", "FS -> Visuals", "FS -> Visuals", "Ping spike"], 0)
    }
    //UI.SetValue(["Cheat", "SHEET_MGR", "General", "Restrictions"], 0);
    Options();
    //UI.SetValue(["Misc.", "Helpers", "Client", "Force sv_cheats"], 1);

    var local_player = Entity.GetLocalPlayer();
    weapon_name_tag = Entity.GetProp(Entity.GetWeapon(Entity.GetLocalPlayer()), "CBaseAttributableItem", "m_iItemDefinitionIndex") & 0xFFFF;
    if (Cheat.IsRageConfigActive(weapon_name_tag)) {
        tab = FS.ExtendFunction.getCurrentWeapon(local_player);
    } else {
        tab = "General";
    }

    var shot_time = multiply(4, Math.abs(Math.sin(multiply(64, Globals.Realtime()))))
    if (shot_time < 1.5 && While_shot == true) {
        UI.SetValue(["Rage", "Exploits", "General", "Options"], setDropdownValue(UI.GetValue(["Rage", "Exploits", "General", "Options"]), 5, false));
        While_shot = false
    }
    local_eye_position = Entity.GetEyePosition(Entity.GetLocalPlayer());

    Chat_instruction();
    /*if (World.GetServerString() && Math.floor(1 / Global.Frametime()) < 40 && Convar.GetFloat("fps_max") > 40) {
     Draw_actionbar(screen_size[0] / 2 - 50,765,"Low FPS warning")
    }*/
    ensure_requirements_met()
}
UserNameCheak();

function ensure_requirements_met() {
    UI.SetValue(["Cheat", "SHEET_MGR", "General", "Restrictions"], 0);
    UI.SetValue(["Misc.", "Helpers", "SHEET_MGR", "Client", "Bypass sv_pure"], 1);
    UI.SetValue(["Misc.", "Helpers", "SHEET_MGR", "Client", "Force sv_cheats"], 1);
    UI.SetValue(["Misc.", "Helpers", "SHEET_MGR", "Client", "Reveal hidden cvars"], 1);
}

//循环执行Createmove回调函数

function OnCreateMove() {
    if (UI.GetValue(["Config", "FutureSense", "FutureSense", "AA mode"]) == 0) {
        AntiAim.SetOverride(0);
    }
    if (UI.GetValue(["Config", "FutureSense", "FutureSense", "AA mode"]) == 1) {
        Anti_Aim_mode1_update();
    }
    if (UI.GetValue(["Config", "FutureSense", "FutureSense", "Fakelag & Anti-Brute"]) && UI.GetValue(["Rage", "Anti Aim", "General", "Key assignment", "Fake duck"]) == 0) {
        ShotFL();
    }

    if (UI.GetValue(["Config", "FutureSense", "FutureSense", "AA mode"]) == 2) {
        Custom_AA();
    }
    if (UI.GetValue(["Config", "FutureSense", "FutureSense", "AA mode"]) == 3) {
        Anti_Aim_Loop();
        if (UI.GetValue(["Config", "FutureSense", "FutureSense", "Enable walk AA"])) {
            Walk_AA();
        }
    }
    if (UI.GetValue(["Config", "FutureSense", "FutureSense", "Anti Bruteforce"])) {
        dodgeBruteforce(true);
    }
    if (UI.GetValue(["Config", "FutureSense", "FutureSense", "AWP&Scout Flip"])) {
        reset_tick();
    }
    if (UI.GetValue(["Config", "FutureSense", "FutureSense", "Edit autowall"])) {
        autowall();
    }
    if (UI.GetValue(["Config", "FutureSense", "FutureSense", "Double Tap assist"])) {
        if (UI.GetValue(["Config", "FutureSense", "FutureSense", "DT DMG perdiction"])) {
            DTDMG();
        }
        if (UI.GetValue(["Config", "FutureSense", "FutureSense", "Better DT recharge"])) {
            if(UI.GetValue(["Config", "FutureSense", "FutureSense", "DT mode"]) == 0) {
              DT_recharge();
            }else{
              Speed_Dt()
            }
        }else{
           Exploit.EnableRecharge()
        }
    }else{
  Exploit.EnableRecharge()
    }
    if (UI.GetValue(["Config", "FutureSense", "FutureSense", "DMG override on key"])) {
        DMG_override();
    }
    if (UI.GetValue(["Config", "FutureSense", "FutureSense", "Reduce hitchance"])) {
        Reduce_hitchance();
    }
    if (UI.GetValue(["Config", "FutureSense", "FutureSense", "Legit AA on use"]) && !UI.GetValue(["Rage", "Anti Aim", "General", "Key assignment", "Fake duck"])) {
        LegitAAOnKey();
    }
    if (UI.GetValue(["Config", "FutureSense", "FutureSense", "Legit AA on use"]) && Input.IsKeyPressed(0x45) && UI.GetValue(["Rage", "Anti Aim", "General", "Key assignment", "Fake duck"])) {
        Cheat.ExecuteCommand("bind e +use");
        lastTickUsed = true
    } else if (UI.GetValue(["Config", "FutureSense", "FutureSense", "Legit AA on use"]) && !Input.IsKeyPressed(0x45) && !UI.GetValue(["Rage", "Anti Aim", "General", "Key assignment", "Fake duck"])) {
        lastTickUsed = false
    }

    if (UI.GetValue(["Config", "FutureSense", "FutureSense", "Jump Scout/Revolver Hitchance"])) {
        Jump_shot();
    }
    if (UI.GetValue(["Config", "FS -> Visuals", "FS -> Visuals", "Bar indicator"])) {
        update_choke_data();
    }
    Slow_walk();
    Freestanding_body();
    if (UI.GetValue(["Config", "FutureSense", "FutureSense", "Pitch Setting"]) != 0) {
        Pitch_Setting();
    }
    if (Entity.IsAlive(Entity.GetLocalPlayer()) && UI.GetValue(["Config", "FS -> Visuals", "FS -> Visuals", "Destroy ball"])) {
        spiritVisible = Trace.RawLine(0, Local.GetCameraPosition(), spirit_data[0], 0x40000000 + 0x20000000 + 0x10000000 + 0x8000000 + 0x4000000 + 0x2000000 + 0x1000000 + 0x20000 + 0x10000 + 0x8000 + 0x4000 + 0x2000 + 0x1000 + 0x800 + 0x400 + 0x200 + 0x100 + 0x80 + 0x40 + 0x20 + 0x10 + 0x8 + 0x4 + 0x02 + 0x01, 0)[1]
    }
    const valve = Entity.GetProp(Entity.GetGameRulesProxy(), "CCSGameRulesProxy", "m_bIsValveDS")
    if (valve == true) {
        fastDuckUpdate();
    }
    if(UI.GetValue(["Config", "FS -> Visuals", "FS -> Visuals", "Better strafe"])) {
        BHOP()
    }
}

var While_shot;
var shotStart = {};

function On_weapon_fire() {

    const player_id = Event.GetInt("userid");
    const onshot = Entity.IsLocalPlayer(Entity.GetEntityFromUserID(player_id))
    if (onshot) {
        While_shot = true
    }

    if (Entity.IsEnemy(Entity.GetEntityFromUserID(Event.GetInt("userid")))) {
        shotStart[Entity.GetEntityFromUserID(Event.GetInt("userid"))] = Entity.GetEyePosition(Entity.GetEntityFromUserID(Event.GetInt("userid")));
    }

    if (UI.GetValue(["Config", "FS -> Visuals", "FS -> Visuals", "Show Bullet Tracer"])) {
        if (firedByRageBot) {
            firedByRageBot = false;
        } else {
            lastFireEyePos = local_eye_position;
        }
    }
    if (UI.GetValue(["Config", "FutureSense", "FutureSense", "AWP&Scout Flip"]) == true) {
        if (Entity.GetEntityFromUserID(Event.GetInt("userid")) == Entity.GetLocalPlayer()) {
            if (Entity.GetName(Entity.GetWeapon(Entity.GetLocalPlayer())) == "ssg 08") {
                Global.ExecuteCommand("slot3");
                flip = true
            }
            if (Entity.GetName(Entity.GetWeapon(Entity.GetLocalPlayer())) == "awp") {
                Global.ExecuteCommand("slot3");
                flip = true
            }
        }
    }
}
var Ragebot_tragets = ""
const ragebot_fire = false
//const been_miss = false
function onRageBotFire() {
    if (UI.GetValue(["Config", "FS -> Visuals", "FS -> Visuals", "Show Bullet Tracer"])) {
        lastFireEyePos = local_eye_position;
        firedByRageBot = true;
    }

    if (UI.GetValue(["Config", "FS -> Visuals", "FS -> Visuals", "Advanced logs"]) && UI.GetValue(["Config", "FS -> Visuals", "FS -> Visuals", "Active log print"]) == 1 || UI.GetValue(["Config", "FS -> Visuals", "FS -> Visuals", "Active log print"]) == 3) {
        ragebot_fire = true
        ragebot_target_hitchance = Event.GetInt("hitchance");
        //been_miss == false
        /*lastExploit = Event.GetInt("exploit");
        ragebot_target = Event.GetInt("target_index");
        ragebot_target_hitbox = Event.GetInt("hitbox");
        ragebot_target_safepoint = Event.GetInt("safepoint");
        ragebot_target_exploit = Event.GetInt("exploit");
        targetName = Entity.GetName(ragebot_target);*/
    }
}


function OnHurt() {
    if (Entity.IsLocalPlayer(Entity.GetEntityFromUserID(Event.GetInt("attacker")))) {
        alpha = 220;
        size = 180;
    }
    if (Entity.GetLocalPlayer() == Entity.GetEntityFromUserID(Event.GetInt("attacker")) && Entity.GetLocalPlayer() != Entity.GetEntityFromUserID(Event.GetInt("userid"))) {
        hit++;

        hurt_log.hurt_logs.push({
            name: Entity.GetName(Entity.GetEntityFromUserID(Event.GetInt("userid"))),
            dmg: Event.GetInt("dmg_health"),
            dead: Event.GetInt("health") <= 0,
            anim_time: 0,
            time: Globals.Curtime()
        });

        if (hurt_log.hurt_logs.length > 10) {
            hurt_log.hurt_logs.pop();
        }
    }

    if(Entity.GetLocalPlayer() == Entity.GetEntityFromUserID(Event.GetInt("attacker")) && Entity.GetLocalPlayer() != Entity.GetEntityFromUserID(Event.GetInt("userid")) && ragebot_fire == true) {
        Cheat.PrintLog("[ FutureSense ] 命中 " +  HitgroupName(Event.GetInt("hitgroup")) + " || 伤害 " + Event.GetInt("dmg_health") + " || 剩余血量 " + Event.GetInt("health") + "\n",[100,255,100,255])
        Cheat.Print( "\x01[ Future\x06Sense \x01] \x04命中 \x09" +  HitgroupName(Event.GetInt("hitgroup")) + " \01|| \04伤害 \x09" + Event.GetInt("dmg_health") + " \01|| \04剩余血量 \x09" + Event.GetInt("health") + "\n")
        Cheat.PrintChat(" \x01[ Future\x06Sense \x01] \x04命中 \x09" +  HitgroupName(Event.GetInt("hitgroup")) + " \01|| \04伤害 \x09" + Event.GetInt("dmg_health") + " \01|| \04剩余血量 \x09" + Event.GetInt("health") + "\n")
        ragebot_fire = false
    }
    /*
    if (UI.GetValue(["Config", "FS -> Visuals", "FS -> Visuals", "Draw hitbox"])) {
        Draw_hitbox();
    }
    if (Entity.GetLocalPlayer() == Entity.GetEntityFromUserID(Event.GetInt("attacker")) && Entity.GetLocalPlayer() != Entity.GetEntityFromUserID(Event.GetInt("userid"))) {
     Draw_hitbox = false
     hitbox_count = 0
    }*/
}

function onUnload() {
    AntiAim.SetOverride(0);
    Exploit.EnableRecharge()
    UI.SetValue(["Misc.", "Helpers", "Client", "Force sv_cheats"], 1);
    UI.SetEnabled(["Config", "Cheat", "General", "RAGE QUIT"], 0)
    UI.SetValue(["Cheat", "SHEET_MGR", "General", "Restrictions"], 1);
    Cheat.ExecuteCommand("hidehud 0");
    Local.SetClanTag("");
    Convar.SetFloat("r_aspectratio", orgaspect);
    setBind();
    Cheat.ExecuteCommand("bind e +use");
}


const initialize = function() {
    Cheat.PrintChat(" \x04>>Welcome to \x01Future\x06Sense\x01.uno V2\x04<<\x01 ");
    Cheat.PrintChat(" \x04>>祝您游戏愉快<<\x01 ");
    multiplier = 300;
    shotEnd = {};
    resolvers = {};
    shot_data = [];
    hurt_log = {
        hurt_logs: []
    };
    hit = 0,
        hit_process = 0;

}


Cheat.RegisterCallback("Draw", "OnDraw");
Cheat.RegisterCallback("CreateMove", "OnCreateMove");
Cheat.RegisterCallback("Unload", "onUnload");

Cheat.RegisterCallback("ragebot_fire", "onRageBotFire");
Cheat.RegisterCallback("weapon_fire", "On_weapon_fire");
Cheat.RegisterCallback("player_hurt", "OnHurt");
Cheat.RegisterCallback("player_connect_full", "initialize");




//功能函数库

function getHitchanceColor(hitchance) {
    var hitchanceColor = "\x02";
    if (hitchance > 30) {
        hitchanceColor = "\x07";
    }
    if (hitchance > 50) {
        hitchanceColor = "\x09";
    }
    if (hitchance > 70) {
        hitchanceColor = "\x05";
    }
    if (hitchance > 90) {
        hitchanceColor = "\x04";
    }
    return hitchanceColor;
}


function getDistance(A, B) {
    return Math.sqrt(Math.pow(A[0] - B[0], 2) + Math.pow(A[1] - B[1], 2) + Math.pow(A[2] - B[2], 2));
}

function Get_Prop(table, prop) {
    const Prop = Entity.GetProp(Entity.GetLocalPlayer(), table, prop);
    return Prop;
}



function setInvert(shouldInvert) {
    if (shouldInvert) {
        if (!UI.GetValue(["Rage", "Anti Aim", "General", "Key assignment", "AA Direction inverter"])) {
            UI.ToggleHotkey(["Rage", "Anti Aim", "General", "Key assignment", "AA Direction inverter"]);
        }
    } else {
        if (UI.GetValue(["Rage", "Anti Aim", "General", "Key assignment", "AA Direction inverter"])) {
            UI.ToggleHotkey(["Rage", "Anti Aim", "General", "Key assignment", "AA Direction inverter"]);
        }
    }
}

const ref_autostrafe = ["Misc.", "Movement", "General", "Auto strafe"];
const ref_turnspeed = ["Misc.", "Movement", "General", "Turn speed"];

function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
}

function getEntitySpeed(entity) {
    const velocity = Entity.GetProp(entity, "CBasePlayer", "m_vecVelocity[0]");
    return Math.sqrt(velocity[0] * velocity[0] + velocity[1] * velocity[1]);
}
var air_dir = []

function BHOP() {
    const me = Entity.GetLocalPlayer();
    const speed = getEntitySpeed(me);
    const air_accel = clamp(-0.12 + multiply(Convar.GetFloat("sv_airaccelerate"), 0.01), 0, 1);
    const base_speed = 10 + multiply(air_accel, 90);
    const speed_multiplier = clamp(speed / 320, 0, 1);
    const additional_speed = 200 * air_accel * speed_multiplier;
    const flags = Get_Prop('CBasePlayer', 'm_fFlags')

    /*
   Input.IsKeyPressed(0x57) W
   Input.IsKeyPressed(0x44) S
   Input.IsKeyPressed(0x41) A
   Input.IsKeyPressed(0x53) D
  */
    if (!(flags & 1 << 0) && !(flags & 1 << 18)) {
        const movement = UserCMD.GetMovement()

        //直线加速
        if (Input.IsKeyPressed(0x57) == 0 && is_gun()) {
            air_dir = [180 - FS.ExtendFunction.getVelocity(Entity.GetLocalPlayer()), movement[1] + 25, 450];
            UI.SetValue(ref_turnspeed, base_speed + additional_speed + 40);
        } else if (Input.IsKeyPressed(0x57) == 0 && !is_gun()) {
            air_dir = [0, movement[1], 0];
        }



        if (Input.IsKeyPressed(0x41) == 1 && Input.IsKeyPressed(0x57) == 0 && Input.IsKeyPressed(0x53) == 0 && Input.IsKeyPressed(0x44) == 0) {
            air_dir = [movement[0] + 35, movement[1] + 25, 450];
            UI.SetValue(ref_turnspeed, base_speed + additional_speed + 40);
        } else if (Input.IsKeyPressed(0x41) == 0 && Input.IsKeyPressed(0x57) == 0 && Input.IsKeyPressed(0x53) == 1 && Input.IsKeyPressed(0x44) == 0) {
            air_dir = [movement[0], movement[1] + 25, 450];
            UI.SetValue(ref_turnspeed, base_speed + additional_speed + 40);
        } else if (Input.IsKeyPressed(0x41) == 0 && Input.IsKeyPressed(0x57) == 0 && Input.IsKeyPressed(0x53) == 0 && Input.IsKeyPressed(0x44) == 1) {
            air_dir = [movement[0] + 25, movement[1] + 25, 450];
            UI.SetValue(ref_turnspeed, base_speed + additional_speed + 40);
        } else {

            if (Input.IsKeyPressed(0x57) == 0 && Input.IsKeyPressed(0x53) == 1) {
                air_dir = [movement[0] + 25, movement[1], 450]
                UI.SetValue(ref_turnspeed, base_speed + additional_speed);
            } else if (Input.IsKeyPressed(0x57) == 0 && Input.IsKeyPressed(0x41) == 1) {
                air_dir = [movement[0], movement[1] + 25, 0]
                UI.SetValue(ref_turnspeed, base_speed + additional_speed);
            } else {
                air_dir = [movement[0] +25, movement[1] + 25,0]
                UI.SetValue(ref_turnspeed, base_speed + additional_speed);
            }
        }
        UserCMD.SetMovement(air_dir);

    }



}

function HSV2RGB(h, s, v) {
    var r, g, b, i, f, p, q, t;

    i = Math.floor(h * 6);
    f = h * 6 - i;
    p = v * (1 - s);
    q = v * (1 - f * s);
    t = v * (1 - (1 - f) * s);

    switch (i % 6) {
        case 0:
            r = v,
                g = t,
                b = p;
            break;
        case 1:
            r = q,
                g = v,
                b = p;
            break;
        case 2:
            r = p,
                g = v,
                b = t;
            break;
        case 3:
            r = p,
                g = q,
                b = v;
            break;
        case 4:
            r = t,
                g = p,
                b = v;
            break;
        case 5:
            r = v,
                g = p,
                b = q;
            break;
    }

    return {
        r: Math.round(multiply(r, 255)),
        g: Math.round(multiply(g, 255)),
        b: Math.round(multiply(b, 255))
    };
}

function multiply(a, b) {
    const multiply = a * b
    return multiply
}

function Add_font(font, size) {
    const Add_font = Render.GetFont(font, size, true);
    if (!Add_font) {
        Cheat.PrintChat("未找到" + font + "请安装此字体\n");
        Cheat.PrintLog("--> 未找到" + font + "请安装此字体\n", [255, 100, 100, 255])
        Draw_actionbar(screen_size[0] / 2 - 50, 765, "Undefined font " + font + " please Install font")
        return;
    } else {
        return Add_font
    }
}

//函数回调

Cheat.RegisterCallback("CreateMove", "calcDelayedCamera");

Cheat.RegisterCallback("bullet_impact", "on_BulletImpact");
Cheat.RegisterCallback("FrameStageNotify", "Aspect_radio");
Cheat.RegisterCallback("item_purchase", "BuyLogs");
Cheat.RegisterCallback("player_say", "On_Player_Say")