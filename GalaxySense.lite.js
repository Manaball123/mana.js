/*
开源声明：GSL源码永久公开，本人承诺不使用GSL用作任何盈利用途，
您可以放心的个人使用GSL或将其用在您的公开/付费参数中；
如果您在使用过程中发现bug或已经对其进行改善，
欢迎您加入"GSL共同创作计划"；
在这里，您的反馈与修改内容将会被应用到新的GSL更新中！
我们鼓励创作者参与到GSL开发过程中，"GSL共同创作计划"致力于让每一个人参与到GSL开发过程中;
新的GSL更新与完善有待您的参与！
GalaxySense.Lite共同创作计划：513135302（qq）
Umbrella QQ：1958746825
                            ——————发起人Umbrella 时间2021年7月18日
特别鸣谢：贞德论坛，又是变成懒狗的一天呢，Outside，H2O提供的技术支持；
        GSL开发过程中使用了一部分公开的js，后续版本会加入更多原创内容；
 */


//JS信息
Cheat.PrintColor([25,200,250,255], "\nWelcome! " + Cheat.GetUsername());
Cheat.PrintColor([25,200,250,255], "\nGalaxySense.Lite\n");

const Update = "2021.7.18 "
const Version = "0.1.0 Beta "
//正常
var font = "segoeuib.ttf"
//粗体
var Font = "msyhbd.ttc"

UI.AddSubTab(["Config", "SUBTAB_MGR"], "GalaxySense");
UI.AddSubTab(["Visuals", "SUBTAB_MGR"], "Galaxy Visuals");
UI.AddSubTab(["Misc.", "SUBTAB_MGR"], "Galaxy Misc");
const Galaxy_Path = ["Config", "GalaxySense", "GalaxySense"]
const AntiAim_Path = ["Rage", "Anti Aim", "Fake"];
const AntiAimPath = ("Rage", "Anti Aim", "Fake");
const Visuals_Path = ["Visuals", "Galaxy Visuals","Galaxy Visuals"]
const Misc_Path = ["Misc.", "Galaxy Misc","Galaxy Misc"]
UI.AddSliderInt(Galaxy_Path, "Welcome! " + Cheat.GetUsername(), 0, 0);
UI.AddSliderInt(Galaxy_Path, "GalaxySense Version "+ Version, 0, 0);
UI.AddSliderInt(Galaxy_Path, "ZhenDeForums: https://hvhbbs.com", 0, 0);
const Galaxy_FakeLag = UI.AddCheckbox(Galaxy_Path, "Enable Galaxy FakeLag(UselessNow)");
const Galaxy_AntiAim = UI.AddCheckbox(Galaxy_Path , "Enable Galaxy AntiAim")
const Galaxy_Visuals = UI.AddCheckbox(Galaxy_Path, "Enable Galaxy Visuals");
const Galaxy_Misc = UI.AddCheckbox(Galaxy_Path, "Enable Galaxy Misc");

//Galaxy AntiAim
const Galaxy_AA_RealMode = UI.AddDropdown(AntiAim_Path, "Real Angle Mode", ["Static", "Random"], 0)
const Galaxy_AA_FakeMode = UI.AddDropdown(AntiAim_Path, "Fake Angle Mode", ["Static", "Random"], 0)
const Galaxy_AA_JitterMode = UI.AddDropdown(AntiAim_Path, "Jitter Mode", ["Off", "Random", "Switch(UslessNow)"], 0)
const Galaxy_AA_YawMode = UI.AddDropdown(AntiAim_Path, "Yaw Mode", ["Off", "Random", "Switch(UslessNow)"], 0)

const Galaxy_AA_RealValue = UI.AddSliderInt(AntiAim_Path, "Real Angle Value", -60 , 60)
const Galaxy_AA_FakeValue = UI.AddSliderInt(AntiAim_Path, "Fake Angle Value", -60 , 60)
const Galaxy_AA_RealValueMin = UI.AddSliderInt(AntiAim_Path, "Real Angle Min", -60 , 60)
const Galaxy_AA_RealValueMax = UI.AddSliderInt(AntiAim_Path, "Real Angle Max", -60 , 60)
const Galaxy_AA_FakeValueMin = UI.AddSliderInt(AntiAim_Path, "Fake Angle Min", -60 , 60)
const Galaxy_AA_FakeValueMax = UI.AddSliderInt(AntiAim_Path, "Fake Angle Max", -60 , 60)

const Galaxy_AA_JitterMin = UI.AddSliderInt(AntiAim_Path, "Jitter Min", -180 , 180)
const Galaxy_AA_JitterMax = UI.AddSliderInt(AntiAim_Path, "Jitter Max", -180 , 180)
const Galaxy_AA_JitterSwitch1 = UI.AddSliderInt(AntiAim_Path, "Jitter Switch A", -180 , 180)
const Galaxy_AA_JitterSwitch2 = UI.AddSliderInt(AntiAim_Path, "Jitter Switch B", -180 , 180)
const Galaxy_AA_JitterSwitch3 = UI.AddSliderInt(AntiAim_Path, "Jitter Switch C", -180 , 180)
const Galaxy_AA_JitterSwitch4 = UI.AddSliderInt(AntiAim_Path, "Jitter Switch D", -180 , 180)
const Galaxy_AA_JitterDelay = UI.AddSliderFloat(AntiAim_Path, "Jitter Switch Delay(s)", 0 , 5)

const Galaxy_AA_YawMin = UI.AddSliderInt(AntiAim_Path, "Yaw Min", -180 , 180)
const Galaxy_AA_YawMax = UI.AddSliderInt(AntiAim_Path, "Yaw Max", -180 , 180)
const Galaxy_AA_YawSwitch1 = UI.AddSliderInt(AntiAim_Path, "Yaw Switch A", -180 , 180)
const Galaxy_AA_YawSwitch2 = UI.AddSliderInt(AntiAim_Path, "Yaw Switch B", -180 , 180)
const Galaxy_AA_YawSwitch3 = UI.AddSliderInt(AntiAim_Path, "Yaw Switch C", -180 , 180)
const Galaxy_AA_YawSwitch4 = UI.AddSliderInt(AntiAim_Path, "Yaw Switch D", -180 , 180)
const Galaxy_AA_YawDelay = UI.AddSliderFloat(AntiAim_Path, "Yaw Switch Delay(s)", 0 , 5)

//GSL视觉
var Visuals_Dropdown = UI.AddDropdown(Visuals_Path,"Galaxy Visuals Page",
    ["Galaxy Primary Indicator","Galaxy Secondary Indicator"], 0);

//GSL主指示器
var Galaxy_Primary_Dropdown = UI.AddDropdown(Visuals_Path,"Galaxy Primary Indicator Page",
    ["Galaxy Bar Indicator"], 0);

//GSL信息栏
const Galaxy_Bar = UI.AddCheckbox(Visuals_Path, "Enable Galaxy Bar");
const Galaxy_Bar_MenuOpen = UI.AddCheckbox(Visuals_Path, "Olny Show Galaxy Bar With Onetap");
const Galaxy_Bar_Color = UI.AddCheckbox(Visuals_Path, "Enable Custom Bar Color");
const Galaxy_Bar_X = UI.AddSliderInt(Visuals_Path,"Galaxy Bar_X", 0, Render.GetScreenSize()[0]);
const Galaxy_Bar_Y = UI.AddSliderInt(Visuals_Path,"Galaxy Bar_Y", 0, Render.GetScreenSize()[1]);
const Galaxy_Bar_TitleColor = UI.AddColorPicker(Visuals_Path,"Galaxy Bar TitleColor");
const Galaxy_Bar_TextColor = UI.AddColorPicker(Visuals_Path,"Galaxy Bar TextColor");
const Galaxy_Bar_Color1 = UI.AddColorPicker(Visuals_Path,"Galaxy Bar Color1");
const Galaxy_Bar_Color2 = UI.AddColorPicker(Visuals_Path,"Galaxy Bar Color2");
const Galaxy_Bar_Color3 = UI.AddColorPicker(Visuals_Path,"Galaxy Bar Color3");
const Galaxy_Bar_Color4 = UI.AddColorPicker(Visuals_Path,"Galaxy Bar Color4");
const Galaxy_Bar_LineColor1 = UI.AddColorPicker(Visuals_Path,"Galaxy Bar LineColor1");
const Galaxy_Bar_LineColor2 = UI.AddColorPicker(Visuals_Path,"Galaxy Bar LineColor2");
const Galaxy_Bar_RGBLine = UI.AddCheckbox(Visuals_Path, "Enable Bar RGB Line");
const Galaxy_Bar_RGBTitle = UI.AddCheckbox(Visuals_Path, "Enable Bar RGB Title");
const Galaxy_Bar_RGBLine_Alpha = UI.AddSliderInt(Visuals_Path, "Galaxy Bar RGB Line Alpha",0,255);
const Galaxy_Bar_RGBTitle_Alpha = UI.AddSliderInt(Visuals_Path, "Galaxy Bar RGB Title Alpha",0,255);


//GSL次要指示器

var Galaxy_Secondary_Dropdown = UI.AddDropdown(Visuals_Path,"Galaxy Secondary Indicator Page",
    [   "Galaxy Keybind States",
        "Galaxy Avatar-Ball",
        "Galaxy Anti-Aim Arrow",
        "Galaxy Watermark",
        "Galaxy MenuBorder",
        "Galaxy Speed Graph",
        "Galaxy Oneway Help",
        "Galaxy Free Camera(UselessNow)",
        "Galaxy Enemy view",
        "Galaxy Aspect Ratio"], 0);
//GSL热键指示
const Galaxy_Keys = UI.AddCheckbox(Visuals_Path, "Enable Galaxy Keys");
const Galaxy_Keys_Color = UI.AddCheckbox(Visuals_Path, "Enable Custom Keys Color");
const Galaxy_Keys_X = UI.AddSliderInt(Visuals_Path,"Galaxy Keys_X", 0, Render.GetScreenSize()[0]);
const Galaxy_Keys_Y = UI.AddSliderInt(Visuals_Path,"Galaxy Keys_Y", 0, Render.GetScreenSize()[1]);
const Galaxy_Keys_TitleColor = UI.AddColorPicker(Visuals_Path,"Galaxy Keys TitleColor");
const Galaxy_Keys_TextColor = UI.AddColorPicker(Visuals_Path,"Galaxy Keys TextColor");
const Galaxy_Keys_Color1 = UI.AddColorPicker(Visuals_Path,"Galaxy Keys Color1");
const Galaxy_Keys_Color2 = UI.AddColorPicker(Visuals_Path,"Galaxy Keys Color2");
const Galaxy_Keys_Color3 = UI.AddColorPicker(Visuals_Path,"Galaxy Keys Color3");
const Galaxy_Keys_Color4 = UI.AddColorPicker(Visuals_Path,"Galaxy Keys Color4");
const Galaxy_Keys_LineColor1 = UI.AddColorPicker(Visuals_Path,"Galaxy Keys LineColor1");
const Galaxy_Keys_LineColor2 = UI.AddColorPicker(Visuals_Path,"Galaxy Keys LineColor2");
const Galaxy_Keys_RGBLine = UI.AddCheckbox(Visuals_Path, "Enable Keys RGB Line");
const Galaxy_Keys_RGBTitle = UI.AddCheckbox(Visuals_Path, "Enable Keys RGB Title");
const Galaxy_Keys_RGBLine_Alpha = UI.AddSliderInt(Visuals_Path, "Galaxy Keys RGB Line Alpha",0,255);
const Galaxy_Keys_RGBTitle_Alpha = UI.AddSliderInt(Visuals_Path, "Galaxy Keys RGB Title Alpha",0,255);
//头像球
const Galaxy_Avatar = UI.AddCheckbox(Visuals_Path, "Enable Galaxy AvatarBall");
const Galaxy_Avatar_Color = UI.AddCheckbox(Visuals_Path, "Enable Custom AvatarBall Color");
const Galaxy_Avatar_X = UI.AddSliderInt(Visuals_Path, "Galaxy AvatarBall_X", 0, Render.GetScreenSize()[0]);
const Galaxy_Avatar_Y = UI.AddSliderInt(Visuals_Path, "Galaxy AvatarBall_Y", 0, Render.GetScreenSize()[1]);
const Galaxy_Avatar_Color1 = UI.AddColorPicker(Visuals_Path,"Galaxy Avatar Color1");
const Galaxy_Avatar_Color2 = UI.AddColorPicker(Visuals_Path,"Galaxy Avatar Color2");
const Galaxy_Avatar_Color3 = UI.AddColorPicker(Visuals_Path,"Galaxy Avatar Color3");
const Galaxy_Avatar_Color4 = UI.AddColorPicker(Visuals_Path,"Galaxy Avatar Color4");
const Galaxy_Avatar_RGBBall = UI.AddCheckbox(Visuals_Path, "Enable Galaxy Avatar RGB Ball");
const Galaxy_Avatar_RGBLine = UI.AddCheckbox(Visuals_Path, "Enable Galaxy Avatar RGB Line");
const Galaxy_Avatar_RGBBall_Alpha = UI.AddSliderInt(Visuals_Path, "Galaxy Avatar RGB Ball Alpha",0,255);
const Galaxy_Avatar_RGBLine_Alpha = UI.AddSliderInt(Visuals_Path, "Galaxy Avatar RGB Line Alpha",0,255);
//水印
const Galaxy_WaterMark = UI.AddCheckbox(Visuals_Path, "Enable Galaxy WaterMark");
const Galaxy_WaterMark_Color = UI.AddCheckbox(Visuals_Path, "Enable Custom WaterMark Color");
const Galaxy_WaterMark_X = UI.AddSliderInt(Visuals_Path, "Galaxy WaterMark_X", 0, Render.GetScreenSize()[0]);
const Galaxy_WaterMark_Y = UI.AddSliderInt(Visuals_Path, "Galaxy WaterMark_Y", 0, Render.GetScreenSize()[1]);
const Galaxy_WaterMark_Color1 = UI.AddColorPicker(Visuals_Path,"Galaxy WaterMark Color1");
const Galaxy_WaterMark_Color2 = UI.AddColorPicker(Visuals_Path,"Galaxy WaterMark Color2");
const Galaxy_WaterMark_Color3 = UI.AddColorPicker(Visuals_Path,"Galaxy WaterMark Color3");
const Galaxy_WaterMark_RGBText = UI.AddCheckbox(Visuals_Path, "Enable WaterMark RGB Text");
const Galaxy_WaterMark_RGBLine = UI.AddCheckbox(Visuals_Path, "Enable WaterMark RGB Line");
const Galaxy_WaterMark_Text_Alpha = UI.AddSliderInt(Visuals_Path, "WaterMark RGB Text Alpha",0,255);
const Galaxy_WaterMark_Line_Alpha = UI.AddSliderInt(Visuals_Path, "WaterMark RGB Line Alpha",0,255);
//RGB菜单边框
const Galaxy_MenuBorder = UI.AddCheckbox(Visuals_Path, "Enable Galaxy MenuBorder");
const Galaxy_MenuBorder_Color = UI.AddCheckbox(Visuals_Path, "Enable Custom MenuBorder Color");
const Galaxy_MenuBorder_Shadow = UI.AddCheckbox(Visuals_Path, "Enable Galaxy MenuBorder Shadow");
const Galaxy_MenuBorder_Text = UI.AddCheckbox(Visuals_Path, "Enable Galaxy MenuBorder Text");
const Galaxy_MenuBorder_RGB_Text = UI.AddCheckbox(Visuals_Path, "Enable Galaxy MenuBorder RGB Text");
const Galaxy_MenuBorder_RGB_Line = UI.AddCheckbox(Visuals_Path, "Enable Galaxy MenuBorder RGB Line");
const Galaxy_MenuBorder_RGB_Border = UI.AddCheckbox(Visuals_Path, "Enable Galaxy MenuBorder RGB Border");
const Galaxy_MenuBorder_Color1 = UI.AddColorPicker(Visuals_Path,"Galaxy MenuBorder Color1");
const Galaxy_MenuBorder_Color2 = UI.AddColorPicker(Visuals_Path,"Galaxy MenuBorder Color2");
const Galaxy_MenuBorder_Color3 = UI.AddColorPicker(Visuals_Path,"Galaxy MenuBorder Color3");
const Galaxy_MenuBorder_Color4 = UI.AddColorPicker(Visuals_Path,"Galaxy MenuBorder Color4");
const Galaxy_MenuBorder_Color5 = UI.AddColorPicker(Visuals_Path,"Galaxy MenuBorder Color5");
const Galaxy_MenuBorder_Color6 = UI.AddColorPicker(Visuals_Path,"Galaxy MenuBorder Color6");
const Galaxy_MenuBorder_Color7 = UI.AddColorPicker(Visuals_Path,"Galaxy MenuBorder Color7");
const Galaxy_MenuBorder_Color8 = UI.AddColorPicker(Visuals_Path,"Galaxy MenuBorder Color8");
const Galaxy_MenuBorder_Text_Alpha = UI.AddSliderInt(Visuals_Path, "Galaxy MenuBorder Text Alpha",0,255);
const Galaxy_MenuBorder_Line_Alpha = UI.AddSliderInt(Visuals_Path, "Galaxy MenuBorder Line Alpha",0,255);
const Galaxy_MenuBorder_Border_Alpha = UI.AddSliderInt(Visuals_Path, "Galaxy MenuBorder Border Alpha",0,255);
//AA箭头指示
const Galaxy_Arrow = UI.AddCheckbox(Visuals_Path, "Enable Galaxy Anti—Aim Arrow")
const Galaxy_Arrow_Color = UI.AddCheckbox(Visuals_Path, "Enable Custom Anti—Aim Arrow Color")
const Galaxy_Arrow_Color1 = UI.AddColorPicker(Visuals_Path,"Galaxy Arrow Color1");
const Galaxy_Arrow_Color2 = UI.AddColorPicker(Visuals_Path,"Galaxy Arrow Color2");
const Galaxy_Arrow_RGB_Arrow = UI.AddCheckbox(Visuals_Path, "Enable Galaxy RGB Arrow");
const Galaxy_Arrow_Alpha1 = UI.AddSliderInt(Visuals_Path, "Galaxy RGB Arrow Alpha1",0,255);
const Galaxy_Arrow_Alpha2 = UI.AddSliderInt(Visuals_Path, "Galaxy RGB Arrow Alpha2",0,255);
//屏幕拉伸
const Galaxy_AspectRatio = UI.AddCheckbox(Visuals_Path, "Enable Galaxy Aspect Ratio");
const Galaxy_AspectRatio_Value = UI.AddSliderFloat(Visuals_Path, "Aspect Value", 0.0, 5.0);
//图像
//速度图像
const Galaxy_SpeedGraph = UI.AddCheckbox(Visuals_Path, "Enable Galaxy Speed Graph");
const Galaxy_SpeedGraph_X = UI.AddSliderInt(Visuals_Path,"Galaxy SpeedGraph_X", 0, Render.GetScreenSize()[0]);
const Galaxy_SpeedGraph_Y = UI.AddSliderInt(Visuals_Path,"Galaxy SpeedGraph_Y", 0, Render.GetScreenSize()[1]);
const Galaxy_SpeedGraph_Color = UI.AddCheckbox(Visuals_Path, "Enable Custom SpeedGraph Color")
const Galaxy_SpeedGraph_RGBSpeedGraph = UI.AddCheckbox(Visuals_Path, "Enable Galaxy RGB Speed Graph");
const Galaxy_SpeedGraph_RGBSpeedLine = UI.AddCheckbox(Visuals_Path, "Enable Galaxy RGB Speed Line");
const Galaxy_SpeedGraph_RGBSpeedText = UI.AddCheckbox(Visuals_Path, "Enable Galaxy RGB Speed Text");
const Galaxy_SpeedGraph_Color1 = UI.AddColorPicker(Visuals_Path, "Galaxy Speed Line color1");
const Galaxy_SpeedGraph_Color2 = UI.AddColorPicker(Visuals_Path, "Galaxy Speed Line color2");
const Galaxy_SpeedGraph_Color3 = UI.AddColorPicker(Visuals_Path, "Galaxy Speed color3");
const Galaxy_SpeedGraph_Color4 = UI.AddColorPicker(Visuals_Path, "Galaxy Speed color4");
const Galaxy_SpeedGraph_Color5 = UI.AddColorPicker(Visuals_Path, "Galaxy Speed Graph color");
const Galaxy_SpeedGraph_Graph_Alpha = UI.AddSliderInt(Visuals_Path, "Galaxy Speed Graph Alpha",0,255);
const Galaxy_SpeedGraph_Line_Alpha = UI.AddSliderInt(Visuals_Path, "Galaxy Speed Line Alpha",0,255);
const Galaxy_SpeedGraph_Text_Alpha = UI.AddSliderInt(Visuals_Path, "Galaxy Speed Text Alpha",0,255);
//点位助手
const Galaxy_1way = UI.AddCheckbox(Visuals_Path, "Enable Galaxy Oneway Helper");
const Galaxy_1way_Circle = UI.AddColorPicker(Visuals_Path, "Oneway Helper Circle");
const Galaxy_1way_Location = UI.AddColorPicker(Visuals_Path, "Oneway Helper Location");
const Galaxy_1way_Extra = UI.AddColorPicker(Visuals_Path, "Oneway Helper Extra");
const Galaxy_1way_Distance = UI.AddColorPicker(Visuals_Path, "Oneway Helper Distance");
const Galaxy_1way_Line = UI.AddColorPicker(Visuals_Path, "Oneway Helper Line");
const Galaxy_1way_Type = UI.AddColorPicker(Visuals_Path, "Oneway Helper Type");
const Galaxy_1way_LineLength = UI.AddSliderInt(Visuals_Path, "Oneway Helper Line Length", 0, 300);
const Galaxy_1way_RenderDist = UI.AddSliderInt(Visuals_Path, "Oneway Helper Render Dist.", 0, 100);
//敌方视野

UI.AddHotkey(["Misc.", "Keys", "Keys", "Key assignment"], "Enemy View", "Enemy View");
const Galaxy_EnemyView = UI.AddCheckbox(Visuals_Path, "Enable Enemy View");
const Galaxy_EnemyView_X = UI.AddSliderInt(Visuals_Path,"Galaxy Enemy View_X", 0, Render.GetScreenSize()[0]);
const Galaxy_EnemyView_Y = UI.AddSliderInt(Visuals_Path,"Galaxy Enemy View_Y", 0, Render.GetScreenSize()[1]);
const Galaxy_EnemyView_Color = UI.AddCheckbox(Visuals_Path, "Enable Custom Enemy View Color")
const Galaxy_EnemyView_RGBLine = UI.AddCheckbox(Visuals_Path, "Enable Galaxy RGB Enemy View Line");
const Galaxy_EnemyView_RGBText = UI.AddCheckbox(Visuals_Path, "Enable Galaxy RGB Enemy View Text");
const Galaxy_EnemyView_Color1 = UI.AddColorPicker(Visuals_Path, "Galaxy Enemy View color1");
const Galaxy_EnemyView_Color2 = UI.AddColorPicker(Visuals_Path, "Galaxy Enemy View color2");
const Galaxy_EnemyView_Color3 = UI.AddColorPicker(Visuals_Path, "Galaxy Enemy View color3");
const Galaxy_EnemyView_Color4 = UI.AddColorPicker(Visuals_Path, "Galaxy Enemy View color4");
const Galaxy_EnemyView_Line_Alpha = UI.AddSliderInt(Visuals_Path, "Galaxy Enemy View Line Alpha",0,255);
const Galaxy_EnemyView_Text_Alpha = UI.AddSliderInt(Visuals_Path, "Galaxy Enemy Text Line Alpha",0,255);

//自由相机
const Galaxy_FreeCamera = UI.AddCheckbox(Visuals_Path, "Enable Galaxy Free Camera");
const Galaxy_FreeCamera_Value = UI.AddSliderInt(Visuals_Path, "Max Free Camera Value", 5, 30);

//GSL杂项
const Galaxy_ClanTag = UI.AddCheckbox(Misc_Path, "Enable Galaxy ClanTag");

function EnableMenu() {
    //Enable AntiAim UI
    SetOffAllUI()
    if (UI.GetValue(Galaxy_AntiAim)) {
        UI.SetEnabled(Galaxy_AA_RealMode, 1);
        UI.SetEnabled(Galaxy_AA_FakeMode, 1);
        UI.SetEnabled(Galaxy_AA_JitterMode, 1);
        UI.SetEnabled(Galaxy_AA_YawMode, 1);
        //真身
        if (UI.GetValue(Galaxy_AA_RealMode) == 0) {
            UI.SetEnabled(Galaxy_AA_RealValue, 1);
        }
        if (UI.GetValue(Galaxy_AA_RealMode) == 1) {
            UI.SetEnabled(Galaxy_AA_RealValueMin, 1);
            UI.SetEnabled(Galaxy_AA_RealValueMax, 1);
        }
        //假身
        if (UI.GetValue(Galaxy_AA_FakeMode) == 0) {
            UI.SetEnabled(Galaxy_AA_FakeValue, 1);
        }
        if (UI.GetValue(Galaxy_AA_FakeMode) == 1) {
            UI.SetEnabled(Galaxy_AA_FakeValueMin, 1);
            UI.SetEnabled(Galaxy_AA_FakeValueMax, 1);
        }
        //抖动
        if (UI.GetValue(Galaxy_AA_JitterMode) == 1) {
            UI.SetEnabled(Galaxy_AA_JitterMin, 1);
            UI.SetEnabled(Galaxy_AA_JitterMax, 1);
        }
        if (UI.GetValue(Galaxy_AA_JitterMode) == 2) {
            UI.SetEnabled(Galaxy_AA_JitterSwitch1, 1);
            UI.SetEnabled(Galaxy_AA_JitterSwitch2, 1);
            UI.SetEnabled(Galaxy_AA_JitterSwitch3, 1);
            UI.SetEnabled(Galaxy_AA_JitterSwitch4, 1);
            UI.SetEnabled(Galaxy_AA_JitterDelay, 1);
        }
        //偏航
        if (UI.GetValue(Galaxy_AA_YawMode) == 1) {
            UI.SetEnabled(Galaxy_AA_YawMin, 1);
            UI.SetEnabled(Galaxy_AA_YawMax, 1);
        }
        if (UI.GetValue(Galaxy_AA_YawMode) == 2) {
            UI.SetEnabled(Galaxy_AA_YawSwitch1, 1);
            UI.SetEnabled(Galaxy_AA_YawSwitch2, 1);
            UI.SetEnabled(Galaxy_AA_YawSwitch3, 1);
            UI.SetEnabled(Galaxy_AA_YawSwitch4, 1);
            UI.SetEnabled(Galaxy_AA_YawDelay, 1);
        }
    }
    //Enable Visuals UI
    if (UI.GetValue(Galaxy_Visuals)) {
        UI.SetEnabled(Visuals_Dropdown, 1);
        switch (UI.GetValue(Visuals_Dropdown)) {
            case 0:
                UI.SetEnabled(Galaxy_Primary_Dropdown, 1);
                switch (UI.GetValue(Galaxy_Primary_Dropdown)) {
                    case 0:
                        UI.SetEnabled(Galaxy_Bar, 1);
                        if (UI.GetValue(Galaxy_Bar)) {
                            UI.SetEnabled(Galaxy_Bar_MenuOpen, 1);
                            UI.SetEnabled(Galaxy_Bar_Color, 1);
                            UI.SetEnabled(Galaxy_Bar_X, 1);
                            UI.SetEnabled(Galaxy_Bar_Y, 1);
                            if (UI.GetValue(Galaxy_Bar_Color)) {
                                UI.SetEnabled(Galaxy_Bar_TitleColor, 1);
                                UI.SetEnabled(Galaxy_Bar_Color1, 1);
                                UI.SetEnabled(Galaxy_Bar_Color2, 1);
                                UI.SetEnabled(Galaxy_Bar_Color3, 1);
                                UI.SetEnabled(Galaxy_Bar_Color4, 1);
                                UI.SetEnabled(Galaxy_Bar_LineColor1, 1);
                                UI.SetEnabled(Galaxy_Bar_LineColor2, 1);
                                UI.SetEnabled(Galaxy_Bar_TextColor, 1);
                                UI.SetEnabled(Galaxy_Bar_RGBTitle, 1);
                                UI.SetEnabled(Galaxy_Bar_RGBLine, 1);
                                if (UI.GetValue(Galaxy_Bar_RGBTitle)) {
                                    UI.SetEnabled(Galaxy_Bar_RGBTitle_Alpha, 1);
                                }
                                if (UI.GetValue(Galaxy_Bar_RGBLine)) {
                                    UI.SetEnabled(Galaxy_Bar_RGBLine_Alpha, 1);
                                }
                            }
                        }
                        break;
                }
                break;
            //GSL主指示器
            //GSL副指示器
            case 1:
                UI.SetEnabled(Galaxy_Secondary_Dropdown, 1);
                switch (UI.GetValue(Galaxy_Secondary_Dropdown)) {
                    case 0:
                        UI.SetEnabled(Galaxy_Keys, 1);
                        if (UI.GetValue(Galaxy_Keys)) {
                            UI.SetEnabled(Galaxy_Keys_Color, 1);
                            UI.SetEnabled(Galaxy_Keys_X, 1);
                            UI.SetEnabled(Galaxy_Keys_Y, 1);
                            if (UI.GetValue(Galaxy_Keys_Color)) {
                                UI.SetEnabled(Galaxy_Keys_TitleColor, 1);
                                UI.SetEnabled(Galaxy_Keys_Color1, 1);
                                UI.SetEnabled(Galaxy_Keys_Color2, 1);
                                UI.SetEnabled(Galaxy_Keys_Color3, 1);
                                UI.SetEnabled(Galaxy_Keys_Color4, 1);
                                UI.SetEnabled(Galaxy_Keys_LineColor1, 1);
                                UI.SetEnabled(Galaxy_Keys_LineColor2, 1);
                                UI.SetEnabled(Galaxy_Keys_TitleColor, 1);
                                UI.SetEnabled(Galaxy_Keys_TextColor, 1);
                                UI.SetEnabled(Galaxy_Keys_RGBLine, 1);
                                UI.SetEnabled(Galaxy_Keys_RGBTitle, 1);
                                if (UI.GetValue(Galaxy_Keys_RGBLine)) {
                                    UI.SetEnabled(Galaxy_Keys_RGBLine_Alpha, 1);
                                }
                                if (UI.GetValue(Galaxy_Keys_RGBTitle)) {
                                    UI.SetEnabled(Galaxy_Keys_RGBTitle_Alpha, 1);
                                }
                            }
                        }
                        break;
                    case 1:
                        UI.SetEnabled(Galaxy_Avatar, 1);
                        if (UI.GetValue(Galaxy_Avatar)) {
                            UI.SetEnabled(Galaxy_Avatar_X, 1);
                            UI.SetEnabled(Galaxy_Avatar_Y, 1);
                            UI.SetEnabled(Galaxy_Avatar_Color, 1);
                            if (UI.GetValue(Galaxy_Avatar_Color)) {
                                UI.SetEnabled(Galaxy_Avatar_Color1, 1);
                                UI.SetEnabled(Galaxy_Avatar_Color2, 1);
                                UI.SetEnabled(Galaxy_Avatar_Color3, 1);
                                UI.SetEnabled(Galaxy_Avatar_Color4, 1);
                                UI.SetEnabled(Galaxy_Avatar_RGBBall, 1);
                                UI.SetEnabled(Galaxy_Avatar_RGBLine, 1);
                                if (UI.GetValue(Galaxy_Avatar_RGBBall)) {
                                    UI.SetEnabled(Galaxy_Avatar_RGBBall_Alpha, 1);
                                }
                                if (UI.GetValue(Galaxy_Avatar_RGBLine)) {
                                    UI.SetEnabled(Galaxy_Avatar_RGBLine_Alpha, 1);
                                }
                            }
                        }
                        break;
                    case 2:
                        UI.SetEnabled(Galaxy_Arrow, 1);
                        if (UI.GetValue(Galaxy_Arrow)) {
                            UI.SetEnabled(Galaxy_Arrow_Color, 1);
                            if (UI.GetValue(Galaxy_Arrow_Color)) {
                                UI.SetEnabled(Galaxy_Arrow_RGB_Arrow, 1);
                                UI.SetEnabled(Galaxy_Arrow_Color1, 1);
                                UI.SetEnabled(Galaxy_Arrow_Color2, 1);
                                if (UI.GetValue(Galaxy_Arrow_RGB_Arrow)) {
                                    UI.SetEnabled(Galaxy_Arrow_Alpha1, 1);
                                    UI.SetEnabled(Galaxy_Arrow_Alpha2, 1);
                                }
                            }
                        }
                        break;
                    case 3:
                        UI.SetEnabled(Galaxy_WaterMark, 1);
                        if (UI.GetValue(Galaxy_WaterMark)) {
                            UI.SetEnabled(Galaxy_WaterMark_Color, 1);
                            UI.SetEnabled(Galaxy_WaterMark_X, 1);
                            UI.SetEnabled(Galaxy_WaterMark_Y, 1);
                            UI.SetEnabled(Galaxy_WaterMark_Color, 1);
                            if (UI.GetValue(Galaxy_WaterMark_Color)) {
                                UI.SetEnabled(Galaxy_WaterMark_Color1, 1);
                                UI.SetEnabled(Galaxy_WaterMark_Color2, 1);
                                UI.SetEnabled(Galaxy_WaterMark_Color3, 1);
                                UI.SetEnabled(Galaxy_WaterMark_RGBText, 1);
                                UI.SetEnabled(Galaxy_WaterMark_RGBLine, 1);
                                if (UI.GetValue(Galaxy_WaterMark_RGBText)) {
                                    UI.SetEnabled(Galaxy_WaterMark_Text_Alpha, 1);
                                }
                                if (UI.GetValue(Galaxy_WaterMark_RGBLine)) {
                                    UI.SetEnabled(Galaxy_WaterMark_Line_Alpha, 1);
                                }
                            }
                        }
                        break;
                    case 4:
                        UI.SetEnabled(Galaxy_MenuBorder, 1);
                        if (UI.GetValue(Galaxy_MenuBorder)) {
                            UI.SetEnabled(Galaxy_MenuBorder_Color, 1);
                            if (UI.GetValue(Galaxy_MenuBorder_Color)) {
                                UI.SetEnabled(Galaxy_MenuBorder_Shadow, 1);
                                UI.SetEnabled(Galaxy_MenuBorder_Text, 1);
                                UI.SetEnabled(Galaxy_MenuBorder_Color1, 1);
                                UI.SetEnabled(Galaxy_MenuBorder_Color2, 1);
                                UI.SetEnabled(Galaxy_MenuBorder_Color3, 1);
                                UI.SetEnabled(Galaxy_MenuBorder_Color4, 1);
                                UI.SetEnabled(Galaxy_MenuBorder_Color5, 1);
                                UI.SetEnabled(Galaxy_MenuBorder_Color6, 1);
                                UI.SetEnabled(Galaxy_MenuBorder_Color7, 1);
                                UI.SetEnabled(Galaxy_MenuBorder_Color8, 1);
                                UI.SetEnabled(Galaxy_MenuBorder_RGB_Line, 1);
                                UI.SetEnabled(Galaxy_MenuBorder_RGB_Border, 1);
                                if (UI.GetValue(Galaxy_MenuBorder_Text)) {
                                    UI.SetEnabled(Galaxy_MenuBorder_RGB_Text, 1);
                                    if (UI.GetValue(Galaxy_MenuBorder_RGB_Text)) {
                                        UI.SetEnabled(Galaxy_MenuBorder_Text_Alpha, 1);
                                    }
                                }
                                if (UI.GetValue(Galaxy_MenuBorder_RGB_Line)) {
                                    UI.SetEnabled(Galaxy_MenuBorder_Line_Alpha, 1);
                                }
                                if (UI.GetValue(Galaxy_MenuBorder_RGB_Border)) {
                                    UI.SetEnabled(Galaxy_MenuBorder_Border_Alpha, 1);
                                }
                            }
                        }
                        break;
                    case 5:
                        UI.SetEnabled(Galaxy_SpeedGraph, 1);
                        if (UI.GetValue(Galaxy_SpeedGraph)) {
                            UI.SetEnabled(Galaxy_SpeedGraph_Color, 1);
                            UI.SetEnabled(Galaxy_SpeedGraph_X, 1);
                            UI.SetEnabled(Galaxy_SpeedGraph_Y, 1);
                            if (UI.GetValue(Galaxy_SpeedGraph_Color)) {
                                UI.SetEnabled(Galaxy_SpeedGraph_RGBSpeedGraph, 1);
                                UI.SetEnabled(Galaxy_SpeedGraph_RGBSpeedLine, 1);
                                UI.SetEnabled(Galaxy_SpeedGraph_RGBSpeedText, 1);
                                UI.SetEnabled(Galaxy_SpeedGraph_Color1, 1);
                                UI.SetEnabled(Galaxy_SpeedGraph_Color2, 1);
                                UI.SetEnabled(Galaxy_SpeedGraph_Color3, 1);
                                UI.SetEnabled(Galaxy_SpeedGraph_Color4, 1);
                                UI.SetEnabled(Galaxy_SpeedGraph_Color5, 1);
                                if (UI.GetValue(Galaxy_SpeedGraph_RGBSpeedGraph)) {
                                    UI.SetEnabled(Galaxy_SpeedGraph_Graph_Alpha, 1);
                                }
                                if (UI.GetValue(Galaxy_SpeedGraph_RGBSpeedLine)) {
                                    UI.SetEnabled(Galaxy_SpeedGraph_Line_Alpha, 1);
                                }
                                if (UI.GetValue(Galaxy_SpeedGraph_RGBSpeedText)) {
                                    UI.SetEnabled(Galaxy_SpeedGraph_Text_Alpha, 1);
                                }
                            }
                        }
                        break;
                    case 6:
                        UI.SetEnabled(Galaxy_1way, 1);
                        if (UI.GetValue(Galaxy_1way)) {
                            UI.SetEnabled(Galaxy_1way_Circle, 1);
                            UI.SetEnabled(Galaxy_1way_Location, 1);
                            UI.SetEnabled(Galaxy_1way_Extra, 1);
                            UI.SetEnabled(Galaxy_1way_Distance, 1);
                            UI.SetEnabled(Galaxy_1way_Line, 1);
                            UI.SetEnabled(Galaxy_1way_Type, 1);
                            UI.SetEnabled(Galaxy_1way_LineLength, 1);
                            UI.SetEnabled(Galaxy_1way_RenderDist, 1);
                        }
                        break;
                    case 7:
                        UI.SetEnabled(Galaxy_FreeCamera, 1);
                        if (UI.GetValue(Galaxy_FreeCamera)) {
                            UI.SetEnabled(Galaxy_FreeCamera_Value, 1);
                        }
                        break;
                    case 8:
                        UI.SetEnabled(Galaxy_EnemyView, 1);
                        if (UI.GetValue(Galaxy_EnemyView)) {
                            UI.SetEnabled(Galaxy_EnemyView_X, 1);
                            UI.SetEnabled(Galaxy_EnemyView_Y, 1);
                            UI.SetEnabled(Galaxy_EnemyView_Color, 1);
                            if (UI.GetValue(Galaxy_EnemyView_Color)) {
                                UI.SetEnabled(Galaxy_EnemyView_RGBLine, 1);
                                UI.SetEnabled(Galaxy_EnemyView_RGBText, 1);
                                UI.SetEnabled(Galaxy_EnemyView_Color1, 1);
                                UI.SetEnabled(Galaxy_EnemyView_Color2, 1);
                                UI.SetEnabled(Galaxy_EnemyView_Color3, 1);
                                UI.SetEnabled(Galaxy_EnemyView_Color4, 1);
                                if (UI.GetValue(Galaxy_EnemyView_RGBLine)) {
                                    UI.SetEnabled(Galaxy_EnemyView_Line_Alpha, 1);
                                }
                                if (UI.GetValue(Galaxy_EnemyView_RGBText)) {
                                    UI.SetEnabled(Galaxy_EnemyView_Text_Alpha, 1);
                                }
                            }
                        }
                        break;
                    case 9:
                        UI.SetEnabled(Galaxy_AspectRatio, 1);
                        if (UI.GetValue(Galaxy_AspectRatio)) {
                            UI.SetEnabled(Galaxy_AspectRatio_Value, 1);
                        }
                        break;
                }
                break;

        }
    }
    if(UI.GetValue(Galaxy_Misc)){
        UI.SetEnabled(Galaxy_ClanTag, 1);
    }
}

//GalaxyAntiAIM
function GalaxyAntiAim() {
    if (UI.GetValue(Galaxy_AntiAim)) {
        AntiAim.SetOverride(1);
        //模式
        const RealMode = UI.GetValue(Galaxy_AA_RealMode)
        const FakeMode = UI.GetValue(Galaxy_AA_FakeMode)
        const JitterMode = UI.GetValue(Galaxy_AA_JitterMode)
        const YawMode = UI.GetValue(Galaxy_AA_YawMode)
        //AA角度（静态)
        const RealValue = UI.GetValue(Galaxy_AA_RealValue)
        const FakeValue = UI.GetValue(Galaxy_AA_FakeValue)
        //AA角度（随机)
        const RealValueMin = UI.GetValue(Galaxy_AA_RealValueMin)
        const RealValueMax = UI.GetValue(Galaxy_AA_RealValueMax)
        const FakeValueMin = UI.GetValue(Galaxy_AA_FakeValueMin)
        const FakeValueMax = UI.GetValue(Galaxy_AA_FakeValueMax)
        //Jitter Value
        const Jitter = ["Rage", "Anti Aim", "Directions", "Jitter offset"]
        const JitterMin = UI.GetValue(Galaxy_AA_JitterMin)
        const JitterMax = UI.GetValue(Galaxy_AA_JitterMax)
        const JitterSwitch1 = UI.GetValue(Galaxy_AA_JitterSwitch1)
        const JitterSwitch2 = UI.GetValue(Galaxy_AA_JitterSwitch2)
        const JitterSwitch3 = UI.GetValue(Galaxy_AA_JitterSwitch3)
        const JitterSwitch4 = UI.GetValue(Galaxy_AA_JitterSwitch4)
        const JitterSwitchDelay = UI.GetValue(Galaxy_AA_JitterDelay)
        //Yaw Value
        const Yaw = ["Rage", "Anti Aim", "Directions", "Yaw offset"]
        const YawMin = UI.GetValue(Galaxy_AA_YawMin)
        const YawMax = UI.GetValue(Galaxy_AA_YawMax)
        const YawSwitch1 = UI.GetValue(Galaxy_AA_YawSwitch1)
        const YawSwitch2 = UI.GetValue(Galaxy_AA_YawSwitch2)
        const YawSwitch3 = UI.GetValue(Galaxy_AA_YawSwitch3)
        const YawSwitch4 = UI.GetValue(Galaxy_AA_YawSwitch4)
        const YawSwitchDelay = UI.GetValue(Galaxy_AA_YawDelay)
        //切换



        //AA方向切换
        const Invert = UI.GetValue(["Rage", "Anti Aim", "General", "Key assignment", "AA direction inverter"])
        //随机
        RandomRealValue = Math.floor(Math.random() * (RealValueMax - RealValueMin + 1)) + RealValueMin
        RandomFakeValue = Math.floor(Math.random() * (FakeValueMax - FakeValueMin + 1)) + FakeValueMin
        RandomJitterValue = Math.floor(Math.random() * (JitterMax - JitterMin + 1)) + JitterMin
        RandomYawValue = Math.floor(Math.random() * (YawMax - YawMin + 1)) + YawMin
        //AA

        //真身角度
        if ((RealMode) == 0) {
            if (Invert) {
                AntiAim.SetRealOffset(-RealValue);
            } else {
                AntiAim.SetRealOffset(RealValue);
            }
        } else {
            if (Invert) {
                AntiAim.SetRealOffset(-RandomRealValue);
            } else {
                AntiAim.SetRealOffset(RandomRealValue);
            }

        }
        //假身角度
        if ((FakeMode) == 0) {
            if (Invert) {
                AntiAim.SetFakeOffset(-FakeValue);
            } else {
                AntiAim.SetFakeOffset(FakeValue);
            }
        } else {
            if (Invert) {
                AntiAim.SetFakeOffset(-RandomFakeValue);
            } else {
                AntiAim.SetFakeOffset(RandomFakeValue);
            }

        }
        //Jitter Value
        if ((JitterMode) == 1) {
            if (Invert) {
                UI.SetValue(Jitter, -RandomJitterValue)
            } else {
                UI.SetValue(Jitter, RandomJitterValue)
            }
        }
        JS_Switch = 0;
        if ((JitterMode) == 2) {

            switch(JS_Switch){
                case 0:{
                    JS_Value = JitterSwitch1
                    break;
                }
                case 1:{
                    JS_Value = JitterSwitch2
                    break;
                }
                case 2:{
                    JS_Value = JitterSwitch3
                    break;
                }
                case 3:{
                    JS_Value = JitterSwitch4
                    break;
                }
            }
            if (JS_Switch == 3){
                JS_Switch = 0;
            }else{
                JS_Switch = JS_Switch + 1;
            }
            if (Invert) {
                UI.SetValue(Jitter, -JS_Value)
            } else {
                UI.SetValue(Jitter, JS_Value)
            }
        }
        //Yaw Value
        if ((YawMode) == 1) {
            if (Invert) {
                UI.SetValue(Yaw, -RandomYawValue)
            } else {
                UI.SetValue(Yaw, RandomYawValue)
            }
        }
    }else {
        AntiAim.SetOverride(0);
    }
    //检查AA数值
    if (RealValueMin > RealValueMax) {
        UI.SetValue(Galaxy_AA_RealValueMin, RealValueMax)
    }
    if (FakeValueMin > FakeValueMax) {
        UI.SetValue(Galaxy_AA_FakeValueMin, FakeValueMax)
    }
    if (JitterMin > JitterMax) {
        UI.SetValue(Galaxy_AA_JitterMin, JitterMax)
    }
}


//GalaxyVisuals

function DrawGalaxyBar() {

//定义信息栏变量
//RGB
    var colors = HSV2RGB(Global.Realtime() * 0.21, 1, 1);

//自定义字体
//标题字体
    const font_36 = Render.GetFont(font, 36, true);
//文本字体
    const font_20 = Render.GetFont(font, 20, true);

//定义Galaxy 信息栏变量

// IB = GSL信息栏 (Information Bar)
// Enable_IB_Color = 启用自定义信息栏颜色
// IB_X = GSL信息栏 x坐标
// IB_Y = GSL信息栏 y坐标
// IB_TitleColor =  GSL信息栏 标题颜色
// IB_TextColor = GSL信息栏 文本内容颜色
// IB_Color1 = GSL信息栏 背景渐变色1
// IB_Color2 = GSL信息栏 背景渐变色2
// IB_Color1 = GSL信息栏 背景渐变色3
// IB_Color2 = GSL信息栏 背景渐变色4
// IB_LineColor1 = GSL信息栏 分界线颜色1
// IB_LineColor2 = GSL信息栏 分界线颜色2
// IB_RGBLine = GSL信息栏 RGB分界线
// IB_RGBTitle = GSL信息栏 RGB标题
// IB_Line_Alpha = 分界线RGB色深
// IB_Title_Alpha = 标题RGB色深


    const Enable_IB_Color = UI.GetValue(Galaxy_Bar_Color)
    const IB_X = UI.GetValue(Galaxy_Bar_X)
    const IB_Y = UI.GetValue(Galaxy_Bar_Y)
    const IB_TitleColor = UI.GetColor(Galaxy_Bar_TitleColor)
    const IB_TextColor = UI.GetColor(Galaxy_Bar_TextColor)
    const IB_Color1 = UI.GetColor(Galaxy_Bar_Color1)
    const IB_Color2 = UI.GetColor(Galaxy_Bar_Color2)
    const IB_Color3 = UI.GetColor(Galaxy_Bar_Color3)
    const IB_Color4 = UI.GetColor(Galaxy_Bar_Color4)
    const IB_LineColor1 = UI.GetColor(Galaxy_Bar_LineColor1)
    const IB_LineColor2 = UI.GetColor(Galaxy_Bar_LineColor2)
    const IB_RGBLine = UI.GetValue(Galaxy_Bar_RGBLine)
    const IB_RGBTitle = UI.GetValue(Galaxy_Bar_RGBTitle)
    const IB_Line_Alpha = UI.GetValue(Galaxy_Bar_RGBLine_Alpha)
    const IB_Title_Alpha = UI.GetValue(Galaxy_Bar_RGBTitle_Alpha)
    const IB_WithMenuOpen = UI.GetValue(Galaxy_Bar_MenuOpen)

//拖动界面
    if (UI.IsMenuOpen()) {
        var x = IB_X - 100,
            y = IB_Y - 100,
            width = 400,
            height = 400;
        difference = [0, 0]

        cursor_pos = Input.GetCursorPosition();

        if (Input.IsKeyPressed(0x01) && (cursor_pos[0] > x && (cursor_pos[0] < (x + width) && (cursor_pos[1] > y - 20 && (cursor_pos[1] < (y + height + 16)))))) {
            x = cursor_pos[0] - difference[0];
            y = cursor_pos[1] - difference[1];

            UI.SetValue(Galaxy_Bar_X, x)
            UI.SetValue(Galaxy_Bar_Y, y)
        } else {
            difference[0] = cursor_pos[0] - x;
            difference[1] = cursor_pos[1] - y;
        }
    }

//渲染Galaxy 信息栏
    if (IB_WithMenuOpen) {
        if (UI.IsMenuOpen()) {
            if (Enable_IB_Color) {
                //渲染标题
                if (IB_RGBTitle) {
                    Render.String(IB_X + 6, IB_Y - 2, 0, "GalaxySense.Lite", [colors.r, colors.g, colors.b, IB_Title_Alpha], font_36)
                } else {
                    Render.String(IB_X + 6, IB_Y - 2, 0, "GalaxySense.Lite", IB_TitleColor, font_36)
                }
                //渲染圆角矩形(自定义颜色)
                //上半部分
                Render.GradientRect(IB_X - 2, IB_Y + 2, 404, 42, 2, IB_Color1, IB_Color2);
                Render.GradientRect(IB_X - 1, IB_Y + 1, 402, 44, 3, IB_Color1, IB_Color2);
                Render.GradientRect(IB_X - 0, IB_Y + 0, 400, 46, 4, IB_Color1, IB_Color2);
                //下半部分
                Render.GradientRect(IB_X - 2, IB_Y + 53, 404, 146, 2, IB_Color3, IB_Color4);
                Render.GradientRect(IB_X - 1, IB_Y + 52, 402, 148, 3, IB_Color3, IB_Color4);
                Render.GradientRect(IB_X - 0, IB_Y + 51, 400, 150, 4, IB_Color3, IB_Color4);
                //渲染分界线
                if (IB_RGBLine) {
                    Render.GradientRect(IB_X - 0, IB_Y + 48, 400, 2, 4, [colors.r, colors.g, colors.b, IB_Line_Alpha], [colors.b, colors.g, colors.r, IB_Line_Alpha]);
                } else {
                    Render.GradientRect(IB_X - 0, IB_Y + 48, 400, 2, 4, IB_LineColor1, IB_LineColor2);
                }
                //渲染文本
                Render.String(IB_X + 6, IB_Y + 70, 0, "GalaxySense.Lite", IB_TextColor, font_20)
                Render.String(IB_X + 6, IB_Y + 100, 0, "Galaxy Version ——" + Version, IB_TextColor, font_20)
                Render.String(IB_X + 6, IB_Y + 130, 0, "Galaxy Update ——" + Update, IB_TextColor, font_20)
                Render.String(IB_X + 6, IB_Y + 160, 0, "Powered By Umbrella", IB_TextColor, font_20)
            } else {
                //渲染标题
                Render.String(IB_X + 6, IB_Y - 2, 0, "GalaxySense.Lite", [colors.r, colors.g, colors.b, 255], font_36)
                //渲染圆角矩形(默认颜色)
                //上半部分
                Render.GradientRect(IB_X - 2, IB_Y + 2, 404, 42, 2, [210, 210, 210, 45], [210, 210, 210, 45]);
                Render.GradientRect(IB_X - 1, IB_Y + 1, 402, 44, 3, [210, 210, 210, 45], [210, 210, 210, 45]);
                Render.GradientRect(IB_X - 0, IB_Y + 0, 400, 46, 4, [210, 210, 210, 45], [210, 210, 210, 45]);
                //下半部分
                Render.GradientRect(IB_X - 2, IB_Y + 53, 404, 146, 2, [210, 210, 210, 45], [210, 210, 210, 45]);
                Render.GradientRect(IB_X - 1, IB_Y + 52, 402, 148, 3, [210, 210, 210, 45], [210, 210, 210, 45]);
                Render.GradientRect(IB_X - 0, IB_Y + 51, 400, 150, 4, [210, 210, 210, 45], [210, 210, 210, 45]);

                //渲染分界线
                Render.GradientRect(IB_X - 0, IB_Y + 48, 400, 2, 4, [colors.r, colors.g, colors.b, 255], [colors.b, colors.g, colors.r, 255]);
                //渲染文本
                Render.String(IB_X + 6, IB_Y + 70, 0, "GalaxySense.Lite", [255, 255, 255, 255], font_20)
                Render.String(IB_X + 6, IB_Y + 100, 0, "Galaxy Version ——" + Version, [255, 255, 255, 255], font_20)
                Render.String(IB_X + 6, IB_Y + 130, 0, "Galaxy Update ——" + Update, [255, 255, 255, 255], font_20)
                Render.String(IB_X + 6, IB_Y + 160, 0, "Powered By Umbrella", [255, 255, 255, 255], font_20)

            }
        }
    } else {
        if (Enable_IB_Color) {
            //渲染标题
            if (IB_RGBTitle) {
                Render.String(IB_X + 6, IB_Y - 2, 0, "GalaxySense.Lite", [colors.r, colors.g, colors.b, IB_Title_Alpha], font_36)
            } else {
                Render.String(IB_X + 6, IB_Y - 2, 0, "GalaxySense.Lite", IB_TitleColor, font_36)
            }
            //渲染圆角矩形(自定义颜色)
            //上半部分
            Render.GradientRect(IB_X - 2, IB_Y + 2, 404, 42, 2, IB_Color1, IB_Color2);
            Render.GradientRect(IB_X - 1, IB_Y + 1, 402, 44, 3, IB_Color1, IB_Color2);
            Render.GradientRect(IB_X - 0, IB_Y + 0, 400, 46, 4, IB_Color1, IB_Color2);
            //下半部分
            Render.GradientRect(IB_X - 2, IB_Y + 53, 404, 146, 2, IB_Color3, IB_Color4);
            Render.GradientRect(IB_X - 1, IB_Y + 52, 402, 148, 3, IB_Color3, IB_Color4);
            Render.GradientRect(IB_X - 0, IB_Y + 51, 400, 150, 4, IB_Color3, IB_Color4);
            //渲染分界线
            if (IB_RGBLine) {
                Render.GradientRect(IB_X - 0, IB_Y + 48, 400, 2, 4, [colors.r, colors.g, colors.b, IB_Line_Alpha], [colors.b, colors.g, colors.r, IB_Line_Alpha]);
            } else {
                Render.GradientRect(IB_X - 0, IB_Y + 48, 400, 2, 4, IB_LineColor1, IB_LineColor2);
            }

            //渲染文本
            Render.String(IB_X + 6, IB_Y + 70, 0, "GalaxySense.Lite", IB_TextColor, font_20)
            Render.String(IB_X + 6, IB_Y + 100, 0, "Galaxy Version ——" + Version, IB_TextColor, font_20)
            Render.String(IB_X + 6, IB_Y + 130, 0, "Galaxy Update ——" + Update, IB_TextColor, font_20)
            Render.String(IB_X + 6, IB_Y + 160, 0, "Powered By Umbrella", IB_TextColor, font_20)
        } else {
            //渲染标题
            Render.String(IB_X + 6, IB_Y - 2, 0, "GalaxySense.Lite", [colors.r, colors.g, colors.b, 255], font_36)
            //渲染圆角矩形(默认颜色)
            //上半部分
            Render.GradientRect(IB_X - 2, IB_Y + 2, 404, 42, 2, [210, 210, 210, 45], [210, 210, 210, 45]);
            Render.GradientRect(IB_X - 1, IB_Y + 1, 402, 44, 3, [210, 210, 210, 45], [210, 210, 210, 45]);
            Render.GradientRect(IB_X - 0, IB_Y + 0, 400, 46, 4, [210, 210, 210, 45], [210, 210, 210, 45]);
            //下半部分
            Render.GradientRect(IB_X - 2, IB_Y + 53, 404, 146, 2, [210, 210, 210, 45], [210, 210, 210, 45]);
            Render.GradientRect(IB_X - 1, IB_Y + 52, 402, 148, 3, [210, 210, 210, 45], [210, 210, 210, 45]);
            Render.GradientRect(IB_X - 0, IB_Y + 51, 400, 150, 4, [210, 210, 210, 45], [210, 210, 210, 45]);
            //渲染分界线
            Render.GradientRect(IB_X - 0, IB_Y + 48, 400, 2, 4, [colors.r, colors.g, colors.b, 255], [colors.b, colors.g, colors.r, 255]);
            //渲染文本
            Render.String(IB_X + 6, IB_Y + 70, 0, "GalaxySense.Lite", [255, 255, 255, 255], font_20)
            Render.String(IB_X + 6, IB_Y + 100, 0, "Galaxy Version ——" + Version, [255, 255, 255, 255], font_20)
            Render.String(IB_X + 6, IB_Y + 130, 0, "Galaxy Update ——" + Update, [255, 255, 255, 255], font_20)
            Render.String(IB_X + 6, IB_Y + 160, 0, "Powered By Umbrella", [255, 255, 255, 255], font_20)
        }
    }

}

//热键指示器

function DrawGalaxyKeys() {

//定义热键指示器变量
    var getHotkey2keyName = {
        1: "M1",
        2: "M2",
        4: "M3",
        5: "M4",
        6: "M5",
        8: "BackS",
        9: "TAB",
        13: "ENTER",
        16: "SHIFT",
        17: "CTRL",
        18: "ALT",
        20: "CAPS",
        32: "SPACE",
        33: "PGUP",
        34: "PGDOWN",
        35: "END",
        36: "HOME",
        37: "LEFT",
        38: "UP",
        39: "RIGHT",
        40: "DOWN",
        48: "0",
        49: "1",
        50: "2",
        51: "3",
        52: "4",
        53: "5",
        54: "6",
        55: "7",
        56: "8",
        57: "9",
        65: "A",
        66: "B",
        67: "C",
        68: "D",
        69: "E",
        70: "F",
        71: "G",
        72: "H",
        73: "I",
        74: "J",
        75: "K",
        76: "L",
        77: "M",
        78: "N",
        79: "O",
        80: "P",
        81: "Q",
        82: "R",
        83: "S",
        84: "T",
        85: "U",
        86: "V",
        87: "W",
        88: "X",
        89: "Y",
        90: "Z",
        96: "NUM0",
        97: "NUM1",
        98: "NUM2",
        99: "NUM3",
        100: "NUM4",
        101: "NUM5",
        102: "NUM6",
        103: "NUM7",
        104: "NUM8",
        105: "NUM9",
        106: "*",
        107: "+",
        109: "-",
        110: ".",
        111: "/",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12"
    };
// HOTKEY_ragebotactive = ["Rage", "General", "General", "Key assignment", "Ragebot activation"]
    HOTKEY_resolveroverride = ["Rage", "General", "General", "Key assignment", "Resolver override"]
    HOTKEY_forcebodyaim = ["Rage", "General", "General", "Key assignment", "Force body aim"]
    HOTKEY_forcesafepoint = ["Rage", "General", "General", "Key assignment", "Force safe point"]

    HOTKEY_doubletap = ["Rage", "Exploits", "Keys", "Key assignment", "Double tap"]
    HOTKEY_hideshots = ["Rage", "Exploits", "Keys", "Key assignment", "Hide shots"]

// HOTKEY_leftdirection = ["Rage", "Anti Aim", "General", "Key assignment", "Left direction"]
// HOTKEY_backdirection = ["Rage", "Anti Aim", "General", "Key assignment", "Back direction"]
// HOTKEY_rightdirection = ["Rage", "Anti Aim", "General", "Key assignment", "Right direction"]
// HOTKEY_mousedirection = ["Rage", "Anti Aim", "General", "Key assignment", "Mouse direction"]
    HOTKEY_aainverter = ["Rage", "Anti Aim", "General", "Key assignment", "AA direction inverter"]
// HOTKEY_jitter = ["Rage", "Anti Aim", "General", "Key assignment", "Jitter"]
    HOTKEY_slowwalk = ["Rage", "Anti Aim", "General", "Key assignment", "Slow walk"]
    HOTKEY_fakeduck = ["Rage", "Anti Aim", "General", "Key assignment", "Fake duck"]

    HOTKEY_edgejump = ["Misc.", "Keys", "Keys", "Key assignment", "Edge jump"]
    HOTKEY_autopeek = ["Misc.", "Keys", "Keys", "Key assignment", "Auto peek"]
    HOTKEY_thirdperson = ["Misc.", "Keys", "Keys", "Key assignment", "Thirdperson"]
    HOTKEY_zoom = ["Misc.", "Keys", "Keys", "Key assignment", "Zoom"]
    HOTKEY_freecam = ["Misc.", "Keys", "Keys", "Key assignment", "Freecam"]

    function states(path) {
        return UI.GetHotkeyState(path);
    }

    function keys(path) {
        return UI.GetHotkey(path).toString();
    }

//RGB
    var colors = HSV2RGB(Global.Realtime() * 0.20, 1, 1);

//自定义字体
//标题字体
    const font_26 = Render.GetFont(font, 26, true);
//文本字体
    const font_16 = Render.GetFont(font, 16, true);

//定义Galaxy 热键指示器变量

// KI = GSL热键指示器 (Key Indicator)
// Enable_KI_Color = 启用自定义热键指示器颜色
// KI_X = GSL热键指示器 x坐标
// KI_Y = GSL热键指示器 y坐标
// KI_TitleColor =  GSL热键指示器 标题颜色
// KI_TextColor = GSL热键指示器 文本内容颜色
// KI_Color1 = GSL热键指示器 背景渐变色1
// KI_Color2 = GSL热键指示器 背景渐变色2
// KI_LineColor1 = GSL热键指示器 分界线颜色1
// KI_LineColor2 = GSL热键指示器 分界线颜色2
// KI_LineColor3 = GSL热键指示器 背景颜色1
// KI_LineColor3 = GSL热键指示器 背景颜色2
// KI_RGBLine = 热键指示器 RGB分界线
// KI_RGBTitle = 热键指示器 RGB标题
// KI_Line_Alpha = 分界线RGB色深
// KI_Title_Alpha = 标题RGB色深

    const Enable_KI_Color = UI.GetValue(Galaxy_Keys_Color)
    const KI_X = UI.GetValue(Galaxy_Keys_X)
    const KI_Y = UI.GetValue(Galaxy_Keys_Y)
    const KI_TitleColor = UI.GetColor(Galaxy_Keys_TitleColor)
    const KI_TextColor = UI.GetColor(Galaxy_Keys_TextColor)
    const KI_Color1 = UI.GetColor(Galaxy_Keys_Color1)
    const KI_Color2 = UI.GetColor(Galaxy_Keys_Color2)
    const KI_Color3 = UI.GetColor(Galaxy_Keys_Color3)
    const KI_Color4 = UI.GetColor(Galaxy_Keys_Color4)
    const KI_LineColor1 = UI.GetColor(Galaxy_Keys_LineColor1)
    const KI_LineColor2 = UI.GetColor(Galaxy_Keys_LineColor2)
    const KI_RGBLine = UI.GetValue(Galaxy_Keys_RGBLine)
    const KI_RGBTitle = UI.GetValue(Galaxy_Keys_RGBTitle)
    const KI_Line_Alpha = UI.GetValue(Galaxy_Keys_RGBLine_Alpha)
    const KI_Title_Alpha = UI.GetValue(Galaxy_Keys_RGBTitle_Alpha)

//拖动界面
    if (UI.IsMenuOpen()) {
        var x = KI_X - 100, y = KI_Y - 100, width = 400, height = 400;
        difference = [0, 0]

        cursor_pos = Input.GetCursorPosition();

        if (Input.IsKeyPressed(0x01) && (cursor_pos[0] > x && (cursor_pos[0] < (x + width) && (cursor_pos[1] > y - 20 && (cursor_pos[1] < (y + height + 16)))))) {
            x = cursor_pos[0] - difference[0];
            y = cursor_pos[1] - difference[1];

            UI.SetValue(Galaxy_Keys_X, x)
            UI.SetValue(Galaxy_Keys_Y, y)
        } else {
            difference[0] = cursor_pos[0] - x;
            difference[1] = cursor_pos[1] - y;


        }
    }


//渲染Galaxy 热键指示

//按键设置
    var keyText = []
    var hotkeyText = []
    var enabledText = []

    if (UI.GetValue(HOTKEY_resolveroverride)) {
        hotkeyText.push("Resolver ")
        enabledText.push(states(HOTKEY_resolveroverride))
        keyText.push(keys(HOTKEY_resolveroverride))
    }
    if (UI.GetValue(HOTKEY_forcebodyaim)) {
        hotkeyText.push("Body aim ")
        enabledText.push(states(HOTKEY_forcebodyaim))
        keyText.push(keys(HOTKEY_forcebodyaim))
    }
    if (UI.GetValue(HOTKEY_forcesafepoint)) {
        hotkeyText.push("Safe point ")
        enabledText.push(states(HOTKEY_forcesafepoint))
        keyText.push(keys(HOTKEY_forcesafepoint))
    }

    if (UI.GetValue(HOTKEY_doubletap)) {
        hotkeyText.push("Doubletap ")
        enabledText.push(states(HOTKEY_doubletap))
        keyText.push(keys(HOTKEY_doubletap))
    }
    if (UI.GetValue(HOTKEY_hideshots)) {
        hotkeyText.push("Hideshots ")
        enabledText.push(states(HOTKEY_hideshots))
        keyText.push(keys(HOTKEY_hideshots))
    }

    if (UI.GetValue(HOTKEY_aainverter)) {
        hotkeyText.push("Inverter ")
        enabledText.push(states(HOTKEY_aainverter))
        keyText.push(keys(HOTKEY_aainverter))
    }
    if (UI.GetValue(HOTKEY_slowwalk)) {
        hotkeyText.push("Slowwalk ")
        enabledText.push(states(HOTKEY_slowwalk))
        keyText.push(keys(HOTKEY_slowwalk))
    }
    if (UI.GetValue(HOTKEY_fakeduck)) {
        hotkeyText.push("Fakeduck ")
        enabledText.push(states(HOTKEY_fakeduck))
        keyText.push(keys(HOTKEY_fakeduck))
    }

    if (UI.GetValue(HOTKEY_edgejump)) {
        hotkeyText.push("Edgejump ")
        enabledText.push(states(HOTKEY_edgejump))
        keyText.push(keys(HOTKEY_edgejump))
    }
    if (UI.GetValue(HOTKEY_autopeek)) {
        hotkeyText.push("Autopeek ")
        enabledText.push(states(HOTKEY_autopeek))
        keyText.push(keys(HOTKEY_autopeek))
    }
    if (UI.GetValue(HOTKEY_thirdperson)) {
        hotkeyText.push("Thirdperson ")
        enabledText.push(states(HOTKEY_thirdperson))
        keyText.push(keys(HOTKEY_thirdperson))
    }
    if (UI.GetValue(HOTKEY_zoom)) {
        hotkeyText.push("Zoom ")
        enabledText.push(states(HOTKEY_zoom))
        keyText.push(keys(HOTKEY_zoom))
    }
    if (UI.GetValue(HOTKEY_freecam)) {
        hotkeyText.push("Freecam ")
        enabledText.push(states(HOTKEY_freecam))
        keyText.push(keys(HOTKEY_freecam))
    }


//渲染指示器
    for (i = 0; i < hotkeyText.length; i++) {
        if (enabledText[i] == "Always") {
            needDiff = 51

            renderKeyText = "[-]";

        } else if (enabledText[i] == "Hold") {
            needDiff = 36

            renderKeyText = "[" + getHotkey2keyName[keyText[i]].toString() + "]";


        } else if (enabledText[i] == "Toggle") {
            needDiff = 49
            renderKeyText = "[" + getHotkey2keyName[keyText[i]].toString() + "]";

        }
    }
    if (Enable_KI_Color) {

        //自定义颜色
        //渲染标题
        if (KI_RGBTitle) {
            Render.String(KI_X + 100, KI_Y - 4, 0, "Galaxy Keys", [colors.r * 0.7, colors.g * 0.7, colors.b * 0.7, KI_Title_Alpha], font_26)
        } else {
            Render.String(KI_X + 100, KI_Y - 4, 0, "Galaxy Keys", KI_TitleColor, font_26)

        }

        //渲染圆角矩形(自定义颜色)
        Render.GradientRect(KI_X - 2, KI_Y + 2, 354, 30, 2, KI_Color1, KI_Color2);
        Render.GradientRect(KI_X - 1, KI_Y + 1, 352, 32, 3, KI_Color1, KI_Color2);
        Render.GradientRect(KI_X - 0, KI_Y + 0, 350, 34, 4, KI_Color1, KI_Color2);

        //渲染分界线
        if (KI_RGBLine) {
            Render.GradientRect(KI_X - 1, KI_Y + 36, 352, 2, 4, [colors.r, colors.g, colors.b, KI_Line_Alpha], [colors.b, colors.g, colors.r, KI_Line_Alpha]);
        } else {
            Render.GradientRect(KI_X - 1, KI_Y + 36, 352, 2, 4, KI_LineColor1, KI_LineColor2);

        }
        for (i = 0; i < hotkeyText.length; i++) {
            //渲染热键
            Render.String(KI_X + 105, KI_Y + 40 + 26 * i, 1, hotkeyText[i], [255, 255, 255, 255], font_16)
            Render.String(KI_X + 400 - needDiff * 2.5, KI_Y + 40 + 26 * i, 0, enabledText[i], [255, 255, 255, 255], font_16)
            Render.String(KI_X + 7, KI_Y + 40 + 26 * i, 0, renderKeyText, [255, 255, 255, 255], font_16)

            Render.GradientRect(KI_X - 2, KI_Y + 40, 354, 26 + 26 * i, 1, KI_Color3, KI_Color4);

        }
    } else {

        //默认颜色
        //渲染标题
        Render.String(KI_X + 100, KI_Y - 4, 0, "Galaxy Keys", [colors.r * 0.7, colors.g * 0.7, colors.b * 0.7, 255], font_26)

        //渲染圆角矩形(默认颜色)
        Render.GradientRect(KI_X - 2, KI_Y + 2, 354, 30, 2, [210, 210, 210, 45], [210, 210, 210, 45]);
        Render.GradientRect(KI_X - 1, KI_Y + 1, 352, 32, 3, [210, 210, 210, 45], [210, 210, 210, 45]);
        Render.GradientRect(KI_X - 0, KI_Y + 0, 350, 34, 4, [210, 210, 210, 45], [210, 210, 210, 45]);
        //渲染分界线
        Render.GradientRect(KI_X - 1, KI_Y + 36, 352, 2, 4, [colors.r, colors.g, colors.b, 255], [colors.b, colors.g, colors.r, 255]);
        for (i = 0; i < hotkeyText.length; i++) {
            //渲染热键
            Render.String(KI_X + 105, KI_Y + 40 + 26 * i, 1, hotkeyText[i], [255, 255, 255, 255], font_16)
            Render.String(KI_X + 400 - needDiff * 2.5, KI_Y + 40 + 26 * i, 0, enabledText[i], [255, 255, 255, 255], font_16)
            Render.String(KI_X + 7, KI_Y + 40 + 26 * i, 0, renderKeyText, [255, 255, 255, 255], font_16)

            Render.GradientRect(KI_X - 2, KI_Y + 40, 354, 26 + 26 * i, 1, [210, 210, 210, 45], [210, 210, 210, 45]);

        }
    }
}
//GSL副指示器

//头像球
function DrawGalaxyAvatar(){



    var area = {};

    area.new = function(x, y, w, h)
    {
        const area_info_t = {
            x: x,
            y: y,
            x2: x + w,
            y2: y + h
        };

        return area_info_t;
    }

    area.in_bounds = function(area, point)
    {
        return point.x > area.x && point.x < area.x2 && point.y > area.y && point.y < area.y2;
    }

    var point = {};

    point.new = function(x, y)
    {
        const point_info_t = {
            x: x,
            y: y
        };

        return point_info_t;
    }

    var me = Entity.GetLocalPlayer();
    var health = Entity.GetProp(me, "CBasePlayer", "m_iHealth");
    var armor = Entity.GetProp(me, "CCSPlayerResource", "m_iArmor");
    var money = Entity.GetProp(me, "CCSPlayer", "m_iAccount");

    var Avatar = Render.AddTexture("ot/scripts/resources/GSLAvatar.PNG");

    var Health_text = "" + health;
    var Money_text = "" + money;

    const font_10 = Render.GetFont(font, 10, true);



    if (iAlpha > 1) {
        iAlpha--;
    }

    if (getExp > Levelexp) {
        getExp = 0;
        Level++;
        Levelexp = Levelexp + 30;
    }
    if (health == "m_iHealth" || money == "m_iAccount") {
        Health_text = "0";
        Money_text = "0";
    }
    if (Level < 3) {
        Level_name = 'Noob'
    } else if (Level < 5) {
        Level_name = 'No Bad'
    } else if (Level < 7) {
        Level_name = 'Nice'
    } else {
        Level_name = 'God'
    }

    var enable = UI.GetValue(Galaxy_Avatar);
    var Avatar_Color1 = UI.GetColor(Galaxy_Avatar_Color1);
    var Avatar_Color2 = UI.GetColor(Galaxy_Avatar_Color2);
    var Avatar_Color3 = UI.GetColor(Galaxy_Avatar_Color3);
    var Avatar_Color4 = UI.GetColor(Galaxy_Avatar_Color4);
    var x = UI.GetValue(Galaxy_Avatar_X);
    var y = UI.GetValue(Galaxy_Avatar_Y);
    var colors = HSV2RGB(Global.Realtime() * 0.1, 1, 1);
    var BallAlpha = UI.GetValue(Galaxy_Avatar_RGBBall_Alpha);
    var LineAlpha = UI.GetValue(Galaxy_Avatar_RGBLine_Alpha);
    var UserName = Cheat.GetUsername()
    //Render

    if (enable) {
        if(UI.GetValue(Galaxy_Avatar_Color)){
            if(UI.GetValue(Galaxy_Avatar_RGBLine)) {
                Render.GradientRect(x + 6, y - 6, 41, 28, 1, [colors.r, colors.g, colors.b, LineAlpha], [colors.b, colors.g, colors.r, LineAlpha]);
                Render.GradientRect(x - 14, y - 6, 20, 28, 1, [colors.r, colors.g, colors.b, LineAlpha], [colors.b, colors.g, colors.r, LineAlpha]);

                Render.GradientRect(x + 151, y - 20, 157, 20, 1, [colors.b, colors.g, colors.r, LineAlpha], [colors.r, colors.g, colors.b, LineAlpha]);
                Render.GradientRect(x + 308, y - 20, 20, 20, 1, [colors.b, colors.g, colors.r, LineAlpha], [colors.r, colors.g, colors.b, LineAlpha]);
                Render.GradientRect(x + 154, y + 8, 120, 20, 1, [colors.b, colors.g, colors.r, LineAlpha], [colors.r, colors.g, colors.b, LineAlpha]);
                Render.GradientRect(x + 274, y + 8, 20, 20, 1, [colors.b, colors.g, colors.r, LineAlpha], [colors.r, colors.g, colors.b, LineAlpha]);
            }else{
                Render.GradientRect(x + 6, y - 6, 41, 28, 1, Avatar_Color1, Avatar_Color2);
                Render.GradientRect(x - 14, y - 6, 20, 28, 1, Avatar_Color1, Avatar_Color2);

                Render.GradientRect(x + 151, y - 20, 157, 20, 1, Avatar_Color2, Avatar_Color1);
                Render.GradientRect(x + 308, y - 20, 20, 20, 1, Avatar_Color2, Avatar_Color1);
                Render.GradientRect(x + 154, y + 8, 120, 20, 1, Avatar_Color2, Avatar_Color1);
                Render.GradientRect(x + 274, y + 8, 20, 20, 1, Avatar_Color2, Avatar_Color1);
            }
            Render.String(x + 23, y, 1, Health_text + "hp", [250 - health * 2.5, 5 + health * 2.5, 0, 255], font_10);
            Render.String(x + 165, y - 17, 0, UserName + " | Lever " + Level + " (+" + Level2 + "xp)", Avatar_Color3, font_10);
            Render.String(x + 165, y + 10, 0, "" + Level_name, Avatar_Color3, font_10);
            Render.String(x + 182, y + 10, 0, "       | $" + Money_text, Avatar_Color3, font_10);
            Render.String(x + 101, y + 32, 1, "" + Level, Avatar_Color3, font_10)

            Render.TexturedRect(x + 62, y - 33, 79, 79, Avatar);
            Render.FilledCircle(x + 101, y + 45, 15, Avatar_Color3);
            if(UI.GetValue(Galaxy_Avatar_RGBBall)) {
                Render_Arc(x + 101, y + 7, 57, 39, 270, 360, 50, [colors.r, colors.g, colors.b, BallAlpha])
            }else{
                Render_Arc(x + 101, y + 7, 57, 39, 270, 360, 50, Avatar_Color4)
            }

            Render_Arc(x + 101, y + 7, 57, 56, -7, (health * 3.32), 50, [250 - health * 2.5, 5 + health * 2.5, 0, 255])
            Render_Arc(x + 101, y + 7, 42, 41, 90, (armor * 3.53), 50, [60, 169, 247, 255])



        }else
        {
            Render.GradientRect(x + 6, y - 6, 41, 28, 1, [245, 245, 245, 150], [45, 45, 45, 20]);
            Render.GradientRect(x - 14, y - 6, 20, 28, 1, [245, 245, 245, 150], [45, 45, 45, 10]);
            Render.String(x + 23, y, 1, Health_text + "hp", [250 - health * 2.5, 5 + health * 2.5, 0, 255], font_10);
            Render.GradientRect(x + 151, y - 20, 157, 20, 1, [45, 45, 45, 10], [245, 245, 245, 150]);
            Render.GradientRect(x + 308, y - 20, 20, 20, 1, [45, 45, 45, 10], [245, 245, 245, 150]);
            Render.String(x + 165, y - 17, 0, UserName + " | Lever " + Level + " (+" + Level2 + "xp)", [255, 255, 255, 255], font_10);
            Render.GradientRect(x + 154, y + 8, 120, 20, 1, [45, 45, 45, 10], [245, 245, 245, 150]);
            Render.GradientRect(x + 274, y + 8, 20, 20, 1, [45, 45, 45, 10], [245, 245, 245, 150]);
            Render.String(x + 165, y + 10, 0, "" + Level_name, [222, 158, 12, 255], font_10);
            Render.String(x + 182, y + 10, 0, "       | $" + Money_text, [255, 255, 255, 255], font_10);

            Render.TexturedRect(x + 62, y - 33, 79, 79, Avatar);
            Render.FilledCircle(x + 101, y + 45, 15, [60, 169, 247, 200]);
            Render_Arc(x + 101, y + 7, 57, 39, 270, 360, 50, [245, 245, 245, 250])
            Render_Arc(x + 101, y + 7, 57, 56, -7, (health * 3.32), 50, [250 - health * 2.5, 5 + health * 2.5, 0, 255])
            Render_Arc(x + 101, y + 7, 42, 41, 90, (armor * 3.53), 50, [60, 169, 247, 255])
            Render.String(x + 101, y + 32, 1, "" + Level, [255, 255, 255, 255], font_10)
        }

        const window_area = area.new(x, y, 200, 32);
        const mouse_pos = point.new(Input.GetCursorPosition()[0], Input.GetCursorPosition()[1]);
        if (Input.IsKeyPressed(1) && UI.IsMenuOpen()) {
            if (area.in_bounds(window_area, mouse_pos)) {
                UI.SetValue(Galaxy_Avatar_X, mouse_pos.x - 100);
                UI.SetValue(Galaxy_Avatar_Y, mouse_pos.y - 10);
            }
        }
    }


    var iAlpha = 0, iExp = 0, getExp = 0, Level = 1, Levelexp = 30, iKills = 0, Level2 = 0 ,Level_name = 'noob';

//Out match is ended
    function EVENT_MATCH_END()
    {
        RESET();
        //Next map
        iExp = 0, getExp = 0,Level = 1;
    }

//Setup to default everything at player spawn
    function EVENT_PLAYER_SPAWN()
    {
        PlayerIndex = Event.GetInt("userid");
        iPlayerIndex = Entity.GetEntityFromUserID(PlayerIndex);

        //Reset for us
        if(Entity.GetLocalPlayer() == iPlayerIndex)    RESET();
    }

//Setup to default everything at round start
    function EVENT_ROUND_START()
    {
        RESET();

    }

    function RESET()
    {
        iAlpha = 0;
    }



    function EVENT_DEATH()
    {
        //Get them
        iVictim = Event.GetInt("userid");
        iVictim_index = Entity.GetEntityFromUserID(iVictim);
        iAttacker = Event.GetInt("attacker");
        iAttacker_index = Entity.GetEntityFromUserID(iAttacker);

        if(Entity.GetLocalPlayer() == iVictim_index && Entity.GetLocalPlayer() !== iAttacker_index)    return;

        //A kill count only for us + info
        if(Entity.GetLocalPlayer() == iAttacker_index)
        {
            //Simulating Exp
            iExp = getExp;
            //Frame count and transparency
            iAlpha = 255;
            //Reset if MAX (or remove if u want)
            getExp = getExp +20;
            Level2 = Level2 + 20;
        }
    }

}

//水印
function DrawGalaxyWaterMark(){

//WM=WaterMark
    const Watermark_enable = UI.GetValue(Galaxy_WaterMark)
    const colors = HSV2RGB(Global.Realtime() * 0.1, 1, 1);
    const WM_X = UI.GetValue(Galaxy_WaterMark_X)
    const WM_Y = UI.GetValue(Galaxy_WaterMark_Y)
    const WM_Color1 = UI.GetColor(Galaxy_WaterMark_Color1)
    const WM_Color2 = UI.GetColor(Galaxy_WaterMark_Color2)
    const WM_Color3 = UI.GetColor(Galaxy_WaterMark_Color3)
    const WM_Text_Alpha = UI.GetValue(Galaxy_WaterMark_Text_Alpha)
    const WM_Line_Alpha = UI.GetValue(Galaxy_WaterMark_Line_Alpha)
//自定义水印字体
    const font_12 = Render.GetFont(font, 12, true);
    const Font_12 = Render.GetFont(Font, 12, true);
    const cs12 = Render.GetFont("undefeated.ttf", 12, true);

//拖动界面
    if (UI.IsMenuOpen()) {
        var x = WM_X - 100,
            y = WM_Y - 100,
            width = 400,
            height = 400;
        difference = [0, 0]

        cursor_pos = Input.GetCursorPosition();

        if (Input.IsKeyPressed(0x01) && (cursor_pos[0] > x && (cursor_pos[0] < (x + width) && (cursor_pos[1] > y - 20 && (cursor_pos[1] < (y + height + 16)))))) {
            x = cursor_pos[0] - difference[0];
            y = cursor_pos[1] - difference[1];

            UI.SetValue(Galaxy_WaterMark_X, x)
            UI.SetValue(Galaxy_WaterMark_Y, y)
        } else {
            difference[0] = cursor_pos[0] - x;
            difference[1] = cursor_pos[1] - y;
        }
    }


    ScreenSize = Render.GetScreenSize();
    user = Cheat.GetUsername();
    userLength = Render.TextSize(user, font_12)[0];
    WM_W = userLength + 240;

    //渲染水印
    if (Watermark_enable) {
        if (UI.GetValue(Galaxy_WaterMark_Color)) {
            //自定义颜色
            // Rendering background, top line and bars
            Render.FilledRoundRect(WM_X, WM_Y + 1, WM_W, 37, WM_Color1);
            // Ping bar
            Render.FilledRect((WM_X + WM_W) - 56, WM_Y + 3, 1, 38, WM_Color2);
            // FPS Bar
            Render.FilledRect((WM_X + WM_W) - 121, WM_Y + 3, 1, 38, WM_Color2);
            // Time bar
            Render.FilledRect((WM_X + WM_W) - 184, WM_Y + 3, 1, 38, WM_Color2);
            // Username bar
            Render.FilledRect(WM_X + 30, WM_Y + 3, 1, 38, WM_Color2);
            // Top line, called after lines so item bars don't appear above this.
            if (UI.GetValue(Galaxy_WaterMark_RGBLine)) {
                Render.FilledRect(WM_X + 1, WM_Y + 1, WM_W - 1, 1, [colors.r, colors.g, colors.b, WM_Line_Alpha]);
                Render.FilledRect(WM_X + 0, WM_Y + 2, WM_W + 1, 4, [colors.r, colors.g, colors.b, WM_Line_Alpha]);
            } else {
                Render.FilledRect(WM_X + 1, WM_Y + 1, WM_W - 1, 1, WM_Color1);
                Render.FilledRect(WM_X + 0, WM_Y + 2, WM_W + 1, 4, WM_Color1);
            }
            // Declaring logo and rendering it above the background
            logo = Render.AddTexture("ot/scripts/resources/GSLLOGO.png");
            Render.TexturedRect(WM_X + 9, WM_Y + 15, 14, 17, logo);


            Render.String(WM_X + 44, WM_Y + 16, 0, "" + user, [255, 255, 255, 255], font_12)
        } else {
            //默认颜色
            // Rendering background, top line and bars
            Render.FilledRoundRect(WM_X, WM_Y + 1, WM_W, 37, [26, 26, 30, 45]);
            // Ping bar
            Render.FilledRect((WM_X + WM_W) - 56, WM_Y + 3, 1, 38, [255, 255, 255, 225]);
            // FPS Bar
            Render.FilledRect((WM_X + WM_W) - 121, WM_Y + 3, 1, 38, [255, 255, 255, 225]);
            // Time bar
            Render.FilledRect((WM_X + WM_W) - 184, WM_Y + 3, 1, 38, [255, 255, 255, 225]);
            // Username bar
            Render.FilledRect(WM_X + 30, WM_Y + 3, 1, 38, [255, 255, 255, 225]);
            // Top line, called after lines so item bars don't appear above this.
            Render.FilledRect(WM_X + 1, WM_Y + 1, WM_W - 1, 1, [colors.r, colors.g, colors.b, WM_Line_Alpha]);
            Render.FilledRect(WM_X + 0, WM_Y + 2, WM_W + 1, 4, [colors.r, colors.g, colors.b, WM_Line_Alpha]);
            // Declaring logo and rendering it above the background
            logo = Render.AddTexture("ot/scripts/resources/GSLLOGO.png.png");
            Render.TexturedRect(WM_X + 9, WM_Y + 15, 14, 17, logo);


        }
        // Ping
        ping = "" + Math.round(Entity.GetProp(Entity.GetLocalPlayer(), 'CPlayerResource', 'm_iPing'))
        if (ping == "NaN") {
            ping = "0";
        }
        if (10 > ping) {
            ping = "0" + ping;
        }
        // FPS
        fps = Math.floor(1 / Global.Frametime());
        if (100 > fps) {
            fps = "0" + fps;
        }
        // Time
        today = new Date();
        h = today.getHours();
        m = today.getMinutes();
        if (10 > m) {
            m = "0" + m;
        }
        if (UI.GetValue(Galaxy_WaterMark_Color)) {
            if (UI.GetValue(Galaxy_WaterMark_RGBText)) {
                Render.String((WM_X + WM_W) - 174, WM_Y + 16, 0, h + ":" + m, [colors.r, colors.g, colors.b, WM_Text_Alpha], font_12)
                Render.String((WM_X + WM_W) - 140, WM_Y + 17, 0, "t", [colors.r, colors.g, colors.b, WM_Text_Alpha], cs12)
                Render.String((WM_X + WM_W) - 113, WM_Y + 16, 0, "" + fps, [colors.r, colors.g, colors.b, WM_Text_Alpha], font_12)
                Render.String((WM_X + WM_W) - 86, WM_Y + 16, 0, "FPS", [colors.r, colors.g, colors.b, WM_Text_Alpha], Font_12)
                Render.String((WM_X + WM_W) - 45, WM_Y + 16, 0, ping, [colors.r, colors.g, colors.b, WM_Text_Alpha], font_12)
                Render.String((WM_X + WM_W) - 27, WM_Y + 16, 0, "MS", [colors.r, colors.g, colors.b, WM_Text_Alpha], Font_12)
                Render.String(WM_X + 44, WM_Y + 16, 0, "" + user, [colors.r, colors.g, colors.b, WM_Text_Alpha], font_12)
            }else {
                Render.String((WM_X + WM_W) - 174, WM_Y + 16, 0, h + ":" + m, WM_Color3, font_12)
                Render.String((WM_X + WM_W) - 140, WM_Y + 17, 0, "t", WM_Color3, cs12)
                Render.String((WM_X + WM_W) - 113, WM_Y + 16, 0, "" + fps, WM_Color3, font_12)
                Render.String((WM_X + WM_W) - 86, WM_Y + 16, 0, "FPS", WM_Color3, Font_12)
                Render.String((WM_X + WM_W) - 45, WM_Y + 16, 0, ping, WM_Color3, font_12)
                Render.String((WM_X + WM_W) - 27, WM_Y + 16, 0, "MS", WM_Color3, Font_12)
                Render.String(WM_X + 44, WM_Y + 16, 0, "" + user, WM_Color3, font_12)
            }
        } else{
            Render.String((WM_X + WM_W) - 174, WM_Y + 16, 0, h + ":" + m, [255, 255, 255, 255], font_12)
            Render.String((WM_X + WM_W) - 140, WM_Y + 17, 0, "t", [255, 255, 255, 255], cs12)
            Render.String((WM_X + WM_W) - 113, WM_Y + 16, 0, "" + fps, [255, 255, 255, 255], font_12)
            Render.String((WM_X + WM_W) - 86, WM_Y + 16, 0, "FPS", [255, 255, 255, 255], Font_12)
            Render.String((WM_X + WM_W) - 45, WM_Y + 16, 0, ping, [255, 255, 255, 255], font_12)
            Render.String((WM_X + WM_W) - 27, WM_Y + 16, 0, "MS", [255, 255, 255, 255], Font_12)
            Render.String(WM_X + 44, WM_Y + 16, 0, "" + user, [255, 255, 255, 255], font_12)
        }

    }

}

function DrawGalaxyMenuBorder() {
//自定义字体
//标题字体
    const font_36 = Render.GetFont(font, 36, true);
//文本字体
    const font_12 = Render.GetFont(font, 12, true);

    var mp = UI.GetMenuPosition();
    var colors = HSV2RGB(Global.Realtime() * 0.2, 1, 1);
    //MB = MenuBorder
    const MB_Text_Alpha = UI.GetValue(Galaxy_MenuBorder_Text_Alpha)
    const MB_Line_Alpha = UI.GetValue(Galaxy_MenuBorder_Line_Alpha)
    const MB_Border_Alpha = UI.GetValue(Galaxy_MenuBorder_Border_Alpha)
//color
    //1 2 =背景色 3 4 = rgb边框色 5 6 = 分界线色 7 标题颜色 8 文本颜色
    const MB_Color1 = UI.GetColor(Galaxy_MenuBorder_Color1)
    const MB_Color2 = UI.GetColor(Galaxy_MenuBorder_Color2)
    const MB_Color3 = UI.GetColor(Galaxy_MenuBorder_Color3)
    const MB_Color4 = UI.GetColor(Galaxy_MenuBorder_Color4)
    const MB_Color5 = UI.GetColor(Galaxy_MenuBorder_Color5)
    const MB_Color6 = UI.GetColor(Galaxy_MenuBorder_Color6)
    const MB_Color7 = UI.GetColor(Galaxy_MenuBorder_Color7)
    const MB_Color8 = UI.GetColor(Galaxy_MenuBorder_Color8)
    const screen_size = Global.GetScreenSize();
    const screen_x = screen_size[0];
    const screen_y = screen_size[1];
    const uidnow = Cheat.GetUsername();
    const today = new Date();
    const hours1 = today.getHours();
    const minutes1 = today.getMinutes();
    const seconds1 = today.getSeconds();
    const hours = hours1 <= 9 ? "0" + hours1 + ":" : hours1 + ":";
    const minutes = minutes1 <= 9 ? "0" + minutes1 + ":" : minutes1 + ":";
    const seconds = seconds1 <= 9 ? "0" + seconds1 : seconds1;


    if (UI.GetValue(Galaxy_MenuBorder_Color)) {
        //自定义RGB菜单边框
        if (UI.GetValue(Galaxy_MenuBorder_Shadow)) {
            Render.FilledRect(0, 0, screen_x, screen_y, [0, 0, 0, 150]);
        }
        if (UI.GetValue(Galaxy_MenuBorder_Text)) {
            if (UI.GetValue(Galaxy_MenuBorder_RGB_Text)) {
                Render.String(mp[0] + mp[2] / 2 - 130, mp[1] - 62, 0, "GalaxySense.Lite", [colors.r, colors.g, colors.b, MB_Text_Alpha], font_36);
                Render.String(mp[0] + mp[2] - 114, mp[1] - 30, 0, "  User Name " + uidnow, MB_Color8, font_12);
                Render.String(mp[0] + 5, mp[1] - 30, 0, hours + minutes + seconds, MB_Color8, font_12);

            } else {
                Render.String(mp[0] + mp[2] / 2 - 130, mp[1] - 62, 0, "GalaxySense.Lite", MB_Color7, font_36);
                Render.String(mp[0] + mp[2] - 114, mp[1] - 30, 0, "  User Name " + uidnow, MB_Color8, font_12);
                Render.String(mp[0] + 5, mp[1] - 30, 0, hours + minutes + seconds, MB_Color8, font_12);
            }
            Render.GradientRect(mp[0] - 9, mp[1] - 66, mp[2] + 18, 50, 2, MB_Color3, MB_Color4);
            Render.GradientRect(mp[0] - 8, mp[1] - 67, mp[2] + 16, 52, 3, MB_Color3, MB_Color4);
            Render.GradientRect(mp[0] - 7, mp[1] - 68, mp[2] + 14, 54, 4, MB_Color3, MB_Color4);
            if (UI.GetValue(Galaxy_MenuBorder_RGB_Line)) {
                Render.GradientRect(mp[0] - 7, mp[1] - 13, mp[2] + 14, 2, 4, [colors.r, colors.g, colors.b, MB_Line_Alpha], [colors.b, colors.g, colors.r, MB_Line_Alpha]);
            }else {
                Render.GradientRect(mp[0] - 7, mp[1] - 13, mp[2] + 14, 2, 4, MB_Color5, MB_Color6);
            }
        }
        if (UI.GetValue(Galaxy_MenuBorder_RGB_Border)) {
            Render.GradientRect(mp[0] - 5, mp[1], 20, mp[3], 0, [colors.r, colors.g, colors.b, MB_Border_Alpha], [colors.b, colors.g, colors.r, MB_Border_Alpha]);
            Render.GradientRect(mp[0] - 5, mp[1] - 5, mp[2] + 10, 20, 1, [colors.r, colors.g, colors.b, MB_Border_Alpha], [colors.b, colors.g, colors.r, MB_Border_Alpha]);
            Render.GradientRect(mp[0] - 15 + mp[2], mp[1], 20, mp[3], 0, [colors.b, colors.g, colors.r, MB_Border_Alpha], [colors.r, colors.g, colors.b, MB_Border_Alpha]);
            Render.GradientRect(mp[0] - 5, mp[1] - 15 + mp[3], mp[2] + 10, 20, 1, [colors.b, colors.g, colors.r, MB_Border_Alpha], [colors.r, colors.g, colors.b, MB_Border_Alpha]);

            Render.GradientRect(mp[0] - 6, mp[1] - 4, 1, mp[3] + 8, 0, [colors.r, colors.g, colors.b, MB_Border_Alpha], [colors.b, colors.g, colors.r, MB_Border_Alpha]);
            Render.GradientRect(mp[0] - 7, mp[1] - 2, 1, mp[3] + 4, 0, [colors.r, colors.g, colors.b, MB_Border_Alpha], [colors.b, colors.g, colors.r, MB_Border_Alpha]);
            Render.GradientRect(mp[0] - 8, mp[1], 1, mp[3], 0, [colors.r, colors.g, colors.b, MB_Border_Alpha], [colors.b, colors.g, colors.r, MB_Border_Alpha]);

            Render.GradientRect(mp[0] + mp[2] + 5, mp[1] - 4, 1, mp[3] + 8, 0, [colors.b, colors.g, colors.r, MB_Border_Alpha], [colors.r, colors.g, colors.b, MB_Border_Alpha]);
            Render.GradientRect(mp[0] + mp[2] + 6, mp[1] - 2, 1, mp[3] + 4, 0, [colors.b, colors.g, colors.r, MB_Border_Alpha], [colors.r, colors.g, colors.b, MB_Border_Alpha]);
            Render.GradientRect(mp[0] + mp[2] + 7, mp[1], 1, mp[3], 0, [colors.b, colors.g, colors.r, MB_Border_Alpha], [colors.r, colors.g, colors.b, MB_Border_Alpha]);

            Render.GradientRect(mp[0] - 4, mp[1] - 6, mp[2] + 8, 1, 1, [colors.r, colors.g, colors.b, MB_Border_Alpha], [colors.b, colors.g, colors.r, MB_Border_Alpha]);
            Render.GradientRect(mp[0] - 2, mp[1] - 7, mp[2] + 4, 1, 1, [colors.r, colors.g, colors.b, MB_Border_Alpha], [colors.b, colors.g, colors.r, MB_Border_Alpha]);
            Render.GradientRect(mp[0], mp[1] - 8, mp[2], 1, 1, [colors.r, colors.g, colors.b, MB_Border_Alpha], [colors.b, colors.g, colors.r, MB_Border_Alpha]);

            Render.GradientRect(mp[0] - 4, mp[1] + mp[3] + 5, mp[2] + 8, 1, 1, [colors.b, colors.g, colors.r, MB_Border_Alpha], [colors.r, colors.g, colors.b, MB_Border_Alpha]);
            Render.GradientRect(mp[0] - 2, mp[1] + mp[3] + 6, mp[2] + 4, 1, 1, [colors.b, colors.g, colors.r, MB_Border_Alpha], [colors.r, colors.g, colors.b, MB_Border_Alpha]);
            Render.GradientRect(mp[0], mp[1] + mp[3] + 7, mp[2], 1, 1, [colors.b, colors.g, colors.r, MB_Border_Alpha], [colors.r, colors.g, colors.b, MB_Border_Alpha]);

        } else {
            Render.GradientRect(mp[0] - 5, mp[1], 20, mp[3], 0, MB_Color1, MB_Color2);
            Render.GradientRect(mp[0] - 5, mp[1] - 5, mp[2] + 10, 20, 1, MB_Color1, MB_Color2);
            Render.GradientRect(mp[0] - 15 + mp[2], mp[1], 20, mp[3], 0, MB_Color2, MB_Color1);
            Render.GradientRect(mp[0] - 5, mp[1] - 15 + mp[3], mp[2] + 10, 20, 1, MB_Color2, MB_Color1);

            Render.GradientRect(mp[0] - 6, mp[1] - 4, 1, mp[3] + 8, 0, MB_Color1, MB_Color2);
            Render.GradientRect(mp[0] - 7, mp[1] - 2, 1, mp[3] + 4, 0, MB_Color1, MB_Color2);
            Render.GradientRect(mp[0] - 8, mp[1], 1, mp[3], 0, MB_Color1, MB_Color2);

            Render.GradientRect(mp[0] + mp[2] + 5, mp[1] - 4, 1, mp[3] + 8, 0, MB_Color2, MB_Color1);
            Render.GradientRect(mp[0] + mp[2] + 6, mp[1] - 2, 1, mp[3] + 4, 0, MB_Color2, MB_Color1);
            Render.GradientRect(mp[0] + mp[2] + 7, mp[1], 1, mp[3], 0, MB_Color2, MB_Color1);

            Render.GradientRect(mp[0] - 4, mp[1] - 6, mp[2] + 8, 1, 1, MB_Color1, MB_Color2);
            Render.GradientRect(mp[0] - 2, mp[1] - 7, mp[2] + 4, 1, 1, MB_Color1, MB_Color2);
            Render.GradientRect(mp[0], mp[1] - 8, mp[2], 1, 1, MB_Color1, MB_Color2);

            Render.GradientRect(mp[0] - 4, mp[1] + mp[3] + 5, mp[2] + 8, 1, 1, MB_Color2, MB_Color1);
            Render.GradientRect(mp[0] - 2, mp[1] + mp[3] + 6, mp[2] + 4, 1, 1, MB_Color2, MB_Color1);
        }

    } else {
        //默认RGB颜色
        Render.String(mp[0] + mp[2] / 2 - 130, mp[1] - 62, 0, "GalaxySense.Lite", [colors.r, colors.g, colors.b, 255], font_36);
        Render.String(mp[0] + mp[2] - 114, mp[1] - 30, 0, "  User Name " + uidnow, [255, 255, 255, 255], font_12);
        Render.String(mp[0] + 5, mp[1] - 30, 0, hours + minutes + seconds, [255, 255, 255, 255], font_12);

        Render.GradientRect(mp[0] - 9, mp[1] - 62, mp[2] + 18, 50, 2, [255, 255, 255, 30], [255, 255, 255, 30]);
        Render.GradientRect(mp[0] - 8, mp[1] - 63, mp[2] + 16, 52, 3, [255, 255, 255, 30], [255, 255, 255, 30]);
        Render.GradientRect(mp[0] - 7, mp[1] - 64, mp[2] + 14, 54, 4, [255, 255, 255, 30], [255, 255, 255, 30]);

        Render.GradientRect(mp[0] - 7, mp[1] - 13, mp[2] + 14, 2, 4, [colors.r, colors.g, colors.b, 255], [colors.b, colors.g, colors.r, 255]);

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
    }

}

//AA指示
function DrawGalaxyArrow() {

    const Arrow_Color1 = UI.GetColor(Galaxy_Arrow_Color1)
    const Arrow_Color2 = UI.GetColor(Galaxy_Arrow_Color2)
    const Arrow_Alpha1 = UI.GetValue(Galaxy_Arrow_Alpha1)
    const Arrow_Alpha2 = UI.GetValue(Galaxy_Arrow_Alpha2)
    const Invert = UI.GetValue(["Rage", "Anti Aim", "General", "Key assignment", "AA direction inverter"])
    const Arrow_Font = Render.GetFont("Acta Symbols W95 Arrows.ttf", 35, true)
    var x = Render.GetScreenSize()[0] / 2, y = Render.GetScreenSize()[1] / 2
    var colors = HSV2RGB(Global.Realtime() * 0.21, 1, 1);
    if (UI.GetValue(Galaxy_Arrow_Color)) {
        if (UI.GetValue(Galaxy_Arrow_RGB_Arrow)) {
            if (Invert == 1) {
                Render.String(x - 60, y - 13, 1, "g", [colors.r, colors.g, colors.b, Arrow_Alpha1], Arrow_Font)
            } else {
                Render.String(x - 60, y - 13, 1, "g", [colors.b, colors.g, colors.r, Arrow_Alpha2], Arrow_Font)
            }
            if (Invert == 0) {
                Render.String(x + 60, y - 13, 1, "h", [colors.r, colors.g, colors.b, Arrow_Alpha1], Arrow_Font)
            } else {
                Render.String(x + 60, y - 13, 1, "h", [colors.b, colors.g, colors.r, Arrow_Alpha2], Arrow_Font)
            }

        } else {
            if (Invert == 1) {
                Render.String(x - 60, y - 13, 1, "g", Arrow_Color1, Arrow_Font)
            } else {
                Render.String(x - 60, y - 13, 1, "g", Arrow_Color2, Arrow_Font)
            }
            if (Invert == 0) {
                Render.String(x + 60, y - 13, 1, "h", Arrow_Color1, Arrow_Font)
            } else {
                Render.String(x + 60, y - 13, 1, "h", Arrow_Color2, Arrow_Font)
            }


        }
    } else {
        if (Invert == 1) {
            Render.String(x - 60, y - 13, 1, "g", [110, 200, 210, 245], Arrow_Font)
        } else {
            Render.String(x - 60, y - 13, 1, "g", [210, 210, 210, 145], Arrow_Font)
        }
        if (Invert == 0) {
            Render.String(x + 60, y - 13, 1, "h", [110, 200, 210, 245], Arrow_Font)
        } else {
            Render.String(x + 60, y - 13, 1, "h", [210, 210, 210, 145], Arrow_Font)
        }
    }
}


//屏幕拉伸
function DrawGalaxyAspectRatio() {

    if (UI.GetValue(Galaxy_AspectRatio)) {
        menu_val = UI.GetValue(Galaxy_AspectRatio_Value);
        string_menu_val = menu_val.toString();

        Convar.SetString("r_aspectratio", string_menu_val);

    }

}

//图像
//速度图像



Cheat.RegisterCallback("player_connect_full", "reset");
Cheat.RegisterCallback("CreateMove", "lol");


function DrawGalaxyGraph() {

    // Graph Color
    //1 = 顶部线条 2 3 4 = 背景 5 = 图线
    var GraphColor1 = UI.GetColor(Galaxy_SpeedGraph_Color1);
    var GraphColor2 = UI.GetColor(Galaxy_SpeedGraph_Color2);
    var GraphColor3 = UI.GetColor(Galaxy_SpeedGraph_Color3);
    var GraphColor4 = UI.GetColor(Galaxy_SpeedGraph_Color4);
    var GraphColor5 = UI.GetColor(Galaxy_SpeedGraph_Color5);


    var graphdata = 10000;

    const player = Entity.GetLocalPlayer();
    const vec = Entity.GetProp(player, "CBasePlayer", "m_vecVelocity[0]");
    const velocity = Math.round(Math.sqrt(vec[0] * vec[0] + vec[1] * vec[1]));
    const in_air = Entity.GetProp(player, "CBasePlayer", "m_fFlags") & 1 || Entity.GetProp(player, "CBasePlayer", "m_fFlags") & 17;
    const flags = Entity.GetProp(player, "CBasePlayer", "m_fFlags");
    const colors = HSV2RGB(Global.Realtime() * 0.1, 1, 1);
    const SG_Graph_Alpha = UI.GetValue(Galaxy_SpeedGraph_Graph_Alpha)
    const SG_Line_Alpha = UI.GetValue(Galaxy_SpeedGraph_Line_Alpha)
    const SG_Text_Alpha = UI.GetValue(Galaxy_SpeedGraph_Text_Alpha)
    const SG_X = UI.GetValue(Galaxy_SpeedGraph_X)
    const SG_Y = UI.GetValue(Galaxy_SpeedGraph_Y)


    // Fonts
    font_8 = Render.GetFont(font, 8, true)
    font_12 = Render.GetFont(font, 12, true)
    font_24 = Render.GetFont(font, 24, true)
    Font_12 = Render.GetFont(Font, 12, true)
    Font_14 = Render.GetFont(Font, 14, true)

    cs12 = Render.GetFont( "undefeated.ttf", 12, true)

    // Declaring colors so they can easily be used
    darkgray = [26, 26, 30, 255];
    lightgray = [255, 255, 255, 25]
    medgray = [35, 35, 40, 255]
    orange = [ 250, 166, 24, 255 ];
    white = [255, 255, 255, 255];

    // Getting screen size
    ScreenSize = Render.GetScreenSize();

    // Adjusting positions and making size dynamic (syncs with username length)


//拖动界面
    if (UI.IsMenuOpen()) {
        var x = SG_X - 100,
            y = SG_Y - 100,
            width = 400,
            height = 400;
        difference = [0, 0]

        cursor_pos = Input.GetCursorPosition();

        if (Input.IsKeyPressed(0x01) && (cursor_pos[0] > x && (cursor_pos[0] < (x + width) && (cursor_pos[1] > y - 20 && (cursor_pos[1] < (y + height + 16)))))) {
            x = cursor_pos[0] - difference[0];
            y = cursor_pos[1] - difference[1];

            UI.SetValue(Galaxy_SpeedGraph_X, x)
            UI.SetValue(Galaxy_SpeedGraph_Y, y)
        } else {
            difference[0] = cursor_pos[0] - x;
            difference[1] = cursor_pos[1] - y;
        }
    }


    if ("NaN" == vec){
        vec = "0";
    }
    if (10 > velocity) {
        velocity = "0" + velocity;
    }
    if (100 > velocity) {
        velocity = "0" + velocity;
    }
    const in_air = Entity.GetProp(player, "CBasePlayer", "m_fFlags") & 1 || Entity.GetProp(player, "CBasePlayer", "m_fFlags") & 17;

    var numPos = SG_X+189

    if (250==velocity) {
        numPos = (SG_X+192);
    }
    if (UI.GetValue(Galaxy_SpeedGraph_Color)) {
        if (UI.GetValue(Galaxy_SpeedGraph_RGBSpeedGraph)) {
            Render.FilledTRoundRect(SG_X, SG_Y, 250, 3, [colors.r, colors.g, colors.b, SG_Line_Alpha]);
        } else {
            Render.FilledTRoundRect(SG_X, SG_Y, 250, 3, GraphColor1);
        }
        if (UI.GetValue(Galaxy_SpeedGraph_RGBSpeedText)) {
            Render.FilledRoundRect(SG_X, SG_Y, 250, 83, GraphColor2);
            Render.FilledRoundRect(SG_X + 182, SG_Y + 13, 60, 60, GraphColor4);
            Render.String(SG_X + 188, SG_Y + 19, 0, "SPEED", [colors.r, colors.g, colors.b, SG_Text_Alpha], Font_14);
            Render.String(numPos, SG_Y + 39, 0, "" + velocity, [colors.r, colors.g, colors.b, SG_Text_Alpha], font_24);

            Render.FilledRoundRect(SG_X + 9, SG_Y + 13, 161, 60, GraphColor4);
            Render.FilledRect(SG_X + 9, SG_Y + 34, 161, 1, GraphColor3)
            Render.String(SG_X + 15, SG_Y + 22, 0, "250", [colors.r, colors.g, colors.b, SG_Text_Alpha], font_8)
        }else{
            Render.FilledRoundRect(SG_X, SG_Y, 250, 83, GraphColor2);
            Render.FilledRoundRect(SG_X + 182, SG_Y + 13, 60, 60, GraphColor4);
            Render.String(SG_X + 188, SG_Y + 19, 0, "SPEED", GraphColor3, Font_14);
            Render.String(numPos, SG_Y + 39, 0, "" + velocity, GraphColor3, font_24);

            Render.FilledRoundRect(SG_X + 9, SG_Y + 13, 161, 60, GraphColor4);
            Render.FilledRect(SG_X + 9, SG_Y + 34, 161, 1, GraphColor3)
            Render.String(SG_X + 15, SG_Y + 22, 0, "250", GraphColor3, font_8)
        }
    }else{

        Render.FilledRoundRect(SG_X, SG_Y, 250, 83, darkgray);
        Render.FilledRoundRect(SG_X+182, SG_Y+13, 60, 60, medgray);
        Render.String(SG_X+188, SG_Y+19, 0, "SPEED", white, Font_14);
        Render.String(numPos, SG_Y+39, 0, ""+velocity, white, font_24);

        Render.FilledRoundRect(SG_X+9, SG_Y+13, 161, 60, medgray);
        Render.FilledRect(SG_X+9, SG_Y+34, 161, 1, white)
        Render.String(SG_X+15, SG_Y+22, 0, "250", lightgray, font_8)
    }
    const x = (SG_X*2)+160, y = SG_Y+110;
    for (var i = 0; i < velocity_data.length - 1; i++) {

        const cur = velocity_data[i][0];
        const next = velocity_data[i + 1][0];
        const landed = velocity_data[i][1] && !velocity_data[i + 1][1];
        if (UI.GetValue(Galaxy_SpeedGraph_Color)) {
            if (i === 0)
                last_delta = next - cur;
            if (UI.GetValue(Galaxy_SpeedGraph_RGBSpeedGraph)) {
                Render.Line(
                    x / 2 + 90 - (i - 1) * 5/(graphdata/750) ,
                    y / 2 + 130 - (clamp(cur, 0, 350) * 75 / 500),
                    x / 2 + 90 - i * 5/(graphdata/750),
                    y / 2 + 130 - (clamp(next, 0, 350) * 75 / 500),
                    [colors.r, colors.g, colors.b, SG_Graph_Alpha]);
            } else {
                Render.Line(
                    x / 2 + 90 - (i - 1) * 5/(graphdata/750) ,
                    y / 2 + 130 - (clamp(cur, 0, 350) * 75 / 500),
                    x / 2 + 90 - i * 5/(graphdata/750),
                    y / 2 + 130 - (clamp(next, 0, 350) * 75 / 500),
                    GraphColor5);
            }
        }else{
            Render.Line(
                x / 2 + 90 - (i - 1) * 5/(graphdata/750) ,
                y / 2 + 130 - (clamp(cur, 0, 350) * 75 / 500),
                x / 2 + 90 - i * 5/(graphdata/750),
                y / 2 + 130 - (clamp(next, 0, 350) * 75 / 500),
                lightgray);
        }
    }
}



var last_log = 0;
var last_delta = 0;
var velocity_data = [];
var velocolor = [255, 255, 255, 255];
var last_jumping = false;
var pre = 0;
var lasttime = 0;

var jump_positions = [];
var jumpstat_last = false;
var last_pre = 0;

const clamp = function (v, min, max) {
    return Math.min(Math.max(v, min), max);
}

const get_delta_color = function (delta) {
    delta = Math.round(delta);

    if (delta > 0) {
        delta = [255, 119, 119, 255];
    } else if (delta < 0) {
        delta = [30, 255, 109, 255];
    } else if (delta > -1 && delta < 1) {
        delta = [255, 199, 89, 255];
    }
    return delta;
}


function lol() {
    const player = Entity.GetLocalPlayer();
    const vec = Entity.GetProp(player, "CBasePlayer", "m_vecVelocity[0]");

    const velocity = Math.round(Math.sqrt(vec[0] * vec[0] + vec[1] * vec[1]));
    const in_air = Entity.GetProp(player, "CBasePlayer", "m_fFlags") & 1 || Entity.GetProp(player, "CBasePlayer", "m_fFlags") & 17;


    velocity_data.unshift([velocity, in_air]);

    if (velocity_data.length > 430)
        velocity_data.pop();
}






function reset() {

    last_log = Globals.Curtime();
    velocity_data = [];

    last_jumping = false;
    pre = 0;
}

var unduck = false;

const max_radius = Math.PI * 2;
const step = max_radius / 24;



Cheat.RegisterCallback("CreateMove", "lol");

//自由相机
function DEG2RAD(degree) {
    return (Math.PI / 180) * degree;
}


function ANGLE2VEC(angle) {
    pitch = angle[0];
    yaw = angle[1];
    return [Math.cos(DEG2RAD(pitch)) * Math.cos(DEG2RAD(yaw)), Math.cos(DEG2RAD(pitch)) * Math.sin(DEG2RAD(yaw)), -Math.sin(DEG2RAD(pitch))];
}

function DrawGalaxyFreeCamera() {
    localPlayer = Entity.GetLocalPlayer();
    if (UI.GetValue(Galaxy_FreeCamera_Value)) {
        delayCamera();
    }
}

function getWallDistance(entity, angle) {
    vector = ANGLE2VEC(angle);
    Galaxy = Entity.GetRenderGalaxy(entity);
    Galaxy[2] += Entity.GetProp(entity, "CBasePlayer", "m_vecViewOffset[2]")[0];
    end = [Galaxy[0] + vector[0] * 8192, Galaxy[1] + vector[1] * 8192, Galaxy[2] + vector[2] * 8192];
    result = Trace.Line(entity, Galaxy, end);
    if (result[1] != 1) {
        wall = [Galaxy[0] + vector[0] * result[1] * 8192, Galaxy[1] + vector[1] * result[1] * 8192, Galaxy[2] + vector[2] * result[1] * 8192];
        distance = Math.sqrt(Math.pow(Galaxy[0] - wall[0], 2) + Math.pow(Galaxy[1] - wall[1], 2) + Math.pow(Galaxy[2] - wall[2], 2));
        return distance;
    } else {
        return 0;
    }
}

function getVelocity(index) {
    var velocity = Entity.GetProp(index, 'CBasePlayer', 'm_vecVelocity[0]');
    return Math.sqrt(velocity[0] * velocity[0] + velocity[1] * velocity[1]);
}

//-------------------------------------------------------------------------------
var camerPASTEData = [
    [
        [0, 0, 0],
        [0, 0, 0]
    ],
    [
        [0, 0, 0],
        [0, 0, 0]
    ],
    [
        [0, 0, 0],
        [0, 0, 0]
    ],
    [
        [0, 0, 0],
        [0, 0, 0]
    ],
    [
        [0, 0, 0],
        [0, 0, 0]
    ],
    [
        [0, 0, 0],
        [0, 0, 0]
    ],
    [
        [0, 0, 0],
        [0, 0, 0]
    ],
    [
        [0, 0, 0],
        [0, 0, 0]
    ],
    [
        [0, 0, 0],
        [0, 0, 0]
    ],
    [
        [0, 0, 0],
        [0, 0, 0]
    ],
    [
        [0, 0, 0],
        [0, 0, 0]
    ],
    [
        [0, 0, 0],
        [0, 0, 0]
    ],
    [
        [0, 0, 0],
        [0, 0, 0]
    ],
    [
        [0, 0, 0],
        [0, 0, 0]
    ],
    [
        [0, 0, 0],
        [0, 0, 0]
    ],
    [
        [0, 0, 0],
        [0, 0, 0]
    ],
    [
        [0, 0, 0],
        [0, 0, 0]
    ],
    [
        [0, 0, 0],
        [0, 0, 0]
    ],
    [
        [0, 0, 0],
        [0, 0, 0]
    ],
    [
        [0, 0, 0],
        [0, 0, 0]
    ],
    [
        [0, 0, 0],
        [0, 0, 0]
    ],
    [
        [0, 0, 0],
        [0, 0, 0]
    ],
    [
        [0, 0, 0],
        [0, 0, 0]
    ],
    [
        [0, 0, 0],
        [0, 0, 0]
    ],
    [
        [0, 0, 0],
        [0, 0, 0]
    ],
    [
        [0, 0, 0],
        [0, 0, 0]
    ],
    [
        [0, 0, 0],
        [0, 0, 0]
    ],
    [
        [0, 0, 0],
        [0, 0, 0]
    ],
    [
        [0, 0, 0],
        [0, 0, 0]
    ],
    [
        [0, 0, 0],
        [0, 0, 0]
    ],
    [
        [0, 0, 0],
        [0, 0, 0]
    ],
    [
        [0, 0, 0],
        [0, 0, 0]
    ]
];
var lastFrameCamera = [0, 0, 0];
var thirdDistance = UI.GetValue(["Misc.", "View", "Camera", "Thirdperson distance"]) - 20;

function delayCamera() {
    if (UI.GetValue(["Rage", "Anti Aim", "General", "Key assignment", "Fake duck"]) && !Entity.IsAlive(localPlayer)) {
        camerPASTEData = [
            [
                [0, 0, 0],
                [0, 0, 0]
            ],
            [
                [0, 0, 0],
                [0, 0, 0]
            ],
            [
                [0, 0, 0],
                [0, 0, 0]
            ],
            [
                [0, 0, 0],
                [0, 0, 0]
            ],
            [
                [0, 0, 0],
                [0, 0, 0]
            ],
            [
                [0, 0, 0],
                [0, 0, 0]
            ],
            [
                [0, 0, 0],
                [0, 0, 0]
            ],
            [
                [0, 0, 0],
                [0, 0, 0]
            ],
            [
                [0, 0, 0],
                [0, 0, 0]
            ],
            [
                [0, 0, 0],
                [0, 0, 0]
            ],
            [
                [0, 0, 0],
                [0, 0, 0]
            ],
            [
                [0, 0, 0],
                [0, 0, 0]
            ],
            [
                [0, 0, 0],
                [0, 0, 0]
            ],
            [
                [0, 0, 0],
                [0, 0, 0]
            ],
            [
                [0, 0, 0],
                [0, 0, 0]
            ],
            [
                [0, 0, 0],
                [0, 0, 0]
            ],
            [
                [0, 0, 0],
                [0, 0, 0]
            ],
            [
                [0, 0, 0],
                [0, 0, 0]
            ],
            [
                [0, 0, 0],
                [0, 0, 0]
            ],
            [
                [0, 0, 0],
                [0, 0, 0]
            ],
            [
                [0, 0, 0],
                [0, 0, 0]
            ],
            [
                [0, 0, 0],
                [0, 0, 0]
            ],
            [
                [0, 0, 0],
                [0, 0, 0]
            ],
            [
                [0, 0, 0],
                [0, 0, 0]
            ],
            [
                [0, 0, 0],
                [0, 0, 0]
            ],
            [
                [0, 0, 0],
                [0, 0, 0]
            ],
            [
                [0, 0, 0],
                [0, 0, 0]
            ],
            [
                [0, 0, 0],
                [0, 0, 0]
            ],
            [
                [0, 0, 0],
                [0, 0, 0]
            ],
            [
                [0, 0, 0],
                [0, 0, 0]
            ],
            [
                [0, 0, 0],
                [0, 0, 0]
            ],
            [
                [0, 0, 0],
                [0, 0, 0]
            ]
        ];
        lastFrameCamera = [0, 0, 0];
        return;
    }
    eyePos = Entity.GetEyePosition(localPlayer);
    angles = Local.GetViewAngles();
    angles[0] = angles[0] * -1;
    if (angles[1] > 0) {
        angles[1] = angles[1] - 180;
    } else {
        angles[1] = 180 + angles[1];
    }
    camerPASTEData.pop();
    camerPASTEData.unshift([eyePos, angles]);
}

function showDelayedCamera() {
    if (UI.GetValue(Galaxy_FreeCamera) && camerPASTEData[UI.GetValue(Galaxy_FreeCamera_Value) - 1][0][0] != 0 && UI.GetValue(["Misc.", "Keys", "Keys", "Key assignment", "Thirdperson"]) == 1 && UI.GetValue(["Rage", "Anti Aim", "General", "Key assignment", "Fake duck"]) == 0 && Entity.IsAlive(localPlayer)) {
        eyePos = camerPASTEData[UI.GetValue(Galaxy_FreeCamera_Value) - 1][0];
        angles = camerPASTEData[UI.GetValue(Galaxy_FreeCamera_Value) - 1][1];
        vector = ANGLE2VEC(angles);
        cameraPos = [eyePos[0] + vector[0] * thirdDistance, eyePos[1] + vector[1] * thirdDistance, eyePos[2] + vector[2] * thirdDistance];
        Local.SetCameraPosition(cameraPos);
        lastFrameCamera = cameraPos;
    }
}


function calcDelayedCamera() {
    if (UI.GetValue(Galaxy_FreeCamera) && camerPASTEData[UI.GetValue(Galaxy_FreeCamera_Value) - 1][0][0] != 0 && UI.GetValue(["Misc.", "Keys", "Keys", "Key assignment", "Thirdperson"]) == 1 && UI.GetValue(["Rage", "Anti Aim", "General", "Key assignment", "Fake duck"]) == 0 && Entity.IsAlive(localPlayer)) {
        angles = camerPASTEData[UI.GetValue(Galaxy_FreeCamera_Value) - 1][1];
        back = getWallDistance(localPlayer, angles);
        thirdDistance = UI.GetValue(["Misc.", "View", "Camera", "Thirdperson distance"]) - 1
        if (getVelocity(Entity.GetLocalPlayer()) > 90) {
            var a = 16
        }
        if (getVelocity(Entity.GetLocalPlayer()) < 91) {
            var a = 12
        }
        if (back < thirdDistance) {
            thirdDistance = back - a;
        }
        showDelayedCamera();
    }
}
calcDelayedCamera()



//敌方视野
const view = View.Create();
var target = null;
var drag = {
    // The window's position.
    x: 100,
    y: 100,

    difference: {
        x: 0,
        y: 0
    },

    dragging: false
};

function AngleVector(x) {

    const DegreeToRadian = function(deg) {
        return deg * Math.PI / 180;
    }

    // Calculate the sines and cosines of the X and Y angles.
    const sp = Math.sin(DegreeToRadian(x[0]));
    const cp = Math.cos(DegreeToRadian(x[0]));
    const sy = Math.sin(DegreeToRadian(x[1]));
    const cy = Math.cos(DegreeToRadian(x[1]));

    // Convert the angles into an unitary vector.
    return [cp * cy, cp * sy, -sp]
}


function CalculateAngles(from, to) {

    const RadianToDegree = function(rad) {
        return rad * 180 / Math.PI;
    }

    // Calculate the difference between 'to' and 'from'.
    const sub = [to[0] - from[0], to[1] - from[1], to[2] - from[2]];

    // Calculate the hypotenuse.
    const hyp = Math.sqrt(sub[0] ** 2 + sub[1] ** 2);

    // Calculate the angles and convert them into degrees.
    const yaw = RadianToDegree(Math.atan2(sub[1], sub[0]));
    const pitch = RadianToDegree(-Math.atan2(sub[2], hyp));

    // Return an Angle object.
    return [pitch, yaw, 0];
}


function CalculateFOV(from, to, angles) {
    // Calculate the angles from the Galaxy point to the destination.
    const calculated = CalculateAngles(from, to);

    // Calculate the delta between the calculated angles and our view angles.
    const yaw_delta = angles[1] - calculated[1];
    const pitch_delta = angles[0] - calculated[0];

    // Normalize our yaw.
    if (yaw_delta > 180)
        yaw_delta -= 360;

    if (yaw_delta < -180)
        yaw_delta += 360;

    // Calculate the FOV and return it.
    return Math.sqrt(yaw_delta ** 2 + pitch_delta ** 2);
}
//endregion

//region Functions
//region Miscellaneous
function GetCrosshairTarget() {
    // Get our local player and enemies.
    const me = Entity.GetLocalPlayer();
    const enemies = Entity.GetEnemies();

    // Get our eye position and eye angles.
    const eye_pos = Entity.GetEyePosition(me);
    const eye_angles = Local.GetViewAngles();

    // Initialize an object where our data will be stored.
    var data = {target: null, fov: 180};

    // Loop through every enemy.
    for (var i = 0; i < enemies.length; i++) {
        // Get our current enemy's entity index.
        const ent = enemies[i];

        // Do sanity checks to make sure he's alive and not dormant.
        if (!Entity.IsAlive(ent) || Entity.IsDormant(ent))
            continue;

        // Get the enemy's head position.
        // This is my preferred hitbox to calculate FOV with.
        const head_pos = Entity.GetHitboxPosition(ent, 0);

        // Calculate the FOV delta from our eye position to the enemy's head position.
        const fov = CalculateFOV(eye_pos, head_pos, eye_angles);

        // Check if the calculated FOV is lower than the stored one.
        // When true, it means that this enemy is closer to our crosshair than the previous ones.
        if (data.fov > fov) {
            // Update our data for further calculations.
            data.fov = fov;
            data.target = ent;
        }
    }

    // Return the target closest to our crosshair or null.
    return data.target;
}

function HandleDragging() {
    // Get our input information.
    const cursor = Input.GetCursorPosition();
    const is_pressed = Input.IsKeyPressed(1);

    // Get our screen size.
    const size = Render.GetScreenSize();

    // If we aren't pressing Mouse1 then we can't be dragging.
    if (!is_pressed)
        drag.dragging = false;

    // Check if we're pressing Mouse1 and if our cursor is inside the top bar of the window, or, if we were dragging the window in the last frame.
    if (is_pressed && cursor[0] >= drag.x && cursor[1] >= drag.y - 42 && cursor[0] <= drag.x + size[0] / 4 && cursor[1] <= drag.y - 10 || drag.dragging) {
        // We are dragging, so set this boolean to true.
        drag.dragging = true;

        // Update our window's position.
        drag.x = cursor[0] - drag.difference.x;
        drag.y = cursor[1] - drag.difference.y;

        // Save the new position on our sliders.
        UI.SetValue(Galaxy_EnemyView_X, drag.x );
        UI.SetValue(Galaxy_EnemyView_Y, drag.y );
    }

    // If we're not dragging.
    else {
        // Update the difference between our cursor's position and the window's position.
        // This allows us to properly drag the window.
        drag.difference.x = cursor[0] - drag.x;
        drag.difference.y = cursor[1] - drag.y;
    }
}


function fetchPositions() {

    drag.x = Math.max( UI.GetValue(Galaxy_EnemyView_X), 100 );
    drag.y = Math.max( UI.GetValue(Galaxy_EnemyView_Y), 100 );
}



target = GetCrosshairTarget();
fetchPositions()


function onFrameRenderStart() {
    // Check if we're in-game.
    // Otherwise, there's no need to update.
    if (!Entity.IsValid(Entity.GetLocalPlayer()))
        return;

    // Check if there's a valid target.
    if (!target)
        return;

    // Get our local player
    const me = Entity.GetLocalPlayer()

    // Get some entity-related properties.
    const head_pos = Entity.GetHitboxPosition(me, 0);
    const camera_pos = Entity.GetEyePosition(target);

    // Calculate the angle from the target's eye position to our head position.
    // Pretty much inverted aimbot logic here.
    const camera_angles = CalculateAngles(camera_pos, head_pos);

    // Convert those camera angles into a unitary vector.
    const vector = AngleVector(camera_angles);

    // Create a new vector and initialize it with our target's eye position.
    const end_pos = [camera_pos[0], camera_pos[1], camera_pos[2]];

    // Extends the camera position to simulate a third-person view.
    end_pos[0] -= vector[0] * 64;
    end_pos[1] -= vector[1] * 64;
    end_pos[2] -= vector[2] * 64;

    // Do a trace from the target's eye position to his third-person camera position.
    const trace = Trace.Line(target, camera_pos, end_pos)

    // Check if the trace is valid.
    // It can rarely return undefined.
    if (!trace)
        return;

    // Get our screen size.
    const size = Render.GetScreenSize();

    // Calculate the new third-person view position using the trace's info.
    // Doing this so the camera doesn't go inside a wall.
    camera_pos[0] -= vector[0] * 64 * trace[1];
    camera_pos[1] -= vector[1] * 64 * trace[1];
    camera_pos[2] -= vector[2] * 64 * trace[1];

    // Update our view using the new camera position and angles, at half the resolution for better performance.
    View.Update( view, size[0] / 2, size[1] / 2, camera_pos, camera_angles );
}


function DrawEnemyview() {

    const is_menu_open = UI.IsMenuOpen();
    const is_local_player_valid = Entity.IsValid(Entity.GetLocalPlayer());
    if (is_menu_open)
        HandleDragging();

    if (!(UI.GetValue(["Misc.", "Keys", "Keys", "Key assignment", "Enemy View"]) && is_local_player_valid) && !is_menu_open)
        return;

    var colors = HSV2RGB(Global.Realtime() * 0.21, 1, 1);
    const size = Render.GetScreenSize();
    const font_20 = Render.GetFont(font, 20, true);
    const x = drag.x, y = drag.y;
    // 1 = 文本颜色 2 3 = 顶部渐变线 4 =背景颜色
    const EV_Color1 = UI.GetColor(Galaxy_EnemyView_Color1)
    const EV_Color2 = UI.GetColor(Galaxy_EnemyView_Color2)
    const EV_Color3 = UI.GetColor(Galaxy_EnemyView_Color3)
    const EV_Color4 = UI.GetColor(Galaxy_EnemyView_Color4)

    const EV_Alpha1 = UI.GetValue(Galaxy_EnemyView_Line_Alpha)
    const EV_Alpha2 = UI.GetValue(Galaxy_EnemyView_Text_Alpha)
    if (UI.GetValue(Galaxy_EnemyView_Color)) {

        Render.FilledRect(x - 4, y - 42, size[0] / 4 + 8, 32, EV_Color4);
        Render.FilledRect(x - 4, y - 4, size[0] / 4 + 8, size[1] / 4 + 8, EV_Color4);

        if (UI.GetValue(Galaxy_EnemyView_RGBLine)) {
            Render.GradientRect(x - 4, y - 42, size[0] / 4 + 8, 6,1, [colors.r, colors.g, colors.b, EV_Alpha1], [colors.b, colors.g, colors.r, EV_Alpha1]);
        } else {
            Render.GradientRect(x - 4, y - 42, size[0] / 4 + 8, 2,1, EV_Color2, EV_Color3);

        }

        if (UI.GetValue(Galaxy_EnemyView_RGBText)) {
            Render.String(x - 4 + size[0] / 8, y - 40, 1, "Enemy view", [colors.r, colors.g, colors.b, EV_Alpha2], font_20);
        } else {
            Render.String(x - 4 + size[0] / 8, y - 40, 1, "Enemy view", EV_Color1, font_20);
        }


        if (is_local_player_valid && target)
            View.Render(view, drag.x, drag.y, size[0] / 4, size[1] / 4);


        else {

            const alpha = Math.sin(Globals.Tickcount() * Globals.TickInterval() * 2) * 127 + 128;


            Render.FilledRect(drag.x, drag.y, size[0] / 4, size[1] / 4, [10, 10, 10, 255]);
            if (UI.GetValue(Galaxy_EnemyView_RGBText)) {
                Render.String(x - 4 + size[0] / 8, y - 40, 1, "Enemy view", [colors.r, colors.g, colors.b, EV_Alpha2], font_20);
            } else {
                Render.String(drag.x + size[0] / 8, drag.y + size[1] / 8 - 24, 1, "Camera Unavailable.", EV_Color1, font_20);
            }


        }
    } else {
        Render.FilledRect(x - 4, y - 42, size[0] / 4 + 8, 32, [26, 26, 30, 45]);
        Render.FilledRect(x - 4, y - 4, size[0] / 4 + 8, size[1] / 4 + 8, [26, 26, 30, 45]);
        Render.FilledRect(x - 4, y - 42, size[0] / 4 + 8, 6, [50, 255, 240, 255]);
        Render.String(x - 4 + size[0] / 8, y - 40, 1, "Enemy view", [235, 235, 235, 255], font_20);

        if (is_local_player_valid && target)
            View.Render(view, drag.x, drag.y, size[0] / 4, size[1] / 4);


        else {

            const alpha = Math.sin(Globals.Tickcount() * Globals.TickInterval() * 2) * 127 + 128;


            Render.FilledRect(drag.x, drag.y, size[0] / 4, size[1] / 4, [10, 10, 10, 255]);
            Render.String(drag.x + size[0] / 8, drag.y + size[1] / 8 - 24, 1, "Camera Unavailable.", [235, 235, 235, alpha], font_20);

        }
    }
}


//点位助手

function get_metric_distance(a, b)
{
    return Math.floor(Math.sqrt(Math.pow(a[0] - b[0], 2) + Math.pow(a[1] - b[1], 2) + Math.pow(a[2] - b[2], 2)) * 0.0254 );
}
const local = Entity.GetLocalPlayer();
const mirage = [
    //[ "Balcony", "Stand ", 15, [-1170.448974609375,-2351.35009765625,-112.76617431640625], [-6.143388271331787,14.879289627075195,0 ], "Oneway" ],
    [ "Palace Entrance", "Fake duck + E", 15, [-32.827205657958984,-1747.707763671875,-116.18266296386719], [-13.562880516052246,-80.47711944580078,0 ], "Oneway"  ],
    [ "Palace Entrace", "Crouch + E", 25, [146.87937927246094,-2078.0126953125,9.615781784057617], [-0.2739872932434082,-108.96994018554688,0 ], "Oneway"  ],
    [ "Sniper's Nest", "Crouch + E (manual)", 40, [-886.25830078125,-1317.399658203125,-120.41223907470703], [-0.3445321321487427,-177.3930206298828,0 ], "Oneway"  ],
    [ "Cat Box", "Stand ", 10, [-691.8399658203125,-885.2897338867188,-182.1551055908203], [-1.4627931118011475,102.77088165283203,0 ], "Oneway"  ],
    [ "Connector", "Stand ", 1, [-758.4989013671875,-1321.30224609375,-108.56095123291016], [10.404932975769043,82.45069122314453,0 ], "Oneway"  ],
    [ "Cat", "Fake duck ", 10, [-1495.3671875,-1112.000732421875,-183.45028686523438], [-2.77838134765625,38.17058563232422,0 ], "Oneway"  ],
    [ "Apartments", "Fake duck ", 0, [-2336.7314453125,766.5013427734375,-79.1664810180664], [-5.943861484527588,-2.0283021926879883,0 ], "Oneway"  ],
    [ "Cat", "Fake duck ", 0, [-394.3824768066406,-796.3460693359375,-216.0263214111328], [-5.173882484436035,122.90838623046875,0 ], "Oneway"  ],
    [ "T Stairs", "Stand ", 25, [275.092529296875,316.94354248046875,-201.4618377685547], [0.7233693599700928,11.497645378112793,0 ], "Oneway"  ],
    [ "Top Mid", "Stand ", 35, [219.89126586914063,877.2789306640625,-76.8647232055664], [2.8979110717773438,-90.38306427001953,0 ], "Oneway"  ],
    [ "House Stairs / Top Mid Connector", "Fake duck ", 32, [454.9155578613281,852.4118041992188,-53.246543884277344], [16.369403839111328,-44.87099838256836,0 ], "Oneway"  ],
    [ "Underpass Stairs", "Fake duck ", 10, [-1264.1064453125,218.20901489257813,-120.45449829101563], [12.757319450378418,27.84868621826172,0 ], "Oneway"  ],
    [ "Underpass Stairs", "Stand ", 15, [-1124.922119140625,310.01190185546875,-100.71343994140625], [29.21480369567871,42.90019226074219,0 ], "Wallbang" ],
    [ "Market Entrace", "Fake duck ", 0, [-1705.237548828125,-1220.2938232421875,-207.29591369628906], [-7.482339859008789,79.5807113647461,0 ], "Oneway"],
    [ "Apartment Entrance", "Stand ", 12, [-374.2903137207031,779.552978515625,-20.803316116333008], [1.6386109590530396,-161.68849182128906,0 ], "Oneway" ],
    [ "Underpass Stairs", "Crouch ", 12, [-1101.185791015625,522.3583984375,-38.548126220703125], [80.03816223144531,-51.8855094909668,0 ], "Oneway" ],
    [ "Right Side Connector", "Stand ", 10, [-842.7730102539063,32.43463134765625,-108.64161682128906], [1.2841607332229614,-85.02303314208984,0 ], "Oneway" ],
    [ "Palace Entrance", "Fake duck ", 0, [-811.739013671875,-1145.87060546875,-72.66464233398438], [-2.2234721183776855,-50.907833099365234,0 ], "Oneway" ],
    [ "CT Stairs", "Stand ", 20, [-1495.1767578125,-1588.8564453125,-201.6099395751953], [-0.707923412322998,-79.56673431396484,0 ], "Oneway" ],
    [ "CT Spawn", "Stand ", 1, [-1722.5516357421875,-680.75244140625,-108.86699676513672], [3.074936866760254,-86.70063781738281,0 ], "Wallbang" ],
    [ "Market Entrace", "Stand (AWP)", 10, [-2231.71142578125,32.56330490112305,-108.5659408569336], [-0.22803455591201782,-47.783348083496094,0 ], "Wallbang" ],
    [ "A Ramp", "Fake duck ", 0, [-291.80877685546875,-2112.17333984375,-53.190345764160156], [7.508554935455322,48.7481803894043,0 ], "Oneway" ],
    [ "Palace/A Ramp Connector", "Fake duck + E", 0, [1127.9307861328125,228.2334747314453,-185.51644897460938], [-1.6344425678253174,-89.02660369873047,0 ], "ESP Oneway" ],
    [ "Apartments + House", "Fake duck + E", 0, [-477.98028564453125,492.88311767578125,-99.00080871582031], [-0.6445350646972656,89.8587417602539,0 ], "Oneway" ],
    [ "Ramp", "Crouch ", 0, [780.37841796875,-1550.7978515625,-60.35479736328125], [18.644933700561523,-176.00025939941406,0 ], "Oneway" ],
    [ "House exit", "Stand", 0, [-859.4331665039063,614.7947387695313,-14.041431427001953], [2.2666337490081787,7.958107948303223,0 ], "Oneway" ],
    [ "Apartment entrance", "Stand (AWP)", 0, [-1843.001220703125,488.68048095703125,-101.81539916992188], [-2.849693775177002,3.4349939823150635,0 ], "Oneway" ],
    [ "B Van", "Fake duck ", 0, [-2259.607421875,677.5836791992188,7.429899215698242], [5.68641996383667,-71.17919158935547,0 ], "Oneway" ],
    [ "Palace", "Stand (manual shoot/ESP) ", 0, [-1506.1005859375,-990.6868896484375,-149.39236450195313], [-3.874444007873535,-38.0708122253418,0 ], "Wallbang" ],
    [ "Top Mid", "Stand", 0, [-266.930573,-366.495056,-103.172424], [1.882086,19.124743,0 ], "Oneway" ],
    [ "Balcony", "Stand ", 1, [462.96588134765625,-2084.01904296875,18.9892520904541], [1.6673067808151245,177.59693908691406,0 ], "Wallbang" ]
];

const dust2 = [
    [ "T Spawn", "Fake duck ", 0, [-1828.306884765625,-455.19976806640625,141.17587280273438], [-2.199988603591919,-17.8001766204834,0 ], "Oneway" ],
    [ "Tunnels", "Fake duck + E", 0, [-2071.30908203125,2895.8076171875,82.59713745117188], [0.7149654626846313,-83.99018859863281,0 ], "Oneway" ],
    [ "Tunnels Exit", "Crouch ", 0, [-776.18408203125,2555.6904296875,-25.649532318115234], [-4.512523174285889,-147.3076629638672,0 ], "Wallbang" ],
    [ "Mid/Cat", "Fake duck ", 0, [-210.51968383789063,542.5650634765625,47.2431755065918], [5.387450218200684,100.62740325927734,0 ], "Oneway" ],
    [ "Long Doors / Blue", "Fake duck ", 25, [1299.95654296875,620.3975219726563,-3.8381288051605225], [1.5557122230529785,150.635986328125,0 ], "Oneway" ],
    [ "A Site / Long", "Fake duck ", 0, [1528.8955078125,505.183837890625,-49.267723083496094], [-3.854454517364502,99.73228454589844,0 ], "Oneway" ],
    [ "A Site", "Fake duck (Long Plant)", 0, [1570.482421875,461.5287170410156,-63.220176696777344], [-5.327244758605957,99.6102294921875,0 ], "Oneway" ],
    [ "B Doors", "Crouch ", 0, [16.597061157226563,2311.9716796875,17.10267448425293], [-0.5667411088943481,-177.3401641845703,0 ], "Wallbang" ],
    [ "Long Cross / Ramp", "Fake duck ", 0, [493.2771911621094,2613.61572265625,143.1537322998047], [5.055543422698975,-37.76759338378906,0 ], "Oneway" ],
    [ "Long Doors", "Stand ", 1, [1372.70068359375,1358.381103515625,50.24076843261719], [-0.30388620495796204,-139.5752716064453,0 ], "Wallbang" ],
    [ "Long Doors Box", "Stand ", 1, [530.4532470703125,826.2880249023438,62.459720611572266], [0.7473396062850952,-50.05582046508789,0 ], "Wallbang" ],
    [ "Outside Long House", "Stand ", 10, [554.1951293945313,353.6593017578125,69.35932159423828], [2.23449444770813,-145.07130432128906,0 ], "Oneway" ],
    [ "Top Mid", "Stand ", 10, [654.1134033203125,297.8545227050781,59.560081481933594], [0.6505045294761658,-179.7573699951172,0 ], "Oneway" ],
    [ "Lower Tunnels", "Stand ", 35, [-216.03515625,1160.060791015625,89.53584289550781], [11.780013084411621,153.25389099121094,0 ], "Wallbang" ],
    [ "Cat", "Stand ", 10, [-874.2039794921875,1464.575927734375,-53.34953308105469], [-10.956621170043945,-24.002500534057617,0 ], "Oneway" ]
];
const inferno = [
    [ "library | risk", "Stand ", 0, [2491.488974609375,1232.55009765625,215.03000000000625], [12.100088271331787,-170.540089627075195,0 ], "Oneway" ],
    [ "barrels | risk", "Crouch ", 0, [2477.968974609375,-130.53009765625,135.65000000000625], [2.090088271331787,168.650089627075195,0 ], "Oneway" ],
    [ "box", "Fake duck ", 0, [1999.968974609375,480.60009765625,206.65000000000625], [-10.090088271331787,-100.650089627075195,0 ], "Oneway" ],
    [ "box2", "Fake duck ", 0, [2013.97,701.99,210.61], [-0.28,1.18,0 ], "Oneway" ],
    [ "BigBox", "Fake duck ", 0, [2083.79,182.85,210.18], [0.21,76.14,0 ], "Oneway" ],
    [ "Barrels2 | risk", "Fake duck+min dmg ", 0, [63.91,2603.67,206.03], [2.33,4.84,0 ], "Oneway" ],
    [ "Docs", "Fake duck+min dmg ", 0, [753.09,1871.93,177.94], [-2.13,174.72,0 ], "Oneway" ],
    [ "Window", "Fake duck", 0, [-5.32,383.99,230.03], [3.58,79.43,0 ], "Oneway" ],
    [ "BigBox2", "Fake duck+min dmg (AWP)", 0, [2148.63,301.60,206.03], [-13.03,-110.59,0 ], "Oneway" ],
];
const overpass = [
    [ "Barrels", "Stand ", 15, [-806.2734033203125,392.8045227050781,145.030081481933594], [8.943388271331787,-67.049289627075195,0 ], "Oneway" ],
    [ "Water", "Fake duck", 15, [-1169.75,256.00,76.78], [0.97,-78.36,0 ], "Oneway" ],
    [ "Window", "Stand ", 15, [-1672.8734033203125,450.7745227050781,353.030081481933594], [6.843388271331787,-50.989289627075195,0 ], "Oneway" ],
    [ "Kill window | risk", "Stand ", 15, [-416.0434033203125,-2467.3245227050781,267.030081481933594], [-0.163388271331787,113.539289627075195,0 ], "Oneway" ],
    [ "Stairs", "Fake duck ", 15, [-628.59,-1168.31,123.18], [-0.34,114.22,0 ], "Oneway" ],
    [ "Wooden", "Stand | risk ", 15, [-1049.98,-302.36,163.93], [-0.14,-63.30,0 ], "Shooting" ],
    [ "Cement", "Fake duck ", 15, [-1178.99,171.99,143.03], [-12.23,150.72,0 ], "Oneway" ],
];
const cobblestone = [
    [ "Outside", "Min dmg | risk (Scar) ", 15, [73.81,-1292.57,-70.09], [-5.55,77.47,0 ], "Oneway" ],
    [ "Stairs", "Min dmg", 15, [668.03,-466.79,-0.86], [-0.15,147.68,0 ], "Oneway" ],
];
const short_dust = [
    [ "Car", "Fake Duck", 15, [70.52,494.88,46.30], [-0.37,98.23,0 ], "Oneway" ],
];
const vertigo = [
    [ "Box", "Fake Duck | risk", 15, [-2107.30,954.03,11790.03], [5.45,-110.75,0 ], "Oneway" ],
    [ "Box2", "Fake Duck", 15, [-1435.92,660.21,11921.28], [5.45,-110.75,0 ], "Oneway" ],
    [ "Box", "Stand | risk", 15, [-2113.13,879.35,11893.03], [2.03,-67.31,0 ], "Oneway" ],
    [ "Container", "Min dmg | Stand", 15, [-1900.03,684.36,11840.03], [-10.17,-19.12,0 ], "Oneway" ],
    [ "Container2", "Fake duck", 15, [-2342.90,741.01,11843.03], [5.04,-95.87,0 ], "Oneway" ],
];
const office = [
    [" ",  "Crouch | Stand (AWP)", 15, [-488.09,-1369.03,-193.97], [-4.63,97.02,0 ], "Oneway" ],
    [" ",  "Fake duck", 15, [-744,-416,-187], [-0.52,1.39,0 ], "Oneway" ],
    [" ", "Stand", 15, [-774,-307,-77], [8.05,-113,0 ], "Oneway" ],
    [" ", "Fake duck", 15, [1024.42,-1072.03,-164.28], [-0.20,107,0 ], "Oneway" ],
    [" ",  "Stand", 15, [ 18, -764.733398, -121.746964], [-1.358088, 74.478157, 0], "Oneway" ],
    [" ",  "Stand", 15, [ -0.204876 ,-887.967957,-126.317039], [-1.392609 ,78.579758 ,0.000000], "Oneway" ],
    [" ",  "Fake duck", 15, [  174.968750, -104.789978 ,-113.037590], [2.613178 ,-98.549133, 0.000000], "Oneway" ],
    [" ",  "Fake duck", 15, [  366.431168, -428.199738, -114.615715], [-0.103847 ,1.141723, 0.000000], "Oneway" ],
    ["",  "Stand", 15, [  625.584717, -389.167236, -95.968750], [2.543516, -172.531570, 0.000000], "Oneway" ],
    [" ",  "Stand", 15, [  797.682739, -573.968750, -95.968750], [0.767023, -37.171745, 0.000000], "Oneway" ],
    [" ",  "Fake duck", 15, [  811.329346, -1072.375366, -143.436768], [-0.074401, 77.782188, 0.000000], "Oneway" ],
    [" ",  "Stand", 15, [ 669.717529, -289.459137, -95.968750], [0.343555, -55.699059, 0.000000], "Oneway" ],


];
const maps = {
    "de_mirage": mirage,
    "de_dust2": dust2,
    "de_inferno": inferno,
    "de_mirage": mirage,
    "de_overpass": overpass,
    "de_dust2": dust2,
    "de_cbble": cobblestone,
    "de_shortdust": short_dust,
    "de_vertigo": vertigo,
    "cs_office": office
};



function getVec(pitch, yaw)
{
    var p = deg2Rad(pitch);
    var y = deg2Rad(yaw)
    var sin_p = Math.sin(p);
    var cos_p = Math.cos(p);
    var sin_y = Math.sin(y);
    var cos_y = Math.cos(y);
    return [cos_p * cos_y, cos_p * sin_y, -sin_p];
}

function deg2Rad(angle)
{
    return angle * Math.PI / 180;
}
function DrawGalaxyOneway(){
    if(!Entity.IsAlive(local) || World.GetMapName() == "" || !UI.GetValue(Galaxy_1way))
        return;
    const color_circle = UI.GetColor(Galaxy_1way_Circle);
    const color_type = UI.GetColor(Galaxy_1way_Type);
    const color_loc = UI.GetColor(Galaxy_1way_Location);
    const color_extra = UI.GetColor(Galaxy_1way_Extra);
    const color_distance = UI.GetColor(Galaxy_1way_Distance);
    const color_line = UI.GetColor(Galaxy_1way_Type);
    const render_dist = UI.GetValue(Galaxy_1way_RenderDist);
    const render_line = UI.GetValue(Galaxy_1way_LineLength);
    const map = World.GetMapName();
    const oneways = maps[map];
    localPos = Entity.GetHitboxPosition(local, 5);
    for(oneway in oneways) {
        distance = get_metric_distance(localPos, oneways[oneway][3]);

        if(distance > render_dist)
            continue;

        world = Render.WorldToScreen(oneways[oneway][3]);
        var font = Render.GetFont(font, 15, true)
        Render.Circle(world[0], world[1], 5, color_circle);
        Render.String(world[0]+10, world[1]-24,0, oneways[oneway][5], color_type, font);
        Render.String(world[0]+10, world[1]-12,0, oneways[oneway][0], color_loc, font);
        Render.String(world[0]+10, world[1] ,0, oneways[oneway][1], color_extra, font);
        Render.String(world[0]+10, world[1]+12,0, Math.floor(distance)+"m", color_distance,font);

        eye_vec = getVec(oneways[oneway][4][0], oneways[oneway][4][1]);

        end = [oneways[oneway][3][0] + eye_vec[0] * render_line, oneways[oneway][3][1] + eye_vec[1] * render_line, oneways[oneway][3][2] + eye_vec[2] * render_line];

        world_end = Render.WorldToScreen(end);

        Render.Line(world[0], world[1], world_end[0], world_end[1], color_line);
    }
}

//GSLMisc
//组名

function DrawGaxlayClantag() {
    const clantag = "GaxlaySense.Lite";
    var last_time = 0;

    const now = Math.round(Globals.Curtime() * 2);

    if (now === last_time)
        return;

    last_time = now;

    const iterator = Math.abs(-clantag.length + (now) % (clantag.length * 2)) + 1;
    const tag = clantag.slice(0, -iterator);

    Local.SetClanTag(tag);
}


//功能函数

//RGB
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
//LOL WHY 
function multiply(a, b) {
    const multiply = a * b
    return multiply
}

Render_Arc = function(x, y, radius, radius_inner, start_angle, end_angle, segments, color)
{
    segments = 360 / segments;

    for (var i = start_angle; i < start_angle + end_angle; i = i + segments)
    {

        var rad = i * Math.PI / 180;
        var rad2 = (i + segments) * Math.PI / 180;

        var rad_cos = Math.cos(rad);
        var rad_sin = Math.sin(rad);

        var rad2_cos = Math.cos(rad2);
        var rad2_sin = Math.sin(rad2);

        var x1_inner = x + rad_cos * radius_inner;
        var y1_inner = y + rad_sin * radius_inner;

        var x1_outer = x + rad_cos * radius;
        var y1_outer = y + rad_sin * radius;

        var x2_inner = x + rad2_cos * radius_inner;
        var y2_inner = y + rad2_sin * radius_inner;

        var x2_outer = x + rad2_cos * radius;
        var y2_outer = y + rad2_sin * radius;

        Render.Polygon( [
                [ x1_outer, y1_outer ],
                [ x2_outer, y2_outer ],
                [ x1_inner, y1_inner ] ],
            color
        );

        Render.Polygon( [
                [ x1_inner, y1_inner ],
                [ x2_outer, y2_outer ],
                [ x2_inner, y2_inner ] ],
            color
        );
    }
}
//圆角矩形
Render.FilledRoundRect = function(x, y, w, h, color) {
    Render.Line(x + 3, y + h, x + w - 2, y + h, color);//bottom
    Render.Line(x, y + 3, x, y + h - 2, color);//left
    Render.Line(x + w, y + 3, x + w, y + h - 2, color);//right
    Render.Line(x + 3, y, x + w - 2, y, color);//top
    Render.FilledRect(x + 1, y + 1, w - 1, h - 1, color);
    Render_Arc(x + 3, y + 3, 3, 2, 180, 90, 12, color);//TL
    Render_Arc(x + w - 3, y + 3, 3, 2, 270, 90, 12, color);//TR
    Render_Arc(x + 3, y + h - 3, 3, 2, 90, 90, 12, color);//BL
    Render_Arc(x + w - 3, y + h - 3, 3, 2, 0, 90, 12, color);//BR
}

Render.FilledTRoundRect = function(x, y, w, h, color) {
    Render.Line(x, y + h, x + w, y + h, color);
    Render.Line(x, y + 3, x, y + h, color);
    Render.Line(x + w, y + 3, x + w, y + h + 1, color);
    Render.Line(x + 3, y, x + w - 2, y, color);
    Render.FilledRect(x + 1, y + 1, w - 1, h - 1, color);
    Render_Arc(x + 3, y + 3, 3, 0, 180, 90, 12, color);
    Render_Arc(x + w - 3, y + 3, 3, 0, 270, 90, 12, color);
}




//UI功能函数
function SetOffAllUI(){
    SetEnableOneTapAAUI(0)
    SetOffAntiAimUI()
    SetOffVisualsUI()
    SetOffMiscUI()
}
function SetEnableOneTapAAUI(Visibility){
    //原AA菜单
    UI.SetEnabled([AntiAimPath, "Fake angles"], Visibility);
    UI.SetEnabled([AntiAimPath, "Jitter move"], Visibility);
    UI.SetEnabled([AntiAimPath, "On-shot desync"], Visibility);
    UI.SetEnabled([AntiAimPath, "Hide real angle"], Visibility);
    UI.SetEnabled([AntiAimPath, "Avoid overlap"], Visibility);
    UI.SetEnabled([AntiAimPath, "Fake desync"], Visibility);
    UI.SetEnabled([AntiAimPath, "Lower body yaw mode"], Visibility);
    UI.SetEnabled([AntiAimPath, "Inverter flip conditions"], Visibility);
    UI.SetEnabled(["Rage", "Anti Aim", "Directions", "Yaw offset"], Visibility);
    UI.SetEnabled(["Rage", "Anti Aim", "Directions", "Jitter offset"], Visibility);
    UI.SetEnabled(["Rage", "Anti Aim", "Directions", "Auto direction"], Visibility);
}
function SetOffAntiAimUI(){

    UI.SetEnabled(Galaxy_AA_RealMode, 0);
    UI.SetEnabled(Galaxy_AA_FakeMode, 0);
    UI.SetEnabled(Galaxy_AA_JitterMode, 0);
    UI.SetEnabled(Galaxy_AA_YawMode, 0);

    UI.SetEnabled(Galaxy_AA_RealValue, 0);
    UI.SetEnabled(Galaxy_AA_RealValueMin, 0);
    UI.SetEnabled(Galaxy_AA_RealValueMax, 0);

    UI.SetEnabled(Galaxy_AA_FakeValue, 0);
    UI.SetEnabled(Galaxy_AA_FakeValueMin, 0);
    UI.SetEnabled(Galaxy_AA_FakeValueMax, 0);

    UI.SetEnabled(Galaxy_AA_JitterMin, 0);
    UI.SetEnabled(Galaxy_AA_JitterMax, 0);

    UI.SetEnabled(Galaxy_AA_JitterSwitch1, 0);
    UI.SetEnabled(Galaxy_AA_JitterSwitch2, 0);
    UI.SetEnabled(Galaxy_AA_JitterSwitch3, 0);
    UI.SetEnabled(Galaxy_AA_JitterSwitch4, 0);
    UI.SetEnabled(Galaxy_AA_JitterDelay, 0);

    UI.SetEnabled(Galaxy_AA_YawMin, 0);
    UI.SetEnabled(Galaxy_AA_YawMax, 0);

    UI.SetEnabled(Galaxy_AA_YawSwitch1, 0);
    UI.SetEnabled(Galaxy_AA_YawSwitch2, 0);
    UI.SetEnabled(Galaxy_AA_YawSwitch3, 0);
    UI.SetEnabled(Galaxy_AA_YawSwitch4, 0);
    UI.SetEnabled(Galaxy_AA_YawDelay, 0);
}
function SetOffVisualsUI(){
    UI.SetEnabled(Visuals_Dropdown, 0);
    SetOffPrimaryUI()
    SetOffSecondaryUI()
}
function SetOffPrimaryUI(){
    UI.SetEnabled(Galaxy_Primary_Dropdown, 0);
    //0
    UI.SetEnabled(Galaxy_Bar, 0);
    UI.SetEnabled(Galaxy_Bar_MenuOpen, 0);
    UI.SetEnabled(Galaxy_Bar_Color, 0);
    UI.SetEnabled(Galaxy_Bar_X, 0);
    UI.SetEnabled(Galaxy_Bar_Y, 0);
    UI.SetEnabled(Galaxy_Bar_TitleColor, 0);
    UI.SetEnabled(Galaxy_Bar_Color1, 0);
    UI.SetEnabled(Galaxy_Bar_Color2, 0);
    UI.SetEnabled(Galaxy_Bar_Color3, 0);
    UI.SetEnabled(Galaxy_Bar_Color4, 0);
    UI.SetEnabled(Galaxy_Bar_LineColor1, 0);
    UI.SetEnabled(Galaxy_Bar_LineColor2, 0);
    UI.SetEnabled(Galaxy_Bar_TextColor, 0);
    UI.SetEnabled(Galaxy_Bar_RGBTitle, 0);
    UI.SetEnabled(Galaxy_Bar_RGBLine, 0);
    UI.SetEnabled(Galaxy_Bar_RGBLine_Alpha, 0);
    UI.SetEnabled(Galaxy_Bar_RGBTitle_Alpha, 0);
}
function SetOffSecondaryUI(){
    UI.SetEnabled(Galaxy_Secondary_Dropdown, 0);
    //0
    UI.SetEnabled(Galaxy_Keys, 0);
    UI.SetEnabled(Galaxy_Keys_Color, 0);
    UI.SetEnabled(Galaxy_Keys_X, 0);
    UI.SetEnabled(Galaxy_Keys_Y, 0);
    UI.SetEnabled(Galaxy_Keys_TitleColor, 0);
    UI.SetEnabled(Galaxy_Keys_TextColor, 0);
    UI.SetEnabled(Galaxy_Keys_Color1, 0);
    UI.SetEnabled(Galaxy_Keys_Color2, 0);
    UI.SetEnabled(Galaxy_Keys_Color3, 0);
    UI.SetEnabled(Galaxy_Keys_Color4, 0);
    UI.SetEnabled(Galaxy_Keys_LineColor1, 0);
    UI.SetEnabled(Galaxy_Keys_LineColor2, 0);
    UI.SetEnabled(Galaxy_Keys_TitleColor, 0);
    UI.SetEnabled(Galaxy_Keys_RGBLine, 0);
    UI.SetEnabled(Galaxy_Keys_RGBTitle, 0);
    UI.SetEnabled(Galaxy_Keys_RGBTitle_Alpha, 0);
    UI.SetEnabled(Galaxy_Keys_RGBLine_Alpha, 0);
    //1
    UI.SetEnabled(Galaxy_Avatar, 0);
    UI.SetEnabled(Galaxy_Avatar_X, 0);
    UI.SetEnabled(Galaxy_Avatar_Y, 0);
    UI.SetEnabled(Galaxy_Avatar_Color, 0);
    UI.SetEnabled(Galaxy_Avatar_Color1, 0);
    UI.SetEnabled(Galaxy_Avatar_Color2, 0);
    UI.SetEnabled(Galaxy_Avatar_Color3, 0);
    UI.SetEnabled(Galaxy_Avatar_Color4, 0);
    UI.SetEnabled(Galaxy_Avatar_RGBBall, 0);
    UI.SetEnabled(Galaxy_Avatar_RGBLine, 0);
    UI.SetEnabled(Galaxy_Avatar_RGBLine_Alpha, 0);
    UI.SetEnabled(Galaxy_Avatar_RGBBall_Alpha, 0);
    //2
    UI.SetEnabled(Galaxy_Arrow, 0);
    UI.SetEnabled(Galaxy_Arrow_Color, 0);
    UI.SetEnabled(Galaxy_Arrow_RGB_Arrow, 0);
    UI.SetEnabled(Galaxy_Arrow_Color1, 0);
    UI.SetEnabled(Galaxy_Arrow_Color2, 0);
    UI.SetEnabled(Galaxy_Arrow_Alpha1, 0);
    UI.SetEnabled(Galaxy_Arrow_Alpha2, 0);
    //3
    UI.SetEnabled(Galaxy_WaterMark, 0);
    UI.SetEnabled(Galaxy_WaterMark_Color, 0);
    UI.SetEnabled(Galaxy_WaterMark_X, 0);
    UI.SetEnabled(Galaxy_WaterMark_Y, 0);
    UI.SetEnabled(Galaxy_WaterMark_Color, 0);
    UI.SetEnabled(Galaxy_WaterMark_Color1, 0);
    UI.SetEnabled(Galaxy_WaterMark_Color2, 0);
    UI.SetEnabled(Galaxy_WaterMark_Color3, 0);
    UI.SetEnabled(Galaxy_WaterMark_RGBText, 0);
    UI.SetEnabled(Galaxy_WaterMark_RGBLine, 0);
    UI.SetEnabled(Galaxy_WaterMark_Text_Alpha, 0);
    UI.SetEnabled(Galaxy_WaterMark_Line_Alpha, 0);
    //4
    UI.SetEnabled(Galaxy_MenuBorder, 0);
    UI.SetEnabled(Galaxy_MenuBorder_Color, 0);
    UI.SetEnabled(Galaxy_MenuBorder_Shadow, 0);
    UI.SetEnabled(Galaxy_MenuBorder_Text, 0);
    UI.SetEnabled(Galaxy_MenuBorder_Color1, 0);
    UI.SetEnabled(Galaxy_MenuBorder_Color2, 0);
    UI.SetEnabled(Galaxy_MenuBorder_Color3, 0);
    UI.SetEnabled(Galaxy_MenuBorder_Color4, 0);
    UI.SetEnabled(Galaxy_MenuBorder_Color5, 0);
    UI.SetEnabled(Galaxy_MenuBorder_Color6, 0);
    UI.SetEnabled(Galaxy_MenuBorder_Color7, 0);
    UI.SetEnabled(Galaxy_MenuBorder_Color8, 0);
    UI.SetEnabled(Galaxy_MenuBorder_RGB_Line, 0);
    UI.SetEnabled(Galaxy_MenuBorder_RGB_Text, 0);
    UI.SetEnabled(Galaxy_MenuBorder_RGB_Border, 0);
    UI.SetEnabled(Galaxy_MenuBorder_Line_Alpha, 0);
    UI.SetEnabled(Galaxy_MenuBorder_Text_Alpha, 0);
    UI.SetEnabled(Galaxy_MenuBorder_Border_Alpha, 0);
    //5
    UI.SetEnabled(Galaxy_SpeedGraph, 0);
    UI.SetEnabled(Galaxy_SpeedGraph_X, 0);
    UI.SetEnabled(Galaxy_SpeedGraph_Y, 0);
    UI.SetEnabled(Galaxy_SpeedGraph_Color, 0);
    UI.SetEnabled(Galaxy_SpeedGraph_RGBSpeedGraph, 0);
    UI.SetEnabled(Galaxy_SpeedGraph_RGBSpeedLine, 0);
    UI.SetEnabled(Galaxy_SpeedGraph_RGBSpeedText, 0);
    UI.SetEnabled(Galaxy_SpeedGraph_Color1, 0);
    UI.SetEnabled(Galaxy_SpeedGraph_Color2, 0);
    UI.SetEnabled(Galaxy_SpeedGraph_Color3, 0);
    UI.SetEnabled(Galaxy_SpeedGraph_Color4, 0);
    UI.SetEnabled(Galaxy_SpeedGraph_Color5, 0);
    UI.SetEnabled(Galaxy_SpeedGraph_Text_Alpha, 0);
    UI.SetEnabled(Galaxy_SpeedGraph_Line_Alpha, 0);
    UI.SetEnabled(Galaxy_SpeedGraph_Graph_Alpha, 0);
    //6
    UI.SetEnabled(Galaxy_1way, 0);
    UI.SetEnabled(Galaxy_1way_Circle, 0);
    UI.SetEnabled(Galaxy_1way_Location, 0);
    UI.SetEnabled(Galaxy_1way_Extra, 0);
    UI.SetEnabled(Galaxy_1way_Distance, 0);
    UI.SetEnabled(Galaxy_1way_Line, 0);
    UI.SetEnabled(Galaxy_1way_Type, 0);
    UI.SetEnabled(Galaxy_1way_LineLength, 0);
    UI.SetEnabled(Galaxy_1way_RenderDist, 0);
    //7
    UI.SetEnabled(Galaxy_FreeCamera, 0);
    UI.SetEnabled(Galaxy_FreeCamera_Value, 0);
    //8
    UI.SetEnabled(Galaxy_EnemyView, 0);
    UI.SetEnabled(Galaxy_EnemyView_X, 0);
    UI.SetEnabled(Galaxy_EnemyView_Y, 0);
    UI.SetEnabled(Galaxy_EnemyView_Color, 0);
    UI.SetEnabled(Galaxy_EnemyView_RGBLine, 0);
    UI.SetEnabled(Galaxy_EnemyView_RGBText, 0);
    UI.SetEnabled(Galaxy_EnemyView_Color1, 0);
    UI.SetEnabled(Galaxy_EnemyView_Color2, 0);
    UI.SetEnabled(Galaxy_EnemyView_Color3, 0);
    UI.SetEnabled(Galaxy_EnemyView_Color4, 0);
    UI.SetEnabled(Galaxy_EnemyView_Line_Alpha, 0);
    UI.SetEnabled(Galaxy_EnemyView_Text_Alpha, 0);
    //9
    UI.SetEnabled(Galaxy_AspectRatio, 0);
    UI.SetEnabled(Galaxy_AspectRatio_Value, 0);
}
function SetOffMiscUI(){
    UI.SetEnabled(Galaxy_ClanTag, 0);
}

//OnDraw函数回调
function OnDraw() {

    if (UI.GetValue(Galaxy_Bar)) {
        DrawGalaxyBar()
    }
    if (UI.GetValue(Galaxy_Keys)) {
        DrawGalaxyKeys()
    }
    if (UI.GetValue(Galaxy_Avatar)) {
        DrawGalaxyAvatar()
    }
    if (UI.GetValue(Galaxy_WaterMark)) {
        DrawGalaxyWaterMark()
    }
    if (UI.GetValue(Galaxy_MenuBorder) &&  UI.IsMenuOpen()) {
        DrawGalaxyMenuBorder()
    }
    if (UI.GetValue(Galaxy_Arrow)) {
        DrawGalaxyArrow()
    }
    if (UI.GetValue(Galaxy_AspectRatio)) {
        DrawGalaxyAspectRatio()
    }
    if (UI.GetValue(Galaxy_SpeedGraph)) {
        DrawGalaxyGraph()
    }
    if (UI.GetValue(Galaxy_FreeCamera)) {
        DrawGalaxyFreeCamera()
    }
    if (UI.GetValue(Galaxy_EnemyView)) {
        DrawEnemyview()
    }
    if (UI.GetValue(Galaxy_1way)) {
        DrawGalaxyOneway()
    }

}
//OnCreateMove函数回调
function OnCreateMove(){
    EnableMenu()
    if (UI.GetValue(Galaxy_AntiAim)) {
        GalaxyAntiAim()
    }
    if (UI.GetValue(Galaxy_ClanTag)) {
        DrawGaxlayClantag()
    }
}

Cheat.RegisterCallback("Draw", "OnDraw")
Cheat.RegisterCallback("CreateMove", "OnCreateMove");