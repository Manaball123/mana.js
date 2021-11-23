//line 1337 for killsay


const max = Math.max, sqrt = Math.sqrt;
const hitgroup_to_hitbox = {
    1: [0, 1],
    2: [4, 5, 6],
    3: [2, 3],
    4: [13, 15, 16],
    5: [14, 17, 18],
    6: [7, 9, 11],
    7: [8, 10, 12]
}
hitboxes = [
    'generic',
    'head',
    'chest',
    'stomach',
    'left arm',
    'right arm',
    'left leg',
    'right leg',
    '?'
];
var shots = 0;
var predicthc = 0;
var safety = 0;
var hitboxName = "";
var choked = 0;
var exploit = 0;
var logs = [];
var logsct = [];
var logsalpha = [];
var random = 0;
var frame = 0;
var sframe = 0;
var aarandom = 0;
var lframe = 0;
var invframe = 0;
var jitter_cache = UI.GetValue('Anti-Aim', 'Rage Anti-Aim', 'Jitter offset');   
var yaw_cache = UI.GetValue('Anti-Aim', 'Rage Anti-Aim','Yaw offset');
var local;
var lastAircheck;
var firstRun=false; 
var timed1=false;
var delay1 = .2;
var lastTime1=Globals.Curtime();
var timed=false;
var delay = .2;
var lastTime=Globals.Curtime();
var runMainFunction=0;
var info=0;
var delayedPos=0;
var screensize = Global.GetScreenSize();
var lp = Entity.GetLocalPlayer;
const screen_size = Render.GetScreenSize();
const screen_center = [screen_size[0] / 2, screen_size[1] / 2];
var screen_width = Math.round(Global.GetScreenSize()[0]);
var center_screen = [screen_size[0]/2, screen_size[1]/2 ];
var last_visible_condition = 999;
var last_fl_flag_mode = 999;
var was_menu_visible = false;
var original_aa = true;
function vec_length_2d(vec)
{
    return Math.sqrt(vec[0] * vec[0] + vec[1] * vec[1]);
}
//RGB规则
function HSVtoRGB(h, s, v)
{
    var r, g, b, i, f, p, q, t;

    i = Math.floor(h * 6);
    f = h * 6 - i;
    p = v * (1 - s);
    q = v * (1 - f * s);
    t = v * (1 - (1 - f) * s);

    switch (i % 6)
    {
        case 0: r = v, g = t, b = p; break;
        case 1: r = q, g = v, b = p; break;
        case 2: r = p, g = v, b = t; break;
        case 3: r = p, g = q, b = v; break;
        case 4: r = t, g = p, b = v; break;
        case 5: r = v, g = p, b = q; break;
    }

    return { r: Math.round(r * 255), g: Math.round(g * 255), b: Math.round(b * 255) };
}
//检测空中
function isInAir(){
	var fv = Entity.GetProp(Entity.GetLocalPlayer(), "CBasePlayer", "m_flFallVelocity");
	if(fv < -1 || fv > 1){
        in_air = true;
		return true;
    }
    in_air = false;
	return false;
}
//检测速度
function getVelocity(player){
	var velocity = Entity.GetProp(player, "CBasePlayer", "m_vecVelocity[0]");
	return Math.sqrt(velocity[0] * velocity[0] + velocity[1] * velocity[1]);
}
//UI.Add
UI.AddLabel("O>>>>>>Mana Onetap Crack<<<<<<O");
UI.AddLabel("        QQ170794432");
UI.AddLabel("         QQ170794432");
UI.AddSliderInt("O====Mixologist.Visual====O", 1, 1);
UI.AddCheckbox("Reset AA override")
UI.SetValue("Script items","Reset AA override",1)
UI.AddCheckbox("Sniper Quick Switch");
UI.AddCheckbox("FPS boost");
UI.AddCheckbox('Mixologist Damage Numbers');
UI.AddCheckbox("Local Bullets");
UI.AddColorPicker("Tracer color");
UI.AddSliderInt("Ticks tracer lasts", 1, 640);
UI.AddSliderInt("Max tracers", 1, 50);
UI.AddDropdown("Type", ["Thin", "Thick"]);
UI.AddCheckbox("AA bar Indicator");
UI.AddColorPicker("Real Color");
UI.AddColorPicker("Fake Color");
UI.AddColorPicker("AA Color");
UI.AddSliderFloat("Mixologist kill effect", 0, 2);
UI.AddSliderFloat("Aspect Ratio",1.0,2.0); 
UI.SetValue('MISC', 'GENERAL', 'Hidden cvars', true);
UI.SetValue('MISC', 'PERFORMANCE & INFORMATION', 'Disable post processing', false);
UI.SetValue('MISC', 'PERFORMANCE & INFORMATION', 'Watermark', false);
UI.SetValue('MISC', 'PERFORMANCE & INFORMATION', 'Show keybind states', false);
UI.AddSliderFloat("Rainbow Line Speed", 0.01, 1.0);
UI.AddCheckbox("Custom scope crosshair");
UI.AddColorPicker("Scope Color 1");
UI.AddColorPicker("Scope Color 2");
UI.AddSliderInt("Width", 1, 10);
UI.AddCheckbox("Keybinds");
UI.AddColorPicker("Keybinds Color");
UI.AddSliderInt("0>>>>>> Keybinds X  <<<<<<0", 0, screensize[0]);
UI.AddSliderInt("0>>>>>> Keybinds Y  <<<<<<0", 0, screensize[1]);
UI.AddCheckbox("Exploits");
UI.AddSliderInt("0>>>>>> Exploits X  <<<<<<0", 0, screensize[0]);
UI.AddSliderInt("0>>>>>> Exploits Y  <<<<<<0", 0, screensize[1]);
UI.AddCheckbox("Anti-Aim");
UI.AddSliderInt("0>>>>>> Anti-Aim X  <<<<<<0", 0, screensize[0]);
UI.AddSliderInt("0>>>>>> Anti-Aim Y  <<<<<<0", 0, screensize[1]);
UI.AddSliderInt("O======Enemies OOF======O", 1, 1);
UI.AddSliderInt("Size", 1, 20);
UI.AddSliderInt("Radius", 6, 500);
UI.AddSliderInt("Segments", 3, 10);
UI.AddColorPicker("OOF Color");
UI.AddSliderInt("O======Model T/CT======O", 1, 1);
UI.AddCheckbox("Team based model");
UI.AddDropdown("CT player Model", ["None", "'TwoTimes' McCoy", "Seal Team 6 Soldier", "Buckshot", "Lt. Commander Ricksaw", "Dragomir", "Rezan The Ready", "Maximus", "Blackwolf", "The Doctor' Romanov", "B Squadron Officer", "3rd Commando Company", "Special Agent Ava", "Operator", "Markus Delrow", "Michael Syfers", "Enforcer", "Slingshot", "Soldier", "The Elite Mr. Muhlik", "Ground Rebel", "Osiris", "Prof. Shahmat", "Heavy armor"]);
UI.AddDropdown('CT knife model', ['None', 'Bayonet', 'Flip knife', 'Gut knife', 'Karambit', 'M9 bayonet', 'Butterfly', 'Falchion', 'Navaja', 'Shadow daggers', 'Stiletto', 'Bowie', 'Huntsman', 'Talon', 'Ursus', 'Classic', 'Paracord', 'Survival', 'Nomad', 'Skeleton']);
UI.AddDropdown("T player Model", ["None", "'TwoTimes' McCoy", "Seal Team 6 Soldier", "Buckshot", "Lt. Commander Ricksaw", "Dragomir", "Rezan The Ready", "Maximus", "Blackwolf", "The Doctor' Romanov", "B Squadron Officer", "3rd Commando Company", "Special Agent Ava", "Operator", "Markus Delrow", "Michael Syfers", "Enforcer", "Slingshot", "Soldier", "The Elite Mr. Muhlik", "Ground Rebel", "Osiris", "Prof. Shahmat", "Heavy armor"]);
UI.AddDropdown('T knife model', ['None', 'Bayonet', 'Flip knife', 'Gut knife', 'Karambit', 'M9 bayonet', 'Butterfly', 'Falchion', 'Navaja', 'Shadow daggers', 'Stiletto', 'Bowie', 'Huntsman', 'Talon', 'Ursus', 'Classic', 'Paracord', 'Survival', 'Nomad', 'Skeleton']);
UI.AddSliderInt("O====Mixologist.Rage/AA====O", 1, 1);
UI.AddHotkey("Legit AA key(No fakelag best)");
UI.AddCheckbox('GOD Legit AA(Auto)');
UI.AddCheckbox("On shot fakelag=0(off)");
UI.AddCheckbox("Shot invert");
UI.AddCheckbox('Safe head(Auto)');
UI.AddCheckbox("Better AA(Auto)");
UI.AddDropdown("Anti Bruteforce", ["Off", "On Hit", "On Shot"]);
UI.AddSliderInt("O====Mixologist.OFFSET====O", 1, 1);
UI.AddHotkey('Crazy Inverter');
//AA类型：慢走和非慢走
UI.AddDropdown("AA Type", ["Run/Walk", "Slow walk","Semirage"]);
//非慢走AA
UI.AddSliderInt("Fake offset Max",-180, 180);
UI.AddSliderInt("Fake offset Min",-180, 180);
UI.AddSliderInt("LBY offset Max",-58, 58);
UI.AddSliderInt("LBY offset Min",-58, 58);
UI.AddSliderInt("Real offset Max",-60, 60);
UI.AddSliderInt("Real offset Min",-60, 60);
UI.AddSliderInt("YAW offset",-180, 180);
UI.AddSliderInt("Jitter offset",-180, 180);
//慢走AA设置
UI.AddSliderInt("Fake offset Max(s)",-180, 180);
UI.AddSliderInt("Fake offset Min(s)",-180, 180);
UI.AddSliderInt("LBY offset Max(s)",-58, 58);
UI.AddSliderInt("LBY offset Min(s)",-58, 58);
UI.AddSliderInt("Real offset Max(s)",-60, 60);
UI.AddSliderInt("Real offset Min(s)",-60, 60);
UI.AddSliderInt("YAW offset(s)",-180, 180);
UI.AddSliderInt("Jitter offset(s)",-180, 180);
//SemirageAA设置
UI.AddSliderInt("Semirage LBY offset 1",-60, 60);
UI.AddSliderInt("Semirage LBY offset 2",-60, 60);
UI.AddSliderInt("Semirage LBY offset 3",-58, 58);
UI.AddSliderInt("Semirage Real offset 1",-58, 58);
UI.AddSliderInt("Semirage Real offset 2",-60, 60);
UI.AddSliderInt("Semirage Real offset 3",-60, 60);
UI.AddSliderInt("Semirage LBY offset 1(Inverter)",-60, 60);
UI.AddSliderInt("Semirage LBY offset 2(Inverter)",-60, 60);
UI.AddSliderInt("Semirage LBY offset 3(Inverter)",-58, 58);
UI.AddSliderInt("Semirage Real offset 1(Inverter)",-58, 58);
UI.AddSliderInt("Semirage Real offset 2(Inverter)",-60, 60);
UI.AddSliderInt("Semirage Real offset 3(Inverter)",-60, 60);
UI.AddSliderInt("O====Mixologist.Fakelag====O", 1, 1);
UI.AddCheckbox("Jitter Fakelag");
UI.AddSliderInt("Fakelag Limit", 1, 16);
UI.AddSliderInt("O====>DMG Override<====O", 1, 1);
UI.AddCheckbox("Safe Limbs");
UI.AddHotkey("Minimum Damage key");
UI.AddDropdown("Damage override", ["Pistol","Heavy Pistol", "Scout", "AWP", "Auto"]);
UI.AddSliderInt("Pistol Mindmg", 0, 130);
UI.AddSliderInt("Pistol Maxdmg", 0, 130);
UI.AddSliderInt("Heavy Pistol Mindmg", 0, 130);
UI.AddSliderInt("Heavy Pistol Maxdmg", 0, 130); 
UI.AddSliderInt("Scout Mindmg", 0, 130);
UI.AddSliderInt("Scout Maxdmg", 0, 130);  
UI.AddSliderInt("AWP Mindmg", 0, 130);
UI.AddSliderInt("AWP Maxdmg", 0, 130);
UI.AddSliderInt("Auto Mindmg", 0, 130);
UI.AddSliderInt("Auto Maxdmg", 0, 130);
UI.AddSliderInt("O=======Movement======O", 1, 1);
UI.AddSliderFloat("Land zero delay", 0, 2);
UI.AddSliderInt( "Strafe Boost", 1, 5 );
UI.AddSliderInt("Slow-walk speed", 10, 85);
UI.AddCheckbox("Leg desync");
UI.AddSliderInt("Leg desync speed", 2, 10);
UI.SetValue("Script items","Slow-walk speed",35)
UI.AddSliderInt("O=======Hit chance======O", 1, 1);
UI.AddSliderInt("Auto sniper Scope Hitchance", 1, 100);
UI.AddSliderInt("Auto sniper UnScope Hitchance", 1, 100);
UI.AddCheckbox("Jumpscout Hitchance");
UI.AddSliderInt("Jump Hitchance", 1, 100);
UI.AddSliderInt("Land Hitchance", 1, 100);



//start M I X O-YAW
var crazy_Inverter = 0;
var crazy_Inverter_speed = 2;
function crazyInverter(){
	if(!UI.IsHotkeyActive("Script items","Crazy Inverter")) return;
	if(crazy_Inverter++ === crazy_Inverter_speed){
		UI.ToggleHotkey("Anti-Aim", "Fake angles", "Inverter");
		crazy_Inverter = 0;
	}
}

//开镜准星
function custscope()
{
    local_player = Entity.GetLocalPlayer();
    if (!Entity.IsValid(local_player) || !Entity.IsAlive(local_player)) return;
    scope_enb = UI.GetValue("Script items", "Custom scope crosshair");
    scope_width = UI.GetValue("Script items", "Width");
    UI.SetEnabled("Script items","Scope Color 1", scope_enb);
    UI.SetEnabled("Script items", "Scope Color 2", scope_enb);
    UI.SetEnabled("Script items", "Width", scope_enb);///u s e r:78

    if (UI.GetValue("Script items", "Custom scope crosshair"))
    {
        col1 = UI.GetColor("Script items", "Scope Color 1");
        col2 = UI.GetColor("Script items", "Scope Color 2");

        if (is_scoped = Entity.GetProp(local_player, "CCSPlayer", "m_bIsScoped"))
        {
            Render.GradientRect(screen_size[0] / 2 - (scope_width / 2) + 1, screen_size[1] / 2, scope_width, screen_size[1] / 2, 0, col1, col2);
            Render.GradientRect(screen_size[0] / 2 - (scope_width / 2) + 1, 0, scope_width, screen_size[1] / 2, 0, col2, col1);
///u s e r:78
            Render.GradientRect(screen_size[0] / 2, screen_size[1] / 2, screen_size[0] / 2, scope_width, 1, col1, col2);
            Render.GradientRect(0, screen_size[1] / 2, screen_size[0] / 2, scope_width, 1, col2, col1);
        }
    }
}
var username = Cheat.GetUsername();
Cheat.PrintColor([255,215,0, 255], " ​" + "\n")
Cheat.PrintColor([255,215,0, 255], "          •> Welcome To MI"+"XO-"+"YAW <•" + "\n");
Cheat.PrintColor([255,215,0, 255], "          •> Discord: Mix"+"ologi"+"st#6"+"105 ​<•" + "\n");
Cheat.PrintColor([255,215,0, 255], "          •> Log"+"ged in as: " + username + " <• \n");
Cheat.PrintColor([255,215,0, 255], "          •> Last upd"+"ate: 4/"+"11/"+"20"+"21 <• \n");
//rainbow bar
function raainbowbar()
{
    var colors = HSVtoRGB(Global.Realtime() * UI.GetValue("Script Items", "Rainbow Line Speed"), 1, 1);
    Render.GradientRect(0, 0, screen_width/2, 4, 1, [colors.g, colors.b, colors.r, 255], [colors.r, colors.g, colors.b, 255]);
    Render.GradientRect(screen_width/2, 0, screen_width/2, 4, 1, [colors.r, colors.g, colors.b, 255], [colors.b, colors.r, colors.g, 255]);
}

function resetaa()
{
    if(UI.GetValue("Script items","Reset AA override"))
    {
        AntiAim.SetOverride(1)
        UI.SetValue("Script items","Reset AA override",0);
        Cheat.PrintChat("[Mana] Reset AA override = 1 ");
        Cheat.PrintChat("[Mana] 每局新游戏开始 || AA && FL失效，请重新加载JS");
        Cheat.PrintChat("[Mana] QQ170794432");
        UI.SetValue("Script items","Reset AA override",0);
    }
}

function draw_circle(x, y, radius, thickness, color) {
    var inner = radius - thickness;

    for (; radius > inner; --radius) {
        Render.Circle(x, y, radius, color);
    }
}///u s e r:78
function draw_arc(x, y, radius, start_angle, percent, thickness, color) {
    var precision = (2 * Math.PI) / 50;
    var step = Math.PI / 180;
    var inner = radius - thickness;
    var end_angle = (start_angle + percent) * step;
    var start_angle = (start_angle * Math.PI) / 180;

    for (; radius > inner; --radius) {
        for (var angle = start_angle; angle < end_angle; angle += precision) {
            var cx = Math.round(x + radius * Math.cos(angle));
            var cy = Math.round(y + radius * Math.sin(angle));

            var cx2 = Math.round(x + radius * Math.cos(angle + precision));
            var cy2 = Math.round(y + radius * Math.sin(angle + precision));

            Render.Line(cx, cy, cx2, cy2, color);
        }
    }
}
function adjust_angle(angle) {
    if (angle < 0) {
        angle = (90 + angle * (-1));
    } else if (angle > 0) {
        angle = (90 - angle);
    }
///u s e r:78
    return angle;
}
function realfake() {
    if (!Entity.IsAlive(Entity.GetLocalPlayer())) return;
    var screen_middle_x = Render.GetScreenSize()[0] * 0.5;
    var screen_middle_y = Render.GetScreenSize()[1] * 0.5;
    var view_yaw = Local.GetViewAngles()[1] - 180;
    var real = adjust_angle(Local.GetRealYaw() - view_yaw);
    var fake = adjust_angle(Local.GetFakeYaw() - view_yaw);

    draw_arc(screen_middle_x, screen_middle_y, 200, real - (10 * 0.5), 10, 2, UI.GetColor("JAVASCRIPT", "Real Color"));
    draw_arc(screen_middle_x, screen_middle_y, 200, fake - (10 * 0.5), 10, 2, UI.GetColor("JAVASCRIPT", "Fake Color"));
}

//开枪时分离
var wpnfire = 0;
function inverter() 
{
    if (UI.IsHotkeyActive("Rage","GENERAL","General","Enabled"))
    {
        wpnfire = wpnfire + 1;
    }
    if (wpnfire > 2){wpnfire = 0;}
    if(wpnfire == 1)
    {
        UI.SetValue("Anti-Aim", "Fake angles", "Desync on shot", 1);
    }
    if(wpnfire == 2)///u s e r:78
    {
        UI.SetValue("Anti-Aim", "Fake angles", "Desync on shot", 0);
    }
}

//MISC
function safe_concat(a, b)
{
  var arr = [];

  for (var k in a)
      arr.push(a[k]);
///u s e r:78
  if (b instanceof Array)
  {
      for (var k in b)
          arr.push(b[k]);

      return arr;
  }
  arr.push(b);
  return arr;
}
function call(func, name, props)
{
  func.apply(null, safe_concat([name], props));///u s e r:78
  return name;
}
function get(path, is_color)
{
  is_color = is_color || false;
  const func = is_color ? UI.GetColor : UI.GetValue;

  if (path instanceof Array)
      return func.apply(null, path);

  return func.apply(null, ["Script items", path]);
}
function set(path, value)///u s e r:78
{
  const func = (value instanceof Array) ? UI.SetColor : UI.SetValue;

  if (path instanceof Array)
     return func.apply(null, safe_concat(path, value));

 func.apply(null, safe_concat(path, value));
}
function visible(path, value)
{
  if (path instanceof Array)
     return UI.SetEnabled.apply(null, safe_concat(path, value));
///u s e r:78
 UI.SetEnabled.apply(null, safe_concat(["Script items", path], value));
}

//连跳修复
function Strafefix()
{
    var CustomSpeed = UI.GetValue( "Script items", "Strafe Boost" );
    var VelocityProp = Entity.GetProp(Entity.GetLocalPlayer(), 'CBasePlayer', 'm_vecVelocity[0]'),
    Velocity = Math.sqrt(VelocityProp[0] * VelocityProp[0] + VelocityProp[1] * VelocityProp[1]);
    parseFloat(Velocity)
    Velocity2 = Velocity/1.5;
    VelocityCus = Velocity2/CustomSpeed;
    UI.SetValue( "Misc", "GENERAL", "Movement", "Turn speed", VelocityCus );
}

function reset_data() {
    AntiAim.SetOverride(1)
}

//水印 & 人物模型
function onFSN(){
    if(Cheat.FrameStage() != 2)
        return
    var team = Entity.GetProp(Entity.GetLocalPlayer(),"DT_BaseEntity", "m_iTeamNum")
    if(!UI.GetValue("Script Items", "Team based model")){
        UI.SetEnabled("Script Items", "CT player Model", false)
        UI.SetEnabled("Script Items", "T player Model", false)
        UI.SetEnabled("Script Items", "CT knife model", false)
        UI.SetEnabled("Script Items", "T knife model", false)
        return;///u s e r:78
    }
    UI.SetEnabled("Script Items", "T player Model", true)
    UI.SetEnabled("Script Items", "CT player Model", true)
    UI.SetEnabled("Script Items", "T knife model", true)
    UI.SetEnabled("Script Items", "CT knife model", true)
    if(team == 2){ // T
        UI.SetValue("Misc", "SKINS", "Player", "Player model", UI.GetValue("Script Items", "T player Model"))
        UI.SetValue("Misc", "SKINS", "Knife", "Knife model", UI.GetValue("Script Items", "T knife model"))
    }
    else if(team == 3){ // CT
        UI.SetValue("Misc", "SKINS", "Player", "Player model", UI.GetValue("Script Items", "CT player Model"))
        UI.SetValue("Misc", "SKINS", "Knife", "Knife model", UI.GetValue("Script Items", "CT knife model"))
    }
}

//watermark
//var ownername = 'Mix ologist1337';
function watermark() {
	var today = new Date();
    var hours1 = today.getHours();
    var minutes1 = today.getMinutes();
	var seconds1 = today.getSeconds();
    var hours = hours1 <= 9 ? "0"+hours1+":" : hours1+":";
    var minutes = minutes1 <= 9 ? "0" + minutes1+":" : minutes1+":";
    var seconds = seconds1 <= 9 ? "0" + seconds1 : seconds1;
	var server_ping = Math.round(Entity.GetProp(Entity.GetLocalPlayer(), "CPlayerResource", "m_iPing")).toString();
    var font = Render.AddFont("comic sans ms", 11, 800);///u s e r:78
	var text = "  MI"+"XO-YA"+"W"+ " | "+"Mix"+"olo"+"gi"+"st"+" | delay: " + server_ping + "ms "+"| "+ hours + minutes + seconds ;
	var ww = Render.TextSizeCustom(text, font)[0] + 10;
    var wx = screensize[0];
    //BY M i x o l o g i s t # 6105
    wx = wx - ww + 355;
    Render.GradientRect(wx - 385, 19, ww+8, 19, 1, [0, 0, 0, 0], [0, 0, 0, 70]);//水印背景
    Render.StringCustom(wx-370, 20 , 0, text, [255,255,255, 255 ], font);//自定义字体(也可以弄成RGB)
    Render.StringCustom(wx-369, 21 , 0, text, [255,255,255, 170 ], font);//字体层次感
    //NL Logo
    Render.Circle( wx - 392, 28, 11, [255,255,255, 255 ] );
    Render.Circle( wx - 392, 28, 14, [255,255,255, 255 ] );
    Render.Circle( wx - 392, 28, 9, [255,255,255, 255 ] );
    //上
    Render.Line( wx - 393, 19, wx - 393, 25, [255,255,255, 255 ]);
    Render.Line( wx - 392, 19, wx - 392, 25, [255,255,255, 255 ]);
    Render.Line( wx - 391, 19, wx - 391, 25, [255,255,255, 255 ]);
    //下
    Render.Line( wx - 391, 31, wx - 391, 37, [255,255,255, 255 ]);
    Render.Line( wx - 392, 31, wx - 392, 37, [255,255,255, 255 ]);
    Render.Line( wx - 393, 31, wx - 393, 37, [255,255,255, 255 ]);
    //左
    Render.Line( wx - 401, 27, wx - 395, 27, [255,255,255, 255 ]);
    Render.Line( wx - 401, 28, wx - 395, 28, [255,255,255, 255 ]);
    Render.Line( wx - 401, 29, wx - 395, 29, [255,255,255, 255 ]);
    //右
    Render.Line( wx - 388, 27, wx - 383, 27, [255,255,255, 255 ]);
    Render.Line( wx - 388, 28, wx - 383, 28, [255,255,255, 255 ]);
    Render.Line( wx - 388, 29, wx - 383, 29, [255,255,255, 255 ]);
}

//快速换武器
var flip = false;
function on_weapon_fire()
{///u s e r:78
    local_player = Entity.GetLocalPlayer();
    short = Event.GetInt("userid");
    short_index = Entity.GetEntityFromUserID(short);
    localplayer_weapon = Entity.GetWeapon(local_player);
    weapon_name = Entity.GetName(localplayer_weapon);
    if (UI.GetValue("Sniper Quick Switch") == true) {
        if(short_index == local_player){
            if(weapon_name == "ssg 08"){
                Global.ExecuteCommand( "slot3");
                flip = true;
            }
            if(weapon_name == "awp"){
                Global.ExecuteCommand( "slot3");
                flip = true;
            }
        }
 
    }
}

//Make by Mixologist#6105
function reset_tick()
{
    if (flip == true)
    {
        Global.ExecuteCommand( "slot1");
        flip = false;
    }
}

//分辨率
var aspect_cache = 0;

function aspect_ratio(){
	var aspect_slider = UI.GetValue("Aspect Ratio");
	if (aspect_cache != aspect_slider) {
		aspect_cache = aspect_slider;
		UI.SetValue("Misc", "GENERAL", "Miscellaneous", "Hidden cvars", 1);
		Global.ExecuteCommand("r_aspectratio " + aspect_slider);
	}///u s e r:78
}

//伤害数值标记
var iVictim_index, First_pos, Second_pos, Third_pos, Fourth_pos, Fifth_pos, First, Second, Third, Fourth, Five, iDamageCount = iOffsetCount = YOffsetFirst = YOffsetSecond = YOffsetThird = YOffsetFourth = YOffsetFive = loadFont = HitAttack = 0;  
const first_screen_pos = [], second_screen_pos = [], third_screen_pos = [], fourth_screen_pos = [], fifth_screen_pos = [];
function EVENT_PLAYER_HURT()
{
    iAttacker = Event.GetInt("attacker"); iAttacker_index = Entity.GetEntityFromUserID(iAttacker);
    iVictim = Event.GetInt("userid"); iVictim_index = Entity.GetEntityFromUserID(iVictim);   
    if(Entity.GetLocalPlayer() == iVictim_index && Entity.GetLocalPlayer() !== iAttacker_index)    return;
    if(Entity.GetLocalPlayer() == iAttacker_index)
    {
        HitAttack = 1;
        if(iDamageCount == 5) iDamageCount = 0; if(iOffsetCount == 5) iOffsetCount = 0;
        iDamageCount+=1;
        iOffsetCount+=1;        
        if(iDamageCount == 1)    {    First = Event.GetInt("dmg_health");    First_pos = Entity.GetRenderOrigin(iVictim_index);    }  
        if(iDamageCount == 2)    {    Second = Event.GetInt("dmg_health");    Second_pos = Entity.GetRenderOrigin(iVictim_index);    }              
        if(iDamageCount == 3)    {    Third = Event.GetInt("dmg_health");    Third_pos = Entity.GetRenderOrigin(iVictim_index);    }      
        if(iDamageCount == 4)    {    Fourth = Event.GetInt("dmg_health");    Fourth_pos = Entity.GetRenderOrigin(iVictim_index);    }      
        if(iDamageCount == 5)    {    Five = Event.GetInt("dmg_health");    Fifth_pos = Entity.GetRenderOrigin(iVictim_index);    }
        if(iOffsetCount == 1)    YOffsetFirst = 255; if(iOffsetCount == 2)    YOffsetSecond = 255; if(iOffsetCount == 3)    YOffsetThird = 255; if(iOffsetCount == 4)    YOffsetFourth = 255; if(iOffsetCount == 5)    YOffsetFive = 255;              
    }      
}

function HUD_REDRAW()
{
    if(loadFont == 0)
    {
        fontSM2 = Render.AddFont("Minecraft", 18, 500);
        loadFont = 1;///u s e r:78
    }
    if(!HitAttack || !UI.GetValue("Script items", "Mixologist Damage Numbers"))    return;
    if(Entity.IsValid(iVictim_index))
    {
        if(YOffsetFirst > 1)    YOffsetFirst--; if(YOffsetSecond > 1)    YOffsetSecond-=2; if(YOffsetThird > 1)    YOffsetThird-=3; if(YOffsetFourth > 1)    YOffsetFourth-=2; if(YOffsetFive > 1)    YOffsetFive--;  
        if(iDamageCount == 1)    first_screen_pos = Render.WorldToScreen(First_pos);    if(iDamageCount == 2)    second_screen_pos = Render.WorldToScreen(Second_pos);
        if(iDamageCount == 3)    third_screen_pos = Render.WorldToScreen(Third_pos);    if(iDamageCount == 4)    fourth_screen_pos = Render.WorldToScreen(Fourth_pos);
        if(iDamageCount == 5)    fifth_screen_pos = Render.WorldToScreen(Fifth_pos);
        Render.StringCustom(first_screen_pos[0]-15, first_screen_pos[1]-50+YOffsetFirst-255, 1, "" + First, [ 255, 165, 0, YOffsetFirst ], fontSM2);
        Render.StringCustom(second_screen_pos[0]+15, second_screen_pos [1]-50+YOffsetSecond-255, 1, "" + Second, [ 255, 165, 0, YOffsetSecond ], fontSM2);
        Render.StringCustom(third_screen_pos[0]-25, third_screen_pos[1]-50+YOffsetThird-255, 1, "" + Third, [ 255, 165, 0, YOffsetThird ], fontSM2);
        Render.StringCustom(fourth_screen_pos[0]+25, fourth_screen_pos[1]-50+YOffsetFourth-255, 1, "" + Fourth, [ 255, 165, 0, YOffsetFourth ], fontSM2);
        Render.StringCustom(fifth_screen_pos[0]-10, fifth_screen_pos[1]-50+YOffsetFive-255, 1, "" + Five, [ 255, 165, 0, YOffsetFive ], fontSM2);
    }      
}  

//子弹轨迹
var traceContainer = [];
function tracer(eyepos, hitpos, time,color) {
    this.eyepos = eyepos;
    this.position = hitpos;
    this.time = time;
    this.col = color;
    
}
var impact = 0;
function onBulletImpact() {
    
        if (Entity.GetEntityFromUserID(Event.GetInt("userid")) == Entity.GetLocalPlayer()) {
            var x = Event.GetFloat("x");
            var y = Event.GetFloat("y");
            var z = Event.GetFloat("z");

            var pos = [x, y, z - 1];
            var color = UI.GetColor('Misc', 'JAVASCRIPT', 'Script items', "Tracer color");
            
            var view = Entity.GetEyePosition(Entity.GetLocalPlayer());
             view = [view[0],view[1],view[2] - 2];
            traceContainer.push(new tracer(view, pos, Globals.Tickcount(),color));
        }
        
    
}

function bullet() {
    if (!(Entity.IsAlive(Entity.GetLocalPlayer())) ) {
        traceContainer = [];
        return
    }///u s e r:78
    if(traceContainer.length < 1)
    return    
    var t = UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', "Ticks tracer lasts");
    for (i in traceContainer) {
        var ss = Render.GetScreenSize();
        var view2s = Render.WorldToScreen(traceContainer[i].eyepos);
        var pos2s = Render.WorldToScreen(traceContainer[i].position);
        var col = traceContainer[i].col;
            if ((view2s[0] < -150 || view2s[0] > ss[0] + 150 || pos2s[0] < -150 || pos2s[0] > ss[0] + 150
                || view2s[1] < -150 || view2s[1] > ss[1] + 150 || pos2s[1] < -150 || pos2s[1] > ss[1] + 150) == false) {
                currenteye = Entity.GetEyePosition(Entity.GetLocalPlayer());
                var dx = currenteye[0] - traceContainer[i].eyepos[0];
                var dy = currenteye[1] - traceContainer[i].eyepos[1];
                var dz = currenteye[2] - traceContainer[i].eyepos[2];
                var dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
                if (UI.IsHotkeyActive("Visual", "WORLD", "View", "Thirdperson") == 0 || dist > 0.3) {
                    Render.Line(view2s[0], view2s[1], pos2s[0], pos2s[1], col)
                    if (UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', "Type") == 1) {
                        Render.Line(view2s[0] + 2, view2s[1], pos2s[0] + 2, pos2s[1], col)
                        Render.Line(view2s[0], view2s[1] + 2, pos2s[0], pos2s[1] + 2, col)
                        Render.Line(view2s[0] - 2, view2s[1], pos2s[0] - 2, pos2s[1], col)
                        Render.Line(view2s[0], view2s[1] - 2, pos2s[0], pos2s[1] - 2, col)
                    }
                }
            }             
        if (traceContainer[i].time + t < Globals.Tickcount()) {
            traceContainer[i].col = [traceContainer[i].col[0],traceContainer[i].col[1],traceContainer[i].col[2],clamp(traceContainer[i].col[3] - 2.5,0,255)];
        }  
        if(traceContainer[i].col[3] <= 15){
            traceContainer.shift()///u s e r:78
        }
        if (UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', "Max tracers") < traceContainer.length) {
            traceContainer[i].col = [traceContainer[i].col[0],traceContainer[i].col[1],traceContainer[i].col[2],clamp(traceContainer[i].col[3] - 2.5,0,255)];
        }
    }
}
clamp = function (val, min, max) {
    if (val > max)
       return max
    if (min > val)
       return min
    return val
 }

function menu_cb()
{   
    if (!UI.IsMenuOpen())///u s e r:78
    return
   enabled = UI.GetValue( "Local Bullets");
   UI.SetEnabled( "Tracer color", enabled);
   UI.SetEnabled( "Ticks tracer lasts", enabled);
   UI.SetEnabled( "Max tracers", enabled);
   UI.SetEnabled( "Type", enabled);
}

//各种FPS优化
function fps_boost(){
    if (UI.GetValue("FPS boost")){
		UI.SetValue("Misc", "GENERAL", "Misc", "Force sv_cheats", true);
		UI.SetValue("Misc", "GENERAL", "Misc", "Hidden cvars", true);
        Convar.SetString("r_shadows", "0");
        Convar.SetString("cl_csm_static_prop_shadows", "0");
        Convar.SetString("cl_csm_shadows", "0");
        Convar.SetString("cl_csm_world_shadows", "0");
        Convar.SetString("cl_foot_contact_shadows", "0");
        Convar.SetString("cl_csm_viewmodel_shadows", "0");
        Convar.SetString("cl_csm_rope_shadows", "0");
        Convar.SetString("cl_csm_sprite_shadows", "0");
		Convar.SetString("cl_csm_world_shadows_in_viewmodelcascade", "0");
		Convar.SetString("cl_csm_translucent_shadows", "0");
		Convar.SetString("cl_csm_entity_shadows", "0");
        Convar.SetString("violence_hblood", "0");
        Convar.SetString("r_3dsky", "0");
        Convar.SetString("r_drawdecals", "0");
        Convar.SetString("r_drawrain", "0");
        Convar.SetString("r_drawropes", "0");
        Convar.SetString("r_drawsprites", "0");
        Convar.SetString("fog_enable_water_fog", "0");
		Convar.SetString("@panorama_disable_blur", "1");
		Convar.SetString("dsp_slow_cpu", "1");
		Convar.SetString("cl_disable_ragdolls", "1");
		Convar.SetString("mat_disable_bloom", "1");
    }
    else{///u s e r:78
        Convar.SetString("r_shadows", "1");
        Convar.SetString("cl_csm_static_prop_shadows", "1");
        Convar.SetString("cl_csm_shadows", "1");
        Convar.SetString("cl_csm_world_shadows", "1");
        Convar.SetString("cl_foot_contact_shadows", "1");
        Convar.SetString("cl_csm_viewmodel_shadows", "1");
        Convar.SetString("cl_csm_rope_shadows", "1");
        Convar.SetString("cl_csm_sprite_shadows", "1");
        Convar.SetString("cl_csm_world_shadows_in_viewmodelcascade", "1");
		Convar.SetString("cl_csm_translucent_shadows", "1");
		Convar.SetString("cl_csm_entity_shadows", "1");
        Convar.SetString("violence_hblood", "1");
        Convar.SetString("r_3dsky", "1");
        Convar.SetString("r_drawdecals", "1");
        Convar.SetString("r_drawrain", "1");
        Convar.SetString("r_drawropes", "1");
        Convar.SetString("r_drawsprites", "1");
        Convar.SetString("fog_enable_water_fog", "1");
		Convar.SetString("@panorama_disable_blur", "0");
		Convar.SetString("dsp_slow_cpu", "0");
		Convar.SetString("cl_disable_ragdolls", "0");
		Convar.SetString("mat_disable_bloom", "0");
    }
}

//敌人OOF指示器

const arc_poly = function(center, radius, a_min, a_max, num_segments, thiccboi, oofcolor){
    if (radius == 0.0) return;
    var prevpos = 0;
    for (var i = 0; i <= num_segments; i++)
    {
        const a = a_min + (i / num_segments) * (a_max - a_min);
        const a_next = a_min + ((i+1) / num_segments) * (a_max - a_min);

        const renderat = [center[0] + Math.cos(a) * radius, center[1] + Math.sin(a) * radius];
        const renderat_next = [center[0] + Math.cos(a_next) * radius, center[1] + Math.sin(a_next) * radius];

        const top = [renderat[0] - (Math.cos(a) * thiccboi), renderat[1] - (Math.sin(a) * thiccboi)];
        const top_next = [renderat_next[0] - (Math.cos(a_next) * thiccboi), renderat_next[1] - (Math.sin(a_next) * thiccboi)];

        if(prevpos != 0){
            Render.Polygon([[top[0],top[1]],[prevpos[0], prevpos[1]],[renderat[0], renderat[1]]], oofcolor);
            if(i != num_segments)
                Render.Polygon([[renderat[0],renderat[1]], [top_next[0], top_next[1]], [top[0], top[1]]], oofcolor);
        } else Render.Polygon([[renderat[0],renderat[1]], [top_next[0], top_next[1]], [top[0], top[1]]], oofcolor);
        
        prevpos = renderat;
    }
}

const arc_line = function(center, radius, a_min, a_max, num_segments, oofcolor){
    if (radius == 0.0) return;
    var prevpos = 0
    for (var i = 0; i <= num_segments; i++)
    {
        const a = a_min + (i / num_segments) * (a_max - a_min);
        var renderat = [center[0] + Math.cos(a) * radius, center[1] + Math.sin(a) * radius];
        if(prevpos != 0)
        Render.Line(prevpos[0], prevpos[1], renderat[0], renderat[1], oofcolor);
        
        prevpos = renderat;
    }
}

const calc_angle = function(vec1, vec2){
    var qAngles = [0,0,0];
	var delta = [(vec1[0] - vec2[0]), (vec1[1] - vec2[1]), (vec1[2] - vec2[2])];
	var hyp = Math.sqrt(delta[0] * delta[0] + delta[1] * delta[1]);
	qAngles[0] = (Math.atan(delta[2] / hyp) * (180.0 / Math.PI));
	qAngles[1] = (Math.atan(delta[1] / delta[0]) * (180.0 / Math.PI));
	qAngles[2] = 0;
	if (delta[0] >= 0)
		qAngles[1] = qAngles[1]+180;
	return qAngles;
}

const deg2rad2 = function(x){
    return x * (Math.PI / 180.0);
}

const rotate_triangle = function(points, rotation, point_center){
    for(var i in points){
        var point = points[i]
        point[0] -= point_center[0];
        point[1] -= point_center[1];
        const tempX = point[0];
		const tempY = point[1];
		const theta = deg2rad2(rotation);
		const c = Math.cos(theta);
        const s = Math.sin(theta);
        point[0] = tempX * c - tempY * s;
		point[1] = tempX * s + tempY * c;
		point[0] += point_center[0];
		point[1] += point_center[1];
    }
}



const get_render_pos = function(mainvec, viewangles, radius){
    var rot = deg2rad2(viewangles[1] - calc_angle(Entity.GetEyePosition(Entity.GetLocalPlayer()), mainvec)[1] - 90);
    return [screen_center[0] + Math.cos(rot) * radius, screen_center[1] + Math.sin(rot) * radius];
}

const is_on_screen = function(origin){
    const w2s = Render.WorldToScreen(origin);
    if(!w2s) return false;
    return screen_size[0] > w2s[0] && screen_size[1] > w2s[1];
}
function nemoof(){
    var enemies = Entity.GetEnemies();
    var viewangles = Local.GetViewAngles();
    var localorigin = Entity.GetEyePosition(Entity.GetLocalPlayer());
    const values = {only_invis: UI.GetValue("Script items","Only invisible"), radius: UI.GetValue("Script items","Radius"), size: UI.GetValue("Script items","Size"), segments: UI.GetValue("Script items","Segments"), oofcolor: UI.GetColor("Script items","OOF Color")};
    for (i=0; i<enemies.length; i++)
    {
        if(Entity.IsDormant(enemies[i]) || Entity.IsAlive(enemies[i])){
            const hitbox_pos = Entity.GetRenderOrigin( enemies[i] );
            if(!(values.only_invis && is_on_screen(hitbox_pos))){
                const angle = viewangles[1] - calc_angle(localorigin, hitbox_pos)[1] - 90;
                const render_pos = get_render_pos(hitbox_pos, viewangles, values.radius + (values.size * 2) - 1);
                arc_poly(screen_center, values.radius + 6 + (values.size * 2), deg2rad2(angle - values.size), deg2rad2(angle + values.size), values.segments, 4.5, values.oofcolor);
                arc_line(screen_center, values.radius + (values.size * 2) - 1, deg2rad2(angle - values.size), deg2rad2(angle + values.size), values.segments, values.oofcolor);
            }
        }
    }
}
// DT指示器
function get_icon(a) {
    var letter = "";
    switch (a) {
        case "desert eagle":
            letter = "a";
            break
        case "dual berettas":
            letter = "b";
            break
        case "five seven":
            letter = "c";
            break
        case "glock 18":
            letter = "d";
            break
        case "ak 47":
            letter = "e";
            break
        case "aug":
            letter = "f";
            break
        case "awp":
            letter = "g";
            break
        case "famas":
            letter = "h";
            break
        case "m249":
            letter = "i";
            break
        case "g3sg1":
            letter = "j";
            break
        case "galil ar":
            letter = "k";
            break
        case "m4a4":
            letter = "l";
            break
        case "m4a1 s":
            letter = "m";
            break
        case "mac 10":
            letter = "n";
            break
        case "p2000":
            letter = "o";
            break
        case "mp5 sd":
            letter = "p";
            break
        case "ump 45":
            letter = "q";
            break
        case "xm1014":
            letter = "r";
            break
        case "pp bizon":
            letter = "s";
            break
        case "mag 7":
            letter = "t";
            break
        case "negev":
            letter = "u";
            break
        case "sawed off":
            letter = "v";
            break
        case "tec 9":
            letter = "w";
            break
        case "zeus x27":
            letter = "x";
            break
        case "p250":
            letter = "y";
            break
        case "mp7":
            letter = "z";
            break
        case "mp9":
            letter = "A";
            break
        case "nova":
            letter = "B";
            break
        case "p90":
            letter = "C";
            break
        case "scar 20":
            letter = "D";
            break
        case "sg 553":
            letter = "E";
            break
        case "ssg 08":
            letter = "F";
            break
        case "knife":
            letter = "G";
            break
        case "flashbang":
            letter = "H";
            break
        case "high explosive grenade":
            letter = "I";
            break
        case "smoke grenade":
            letter = "J";
            break
        case "molotov":
            letter = "K";
            break
        case "decoy grenade":
            letter = "L";
            break
        case "incendiary grenade":
            letter = "M";
            break
        case "c4 explosive":
            letter = "N";
            break
        case "usp s":
            letter = "P";
            break
        case "cz75 auto":
            letter = "Q";
            break
        case "r8 revolver":
            letter = "R";
            break
        case "bayonet":
            letter = "V";
            break
        case "flip knife":
            letter = "W";
            break
        case "gut knife":
            letter = "X";
            break
        case "karambit":
            letter = "Y";
            break
        case "m9 bayonet":
            letter = "Z";
            break
        case "falchion knife":
            letter = "1";
            break
        case "bowie knife":
            letter = "2";
            break
        case "butterfly knife":
            letter = "3";
            break
        case "shadow daggers":
            letter = "4";
            break
        case "ursus knife":
            letter = "5";
            break
        case "navaja knife":
            letter = "6";
            break
        case "stiletto knife":
            letter = "7";
            break
        case "skeleton knife":
            letter = "8";
            break
        case "huntsman knife":
            letter = "0";
            break
        case "talon knife":
            letter = "8";
            break
        case "classic knife":
            letter = "25";
            break
        case "paracord knife":
            letter = "Z";
            break
        case "survival knife":
            letter = "Z";
            break
        case "nomad knife":
            letter = "Z";
            break
        default:
            letter = "";
            break
    }
    return letter
}
function in_bounds(vec, x, y, x2, y2) {
    return (vec[0] > x) && (vec[1] > y) && (vec[0] < x2) && (vec[1] < y2)
}
function isActive(a)
{
    return UI.IsHotkeyActive("Script Items", a)
}
function setValue(cat, value)
{
    UI.SetValue("Rage", cat.toUpperCase(), "Targeting", "Minimum damage", value)
}
function isPistol(name)
{
    if (name == "usp s" || name == "glock 18" || name == "dual berettas" || name == "p250" || name == "tec 9" || name == "p2000" || name == "five seven" || name == "cz75 auto" )
    {
        return true
    }
}///u s e r:78
function isHeavyPistol(name)
{
    if (name == "r8 revolver" || name == "desert eagle")
    {
        return true
    }
}
function isAutoSniper(name)
{
    if(name == "scar 20" || weapon_name == "g3sg1")
    {
        return true
    }
}

//按键指示器
var colorhotkeys = UI.GetColor("Script items", "Keybinds Color");
var alpha = 0;
var maxwidth = 0;
var swalpha = 0;
var fdalpha = 0;
var apalpha = 0;
var aialpha = 0;
var spalpha = 0;
var fbalpha = 0;
var dtalpha = 0;
var hsalpha = 0;
var doalpha = 0;
var textalpha = 0;
var h = new Array();

function in_bounds(vec, x, y, x2, y2) {
    return (vec[0] > x) && (vec[1] > y) && (vec[0] < x2) && (vec[1] < y2)
}///u s e r:78

function main_hotkeys() {
    if (!UI.GetValue("Script items","Keybinds"))
    {
        UI.SetEnabled("Script items", "0>>>>>> Keybinds X  <<<<<<0",false)
        UI.SetEnabled("Script items", "0>>>>>> Keybinds Y  <<<<<<0",false)
        UI.SetEnabled("Script items", "Keybinds Color",false)
    }
    else
    {
        UI.SetEnabled("Script items", "0>>>>>> Keybinds X  <<<<<<0",true)
        UI.SetEnabled("Script items", "0>>>>>> Keybinds Y  <<<<<<0",true)
        UI.SetEnabled("Script items", "Keybinds Color",true)
        if (!World.GetServerString()) return;
        var x = UI.GetValue("Script items", "0>>>>>> Keybinds X  <<<<<<0"),
            y = UI.GetValue("Script items", "0>>>>>> Keybinds Y  <<<<<<0");
        colorhotkeys = UI.GetColor("Script items", "Keybinds Color");
        keyalpha = Math.sin(Globals.Tickcount() * Globals.TickInterval() * 2) * 127 + 128;
        var keyfont = Render.AddFont("Verdana", 8, 120);
        var frames = 8 * Globals.Frametime();
        var width = 75;
        var maxwidth = 0;
        if (UI.IsHotkeyActive("Anti-Aim", "Extra", "Slow walk")) {
            swalpha = Math.min(swalpha + frames, 1);
        } else {
            swalpha = swalpha - frames;
            if (swalpha < 0) swalpha = 0;
            if (swalpha == 0) {
                h.splice(h.indexOf("Slow motion"));
            }
        }

        if (UI.IsHotkeyActive("Anti-Aim", "Extra", "Fake duck")) {
            fdalpha = Math.min(fdalpha + frames, 1);
        } else {
            fdalpha = fdalpha - frames;
            if (fdalpha < 0) fdalpha = 0;
            if (fdalpha == 0) {
                h.splice(h.indexOf("Duck peek assist"));
            }
        }///u s e r:78

        if (UI.IsHotkeyActive("Misc", "GENERAL", "Movement", "Auto peek")) {
            apalpha = Math.min(apalpha + frames, 1);
        } else {
            apalpha = apalpha - frames;
            if (apalpha < 0) apalpha = 0;
            if (apalpha == 0) {
                h.splice(h.indexOf("Quick peek"));
            }
        }

        if (UI.IsHotkeyActive("Anti-Aim", "Fake angles", "Inverter")) {
            aialpha = Math.min(aialpha + frames, 1);
        } else {
            aialpha = aialpha - frames;
            if (aialpha < 0) aialpha = 0;
            if (aialpha == 0) {
                h.splice(h.indexOf("Anti-aim inverter"));
            }
        }

        if (UI.IsHotkeyActive("Rage", "GENERAL", "General", "Force safe point")) {
            spalpha = Math.min(spalpha + frames, 1);
        } else {
            spalpha = spalpha - frames;
            if (spalpha < 0) spalpha = 0;
            if (spalpha == 0) {
                h.splice(h.indexOf("Safe point override"));
            }
        }///u s e r:78

        if (UI.IsHotkeyActive("Rage", "GENERAL", "General", "Force body aim")) {
            fbalpha = Math.min(fbalpha + frames, 1);
        } else {
            fbalpha = fbalpha - frames;
            if (fbalpha < 0) fbalpha = 0;
            if (fbalpha == 0) {
                h.splice(h.indexOf("Force body aim"));
            }
        }

        if (UI.IsHotkeyActive("Rage", "Exploits", "Doubletap")) {
            dtalpha = Math.min(dtalpha + frames, 1);
        } else {
            dtalpha = dtalpha - frames;
            if (dtalpha < 0) dtalpha = 0;
            if (dtalpha == 0) {
                h.splice(h.indexOf("Double tap"));
            }
        }

        if (UI.IsHotkeyActive("Rage", "Exploits", "Hide shots")) {
            hsalpha = Math.min(hsalpha + frames, 1);
        } else {
            hsalpha = hsalpha - frames;
            if (hsalpha < 0) hsalpha = 0;
            if (hsalpha == 0) {
                h.splice(h.indexOf("On shot anti-aim"));
            }
        }///u s e r:78
        if (UI.IsHotkeyActive("Script items", "Legit AA key(No fakelag best)")) {
            swalpha = Math.min(swalpha + frames, 1);
        } else {
            swalpha = swalpha - frames;
            if (swalpha < 0) swalpha = 200;
            if (swalpha == 0) {
                h.splice(h.indexOf("GOD legit AA"));
            }
        }

        if (UI.IsHotkeyActive("Script items", "Legit AA key(No fakelag best)")) {
            if (h.indexOf("GOD legit AA") == -1)
                h.push("GOD legit AA")
        }
        if (UI.IsHotkeyActive("Anti-Aim", "Extra", "Slow walk")) {
            if (h.indexOf("Slow motion") == -1)
                h.push("Slow motion")
        }
        if (UI.IsHotkeyActive("Anti-Aim", "Extra", "Fake duck")) {
            if (h.indexOf("Duck peek assist") == -1)
                h.push("Duck peek assist")
        }
        if (UI.IsHotkeyActive("Misc", "GENERAL", "Movement", "Auto peek")) {
            if (h.indexOf("Quick peek") == -1)
                h.push("Quick peek")
        }
        if (UI.IsHotkeyActive("Rage", "GENERAL", "General", "Force safe point")) {
            if (h.indexOf("Safe point override") == -1)
                h.push("Safe point override")
        }
        if (UI.IsHotkeyActive("Rage", "GENERAL", "General", "Force body aim")) {
            if (h.indexOf("Force body aim") == -1)
                h.push("Force body aim")
        }///u s e r:78
        if (UI.IsHotkeyActive("Rage", "Exploits", "Doubletap")) {
            if (h.indexOf("Double tap") == -1)
                h.push("Double tap")
        }
        if (UI.IsHotkeyActive("Rage", "Exploits", "Hide shots")) {
            if (h.indexOf("On shot anti-aim") == -1)
                h.push("On shot anti-aim")
        }
        if (UI.IsHotkeyActive("Anti-Aim", "Fake angles", "Inverter")) {
            if (h.indexOf("Anti-aim inverter") == -1)
                h.push("Anti-aim inverter")
        }
        if (h.length > 0) {
            alpha = Math.min(alpha + frames, 1);
        } else {
            alpha = alpha - frames;
            if (alpha < 0) alpha = 0;
        }
        for (i = 0; i < h.length; i++) {
            if (Render.TextSizeCustom(h[i], keyfont)[0] > maxwidth) {
                maxwidth = Render.TextSizeCustom(h[i], keyfont)[0];
            }
        }
        if (maxwidth == 0) maxwidth = 50;
        width = width + maxwidth;
        if (alpha > 0) {
                Render.GradientRect(x +70 ,y + 5 ,100,2  ,1, [colorhotkeys[0], colorhotkeys[1], colorhotkeys[2], 0]  , [colorhotkeys[0], colorhotkeys[1], colorhotkeys[2], 255]);
                Render.GradientRect(x     ,y + 5 ,100,2  ,1, [colorhotkeys[0], colorhotkeys[1], colorhotkeys[2], 255], [colorhotkeys[0], colorhotkeys[1], colorhotkeys[2], 0]);
                Render.GradientRect(x     ,y + 5 ,2  ,20 ,1, [colorhotkeys[0], colorhotkeys[1], colorhotkeys[2], 240], [colorhotkeys[0], colorhotkeys[1], colorhotkeys[2], 0]);
                Render.GradientRect(x +167,y + 5 ,4  ,20 ,1, [colorhotkeys[0], colorhotkeys[1], colorhotkeys[2],0]   , [colorhotkeys[0], colorhotkeys[1], colorhotkeys[2], 255]);
                Render.GradientRect(x +73 ,y + 24,98 ,2  ,1, [colorhotkeys[0], colorhotkeys[1], colorhotkeys[2],0]   , [colorhotkeys[0], colorhotkeys[1], colorhotkeys[2], 255]);
                Render.GradientRect(x     ,y + 24,98 ,2  ,1, [colorhotkeys[0], colorhotkeys[1], colorhotkeys[2],255] , [colorhotkeys[0], colorhotkeys[1], colorhotkeys[2], 0]);
                Render.GradientRect(x     ,y + 24,98 ,1  ,1, [colorhotkeys[0], colorhotkeys[1], colorhotkeys[2],255] , [colorhotkeys[0], colorhotkeys[1], colorhotkeys[2], 0]);
                Render.StringCustom(x + 170 / 2 - (Render.TextSizeCustom("keybinds", keyfont)[0] / 2) + 2, y + 9, 0, "keybinds", [255, 255, 255, alpha * 255 / 1.3], keyfont);
                Render.StringCustom(x + 170 / 2 - (Render.TextSizeCustom("keybinds", keyfont)[0] / 2) + 1, y + 8, 0, "keybinds", [255, 255, 255, alpha * 255], keyfont);
                for (i = 0; i < h.length; i++) {
                    switch (h[i]) {///u s e r:78
                        case 'GOD legit AA':
                            Render.FilledRect(x, y + 23 + 18 * i, width, 18, [17, 17, 17, Math.min(colorhotkeys[3], Math.min(swalpha, colorhotkeys[3]))]);
                            Render.StringCustom(x + 3, y + 26 + 18 * i, 0, h[i], [0, 0, 0, swalpha * 255 / 1.3], keyfont);
                            Render.StringCustom(x + 2, y + 26 + 18 * i, 0, h[i], [255, 255, 255, swalpha * 255], keyfont);

                            Render.StringCustom(x - 3 + 170 - Render.TextSizeCustom("[on]", keyfont)[0], y + 26 + 18 * i, 0, "[on]", [0, 0, 0, swalpha * 255 / 1.3], keyfont);
                            Render.StringCustom(x - 2 + 170 - Render.TextSizeCustom("[on]", keyfont)[0], y + 26 + 18 * i, 0, "[on]", [255, 255, 255, swalpha * 255], keyfont);
                            break;
                        case 'Slow motion':
                            Render.FilledRect(x, y + 23 + 18 * i, width, 18, [17, 17, 17, Math.min(colorhotkeys[3], Math.min(swalpha, colorhotkeys[3]))]);
                            Render.StringCustom(x + 3, y + 26 + 18 * i, 0, h[i], [0, 0, 0, swalpha * 255 / 1.3], keyfont);
                            Render.StringCustom(x + 2, y + 26 + 18 * i, 0, h[i], [255, 255, 255, swalpha * 255], keyfont);

                            Render.StringCustom(x - 3 + 170 - Render.TextSizeCustom("[on]", keyfont)[0], y + 26 + 18 * i, 0, "[on]", [0, 0, 0, swalpha * 255 / 1.3], keyfont);
                            Render.StringCustom(x - 2 + 170 - Render.TextSizeCustom("[on]", keyfont)[0], y + 26 + 18 * i, 0, "[on]", [255, 255, 255, swalpha * 255], keyfont);
                            break;
                        case 'Duck peek assist':
                            Render.FilledRect(x, y + 23 + 18 * i, width, 18, [17, 17, 17, Math.min(colorhotkeys[3], Math.min(fdalpha, colorhotkeys[3]))]);
                            Render.StringCustom(x + 3, y + 26 + 18 * i, 0, h[i], [0, 0, 0, fdalpha * 255 / 1.3], keyfont);
                            Render.StringCustom(x + 2, y + 26 + 18 * i, 0, h[i], [255, 255, 255, fdalpha * 255], keyfont);

                            Render.StringCustom(x - 3 + 170 - Render.TextSizeCustom("[on]", keyfont)[0], y + 26 + 18 * i, 0, "[on]", [0, 0, 0, fdalpha * 255 / 1.3], keyfont);
                            Render.StringCustom(x - 2 + 170 - Render.TextSizeCustom("[on]", keyfont)[0], y + 26 + 18 * i, 0, "[on]", [255, 255, 255, fdalpha * 255], keyfont);
                            break;
                        case 'Quick peek':
                            Render.FilledRect(x, y + 23 + 18 * i, width, 18, [17, 17, 17, Math.min(colorhotkeys[3], Math.min(apalpha, colorhotkeys[3]))]);
                            Render.StringCustom(x + 3, y + 26 + 18 * i, 0, h[i], [0, 0, 0, apalpha * 255 / 1.3], keyfont);
                            Render.StringCustom(x + 2, y + 26 + 18 * i, 0, h[i], [255, 255, 255, apalpha * 255], keyfont);

                            Render.StringCustom(x - 3 + 170 - Render.TextSizeCustom("[on]", keyfont)[0], y + 26 + 18 * i, 0, "[on]", [0, 0, 0, apalpha * 255 / 1.3], keyfont);
                            Render.StringCustom(x - 2 + 170 - Render.TextSizeCustom("[on]", keyfont)[0], y + 26 + 18 * i, 0, "[on]", [255, 255, 255, apalpha * 255], keyfont);
                            break;
                        case 'Safe point override':
                            Render.FilledRect(x, y + 23 + 18 * i, width, 18, [17, 17, 17, Math.min(colorhotkeys[3], Math.min(spalpha, colorhotkeys[3]))]);
                            Render.StringCustom(x + 3, y + 26 + 18 * i, 0, h[i], [0, 0, 0, spalpha * 255 / 1.3], keyfont);
                            Render.StringCustom(x + 2, y + 26 + 18 * i, 0, h[i], [255, 255, 255, spalpha * 255], keyfont);

                            Render.StringCustom(x - 3 + 170 - Render.TextSizeCustom("[on]", keyfont)[0], y + 26 + 18 * i, 0, "[on]", [0, 0, 0, spalpha * 255 / 1.3], keyfont);
                            Render.StringCustom(x - 2 + 170 - Render.TextSizeCustom("[on]", keyfont)[0], y + 26 + 18 * i, 0, "[on]", [255, 255, 255, spalpha * 255], keyfont);
                            break;
                        case 'Force body aim':
                            Render.FilledRect(x, y + 23 + 18 * i, width, 18, [17, 17, 17, Math.min(colorhotkeys[3], Math.min(fbalpha, colorhotkeys[3]))]);
                            Render.StringCustom(x + 3, y + 26 + 18 * i, 0, h[i], [0, 0, 0, fbalpha * 255 / 1.3], keyfont);
                            Render.StringCustom(x + 2, y + 26 + 18 * i, 0, h[i], [255, 255, 255, fbalpha * 255], keyfont);

                            Render.StringCustom(x - 3 + 170 - Render.TextSizeCustom("[on]", keyfont)[0], y + 26 + 18 * i, 0, "[on]", [0, 0, 0, fbalpha * 255 / 1.3], keyfont);
                            Render.StringCustom(x - 2 + 170 - Render.TextSizeCustom("[on]", keyfont)[0], y + 26 + 18 * i, 0, "[on]", [255, 255, 255, fbalpha * 255], keyfont);
                            break;
                        case 'Double tap':
                            Render.FilledRect(x, y + 23 + 18 * i, width, 18, [17, 17, 17, Math.min(colorhotkeys[3], Math.min(dtalpha, colorhotkeys[3]))]);
                            Render.StringCustom(x + 3, y + 26 + 18 * i, 0, h[i], [0, 0, 0, dtalpha * 255 / 1.3], keyfont);
                            Render.StringCustom(x + 2, y + 26 + 18 * i, 0, h[i], [255, 255, 255, dtalpha * 255], keyfont);

                            Render.StringCustom(x - 3 + 170 - Render.TextSizeCustom("[on]", keyfont)[0], y + 26 + 18 * i, 0, "[on]", [0, 0, 0, dtalpha * 255 / 1.3], keyfont);
                            Render.StringCustom(x - 2 + 170 - Render.TextSizeCustom("[on]", keyfont)[0], y + 26 + 18 * i, 0, "[on]", [255, 255, 255, dtalpha * 255], keyfont);
                            break;
                        case 'On shot anti-aim':
                            Render.FilledRect(x, y + 23 + 18 * i, width, 18, [17, 17, 17, Math.min(colorhotkeys[3], Math.min(hsalpha, colorhotkeys[3]))]);
                            Render.StringCustom(x + 3, y + 26 + 18 * i, 0, h[i], [0, 0, 0, hsalpha * 255 / 1.3], keyfont);
                            Render.StringCustom(x + 2, y + 26 + 18 * i, 0, h[i], [255, 255, 255, hsalpha * 255], keyfont);

                            Render.StringCustom(x - 3 + 170 - Render.TextSizeCustom("[on]", keyfont)[0], y + 26 + 18 * i, 0, "[on]", [0, 0, 0, hsalpha * 255 / 1.3], keyfont);
                            Render.StringCustom(x - 2 + 170 - Render.TextSizeCustom("[on]", keyfont)[0], y + 26 + 18 * i, 0, "[on]", [255, 255, 255, hsalpha * 255], keyfont);
                            break;
                        case 'Anti-aim inverter':
                            Render.FilledRect(x, y + 23 + 18 * i, width, 18, [17, 17, 17, Math.min(colorhotkeys[3], Math.min(aialpha, colorhotkeys[3]))]);
                            Render.StringCustom(x + 3, y + 26 + 18 * i, 0, h[i], [0, 0, 0, aialpha * 255 / 1.3], keyfont);
                            Render.StringCustom(x + 2, y + 26 + 18 * i, 0, h[i], [255, 255, 255, aialpha * 255], keyfont);
    
                            Render.StringCustom(x - 3 + 170 - Render.TextSizeCustom("[on]", keyfont)[0], y + 26 + 18 * i, 0, "[on]", [0, 0, 0, aialpha * 255 / 1.3], keyfont);
                            Render.StringCustom(x - 2 + 170 - Render.TextSizeCustom("[on]", keyfont)[0], y + 26 + 18 * i, 0, "[on]", [255, 255, 255, aialpha * 255], keyfont);
                            break;           
                    }
                }
        }
    }
}





//hahah 1337 funni
function onPlayerDeath() {

    attacker = Event.GetInt("attacker");
    attacker_index = Entity.GetEntityFromUserID(attacker);
    attacker_name = Entity.GetName(attacker_index);
    attacker_me = Entity.IsLocalPlayer(attacker_index);

    if (attacker_me) {
        Global.ExecuteCommand("say " + "哥们被Mana的牛马参打死了 火速加170794432扫码变强");
    }
}



//指示器
function clamp(num, min, max) {return num <= min ? min : num >= max ? max : num;}
function deg2rad(degress) {return degress * Math.PI / 180.0;}
function get_delta(player) {var speed = get_velocity(player);var delta = (speed / 8);return (58 - delta);}
function AAAIND() {
    var screen_size = Render.GetScreenSize();
    local_player = Entity.GetLocalPlayer();
    if (!UI.GetValue("Script items", "AA bar Indicator") || !Entity.IsValid(local_player) || !Entity.IsAlive(local_player)) return;
    AAAfont = Render.AddFont("Verdana", 7, 400);
    yawfont = Render.AddFont("comic sans ms", 9, 400);
    x = screen_size[0];
    y = screen_size[1];
    real_yaw = Local.GetRealYaw();
    fake_yaw = Local.GetFakeYaw();
    delta = Math.min(Math.abs(real_yaw - fake_yaw) / 2, 60).toFixed(0);
    delta_size = Render.TextSizeCustom(delta, AAAfont);
    Render.StringCustom(x / 2, y / 2 + 17, 1, delta, [255, 255, 255, 255], AAAfont);
    Render.Circle(x / 2 + delta_size[0] - 2, y / 2 + 25, 2, [255, 255, 255, 255]);
    var desync_delta = clamp(Math.abs(Math.round(Local.GetRealYaw() - Local.GetFakeYaw())), 0, 58);
    tickcount = Global.Tickcount();
	rainbow1 = HSVtoRGB(tickcount % 350 / 350, 1, 1, 1, 255);
	rainbow2 = HSVtoRGB(tickcount % 250 / 250, 1, 1, 1, 255);
	rainbow3 = HSVtoRGB(tickcount % 150 / 150, 1, 1, 1, 255);
    Render.GradientRect((screensize[0] / 2 + -desync_delta * 2) + desync_delta + 2, screensize[1] / 2 + 35, desync_delta, 2, 1, [rainbow1.r, rainbow1.g, rainbow1.b, 255], [rainbow3.r,rainbow3.g,rainbow3.b, 255]);
    Render.GradientRect((screensize[0] / 2 + -desync_delta * 2) + (desync_delta * 2), screensize[1] / 2 + 35, desync_delta, 2, 1, [rainbow3.r,rainbow3.g,rainbow3.b, 255], [rainbow1.r, rainbow1.g, rainbow1.b, 255]);
    Render.StringCustom(x / 2 +3, y / 2 + 40, 1,"MIXO-YAW",[255, 255, 255, 255], yawfont)
    Render.StringCustom(x / 2 +4, y / 2 + 41, 1,"MIXO-YAW",[255, 255, 255, 255], yawfont)
}
//绘制
function DMGover()
{
    var DMGfont = Render.AddFont("Comic Sans MS", 11, 800);
    wep = Entity.GetName(Entity.GetWeapon(Entity.GetLocalPlayer()));
    x = screen[0]/2;
    y = screen[1]/2;
    pistol = " DMG: " + UI.GetValue("Rage", "PISTOL", "Targeting", "Minimum damage");
    heavy = " DMG: " + UI.GetValue("Rage", "HEAVY PISTOL", "Targeting", "Minimum damage");
    scout = " DMG: " + UI.GetValue("Rage", "SCOUT", "Targeting", "Minimum damage");
    awp = " DMG: " + UI.GetValue("Rage", "AWP", "Targeting", "Minimum damage");
    auto = " DMG: " + UI.GetValue("Rage", "AUTOSNIPER", "Targeting", "Minimum damage");
    var dmgstr = "";
    if (Entity.IsValid(Entity.GetLocalPlayer()) && Entity.IsAlive(Entity.GetLocalPlayer()))
    {
        if (isPistol(wep))
        {
            dmgstr = pistol
        }
        else if (isHeavyPistol(wep))
        {
            dmgstr = heavy
        }
        else if(wep == "ssg 08")
        {
            dmgstr = scout
        }
        else if(wep == "awp")
        {
            dmgstr = awp
        }
        else if (isAutoSniper(wep))
        {
            dmgstr = auto
        }
    }
    Render.StringCustom(x -35, y + 50, 0, dmgstr+"", [255,255,255,180],DMGfont)//伤害指示器
}
function in_bounds(vec, x, y, x2, y2) {
    return (vec[0] > x) && (vec[1] > y) && (vec[0] < x2) && (vec[1] < y2)
}

function drawarc(x, y, radius, start_angle, percent, thickness, color) {
        var precision = (2 * Math.PI) / 30;
        var step = Math.PI / 180;
        var inner = radius - thickness;
        var end_angle = (start_angle + percent) * step;
        var start_angle = (start_angle * Math.PI) / 180;
        for (; radius > inner; --radius) {
            for (var angle = start_angle; angle < end_angle; angle += precision) {
                var cx = Math.round(x + radius * Math.cos(angle));
                var cy = Math.round(y + radius * Math.sin(angle));
                var cx2 = Math.round(x + radius * Math.cos(angle + precision));
                var cy2 = Math.round(y + radius * Math.sin(angle + precision));
                Render.Line(cx, cy, cx2, cy2, color);
            }
        }
}

function main_aa() {
    if (!UI.GetValue("Script items","Anti-Aim"))
    {
    UI.SetEnabled("Script items", "0>>>>>> Anti-Aim X  <<<<<<0",false)
    UI.SetEnabled("Script items", "0>>>>>> Anti-Aim Y  <<<<<<0",false)
    }
    else
    {
    UI.SetEnabled("Script items", "0>>>>>> Anti-Aim X  <<<<<<0",true)
    UI.SetEnabled("Script items", "0>>>>>> Anti-Aim Y  <<<<<<0",true) 
    if (!World.GetServerString()) return;
    x = UI.GetValue("Script items", "0>>>>>> Anti-Aim X  <<<<<<0");
    y = UI.GetValue("Script items", "0>>>>>> Anti-Aim Y  <<<<<<0");
    var aafont = Render.AddFont("Verdana", 7, 100);
    var RealYaw = Local.GetRealYaw();
    var FakeYaw = Local.GetFakeYaw();
    var delta = Math.min(Math.abs(RealYaw - FakeYaw) / 2, 60).toFixed(1);
    var fakel = UI.GetValue("Anti-Aim", "Fake-Lag", "Limit");
    var text = "     FAKE (" + delta.toString() + "  )  "+ "    FL: " + fakel;
    var w = Render.TextSizeCustom(text, aafont)[0] + 8;
    Render.GradientRect(x - w, y , 4, 20, 2, [255,215,0,180], [85,107,199,0]);//指示器边缘
    Render.GradientRect(x - 37, y , 35, 20, 1, [0,0,0,60], [0,0,0,60]);//背景
    Render.GradientRect(x - 17, y +19, 17, 1, 1, [192,192,192,255], [192,192,192,0]);//指示器边缘
    Render.GradientRect(x - 34, y +19, 17, 1, 1, [192,192,192,0], [192,192,192,255]);//指示器边缘
    Render.GradientRect(x - w -2, y , 47, 20, 1, [0,0,0,0], [0,0,0,80]);//指示器背景
    Render.GradientRect(x - w + 45, y , 47, 20, 1, [0,0,0,80], [0,0,0,0]);//指示器背景
    Render.StringCustom(x + 5 - w, y + 5, 0, text, [0, 0, 0, 180], aafont);
    Render.StringCustom(x + 4 - w, y + 4, 0, text, [255, 255, 255, 255], aafont);
    Render.Circle(x + 18 - w + Render.TextSizeCustom("FAKE (" + delta.toString(), aafont)[0], y + 8, 1, [255,255,255, 255]);
    drawarc(x + 7 - w, y + 10, 5, 0, delta * 6, 2, [255,215,0, 255]);
    }
}

//dt指示器
var fa = 0;
var sa = 0;
function main_dt() {
    if (!UI.GetValue("Script items","Exploits"))
    {
    UI.SetEnabled("Script items", "0>>>>>> Exploits X  <<<<<<0",false)
    UI.SetEnabled("Script items", "0>>>>>> Exploits Y  <<<<<<0",false)
    }
    else
    {
    UI.SetEnabled("Script items", "0>>>>>> Exploits X  <<<<<<0",true)
    UI.SetEnabled("Script items", "0>>>>>> Exploits Y  <<<<<<0",true)    
    if (!World.GetServerString()) return;
    x = UI.GetValue("Script items", "0>>>>>> Exploits X  <<<<<<0");
    y = UI.GetValue("Script items", "0>>>>>> Exploits Y  <<<<<<0");
    local_player = Entity.GetLocalPlayer();
    localplayer_weapon = Entity.GetWeapon(local_player);
    weapon_name = Entity.GetName(localplayer_weapon);
    g_Local_classname = Entity.GetClassName(localplayer_weapon);
    var nextattack = Entity.GetProp(localplayer_weapon, "CBaseCombatWeapon", "m_flNextPrimaryAttack");
    var CanShoot = false;
    if (nextattack <= Globals.Curtime()) {
        CanShoot = true;
    }
    var frames = 8 * Globals.Frametime();
    var font = Render.AddFont("Verdana", 8, 100);
    var fontbullet = Render.AddFont("bullet", 18, 100);
    if (CanShoot && Exploit.GetCharge() == 1 && UI.IsHotkeyActive("Rage", "Exploits", "Doubletap"))
    {
        var text = "MIXO-YAW | Exploits: Double Tap";
    } else if (CanShoot && Exploit.GetCharge() == 1 && UI.IsHotkeyActive("Rage", "Exploits", "Hide shots")) 
    {
        var text = "MIXO-YAW | Exploits: Hide Shots";
    } else 
    {
        var text = "MIXO-YAW | Exploits: OFF";
    }
    if (CanShoot && Exploit.GetCharge() == 1 && UI.IsHotkeyActive("Rage", "Exploits", "Doubletap") && g_Local_classname == "CWeaponSSG08") 
    {
        var text = "MIXO-YAW | Scout Teleport";
    }
    if (CanShoot && Exploit.GetCharge() == 1 && UI.IsHotkeyActive("Rage", "Exploits", "Doubletap") && g_Local_classname == "CWeaponAWP") 
    {
        var text = "MIXO-YAW | AWP Teleport";
    }
    var w = Render.TextSizeCustom(text, font)[0] + 8;
    var colors = HSVtoRGB(Global.Realtime() * UI.GetValue("Script Items", "Rainbow Line Speed"), 1, 1);
    dtalpha = Math.sin(Globals.Tickcount() * Globals.TickInterval() *2) * 57 + 128;
    Render.GradientRect(x , y , 120, 2, 1, [colors.g, colors.b, colors.r, dtalpha], [colors.g, colors.b, colors.r, 0]);//DT指示器边缘
    Render.GradientRect(x + w - 120, y, 120, 2, 1, [colors.g, colors.b, colors.r, 0], [colors.g, colors.b, colors.r, dtalpha]);//DT指示器边缘
    Render.FilledRect(x, y + 2, w, 18, [0, 0, 0, 20]);
    Render.StringCustom(x + 5, y + 5, 0, text, [0, 0, 0, 180], font);
    Render.StringCustom(x + 4, y + 4, 0, text, [255, 255, 255, 255], font);
    Render.String(x + 4, y + 22, 0, get_icon(weapon_name), [255, 255, 255, 255], 5);
    //MAKE BY M I X O L O G I S T # 6 1 0 5
    if ((g_Local_classname == "CKnife" || g_Local_classname == "CWeaponSSG08" || g_Local_classname == "CWeaponAWP" || weapon_name == "r8 revolver" || g_Local_classname == "CHEGrenade" || g_Local_classname == "CMolotovGrenade" || g_Local_classname == "CIncendiaryGrenade" || g_Local_classname == "CFlashbang" || g_Local_classname == "CSmokeGrenade" || g_Local_classname == "CDecoyGrenade" || g_Local_classname == "CWeaponTaser" || g_Local_classname == "CC4")) {
        //return
    } else {
        if (CanShoot) {
            fa = Math.min(fa + frames, 1);
            Render.StringCustom(x + 10 + Render.TextSize(get_icon(weapon_name), 5)[0], y + 18, 0, "A", [255, 255, 255, fa * 255], fontbullet);
        } else {
            fa = 0;
        }
        if (CanShoot && Exploit.GetCharge() == 1 && UI.IsHotkeyActive("Rage", "Exploits", "Doubletap")) {
            sa = Math.min(sa + frames, 1);
            Render.StringCustom(x + 30 + Render.TextSize(get_icon(weapon_name), 5)[0], y + 18, 0, "A", [255, 255, 255, sa * 255], fontbullet);
        } else {
            sa = 0;
        }
    }
}
}

//[Mixologist CFG] 伤害覆盖
function mindmg(){
    localindex = Entity.GetLocalPlayer( );
    isalive = Entity.IsAlive(localindex);
    
    var mindmgdrop = UI.GetValue("Script items", "Damage override");
    var pistol1 = UI.GetValue("Script items", "Pistol Mindmg");
    var pistol2 = UI.GetValue("Script items", "Pistol Maxdmg");
    var heavypistol1 = UI.GetValue("Script items", "Heavy Pistol Mindmg");
    var heavypistol2 = UI.GetValue("Script items", "Heavy Pistol Maxdmg");
    var scout1 = UI.GetValue("Script items", "Scout Mindmg");
    var scout2 = UI.GetValue("Script items", "Scout Maxdmg");
    var awp1 = UI.GetValue("Script items", "AWP Mindmg");
    var awp2 = UI.GetValue("Script items", "AWP Maxdmg");
    var auto1 = UI.GetValue("Script items", "Auto Mindmg");
    var auto2 = UI.GetValue("Script items", "Auto Maxdmg");  
    
    var is_Pistol = mindmgdrop === 0 ? 1 : 0;
    var is_HPistol = mindmgdrop === 1 ? 1 : 0;
    var is_Scout = mindmgdrop === 2 ? 1 : 0;
    var is_AWP = mindmgdrop === 3 ? 1 : 0;
    var is_Auto = mindmgdrop === 4 ? 1 : 0;

        UI.SetEnabled("Script items", "Pistol Mindmg", is_Pistol);
        UI.SetEnabled("Script items", "Pistol Maxdmg", is_Pistol);
 
        UI.SetEnabled("Script items", "Heavy Pistol Mindmg", is_HPistol);
        UI.SetEnabled("Script items", "Heavy Pistol Maxdmg", is_HPistol);

        UI.SetEnabled("Script items", "Scout Mindmg", is_Scout);
        UI.SetEnabled("Script items", "Scout Maxdmg", is_Scout);

        UI.SetEnabled("Script items", "AWP Mindmg", is_AWP);
        UI.SetEnabled("Script items", "AWP Maxdmg", is_AWP);

        UI.SetEnabled("Script items", "Auto Mindmg", is_Auto);
        UI.SetEnabled("Script items", "Auto Maxdmg", is_Auto);

    if(UI.IsHotkeyActive( "Script items", "Minimum Damage key") && isalive == true){
        UI.SetValue("Rage", "HEAVY PISTOL", "Targeting", "Minimum damage", heavypistol2)
        UI.SetValue("Rage", "SCOUT", "Targeting", "Minimum damage", scout2)
        UI.SetValue("Rage", "AWP", "Targeting", "Minimum damage", awp2)
        UI.SetValue("Rage", "AUTOSNIPER", "Targeting", "Minimum damage", auto2)
        UI.SetValue("Rage", "PISTOL", "Targeting", "Minimum damage", pistol2)
    } else {
        UI.SetValue("Rage", "HEAVY PISTOL", "Targeting", "Minimum damage", heavypistol1)
        UI.SetValue("Rage", "SCOUT", "Targeting", "Minimum damage", scout1)
        UI.SetValue("Rage", "AWP", "Targeting", "Minimum damage", awp1)
        UI.SetValue("Rage", "AUTOSNIPER", "Targeting", "Minimum damage", auto1)  
        UI.SetValue("Rage", "PISTOL", "Targeting", "Minimum damage", pistol1) 
    }
}

//fakelag Min-Max
var fl_tickcount = 0;
var fakelag_flip = false;

function jitter(N, l, i, x) {
    const flM = Global.Tickcount() % N*1.2 >= l ? i : x;
    return flM;
}

function jitterfakelag() {
	if(!UI.GetValue("Script items","Jitter Fakelag")) return;
	UI.SetValue("Anti-Aim", "Fake-Lag", "Jitter", 0);
    var fakelag_1 = 3;
    var fakelag_2 = UI.GetValue("Script items","Fakelag Limit");
    if (fl_tickcount >= fakelag_2 && !fakelag_flip) {
        fakelag_flip = true;
        fl_tickcount = 0
    };
    if (fl_tickcount >= fakelag_1 && fakelag_flip) {
        fakelag_flip = false;
        fl_tickcount = 0
    };
    UI.SetValue('Anti-Aim', 'Fake-Lag', 'Limit', !fakelag_flip ? fakelag_2 : 0);
    fl_tickcount++
}
function jitterfakelag2(){
	fl_tickcount = 0;
}

//onshot时fakelag
var faltime, faldelay, shotsfired;
function EVENTWEAPON_FIRE()
{
    iShotsFired = Event.GetInt("userid"); iShotsFired_index = Entity.GetEntityFromUserID(iShotsFired);

    if(Entity.GetLocalPlayer() == iShotsFired_index)
    {
        if(shotsfired == 0)
        {   
            faltime = Globals.Curtime();
            faldelay = faltime+0.2;           
        }
    }       
}

function onshotfl()
{
    if (UI.GetValue("Script items","On shot fakelag=0(off)") && !UI.IsHotkeyActive("Rage","GENERAL","Exploits","Hide shots") && !UI.IsHotkeyActive("Script items","Legit AA key(No fakelag best)") )
    {
    curtime = Globals.Curtime();
    if (curtime < faldelay)
    {
        shotsfired = 1;
        UI.SetValue("Anti-Aim", "Fake-Lag", "Enabled", 0);
        UI.SetValue("Anti-Aim", "Fake-Lag", "Limit", 0);
        AntiAim.SetOverride(0);
    }
    else
    {
        UI.SetValue("Anti-Aim", "Fake-Lag", "Enabled", 1);
        AntiAim.SetOverride(1);
        shotsfired = 0;
    }   
    }
}
//[Mixologist CFG] 慢走速度(很多大蛇喜欢叫假走)
function cMove() 
{
    if (!UI.IsHotkeyActive("Anti-Aim", "Extra", "Slow walk")) return;

    speed = UI.GetValue("Script items", "Slow-walk speed");

    fSpeed = speed;
    bSpeed = speed;
    sSpeed = speed;

    dir = [0, 0, 0];

    if (Input.IsKeyPressed(0x57)) {
        //W
        dir[0] += fSpeed;
    }
    if (Input.IsKeyPressed(0x44)) {
        //D
        dir[1] += sSpeed;
    }
    if (Input.IsKeyPressed(0x41)) {
        //A
        dir[1] -= sSpeed;
    }
    if (Input.IsKeyPressed(0x53)) {
        //S
        dir[0] -= bSpeed;
    }

    UserCMD.SetMovement(dir);
}

var wpn_fire = 0;
function aainverter() 
{
    if (UI.IsHotkeyActive("Rage","GENERAL","General","Enabled") && UI.GetValue("Script items", "Shot invert"))
    {
        UI.ToggleHotkey("Anti-Aim", "Fake angles", "inverter");
    }
}

function getPercentage(number, percentage) {
    return (percentage / 100) * number;
}

//[Mixologist CFG] DT充能变快
function can_shift_shot(ticks_to_shift) {
    var local_player = Entity.GetLocalPlayer();
    var wpn = Entity.GetWeapon(me);

    if (local_player == null || wpn == null)
        return false;

    var tickbase = Entity.GetProp(local_player, "CCSPlayer", "m_nTickBase");
    var curtime = Globals.TickInterval() * (tickbase-ticks_to_shift);

    if (curtime < Entity.GetProp(local_player, "CCSPlayer", "m_flNextAttack"))
        return false;

    if (curtime < Entity.GetProp(wpn, "CBaseCombatWeapon", "m_flNextPrimaryAttack"))
        return false;

    return true;
}
function _TBC_CREATE_MOVE() {
    var is_charged = Exploit.GetCharge();
   
    Exploit[(is_charged != 1 ? "Enable" : "Disable") + "Recharge"]()

    if (can_shift_shot(14) && is_charged != 1) {
        Exploit.DisableRecharge();
        Exploit.Recharge()
    }
}
function _TBC_UNLOAD() {
    Exploit.EnableRecharge();
}

//AA指示器
function AAIND () 
{
    screen = screensize;
    x = screen[0];
    y = screen[1];
    if (!World.GetServerString()) return;

    inverted = UI.IsHotkeyActive("Anti-Aim", "Fake angels", "Inverter");
    INDfont = Render.AddFont("MT Extra", 15, 100);
    aaacolor = UI.GetColor("Script items", "AA Color");

    Render.StringCustom(x / 2 + 55, y / 2 -11, 1, "~>", [40, 40, 40, aaacolor[3]], INDfont);
    Render.StringCustom(x / 2 - 55, y / 2 -11, 1, "<~", [40, 40, 40, aaacolor[3]], INDfont);

    if (inverted) {
        Render.StringCustom(x / 2 - 55, y / 2 -11, 1, "<~", [aaacolor[0], aaacolor[1], aaacolor[2], 180], INDfont);
    } else {
        Render.StringCustom(x / 2 + 55, y / 2 -11, 1, "~>", [aaacolor[0], aaacolor[1], aaacolor[2], 180], INDfont);
    }
}

//自动翻转
function GetScriptOption(name)
{
    var Value = UI.GetValue("Script items", name);
    return Value;
}

function radian(degree)
{
    return degree * Math.PI / 180.0;
}

function ExtendVector(vector, angle, extension)
{
    var radianAngle = radian(angle);
    return [extension * Math.cos(radianAngle) + vector[0], extension * Math.sin(radianAngle) + vector[1], vector[2]];
}

function VectorAdd(a, b)
{
    return [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
}

function VectorSubtract(a, b)
{
    return [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
}

function VectorMultiply(a, b)
{
    return [a[0] * b[0], a[1] * b[1], a[2] * b[2]];
}

function VectorLength(x, y, z)
{
    return Math.sqrt(x * x + y * y + z * z);
}

function VectorNormalize(vec)
{
    var length = VectorLength(vec[0], vec[1], vec[2]);
    return [vec[0] / length, vec[1] / length, vec[2] / length];
}


function VectorDot(a, b)
{
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}

function VectorDistance(a, b)
{
    return VectorLength(a[0] - b[0], a[1] - b[1], a[2] - b[2]);
}

function ClosestPointOnRay(target, rayStart, rayEnd)
{
    var to = VectorSubtract(target, rayStart);
    var dir = VectorSubtract(rayEnd, rayStart);
    var length = VectorLength(dir[0], dir[1], dir[2]);
    dir = VectorNormalize(dir);

    var rangeAlong = VectorDot(dir, to);
    if (rangeAlong < 0.0)
    {
        return rayStart;
    }
    if (rangeAlong > length)
    {
        return rayEnd;
    }
    return VectorAdd(rayStart, VectorMultiply(dir, [rangeAlong, rangeAlong, rangeAlong]));
}

function Flip()
{
    UI.ToggleHotkey("Anti-Aim", "Fake angles", "Inverter");
    AntiAim.SetOverride(1);
}

var lastHitTime = 0.0;
var lastImpactTimes =
[
    0.0
];
var lastImpacts =
[
    [0.0, 0.0, 0.0]
];

function OnHurt()
{
    if (GetScriptOption("Anti Bruteforce") == 0) return;
    if (Entity.GetEntityFromUserID(Event.GetInt("userid")) !== Entity.GetLocalPlayer()) return;
    var hitbox = Event.GetInt('hitgroup');

    if (hitbox == 1 || hitbox == 6 || hitbox == 7)  
    {
        var curtime = Global.Curtime();
        if (Math.abs(lastHitTime - curtime) > 0.5)  
        {
            lastHitTime = curtime;
            Flip();
            Cheat.PrintChat("[MIXO-YAW] On Hit Anti Brute\n")
        }
    }
}

function OnBulletImpact()
{
    if (GetScriptOption("Anti Bruteforce") !== 2) return;

    var curtime = Global.Curtime();
    if (Math.abs(lastHitTime - curtime) < 0.5) return;

    var entity = Entity.GetEntityFromUserID(Event.GetInt("userid"));
    var impact = [Event.GetFloat("x"), Event.GetFloat("y"), Event.GetFloat("z"), curtime];
    var source;
    if (Entity.IsValid(entity) && Entity.IsEnemy(entity))
    {
        if (!Entity.IsDormant(entity))
        {
            source = Entity.GetEyePosition(entity);
        }
        else if (Math.abs(lastImpactTimes[entity] - curtime) < 0.1)
        {
            source = lastImpacts[entity];
        }
        else
        {
            lastImpacts[entity] = impact;
            lastImpactTimes[entity] = curtime;
            return;
        }
        var local_player = Entity.GetLocalPlayer();
        var localEye = Entity.GetEyePosition(local_player);
        var localOrigin = Entity.GetProp(local_player, "CBaseEntity", "m_vecOrigin");
        var localBody = VectorMultiply(VectorAdd(localEye, localOrigin), [0.5, 0.5, 0.5]);

        var bodyVec = ClosestPointOnRay(localBody, source, impact);
        var bodyDist = VectorDistance(localBody, bodyVec);
        
        if (bodyDist < 85.0)
        {
            var realAngle = Local.GetRealYaw();
            var fakeAngle = Local.GetFakeYaw();

            var headVec = ClosestPointOnRay(localEye, source, impact);
            var headDist = VectorDistance(localEye, headVec);
            var feetVec = ClosestPointOnRay(localOrigin, source, impact);
            var feetDist = VectorDistance(localOrigin, feetVec);

            var closestRayPoint;
            var realPos;
            var fakePos;

            if (bodyDist < headDist && bodyDist < feetDist)
            {              
                closestRayPoint = bodyVec;
                realPos = ExtendVector(bodyVec, realAngle + 180.0, 10.0);
                fakePos = ExtendVector(bodyVec, fakeAngle + 180.0, 10.0);
            }
            else if (feetDist < headDist)  
            {                           
                closestRayPoint = feetVec;
                var realPos1 = ExtendVector(bodyVec, realAngle - 30.0 + 60.0, 10.0);
                var realPos2 = ExtendVector(bodyVec, realAngle - 30.0 - 60.0, 10.0);
                var fakePos1 = ExtendVector(bodyVec, fakeAngle - 30.0 + 60.0, 10.0);
                var fakePos2 = ExtendVector(bodyVec, fakeAngle - 30.0 - 60.0, 10.0);
                if (VectorDistance(feetVec, realPos1) < VectorDistance(feetVec, realPos2))
                {
                    realPos = realPos1;
                }
                else
                {
                    realPos = realPos2;
                }
                if (VectorDistance(feetVec, fakePos1) < VectorDistance(feetVec, fakePos2))
                {
                    fakePos = fakePos1;
                }
                else
                {
                    fakePos = fakePos2;
                }
            }
            else                           
            {
                closestRayPoint = headVec;
                realPos = ExtendVector(bodyVec, realAngle, 10.0);
                fakePos = ExtendVector(bodyVec, fakeAngle, 10.0);
            }

            if (VectorDistance(closestRayPoint, fakePos) < VectorDistance(closestRayPoint, realPos))
            {
                lastHitTime = curtime;
                Flip();
                headDist = headDist.toFixed(1)
                Cheat.PrintChat("[MIXO-YAW] Brute distance "+headDist+"\n")
            }
        }

        lastImpacts[entity] = impact;
        lastImpactTimes[entity] = curtime;
    }
}

var frame = 0;
//新规则
function freestand()
{
if (!UI.IsHotkeyActive("Script items", "Legit AA key(No fakelag best)"))
    {
    UI.SetValue("Anti-Aim", "Rage Anti-Aim","At targets",true);
    }
    else
    {
    UI.SetValue("Anti-Aim", "Rage Anti-Aim","At targets",false);
    }

}
function is_gun() 
{
    local_player = Entity.GetLocalPlayer();
    localplayer_weapon = Entity.GetWeapon(local_player);
    weapon_name = Entity.GetName(localplayer_weapon);
    g_Local_classname = Entity.GetClassName(localplayer_weapon);
    if (g_Local_classname == 'CKnife' || g_Local_classname == "CHEGrenade"|| g_Local_classname == "CMolotovGrenade" || g_Local_classname == "CIncendiaryGrenade" || g_Local_classname == "CFlashbang" || g_Local_classname == "CSmokeGrenade" || g_Local_classname == "CDecoyGrenade" || g_Local_classname == "CWeaponTaser" || g_Local_classname == "CC4")
    {
        UI.SetValue("Rage", "GENERAL", "Exploits","Doubletap", 0);
    }
    else
    {
        UI.SetValue("Rage", "GENERAL", "Exploits","Doubletap", 1);
    }
}

//GOD AA慢走和非慢走规则
//M I X O_Y A W
var counter = 0;
function MIXO_AA() 
{
    var fakemax=UI.GetValue("Script items","Fake offset Max");
    var fakemin=UI.GetValue("Script items","Fake offset Min");
    var lbymax=UI.GetValue("Script items","LBY offset Max");
    var lbymin=UI.GetValue("Script items","LBY offset Min");
    var realmax=UI.GetValue("Script items","Real offset Max");
    var realmin=UI.GetValue("Script items","Real offset Min");
    var yawoff=UI.GetValue("Script items","YAW offset");
    var jitteroff=UI.GetValue("Script items","Jitter offset");

    var fakemax2=UI.GetValue("Script items","Fake offset Max(s)");
    var fakemin2=UI.GetValue("Script items","Fake offset Min(s)");
    var lbymax2=UI.GetValue("Script items","LBY offset Max(s)");
    var lbymin2=UI.GetValue("Script items","LBY offset Min(s)");
    var realmax2=UI.GetValue("Script items","Real offset Max(s)");
    var realmin2=UI.GetValue("Script items","Real offset Min(s)");
    var yawoff2=UI.GetValue("Script items","YAW offset(s)");
    var jitteroff2=UI.GetValue("Script items","Jitter offset(s)");

    var semilby1=UI.GetValue("Script items","Semirage LBY offset 1");
    var semilby2=UI.GetValue("Script items","Semirage LBY offset 2");
    var semilby3=UI.GetValue("Script items","Semirage LBY offset 3");
    var semireal1=UI.GetValue("Script items","Semirage Real offset 1");
    var semireal2=UI.GetValue("Script items","Semirage Real offset 2");
    var semireal3=UI.GetValue("Script items","Semirage Real offset 3");
    
    var insemilby1=UI.GetValue("Script items","Semirage LBY offset 1(Inverter)");
    var insemilby2=UI.GetValue("Script items","Semirage LBY offset 2(Inverter)");
    var insemilby3=UI.GetValue("Script items","Semirage LBY offset 3(Inverter)");
    var insemireal1=UI.GetValue("Script items","Semirage Real offset 1(Inverter)");
    var insemireal2=UI.GetValue("Script items","Semirage Real offset 2(Inverter)");
    var insemireal3=UI.GetValue("Script items","Semirage Real offset 3(Inverter)");
//AA by M I X O L O G I S T
var aatype = UI.GetValue("Script items", "AA Type");

var is_run = aatype === 0 ? 1 : 0;
var is_sloww = aatype === 1 ? 1 : 0;
var is_semi = aatype === 2 ? 1 : 0;

        UI.SetEnabled("Script items", "Fake offset Max", is_run);
        UI.SetEnabled("Script items", "Fake offset Min",is_run );
        UI.SetEnabled("Script items", "LBY offset Max", is_run);
        UI.SetEnabled("Script items", "LBY offset Min", is_run);
        UI.SetEnabled("Script items", "Real offset Max",is_run );
        UI.SetEnabled("Script items", "Real offset Min",is_run );
        UI.SetEnabled("Script items", "YAW offset", is_run);
        UI.SetEnabled("Script items", "Jitter offset", is_run);

        UI.SetEnabled("Script items", "Fake offset Max(s)", is_sloww);
        UI.SetEnabled("Script items", "Fake offset Min(s)", is_sloww);
        UI.SetEnabled("Script items", "LBY offset Max(s)", is_sloww);
        UI.SetEnabled("Script items", "LBY offset Min(s)", is_sloww);
        UI.SetEnabled("Script items", "Real offset Max(s)", is_sloww);
        UI.SetEnabled("Script items", "Real offset Min(s)", is_sloww);
        UI.SetEnabled("Script items", "YAW offset(s)", is_sloww);
        UI.SetEnabled("Script items", "Jitter offset(s)", is_sloww);

        UI.SetEnabled("Script items", "Semirage LBY offset 1(Inverter)", is_semi);
        UI.SetEnabled("Script items", "Semirage LBY offset 2(Inverter)", is_semi);
        UI.SetEnabled("Script items", "Semirage LBY offset 3(Inverter)", is_semi);
        UI.SetEnabled("Script items", "Semirage LBY offset 1", is_semi);
        UI.SetEnabled("Script items", "Semirage LBY offset 2", is_semi);
        UI.SetEnabled("Script items", "Semirage LBY offset 3", is_semi);
        UI.SetEnabled("Script items", "Semirage Real offset 1(Inverter)", is_semi);
        UI.SetEnabled("Script items", "Semirage Real offset 2(Inverter)", is_semi);
        UI.SetEnabled("Script items", "Semirage Real offset 3(Inverter)", is_semi);
        UI.SetEnabled("Script items", "Semirage Real offset 1", is_semi);
        UI.SetEnabled("Script items", "Semirage Real offset 2", is_semi);
        UI.SetEnabled("Script items", "Semirage Real offset 3", is_semi);


    var fakenow=fakemin+Math.floor(Math.random()*(fakemax-fakemin+1));
    var lbynow=lbymin+Math.floor(Math.random()*(lbymax-lbymin+1));
    var realnow=realmin+Math.floor(Math.random()*(realmax-realmin+1));

    var fakenow2=fakemin2+Math.floor(Math.random()*(fakemax2-fakemin2+1));
    var lbynow2=lbymin2+Math.floor(Math.random()*(lbymax2-lbymin2+1));
    var realnow2=realmin2+Math.floor(Math.random()*(realmax2-realmin2+1));
    
if (UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Safe head(Auto)') && UI.IsHotkeyActive("Anti-Aim", "Extra", "Slow walk"))
{
    AntiAim.SetRealOffset(realnow2);
    AntiAim.SetFakeOffset(fakenow2);
    AntiAim.SetLBYOffset(lbynow2);
    UI.SetValue('Anti-Aim', 'Rage Anti-Aim', 'Yaw offset', yawoff2)
    UI.SetValue('Anti-Aim', 'Rage Anti-Aim', 'Jitter offset', jitteroff2)
}

if (UI.GetValue("Script items", "Better AA(Auto)") && !UI.IsHotkeyActive("Anti-Aim", "Extra", "Slow walk"))
{
    if (UI.IsHotkeyActive("Anti-Aim", "Fake angles", "Inverter"))
    {
    AntiAim.SetRealOffset(realnow);
    AntiAim.SetFakeOffset(fakenow);
    AntiAim.SetLBYOffset(lbynow);
    }
    else
    {
    AntiAim.SetRealOffset(-realnow);
    AntiAim.SetFakeOffset(-fakenow);
    AntiAim.SetLBYOffset(-lbynow);
    }
    UI.SetValue('Anti-Aim', 'Rage Anti-Aim', 'Yaw offset', yawoff)
    UI.SetValue('Anti-Aim', 'Rage Anti-Aim', 'Jitter offset', jitteroff)
}
//LEGIT AA规则
if (UI.GetValue("Script items", "GOD Legit AA(Auto)"))
{
    if (UI.IsHotkeyActive("Anti-Aim", "Fake angles", "Inverter"))
    {
    switch (lframe++) 
      {
        case 0:
            AntiAim.SetOverride(1),AntiAim.SetRealOffset(insemireal1), AntiAim.SetLBYOffset(insemilby1), AntiAim.SetFakeOffset(0);
            break;
        case 1:
            AntiAim.SetOverride(1),AntiAim.SetRealOffset(insemireal2), AntiAim.SetLBYOffset(insemilby2), AntiAim.SetFakeOffset(0);
            break;
        case 2:
            AntiAim.SetOverride(1),AntiAim.SetRealOffset(insemireal3), AntiAim.SetLBYOffset(insemilby3), AntiAim.SetFakeOffset(0), lframe = 0;
            break;
      }
    }
    else
    {
    switch (lframe++) 
      {
        case 0:
            AntiAim.SetOverride(1),AntiAim.SetRealOffset(semireal1), AntiAim.SetLBYOffset(semilby1), AntiAim.SetFakeOffset(0);
            break;
        case 1:
            AntiAim.SetOverride(1),AntiAim.SetRealOffset(semireal2), AntiAim.SetLBYOffset(semilby2), AntiAim.SetFakeOffset(0);
            break;
        case 2:
            AntiAim.SetOverride(1),AntiAim.SetRealOffset(semireal3), AntiAim.SetLBYOffset(semilby3), AntiAim.SetFakeOffset(0), lframe = 0;
            break;
      }
    }
}

if (UI.IsHotkeyActive("Script items", "Legit AA key(No fakelag best)"))
    {
    UI.SetValue("Script items","Better AA(Auto)",0);
    UI.SetValue ("Anti-Aim", "Rage Anti-Aim", "Yaw offset", 180);
    UI.SetValue ("Anti-Aim", "Rage Anti-Aim", "Jitter offset", 0);
    }
    else
    {
    UI.SetValue("Script items","Better AA(Auto)", 1);
    }

}

function legit_aa()
{
    if (UI.IsHotkeyActive("Script items", "Legit AA key(No fakelag best)"))
    {
        if (original_aa)
        {
            original_aa = false;
        }
        UI.SetValue ("Misc", "PERFORMANCE & INFORMATION", "Information", "Restrictions", 0);
        UI.SetValue ("Anti-Aim", "Fake angles", "Hide real angle", false);
        UI.SetValue ("Script items","Low delta", false);
        UI.SetValue ("Script items","Shot invert", false);
        UI.SetValue ("Anti-Aim", "Rage Anti-Aim", "Manual dir", false);
        UI.SetValue ("Anti-Aim", "Rage Anti-Aim", "Yaw offset", 180);
        UI.SetValue ("Anti-Aim", "Rage Anti-Aim", "Jitter offset", 0);
        UI.SetValue ("Anti-Aim", "Extra", "Pitch", 0);
        UI.SetValue("Script items", "GOD Legit AA(Auto)",1);
        UI.SetValue("Script items", "Safe head(Auto)",0);
        
    }
    else
    {
        if (!original_aa)
        {
            UI.SetValue ("Misc", "PERFORMANCE & INFORMATION", "Information", "Restrictions", 1);
            UI.SetValue ("Anti-Aim", "Fake angles", "Hide real angle", true);
            UI.SetValue ("Anti-Aim", "Rage Anti-Aim", "Manual dir", true);
            UI.SetValue('Anti-Aim', 'Rage Anti-Aim', 'Yaw offset', 10);
            UI.SetValue ("Script items","Low delta", true);
            UI.SetValue ("Anti-Aim", "Extra", "Pitch", 1);
            UI.SetValue("Script items", "GOD Legit AA(Auto)",0);
            UI.SetValue("Script items", "Safe head(Auto)",1);
            original_aa = true;
        }
    }
}
//跳狙
function updateValues()
{
    var OldHitchance = UI.GetValue("Script Items", "Land Hitchance");
    if(isInAir())
    {
    var jumpHitchance = UI.GetValue("Script Items","Jump Hitchance");
    UI.SetValue("Rage", "SCOUT", "Accuracy", "Hitchance", jumpHitchance);
    }
    else
    {
    UI.SetValue("Rage", "SCOUT", "Accuracy", "Hitchance", OldHitchance);
    }
}

function checkIfAlive(){
    local_player = Entity.GetLocalPlayer();
    if(!Entity.IsAlive(local_player))
    {///u s e r:78
        return;
    }
}

function checkRestrictions()
{
    info = UI.GetValue( "Misc", "PERFORMANCE & INFORMATION", "Information", "Restrictions");
    if (info=1){
        UI.SetValue( "Misc", "PERFORMANCE & INFORMATION", "Information", "Restrictions", 0);
    }
}
function poggers(){
    checkRestrictions();
    coolDelay = UI.GetValue( "Script items", "Land zero delay");
    local_player = Entity.GetLocalPlayer();
    if(!Entity.IsAlive(local_player)){
        return;
    }
    if (timed1 == false) {
        lastTime1 = Globals.Curtime();///u s e r:78
        timed1 = true;
    }
    if (Globals.Curtime() > lastTime1 + .3) 
    {
        air = Entity.GetProp(local_player, "CBasePlayer", "m_flFallVelocity");
        if (air < -1 || air > 1) {
            in_air = true;
        } else {
            in_air = false;
        }
        timed1 = false;
    }
    if (Input.IsKeyPressed(0x20)){
        return;
    }
    if (lastAircheck == true && in_air==false)
    {
        if (delayedPos==0 && firstRun==false) {
            firstRun=true;///u s e r:78
        }
        runMainFunction=1;
    }
    if (runMainFunction==1){
        if (timed == false) {
            lastTime = Globals.Curtime();
            timed = true;
        }
        if (Globals.Curtime() > lastTime + coolDelay || firstRun==true) {
            if (delayedPos==1)
            { 
                UI.SetValue("Anti-Aim", "Extra", "Pitch",1);
                delayedPos=0;
                runMainFunction=0;
                timed = false;
                return;
            }  
            if (delayedPos==0)///u s e r:78
            {
                UI.SetValue("Anti-Aim", "Extra", "Pitch",3);
                delayedPos=1;
                firstRun=false;
                timed = false;
                return;
            }
        }
    }
    lastAircheck=in_air;
}
function onUnload() {
    UI.SetValue( "Misc", "Performance & Information", "Information", "Restrictions", 1);
    UI.SetValue("Anti-Aim", "Extra", "Pitch",1);
}
//投票显示
var options = [];
function onVoteOptions() {
    options[0] = Event.GetString("option1")///u s e r:78
    options[1] = Event.GetString("option2")
    options[2] = Event.GetString("option3")
    options[3] = Event.GetString("option4")
    options[4] = Event.GetString("option5")
}
function onVoteCast() {
    var entid = Event.GetInt("entityid");
    if (entid) {
        var team = Event.GetInt("team");
        var option = Event.GetInt("vote_option");
        var name = Entity.GetName(entid);
        var chTeam = "null";
        switch (team) {
            case 0: chTeam = "[N] "; break; case 1: chTeam = "[S] "; break;
            case 2: chTeam = "[T] "; break; case 3: chTeam = "[CT] "; break;
            default: chTeam = "[UNK] "; break;
        }
        ///u s e r:78
        var vote = options[option];
        Global.PrintColor([ 217, 217, 217, 255 ], "[MIXO-YAW] \0");
        Global.Print(chTeam + name + " voted " + vote + "\n");
        Global.PrintChat(chTeam + name + " voted " + vote);
    }
}

//skeet bar
function get_velocity(index) {
    var velocity = Entity.GetProp(index, "CBasePlayer", "m_vecVelocity[0]");
    return Math.sqrt(velocity[0] * velocity[0] + velocity[1] * velocity[1]);
}

function skeetbar() {
    var screen = Global.GetScreenSize(),
    x = screen[0] / 2, y = screen[1]  - 17;
    var font = Render.AddFont("Verdana", 6, 800);
    var font1 = Render.AddFont("Verdana", 7, 800);
    var fonts = Render.AddFont("Verdana", 10, 800);///u s e r:78
    var fps = Math.floor(1 / Global.Frametime());
    var ping = Math.round(Local.Latency( ) * 1000 - 16)
    var velocity = get_velocity(Entity.GetLocalPlayer());
    var speed = Math.round(velocity);

    Render.GradientRect(x , y - 40, (speed / 3)-3, 20, 1, [255,215,0, 170], [255,140,0, 30]);
    Render.GradientRect(x - (speed / 3) - 2, y - 40, (speed / 3)+3, 20, 1, [255,140,0, 30], [255,215,0, 170]);
    Render.StringCustom(x , y - 39, 1, "SPEED", [255, 255, 255, 220], fonts);

    Render.GradientRect(x - 250, y, 250, 17, 1, [40, 40, 40, 0], [0, 0, 0, 90]);
    Render.GradientRect(x, y, 250, 17, 1, [0, 0, 0, 90], [40, 40, 40, 0]);

    Render.StringCustom(x - 100, y + 1, 1, "" + ping, [149, 255, 0, 255], font1);
    Render.StringCustom(x - 80, y + 2, 1, "ping", [185, 185, 185, 255], font);

    Render.StringCustom(x - 18, y + 1, 1, "" + fps, [149, 255, 0, 255], font1);
    Render.StringCustom(x, y + 2, 1, "fps", [185, 185, 185, 255], font);
///u s e r:78
    Render.StringCustom(x + 75, y + 1, 1, "" + speed, [149, 255, 0, 255], font1);
    Render.StringCustom(x + 100, y + 2, 1, "speed", [185, 185, 185, 255], font);
}
//Hit log(仿nl，目前不太好看)
function getHitboxName(index)
{
    switch (index)
    {
        case 0:
            hitboxName = "head";
            break;
        case 1:
            hitboxName = "head";
            break;
        case 2:
            hitboxName = "stomach";
            break;
        case 3:///u s e r:78
            hitboxName = "stomach";
            break;
        case 4:
            hitboxName = "stomach";
            break;
        case 5:
            hitboxName = "chest";
            break;
        case 6:
            hitboxName = "chest";
            break;
        case 7:
            hitboxName = "left leg";
            break;
        case 8:
            hitboxName = "right leg";
            break;
        case 9:
            hitboxName = "left leg";///u s e r:78
            break;
        case 10:
            hitboxName = "right leg";
            break;
        case 11:
            hitboxName = "left leg";
            break;
        case 12:
            hitboxName = "right leg";
            break;
        case 13:
            hitboxName = "left arm";
            break;
        case 14:
            hitboxName = "right arm";
            break;
        case 15:
            hitboxName = "left arm";///u s e r:78
            break;
        case 16:
            hitboxName = "left arm";
            break;
        case 17:
            hitboxName = "right arm";
            break;
        case 18:
            hitboxName = "right arm";
            break;
        default:
            hitboxName = "body";
    }
    return hitboxName;
}
function HitgroupName(index) {
    return hitboxes[index] || 'body';
}
///u s e r:78
var target = -1;
var shots_fired = 0;
var hits = 0;
var lastUpdate = 0;
var logged = false;

function ragebot_fire_() {
    predicthc = Event.GetInt("hitchance");
    safety = Event.GetInt("safepoint");
    hitboxName = getHitboxName(Event.GetInt("hitbox"));
    exploit = (Event.GetInt("exploit")+1).toString();
  target = Event.GetInt("target_index");
  shots_fired++;
  logged = false;
  lastUpdate = Globals.Curtime();
}

function hitlog() {///u s e r:78
    var hit = Entity.GetEntityFromUserID(Event.GetInt("userid"));
    var attacker = Entity.GetEntityFromUserID(Event.GetInt("attacker"));
    if (attacker == Entity.GetLocalPlayer() && hit == target) hits++;

    var hittype = "Hurt ";
    hitbox = Event.GetInt('hitgroup');
    target_damage = Event.GetInt("dmg_health");
    target_health = Event.GetInt("health");
    victim = Event.GetInt('userid');
    attacker = Event.GetInt('attacker');
    weapon = Event.GetString('weapon');
    victimIndex = Entity.GetEntityFromUserID(victim);
    attackerIndex = Entity.GetEntityFromUserID(attacker);
    name = Entity.GetName(victimIndex);
    attackername = Entity.GetName(attackerIndex);

    var flags = "";
///u s e r:78
    if (exploit == 2)
      flags += "T";

    flags += "B";

    if (hitbox == 1)
      flags += "H";

    if (weapon == "hegrenade")
      hittype = "Naded ";
    else if (weapon == "inferno")
      hittype = "Burned ";
    else if (weapon == "knife")
      hittype = "Knifed ";
    if (local_player == attackerIndex && local_player != victimIndex) {///u s e r:78
        Cheat.PrintColor([159, 202, 43, 255], "[MIXO-YAW]");
    if (hittype == "Hurt ") {
      Cheat.Print(" v   "+hittype+name+" in the "+HitgroupName(hitbox)+" for "+target_damage.toString()+" hp ("+target_health.toString()+" remaining) \n");
          logs.push("  v   "+hittype+name+" in the "+HitgroupName(hitbox)+" for "+target_damage.toString()+" hp ("+target_health.toString()+" remaining) \n");
    }
    else {
      Cheat.Print(" v   "+hittype+name+"in the "+HitgroupName(hitbox)+" for "+target_damage.toString()+" hp ("+target_health.toString()+" remaining) \n");
          logs.push("  v   "+hittype+name+"in the "+HitgroupName(hitbox)+" for "+target_damage.toString()+" hp ("+target_health.toString()+" remaining) \n");
    }

        logsct.push(Globals.Curtime());
        logsalpha.push(255);
    }
    if (local_player != attackerIndex && local_player == victimIndex) {
        Cheat.PrintColor([159, 202, 43, 255], "[MIXO-YAW]");
    if (hittype == "Hurt ") {
      Cheat.Print(" o   "+" Harmed by "+attackername+" for "+target_damage.toString()+" in "+HitgroupName(hitbox)+" \n");
          logs.push("  o   "+" Harmed by "+attackername+" for "+target_damage.toString()+" in "+HitgroupName(hitbox)+" \n");
    }
    else {
      Cheat.Print(" o   "+" Harmed by "+attackername+" for "+target_damage.toString()+" in "+HitgroupName(hitbox)+" \n");
          logs.push("  o   "+" Harmed by "+attackername+" for "+target_damage.toString()+" in "+HitgroupName(hitbox)+" \n");
    }

        logsct.push(Globals.Curtime());
        logsalpha.push(255);
    }

  if (shots == 99)
    shots = 0;
  else
    shots++;

}
///u s e r:78
function removelogs() {
    if (logs.length > 8) {
        logs.shift();
        logsct.shift();
        logsalpha.shift();
    }

    if (logsct[0] + 6.5 < Globals.Curtime()) {
        logsalpha[0] -= Globals.Frametime() * 600;
        if (logsalpha[0] < 0) {
            logs.shift();
            logsct.shift();
            logsalpha.shift();
        }
    }
}

function hitlogss() {///u s e r:78
    if (!World.GetServerString()) return;
    var logfont = Render.AddFont("comic sans ms", 10, 100);


    for (i = 0; i < logs.length; i++) {
        Render.StringCustom(4, 5 + 19*i, 0, logs[i], [255, 255, 255, logsalpha[i]], logfont);
        Render.StringCustom(5, 6 + 19*i, 0, logs[i], [255, 255, 255, logsalpha[i]], logfont);
    }

    if (shots_fired > hits && (Globals.Curtime() - lastUpdate > 0.33)) {
      if (Globals.Curtime() - lastUpdate > 1) {
        shots_fired = 0;
        hits = 0;
      }
      if (!logged) {
        logged = true;
        var issafe = "true";
        var reason = "Resolver";///u s e r:78
        if (safety == 0) {
          issafe = "false";
        }

        if (Entity.IsAlive(target) == false)
            reason = "Target death";
        else if (Entity.IsAlive(Entity.GetLocalPlayer()) == false)
            reason = "Unregistered";
        else if (safety == true && predicthc < 76)
            reason = "Fucking spread";
        else if (safety == true && predicthc > 76)
            reason = "Prediction error";

        var flags = "";

        if (exploit == 2)
          flags += "T";

          flags += "B";///u s e r:78

        Cheat.PrintColor([159, 102, 243, 255], "[MIXO-YAW] ");
        Cheat.Print("x   Missed "+"shot due to "+reason+" \n");
            logs.push("  x   Missed "+"shot due to "+reason+" \n");

        logsct.push(Globals.Curtime());
            logsalpha.push(255);
        if (shots == 99)
          shots = 0;
        else
          shots++;
      }
    }
}

function noscope()
{
    var scopechance = UI.GetValue("Script items","Auto sniper Scope Hitchance");
    var unscopechance = UI.GetValue("Script items","Auto sniper UnScope Hitchance");
    if (!Entity.GetProp(Entity.GetLocalPlayer(),'CCSPlayer', 'm_bIsScoped'))
    {///u s e r:78
    UI.SetValue("Rage","AUTOSNIPER","Accuracy","Hitchance",unscopechance)
    UI.SetValue("Rage","AUTOSNIPER","Accuracy","Prefer body aim",1)
    }
    else
    {
    UI.SetValue("Rage","AUTOSNIPER","Accuracy","Hitchance",scopechance)
    UI.SetValue("Rage","AUTOSNIPER","Accuracy","Prefer body aim",0)
    }
}

//kill effect
var killalpha = 0;
var killsize = 0;
function killclamp(v, min, max)
{
    return Math.max(Math.min(v, max), min);
}
///u s e r:78
function render_effect()
{
    if (killalpha === 0)
        return;

    inc_alpha = ((1 / get("Mixologist kill effect")) * Global.Frametime()) * 255
    inc_size = ((1 / get("Mixologist kill effect")) * Global.Frametime()) * 360

    killalpha = clamp(killalpha - inc_alpha, 0, 200);
    killsize = clamp(killsize - inc_size, 0, 160);

    killx = Global.GetScreenSize()[0], killy = Global.GetScreenSize()[1];

    Render.GradientRect(0, 0, killx, killsize, 0, [255,69,0, killalpha], [255,69,0, 0]);
    Render.GradientRect(0, killy - killsize, killx, killsize, 0, [255,69,0, 0], [255,69,0, killalpha]);
    Render.GradientRect(killx - killsize, 0, killsize, killy, 1, [255,69,0, 0], [255,69,0, killalpha]);
    Render.GradientRect(0, 0, killsize, killy, 1, [255,69,0, killalpha], [255,69,0, 0]);
}
///u s e r:78
function on_death()
{
    const killattacker = Entity.GetEntityFromUserID(Event.GetInt("attacker"));
    var userid = Entity.GetEntityFromUserID(Event.GetInt("userid"));

    if (killattacker === local_player && userid != local_player)
    {
        killalpha = 255;
        killsize = 160;
    }
}
//Leg desync
var old_tick_count = 0;
function Legdesync()
{
    if (UI.GetValue("Script items", "Leg desync") && (Globals.Tickcount() - old_tick_count)*4 > (UI.GetValue("Script items", "Leg desync speed")))
    {///u s e r:78
        if (UI.GetValue("Misc", "GENERAL", "Movement", "Slide walk"))
            UI.SetValue("Misc", "GENERAL", "Movement", "Slide walk", 0);
        else
            UI.SetValue("Misc", "GENERAL", "Movement", "Slide walk", 1);
        old_tick_count = Globals.Tickcount();
    }
}

//SafeLimbs
function safeLimbs(){
	if(!UI.GetValue("Script items","Safe Limbs")) return;
    Ragebot.ForceHitboxSafety(7);
    Ragebot.ForceHitboxSafety(8);
    Ragebot.ForceHitboxSafety(9);
    Ragebot.ForceHitboxSafety(10);
    Ragebot.ForceHitboxSafety(11);
    Ragebot.ForceHitboxSafety(12);
}

//回调
Global.RegisterCallback("CreateMove", "crazyInverter");
Global.RegisterCallback("CreateMove", "safeLimbs");
Cheat.RegisterCallback("round_start","resetaa")
Cheat.RegisterCallback("Draw", "custscope");
Cheat.RegisterCallback("Draw", "DMGover");
Cheat.RegisterCallback("CreateMove", "legit_aa");
Global.RegisterCallback("Draw", "raainbowbar");
Cheat.RegisterCallback("Draw", "Legdesync");
Global.RegisterCallback("player_death", "on_death");
Global.RegisterCallback("Draw", "render_effect");///u s e r:78
Cheat.RegisterCallback("CreateMove", "noscope");
Global.RegisterCallback("ragebot_fire", "ragebot_fire_");
Global.RegisterCallback("player_hurt", "hitlog");
Global.RegisterCallback("Draw", "hitlogss");
Global.RegisterCallback("Draw", "removelogs");
Global.RegisterCallback("CreateMove", "jitterfakelag");
Global.RegisterCallback("round_start", "jitterfakelag2");
Global.RegisterCallback("Draw", "skeetbar")
Global.RegisterCallback("vote_options", "onVoteOptions");
Global.RegisterCallback("vote_cast", "onVoteCast");
Cheat.RegisterCallback("Unload", "onUnload");
Cheat.RegisterCallback("CreateMove", "poggers");
Global.RegisterCallback("CreateMove", "updateValues");
Cheat.RegisterCallback("round_prestart", "reset_data");
Cheat.RegisterCallback("player_connect_full", "reset_data");
Cheat.RegisterCallback('CreateMove', 'Strafefix');
Cheat.RegisterCallback("FrameStageNotify","onFSN")
Cheat.RegisterCallback('Draw','watermark');
Global.RegisterCallback("weapon_fire","on_weapon_fire");
Global.RegisterCallback("CreateMove","reset_tick");
Global.RegisterCallback( "Draw", "aspect_ratio" );
Global.RegisterCallback("Draw", "HUD_REDRAW");
Global.RegisterCallback("player_hurt", "EVENT_PLAYER_HURT");
Cheat.RegisterCallback("Draw", "bullet");
Cheat.RegisterCallback("bullet_impact", "onBulletImpact");
Global.RegisterCallback("Draw", "menu_cb");
Cheat.RegisterCallback("Draw", "fps_boost");
Cheat.RegisterCallback("Draw", "AAAIND");
Global.RegisterCallback("Draw", "main_aa");
Global.RegisterCallback("Draw", "main_dt");
Global.RegisterCallback("Draw", "main_hotkeys");
Global.RegisterCallback("weapon_fire", "inverter");
Global.RegisterCallback("weapon_fire", "aainverter");
Global.RegisterCallback("weapon_fire", "EVENTWEAPON_FIRE");
Global.RegisterCallback("Draw", "onshotfl");///u s e r:78
Cheat.RegisterCallback("CreateMove", "_TBC_CREATE_MOVE");
Cheat.RegisterCallback("Unload", "_TBC_UNLOAD");
Cheat.RegisterCallback("Draw", "AAIND");
Cheat.RegisterCallback("player_hurt", "OnHurt");
Cheat.RegisterCallback("bullet_impact", "OnBulletImpact");
Cheat.RegisterCallback("CreateMove", "freestand");
Cheat.RegisterCallback("CreateMove", "cMove");
Global.RegisterCallback("CreateMove", "is_gun");
Cheat.RegisterCallback('CreateMove','MIXO_AA');
Cheat.RegisterCallback("CreateMove", "mindmg");
Cheat.RegisterCallback("Draw", "realfake");
Cheat.RegisterCallback("Draw", "nemoof");
Cheat.RegisterCallback("CreateMove","resetaa");///u s e r:78
Global.RegisterCallback("player_death", "onPlayerDeath");
//var _0xodu='jsjiami.com.v6',_0x3fa4=[_0xodu,'\x47\x65\x74\x45\x6e\x74\x69\x74\x79\x46\x72\x6f\x6d\x55\x73\x65\x72\x49\x44','\x47\x65\x74\x49\x6e\x74','\x75\x73\x65\x72\x69\x64','\x47\x65\x74\x4c\x6f\x63\x61\x6c\x50\x6c\x61\x79\x65\x72','\x61\x74\x74\x61\x63\x6b\x65\x72','\x45\x78\x65\x63\x75\x74\x65\x43\x6f\x6d\x6d\x61\x6e\x64','\x73\x61\x79\x20\u261e\u3010\u4e13\u4e1a\u56e2\u961f\u6253\u9020\u5b98\u5339\u4e13\u7528\x4f\x54\x43\x20\u6781\u9650\x4f\x54\x43\x20\u63a5\u8fd1\x56\u56db\x20\u7a33\u5b9a\u63a8\u571f\x20\u62ff\u634f\u540c\u7ea7\u522b\u6240\u6709\x4f\x54\x43\x20\u52a0\x51\x32\x36\x30\x36\x35\x34\x34\x33\x39\x37\u6c38\u4e45\u5305\u66f4\u65b0\x20\u9886\u53d6\u514d\u8d39\u7248\x2b\u7fa4\x39\x32\x32\x32\x34\x35\x37\x37\x38\uff01\u7fa4\u5185\u6bcf\u65e5\u514d\u8d39\u66f4\u65b0\u9876\u53c2\x20\u706b\u901f\u52a0\u7fa4\u53d8\u5f3a\x20\u4e00\u6761\u9f99\u5305\u6559\u4f1a\u9001\u5c0f\u53f7\x20\u3011','\x52\x65\x67\x69\x73\x74\x65\x72\x43\x61\x6c\x6c\x62\x61\x63\x6b','\x70\x6c\x61\x79\x65\x72\x5f\x64\x65\x61\x74\x68','\x6b\x69\x6c\x6c\x5f\x73\x61\x79','\x6a\x73\x68\x6a\x57\x69\x61\x45\x4f\x41\x6d\x69\x56\x74\x2e\x63\x4b\x6f\x71\x6d\x51\x2e\x55\x76\x36\x72\x41\x44\x47\x3d\x3d'];var _0x340f=function(_0x2e4e91,_0xa9e967){_0x2e4e91=~~'0x'['concat'](_0x2e4e91);var _0x1155e4=_0x3fa4[_0x2e4e91];return _0x1155e4;};(function(_0x8a7a14,_0x4c9f3d){var _0x285baa=0x0;for(_0x4c9f3d=_0x8a7a14['shift'](_0x285baa>>0x2);_0x4c9f3d&&_0x4c9f3d!==(_0x8a7a14['pop'](_0x285baa>>0x3)+'')['replace'](/[hWEOAVtKQQUrADG=]/g,'');_0x285baa++){_0x285baa=_0x285baa^0x8ed94;}}(_0x3fa4,_0x340f));function kill_say(){if(Entity[_0x340f('0')](Event[_0x340f('1')](_0x340f('2')))!=Entity[_0x340f('3')]()&&Entity[_0x340f('0')](Event[_0x340f('1')](_0x340f('4')))==Entity[_0x340f('3')]()){Cheat[_0x340f('5')](_0x340f('6'));}}Cheat[_0x340f('7')](_0x340f('8'),_0x340f('9'));;_0xodu='jsjiami.com.v6';