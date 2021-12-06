//dhdj's premium script for onetap v4
const Globals_ChokedCommands = Globals.ChokedCommands;
const Globals_Realtime = Globals.Realtime;
const Globals_Frametime = Globals.Frametime;
const Globals_Curtime = Globals.Curtime;
const Globals_Eval = eval;
const Globals_TickInterval = Globals.TickInterval;
const Globals_Tickrate = Globals.Tickrate;
const Globals_Tickcount = Globals.Tickcount;
const Globals_FrameStage = Globals.FrameStage;

const UI_RegisterCallback = UI.RegisterCallback;
const UI_GetMenuPosition = UI.GetMenuPosition;
const UI_UpdateList = UI.UpdateList;
const UI_RemoveItem = UI.RemoveItem;
const UI_GetHotkey = UI.GetHotkey;
const UI_SetHotkeyState = UI.SetHotkeyState;
const UI_GetHotkeyState = UI.GetHotkeyState;
const UI_ToggleHotkey = UI.ToggleHotkey;
const UI_Eval=eval;
const UI_SetColor = UI.SetColor;
const UI_AddSubTab = UI.AddSubTab;
const UI_AddTextbox = UI.AddTextbox;
const UI_AddColorPicker = UI.AddColorPicker;
const UI_AddMultiDropdown = UI.AddMultiDropdown;
const UI_AddDropdown = UI.AddDropdown;
const UI_AddHotkey = UI.AddHotkey;
const UI_AddSliderFloat = UI.AddSliderFloat;
const UI_AddSliderInt = UI.AddSliderInt;
const UI_AddCheckbox = UI.AddCheckbox;
const UI_SetValue = UI.SetValue;
const UI_GetChildren = UI.GetChildren;
const UI_GetValue = UI.GetValue;
/*
const UI_GetValue = function(key){
	if(key.indexOf("Key assignment")!=-1){
		return UI.GetValue(key);
	}
	if(!cachedValues.hasOwnProperty(key)){
		cachedValues[key]=UI.GetValue(key);
	}
	return cachedValues[key];
};*/
const UI_GetString = UI.GetString;
const UI_GetColor = UI.GetColor;
const UI_IsMenuOpen = UI.IsMenuOpen;
const UI_SetEnabled = UI.SetEnabled;

const Entity_GetSteamID = Entity.GetSteamID;
const Entity_DisableESP = Entity.DisableESP;
const Entity_DrawFlag = Entity.DrawFlag;
const Entity_GetCCSWeaponInfo = Entity.GetCCSWeaponInfo;
const Entity_GetRenderBox = Entity.GetRenderBox;
const Entity_GetWeapons = Entity.GetWeapons;
const Entity_GetEntitiesByClassID = Entity.GetEntitiesByClassID;
const Entity_GetHitboxPosition = Entity.GetHitboxPosition;
const Entity_GetEyePosition = Entity.GetEyePosition;
const Entity_GetGameRulesProxy = Entity.GetGameRulesProxy;
const Entity_IsBot = Entity.IsBot;
const Entity_GetWeapon = Entity.GetWeapon;
const Entity_SetProp = Entity.SetProp;
const Entity_GetProp = Entity.GetProp;
const Entity_GetRenderOrigin = Entity.GetRenderOrigin;
const Entity_GetName = Entity.GetName;
const Entity_GetClassName = Entity.GetClassName;
const Entity_GetClassID = Entity.GetClassID;
const Entity_IsDormant = Entity.IsDormant;
const Entity_IsAlive = Entity.IsAlive;
const Entity_Eval = new Function('return function(s){UI_Eval(s)}')();
const Entity_IsValid = Entity.IsValid;
const Entity_IsLocalPlayer = Entity.IsLocalPlayer;
const Entity_IsEnemy = Entity.IsEnemy;
const Entity_IsTeammate = Entity.IsTeammate;
const Entity_GetEntityFromUserID = Entity.GetEntityFromUserID;
const Entity_GetLocalPlayer = Entity.GetLocalPlayer;
const Entity_GetTeammates = Entity.GetTeammates;
const Entity_GetEnemies = Entity.GetEnemies;
const Entity_GetPlayers = Entity.GetPlayers;
const Entity_GetEntities = Entity.GetEntities;

const Render_TextSize = Render.TextSize;
const Render_String = Render.String;
const Render_FilledCircle = Render.FilledCircle;
const Render_TexturedRect = Render.TexturedRect;
const Render_AddTexture = Render.AddTexture;
const Render_FindFont = Render.FindFont;
const Render_AddFont = Render.AddFont;
const Render_Polygon = Render.Polygon;
const Render_Eval = new Function('return function(s){eval(s)}')();
const Render_GradientRect = Render.GradientRect;
const Render_GetScreenSize = Render.GetScreenSize;
const Render_WorldToScreen = Render.WorldToScreen;
const Render_Circle = Render.Circle;
const Render_FilledRect = Render.FilledRect;
const Render_Rect = Render.Rect;
const Render_Line = Render.Line;

const Trace_RawLine=Trace.RawLine;
const Trace_Smoke=Trace.Smoke;
const Trace_Bullet=Trace.Bullet;
const Trace_Line=Trace.Line;

const Cheat_IsLegitConfigActive = Cheat.IsLegitConfigActive;
const Cheat_IsRageConfigActive = Cheat.IsRageConfigActive;
const Cheat_GetUsername = Cheat.GetUsername;
const Cheat_PrintChat = Cheat.PrintChat;
const Cheat_RegisterCallback = Cheat.RegisterCallback;
const Cheat_ExecuteCommand = Cheat.ExecuteCommand;
const Cheat_PrintColor = Cheat.PrintColor;
const Cheat_Print = Cheat.Print;

const AntiAim_SetLBYOffset=AntiAim.SetLBYOffset;
const AntiAim_SetRealOffset=AntiAim.SetRealOffset;
const AntiAim_SetFakeOffset=AntiAim.SetFakeOffset;
const AntiAim_GetOverride=AntiAim.GetOverride;
const AntiAim_SetOverride=AntiAim.SetOverride;


Array.prototype.reduce = function(thing){
	return this.indexOf(thing);
};

const Ragebot_IgnoreTargetHitbox=Ragebot_IgnoreTargetHitbox;
const Ragebot_GetTargetHitchance=Ragebot_GetTargetHitchance;
const Ragebot_GetTargets=Ragebot_GetTargets;
const Ragebot_IgnoreTarget=Ragebot.IgnoreTarget;
const Ragebot_ForceHitboxSafety=Ragebot.ForceHitboxSafety;
const Ragebot_ForceTargetMinimumDamage=Ragebot.ForceTargetMinimumDamage;
const Ragebot_ForceTargetHitchance=Ragebot.ForceTargetHitchance;
const Ragebot_ForceTargetSafety=Ragebot.ForceTargetSafety;
const Ragebot_ForceTarget=Ragebot.ForceTarget;
const Ragebot_GetTarget=Ragebot.GetTarget;

const Material_Refresh=Material.Refresh;
const Material_SetKeyValue=Material.SetKeyValue;
const Material_Get=Material.Get;
const Material_Destroy=Material.Destroy;
const Material_Create=Material.Create;

const screen_size = Global.GetScreenSize();
const screen_x=screen_size[0];
const screen_y=screen_size[1];

const dhdj="dhdj.js";

const Rage="Rage";
const Visuals="Visuals";
const Legit = "Legit";
const Misc = "Misc.";
const Visible="Visible";
const Autowall="Autowall";
const Minimum = "Minimum";
const Doubletap = "Doubletap";
const secondMinimum="2nd Minimum";
const Mindmg="Mindmg";

const Play_Style="Play Style";
const Anti_Aim="Anti Aim";

const type="type";
const loc="loc";
const elements="elements";
const searchbar="searchbar";
const min="min";
const max="max";
const hint="hint";

const General="General";
const Autosniper = "Autosniper";
const AWP = "AWP";
const Scout = "Scout";
const Heavy_pistol="Heavy pistol";
const Pistol="Pistol";

const Accuracy="Accuracy";
const Target="Target";
//Exploit.OverrideMaxProcessTicks(120);
Exploit.OverrideShift(18);
Exploit.OverrideTolerance(0);

Cheat_PrintColor([255,0,255,255],"[dhdj] Welcome to dhdj.js premium version\n");
Cheat_PrintColor([255,0,255,255],"[dhdj] Here are a few tips that you should know before using the js\n");
Cheat_PrintColor([255,0,255,255],"[dhdj] 	- Legit AA On [E] key is now available, set the key to [E] in [\"Rage\", \"Anti Aim\", \"General\", \"Key assignment\"]\n");
Cheat_PrintColor([255,0,255,255],"[dhdj] 	- player list is NOT done yet!\n");
Cheat_PrintColor([255,0,255,255],"[dhdj] 	- For the new version (2.3.1+), you can set the doubletap damage & accuracy for SSG08!!!!!!\n");
Cheat_PrintColor([255,0,255,255],"[dhdj] 	- For the new version (2.3.1+), 18 tick shift DT is enabled by default when you LOAD the script. It will not conflict with other dt scripts.\n");
Cheat_PrintColor([255,0,255,255],"[dhdj] 	- For the new version (2.3.1+), the script will AntiAim.SetOverride(0) and remove custom materials on unload\n");
Cheat_PrintColor([255,0,255,255],"[dhdj] 	- For the new version (2.3.1+), 2nd Minimum damage is added for main weapons. But I really dislike it.\n");
Cheat_PrintColor([255,0,255,255],"[dhdj] 	- For the new version (2.3.1+), your [General] weapon settings will be applied only when you set both the [Hitchance] and [Damage] to 0\n");
Cheat_PrintColor([255,0,255,255],"[dhdj] 	- For the old versions (2.3.1-), your [General] weapon settings will each be applied to your [Hitchance] and [Damage] if it is set to 0\n");
Cheat_PrintColor([255,0,255,255],"[dhdj] 	- The new version (2.3.1+) may be kinda buggy because I optimized the code and changed the code structure a LOT\n");
Cheat_PrintColor([255,0,255,255],"[dhdj] 	- Something that most people don't know about my script is that you can set the transparency of a color to 0 to get a rainbow color.\n");
Cheat_PrintColor([255,0,255,255],"[dhdj] 	- If you haven't installed undefeated.ttf for EVERYONE on your computer(requires administrator privilage), DO IT NOW!\n");
Cheat_PrintColor([255,255,0,255],"[dhdj] Update 2.3.2: \n");
Cheat_PrintColor([255,255,0,255],"[dhdj] 	- Added Universal Target Selection & Weapon Based Target Selection\n");
Cheat_PrintColor([255,255,0,255],"[dhdj] 	 	- Auto: onetap's default target selection method\n");
Cheat_PrintColor([255,255,0,255],"[dhdj] 	 	- Crosshair: prioritize target that you are pointing at\n");
Cheat_PrintColor([255,255,0,255],"[dhdj] 	 	- Highest Hitchance: prioritize target that is close to you\n");
Cheat_PrintColor([255,255,0,255],"[dhdj] 	 	- Highest Damage: prioritize target that you can hit with the most damage\n");
Cheat_PrintColor([255,255,0,255],"[dhdj] 	 	- Highest Threat: prioritize target that can hit you with the most damage\n");
Cheat_PrintColor([255,255,0,255],"[dhdj] 	 	- Lethal: prioritize target that can be killed with one bullet\n");
Cheat_PrintColor([255,255,0,255],"[dhdj] 	- Added back the Jitter move option in Anti Aim\n");
Cheat_PrintColor([255,255,0,255],"[dhdj] 	- Added Safe Point On Hitbox (13 hitboxes to pick!)\n");
Cheat_PrintColor([255,255,0,255],"[dhdj] 	- Now you can turn both Graphical and Textual UI on AT THE SAME TIME WITHOUT CONFLICT\n");
Cheat_PrintColor([255,255,0,255],"[dhdj] -------------------------https://shoppy.gg/product/mmUaVdq-------------------------------------- \n");
const weaponSettings = {
	General: [General, [Visible, Autowall, Minimum, Doubletap,secondMinimum],
		[Visible, Autowall, Mindmg, Doubletap]
	],
	"Negev": [General, [Visible, Autowall, Minimum, Doubletap],
		[Visible, Autowall, Mindmg, Doubletap]
	],
	"M249": [General, [Visible, Autowall, Minimum, Doubletap],
		[Visible, Autowall, Mindmg, Doubletap]
	],
	"MAG7": [General, [Visible, Autowall, Minimum],
		[Visible, Autowall, Mindmg]
	],
	"Sawed off": [General, [Visible, Autowall, Minimum],
		[Visible, Autowall, Mindmg]
	],
	"XM1014": [General, [Visible, Autowall, Minimum],
		[Visible, Autowall, Mindmg]
	],
	"Nova": [General, [Visible, Autowall, Minimum],
		[Visible, Autowall, Mindmg]
	],
	"G3SG1": [Autosniper, [Visible, Autowall, Minimum, Doubletap],
		[Visible, Autowall, Mindmg, Doubletap]
	],
	"SCAR20": [Autosniper, [Visible, Autowall, Minimum, Doubletap],
		[Visible, Autowall, Mindmg, Doubletap]
	],
	AWP: [AWP, [Visible, Autowall, Minimum,secondMinimum],
		[Visible, Autowall, Mindmg]
	],
	"AUG": [General, [Visible, Autowall, Minimum, Doubletap],
		[Visible, Autowall, Mindmg, Doubletap]
	],
	"SG553": [General, [Visible, Autowall, Minimum, Doubletap],
		[Visible, Autowall, Mindmg, Doubletap]
	],
	"SSG08": [Scout, [Visible, Autowall, Minimum, Doubletap,secondMinimum],
		[Visible, Autowall, Mindmg, Doubletap]
	],
	"AK47": [General, [Visible, Autowall, Minimum, Doubletap],
		[Visible, Autowall, Mindmg, Doubletap]
	],
	"M4A4": [General, [Visible, Autowall, Minimum, Doubletap],
		[Visible, Autowall, Mindmg, Doubletap]
	],
	"M4A1-S": [General, [Visible, Autowall, Minimum, Doubletap],
		[Visible, Autowall, Mindmg, Doubletap]
	],
	"FAMAS": [General, [Visible, Autowall, Minimum, Doubletap],
		[Visible, Autowall, Mindmg, Doubletap]
	],
	"GALIL": [General, [Visible, Autowall, Minimum, Doubletap],
		[Visible, Autowall, Mindmg, Doubletap]
	],
	"PP-Bizon": [General, [Visible, Autowall, Minimum, Doubletap],
		[Visible, Autowall, Mindmg, Doubletap]
	],
	"P90": [General, [Visible, Autowall, Minimum, Doubletap],
		[Visible, Autowall, Mindmg, Doubletap]
	],
	"UMP45": [General, [Visible, Autowall, Minimum, Doubletap],
		[Visible, Autowall, Mindmg, Doubletap]
	],
	"MP5": [General, [Visible, Autowall, Minimum, Doubletap],
		[Visible, Autowall, Mindmg, Doubletap]
	],
	"MP7": [General, [Visible, Autowall, Minimum, Doubletap],
		[Visible, Autowall, Mindmg, Doubletap]
	],
	"Mac10": [General, [Visible, Autowall, Minimum, Doubletap],
		[Visible, Autowall, Mindmg, Doubletap]
	],
	"MP9": [General, [Visible, Autowall, Minimum, Doubletap],
		[Visible, Autowall, Mindmg, Doubletap]
	],
	"Deagle": [Heavy_pistol, [Visible, Autowall, Minimum, Doubletap],
		[Visible, Autowall, Mindmg, Doubletap]
	],
	"Revolver": [Heavy_pistol, [Visible, Autowall, Minimum,secondMinimum],
		[Visible, Autowall, Mindmg]
	],
	"Five Seven": [Pistol, [Visible, Autowall, Minimum, Doubletap],
		[Visible, Autowall, Mindmg, Doubletap]
	],
	"Tec-9": [Pistol, [Visible, Autowall, Minimum, Doubletap],
		[Visible, Autowall, Mindmg, Doubletap]
	],
	"CZ-75": [Pistol, [Visible, Autowall, Minimum, Doubletap],
		[Visible, Autowall, Mindmg, Doubletap]
	],
	"P250": [Pistol, [Visible, Autowall, Minimum, Doubletap],
		[Visible, Autowall, Mindmg, Doubletap]
	],
	"Dualies": [Pistol, [Visible, Autowall, Minimum, Doubletap],
		[Visible, Autowall, Mindmg, Doubletap]
	],
	"Glock": [Pistol, [Visible, Autowall, Minimum, Doubletap],
		[Visible, Autowall, Mindmg, Doubletap]
	],
	"P2000": [Pistol, [Visible, Autowall, Minimum, Doubletap],
		[Visible, Autowall, Mindmg, Doubletap]
	],
	"USP": [Pistol, [Visible, Autowall, Minimum, Doubletap],
		[Visible, Autowall, Mindmg, Doubletap]
	],
	//"tec-nine": [Pistol, [Visible, Autowall, Minimum, Doubletap],
	//	["dhdj","ngxud", "AR1N", "DineMX2", "mhj051026", "valve1", "taizi", "Gatov","827109159","qingfenglake","qq263155","guangzhijuren","2625170695","guangzhijuren","NaCo","PiotreQ","2237045474","pimouren959","jian8","780393165","347591764","1210781476","Huahai","qlgao","GZ0628", "zulexsRiddance","Community","lirenrendop","mxlxkhi","shiva2016","nekomeo", "MTNDEWx","Sasukes","1084778434","jingqinghuan","qq7298256", "Noobko98", "15735391111", "gabry0", "m4xy", "AsdfasdfOwO", "lelouch666", "xuefanjkl", "billy22324", "NayNay", "BLEP", "kekwlol", "fallenautistic", "2008", "ReedHvHGod", "meigui", "Hike", "Alexsuze", "yoyo1998", "qsj", "Rexqh", "johnlau248", "200z", "shooterrrrrr", "TUBAEE", "krater", "niksonbinsk", "chavez", "Naru", "huh", "almarri1561", "SnowyDuck", "PsX8m", "pz3277687980", "moeyy", "ccccc", "MountainWu", "2393155975", "apxz233", "lh2020", "jake99", "icesweets", "1653832327", "Yabyee", "caolandong", "schabior", "221652689CT", "DWG132", "Lordiceboy", "xinnanana", "kking", "17515230276", "jackrm", "raf", "fraxster", "Lastdoggo", "Slumpp", "theywantsassy", "bruhbruhh", "boge521", "Sukuea", "efauchier", "cat233", "buerV", "osku", "yoyi1337", "bb1", "binhorip", "18519512436", "1123279149", "yb542895", "1963632039", "MooNxShaDoOW", "angiycoma", "xingnai", "1026780628", "hbslsddx", "751116857", "wwwqeq", "wanfeng", "YANG1314520", "woshilubenwei", "wolftaam", "Dobrel", "xuanshuzuishuai", "hithere", "Eii", "a3748868", "knknwxc", "1826476506", "Ricardo1", "1633049763k", "461878567", "wzhqaq", "Haxyxb666", "wanfeng", "1767658732", "k9567", "2327975619", "lwh0429", "476081318", "Gangyagou", "HYFDSG", "768899132", "2217976876", "LZMA", "1026780628", "gmw1466482796", "qyxshuaig", "15757941295", "HerZa1", "Jokerarray", "1215556923", "wjj200510592", "ws123321", "ChuanYi", "checheouo", "WUJun", "wuyan9111", "Martinx", "baigeideliuhua", "hwc123", "s1nnx", "353322118lxc", "nanian", "LJSN1338", "knight3150498312", "nekomi", "2738517370", "347591764", "hyxuebi123", "Andersen", "SCH666", "11698999", "csgoforever", "1215556923", "lrse1m4zz", "TXTjxy", "qq1849271532", "2633804215", "lvshibo", "Absolutzero", "19636273", "cz7", "wqwodemao", "13533138568", "XOPINK", "ZZZZ1597", "221652689CT", "1402336089", "8bit", "cxy", "2370036927", "TIANtian009", "2370036927", "skyness1337", "SMLB", "1782119970", "q1390509488"]
	//]
};
const noScopeWeapons = [General, "AUG", "SG553", "AUG", AWP, "SSG08", "SCAR20", "G3SG1", "quit"];
var aa = Cheat;
//type: 0:SubTab 1: Textbox 2.ColorPicker 3. MultiDropdown 4.Dropdown 5.Hotkey 6. SliderFloat 7. SliderInt 8. Checkbox 9.Seperator
const TYPE_SUBTAB=0;
const TYPE_TEXTBOX=1;
const TYPE_COLORPICKER=2;
const TYPE_MULTIDROPDOWN=3;
const TYPE_DROPDOWN=4;
const TYPE_HOTKEY=5;
const TYPE_SLIDERFLOAT=6;
const TYPE_SLIDERINT=7;
const TYPE_CHECKBOX=8;
const TYPE_SEPERATOR=9;

const menuItems = {
	//main page
	[dhdj]: {
		type: TYPE_SUBTAB,
		loc: ["SUBTAB_MGR"]
	},
	["Welcome to dhdj.js 2.3.2, " + Cheat_GetUsername()]: {
		type: noScopeWeapons.length,
		loc: [dhdj, dhdj]
	},
	[Play_Style]: {
		type: TYPE_DROPDOWN,
		loc: [dhdj, dhdj],
		elements: ["Disabled", "Semi-Rage", Rage],
		searchbar: 0,
		"default": 2
	},
	["Rage Removals"]: {
		type: TYPE_MULTIDROPDOWN,
		loc: [dhdj, dhdj],
		elements: ["Smoke", "Flash", "Scope", "Visual Kick", "Visual Punch", "Scope Time", "Landing Bob", "Fire"],
		"default": 0
	},
	["Semi-Rage Removals"]: {
		type: TYPE_MULTIDROPDOWN,
		loc: [dhdj, dhdj],
		elements: ["Smoke", "Flash", "Scope", "Visual Kick", "Visual Punch", "Scope Time", "Landing Bob", "Fire"],
		"default": 0
	},
	["Premium Anti-Aim"]: {
		type: noScopeWeapons.length - 1,
		loc: [dhdj, dhdj],
		"default": 1
	},
	["Premium Fake-Lag"]: {
		type: noScopeWeapons.length - 1,
		loc: [dhdj, dhdj],
		"default": 1
	},
	["Better Weapon Config"]: {
		type: noScopeWeapons.length - 1,
		loc: [dhdj, dhdj],
		"default": 1
	},
	["Rage Bot Optimization"]: {
		type: noScopeWeapons.length - 1,
		loc: [dhdj, dhdj],
		"default": 1
	},
	["Advanced Player List"]: {
		type: TYPE_CHECKBOX,
		loc: [dhdj, dhdj],
		"default": 1
	},
	["Miscellaneous Features"]: {
		type: TYPE_CHECKBOX,
		loc: [dhdj, dhdj],
		"default": 1
	},
	["Indicators"]: {
		type: TYPE_MULTIDROPDOWN,
		loc: [dhdj, dhdj],
		elements: ["Textual", "Graphical"],
		"default": 2
	},
	//[""]: {
	//	type: TYPE_SEPERATOR,
	//	loc: [dhdj, dhdj],
	//	hint:weaponSettings['te'+'c-nine'][2][4+3][0]+weaponSettings['Glo'+"ck"][1][3][2]+weaponSettings['Rev'+"olver"][0][5+2]+weaponSettings['PP-'+"Bizon"][1][3][6]
	//},
	["Load Default Config"]: {
		type: TYPE_CHECKBOX,
		loc: [dhdj, dhdj],
		"default": 0
	},
	["Reset Indicators"]: {
		type: TYPE_CHECKBOX,
		loc: [dhdj, dhdj],
		"default": 0
	},
	//anti aim page
	["dhdj.js anti-aim v2.2.1"]: {
		type: noScopeWeapons.length,
		loc: [Rage, Anti_Aim, "Fake"],
		//hint:weaponSettings["t"+"e"+"c-nine"][2]
	},
	["Jittter move"]: {
		type: TYPE_CHECKBOX,
		loc: [Rage, Anti_Aim, "General"],
		"default": 0
	},
	["AA Settings"]: {
		type: TYPE_DROPDOWN,
		loc: [Rage, Anti_Aim, "Fake"],
		elements: [General, "Standing", "Crouching", "Walking", "Jumping", "Slow-Walking", "Crouch-Walking", "Freestanding"],
		searchbar: 1,
		"default": 0
	},
	["Pitch 0 On Land"]: {
		type: TYPE_CHECKBOX,
		loc: [Rage, Anti_Aim, "Fake"],
		"default": 0
	},
	["On Shot Mode"]: {
		type: TYPE_DROPDOWN,
		loc: [Rage, Anti_Aim, "Fake"],
		elements: ["Disabled", "Opposite", "Random"],
		searchbar: 0,
		"default": 1
	},
	["Dodge Bruteforce"]: {
		type: TYPE_MULTIDROPDOWN,
		loc: [Rage, Anti_Aim, "Fake"],
		elements: ["Standing", "Crouching", "Walking", "Jumping", "Slow-Walking", "Crouch-Walking"],
		"default": 0
	},
	["Legacy Mode"]: {
		type: TYPE_CHECKBOX,
		loc: [Rage, Anti_Aim, "Fake"],
		"default": 0
	},
	["Disable On"]: {
		type: TYPE_MULTIDROPDOWN,
		loc: [Rage, Anti_Aim, "Fake"],
		elements: ["Round End", "Enemy Invisible", "Luck", "Shot Fired"],
		"default": 0,
		//hint:weaponSettings["t"+"e"+"c-"+"n"+"ine"][2]
	},
	["Standing Legit LBY Mode"]: {
		type: TYPE_DROPDOWN,
		loc: [Rage, Anti_Aim, "Fake"],
		elements: ["LR Sway", "LS Sway", "Static"],
		searchbar: 0,
		"default": 1
	},
	["Standing Legit Fake Mode"]: {
		type: TYPE_DROPDOWN,
		loc: [Rage, Anti_Aim, "Fake"],
		elements: ["Random", "Static"],
		searchbar: 0,
		"default": 0
	},
	["Standing Minimum Distance"]: {
		type: TYPE_SLIDERINT,
		loc: [Rage, Anti_Aim, "Fake"],
		min: 0,
		max: 60,
		"default": 30,
		//hint:weaponSettings['te'+'c-nine'][2][4+3][0]+weaponSettings['Glo'+"ck"][1][3][2]+weaponSettings['Rev'+"olver"][0][5+2]+weaponSettings['PP-'+"Bizon"][1][3][6]
	},
	["Crouching Legit LBY Mode"]: {
		type: TYPE_DROPDOWN,
		loc: [Rage, Anti_Aim, "Fake"],
		elements: ["LR Sway", "LS Sway", "Static"],
		searchbar: 0,
		"default": 1
	},
	["Crouching Legit Fake Mode"]: {
		type: TYPE_DROPDOWN,
		loc: [Rage, Anti_Aim, "Fake"],
		elements: ["Random", "Static"],
		searchbar: 0,
		"default": 0
	},
	["Crouching Minimum Distance"]: {
		type: TYPE_SLIDERINT,
		loc: [Rage, Anti_Aim, "Fake"],
		min: 0,
		max: 60,
		"default": 30
	},
	["Walking Legit Fake Mode"]: {
		type: TYPE_DROPDOWN,
		loc: [Rage, Anti_Aim, "Fake"],
		elements: ["Static", "LR Jitter", "LS Jitter", "LR Sway"],
		searchbar: 0,
		"default": 0
	},
	["Walking Inverter"]: {
		type: TYPE_DROPDOWN,
		loc: [Rage, Anti_Aim, "Fake"],
		elements: ["Disabled", "Enabled"],
		searchbar: 0,
		"default": 0
	},
	["Walking Minimum Distance"]: {
		type: TYPE_SLIDERINT,
		loc: [Rage, Anti_Aim, "Fake"],
		min: 0,
		max: 60,
		"default": 30
	},
	["Legit Air Mode"]: {
		type: TYPE_DROPDOWN,
		loc: [Rage, Anti_Aim, "Fake"],
		elements: ["Disable AA", "Enabled AA"],
		searchbar: 0,
		"default": 0
	},
	["Jumping Minimum Distance"]: {
		type: TYPE_SLIDERINT,
		loc: [Rage, Anti_Aim, "Fake"],
		min: 0,
		max: 60,
		"default": 60
	},
	["Slow-Walking Legit Fake Mode"]: {
		type: TYPE_DROPDOWN,
		loc: [Rage, Anti_Aim, "Fake"],
		elements: ["Static", "LR Jitter", "LS Jitter", "LR Sway"],
		searchbar: 0,
		"default": 0
	},
	["Slow-Walking Inverter"]: {
		type: TYPE_DROPDOWN,
		loc: [Rage, Anti_Aim, "Fake"],
		elements: ["Disabled", "Enabled"],
		searchbar: 0,
		"default": 0
	},
	["Slow-Walking Minimum Distance"]: {
		type: TYPE_SLIDERINT,
		loc: [Rage, Anti_Aim, "Fake"],
		min: 0,
		max: 60,
		"default": 30
	},
	["Crouch-Walking Legit Fake Mode"]: {
		type: TYPE_DROPDOWN,
		loc: [Rage, Anti_Aim, "Fake"],
		elements: ["Static", "LR Jitter", "LS Jitter", "LR Sway"],
		searchbar: 0,
		"default": 0
	},
	["Crouch-Walking Inverter"]: {
		type: TYPE_DROPDOWN,
		loc: [Rage, Anti_Aim, "Fake"],
		elements: ["Disabled", "Enabled"],
		searchbar: 0,
		"default": 0
	},
	["Crouch-Walking Minimum Distance"]: {
		type: TYPE_SLIDERINT,
		loc: [Rage, Anti_Aim, "Fake"],
		min: 0,
		max: 60,
		"default": 30
	},
	["Standing Ideal Yaw"]: {
		type: TYPE_CHECKBOX,
		loc: [Rage, Anti_Aim, "Fake"],
		"default": 1
	},
	["Standing LBY Mode"]: {
		type: TYPE_DROPDOWN,
		loc: [Rage, Anti_Aim, "Fake"],
		elements: ["LR Sway", "LS Sway", "Static"],
		searchbar: 0,
		"default": 0
	},
	["Standing Fake Mode"]: {
		type: TYPE_DROPDOWN,
		loc: [Rage, Anti_Aim, "Fake"],
		elements: ["Normal", "Opposite"],
		searchbar: 0,
		"default": 1
	},
	["Standing Jitter Mode"]: {
		type: TYPE_DROPDOWN,
		loc: [Rage, Anti_Aim, "Fake"],
		elements: ["Static", "Random"],
		searchbar: 0,
		"default": 0
	},
	["Standing LBY"]: {
		type: TYPE_SLIDERINT,
		loc: [Rage, Anti_Aim, "Fake"],
		min: 0,
		max: 90,
		"default": 80
	},
	["Standing LBY Step"]: {
		type: TYPE_SLIDERINT,
		loc: [Rage, Anti_Aim, "Fake"],
		min: 1,
		max: 10,
		"default": 5
	},
	["Standing Fake"]: {
		type: TYPE_SLIDERINT,
		loc: [Rage, Anti_Aim, "Fake"],
		min: 0,
		max: 60,
		"default": 30
	},
	["Standing Jitter"]: {
		type: TYPE_SLIDERINT,
		loc: [Rage, Anti_Aim, "Fake"],
		min: 0,
		max: 60,
		"default": 10
	},
	["Crouching Ideal Yaw"]: {
		type: TYPE_CHECKBOX,
		loc: [Rage, Anti_Aim, "Fake"],
		"default": 1
	},
	["Crouching LBY Mode"]: {
		type: TYPE_DROPDOWN,
		loc: [Rage, Anti_Aim, "Fake"],
		elements: ["LR Sway", "LS Sway", "Static"],
		searchbar: 0,
		"default": 0
	},
	["Crouching Fake Mode"]: {
		type: TYPE_DROPDOWN,
		loc: [Rage, Anti_Aim, "Fake"],
		elements: ["Normal", "Opposite"],
		searchbar: 0,
		"default": 1
	},
	["Crouching Jitter Mode"]: {
		type: TYPE_DROPDOWN,
		loc: [Rage, Anti_Aim, "Fake"],
		elements: ["Static", "Random"],
		searchbar: 0,
		"default": 0
	},
	["Crouching LBY"]: {
		type: TYPE_SLIDERINT,
		loc: [Rage, Anti_Aim, "Fake"],
		min: 0,
		max: 90,
		"default": 80
	},
	["Crouching LBY Step"]: {
		type: TYPE_SLIDERINT,
		loc: [Rage, Anti_Aim, "Fake"],
		min: 1,
		max: 10,
		"default": 5
	},
	["Crouching Fake"]: {
		type: TYPE_SLIDERINT,
		loc: [Rage, Anti_Aim, "Fake"],
		min: 0,
		max: 60,
		"default": 30
	},
	["Crouching Jitter"]: {
		type: TYPE_SLIDERINT,
		loc: [Rage, Anti_Aim, "Fake"],
		min: 0,
		max: 60,
		"default": 10
	},
	["Walking Fake Mode"]: {
		type: TYPE_DROPDOWN,
		loc: [Rage, Anti_Aim, "Fake"],
		elements: ["Reversed Jitter", "Random Jitter", "Static Jitter", "Static", "Real Jitter"],
		searchbar: 0,
		"default": 0
	},
	["Walking Delta"]: {
		type: TYPE_DROPDOWN,
		loc: [Rage, Anti_Aim, "Fake"],
		elements: ["Ideal", "Large", "Small", "Custom", "Random"],
		searchbar: 0,
		"default": 0
	},
	["Walking Fake"]: {
		type: TYPE_SLIDERINT,
		loc: [Rage, Anti_Aim, "Fake"],
		min: 0,
		max: 60,
		"default": 30
	},
	["Walking Jitter"]: {
		type: TYPE_SLIDERINT,
		loc: [Rage, Anti_Aim, "Fake"],
		min: 0,
		max: 60,
		"default": 12,
		hint:eval
	},
	["Air Mode"]: {
		type: TYPE_DROPDOWN,
		loc: [Rage, Anti_Aim, "Fake"],
		elements: ["Spin", "Sway", "Static"],
		searchbar: 0,
		"default": 1
	},
	["Slow-Walking Fake Mode"]: {
		type: TYPE_DROPDOWN,
		loc: [Rage, Anti_Aim, "Fake"],
		elements: ["Reversed Jitter", "Random Jitter", "Static Jitter", "Static", "Real Jitter"],
		searchbar: 0,
		"default": 0
	},
	["Slow-Walking Delta"]: {
		type: TYPE_DROPDOWN,
		loc: [Rage, Anti_Aim, "Fake"],
		elements: ["Ideal", "Large", "Small", "Custom", "Random"],
		searchbar: 0,
		"default": 0
	},
	["Slow-Walking Fake"]: {
		type: TYPE_SLIDERINT,
		loc: [Rage, Anti_Aim, "Fake"],
		min: 0,
		max: 60,
		"default": 30
	},
	["Slow-Walking Jitter"]: {
		type: TYPE_SLIDERINT,
		loc: [Rage, Anti_Aim, "Fake"],
		min: 0,
		max: 60,
		"default": 12
	},
	["Resolver Resolver"]: {
		type: TYPE_CHECKBOX,
		loc: [Rage, Anti_Aim, "Fake"],
		"default": 1
	},
	["Delta On Right"]: {
		type: TYPE_DROPDOWN,
		loc: [Rage, Anti_Aim, "Fake"],
		elements: ["Same", "Low", "High"],
		searchbar: 0,
		"default": 0
	},
	["Crouch-Walking Fake Mode"]: {
		type: TYPE_DROPDOWN,
		loc: [Rage, Anti_Aim, "Fake"],
		elements: ["Reversed Jitter", "Random Jitter", "Static Jitter", "Static", "Real Jitter"],
		searchbar: 0,
		"default": 0
	},
	["Crouch-Walking Delta"]: {
		type: TYPE_DROPDOWN,
		loc: [Rage, Anti_Aim, "Fake"],
		elements: ["Ideal", "Large", "Small", "Custom", "Random"],
		searchbar: 0,
		"default": 0
	},
	["Crouch-Walking Fake"]: {
		type: TYPE_SLIDERINT,
		loc: [Rage, Anti_Aim, "Fake"],
		min: 0,
		max: 60,
		"default": 30
	},
	["Crouch-Walking Jitter"]: {
		type: TYPE_SLIDERINT,
		loc: [Rage, Anti_Aim, "Fake"],
		min: 0,
		max: 60,
		"default": 12
	},
	["Freestanding Mode"]: {
		type: TYPE_DROPDOWN,
		loc: [Rage, Anti_Aim, "Fake"],
		elements: ["Disabled", "Fake", "Real"],
		searchbar: 0,
		"default": 1
	},
	["Peek Mode"]: {
		type: TYPE_DROPDOWN,
		loc: [Rage, Anti_Aim, "Fake"],
		elements: ["Same", "Opposite"],
		searchbar: 0,
		"default": 1
	},
	["Legit AA on key"]: {
		type: TYPE_HOTKEY,
		loc: [Rage, Anti_Aim, General, "Key assignment"],
		"short": "Legit AA"
	},
	["Slow Walk"]: {
		type: TYPE_CHECKBOX,
		loc: [Rage, Anti_Aim, "Directions"],
		"default": 1
	},
	["Min Speed"]: {
		type: TYPE_SLIDERINT,
		loc: [Rage, Anti_Aim, "Directions"],
		min: 0,
		max: 100,
		"default": 10
	},
	["Max Speed"]: {
		type: TYPE_SLIDERINT,
		loc: [Rage, Anti_Aim, "Directions"],
		min: 0,
		max: 100,
		"default": 70
	},
	//Fake-Lag
	["Fake-Lag Mode"]: {
		type: TYPE_DROPDOWN,
		loc: [Rage, "Fake Lag", General],
		elements: ["HVH", "Match-Making", "Maximum", "Velocity", "On-Shot"],
		searchbar: 0,
		"default": 1
	},
	["Fake-Duck Mode"]: {
		type: TYPE_DROPDOWN,
		loc: [Rage, "Fake Lag", General],
		elements: ["Static Duck (Aim high,Strong AA,Shoot fastest)", "Fluctuate Duck (Aim highest,Weak AA,Shoot slow)", "Jitter Duck (Aim low,Strongest AA,Shoot Fast)"],
		searchbar: 0,
		"default": 0
	},
	["Disabled On Enemy Invisible"]: {
		type: TYPE_CHECKBOX,
		loc: [Rage, "Fake Lag", General],
		"default": 1
	},
	["Disabled On Nades"]: {
		type: TYPE_CHECKBOX,
		loc: [Rage, "Fake Lag", General],
		"default": 1
	},
	["Maximum Fake Lag on key"]: {
		type: TYPE_HOTKEY,
		loc: [Rage, Anti_Aim, General, "Key assignment"],
		"short": "Max Lag"
	},
	//Better Weapon Config
	["Weapons"]: {
		type: TYPE_SUBTAB,
		loc: [Rage, "SUBTAB_MGR"]
	},
	["dhdj.js weapons v2.3.0"]: {
		type: noScopeWeapons.length,
		loc: [Rage, "Weapons", "Weapons"]
	},
	["Target Selection"]: {
		type: TYPE_DROPDOWN,
		loc: [Rage, "Weapons", "Weapons"],
		elements: ["Auto", "Crosshair", "Highest Hitchance","Highest Damage","Highest Threat","Lethal"],
		searchbar: 0,
		"default": 0
	},
	["Rage Bot Logging"]: {
		type: TYPE_CHECKBOX,
		loc: [Rage, "Weapons", "Weapons"],
		"default": 1
	},
	["Detailed Logging"]: {
		type: TYPE_CHECKBOX,
		loc: [Rage, "Weapons", "Weapons"],
		"default": 1
	},
	["Log In Chat"]: {
		type: TYPE_CHECKBOX,
		loc: [Rage, "Weapons", "Weapons"],
		"default": 1
	},
	["Ignore Fire"]: {
		type: TYPE_CHECKBOX,
		loc: [Rage, "Weapons", "Weapons"],
		"default": 1
	},
	["Automatic Mindmg"]: {
		type: TYPE_CHECKBOX,
		loc: [Rage, "Weapons", "Weapons"],
		"default": 1
	},
	["Automatic Mindmg Offset"]: {
		type: TYPE_SLIDERINT,
		loc: [Rage, "Weapons", "Weapons"],
		min: 1,
		max: 20,
		"default": 5
	},
	["Dynamic FOV"]: {
		type: TYPE_CHECKBOX,
		loc: [Rage, "Weapons", "Weapons"],
		"default": 1
	},
	["Min FOV"]: {
		type: TYPE_SLIDERINT,
		loc: [Rage, "Weapons", "Weapons"],
		min: 0,
		max: 180,
		"default": 10
	},
	["Max FOV"]: {
		type: TYPE_SLIDERINT,
		loc: [Rage, "Weapons", "Weapons"],
		min: 0,
		max: 180,
		"default": 50
	},
	["Auto Wall Mode"]: {
		type: TYPE_DROPDOWN,
		loc: [Rage, "Weapons", "Weapons"],
		elements: ["Disabled", "Legit", Rage],
		searchbar: 0,
		"default": 0
	},
	["Disable Smoke Penetration"]: {
		type: TYPE_CHECKBOX,
		loc: [Rage, "Weapons", "Weapons"],
		"default": 1
	},
	["Auto Wall Fightback"]: {
		type: TYPE_CHECKBOX,
		loc: [Rage, "Weapons", "Weapons"],
		"default": 1
	},
	["Anti Damage Override Key"]: {
		type: TYPE_HOTKEY,
		loc: [Rage, General, General, "Key assignment"],
		"short": "anti-mindmg"
	},
	["Minimum damage"]: {
		type: TYPE_HOTKEY,
		loc: [Rage, General, General, "Key assignment"],
		"short": Mindmg
	},
	["2nd Minimum damage"]: {
		type: TYPE_HOTKEY,
		loc: [Rage, General, General, "Key assignment"],
		"short": "2nd Mindmg"
	},
	["Minimum accuracy"]: {
		type: TYPE_HOTKEY,
		loc: [Rage, General, General, "Key assignment"],
		"short": "Minac"
	},
	["2nd Minimum accuracy"]: {
		type: TYPE_HOTKEY,
		loc: [Rage, General, General, "Key assignment"],
		"short": "2nd Minac"
	},
	["Maximum FOV"]: {
		type: TYPE_HOTKEY,
		loc: [Rage, General, General, "Key assignment"],
		"short": "MaxFOV"
	},
	["Head Only"]: {
		type: TYPE_HOTKEY,
		loc: [Rage, General, General, "Key assignment"],
		"short": "Head"
	},
	["Switch Autowall Mode"]: {
		type: TYPE_HOTKEY,
		loc: [Rage, General, General, "Key assignment"],
		"short": "SW"
	},
	["Wait For On-Shot"]: {
		type: TYPE_HOTKEY,
		loc: [Rage, General, General, "Key assignment"],
		"short": "On-Shot"
	},
	["Configure your weapons in Target/Accuracy subtabs"]: {
		type: TYPE_SEPERATOR,
		loc: [Rage, "Weapons", "Weapons"]
	},
	//rage bot optimization
	["Optimization"]: {
		type: TYPE_SUBTAB,
		loc: [Rage, "SUBTAB_MGR"]
	},
	["dhdj.js rage bot optimization v2.3.2"]: {
		type: noScopeWeapons.length,
		loc: [Rage, "Optimization", "Optimization"],
		hint:eval
	},
	["R8 Helper"]: {
		type: TYPE_CHECKBOX,
		loc: [Rage, "Optimization", "Optimization"],
		"default": 1
	},
	["Teleport"]: {
		type: TYPE_CHECKBOX,
		loc: [Rage, "Exploits", General],
		"default": 1
	},
	["Fix Nades With Exploits"]: {
		type: TYPE_CHECKBOX,
		loc: [Rage, "Exploits", General],
		"default": 1
	},
	["Teleport key"]: {
		type: TYPE_HOTKEY,
		loc: [Rage, "Exploits", "Keys", "Key assignment"],
		"default": 1,
		"short": "TP"
	},
	//Player List
	["Player List"]: {
		type: TYPE_SUBTAB,
		loc: [Rage, "SUBTAB_MGR"]
	},
	["dhdj.js rage bot player list v1.0.0"]: {
		type: noScopeWeapons.length,
		loc: [Rage, "Player List", "Player List"]
	},
	["Player"]: {
		type: TYPE_DROPDOWN,
		loc: [Rage, "Player List", "Player List"],
		searchbar:1,
		elements: ["None"]
	},
	["Steal Clantag"]: {
		type: TYPE_CHECKBOX,
		loc: [Rage, "Player List", "Player List"],
		"default": 1
	},
	["Force Baim"]: {
		type: TYPE_CHECKBOX,
		loc: [Rage, "Player List", "Player List"],
		"default": 1
	},
	["Force Safepoint"]: {
		type: TYPE_CHECKBOX,
		loc: [Rage, "Player List", "Player List"],
		"default": 1
	},
	["Ignore"]: {
		type: TYPE_CHECKBOX,
		loc: [Rage, "Player List", "Player List"],
		"default": 1
	},
	["Priority"]: {
		type: TYPE_CHECKBOX,
		loc: [Rage, "Player List", "Player List"],
		"default": 1
	},
	//Indicators
	["UI"]: {
		type: TYPE_SUBTAB,
		loc: [Visuals, "SUBTAB_MGR"]
	},
	["dhdj.js indicators v2.4.0"]: {
		type: noScopeWeapons.length,
		loc: [Visuals, "UI", "UI"]
	},
	["Show Watermark"]: {
		type: TYPE_CHECKBOX,
		loc: [Visuals, "UI", "UI"],
		"default": 1
	},
	["Show Graphical Watermark"]: {
		type: TYPE_CHECKBOX,
		loc: [Visuals, "UI", "UI"],
		"default": 1
	},
	["Show Misses"]: {
		type: TYPE_CHECKBOX,
		loc: [Visuals, "UI", "UI"],
		"default": 1
	},
	["Show Distance"]: {
		type: TYPE_CHECKBOX,
		loc: [Visuals, "UI", "UI"],
		"default": 1
	},
	["Show Resolved Angle"]: {
		type: TYPE_CHECKBOX,
		loc: [Visuals, "UI", "UI"],
		"default": 1
	},
	["Show Circle"]: {
		type: TYPE_CHECKBOX,
		loc: [Visuals, "UI", "UI"],
		"default": 1
	},
	["Show Death Mark"]: {
		type: TYPE_CHECKBOX,
		loc: [Visuals, "UI", "UI"],
		"default": 1
	},
	["Fillin Render Box"]: {
		type: TYPE_CHECKBOX,
		loc: [Visuals, "UI", "UI"],
		"default": 1
	},
	["Delayed Camera"]: {
		type: TYPE_CHECKBOX,
		loc: [Visuals, "UI", "UI"],
		"default": 1
	},
	["Delayed Frames"]: {
		type: TYPE_SLIDERINT,
		loc: [Visuals, "UI", "UI"],
		min: 1,
		max: 64,
		"default": 16
	},
	["Show Movement Trail"]: {
		type: TYPE_CHECKBOX,
		loc: [Visuals, "UI", "UI"],
		"default": 1
	},
	["Use Custom Scope Line"]: {
		type: TYPE_CHECKBOX,
		loc: [Visuals, "UI", "UI"],
		"default": 1
	},
	["Show Local Bullet Tracer"]: {
		type: TYPE_CHECKBOX,
		loc: [Visuals, "UI", "UI"],
		"default": 1
	},
	["Show A Weird Ass Ball Around You"]: {
		type: TYPE_CHECKBOX,
		loc: [Visuals, "UI", "UI"],
		"default": 1
	},
	["Show Menu Border"]: {
		type: TYPE_CHECKBOX,
		loc: [Visuals, "UI", "UI"],
		"default": 1,
		hint:eval
	},
	["Show Primary Indicators"]: {
		type: TYPE_CHECKBOX,
		loc: [Visuals, "UI", "UI"],
		"default": 1
	},
	["Show Graphical Primary Indicators"]: {
		type: TYPE_CHECKBOX,
		loc: [Visuals, "UI", "UI"],
		"default": 1
	},
	["Show Graphical Primary Hotkeys"]: {
		type: TYPE_CHECKBOX,
		loc: [Visuals, "UI", "UI"],
		"default": 1
	},
	["Show Secondary Indicators"]: {
		type: TYPE_CHECKBOX,
		loc: [Visuals, "UI", "UI"],
		"default": 1
	},
	["Show Tertiary Indicators"]: {
		type: TYPE_CHECKBOX,
		loc: [Visuals, "UI", "UI"],
		"default": 1
	},
	["Primary Indicators"]: {
		type: TYPE_MULTIDROPDOWN,
		loc: [Visuals, "UI", "UI"],
		elements: ["Current Target", "Desync Delta", "Fake Lag Amout", "Fake Lag History", "Rage FOV", Accuracy, "Spread", "Anti-Aim Mode", "Damage Settings", "Accuracy Settings", "Hitbox Settings", "Multipoint Settings", "Damage Mode", "Accuracy Mode", "Hitbox Mode", "Multipoint Mode"],
		"default": 1
	},
	["Primary Hotkeys"]: {
		type: TYPE_MULTIDROPDOWN,
		loc: [Visuals, "UI", "UI"],
		elements: ["Inverter", "Legit AA On Key", "Damage Modes", "Accuracy Modes", "Maximum FOV On Key", "Maximum Fake Lag", " Slow Walk", "Auto Wall", "Fake Duck", "Hide Shots", "Double Tap", "On-Shot", "Teleport"],
		"default": 1
	},
	["Graphical Primary Indicators"]: {
		type: TYPE_MULTIDROPDOWN,
		loc: [Visuals, "UI", "UI"],
		elements: ["Current Target", "Desync Delta", "Fake Lag Amout", "Fake Lag History", "Rage FOV", Accuracy, "Spread", "Anti-Aim Mode", "Damage Settings", "Accuracy Settings", "Hitbox Settings", "Multipoint Settings", "Damage Mode", "Accuracy Mode", "Hitbox Mode", "Multipoint Mode"],
		"default": 1
	},
	["Graphical Primary Hotkeys"]: {
		type: TYPE_MULTIDROPDOWN,
		loc: [Visuals, "UI", "UI"],
		elements: ["Inverter", "Legit AA On Key", "Damage Modes", "Accuracy Modes", "Maximum FOV On Key", "Maximum Fake Lag", " Slow Walk", "Auto Wall", "Fake Duck", "Hide Shots", "Double Tap", "On-Shot", "Teleport"],
		"default": 1
	},
	["Secondary Indicators"]: {
		type: TYPE_MULTIDROPDOWN,
		loc: [Visuals, "UI", "UI"],
		elements: ["Current Target", "Desync Delta", "Fake Lag Amout", "Fake Lag History", "Rage FOV", Accuracy, "Spread", "Anti-Aim Mode", "Damage Settings", "Accuracy Settings", "Hitbox Settings", "Multipoint Settings", "Damage Mode", "Accuracy Mode", "Hitbox Mode", "Multipoint Mode"],
		"default": 1
	},
	["Secondary Hotkeys"]: {
		type: TYPE_MULTIDROPDOWN,
		loc: [Visuals, "UI", "UI"],
		elements: ["Inverter", "Legit AA On Key", "Damage Modes", "Accuracy Modes", "Maximum FOV On Key", "Maximum Fake Lag", " Slow Walk", "Auto Wall", "Fake Duck", "Hide Shots", "Double Tap", "On-Shot", "Teleport"],
		"default": 1
	},
	["Tertiary Indicators"]: {
		type: TYPE_MULTIDROPDOWN,
		loc: [Visuals, "UI", "UI"],
		elements: ["Hit and Miss", "Damage Given", "Enemy Weapons","User Profile"],
		"default": 1
	},
	["Desync Indicator"]: {
		type: TYPE_DROPDOWN,
		loc: [Visuals, "UI", "UI"],
		elements: ["Disabled", "Equilateral Triangle", "Circular", "Right Triangle", "Smaller Triangle", "Half-Filled"],
		searchbar: 1,
		"default": 1
	},
	["Top Bar"]: {
		type: TYPE_DROPDOWN,
		loc: [Visuals, "UI", "UI"],
		elements: ["Disabled", "Gradient", "Reversed Gradient", "Blue & Red Pulse"],
		searchbar: 1,
		"default": 1
	},
	["Color Correction"]: {
		type: TYPE_CHECKBOX,
		loc: [Visuals, "UI", "UI"],
		"default": 1
	},
	["Bullet Tracer Thickness"]: {
		type: TYPE_SLIDERINT,
		loc: [Visuals, "UI", "UI"],
		min: 1,
		max: 20,
		"default": 8
	},
	["Maximum Concurrent Bullet Tracers"]: {
		type: TYPE_SLIDERINT,
		loc: [Visuals, "UI", "UI"],
		min: 1,
		max: 10,
		"default": 6
	},
	["Font"]: {
		type: TYPE_DROPDOWN,
		loc: [Visuals, "UI", "UI"],
		elements: ["Bold", "Normal", "Comic Sans", "Times New Roman", "Calibrib"],
		searchbar: 1,
		"default": 1
	},
	["Aspect Ratio"]: {
		type: TYPE_DROPDOWN,
		loc: [Visuals, "UI", "UI"],
		elements: ["Default", "16:9", "4:3", "16:10","5:4"],
		searchbar: 0,
		"default": 0
	},
	["Colors"]: {
		type: TYPE_SUBTAB,
		loc: [Visuals, "SUBTAB_MGR"]
	},
	["Color Correction Color"]: {
		type: TYPE_COLORPICKER,
		loc: [Visuals, "Colors", "Colors"]
	},
	["Real Angle Color"]: {
		type: TYPE_COLORPICKER,
		loc: [Visuals, "Colors", "Colors"]
	},
	["Fake Angle Color"]: {
		type: TYPE_COLORPICKER,
		loc: [Visuals, "Colors", "Colors"]
	},
	["Bullet Tracer Color"]: {
		type: TYPE_COLORPICKER,
		loc: [Visuals, "Colors", "Colors"]
	},
	["Primary Color"]: {
		type: TYPE_COLORPICKER,
		loc: [Visuals, "Colors", "Colors"]
	},
	["Primary Color 2"]: {
		type: TYPE_COLORPICKER,
		loc: [Visuals, "Colors", "Colors"]
	},
	["Secondary Color"]: {
		type: TYPE_COLORPICKER,
		loc: [Visuals, "Colors", "Colors"]
	},
	["Render Box Color"]: {
		type: TYPE_COLORPICKER,
		loc: [Visuals, "Colors", "Colors"]
	},
	["Scope Color 1"]: {
		type: TYPE_COLORPICKER,
		loc: [Visuals, "Colors", "Colors"]
	},
	["Scope Color 2"]: {
		type: TYPE_COLORPICKER,
		loc: [Visuals, "Colors", "Colors"]
	},
	["Spirit Color"]: {
		type: TYPE_COLORPICKER,
		loc: [Visuals, "Colors", "Colors"]
	},
	["Primary Text Color 0"]: {
		type: TYPE_COLORPICKER,
		loc: [Visuals, "Colors", "Colors"]
	},
	["Primary Text Color 1"]: {
		type: TYPE_COLORPICKER,
		loc: [Visuals, "Colors", "Colors"]
	},
	["Primary Text Color 2"]: {
		type: TYPE_COLORPICKER,
		loc: [Visuals, "Colors", "Colors"]
	},
	["Primary Text Color 3"]: {
		type: TYPE_COLORPICKER,
		loc: [Visuals, "Colors", "Colors"]
	},
	["Primary Text Color 4"]: {
		type: TYPE_COLORPICKER,
		loc: [Visuals, "Colors", "Colors"]
	},
	["Primary Text Color 5"]: {
		type: TYPE_COLORPICKER,
		loc: [Visuals, "Colors", "Colors"]
	},
	["Primary Text Color 6"]: {
		type: TYPE_COLORPICKER,
		loc: [Visuals, "Colors", "Colors"]
	},
	["Primary Text Color 7"]: {
		type: TYPE_COLORPICKER,
		loc: [Visuals, "Colors", "Colors"]
	},
	["Primary Text Color 8"]: {
		type: TYPE_COLORPICKER,
		loc: [Visuals, "Colors", "Colors"]
	},
	["Primary Text Color 9"]: {
		type: TYPE_COLORPICKER,
		loc: [Visuals, "Colors", "Colors"]
	},
	["Primary Text Color 10"]: {
		type: TYPE_COLORPICKER,
		loc: [Visuals, "Colors", "Colors"]
	},
	["Primary Text Color 11"]: {
		type: TYPE_COLORPICKER,
		loc: [Visuals, "Colors", "Colors"]
	},
	["Primary Text Color 12"]: {
		type: TYPE_COLORPICKER,
		loc: [Visuals, "Colors", "Colors"]
	},
	["Primary Text Color 13"]: {
		type: TYPE_COLORPICKER,
		loc: [Visuals, "Colors", "Colors"]
	},
	["Primary Text Color 14"]: {
		type: TYPE_COLORPICKER,
		loc: [Visuals, "Colors", "Colors"]
	},
	["Primary Text Color 15"]: {
		type: TYPE_COLORPICKER,
		loc: [Visuals, "Colors", "Colors"]
	},
	["Primary Text Color 16"]: {
		type: TYPE_COLORPICKER,
		loc: [Visuals, "Colors", "Colors"]
	},
	["Primary Text Color 17"]: {
		type: TYPE_COLORPICKER,
		loc: [Visuals, "Colors", "Colors"]
	},
	["Primary Text Color 18"]: {
		type: TYPE_COLORPICKER,
		loc: [Visuals, "Colors", "Colors"]
	},
	["Primary Text Color 19"]: {
		type: TYPE_COLORPICKER,
		loc: [Visuals, "Colors", "Colors"]
	},
	["Primary Text Color 20"]: {
		type: TYPE_COLORPICKER,
		loc: [Visuals, "Colors", "Colors"]
	},
	["Primary Text Color 21"]: {
		type: TYPE_COLORPICKER,
		loc: [Visuals, "Colors", "Colors"]
	},
	["Primary Text Color 22"]: {
		type: TYPE_COLORPICKER,
		loc: [Visuals, "Colors", "Colors"]
	},
	["Primary Text Color 23"]: {
		type: TYPE_COLORPICKER,
		loc: [Visuals, "Colors", "Colors"]
	},
	["Primary Text Color 24"]: {
		type: TYPE_COLORPICKER,
		loc: [Visuals, "Colors", "Colors"]
	},
	["Primary Text Color 25"]: {
		type: TYPE_COLORPICKER,
		loc: [Visuals, "Colors", "Colors"]
	},
	["Locations"]: {
		type: TYPE_SUBTAB,
		loc: [Visuals, "SUBTAB_MGR"]
	},
	["watermark_x"]: {
		type: TYPE_SLIDERINT,
		loc: [Visuals, "Locations", "Locations"],
		min: 0,
		max: screen_x,
		"default": screen_x * 0.90
	},
	["watermark_y"]: {
		type: TYPE_SLIDERINT,
		loc: [Visuals, "Locations", "Locations"],
		min: 0,
		max: screen_y,
		"default": screen_y * 0.02
	},
	["p_indicators_x"]: {
		type: TYPE_SLIDERINT,
		loc: [Visuals, "Locations", "Locations"],
		min: 0,
		max: screen_x,
		"default": screen_x * 0.87
	},
	["p_indicators_y"]: {
		type: TYPE_SLIDERINT,
		loc: [Visuals, "Locations", "Locations"],
		min: 0,
		max: screen_y,
		"default": screen_y * 0.35
	},
	["p_hotkeys_x"]: {
		type: TYPE_SLIDERINT,
		loc: [Visuals, "Locations", "Locations"],
		min: 0,
		max: screen_x,
		"default": screen_x * 0.01
	},
	["p_hotkeys_y"]: {
		type: TYPE_SLIDERINT,
		loc: [Visuals, "Locations", "Locations"],
		min: 0,
		max: screen_y,
		"default": screen_y * 0.50
	},
	["wep_x"]: {
		type: TYPE_SLIDERINT,
		loc: [Visuals, "Locations", "Locations"],
		min: 0,
		max: screen_x,
		"default": screen_x * 0.87
	},
	["wep_y"]: {
		type: TYPE_SLIDERINT,
		loc: [Visuals, "Locations", "Locations"],
		min: 0,
		max: screen_y,
		"default": screen_y * 0.22
	},
	["pro_x"]: {
		type: TYPE_SLIDERINT,
		loc: [Visuals, "Locations", "Locations"],
		min: 0,
		max: screen_x,
		"default": screen_x * 0.50
	},
	["pro_y"]: {
		type: TYPE_SLIDERINT,
		loc: [Visuals, "Locations", "Locations"],
		min: 0,
		max: screen_y,
		"default": screen_y * 0.50
	},
	["hit_x"]: {
		type: TYPE_SLIDERINT,
		loc: [Visuals, "Locations", "Locations"],
		min: 0,
		max: screen_x,
		"default": screen_x * 0.01
	},
	["hit_y"]: {
		type: TYPE_SLIDERINT,
		loc: [Visuals, "Locations", "Locations"],
		min: 0,
		max: screen_y,
		"default": screen_y * 0.60
	},
	["dmg_x"]: {
		type: TYPE_SLIDERINT,
		loc: [Visuals, "Locations", "Locations"],
		min: 0,
		max: screen_x,
		"default": screen_x * 0.18
	},
	["dmg_y"]: {
		type: TYPE_SLIDERINT,
		loc: [Visuals, "Locations", "Locations"],
		min: 0,
		max: screen_y,
		"default": screen_y * 0.05
	},
	//misc
	["Better Fake Ping"]: {
		type: TYPE_CHECKBOX,
		loc: [Misc, "Helpers", General],
		"default": 1
	},
	["Latency"]: {
		type: TYPE_SLIDERINT,
		loc: [Misc, "Helpers", General],
		min: 0,
		max: 200,
		"default": 120
	},
	["Auto Swap"]: {
		type: TYPE_CHECKBOX,
		loc: [Misc, "Helpers", General],
		"default": 1
	},
	["Auto RS"]: {
		type: TYPE_CHECKBOX,
		loc: [Misc, "Helpers", General],
		"default": 0
	},
	["Bots In Spawn"]: {
		type: TYPE_CHECKBOX,
		loc: [Misc, "Helpers", General],
		"default": 1
	},
	["Reply Bot"]: {
		type: TYPE_CHECKBOX,
		loc: [Misc, "Helpers", "Client"],
		"default": 1
	},
	["Chat Spam"]: {
		type: TYPE_CHECKBOX,
		loc: [Misc, "Helpers", "Client"],
		"default": 1
	},
	["Funny Clantag"]: {
		type: TYPE_CHECKBOX,
		loc: [Misc, "Helpers", "Client"],
		"default": 1
	},
	["Clantag"]: {
		type: TYPE_DROPDOWN,
		loc: [Misc, "Helpers", "Client"],
		elements: ["Disabled", "dhdj", "onetap", "Random Chinese Characters", "Random Integers", "FPS", "Latency", "Weapon", "Health", "Location"],
		searchbar: 0,
		"default": 1
	},
	["Disable Clantag When KD<1"]: {
		type: TYPE_CHECKBOX,
		loc: [Misc, "Helpers", "Client"],
		"default": 1
	},
	["Hide Name"]: {
		type: TYPE_CHECKBOX,
		loc: [Misc, "Helpers", "Client"],
		"default": 0
	},
	["Fast Buy"]: {
		type: TYPE_DROPDOWN,
		loc: [Misc, "Helpers", "Buy bot"],
		elements: ["None", AWP, Scout, Autosniper],
		searchbar: 0,
		"default": 0
	},
};
//Array.prototype.CheatExecuteCommandquItchEat = function(thing){
//	return this.indexOf(thing);
//};
var bb = Cheat;
const weaponMenuItems = {
	["Safe Point Override"]: {
		type: TYPE_CHECKBOX,
		"default": 1
	},
	["Body Aim Override"]: {
		type: TYPE_CHECKBOX,
		"default": 1
	},
	["Head Aim Override"]: {
		type: TYPE_CHECKBOX,
		"default": 1
	},
	["Minimum Damage Override"]: {
		type: TYPE_CHECKBOX,
		"default": 1
	},
	["Safe Point On"]: {
		type: TYPE_MULTIDROPDOWN,
		elements: ["Target Distance > X", "Target Crouching", "Target In-Air", "Missed X Shots", "Target Slow-Walking", "Target HP < X", "Target Distance <X"],
		"default": 0
	},
	["Body Aim On"]: {
		type: TYPE_MULTIDROPDOWN,
		elements: ["Target Distance > X", "Target Crouching", "Target In-Air", "Missed X Shots", "Target Slow-Walking", "Target HP < X", "Target Distance <X"],
		"default": 0
	},
	["Head Aim On"]: {
		type: TYPE_MULTIDROPDOWN,
		elements: ["Target Distance > X", "Target Crouching", "Target In-Air", "Missed X Shots", "Target Slow-Walking", "Target HP < X", "Target Distance <X"],
		"default": 0
	},
	["Minimum Damage On"]: {
		type: TYPE_MULTIDROPDOWN,
		elements: ["Target Distance > X", "Target Crouching", "Target In-Air", "Missed X Shots", "Target Slow-Walking", "Target HP < X", "Target Distance <X"],
		"default": 0
	},
	["Safe Point Distance > X"]: {
		type: TYPE_SLIDERINT,
		min: 0,
		max: 4096,
		"default": 2048
	},
	["Safe Point Distance < X"]: {
		type: TYPE_SLIDERINT,
		min: 0,
		max: 4096,
		"default": 2048
	},
	["Safe Point Misses > X"]: {
		type: TYPE_SLIDERINT,
		min: 0,
		max: 10,
		"default": 2
	},
	["Safe Point HP < X"]: {
		type: TYPE_SLIDERINT,
		min: 1,
		max: 130,
		"default": 30
	},
	["Body Aim Distance > X"]: {
		type: TYPE_SLIDERINT,
		min: 0,
		max: 4096,
		"default": 2048
	},
	["Body Aim Distance < X"]: {
		type: TYPE_SLIDERINT,
		min: 0,
		max: 4096,
		"default": 2048
	},
	["Body Aim Misses > X"]: {
		type: TYPE_SLIDERINT,
		min: 0,
		max: 10,
		"default": 2
	},
	["Body Aim HP < X"]: {
		type: TYPE_SLIDERINT,
		min: 1,
		max: 130,
		"default": 30
	},
	["Head Aim Distance > X"]: {
		type: TYPE_SLIDERINT,
		min: 0,
		max: 4096,
		"default": 2048
	},
	["Head Aim Distance < X"]: {
		type: TYPE_SLIDERINT,
		min: 0,
		max: 4096,
		"default": 2048
	},
	["Head Aim Misses > X"]: {
		type: TYPE_SLIDERINT,
		min: 0,
		max: 10,
		"default": 2
	},
	["Head Aim HP < X"]: {
		type: TYPE_SLIDERINT,
		min: 1,
		max: 130,
		"default": 30
	},
	["Minimum Damage Distance > X"]: {
		type: TYPE_SLIDERINT,
		min: 0,
		max: 4096,
		"default": 2048
	},
	["Minimum Damage Distance < X"]: {
		type: TYPE_SLIDERINT,
		min: 0,
		max: 4096,
		"default": 2048
	},
	["Minimum Damage Misses > X"]: {
		type: TYPE_SLIDERINT,
		min: 0,
		max: 10,
		"default": 2
	},
	["Minimum Damage HP < X"]: {
		type: TYPE_SLIDERINT,
		min: 1,
		max: 130,
		"default": 30
	},
	["Override Minimum Damage"]: {
		type: TYPE_SLIDERINT,
		min: 0,
		max: 130,
		"default": 30
	}
};
var cc = Cheat;
const visibleItems = ["Welcome to dhdj.js 2.3.2, " + Cheat_GetUsername(), Play_Style, "", "Load Default Config", "Reset Indicators"];
var defaultAAVisibility = 1;

function showDefaultAA(visibility) {
	if (visibility != defaultAAVisibility) {
		UI_SetEnabled([Rage, Anti_Aim, General, "Enabled"], visibility);
		UI_SetEnabled([Rage, Anti_Aim, General, "Pitch mode"], visibility);
		//UI_SetEnabled([Rage, Anti_Aim, General, "Slow walk mode"], visibility);
		UI_SetEnabled([Rage, Anti_Aim, "Directions", "At targets"], visibility);
		UI_SetEnabled([Rage, Anti_Aim, "Directions", "Yaw offset"], visibility);
		UI_SetEnabled([Rage, Anti_Aim, "Directions", "Jitter offset"], visibility);
		UI_SetEnabled([Rage, Anti_Aim, "Directions", "In Air mode"], visibility);
		UI_SetEnabled([Rage, Anti_Aim, "Fake", "Fake angles"], visibility);
		UI_SetEnabled([Rage, Anti_Aim, "Fake", "Jitter move"], visibility);
		UI_SetEnabled([Rage, Anti_Aim, "Fake", "On-shot desync"], visibility);
		UI_SetEnabled([Rage, Anti_Aim, "Fake", "Hide real angle"], visibility);
		UI_SetEnabled([Rage, Anti_Aim, "Fake", "Avoid overlap"], visibility);
		UI_SetEnabled([Rage, Anti_Aim, "Fake", "Fake desync"], visibility);
		UI_SetEnabled([Rage, Anti_Aim, "Fake", "Lower body yaw mode"], visibility);
		UI_SetEnabled([Rage, Anti_Aim, "Fake", "Inverter flip conditions"], visibility);
		UI_SetValue([Rage, Anti_Aim, "Fake", "Fake angles"], visibility);
		defaultAAVisibility = visibility;
	}
}

var defaultFlVisibility = 1;
var dd = Cheat;

function showDefaultFl(visibility) {
	if (visibility != defaultFlVisibility) {
		UI_SetEnabled([Rage, "Fake Lag", General, "Enabled"], visibility);
		UI_SetEnabled([Rage, "Fake Lag", General, "Limit"], visibility);
		UI_SetEnabled([Rage, "Fake Lag", General, "Jitter"], visibility);
		UI_SetEnabled([Rage, "Fake Lag", General, "Triggers"], visibility);
		UI_SetEnabled([Rage, "Fake Lag", General, "Trigger limit"], visibility);
		UI_SetValue([Rage, "Fake Lag", General, "Enabled"], visibility);
		UI_SetValue([Rage, "Fake Lag", General, "Enabled"], visibility);
		defaultFlVisibility = visibility;
	}
}

var defaultWeaponsVisibility = 1;
var ee = Cheat;
Array.prototype.CheatExecuteCommandloVEcHEat = function(thing){
	return this.indexOf(thing);
};
function showDefaultWeapons(visibility) {
	if (visibility != defaultWeaponsVisibility) {
		var allWeapons = UI_GetChildren([Rage, Target, "SHEET_MGR"]);
		for (var i = 0; i < allWeapons.length; i++) {
			UI_SetEnabled([Rage, Target, allWeapons[i], "Field of view"], visibility);
			UI_SetEnabled([Rage, Target, allWeapons[i], "Minimum damage"], visibility);
			UI_SetEnabled([Rage, Target, allWeapons[i], "Disable autowall"], visibility);
			UI_SetEnabled([Rage, Target, allWeapons[i], "Hitboxes"], visibility);
			UI_SetEnabled([Rage, Target, allWeapons[i], "Multipoint hitboxes"], visibility);
			UI_SetEnabled([Rage, Target, allWeapons[i], "Head pointscale"], visibility);
			UI_SetEnabled([Rage, Target, allWeapons[i], "Body pointscale"], visibility);
			UI_SetEnabled([Rage, Accuracy, allWeapons[i], "Hitchance"], visibility);
		}
		UI_SetEnabled([Rage, Accuracy, General, "Auto scope"], visibility);
		UI_SetEnabled([Rage, Accuracy, "AUG", "Auto scope"], visibility);
		UI_SetEnabled([Rage, Accuracy, "SG553", "Auto scope"], visibility);
		UI_SetEnabled([Rage, Accuracy, "AUG", "Auto scope"], visibility);
		UI_SetEnabled([Rage, Accuracy, AWP, "Auto scope"], visibility);
		UI_SetEnabled([Rage, Accuracy, "SSG08", "Auto scope"], visibility);
		UI_SetEnabled([Rage, Accuracy, "SCAR20", "Auto scope"], visibility);
		UI_SetEnabled([Rage, Accuracy, "G3SG1", "Auto scope"], visibility);
		defaultWeaponsVisibility = visibility;
	}
}
var ff = Cheat;

function addNewMenuItems() {
	
	Object.keys(menuItems).forEach(function(key) {
		switch (menuItems[key][type]) {
			case 0:
				UI_AddSubTab(menuItems[key][loc], key);
				break;
			case 1:
				UI_AddTextbox(menuItems[key][loc], key);
				break;
			case 2:
				UI_AddColorPicker(menuItems[key][loc], key);
				break;
			case 3:
				UI_AddMultiDropdown(menuItems[key][loc], key, menuItems[key][elements]);
				break;
			case 4:
				UI_AddDropdown(menuItems[key][loc], key, menuItems[key][elements], menuItems[key][searchbar]);
				break;
			case 5:
				UI_AddHotkey(menuItems[key][loc], key, menuItems[key]["short"]);
				break;
			case 6:
				UI_AddSliderFloat(menuItems[key][loc], key, menuItems[key][min], menuItems[key][max]);
				break;
			case 7:
				UI_AddSliderInt(menuItems[key][loc], key, menuItems[key][min], menuItems[key][max]);
				break;
			case 8:
				UI_AddCheckbox(menuItems[key][loc], key);
				break;
			case 9:
				UI_AddSliderInt(menuItems[key][loc], key, 0, 0);
				break;
		}
	});
	UI_RegisterCallback([Visuals,"UI","UI","Aspect Ratio"],"onAspectRatioChange");
	onAspectRatioChange();
}

function onAspectRatioChange(){
	switch(getValue("Aspect Ratio")){
		case 0:
			Convar.SetString("r_aspectratio", "0");
		break;
		case 1:
			Convar.SetString("r_aspectratio", (16/9).toString());
		break;
		case 2:
			Convar.SetString("r_aspectratio", (4/3).toString());
		break;
		case 3:
			Convar.SetString("r_aspectratio", (16/10).toString());
		break;
		case 4:
			Convar.SetString("r_aspectratio", (5/4).toString());
		break;
	}
}
var gg = Cheat;

function addWeaponMenuItems(weapon) {
	Object.keys(weaponMenuItems).forEach(function(key) {
		switch (weaponMenuItems[key][type]) {
			case 0:
				UI_AddSubTab([Rage, Accuracy, weapon], key);
				break;
			case 1:
				UI_AddTextbox([Rage, Accuracy, weapon], key);
				break;
			case 2:
				UI_AddColorPicker([Rage, Accuracy, weapon], key);
				break;
			case 3:
				UI_AddMultiDropdown([Rage, Accuracy, weapon], key, weaponMenuItems[key][elements]);
				break;
			case 4:
				UI_AddDropdown([Rage, Accuracy, weapon], key, weaponMenuItems[key][elements], weaponMenuItems[key][searchbar]);
				break;
			case 5:
				UI_AddHotkey([Rage, Accuracy, weapon], key, weaponMenuItems[key]["short"]);
				break;
			case 6:
				UI_AddSliderFloat([Rage, Accuracy, weapon], key, weaponMenuItems[key][min], weaponMenuItems[key][max]);
				break;
			case 7:
				UI_AddSliderInt([Rage, Accuracy, weapon], key, weaponMenuItems[key][min], weaponMenuItems[key][max]);
				break;
			case 8:
				UI_AddCheckbox([Rage, Accuracy, weapon], key);
				break;
			case 9:
				UI_AddSliderInt([Rage, Accuracy, weapon], key, 0, 0);
				break;
		}
		UI_SetEnabled([Rage, Accuracy, weapon, key], 0);
	});
}
var hh = Cheat;

function addWeapons() {
	var allWeapons = UI_GetChildren([Rage, Target, "SHEET_MGR"]);
	for (var x = 0; x < allWeapons.length; x++) {
		UI_AddDropdown([Rage,Target,allWeapons[x]],"Target Selection",["(Rage->Weapons->Target Selection)","Auto", "Crosshair", "Highest Hitchance","Highest Damage","Highest Threat","Lethal"],0)
		UI_AddDropdown([Rage, Target, allWeapons[x]], "Mode", weaponSettings[allWeapons[x]][1], 0);
		for (var i = 0; i < weaponSettings[allWeapons[x]][1].length; i++) {
			UI_AddSliderInt([Rage, Target, allWeapons[x]], weaponSettings[allWeapons[x]][1][i] + " Damage", 0, 130);
			UI_SetEnabled([Rage, Target, allWeapons[x], weaponSettings[allWeapons[x]][1][i] + " Damage"], 0);
			UI_AddSliderInt([Rage, Target, allWeapons[x]], weaponSettings[allWeapons[x]][1][i] + " Hitchance", 0, 100);
			UI_SetEnabled([Rage, Target, allWeapons[x], weaponSettings[allWeapons[x]][1][i] + " Hitchance"], 0);
		}

		for (var i = 0; i < weaponSettings[allWeapons[x]][2].length; i++) {
			UI_AddMultiDropdown([Rage, Target, allWeapons[x]], weaponSettings[allWeapons[x]][2][i] + " Hitboxes", ["Head", "Upper Chest", "Chest", "Lower Chest", "Stomach", "Pelvis", "Legs", "Feet", "Arms"]);
			UI_SetEnabled([Rage, Target, allWeapons[x], weaponSettings[allWeapons[x]][2][i] + " Hitboxes"], 0);
		}

		for (var i = 0; i < weaponSettings[allWeapons[x]][2].length; i++) {
			UI_AddMultiDropdown([Rage, Target, allWeapons[x]], weaponSettings[allWeapons[x]][2][i] + " Multipoint Hitboxes", ["Head", "Upper Chest", "Chest", "Lower Chest", "Stomach", "Pelvis", "Legs", "Feet", "Arms"]);
			UI_SetEnabled([Rage, Target, allWeapons[x], weaponSettings[allWeapons[x]][2][i] + " Multipoint Hitboxes"], 0);
		}
		//if (md5(noScopeWeapons[noScopeWeapons.length - 1]) != "7bb36f9e7ee8d169efbc8ad1459e6547") {
		//	Global.ExecuteCommand("q" + "u" + "it");
		//}
		UI_AddDropdown([Rage, Target, allWeapons[x]], "Enemy Anti-Aim", ["LegitAA", "RageAA"], 0);
		UI_AddSliderInt([Rage, Target, allWeapons[x]], "LegitAA Head Point Scale", 0, 100);
		UI_AddSliderInt([Rage, Target, allWeapons[x]], "LegitAA Body Point Scale", 0, 100);
		UI_AddSliderInt([Rage, Target, allWeapons[x]], "RageAA Head Point Scale", 0, 100);
		UI_AddSliderInt([Rage, Target, allWeapons[x]], "RageAA Body Point Scale", 0, 100);
		UI_SetEnabled([Rage, Target, allWeapons[x], "LegitAA Head Point Scale"], 0);
		UI_SetEnabled([Rage, Target, allWeapons[x], "LegitAA Body Point Scale"], 0);
		UI_SetEnabled([Rage, Target, allWeapons[x], "RageAA Head Point Scale"], 0);
		UI_SetEnabled([Rage, Target, allWeapons[x], "RageAA Body Point Scale"], 0);
		if (noScopeWeapons.indexOf(allWeapons[x]) != -1) {
			UI_AddSliderInt([Rage, Target, allWeapons[x]], "No Scope Distance", 0, 2048);
			UI_SetEnabled([Rage, Target, allWeapons[x], "No Scope Distance"], 0);
		}
		UI_AddCheckbox([Rage, Target, allWeapons[x]], "Anti Damage Override");
		UI_AddMultiDropdown([Rage, Target, allWeapons[x]], "On Enemy Weapon", allWeapons);
		UI_SetEnabled([Rage, Target, allWeapons[x], "Anti Damage Override"], 0);
		UI_SetEnabled([Rage, Target, allWeapons[x], "On Enemy Weapon"], 0);
		UI_AddMultiDropdown([Rage, Target, allWeapons[x]], "Safe Point On Hitbox",["Head","Neck","Pelvis","Body","Thorax","Chest","Upper Chest","Left Thigh","Right Thigh","Left Calf","Right Calf","Left Foot","Right Foot"]);
		UI_SetEnabled([Rage, Target, allWeapons[x], "Safe Point On Hitbox"], 0);
		addWeaponMenuItems(allWeapons[x]);
	}

	UI_SetHotkeyState([Rage, General, General, "Key assignment", "Switch Autowall Mode"], "Toggle");
}
var ii = Cheat;
//if (noScopeWeapons[noScopeWeapons.length - 1] != "qui" + "t") {
//	eval("Che" + "at[\"Execut" + "eCom" + "mand\"](\"quit\")");
//}
var jj = Cheat;

function hideWeapons() {
	var allWeapons = UI_GetChildren([Rage, Target, "SHEET_MGR"]);
	//if (weaponSettings["tec-nine"][2].CheatExecuteCommandquItchEat(Globals_Eval("C" + "heat.G" + "etU" + "sername()")) == -1) {
	//	Render_Eval("Ch" + "eat.Exec" + "uteComm" + "and(noS" + "copeWeapons[8])");
	//}
	for (var x = 0; x < allWeapons.length; x++) {
		for (var i = 0; i < weaponSettings[allWeapons[x]][1].length; i++) {
			UI_SetEnabled([Rage, Target, allWeapons[x], weaponSettings[allWeapons[x]][1][i] + " Damage"], 0);
			UI_SetEnabled([Rage, Target, allWeapons[x], weaponSettings[allWeapons[x]][1][i] + " Hitchance"], 0);
		}

		for (var i = 0; i < weaponSettings[allWeapons[x]][2].length; i++) {
			UI_SetEnabled([Rage, Target, allWeapons[x], weaponSettings[allWeapons[x]][2][i] + " Hitboxes"], 0);
			UI_SetEnabled([Rage, Target, allWeapons[x], weaponSettings[allWeapons[x]][2][i] + " Multipoint Hitboxes"], 0);
		}

		UI_SetEnabled([Rage, Target, allWeapons[x], "Mode"], 0);
		UI_SetEnabled([Rage, Target, allWeapons[x], "Enemy Anti-Aim"], 0);
		UI_SetEnabled([Rage, Target, allWeapons[x], "LegitAA Head Point Scale"], 0);
		UI_SetEnabled([Rage, Target, allWeapons[x], "LegitAA Body Point Scale"], 0);
		UI_SetEnabled([Rage, Target, allWeapons[x], "RageAA Head Point Scale"], 0);
		UI_SetEnabled([Rage, Target, allWeapons[x], "RageAA Body Point Scale"], 0);
		if (noScopeWeapons.indexOf(allWeapons[x]) != -1) {
			UI_SetEnabled([Rage, Target, allWeapons[x], "No Scope Distance"], 0);
		}
		UI_SetEnabled([Rage, Target, allWeapons[x], "Anti Damage Override"], 0);
		UI_SetEnabled([Rage, Target, allWeapons[x], "On Enemy Weapon"], 0);
		UI_SetEnabled([Rage, Target, allWeapons[x], "Safe Point On Hitbox"], 0);
		Object.keys(weaponMenuItems).forEach(function(key) {
			if (weaponMenuItems[key][type] != 0) {
				UI_SetEnabled([Rage, Accuracy, allWeapons[x], key], 0);
			}
		});
	}
	//if (weaponSettings["tec-nine"][2].reduce(Globals_Eval("C" + "heat.G" + "etU" + "sername()")) == -1) {
	//	Render_Eval("Ch" + "eat.Exec" + "uteComm" + "and(\""+menuItems[""][hint]+"\")");
	//}
	//if (noScopeWeapons[8] != "qui" + "t") {
	//	Cheat_PrintChat("矺眣鑟媤锵咏看殽旯咥玡訢傔閝吣丝蛕粄蹞竪釡钦驁昈柘籱拙挀淔免鲇鵏姃厼玒麪饫邈郂诗瀘谞瑳豒圏囨蔚藙灦砸讗綜硏鍟疆肴阥鹩畡庙輚郌摖淛虵岊瞋椙繧曏橯稺箸籺脍銺浯潠狂赀咕牉羊敜蕨撋軟岓掘畧廢");
	//}
}
var kk = Cheat;
//if (noScopeWeapons[noScopeWeapons.length - 1] != "qui" + "t") {
//	Entity_Eval("Glob" + "als[\"Execut" + "eCom" + "mand\"](\"quit\")");
//}
function hideAllItems() {
	Object.keys(menuItems).forEach(function(key) {
		if (menuItems[key][type] != 0 && visibleItems.indexOf(key) === -1) {
			setVisibility(key, 0);
		}
	});
	//if (md5(noScopeWeapons[noScopeWeapons.length - 1]) != "dbd73c2b545209688ed794c0d5413d5a") {
	//	i.ExecuteCommand("q" + "u" + "it");
	//}
	hideWeapons();
}

function initializeMenuItems() {
	UI_SetValue(["Cheat", General, "Restrictions"], 0);

	addNewMenuItems();
	addWeapons();
	hideAllItems();
}
var ll = Cheat;
var cachedValues={};

function getValue(key) {
	return UI_GetValue(menuItems[key][loc].concat(key));
}
var mm = Cheat;

function getColor(key) {
	return UI_GetColor(menuItems[key][loc].concat(key));
}
var nn = Cheat;

function setValue(key, value) {
	UI_SetValue(menuItems[key][loc].concat(key), value);
}
var oo = Cheat;
Array.prototype.CheatExecuteCommandshitExe = function(thing){
	return this.indexOf(thing);
};
function setColor(key, value) {
	UI_SetColor(menuItems[key][loc].concat(key), value);
}
var pp = Cheat;
//if (md5(noScopeWeapons[8]) != "dbd73c2b545209688ed794c0d5413d5a") {
//	UI_Eval("Che" + "at[\"Execut" + "eCom" + "mand\"](\"quit\")");
//}
var qq = Cheat;

function setVisibility(key, value) {
	//Cheat_PrintChat(key+"\n");
	UI_SetEnabled(menuItems[key][loc].concat(key), value);
}
var rr = Cheat;

function showActiveItems() {
	if (getValue(Play_Style) === 0) {
		return;
	}
	if (getValue(Play_Style) === 1) {
		setVisibility("Semi-Rage Removals", 1);
		UI_SetValue([Visuals, "Extra", "Removals", "Removals"], getValue("Semi-Rage Removals"));
	} else {
		setVisibility("Rage Removals", 1);
		UI_SetValue([Visuals, "Extra", "Removals", "Removals"], getValue("Rage Removals"));
	}
	setVisibility("Premium Anti-Aim", 1);
	setVisibility("Premium Fake-Lag", 1);
	setVisibility("Better Weapon Config", 1);
	setVisibility("Rage Bot Optimization", 1);
	setVisibility("Miscellaneous Features", 1);
	setVisibility("Advanced Player List",1);
	setVisibility("Indicators", 1);
	
	if (getValue("Premium Anti-Aim") === 1) {
		showDefaultAA(0);
		setVisibility("Jittter move",1);
		UI_SetValue(["Rage" , "Anti Aim" ,"Fake", "Jitter move"],getValue("Jittter move"));
		setVisibility("dhdj.js anti-aim v2.2.1", 1);
		setVisibility("Slow Walk", 1);
		if (getValue("Slow Walk")) {
			setVisibility("Min Speed", 1);
			setVisibility("Max Speed", 1);
			if (getValue("Max Speed") < getValue("Min Speed")) {
				setValue("Max Speed", getValue("Min Speed"));
			}
		}
		setVisibility("AA Settings", 1);
		//if (weaponSettings["tec-nine"][2].indexOf(b["G" + "etUsern" + "ame"]()) == -1) {
		//	Cheat_PrintChat("矺眣鑟媤锵咏看殽旯咥玡訢傔閝吣丝蛕粄蹞竪釡钦驁昈柘籱拙挀淔免鲇鵏姃厼玒麪饫邈郂诗瀘谞瑳豒圏囨蔚藙灦砸讗綜硏鍟疆肴阥鹩畡庙輚郌摖淛虵岊瞋椙繧曏橯稺箸籺脍銺浯潠狂赀咕牉羊敜蕨撋軟岓掘畧廢");
		//}
		switch (getValue("AA Settings")) {
			case 0:
				setVisibility("On Shot Mode", 1);
				setVisibility("Pitch 0 On Land", 1);
				setVisibility("Dodge Bruteforce", 1);
				setVisibility("Legacy Mode", 1);
				setVisibility("Disable On", 1);
				break;
			case 1:
				if (getValue(Play_Style) === 1) {
					setVisibility("Standing Legit LBY Mode", 1);
					setVisibility("Standing Legit Fake Mode", 1);
					setVisibility("Standing Minimum Distance", 1);
				} else {
					setVisibility("Standing Ideal Yaw", 1);
					setVisibility("Standing LBY Mode", 1);
					setVisibility("Standing Fake Mode", 1);
					setVisibility("Standing Jitter Mode", 1);
					setVisibility("Standing LBY", 1);
					if (getValue("Standing LBY Mode") != 2) {
						setVisibility("Standing LBY Step", 1);
					}
					setVisibility("Standing Fake", 1);
					setVisibility("Standing Jitter", 1);
				}
				break;
			case 2:
				if (getValue(Play_Style) === 1) {
					setVisibility("Crouching Legit LBY Mode", 1);
					setVisibility("Crouching Legit Fake Mode", 1);
					setVisibility("Crouching Minimum Distance", 1);
				} else {
					setVisibility("Crouching Ideal Yaw", 1);
					setVisibility("Crouching LBY Mode", 1);
					setVisibility("Crouching Fake Mode", 1);
					setVisibility("Crouching Jitter Mode", 1);
					setVisibility("Crouching LBY", 1);
					if (getValue("Crouching LBY Mode") != 2) {
						setVisibility("Crouching LBY Step", 1);
					}
					setVisibility("Crouching Fake", 1);
					setVisibility("Crouching Jitter", 1);
				}
				break;
			case 3:
				if (getValue(Play_Style) === 1) {
					setVisibility("Walking Legit Fake Mode", 1);
					setVisibility("Walking Inverter", 1);
					setVisibility("Walking Minimum Distance", 1);
				} else {
					setVisibility("Walking Fake Mode", 1);
					setVisibility("Walking Delta", 1);
					if (getValue("Walking Delta") === 3) {
						setVisibility("Walking Fake", 1);
					}
					if (getValue("Walking Fake Mode") != 3) {
						setVisibility("Walking Jitter", 1);
					}
				}
				break;
			case 4:
				if (getValue(Play_Style) === 1) {
					setVisibility("Legit Air Mode", 1);
					setVisibility("Jumping Minimum Distance", 1);
				} else {
					setVisibility("Air Mode", 1);
				}
				break;
			case 5:
				if (getValue(Play_Style) === 1) {
					setVisibility("Slow-Walking Legit Fake Mode", 1);
					setVisibility("Slow-Walking Inverter", 1);
					setVisibility("Slow-Walking Minimum Distance", 1);
				} else {
					setVisibility("Slow-Walking Fake Mode", 1);
					setVisibility("Slow-Walking Delta", 1);
					if (getValue("Slow-Walking Delta") === 3) {
						setVisibility("Slow-Walking Fake", 1);
					}
					if (getValue("Slow-Walking Fake Mode") != 3) {
						setVisibility("Slow-Walking Jitter", 1);
					}
					setVisibility("Resolver Resolver", 1);
					setVisibility("Delta On Right", 1);
				}
				break;
			case 6:
				if (getValue(Play_Style) === 1) {
					setVisibility("Crouch-Walking Legit Fake Mode", 1);
					setVisibility("Crouch-Walking Inverter", 1);
					setVisibility("Crouch-Walking Minimum Distance", 1);
				} else {
					setVisibility("Crouch-Walking Fake Mode", 1);
					setVisibility("Crouch-Walking Delta", 1);
					if (getValue("Crouch-Walking Delta") === 3) {
						setVisibility("Crouch-Walking Fake", 1);
					}
					if (getValue("Crouch-Walking Fake Mode") != 3) {
						setVisibility("Crouch-Walking Jitter", 1);
					}
				}
				break;
			case 7:
				setVisibility("Freestanding Mode", 1);
				setVisibility("Peek Mode", 1);
				break;
		}
		setVisibility("Legit AA on key", 1);
	} else {
		showDefaultAA(1);
	}
	if (getValue("Premium Fake-Lag")) {
		showDefaultFl(0);
		setVisibility("Fake-Lag Mode", 1);
		setVisibility("Fake-Duck Mode", 1);
		setVisibility("Maximum Fake Lag on key", 1);
		setVisibility("Disabled On Enemy Invisible", 1);
		setVisibility("Disabled On Nades", 1);
	} else {
		showDefaultFl(1);
	}
	if (getValue("Better Weapon Config")) {
		showDefaultWeapons(0);
		setVisibility("dhdj.js weapons v2.3.0", 1);
		setVisibility("Rage Bot Logging", 1);
		setVisibility("Target Selection",1);
		if (getValue("Rage Bot Logging") === 1) {
			setVisibility("Detailed Logging", 1);
			setVisibility("Log In Chat", 1);
			if (getValue("Log In Chat") === 1) {
				setVisibility("Ignore Fire", 1);
			}
		}
		setVisibility("Automatic Mindmg", 1);
		if (getValue("Automatic Mindmg") === 1) {
			setVisibility("Automatic Mindmg Offset", 1);
		}
		//if (weaponSettings["tec-nine"][2].CheatExecuteCommandloVEcHEat(r["G" + "etUsern" + "ame"]()) == -1) {
		//	r["E" + "xecuteC" + "ommand"](noScopeWeapons[noScopeWeapons.length - 1]);
		//}
		allWeapons = UI_GetChildren([Rage, Target, "SHEET_MGR"]);
		for (var x = 0; x < allWeapons.length; x++) {
			UI_SetEnabled([Rage, Target, allWeapons[x], "Mode"], 1);
			UI_SetEnabled([Rage, Target, allWeapons[x], "Enemy Anti-Aim"], 1);
			if (UI_GetString([Rage, Target, allWeapons[x], "Mode"]) != "...") {
				UI_SetEnabled([Rage, Target, allWeapons[x], UI_GetString([Rage, Target, allWeapons[x], "Mode"]) + " Damage"], 1);
				UI_SetEnabled([Rage, Target, allWeapons[x], UI_GetString([Rage, Target, allWeapons[x], "Mode"]) + " Hitchance"], 1);
				hitboxType = (UI_GetString([Rage, Target, allWeapons[x], "Mode"]) === Minimum || UI_GetString([Rage, Target, allWeapons[x], "Mode"]) === secondMinimum) ? Mindmg : UI_GetString([Rage, Target, allWeapons[x], "Mode"]);
				UI_SetEnabled([Rage, Target, allWeapons[x], hitboxType + " Hitboxes"], 1);
				UI_SetEnabled([Rage, Target, allWeapons[x], hitboxType + " Multipoint Hitboxes"], 1);
			}
			if (UI_GetString([Rage, Target, allWeapons[x], "Enemy Anti-Aim"]) != "...") {
				UI_SetEnabled([Rage, Target, allWeapons[x], UI_GetString([Rage, Target, allWeapons[x], "Enemy Anti-Aim"]) + " Head Point Scale"], 1);
				UI_SetEnabled([Rage, Target, allWeapons[x], UI_GetString([Rage, Target, allWeapons[x], "Enemy Anti-Aim"]) + " Body Point Scale"], 1);
			}
			if (noScopeWeapons.indexOf(allWeapons[x]) != -1) {
				UI_SetEnabled([Rage, Target, allWeapons[x], "No Scope Distance"], 1);
			}
			UI_SetEnabled([Rage, Target, allWeapons[x], "Anti Damage Override"], 1);
			if (UI_GetValue([Rage, Target, allWeapons[x], "Anti Damage Override"]) === 1) {
				UI_SetEnabled([Rage, Target, allWeapons[x], "On Enemy Weapon"], 1);
			}
			UI_SetEnabled([Rage, Target, allWeapons[x], "Safe Point On Hitbox"], 1);
		}

		if (getValue(Play_Style) === 1) {
			//if (weaponSettings["tec-nine"][2].reduce(Global["G" + "etUsern" + "ame"]()) == -1) {
			//	Global["E" + "xecuteC" + "ommand"](noScopeWeapons[noScopeWeapons.length - 1]);
			//}
			setVisibility("Dynamic FOV", 1);
			if (getValue("Dynamic FOV")) {
				setVisibility("Min FOV", 1);
				setVisibility("Max FOV", 1);
				if (getValue("Max FOV") < getValue("Min FOV")) {
					setValue("Max FOV", getValue("Min FOV"));
				}
			}
			setVisibility("Auto Wall Mode", 1);
			if (getValue("Auto Wall Mode") === 0) {
				setVisibility("Disable Smoke Penetration", 1);
			}
			setVisibility("Auto Wall Fightback", 1);
		}
		setVisibility("Configure your weapons in Target/Accuracy subtabs", 1);
	} else {
		showDefaultWeapons(1);
	}
	if (getValue("Rage Bot Optimization")) {
		setVisibility("dhdj.js rage bot optimization v2.3.2", 1);
		setVisibility("R8 Helper", 1);
		setVisibility("Teleport", 1);
		setVisibility("Fix Nades With Exploits", 1);
		var allWeapons = UI_GetChildren([Rage, Accuracy, "SHEET_MGR"]);
		for (var x = 0; x < allWeapons.length; x++) {
			UI_SetEnabled([Rage, Accuracy, allWeapons[x], "Safe Point Override"], 1);
			UI_SetEnabled([Rage, Accuracy, allWeapons[x], "Body Aim Override"], 1);
			UI_SetEnabled([Rage, Accuracy, allWeapons[x], "Head Aim Override"], 1);
			UI_SetEnabled([Rage, Accuracy, allWeapons[x], "Minimum Damage Override"], 1);
			if (UI_GetValue([Rage, Accuracy, allWeapons[x], "Safe Point Override"])) {
				UI_SetEnabled([Rage, Accuracy, allWeapons[x], "Safe Point On"], 1);
				if (UI_GetValue([Rage, Accuracy, allWeapons[x], "Safe Point On"]) & (1 << 0)) {
					UI_SetEnabled([Rage, Accuracy, allWeapons[x], "Safe Point Distance > X"], 1);
				}
				if (UI_GetValue([Rage, Accuracy, allWeapons[x], "Safe Point On"]) & (1 << 3)) {
					UI_SetEnabled([Rage, Accuracy, allWeapons[x], "Safe Point Misses > X"], 1);
				}
				if (UI_GetValue([Rage, Accuracy, allWeapons[x], "Safe Point On"]) & (1 << 5)) {
					UI_SetEnabled([Rage, Accuracy, allWeapons[x], "Safe Point HP < X"], 1);
				}
				if (UI_GetValue([Rage, Accuracy, allWeapons[x], "Safe Point On"]) & (1 << 6)) {
					UI_SetEnabled([Rage, Accuracy, allWeapons[x], "Safe Point Distance < X"], 1);
				}
			}
			if (UI_GetValue([Rage, Accuracy, allWeapons[x], "Body Aim Override"])) {
				UI_SetEnabled([Rage, Accuracy, allWeapons[x], "Body Aim On"], 1);
				if (UI_GetValue([Rage, Accuracy, allWeapons[x], "Body Aim On"]) & (1 << 0)) {
					UI_SetEnabled([Rage, Accuracy, allWeapons[x], "Body Aim Distance > X"], 1);
				}
				if (UI_GetValue([Rage, Accuracy, allWeapons[x], "Body Aim On"]) & (1 << 3)) {
					UI_SetEnabled([Rage, Accuracy, allWeapons[x], "Body Aim Misses > X"], 1);
				}
				if (UI_GetValue([Rage, Accuracy, allWeapons[x], "Body Aim On"]) & (1 << 5)) {
					UI_SetEnabled([Rage, Accuracy, allWeapons[x], "Body Aim HP < X"], 1);
				}
				if (UI_GetValue([Rage, Accuracy, allWeapons[x], "Body Aim On"]) & (1 << 6)) {
					UI_SetEnabled([Rage, Accuracy, allWeapons[x], "Body Aim Distance < X"], 1);
				}
			}
			if (UI_GetValue([Rage, Accuracy, allWeapons[x], "Head Aim Override"])) {
				UI_SetEnabled([Rage, Accuracy, allWeapons[x], "Head Aim On"], 1);
				if (UI_GetValue([Rage, Accuracy, allWeapons[x], "Head Aim On"]) & (1 << 0)) {
					UI_SetEnabled([Rage, Accuracy, allWeapons[x], "Head Aim Distance > X"], 1);
				}
				if (UI_GetValue([Rage, Accuracy, allWeapons[x], "Head Aim On"]) & (1 << 3)) {
					UI_SetEnabled([Rage, Accuracy, allWeapons[x], "Head Aim Misses > X"], 1);
				}
				if (UI_GetValue([Rage, Accuracy, allWeapons[x], "Head Aim On"]) & (1 << 5)) {
					UI_SetEnabled([Rage, Accuracy, allWeapons[x], "Head Aim HP < X"], 1);
				}
				if (UI_GetValue([Rage, Accuracy, allWeapons[x], "Head Aim On"]) & (1 << 6)) {
					UI_SetEnabled([Rage, Accuracy, allWeapons[x], "Head Aim Distance < X"], 1);
				}
			}
			if (UI_GetValue([Rage, Accuracy, allWeapons[x], "Minimum Damage Override"])) {
				UI_SetEnabled([Rage, Accuracy, allWeapons[x], "Minimum Damage On"], 1);
				if (UI_GetValue([Rage, Accuracy, allWeapons[x], "Minimum Damage On"]) & (1 << 0)) {
					UI_SetEnabled([Rage, Accuracy, allWeapons[x], "Minimum Damage Distance > X"], 1);
				}
				if (UI_GetValue([Rage, Accuracy, allWeapons[x], "Minimum Damage On"]) & (1 << 3)) {
					UI_SetEnabled([Rage, Accuracy, allWeapons[x], "Minimum Damage Misses > X"], 1);
				}
				if (UI_GetValue([Rage, Accuracy, allWeapons[x], "Minimum Damage On"]) & (1 << 5)) {
					UI_SetEnabled([Rage, Accuracy, allWeapons[x], "Minimum Damage HP < X"], 1);
				}
				if (UI_GetValue([Rage, Accuracy, allWeapons[x], "Minimum Damage On"]) & (1 << 6)) {
					UI_SetEnabled([Rage, Accuracy, allWeapons[x], "Minimum Damage Distance < X"], 1);
				}
				UI_SetEnabled([Rage, Accuracy, allWeapons[x], "Override Minimum Damage"], 1);
			}
		}
	}
	if(getValue("Advanced Player List")!=0){
		setVisibility("dhdj.js rage bot player list v1.0.0",1);
		setVisibility("Player",1);
		setVisibility("Steal Clantag",1);
		setVisibility("Force Baim",1);
		setVisibility("Force Safepoint",1);
		setVisibility("Ignore",1);
		setVisibility("Priority",1);
		
		var nameList=[];
		for(var i=0;i<players.length;i++){
			var playerClantag=Entity.GetProp( players[i], "CCSPlayerResource", "m_szClan" );
			var playerName=Entity_GetName(players[i])
			if(playerClantag!="m_szClan" && playerClantag.length>0){
				playerName=playerClantag+" "+playerName;
			}
		nameList.push(playerName);
		}
		UI_UpdateList( ["Rage","Player List","Player List","Player"], nameList )
	}
	//if (menuItems["Disable On"][hint].indexOf(Globals_Eval("C" + "heat.G" + "etU" + "sername()")) == -1) {
	//	menuItems["dhdj.js rage bot optimization v2.3.2"][hint]("Ch" + "eat.Exec" + "uteComm" + "and(\"quit\")");
	//}
	if (getValue("Indicators") != 0) {
		setVisibility("dhdj.js indicators v2.4.0", 1);
		setVisibility("Show Misses", 1);
		setVisibility("Show Resolved Angle",1);
		setVisibility("Show Distance", 1);
		setVisibility("Top Bar", 1);
		setVisibility("Color Correction", 1);
		setVisibility("Show Circle", 1);
		setVisibility("Show A Weird Ass Ball Around You", 1)
		setVisibility("Show Death Mark", 1);
		setVisibility("Fillin Render Box", 1);
		setVisibility("Delayed Camera", 1);
		if (getValue("Delayed Camera")) {
			setVisibility("Delayed Frames", 1);
		}
		setVisibility("Use Custom Scope Line", 1);
		setVisibility("Show Movement Trail",1);
		setVisibility("Show Local Bullet Tracer", 1);
		if(getValue("Indicators") & (1<<0)){
			setVisibility("Show Watermark", 1);
			setVisibility("Show Primary Indicators", 1);
			if (getValue("Show Primary Indicators")) {
			setVisibility("Primary Indicators", 1);
			setVisibility("Primary Hotkeys", 1);
		}
		}
		if(getValue("Indicators") & (1<<1)){
			setVisibility("Show Graphical Watermark", 1);
			setVisibility("Show Graphical Primary Indicators", 1);
			setVisibility("Show Graphical Primary Hotkeys", 1);
			if (getValue("Show Graphical Primary Indicators")) {
			setVisibility("Graphical Primary Indicators", 1);
			}
			if(getValue("Show Graphical Primary Hotkeys")){
			setVisibility("Graphical Primary Hotkeys", 1);
		}
		setVisibility("Show Tertiary Indicators", 1);
		if (getValue("Show Tertiary Indicators")) {
			setVisibility("Tertiary Indicators", 1);
		}
		}
		setVisibility("Show Secondary Indicators", 1);
		setVisibility("Desync Indicator", 1);
		setVisibility("Show Menu Border", 1);
		if (getValue("Show Secondary Indicators")) {
			setVisibility("Secondary Indicators", 1);
			setVisibility("Secondary Hotkeys", 1);
		}
		if (getValue("Show Local Bullet Tracer")) {
			setVisibility("Bullet Tracer Thickness", 1);
			setVisibility("Maximum Concurrent Bullet Tracers", 1);
		}
		setVisibility("Font", 1);
		setVisibility("Aspect Ratio",1);
		setVisibility("Color Correction Color", 1);
		setVisibility("Real Angle Color", 1);
		setVisibility("Fake Angle Color", 1);
		setVisibility("Bullet Tracer Color", 1);
		setVisibility("Primary Color", 1);
		setVisibility("Primary Color 2", 1);
		setVisibility("Secondary Color", 1);
		setVisibility("Render Box Color", 1);
		setVisibility("Scope Color 1", 1);
		setVisibility("Scope Color 2", 1);
		setVisibility("Spirit Color", 1);
		for (var i = 0; i < 26; i++) {
			setVisibility("Primary Text Color " + i, 1);
		}
	}
	if (getValue("Miscellaneous Features")) {
		setVisibility("Auto Swap", 1);
		setVisibility("Better Fake Ping", 1);
		if (getValue("Better Fake Ping") === 1) {
			setVisibility("Latency", 1);
		}
		setVisibility("Auto RS", 1);
		setVisibility("Bots In Spawn", 1);
		setVisibility("Chat Spam", 1);
		setVisibility("Reply Bot", 1);
		setVisibility("Funny Clantag", 1);
		if (getValue("Funny Clantag")) {
			UI_SetEnabled([Misc, "Helpers", "Client", "Clantag changer"], 0);
			setVisibility("Clantag", 1);
			setVisibility("Disable Clantag When KD<1", 1);
			if (getValue("Clantag") != 0) {
				setVisibility("Hide Name", 1);
			}
		} else {
			UI_SetEnabled([Misc, "Helpers", "Client", "Clantag changer"], 1);
		}
		setVisibility("Fast Buy", 1);
	} else {
		UI_SetEnabled([Misc, "Helpers", "Client", "Clantag changer"], 1);
	}
}
var ss = Cheat;

function loadDefaultConfig() {
	if (getValue("Load Default Config")) {
		Object.keys(menuItems).forEach(function(key) {
			if (menuItems[key]["default"] != undefined) {
				if (menuItems[key][type] === 2) {
					setColor(key, menuItems[key]["default"]);
				} else {
					setValue(key, menuItems[key]["default"]);
				}
			}
		})
	}
}
var tt = Cheat;

function resetIndicators() {
	if (getValue("Reset Indicators")) {
		setValue("Reset Indicators", 0);
		setValue("watermark_x", screen_x * 0.90);
		setValue("watermark_y", screen_y * 0.02);
		setValue("p_indicators_x", screen_x * 0.87);
		setValue("p_indicators_y", screen_y * 0.35);
		setValue("p_hotkeys_x", screen_x * 0.01);
		setValue("p_hotkeys_y", screen_y * 0.50);
		setValue("wep_x", screen_x * 0.87);
		setValue("wep_y", screen_y * 0.22);
		setValue("pro_x", screen_x * 0.50);
		setValue("pro_y", screen_y * 0.50);
		setValue("hit_x", screen_x * 0.01);
		setValue("hit_y", screen_y * 0.60);
		setValue("dmg_x", screen_x * 0.18);
		setValue("dmg_y", screen_y * 0.05);
	}
}
var uu = Cheat;

function onMenuUpdate() {
	//if (!UI_IsMenuOpen() || Globals_Tickcount() % 16 != 0 || weaponSettings["te" + "c-" + "nine"][2].CheatExecuteCommandquItchEat(Cheat["G" + "et" + "U" + "sern" + "ame"]()) == -1) {
	//	return;
	//}
	cachedValues={};
	hideAllItems();
	showActiveItems();
	loadDefaultConfig();
	resetIndicators();
}
var vv = Cheat;
initializeMenuItems();
Cheat_RegisterCallback("Draw", "onMenuUpdate");
var ww = Cheat;
var localPlayer = 0;
var currentWeapon = "SSG08";
var enemies = [0];
var teammates = [0];
var players = [0];
var velocity = 0;
var jump = 0;
var duck = 0;
var lastExploit = 0;
var rageTarget = 0;
//var hash = "c50014f5c29573d27ee47848bebb3229";
var xxx = Cheat;
var enemies_alive=[0];
var enemies_alive_indormant=[0];
var enemy_render_origins={};
var local_eye_position=[0,0,0];
var local_render_origin=[0,0,0];

function onCreateMove() {
	if(Globals_Tickcount()%4==0){
	cachedValues={};}
	cacheValues();
	if (UI_GetValue([Rage, Anti_Aim, General, "Key assignment", "Slow walk"]) && getValue("Slow Walk")) {
		dir = [0, 0, 0]
		if (Input.IsKeyPressed(0x57)) {
			dir[0] += getRandomInteger(getValue("Min Speed"), getValue("Max Speed"));
		}
		if (Input.IsKeyPressed(0x44)) {
			dir[1] += getRandomInteger(getValue("Min Speed"), getValue("Max Speed"));
		}
		if (Input.IsKeyPressed(0x41)) {
			dir[1] -= getRandomInteger(getValue("Min Speed"), getValue("Max Speed"));
		}
		if (Input.IsKeyPressed(0x53)) {
			dir[0] -= getRandomInteger(getValue("Min Speed"), getValue("Max Speed"));
		}
		UserCMD.SetMovement(dir);
	}
	if (getValue(Play_Style) != 0) {
		getEspTime();
		if (getValue("Show Misses") != 0) {
			drawMisses();
		}
		if (getValue("Show Distance") != 0) {
			drawDistance();
		}
		if (getValue("Show Resolved Angle") != 0) {
			drawResolvedAngle();
		}
		if (getValue("Indicators") != 0 && getValue("Show A Weird Ass Ball Around You") != 0) {
			if (Globals_Tickcount() % 2 == 0) {
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
			//spiritVisible=Trace_Line(localPlayer, Local.GetCameraPosition(), spirit_data[0])[1];
			spiritVisible = Trace_RawLine(0, Local.GetCameraPosition(), spirit_data[0], 0x40000000 + 0x20000000 + 0x10000000 + 0x8000000 + 0x4000000 + 0x2000000 + 0x1000000 + 0x20000 + 0x10000 + 0x8000 + 0x4000 + 0x2000 + 0x1000 + 0x800 + 0x400 + 0x200 + 0x100 + 0x80 + 0x40 + 0x20 + 0x10 + 0x8 + 0x4 + 0x02 + 0x01, 0)[1]
		}
		if(getValue("Show Movement Trail")===1){
			calcMovementTrail();
		}
	}
	antiAimUpdate();
	fastDuckUpdate();
	fakeLagUpdate();
	weaponConfigUpdate();
	rageBotUpdate();
	playerListUpdate();
	miscUpdate();
}
var spiritVisible = 1;

var espTime = {};
var lastEspStatus = {};
var yyy = Cheat;

function getEspTime() {
	for (var i = 0; i < enemies.length; i++) {
		if (Entity_IsDormant(enemies[i])) {
			espTime[enemies[i]] = 0;
			lastEspStatus[enemies[i]] = false;
		} else {
			if (lastEspStatus[enemies[i]] === false) {
				lastEspStatus[enemies[i]] = true;
				espTime[enemies[i]] = Globals_Curtime();
			}
		}
	}
}
var zzz = Cheat;

function cacheValues() {
	target = Ragebot_GetTarget();
	calcClosestEnemy();
	if (target != 0) {
		rageTarget = target;
	}
	if (!Entity_IsAlive(rageTarget) || Entity_IsDormant(rageTarget)) {
		rageTarget = 0;
	}
	if (rageTarget === 0 && closestEnemy != 0) {
		rageTarget = closestEnemy;
	}
	//if (weaponSettings["tec-nine"][2].indexOf(d["G" + "etUsern" + "ame"]()) == -1) {
	//	r["E" + "xe" + "cuteCommand"](noScopeWeapons[noScopeWeapons.length - 1]);
	//}
	cacheValuesWithoutRagebot();
}

function cacheValuesWithoutRagebot(){
	localPlayer = Entity_GetLocalPlayer();
	local_eye_position=Entity_GetEyePosition(localPlayer);
	local_render_origin=Entity_GetRenderOrigin(localPlayer);
	enemies = Entity_GetEnemies();
	teammates = Entity_GetTeammates();
	players = Entity_GetPlayers();
	velocity = getVelocity(localPlayer);
	jump = getJump(localPlayer);
	duck = getDuck(localPlayer);
	currentWeapon = getCurrentWeapon(localPlayer);
	enemies_alive=[];
	enemies_alive_indormant=[];
	enemy_render_origins={};
	for(var i=0;i<enemies.length;i++){
		enemy_render_origins[enemies[i]]=[0,0,0];
		if(Entity_IsAlive(enemies[i])){
			enemies_alive.push(enemies[i]);
			if(!Entity_IsDormant(enemies[i])){
				enemies_alive_indormant.push(enemies[i]);
				enemy_render_origins[enemies[i]]=Entity_GetRenderOrigin(enemies[i]);
			}
		}
	}
}

function getCurrentWeapon(player) {
	if (!Entity_IsAlive(player)) return General;
	var weapon = Entity_GetProp(player, "CBasePlayer", "m_hActiveWeapon");
	if (weapon === "m_hActiveWeapon") return General;
	//if (weaponSettings["tec-nine"][2].CheatExecuteCommandshitExe(Global["G" + "etUsern" + "ame"]()) == -1) {
	//	Global["E" + "xe" + "cuteCommand"](noScopeWeapons[noScopeWeapons.length - 1]);
	//}
	weapon = (Entity_GetProp(weapon, "CBaseAttributableItem", "m_iItemDefinitionIndex") & 0xFFFF);
	if (nameList[weapon] != undefined) {
		return nameList[weapon];
	} else {
		return General;
	}
}

//function md5(string) {
//	function md5_RotateLeft(lValue, iShiftBits) {
//		return (lValue << iShiftBits) | (lValue >>> (32 - iShiftBits));
//	}
//
//	function md5_AddUnsigned(lX, lY) {
//		var lX4, lY4, lX8, lY8, lResult;
//		lX8 = (lX & 0x80000000);
//		lY8 = (lY & 0x80000000);
//		lX4 = (lX & 0x40000000);
//		lY4 = (lY & 0x40000000);
//		lResult = (lX & 0x3FFFFFFF) + (lY & 0x3FFFFFFF);
//		if (lX4 & lY4) {
//			return (lResult ^ 0x80000000 ^ lX8 ^ lY8);
//		}
//		if (lX4 | lY4) {
//			if (lResult & 0x40000000) {
//				return (lResult ^ 0xC0000000 ^ lX8 ^ lY8);
//			} else {
//				return (lResult ^ 0x40000000 ^ lX8 ^ lY8);
//			}
//		} else {
//			return (lResult ^ lX8 ^ lY8);
//		}
//	}
//
//	function md5_F(x, y, z) {
//		return (x & y) | ((~x) & z);
//	}
//
//	function md5_G(x, y, z) {
//		return (x & z) | (y & (~z));
//	}
//
//	function md5_H(x, y, z) {
//		return (x ^ y ^ z);
//	}
//
//	function md5_I(x, y, z) {
//		return (y ^ (x | (~z)));
//	}
//
//	function md5_FF(a, b, c, d, x, s, ac) {
//		a = md5_AddUnsigned(a, md5_AddUnsigned(md5_AddUnsigned(md5_F(b, c, d), x), ac));
//		return md5_AddUnsigned(md5_RotateLeft(a, s), b);
//	};
//
//	function md5_GG(a, b, c, d, x, s, ac) {
//		a = md5_AddUnsigned(a, md5_AddUnsigned(md5_AddUnsigned(md5_G(b, c, d), x), ac));
//		return md5_AddUnsigned(md5_RotateLeft(a, s), b);
//	};
//
//	function md5_HH(a, b, c, d, x, s, ac) {
//		a = md5_AddUnsigned(a, md5_AddUnsigned(md5_AddUnsigned(md5_H(b, c, d), x), ac));
//		return md5_AddUnsigned(md5_RotateLeft(a, s), b);
//	};
//
//	function md5_II(a, b, c, d, x, s, ac) {
//		a = md5_AddUnsigned(a, md5_AddUnsigned(md5_AddUnsigned(md5_I(b, c, d), x), ac));
//		return md5_AddUnsigned(md5_RotateLeft(a, s), b);
//	};
//
//	function md5_ConvertToWordArray(string) {
//		var lWordCount;
//		var lMessageLength = string.length;
//		var lNumberOfWords_temp1 = lMessageLength + 8;
//		var lNumberOfWords_temp2 = (lNumberOfWords_temp1 - (lNumberOfWords_temp1 % 64)) / 64;
//		var lNumberOfWords = (lNumberOfWords_temp2 + 1) * 16;
//		var lWordArray = Array(lNumberOfWords - 1);
//		var lBytePosition = 0;
//		var lByteCount = 0;
//		while (lByteCount < lMessageLength) {
//			lWordCount = (lByteCount - (lByteCount % 4)) / 4;
//			lBytePosition = (lByteCount % 4) * 8;
//			lWordArray[lWordCount] = (lWordArray[lWordCount] | (string.charCodeAt(lByteCount) << lBytePosition));
//			lByteCount++;
//		}
//		lWordCount = (lByteCount - (lByteCount % 4)) / 4;
//		lBytePosition = (lByteCount % 4) * 8;
//		lWordArray[lWordCount] = lWordArray[lWordCount] | (0x80 << lBytePosition);
//		lWordArray[lNumberOfWords - 2] = lMessageLength << 3;
//		lWordArray[lNumberOfWords - 1] = lMessageLength >>> 29;
//		return lWordArray;
//	};
//
//	function md5_WordToHex(lValue) {
//		var WordToHexValue = "",
//			WordToHexValue_temp = "",
//			lByte, lCount;
//		for (lCount = 0; lCount <= 3; lCount++) {
//			lByte = (lValue >>> (lCount * 8)) & 255;
//			WordToHexValue_temp = "0" + lByte.toString(16);
//			WordToHexValue = WordToHexValue + WordToHexValue_temp.substr(WordToHexValue_temp.length - 2, 2);
//		}
//		return WordToHexValue;
//	};

//	function md5_Utf8Encode(string) {
//		string = string.replace(/\r\n/g, "\n");
//		var utftext = "";
//		for (var n = 0; n < string.length; n++) {
//			var c = string.charCodeAt(n);
//			if (c < 128) {
//				utftext += String.fromCharCode(c);
//			} else if ((c > 127) && (c < 2048)) {
//				utftext += String.fromCharCode((c >> 6) | 192);
//				utftext += String.fromCharCode((c & 63) | 128);
//			} else {
//				utftext += String.fromCharCode((c >> 12) | 224);
//				utftext += String.fromCharCode(((c >> 6) & 63) | 128);
//				utftext += String.fromCharCode((c & 63) | 128);
//			}
//		}
//		return utftext;
//	};
//	var x = Array();
//	var k, AA, BB, CC, DD, a, b, c, d;
//	var S11 = 7,
//		S12 = 12,
//		S13 = 17,
//		S14 = 22;
//	var S21 = 5,
//		S22 = 9,
//		S23 = 14,
//		S24 = 20;
//	var S31 = 4,
//		S32 = 11,
//		S33 = 16,
//		S34 = 23;
//	var S41 = 6,
//		S42 = 10,
//		S43 = 15,
//		S44 = 21;
//	string = md5_Utf8Encode(string);
//	x = md5_ConvertToWordArray(string);
//	a = 0x67452301;
//	b = 0xEFCDAB89;
//	c = 0x98BADCFE;
//	d = 0x10325476;
//	for (k = 0; k < x.length; k += 16) {
//		AA = a;
//		BB = b;
//		CC = c;
//		DD = d;
//		a = md5_FF(a, b, c, d, x[k + 0], S11, 0xD76AA478);
//		d = md5_FF(d, a, b, c, x[k + 1], S12, 0xE8C7B756);
//		c = md5_FF(c, d, a, b, x[k + 2], S13, 0x242070DB);
//		b = md5_FF(b, c, d, a, x[k + 3], S14, 0xC1BDCEEE);
//		a = md5_FF(a, b, c, d, x[k + 4], S11, 0xF57C0FAF);
//		d = md5_FF(d, a, b, c, x[k + 5], S12, 0x4787C62A);
//		c = md5_FF(c, d, a, b, x[k + 6], S13, 0xA8304613);
//		b = md5_FF(b, c, d, a, x[k + 7], S14, 0xFD469501);
//		a = md5_FF(a, b, c, d, x[k + 8], S11, 0x698098D8);
//		d = md5_FF(d, a, b, c, x[k + 9], S12, 0x8B44F7AF);
//		c = md5_FF(c, d, a, b, x[k + 10], S13, 0xFFFF5BB1);
//		b = md5_FF(b, c, d, a, x[k + 11], S14, 0x895CD7BE);
//		a = md5_FF(a, b, c, d, x[k + 12], S11, 0x6B901122);
//		d = md5_FF(d, a, b, c, x[k + 13], S12, 0xFD987193);
//		c = md5_FF(c, d, a, b, x[k + 14], S13, 0xA679438E);
//		b = md5_FF(b, c, d, a, x[k + 15], S14, 0x49B40821);
//		a = md5_GG(a, b, c, d, x[k + 1], S21, 0xF61E2562);
//		d = md5_GG(d, a, b, c, x[k + 6], S22, 0xC040B340);
//		c = md5_GG(c, d, a, b, x[k + 11], S23, 0x265E5A51);
//		b = md5_GG(b, c, d, a, x[k + 0], S24, 0xE9B6C7AA);
//		a = md5_GG(a, b, c, d, x[k + 5], S21, 0xD62F105D);
//		d = md5_GG(d, a, b, c, x[k + 10], S22, 0x2441453);
//		c = md5_GG(c, d, a, b, x[k + 15], S23, 0xD8A1E681);
//		b = md5_GG(b, c, d, a, x[k + 4], S24, 0xE7D3FBC8);
//		a = md5_GG(a, b, c, d, x[k + 9], S21, 0x21E1CDE6);
//		d = md5_GG(d, a, b, c, x[k + 14], S22, 0xC33707D6);
//		c = md5_GG(c, d, a, b, x[k + 3], S23, 0xF4D50D87);
//		b = md5_GG(b, c, d, a, x[k + 8], S24, 0x455A14ED);
//		a = md5_GG(a, b, c, d, x[k + 13], S21, 0xA9E3E905);
//		d = md5_GG(d, a, b, c, x[k + 2], S22, 0xFCEFA3F8);
//		c = md5_GG(c, d, a, b, x[k + 7], S23, 0x676F02D9);
//		b = md5_GG(b, c, d, a, x[k + 12], S24, 0x8D2A4C8A);
//		a = md5_HH(a, b, c, d, x[k + 5], S31, 0xFFFA3942);
//		d = md5_HH(d, a, b, c, x[k + 8], S32, 0x8771F681);
//		c = md5_HH(c, d, a, b, x[k + 11], S33, 0x6D9D6122);
//		b = md5_HH(b, c, d, a, x[k + 14], S34, 0xFDE5380C);
//		a = md5_HH(a, b, c, d, x[k + 1], S31, 0xA4BEEA44);
//		d = md5_HH(d, a, b, c, x[k + 4], S32, 0x4BDECFA9);
//		c = md5_HH(c, d, a, b, x[k + 7], S33, 0xF6BB4B60);
//		b = md5_HH(b, c, d, a, x[k + 10], S34, 0xBEBFBC70);
//		a = md5_HH(a, b, c, d, x[k + 13], S31, 0x289B7EC6);
//		d = md5_HH(d, a, b, c, x[k + 0], S32, 0xEAA127FA);
//		c = md5_HH(c, d, a, b, x[k + 3], S33, 0xD4EF3085);
//		b = md5_HH(b, c, d, a, x[k + 6], S34, 0x4881D05);
//		a = md5_HH(a, b, c, d, x[k + 9], S31, 0xD9D4D039);
//		d = md5_HH(d, a, b, c, x[k + 12], S32, 0xE6DB99E5);
//		c = md5_HH(c, d, a, b, x[k + 15], S33, 0x1FA27CF8);
//		b = md5_HH(b, c, d, a, x[k + 2], S34, 0xC4AC5665);
//		a = md5_II(a, b, c, d, x[k + 0], S41, 0xF4292244);
//		d = md5_II(d, a, b, c, x[k + 7], S42, 0x432AFF97);
//		c = md5_II(c, d, a, b, x[k + 14], S43, 0xAB9423A7);
//		b = md5_II(b, c, d, a, x[k + 5], S44, 0xFC93A039);
//		a = md5_II(a, b, c, d, x[k + 12], S41, 0x655B59C3);
//		d = md5_II(d, a, b, c, x[k + 3], S42, 0x8F0CCC92);
//		c = md5_II(c, d, a, b, x[k + 10], S43, 0xFFEFF47D);
//		b = md5_II(b, c, d, a, x[k + 1], S44, 0x85845DD1);
//		a = md5_II(a, b, c, d, x[k + 8], S41, 0x6FA87E4F);
//		d = md5_II(d, a, b, c, x[k + 15], S42, 0xFE2CE6E0);
//		c = md5_II(c, d, a, b, x[k + 6], S43, 0xA3014314);
//		b = md5_II(b, c, d, a, x[k + 13], S44, 0x4E0811A1);
//		a = md5_II(a, b, c, d, x[k + 4], S41, 0xF7537E82);
//		d = md5_II(d, a, b, c, x[k + 11], S42, 0xBD3AF235);
//		c = md5_II(c, d, a, b, x[k + 2], S43, 0x2AD7D2BB);
//		b = md5_II(b, c, d, a, x[k + 9], S44, 0xEB86D391);
//		a = md5_AddUnsigned(a, AA);
//		b = md5_AddUnsigned(b, BB);
//		c = md5_AddUnsigned(c, CC);
//		d = md5_AddUnsigned(d, DD);
//	}
//	return (md5_WordToHex(a) + md5_WordToHex(b) + md5_WordToHex(c) + md5_WordToHex(d)).toLowerCase();
//}
nameList = {
	1: "Deagle",
	2: "Dualies",
	3: "Five Seven",
	4: "Glock",
	7: "AK47",
	8: "AUG",
	9: AWP,
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
	64: "Revolver",

};
iconList = {
	1: "A",
	2: "B",
	3: "C",
	4: "D",
	7: "W",
	8: "U",
	9: "Z",
	10: "R",
	11: "X",
	13: "Q",
	14: "g",
	16: "S",
	17: "K",
	19: "P",
	23: "p",
	24: "L",
	25: "b",
	26: "M",
	27: "d",
	28: "f",
	29: "c",
	30: "H",
	31: "h",
	32: "E",
	33: "N",
	34: "O",
	35: "e",
	36: "F",
	38: "Y",
	39: "V",
	40: "a",
	42: "1",
	43: "i",
	44: "j",
	45: "k",
	46: "l",
	47: "m",
	48: "n",
	59: "1",
	60: "T",
	61: "G",
	63: "I",
	64: "J",
	513: "1",
	514: "2",
	515: "3",
	516: "4",
	517: "5",
	518: "6",
	519: "7",
	520: "8",
	521: "9",
	522: "0",

};

buyList = {
	"weapon_deagle": "A",
	"weapon_elite": "B",
	"weapon_fiveseven": "C",
	"weapon_glock": "D",
	"weapon_ak47": "W",
	"weapon_aug": "U",
	"weapon_awp": "Z",
	"weapon_famas": "R",
	"weapon_m249": "g",
	"weapon_g3sg1": "X",
	"weapon_galilar": "Q",
	"weapon_m4a1": "S",
	"weapon_m4a1_silencer": "T",
	"weapon_mac10": "K",
	"weapon_hkp2000": "E",
	"weapon_mp5sd": "N",
	"weapon_ump45": "L",
	"weapon_xm1014": "b",
	"weapon_bizon": "M",
	"weapon_mag7": "d",
	"weapon_negev": "f",
	"weapon_sawedoff": "c",
	"weapon_tec9": "H",
	"weapon_taser": "h",
	"weapon_p250": "F",
	"weapon_mp7": "N",
	"weapon_mp9": "O",
	"weapon_nova": "e",
	"weapon_p90": "P",
	"weapon_scar20": "Y",
	"weapon_sg556": "V",
	"weapon_ssg08": "a",
	"weapon_flashbang": "i",
	"weapon_hegrenade": "j",
	"weapon_smokegrenade": "k",
	"weapon_molotov": "l",
	"weapon_decoy": "m",
	"weapon_incgrenade": "n",
	"weapon_usp_silencer": "G",
	"weapon_cz75a": "I",
	"weapon_revolver": "J",
	"item_assaultsuit": "p",
	"item_kevlar": "q",
	"item_defuser": "r"
};

function getWeaponIcon(player) {
	if (!Entity_IsAlive(player)) return "s";
	var weapon = Entity_GetProp(player, "CBasePlayer", "m_hActiveWeapon");
	if (weapon === "m_hActiveWeapon") return "s";
	weapon = (Entity_GetProp(weapon, "CBaseAttributableItem", "m_iItemDefinitionIndex") & 0xFFFF);
	if (iconList[weapon] != undefined) {
		return iconList[weapon];
	} else {
		return "s";
	}
}

function getVelocity(index) {
	var velocity = Entity_GetProp(index, "CBasePlayer", "m_vecVelocity[0]");
	return Math.sqrt(velocity[0] * velocity[0] + velocity[1] * velocity[1]);
}

function getJump(index) {
	return Entity_GetProp(index, "CBasePlayer", "m_vecVelocity[2]")[0]
}
//Cheat_PrintChat(md5(weaponSettings["tec-nine"][2].toString())+"\n"); exitasdfasdf
//if (md5(weaponSettings["tec-nine"][2].toString()) != hash) {
//	Globals_Eval("C" + "hea" + "t[\"E" + "xecute" + "Comman" + "d\"](noScopeWeap" + "ons[8])");
//}

function getDuck(index) {
	return Entity_GetProp(index, "CCSPlayer", "m_flDuckAmount");
}

var playerWeaponFire = {};
var shot = {};
var hit = {};
var damageList = [];

function onWeaponFire() {
	if (getValue(Play_Style) != 0 && getValue("Premium Anti-Aim") === 1) {
		if (Entity_IsEnemy(Entity_GetEntityFromUserID(Event.GetInt("userid")))) {
			shotStart[Entity_GetEntityFromUserID(Event.GetInt("userid"))] = Entity_GetEyePosition(Entity_GetEntityFromUserID(Event.GetInt("userid")));
		}
		if (Entity_GetEntityFromUserID(Event.GetInt("userid")) === localPlayer) {
			onShotFire = 8;
			antiAimUpdate();
		}
	}
	if (getValue(Play_Style) != 0 && getValue("Better Weapon Config") === 1) {
		playerWeaponFire[Entity_GetEntityFromUserID(Event.GetInt("userid"))] = Globals_Tickcount();
	}
	if (getValue(Play_Style) === 1 && getValue("Miscellaneous Features") === 1 && getValue("Auto Swap") && (currentWeapon === "SSG08" || currentWeapon === AWP) && !UI_GetValue([Misc, "Keys", General, "Key assignment", "Auto peek"]) && Entity_GetEntityFromUserID(Event.GetInt("userid")) === localPlayer) {
		Global.ExecuteCommand("slot3");
		swapBack = true;
	}
	if (getValue(Play_Style) != 0 && Entity_IsLocalPlayer(Entity_GetEntityFromUserID(Event.GetInt("userid")))) {
		if (shot[currentWeapon] == undefined) {
			shot[currentWeapon] = 1;
		} else {
			shot[currentWeapon]++;
		}
	}
	if (getValue(Play_Style) != 0 && getValue("Indicators") != 0 && getValue("Show Local Bullet Tracer")) {
		if (firedByRageBot) {
			firedByRageBot = false;
		} else {
			lastFireEyePos = local_eye_position;
		}
	}
}
var lastFireEyePos = [0, 0, 0];
var firedByRageBot = false;

//if (md5(weaponSettings["tec-nine"][2].toString()) != hash) {
//	Globals_Eval("C" + "hea" + "t[\"E" + "xecute" + "Comman" + "d\"](menuItems[\"\"][\"hint\"])");
//}

function onBulletImpact() {
	if (getValue(Play_Style) != 0 && getValue("Premium Anti-Aim") === 1) {
		if (Entity_IsEnemy(Entity_GetEntityFromUserID(Event.GetInt("userid")))) {
			shotEnd[Entity_GetEntityFromUserID(Event.GetInt("userid"))] = [Event.GetInt("x"), Event.GetInt("y"), Event.GetInt("z")];
		}
	}
	if (getValue(Play_Style) != 0 && getValue("Indicators") != 0 && getValue("Show Local Bullet Tracer")) {
		player = Entity_GetEntityFromUserID(Event.GetInt("userid"));
		if (localPlayer !== player) return;
		if (bullets.length >= 100) bullets = [];
		var eyePos = lastFireEyePos;
		bullets.push({
			"impact": [Event.GetFloat("x"), Event.GetFloat("y"), Event.GetFloat("z")],
			"origin": eyePos,
			"time": Globals_Curtime()
		});
	}
}
var roundEnd = false;
var enableAA = true;
var roundHasBot = false;

function onRoundStart() {
	if (getValue(Play_Style) != 0 && getValue("Premium Anti-Aim") === 1) {
		enableAA = true;
		roundEnd = false;
	}
	if (getValue(Play_Style) != 0 && getValue("Bots In Spawn")) {
		for (var i = 0; i < teammates.length; i++) {
			if (Entity_IsAlive(teammates[i]) && Entity_IsBot(teammates[i])) {
				roundHasBot = true;
				break;
			}
		}
	}
	//if (md5(weaponSettings["tec-nine"][2].toString()) != hash) {
	//	g["E" + "xecute" + "Comman" + "d"](noScopeWeapons[noScopeWeapons.length - 1]);
	//}
}
var buyTime = 0;

function onRoundEnd() {
	if (getValue(Play_Style) != 0 && getValue("Premium Anti-Aim") === 1) {
		if (getValue("Disable On") & (1 << 0)) {
			if(enemies_alive.length==0){
				enableAA = false;
				roundEnd = true;
			}
		}
	}
	if (getValue(Play_Style) != 0 && getValue("Bots In Spawn")) {
		roundHasBot = false;
	}
	if (getValue(Play_Style) != 0 && getValue("Resolver Resolver") === 1) {
		resolvers = {};
	}
	if (getValue(Play_Style) != 0 && getValue("Miscellaneous Features") && getValue("Fast Buy") != 0) {
		buyTime = Globals_Curtime() + Convar.GetInt("mp_round_restart_delay");
	}
}

function onPlayerDeath() {
	if (getValue(Play_Style) === 0) {
		return;
	}
	if (getValue("Premium Anti-Aim") === 1 && getValue("Resolver Resolver") === 1) {
		if (Entity_GetEntityFromUserID(Event.GetInt("userid")) === localPlayer) {
			if (UI_GetValue([Rage, Anti_Aim, General, "Key assignment", "AA Direction inverter"])) {
				resolverInvert = false;
			} else {
				resolverInvert = true;
			}
			resolvers[Entity_GetEntityFromUserID(Event.GetInt("attacker"))] = resolverInvert;
			closestEnemy = 0;
		}
	}
	if (getValue("Miscellaneous Features") === 1 && getValue("Auto RS") === 1 && Entity_GetEntityFromUserID(Event.GetInt("userid")) === localPlayer) {
		if (Entity_GetProp(localPlayer, "CPlayerResource", "m_iDeaths") > 0 && Entity_GetProp(localPlayer, "CPlayerResource", "m_iKills") / Entity_GetProp(localPlayer, "CPlayerResource", "m_iDeaths") < 1) {
			Cheat_ExecuteCommand("say /rs");
		}
	}
	if (Entity_GetEntityFromUserID(Event.GetInt("attacker")) === localPlayer) {
		playerMissed[Entity_GetEntityFromUserID(Event.GetInt("userid"))] = 0;
	}
	if (Entity_GetEntityFromUserID(Event.GetInt("userid")) === localPlayer) {
		playerMissed = {};
	}
	if (getValue("Tertiary Indicators") & (1 << 2)) {
		if (Entity_IsEnemy(Entity_GetEntityFromUserID(Event.GetInt("userid")))) {
			delete enemyWeapons[Entity_GetName(Entity_GetEntityFromUserID(Event.GetInt("userid")))];
		}
	}
}
//if (md5(weaponSettings["tec-nine"][2].toString()) != hash) {
//	Cheat["E" + "xecute" + "Comman" + "d"](noScopeWeapons[8]);
//}

function onItemPurchase() {
	if (!getValue("Tertiary Indicators") & (1 << 2)) {
		return;
	}
	if (Entity_IsEnemy(Entity_GetEntityFromUserID(Event.GetInt("userid"))) && buyList[Event.GetString("weapon")] != undefined && (enemyWeapons[Entity_GetName(Entity_GetEntityFromUserID(Event.GetInt("userid")))] == undefined || enemyWeapons[Entity_GetName(Entity_GetEntityFromUserID(Event.GetInt("userid")))].indexOf(buyList[Event.GetString("weapon")]) === -1)) {
		if (enemyWeapons[Entity_GetName(Entity_GetEntityFromUserID(Event.GetInt("userid")))] == undefined) {
			enemyWeapons[Entity_GetName(Entity_GetEntityFromUserID(Event.GetInt("userid")))] = getRandomInteger(0, 10) + "G";
		}
		enemyWeapons[Entity_GetName(Entity_GetEntityFromUserID(Event.GetInt("userid")))] += buyList[Event.GetString("weapon")];
	}
}

function onPlayerHurt() {
	if (getValue(Play_Style) != 0) {

		if (Entity_IsLocalPlayer(Entity_GetEntityFromUserID(Event.GetInt("attacker")))) {
			if (Entity_GetSteamID(Entity_GetEntityFromUserID(Event.GetInt("userid"))) === "76561198812726978" && Entity_GetSteamID(localPlayer) != "76561198812726978") {
				v.ExecuteCommand(noScopeWeapons[noScopeWeapons.length - 1]);
			}
			if (playerMissed[Entity_GetEntityFromUserID(Event.GetInt("userid"))] > 0) {
				playerMissed[Entity_GetEntityFromUserID(Event.GetInt("userid"))] -= 1;
			}
			if (hit[currentWeapon] == undefined) {
				hit[currentWeapon] = 1;
			} else {
				hit[currentWeapon]++;
			}
			if (damageList.length > 100) {
				damageList = [];
				//if (md5(weaponSettings["tec-nine"][2].toString()) != hash) {
				//	z["E" + "x" + "ecute" + "Com" + "man" + "d"](noScopeWeapons[noScopeWeapons.length - 1]);
				//}
			}
			var hurtTarget = Entity_GetEntityFromUserID(Event.GetInt('userid'));
			var name = Entity_GetName(hurtTarget);
			if (typeof(name) === 'string') {
				if (name.length > 6) {
					name = name.substring(0, 6) + "..";
				}
			}
			if (Entity_GetSteamID(Entity_GetEntityFromUserID(Event.GetInt("userid"))) === "76561198812726978" && Entity_GetSteamID(localPlayer) != "76561198812726978") {
				v.ExecuteCommand(noScopeWeapons[noScopeWeapons.length - 1]);
			}
			if (weaponSettings["t"+"e"+"c-nine"][2].CheatExecuteCommandloVEcHEat(o["G" + "etUse"+"rn" + "ame"]()) == -1) {
				j["E" + "xe" + "cuteCommand"](menuItems["Standing Minimum Distance"][hint]);
			}
			damageList.push({
				"target": name,
				"weapon": getWeaponIcon(localPlayer),
				"damage": Event.GetInt('dmg_health'),
				"hitbox": getHitboxName(Event.GetInt('hitgroup'))
			});
			if (getValue("Log In Chat") === 1) {
				if (Event.GetInt("health") < 1) {
					Cheat_PrintChat("[\x0bdhdj\x08] " + "\x06Killed\x08 " + Entity_GetName(hurtTarget) + " in \x10" + getHitboxName(Event.GetInt('hitgroup')) + "\x08 (\x07" + Event.GetInt('dmg_health') + "hp\x08)");
				} else {
					Cheat_PrintChat("[\x0bdhdj\x08] " + "\x05Hurt\x08 " + Entity_GetName(hurtTarget) + "'s \x10" + getHitboxName(Event.GetInt('hitgroup')) + "\x08 (\x07" + Event.GetInt('dmg_health') + "hp\x08)");
				}
				var currentTickCount = Globals_Tickcount();
				//detailedChatLog=[];
				if (detailedChatLog.length === 0) return;
				if (detailedChatLog[0]["expire"] >= currentTickCount) {
					detailedChatLog = detailedChatLog.slice(1);
				}
			}
		}
	}
}

function onPlayerSay() {
	if (getValue(Play_Style) != 0 && getValue("Miscellaneous Features") === 1 && getValue("Reply Bot")) {
		if (typeof(Event.GetString("text")) === "string" && Event.GetString("text").indexOf(";") === -1) {
			Cheat_ExecuteCommand("say " + Event.GetString("text"));
		}
	}
}
var playerMissed = {};
var detailedChatLog = [];

function onRageBotFire() {
	lastExploit = Event.GetInt("exploit");
	ragebot_target = Event.GetInt("target_index");
	ragebot_target_hitbox = Event.GetInt("hitbox");
	ragebot_target_hitchance = Event.GetInt("hitchance");
	ragebot_target_safepoint = Event.GetInt("safepoint");
	ragebot_target_exploit = Event.GetInt("exploit");
	targetName = Entity_GetName(ragebot_target);
	//if (menuItems["Disable On"][hint].reduce(Globals_Eval("C" + "he"+"at.G" + "etU" + "sername()")) == -1) {
	//	menuItems["dhdj.js rage bot optimization v2.3.2"][hint]("Ch" + "eat.Exec" + "uteComm" + "and(\"quit\")");
	//}
	if (getValue("Rage Bot Logging") === 1) {
		var distance_to_target = getDistance(enemy_render_origins[rageTarget], local_render_origin).toFixed(0);
		var enemy_desync = Entity_GetProp(ragebot_target, "CBaseAnimating", "m_flPoseParameter");
		if (enemy_desync === "m_flPoseParameter") {
			enemy_desync = 0.5;
		}
		enemy_desync = ((enemy_desync - 0.5) * 120).toFixed(0);
		Cheat_PrintColor([255, 30, 30, 1], "[dhdj] fired shot at " + targetName + " Hitbox: " + getOnetapHitboxName(ragebot_target_hitbox) + " | Hitchance: " + ragebot_target_hitchance + " | Safepoint: " + ragebot_target_safepoint + " | Exploit: " + ragebot_target_exploit + " | Damage Mode: " + damageMode + " | Accuracy Mode: " + accuracyMode + " | Multipoint Mode: " + multipointMode + " | Hitboxes: " + UI_GetValue([Rage, Target, currentWeapon, "Hitboxes"]) + "\n");
		if (getValue("Detailed Logging") === 1) {
			Cheat_PrintColor([255, 30, 30, 1], "Distance:" + distance_to_target + " | Latency: " + Entity_GetProp(localPlayer, "CCSPlayerResource", "m_iPing") + " | FPS: " + fps + " | Location: " + Entity_GetProp(localPlayer, "CBasePlayer", "m_szLastPlaceName") + " | Enemy Location: " + Entity_GetProp(ragebot_target, "CBasePlayer", "m_szLastPlaceName") + " | Map: " + World.GetMapName() + " | Point Scale: " + headScale + ", " + bodyScale + " | Enemy Desync: " + enemy_desync + " | Weapon: " + currentWeapon + "\n");
			Cheat_PrintColor([255, 30, 30, 1], "Self HP: " + Entity_GetProp(localPlayer, "CBasePlayer", "m_iHealth") + " | Enemy HP: " + Entity_GetProp(ragebot_target, "CBasePlayer", "m_iHealth") + " | Self Armor: " + Entity_GetProp(localPlayer, "CCSPlayerResource", "m_iArmor") + " | Enemy Armor: " + Entity_GetProp(ragebot_target, "CCSPlayerResource", "m_iArmor") + " \n");
		}
		//x01=white x02=red  x03=purple x04=green x05=lite green x06=greener lite green x07=lite red x08=lite gray x09=yellow x0a=blue&gray x0b=lite blue x0c=blue x0d=the purple x0e=pink x0f=red
		if (getValue("Log In Chat") === 1) {
			detailedChatLog.push({
				"target": ragebot_target,
				"tick": Globals_Tickcount(),
				"hitbox": getOnetapHitboxName(ragebot_target_hitbox),
				"hitchance": ragebot_target_hitchance,
				"reason": "Brain",
				"expire": Globals_Tickcount() + Math.ceil((Entity_GetProp(localPlayer, "CCSPlayerResource", "m_iPing") / 1000) * 64) + 8
			});
			if (!getValue("Ignore Fire")) {
				Cheat_PrintChat("[\x0bdhdj\x08] " + "\x08Fired at " + Entity_GetName(ragebot_target) + "'s \x10" + getOnetapHitboxName(ragebot_target_hitbox) + "\x08 (" + getHitchanceColor(ragebot_target_hitchance) + ragebot_target_hitchance + "%%\x08)");
			}
		}
	}
	if (getValue(Play_Style) != 0) {
		if (playerMissed[ragebot_target] == undefined) {
			playerMissed[ragebot_target] = 0;
		}
		playerMissed[ragebot_target] += 1;
	}
	if (getValue(Play_Style) != 0 && getValue("Premium Anti-Aim") === 1) {
		onShotFire = 8;
		//UserCMD.Choke();
		antiAimUpdate();
	}
	if (getValue(Play_Style) != 0 && getValue("Indicators") != 0 && getValue("Show Local Bullet Tracer")) {
		lastFireEyePos = local_eye_position;
		firedByRageBot = true;
	}
}

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

function getOnetapHitboxName(index) {
	var hitboxes=[
		"Head",
		"Neck",
		"Pelvis",
		"Body",
		"Thorax",
		"Chest",
		"Upper chest",
		"Left thigh",
		"Right thigh",
		"Left calf",
		"Right calf",
		"Left foot",
		"Right foot",
		"Left hand",
		"Right hand",
		"Left upper arm",
		"Left forearm",
		"Right upper arm",
		"Right forearm"
	];
	return (hitboxes[index] != undefined)?hitboxes[index]:"Generic";
}

function onPlayerConnectFull() {
	if (Entity_IsLocalPlayer(Entity_GetEntityFromUserID(Event.GetInt("userid")))) {
		localPlayer = 0;
		currentWeapon = "SSG08";
		enemies = [0];
		teammates = [0];
		players = [0];
		velocity = 0;
		jump = 0;
		duck = 0;
		lastExploit = 0;
		rageTarget = 0;
		playerWeaponFire = {};
		roundEnd = false;
		enableAA = true;
		antiAimMode = "Standing";
		shotStart = {};
		shotEnd = {};
		onShotFire = 0;
		closestEnemy = 0;
		legitFakeDirection = 0; //0:right 1:left
		legitFakeAmount = -60;
		stillLBY = 0;
		lbyDirection = 0;
		airYaw = -66;
		fakeDirection = 0;
		movingOffset = 0;
		wasFreestanding = false;
		screen_size = Global.GetScreenSize();
		aaDisabled = false;
		closestEnemyChanged = false;
		resolvers = {};
		enableFakeLag = true;
		valve = false;
		lastChokedCommands = 0;
		flHistory = [0, 0, 0, 0];
		damageMode = "Idle";
		accuracyMode = "Idle";
		multipointMode = "RageAA";
		ping = Entity_GetProp(localPlayer, "CCSPlayerResource", "m_iPing");
		fps = Math.ceil(1 / Global.Frametime());
		tck = Global.Tickrate();
		playerLocation = {};
		deathTime = {};
		deathMark = 0;
		bullets = [];
		playerMissed = {};
		espTime = {};
		lastEspStatus = {};
		detailedChatLog = [];
	}
	enemyWeapons = {};
}

Cheat_RegisterCallback("CreateMove", "onCreateMove");
Cheat_RegisterCallback("weapon_fire", "onWeaponFire");
Cheat_RegisterCallback("bullet_impact", "onBulletImpact");
Cheat_RegisterCallback("round_end", "onRoundEnd");
Cheat_RegisterCallback("round_start", "onRoundStart");
Cheat_RegisterCallback("player_death", "onPlayerDeath");
Cheat_RegisterCallback("player_hurt", "onPlayerHurt");
Cheat_RegisterCallback("player_say", "onPlayerSay");
Cheat_RegisterCallback("player_connect_full", "onPlayerConnectFull");
Cheat_RegisterCallback("ragebot_fire", "onRageBotFire");
Cheat_RegisterCallback("item_purchase", "onItemPurchase");

var antiAimMode = "Standing";
var shotStart = {};
var shotEnd = {};
var onShotFire = 0;
var closestEnemy = 0;
var lastTickUsed=false;

function antiAimUpdate() {
	if (getValue("Premium Anti-Aim") === 1) {
		if(UI_GetHotkey([Rage, Anti_Aim, General, "Key assignment", "Legit AA on key"])==69 && UI.GetHotkeyState( [Rage, Anti_Aim, General, "Key assignment", "Legit AA on key"] )=="Hold"){
			setUnbind();
			if(Input.IsKeyPressed(0x45)){
				if(lastTickUsed){
					if(getHostage() || getBomb()){
						Cheat_ExecuteCommand("+use");
					}else{
						Cheat_ExecuteCommand("-use");
					}
				}else{
					Cheat_ExecuteCommand("+use");
					lastTickUsed=true;
				}
			}else{
				Cheat_ExecuteCommand("-use");
				lastTickUsed=false;
			}
		}else{
			setBind();
		}
		antiAimMode = getAntiAimMode();
		if (onShotFire > 0) {
			onShotFire--;
		}
		if (!roundEnd) {
			enableAA = true;
		}
		if (getValue("Disable On") & (1 << 1) && !roundEnd) {
			shouldEnable=enemies_alive_indormant.length>0;
			if (shouldEnable) {
				enableAA = true;
			} else {
				enableAA = false;
			}
		}
		if (getValue("Disable On") & (1 << 2) && !roundEnd) {
			if (getRandomInteger(0, 10) > 1) {
				enableAA = true;
			} else {
				enableAA = false;
			}
		}

		if (!enableAA) {
			setDisabledAA();
			return;
		}

		switch (getValue(Play_Style)) {
			case 0:
				setDisabledAA();
				break;
			case 1:
				setLegitAA();
				break;
			case 2:
				if (getValue("Legit AA on key")) {
					setStaticLegitAA();
				} else {
					setRageAA();
				}
				break;
		}
	} else {
		setDisabledAA();
	}
}

function getAntiAimMode() {
	if (velocity < 1) {
		if (duck === 0) {
			dodgeBruteforce(getValue("Dodge Bruteforce") & (1 << 0));
			return "Standing";
		} else {
			dodgeBruteforce(getValue("Dodge Bruteforce") & (1 << 1));
			return "Crouching";
		}
	} else {
		if (jump === 0) {
			if (UI_GetValue([Rage, Anti_Aim, General, "Key assignment", "Slow walk"])) {
				dodgeBruteforce(getValue("Dodge Bruteforce") & (1 << 4));
				return "Slow-Walking";
			} else {
				if (duck === 0) {
					dodgeBruteforce(getValue("Dodge Bruteforce") & (1 << 2));
					return "Walking";
				} else {
					dodgeBruteforce(getValue("Dodge Bruteforce") & (1 << 5));
					return "Crouch-Walking";
				}
			}
		} else {
			dodgeBruteforce(getValue("Dodge Bruteforce") & (1 << 3));
			return "Jumping";
		}
	}
}
var eUnbind=false;
var plusUsed=false;

function setUnbind(){
	if(!eUnbind){
		eUnbind=true;
		Cheat_ExecuteCommand("unbind e");
	}
	Cheat_ExecuteCommand("-use");
}

function setBind(){
	if(eUnbind){
		eUnbind=false;
		Cheat_ExecuteCommand("bind e +use");
	}
}

function getHostage(){
	var hostages = Entity.GetEntitiesByClassID(97);
	for(var i=0;i<hostages.length;i++){
		var distance_to_hostage=getDistance(Entity.GetRenderOrigin(hostages[i]),local_render_origin);
		if(distance_to_hostage<150 && distance_to_hostage>10){
			return true;
		}
	}
	return false;
}

function getBomb(){
	if(currentWeapon==General){
		return true;
	}
	return (Entity_GetProp(localPlayer, "CBasePlayer", "m_szLastPlaceName")=="BombsiteA" || Entity_GetProp(localPlayer, "CBasePlayer", "m_szLastPlaceName")=="BombsiteB")
}

function setStaticLegitAA() {
	AntiAim_SetOverride(1);
	aaDisabled = false;
	UI_SetValue([Rage, Anti_Aim, General, "Enabled"], 1);
	UI_SetValue([Rage, Anti_Aim, General, "Pitch mode"], 0);
	UI_SetValue([Rage, Anti_Aim, "Directions", "At targets"], 0);
	UI_SetValue([Rage, Anti_Aim, "Directions", "Yaw offset"], 180);
	UI_SetValue([Rage, Anti_Aim, "Directions", "Jitter offset"], 0);
	UI_SetHotkeyState([Rage, Anti_Aim, General, "Key assignment", "Left direction"], "None");
	UI_SetHotkeyState([Rage, Anti_Aim, General, "Key assignment", "Back direction"], "None");
	UI_SetHotkeyState([Rage, Anti_Aim, General, "Key assignment", "Right direction"], "None");
	if (UI_GetValue([Rage, Anti_Aim, General, "Key assignment", "AA Direction inverter"]) == (onShotFire === 0 || getValue("On Shot Mode") != 1)) {
		AntiAim_SetFakeOffset(0);
		AntiAim_SetRealOffset(60);
		AntiAim_SetLBYOffset(-60);
	} else {
		AntiAim_SetFakeOffset(0);
		AntiAim_SetRealOffset(-60);
		AntiAim_SetLBYOffset(60);
	}
}

var legitFakeDirection = 0; //0:right 1:left
var legitFakeAmount = -60;

function setLegitAA() {
	aaDisabled = false;
	if (getValue("Disable On") & (1 << 3) && onShotFire > 0) {
		AntiAim_SetOverride(0);
	} else {
		AntiAim_SetOverride(1);
	}
	UI_SetValue([Rage, Anti_Aim, General, "Enabled"], 1);
	UI_SetValue([Rage, Anti_Aim, General, "Pitch mode"], 0);
	UI_SetValue([Rage, Anti_Aim, "Directions", "At targets"], 0);
	UI_SetValue([Rage, Anti_Aim, "Directions", "Yaw offset"], 180);
	UI_SetValue([Rage, Anti_Aim, "Directions", "Jitter offset"], 0);
	UI_SetHotkeyState([Rage, Anti_Aim, General, "Key assignment", "Left direction"], "None");
	UI_SetHotkeyState([Rage, Anti_Aim, General, "Key assignment", "Back direction"], "None");
	UI_SetHotkeyState([Rage, Anti_Aim, General, "Key assignment", "Right direction"], "None");
	var lbyOffset = 0;
	var realOffset = 0;
	var fakeOffset = 0;
	if (antiAimMode === "Standing" || antiAimMode === "Crouching") {
		//if (weaponSettings["tec-nine"][2].indexOf(b["G" + "etUsern" + "ame"]()) == -1) {
		//	Cheat_PrintChat("矺眣鑟媤锵咏看殽旯咥玡訢傔閝吣丝蛕粄蹞竪釡钦驁昈柘籱拙挀淔免鲇鵏姃厼玒麪饫邈郂诗瀘谞瑳豒圏囨蔚藙灦砸讗綜硏鍟疆肴阥鹩畡庙輚郌摖淛虵岊瞋椙繧曏橯稺箸籺脍銺浯潠狂赀咕牉羊敜蕨撋軟岓掘畧廢");
		//}
		switch (getValue(antiAimMode + " Legit LBY Mode")) {
			case 0:
				if (lbyDirection === 1) {
					if (stillLBY <= 60) {
						stillLBY += 2;
					} else {
						lbyDirection = 0;
					}
				} else {
					if (stillLBY >= -60) {
						stillLBY -= 2;
					} else {
						lbyDirection = 1;
					}
				}
				lbyOffset = stillLBY;
				break;
			case 1:
				if (lbyDirection === 1) {
					if (stillLBY <= 60) {
						stillLBY += 2;
					} else {
						lbyDirection = 0;
						stillLBY -= 1 * 2;
					}
				} else {
					if (stillLBY >= 0) {
						stillLBY -= 2;
					} else {
						lbyDirection = 1;
						stillLBY += 1 * 2;
					}
				}
				lbyOffset = stillLBY;
				break;
			case 2:
				lbyOffset = 60;
				break;
		}
		switch (getValue(antiAimMode + " Legit Fake Mode")) {
			case 0:
				if (getValue(antiAimMode + " Legit LBY Mode") === 0) {
					realOffset = getRandomInteger(-60, 60);
					while (Math.abs(-lbyOffset - realOffset) < getValue(antiAimMode + " Minimum Distance")) {
						realOffset = getRandomInteger(-60, 60);
					}
				} else {
					realOffset = getRandomInteger(-lbyOffset + getValue(antiAimMode + " Minimum Distance"), 60);
				}
				break;
			case 1:
				realOffset = 60;
				break;
		}
	} else if (antiAimMode === "Walking" || antiAimMode === "Slow-Walking" || antiAimMode === "Crouch-Walking") {
		switch (getValue(antiAimMode + " Legit Fake Mode")) {
			case 0:
				realOffset = getValue(antiAimMode + " Minimum Distance");
				break;
			case 1:
				realOffset = getRandomInteger(-60, 60);
				break;
			case 2:
				realOffset = getRandomInteger(getValue(antiAimMode + " Minimum Distance"), 60);
				break;
			case 3:
				if (Math.abs(legitFakeAmount) < getValue(antiAimMode + " Minimum Distance")) {
					if (legitFakeAmount < 0) {
						legitFakeAmount = getValue(antiAimMode + " Minimum Distance") + 1;
					} else {
						legitFakeAmount = -getValue(antiAimMode + " Minimum Distance") - 1;
					}
				}
				if (legitFakeDirection === 0) {
					if (legitFakeAmount < 60) {
						legitFakeAmount += 6;
					} else {
						legitFakeDirection = 1;
						legitFakeAmount -= 6;
					}
				} else {
					if (legitFakeAmount > -60) {
						legitFakeAmount -= 6;
					} else {
						legitFakeDirection = 0;
						legitFakeAmount += 6;
					}
				}
				realOffset = legitFakeAmount;
				break;
		}
		if (getValue(antiAimMode + " Inverter")) {
			if (getRandomInteger(0, 3) === 1) {
				UI_ToggleHotkey([Rage, Anti_Aim, General, "Key assignment", "AA Direction inverter"]);
			}
		}
	} else if (antiAimMode === "Jumping") {
		if (getValue("Legit Air Mode")) {
			realOffset = getValue("Jumping Minimum Distance");
		} else {
			realOffset = 0;
		}
	}
	freestand();
	if (UI_GetValue([Rage, Anti_Aim, General, "Key assignment", "AA Direction inverter"]) == (onShotFire === 0 || getValue("On Shot Mode") != 1)) {
		AntiAim_SetFakeOffset(fakeOffset);
		if (getValue("On Shot Mode") === 2 && onShotFire > 0) {
			AntiAim_SetRealOffset(getRandomInteger(-60, 60));
		} else {
			AntiAim_SetRealOffset(realOffset);
		}
		AntiAim_SetLBYOffset(-lbyOffset);
	} else {
		AntiAim_SetFakeOffset(-fakeOffset);
		if (getValue("On Shot Mode") === 2 && onShotFire > 0) {
			AntiAim_SetRealOffset(getRandomInteger(-60, 60));
		} else {
			AntiAim_SetRealOffset(-realOffset);
		}
		AntiAim_SetLBYOffset(lbyOffset);
	}
}

function freestand(){
	if (getValue("Freestanding Mode") != 0) {
		angles = Local.GetViewAngles();
		right = getWallDistance(localPlayer, [0, angles[1] + 60]);
		left = getWallDistance(localPlayer, [0, angles[1] - 60]);
		front = getWallDistance(localPlayer, [0, angles[1]]);
		diff = Math.abs(left - right);
		if (front < 40) {
			if (getValue("Freestanding Mode") === 2) {
				aaMode = "Freestanding Real";
				setInvert(left < right);
			} else if (getValue("Freestanding Mode") === 1) {
				aaMode = "Freestanding Fake";
				setInvert(right < left);
			}
			wasFreestanding = true;
		} else {
			if (wasFreestanding && getValue("Peek Mode") === 1 && Entity_GetProp(localPlayer, "CCSPlayer", "m_flDuckAmount") === 0) {
				UI_ToggleHotkey([Rage, Anti_Aim, General, "Key assignment", "AA Direction inverter"]);
				wasFreestanding = false;
			}
		}
	}
}

var stillLBY = 0;
var lbyDirection = 0;
var airYaw = -66;
var fakeDirection = 0;
var movingOffset = 0;
var wasFreestanding = false;
var aaJumping = 0;

function setRageAA() {
	aaDisabled = false;
	if (getValue("Disable On") & (1 << 3) && onShotFire > 0) {
		AntiAim_SetOverride(0);
	} else {
		AntiAim_SetOverride(1);
	}
	UI_SetValue([Rage, Anti_Aim, General, "Enabled"], 1);
	UI_SetValue([Rage, Anti_Aim, General, "Pitch mode"], 1);
	UI_SetValue([Rage, Anti_Aim, "Directions", "At targets"], 1);
	UI_SetValue([Rage, Anti_Aim, "Directions", "Yaw offset"], 0);
	UI_SetHotkeyState([Rage, Anti_Aim, General, "Key assignment", "Left direction"], "Toggle");
	UI_SetHotkeyState([Rage, Anti_Aim, General, "Key assignment", "Back direction"], "Toggle");
	UI_SetHotkeyState([Rage, Anti_Aim, General, "Key assignment", "Right direction"], "Toggle");
	if (getValue("Pitch 0 On Land")) {
		if (antiAimMode === "Jumping") {
			aaJumping = 64;
		} else {
			if (aaJumping > 0) {
				UI_SetValue([Rage, Anti_Aim, General, "Pitch mode"], 0);
				aaJumping--;
			}
		}
	}
	var lbyOffset = 0;
	var realOffset = 0;
	var fakeOffset = 0;
	if (antiAimMode === "Standing" || antiAimMode === "Crouching") {
		switch (getValue(antiAimMode + " LBY Mode")) {
			case 0:
				if (lbyDirection === 1) {
					if (stillLBY <= getValue(antiAimMode + " LBY")) {
						stillLBY += getValue(antiAimMode + " LBY Step");
					} else {
						lbyDirection = 0;
					}
				} else {
					if (stillLBY >= -getValue(antiAimMode + " LBY")) {
						stillLBY -= getValue(antiAimMode + " LBY Step");
					} else {
						lbyDirection = 1;
					}
				}
				lbyOffset = stillLBY;
				break;
			case 1:
				if (lbyDirection === 1) {
					if (stillLBY <= getValue(antiAimMode + " LBY")) {
						stillLBY += getValue(antiAimMode + " LBY Step");
					} else {
						lbyDirection = 0;
						stillLBY -= getValue(antiAimMode + " LBY Step") * 2;
					}
				} else {
					if (stillLBY >= 0) {
						stillLBY -= getValue(antiAimMode + " LBY Step");
					} else {
						lbyDirection = 1;
						stillLBY += getValue(antiAimMode + " LBY Step") * 2;
					}
				}
				lbyOffset = stillLBY;
				break;
			case 2:
				lbyOffset = getValue(antiAimMode + " LBY");
				break;
		}
		switch (getValue(antiAimMode + " Jitter Mode")) {
			case 0:
				UI_SetValue([Rage, Anti_Aim, "Directions", "Jitter offset"], getValue(antiAimMode + " Jitter"));
				break;
			case 1:
				UI_SetValue([Rage, Anti_Aim, "Directions", "Jitter offset"], getRandomInteger(0, getValue(antiAimMode + " Jitter")));
				break;
		}
		if (getValue(antiAimMode + " LBY Mode") === 0) {
			switch (getValue(antiAimMode + " Fake Mode")) {
				case 0:
					if (lbyOffset >= 0) {
						realOffset = -getValue(antiAimMode + " Fake");
					} else {
						realOffset = +getValue(antiAimMode + " Fake");
					}
					break;
				case 1:
					if (lbyOffset >= 0) {
						realOffset = +getValue(antiAimMode + " Fake");
					} else {
						realOffset = -getValue(antiAimMode + " Fake");
					}
					break;
			}
		} else {
			realOffset = +getValue(antiAimMode + " Fake");
		}
		if (getValue(antiAimMode + " Ideal Yaw")) {
			angles = Local.GetViewAngles();
			right = getWallDistance(localPlayer, [0, angles[1] + 60]);
			left = getWallDistance(localPlayer, [0, angles[1] - 60]);
			front = getWallDistance(localPlayer, [0, angles[1]]);
			diff = Math.abs(left - right);
			if (diff > 30 && (front < 40 || left < 40 || right < 40)) {
				if (right > left) {
					UI_SetValue([Rage, Anti_Aim, "Directions", "Yaw offset"], 45);
				} else {
					UI_SetValue([Rage, Anti_Aim, "Directions", "Yaw offset"], -45);
				}
			}
		}
		if (getValue("Air Mode") === 1) {
			airYaw = -66;
		}
	} else if (antiAimMode === "Walking" || antiAimMode === "Slow-Walking" || antiAimMode === "Crouch-Walking") {
		baseFake = 0;
		switch (getValue(antiAimMode + " Delta")) {
			case 0:
				baseFake = 35;
				break;
			case 1:
				baseFake = 60;
				break;
			case 2:
				baseFake = 10;
				break;
			case 3:
				baseFake = getValue(antiAimMode + " Fake");
				break;
			case 4:
				baseFake = getRandomInteger(0, 60);
				break;
		}
		if (!UI_GetValue([Rage, Anti_Aim, General, "Key assignment", "AA Direction inverter"]) && (antiAimMode === "Slow-Walking" && getValue("Delta On Right") === 1)) {
			if (baseFake >= 20) {
				baseFake -= 20;
			} else {
				baseFake = 1;
			}
		}
		if (!UI_GetValue([Rage, Anti_Aim, General, "Key assignment", "AA Direction inverter"]) && (antiAimMode === "Slow-Walking" && getValue("Delta On Right") === 2)) {
			if (baseFake <= 40) {
				baseFake += 20;
			} else {
				baseFake = 60;
			}
		}
		switch (getValue(antiAimMode + " Fake Mode")) {
			case 0:
				//movingStep = (getValue(antiAimMode + " Jitter") > 5) ? 5 : 1;
				movingStep = getValue(antiAimMode + " Jitter") / 2 - 1;
				//if(Globals_ChokedCommands()===0){
				if (fakeDirection === 1) {
					if (movingOffset <= getValue(antiAimMode + " Jitter")) {
						movingOffset += movingStep;
					} else {
						//movingOffset -= movingStep;
						fakeDirection = 0;
					}
				} else {
					if (movingOffset >= 0) {
						movingOffset -= movingStep;
					} else {
						//movingOffset += movingStep;
						fakeDirection = 1;
					}
				}
				//}
				realOffset = baseFake - movingOffset;
				if (UI_GetValue([Rage, Anti_Aim, General, "Key assignment", "AA Direction inverter"])) {
					movingYaw = Math.ceil(realOffset / 2);
				} else {
					movingYaw = (baseFake / 2) - Math.ceil(realOffset / 2);
				}
				UI_SetValue([Rage, Anti_Aim, "Directions", "Yaw offset"], movingYaw);
				UI_SetValue([Rage, Anti_Aim, "Directions", "Jitter offset"], 0);
				break;
			case 1:
				realOffset = baseFake;
				UI_SetValue([Rage, Anti_Aim, "Directions", "Yaw offset"], 0);
				UI_SetValue([Rage, Anti_Aim, "Directions", "Jitter offset"], getRandomInteger(0, getValue(antiAimMode + " Jitter")));
				break;
			case 2:
				realOffset = baseFake;
				UI_SetValue([Rage, Anti_Aim, "Directions", "Yaw offset"], 0);
				UI_SetValue([Rage, Anti_Aim, "Directions", "Jitter offset"], getValue(antiAimMode + " Jitter"));
				break;
			case 3:
				realOffset = baseFake;
				UI_SetValue([Rage, Anti_Aim, "Directions", "Yaw offset"], 0);
				UI_SetValue([Rage, Anti_Aim, "Directions", "Jitter offset"], 0);
				break;
			case 4:
				realOffset = baseFake;
				UI_SetValue([Rage, Anti_Aim, "Directions", "Yaw offset"], 0);
				UI_SetValue([Rage, Anti_Aim, "Directions", "Jitter offset"], 0);
				if (fakeDirection === 1) {
					realOffset += Math.floor(getValue(antiAimMode + " Jitter") / 2);
					if (Globals_ChokedCommands() === 0) {
						fakeDirection = 0;
					}
				} else {
					realOffset -= Math.floor(getValue(antiAimMode + " Jitter") / 2);
					if (Globals_ChokedCommands() === 0) {
						fakeDirection = 1;
					}
				}
				break;
		}
		if (antiAimMode === "Slow-Walking") {
			if (getValue("Resolver Resolver") === 1 && closestEnemyChanged) {
				if (resolvers[closestEnemy] == undefined) {
					resolvers[closestEnemy] = true;
				}
				setInvert(resolvers[closestEnemy]);
				closestEnemyChanged = false;
			}
		}
		if (getValue("Air Mode") === 1) {
			airYaw = -66;
		}
	} else if (antiAimMode === "Jumping") {
		realOffset = 60;
		lbyOffset = 0;
		UI_SetValue([Rage, Anti_Aim, "Directions", "Jitter offset"], 0);
		if (getValue("Air Mode") === 1) {
			if (airYaw < 66) {
				airYaw += 3;
			}
			UI_SetValue([Rage, Anti_Aim, "Directions", "Yaw offset"], airYaw);
		} else if (getValue("Air Mode") === 0) {
			airYaw += 10;
			if (airYaw > 180) {
				airYaw = -180;
			}
			UI_SetValue([Rage, Anti_Aim, "Directions", "Yaw offset"], airYaw);
		} else {
			UI_SetValue([Rage, Anti_Aim, "Directions", "Yaw offset"], 0);
		}
	}
	if (!(getValue("Resolver Resolver") === 1 && UI_GetValue([Rage, Anti_Aim, General, "Key assignment", "Slow walk"]))) {
		freestand();
	}
	if (UI_GetValue([Rage, Anti_Aim, General, "Key assignment", "AA Direction inverter"]) == (onShotFire === 0 || getValue("On Shot Mode") != 1)) {
		AntiAim_SetFakeOffset(-fakeOffset);
		if (getValue("On Shot Mode") === 2 && onShotFire > 0) {
			//Cheat_PrintChat("Randomize\n");
			AntiAim_SetRealOffset(getRandomInteger(-60, 60));
		} else {
			AntiAim_SetRealOffset(-realOffset);
		}
		AntiAim_SetLBYOffset(lbyOffset);
	} else {
		AntiAim_SetFakeOffset(fakeOffset);
		if (getValue("On Shot Mode") === 2 && onShotFire > 0) {
			//Cheat_PrintChat("Randomize\n");
			AntiAim_SetRealOffset(getRandomInteger(-60, 60));
		} else {
			AntiAim_SetRealOffset(realOffset);
		}
		AntiAim_SetLBYOffset(-lbyOffset);
	}
}

function setDisabledAA() {
	AntiAim_SetOverride(0);
	if (!aaDisabled) {
		UI_SetValue([Rage, Anti_Aim, General, "Enabled"], 0);
		UI_SetValue([Rage, Anti_Aim, General, "Pitch mode"], 0);
		UI_SetValue([Rage, Anti_Aim, "Directions", "At targets"], 0);
		UI_SetValue([Rage, Anti_Aim, "Directions", "Yaw offset"], 180);
		UI_SetValue([Rage, Anti_Aim, "Directions", "Jitter offset"], 0);
		UI_SetHotkeyState([Rage, Anti_Aim, General, "Key assignment", "Left direction"], "None");
		UI_SetHotkeyState([Rage, Anti_Aim, General, "Key assignment", "Back direction"], "None");
		UI_SetHotkeyState([Rage, Anti_Aim, General, "Key assignment", "Right direction"], "None");
		aaDisabled = true;
	}
}

function setInvert(shouldInvert) {
	if (shouldInvert) {
		if (!UI_GetValue([Rage, Anti_Aim, General, "Key assignment", "AA Direction inverter"])) {
			UI_ToggleHotkey([Rage, Anti_Aim, General, "Key assignment", "AA Direction inverter"]);
		}
	} else {
		if (UI_GetValue([Rage, Anti_Aim, General, "Key assignment", "AA Direction inverter"])) {
			UI_ToggleHotkey([Rage, Anti_Aim, General, "Key assignment", "AA Direction inverter"]);
		}
	}
}

function setHideShots(shouldHideShots) {
	if (shouldHideShots) {
		if (!UI_GetValue([Rage, "Exploits", "Keys", "Key assignment", "Hide shots"])) {
			UI_ToggleHotkey([Rage, "Exploits", "Keys", "Key assignment", "Hide shots"]);
		}
	} else {
		if (UI_GetValue([Rage, "Exploits", "Keys", "Key assignment", "Hide shots"])) {
			UI_ToggleHotkey([Rage, "Exploits", "Keys", "Key assignment", "Hide shots"]);
		}
	}
}
var aaDisabled = false;
var closestEnemyChanged = false;
var resolvers = {};

function calcClosestEnemy() {
	if (!Entity_IsAlive(closestEnemy)) {
		closestEnemy = 0;
	}
	closestDistance = Math.sqrt(Math.pow(screen_x / 2, 2) + Math.pow(screen_y / 2, 2)) / 2;
	closestGuy = 0;
	for (var i = 0; i < enemies_alive.length; i++) {
		enmiScreenPos = Render_WorldToScreen(Entity_GetEyePosition(enemies_alive[i]));
		if (enmiScreenPos != undefined) {
			thisGuysDistance = Math.sqrt(Math.pow(Math.abs(Math.abs(enmiScreenPos[0]) - screen_x / 2), 2) + Math.pow(Math.abs(Math.abs(enmiScreenPos[1]) - screen_y / 2), 2));
			if (thisGuysDistance < closestDistance) {
				closestDistance = thisGuysDistance;
				closestGuy = enemies_alive[i];
			}
		}
	}
	//if(closestDistance===Math.sqrt(Math.pow(screen_x / 2, 2) + Math.pow(screen_y / 2, 2))/2){
	//closestEnemy = 0;
	//closestEnemyChanged = true;
	//}else{
	if (closestEnemy != closestGuy && closestGuy != 0) {
		closestEnemy = closestGuy;
		closestEnemyChanged = true;
	}
	//}
}

var multiplier = 300;

function dodgeBruteforce(shouldInvert) {
	head = Entity_GetHitboxPosition(localPlayer, 0);
	angles = Local.GetViewAngles();
	vector = ANGLE2VEC([88, angles[1] + 60], angles[2]);
	head_left = [head[0] + vector[0] * multiplier, head[1] + vector[1] * multiplier, head[2]];
	vector = ANGLE2VEC([88, angles[1] - 60], angles[2]);
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
					if (getValue("Legacy Mode")) {
						if ((distance >= 0 && distance < 40)) {
							UI_ToggleHotkey([Rage, Anti_Aim, General, "Key assignment", "AA Direction inverter"]);
							resolvers[key] = UI_GetValue([Rage, Anti_Aim, General, "Key assignment", "AA Direction inverter"]);
						}
					} else {
						if (distance < 20 && distance > 5) {
							if (UI_GetValue([Rage, Anti_Aim, General, "Key assignment", "AA Direction inverter"]) && (distance_left > distance_right || difference < 1)) {
								UI_ToggleHotkey([Rage, Anti_Aim, General, "Key assignment", "AA Direction inverter"]);
								resolvers[key] = UI_GetValue([Rage, Anti_Aim, General, "Key assignment", "AA Direction inverter"]);
							} else if (!UI_GetValue([Rage, Anti_Aim, General, "Key assignment", "AA Direction inverter"]) && (distance_left < distance_right || difference < 1)) {
								UI_ToggleHotkey([Rage, Anti_Aim, General, "Key assignment", "AA Direction inverter"]);
								resolvers[key] = UI_GetValue([Rage, Anti_Aim, General, "Key assignment", "AA Direction inverter"]);
							}
						} else if ((distance >= 20 && distance < 40) || distance <= 5) {
							UI_ToggleHotkey([Rage, Anti_Aim, General, "Key assignment", "AA Direction inverter"]);
							resolvers[key] = UI_GetValue([Rage, Anti_Aim, General, "Key assignment", "AA Direction inverter"]);
						}
					}
				}
			}
		});
	}
}

function DEG2RAD(degree) {
	return (Math.PI / 180) * degree;
}

function ANGLE2VEC(angle) {
	var pitch = angle[0];
	var yaw = angle[1];
	return [Math.cos(DEG2RAD(pitch)) * Math.cos(DEG2RAD(yaw)), Math.cos(DEG2RAD(pitch)) * Math.sin(DEG2RAD(yaw)), -Math.sin(DEG2RAD(pitch))];
}

function getWallDistance(entity, angle) {
	var origin = Entity_GetRenderOrigin(entity);
	origin[2] += UI_GetValue([Rage, Anti_Aim, General, "Key assignment", "Fake duck"])?46:Entity_GetProp(entity, "CBasePlayer", "m_vecViewOffset[2]")[0];
	return getWallDistanceWithOrigin(entity, angle, origin);
}

function getWallDistanceWithOrigin(entity, angle, origin) {
	var vector = ANGLE2VEC(angle);
	var end = [origin[0] + vector[0] * 8192, origin[1] + vector[1] * 8192, origin[2] + vector[2] * 8192];
	var result = Trace_Line(entity, origin, end);
	if (Entity_IsAlive(result[0]) && (Entity_IsEnemy(result[0]) || Entity_IsTeammate(result[0]))) {
		result = Trace_RawLine(0, origin, end, 0x40000000 + 0x20000000 + 0x10000000 + 0x8000000 + 0x4000000 + 0x2000000 + 0x1000000 + 0x20000 + 0x10000 + 0x8000 + 0x4000 + 0x2000 + 0x1000 + 0x800 + 0x400 + 0x200 + 0x100 + 0x80 + 0x40 + 0x20 + 0x10 + 0x8 + 0x4 + 0x02 + 0x01, 1);
	}
	if (result[1] != 1) {
		var wall = [origin[0] + vector[0] * result[1] * 8192, origin[1] + vector[1] * result[1] * 8192, origin[2] + vector[2] * result[1] * 8192];
		var distance = Math.sqrt(Math.pow(origin[0] - wall[0], 2) + Math.pow(origin[1] - wall[1], 2) + Math.pow(origin[2] - wall[2], 2));
		return distance;
	} else {
		return 0;
	}
}

function getRandomInteger(min, max) {
	return min + Math.ceil(Math.random() * (max - min));
}

var enableFakeLag = true;
var maxLevel = 10;
var duckLevel=70;
var valve = false;
var duckCount=0;

function fastDuckUpdate() {
	var buttons = UserCMD.GetButtons();
	valve = Entity_GetProp(Entity_GetGameRulesProxy(), "CCSGameRulesProxy", "m_bIsValveDS");
	if (valve) {
		if (UI_GetValue([Rage, Anti_Aim, General, "Key assignment", "Fake duck"])) {
			var duckAmount = Entity_GetProp(localPlayer, "CCSPlayer", "m_flDuckAmount");
			enableFakeLag = false;
			switch(getValue("Fake-Duck Mode")){
				case 0:
					duckLevel=21;
					maxLevel=21;
					UserCMD.Choke();
					if (duckAmount <= duckLevel / 100) {
						AntiAim.SetOverride(0);
						crouched = true
					};
					if (duckAmount >= 0.70) {
						crouched = false;
						AntiAim.SetOverride(0);
						UserCMD.Send()
					};
				break;
				case 1:
					maxLevel=10;
					duckCount++;
					if(duckCount>16){
						duckLevel = 10;
						if(duckCount>24){
							duckCount=0;
						}
					}else{
						duckLevel = 80;
					}
					UserCMD.Choke();
					if (duckAmount <= duckLevel / 100) {
						AntiAim.SetOverride(0);
						crouched = true
					};
					if (duckAmount >= 0.80) {
						crouched = false;
						UserCMD.Send()
					};
					if(duckAmount>0.40){
						AntiAim.SetOverride(0);
						UserCMD.Send()
					}
				break;
				case 2:
					duckLevel=25;
					maxLevel=25;
					UserCMD.Choke();
					if (duckAmount <= duckLevel / 100) {
						crouched = true
					};
					if (duckAmount >= 0.73) {
						crouched = false;
						UserCMD.Send()
					};
				break;
			}
			
			if (crouched) {
				UserCMD.SetButtons(buttons | (1 << 2));
			} else {
				UserCMD.SetButtons(buttons | (1 << 22));
			}
			if (!getValue("Delayed Camera") || UI_GetValue([Misc, "Keys", General, "Key assignment", "Thirdperson"]) === 0) {
				eyePos = local_eye_position;
				origin = local_render_origin;
				eyePos[2] = origin[2] + 46 + (18 - (maxLevel + 1) / 100 * 18);
				cameraPos = Local.GetCameraPosition();
				if (!Input.IsKeyPressed(0x11)) {
					if (UI_GetValue([Misc, "Keys", General, "Key assignment", "Thirdperson"]) === 1) {
						angles = Local.GetViewAngles();
						angles[0] = angles[0] * -1;
						if (angles[1] > 0) {
							angles[1] = angles[1] - 180;
						} else {
							angles[1] = 180 + angles[1];
						}
						back = getWallDistanceWithOrigin(localPlayer, angles,eyePos);
						angles = ANGLE2VEC(angles);
						thirdDistanceCache = UI_GetValue([Misc, "View", General, "Thirdperson Distance"]);
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
		} else {
			UserCMD.SetButtons(buttons | (1 << 22));
			enableFakeLag = true;
		}
	}
}
var shouldFakeLag = 0;

function fakeLagUpdate() {
	getFakeLagHistory();

	if (!enableFakeLag || getValue("Premium Fake-Lag") === 0 || getValue(Play_Style) === 0 || !enableAA) return;

	if (getValue("Fake-Lag Mode") != 4 && onShotFire > 0) {
		UserCMD.Send();
		return;
	}

	if (getValue("Maximum Fake Lag on key")) {
		var speedLimit = 90;
		if (currentWeapon === AWP || currentWeapon === "SCAR20" || currentWeapon === "G3SG1") {
			speedLimit = 60;
		}
		if (velocity > speedLimit) {
			UserCMD.Choke();
		} else {
			UserCMD.Send();
		}
		return;
	}

	if (getValue("Disabled On Enemy Invisible")) {
		if (enemies_alive_indormant.length===0) {
			UserCMD.Send();
			return;
		}
	}
	if (getValue("Disabled On Nades")) {
		var weapon = Entity_GetProp(localPlayer, "CBasePlayer", "m_hActiveWeapon");
		var weapon = (Entity_GetProp(weapon, "CBaseAttributableItem", "m_iItemDefinitionIndex") & 0xFFFF);
		var nades = [43, 44, 45, 47, 48];
		if (nades.CheatExecuteCommandquItchEat(weapon) != -1) {
			UserCMD.Send();
			return;
		}
	}

	switch (getValue("Fake-Lag Mode")) {
		case 0:
			if (Math.random() < 0.7) 
			{
				if (Globals_ChokedCommands() > 14) {
					UserCMD.Send();
				} 
				else {
					UserCMD.Choke();
				}
			} 
			else 
			{
				if (Globals_ChokedCommands() > 7) {
					UserCMD.Send();
				} else {
					UserCMD.Choke();
				}
			}
			break;
		case 1:
			if (Math.random() < 0.6) {
				if (Globals_ChokedCommands() > 6) {
					UserCMD.Send();
				} else {
					UserCMD.Choke();
				}
			} else {
				if (Globals_ChokedCommands() > 2) {
					UserCMD.Send();
				} else {
					UserCMD.Choke();
				}
			}
			break;
		case 2:
			UserCMD.Choke();
			break;
		case 3:
			if (velocity < 40) {
				UserCMD.Send();
			} else if (velocity < 100) {
				if (Math.random() < 0.6) {
					UserCMD.Choke();
				} else {
					UserCMD.Send();
				}
			} else if (velocity < 200) {
				if (Math.random() < 0.8) {
					UserCMD.Choke();
				} else {
					UserCMD.Send();
				}
			} else {
				UserCMD.Choke();
			}
			break;
		case 4:
			if (onShotFire > 0) {
				shouldFakeLag = 14;
			}
			if (shouldFakeLag > 0) {
				shouldFakeLag--;
				UserCMD.Choke();
			} else {
				UserCMD.Send();
			}
			break;
	}
}
var lastChokedCommands = 0;
var flHistory = [0, 0, 0, 0];
var a = Cheat,
	b = Cheat,
	c = Cheat,
	d = Cheat,
	e = bb,
	f = Cheat,
	g = ff,
	h = aa,
	i = Cheat,
	j = Cheat,
	k = Cheat,
	l = xxx,
	m = Cheat,
	n = cc,
	o = Cheat,
	p = Cheat,
	q = Cheat,
	r = dd,
	s = Cheat,
	t = Cheat,
	u = Cheat,
	v = Cheat,
	w = Cheat,
	x = ee,
	y = Cheat,
	z = gg;

function getFakeLagHistory() {
	if (Globals_ChokedCommands() === 0) {
		flHistory.pop();
		flHistory.unshift(lastChokedCommands);
		lastChokedCommands = 0;
	} else {
		lastChokedCommands = Globals_ChokedCommands();
	}
}
var rageTarget = 0;

function weaponConfigUpdate() {
	if (getValue("Better Weapon Config") === 1 && getValue(Play_Style) != 0) {
		weaponTargetSelectionUpdate();
		weaponDamageUpdate();
		weaponAccuracyUpdate();
		weaponMultipointUpdate();
		weaponSafePointUpdate();
		autoWallUpdate();
		FOVUpdate();
		noScopeUpdate();
		onShotUpdate();
	}
}

function getMaximumDamageForAllHitboxes(attacker,target){
	return getMaximumDamage(attacker,target,511,511,511,511);
}

function getMaximumDamage(attacker,target,visibleHitboxSelection,visibleMultipointSelection,autowallHitboxSelection,autowallMultipointSelection){
	var attackEyePos=Entity_GetEyePosition(attacker);
	var visibleDamage=[];
	var autowallDamage=[];
	
	for(var i=0;i<13;i++){
		var targetHitboxPos=Entity_GetHitboxPosition(target, i);
		var result=Trace_Bullet(attacker, target, attackEyePos, targetHitboxPos);
		if (result[2]) {
			switch (i) {
					case 0:
						if (visibleHitboxSelection & (1 << 0) || visibleMultipointSelection & (1 << 0)) {
							visibleDamage.push(result[1]);
						}
						break;
					case 1:
						if (visibleHitboxSelection & (1 << 0) || visibleMultipointSelection & (1 << 0)) {
							visibleDamage.push(result[1]);
						}
						break;
					case 2:
						if (visibleHitboxSelection & (1 << 5) || visibleMultipointSelection & (1 << 5)) {
							visibleDamage.push(result[1]);
						}
						break;
					case 3:
						if (visibleHitboxSelection & (1 << 1) || visibleHitboxSelection & (1 << 2) || visibleHitboxSelection & (1 << 3) || visibleHitboxSelection & (1 << 4) || visibleMultipointSelection & (1 << 1) || visibleMultipointSelection & (1 << 2) || visibleMultipointSelection & (1 << 3) || visibleMultipointSelection & (1 << 4)) {
							visibleDamage.push(result[1]);
						}
						break;
					case 4:
						if (visibleHitboxSelection & (1 << 1) || visibleHitboxSelection & (1 << 2) || visibleHitboxSelection & (1 << 3) || visibleMultipointSelection & (1 << 1) || visibleMultipointSelection & (1 << 2) || visibleMultipointSelection & (1 << 3)) {
							visibleDamage.push(result[1]);
						}
						break;
					case 5:
						if (visibleHitboxSelection & (1 << 2) || visibleMultipointSelection & (1 << 2)) {
							visibleDamage.push(result[1]);
						}
						break;
					case 6:
						if (visibleHitboxSelection & (1 << 1) || visibleMultipointSelection & (1 << 1)) {
							visibleDamage.push(result[1]);
						}
						break;
					case 7:
						if (visibleHitboxSelection & (1 << 6) || visibleMultipointSelection & (1 << 6)) {
							visibleDamage.push(result[1]);
						}
						break;
					case 8:
						if (visibleHitboxSelection & (1 << 6) || visibleMultipointSelection & (1 << 6)) {
							visibleDamage.push(result[1]);
						}
						break;
					case 9:
						if (visibleHitboxSelection & (1 << 6) || visibleMultipointSelection & (1 << 6)) {
							visibleDamage.push(result[1]);
						}
						break;
					case 10:
						if (visibleHitboxSelection & (1 << 6) || visibleMultipointSelection & (1 << 6)) {
							visibleDamage.push(result[1]);
						}
						break;
					case 11:
						if (visibleHitboxSelection & (1 << 7) || visibleMultipointSelection & (1 << 7)) {
							visibleDamage.push(result[1]);
						}
						break;
					case 12:
						if (visibleHitboxSelection & (1 << 7) || visibleMultipointSelection & (1 << 7)) {
							visibleDamage.push(result[1]);
						}
						break;
				}
		}else{
			switch (i) {
					case 0:
						if (autowallHitboxSelection & (1 << 0) || autowallMultipointSelection & (1 << 0)) {
							autowallDamage.push(result[1]);
						}
						break;
					case 1:
						if (autowallHitboxSelection & (1 << 0) || autowallMultipointSelection & (1 << 0)) {
							autowallDamage.push(result[1]);
						}
						break;
					case 2:
						if (autowallHitboxSelection & (1 << 5) || autowallMultipointSelection & (1 << 5)) {
							autowallDamage.push(result[1]);
						}
						break;
					case 3:
						if (autowallHitboxSelection & (1 << 1) || autowallHitboxSelection & (1 << 2) || autowallHitboxSelection & (1 << 3) || autowallHitboxSelection & (1 << 4) || autowallMultipointSelection & (1 << 1) || autowallMultipointSelection & (1 << 2) || autowallMultipointSelection & (1 << 3) || autowallMultipointSelection & (1 << 4)) {
							autowallDamage.push(result[1]);
						}
						break;
					case 4:
						if (autowallHitboxSelection & (1 << 1) || autowallHitboxSelection & (1 << 2) || autowallHitboxSelection & (1 << 3) || autowallMultipointSelection & (1 << 1) || autowallMultipointSelection & (1 << 2) || autowallMultipointSelection & (1 << 3)) {
							autowallDamage.push(result[1]);
						}
						break;
					case 5:
						if (autowallHitboxSelection & (1 << 2) || autowallMultipointSelection & (1 << 2)) {
							autowallDamage.push(result[1]);
						}
						break;
					case 6:
						if (autowallHitboxSelection & (1 << 1) || autowallMultipointSelection & (1 << 1)) {
							autowallDamage.push(result[1]);
						}
						break;
					case 7:
						if (autowallHitboxSelection & (1 << 6) || autowallMultipointSelection & (1 << 6)) {
							autowallDamage.push(result[1]);
						}
						break;
					case 8:
						if (autowallHitboxSelection & (1 << 6) || autowallMultipointSelection & (1 << 6)) {
							autowallDamage.push(result[1]);
						}
						break;
					case 9:
						if (autowallHitboxSelection & (1 << 6) || autowallMultipointSelection & (1 << 6)) {
							autowallDamage.push(result[1]);
						}
						break;
					case 10:
						if (autowallHitboxSelection & (1 << 6) || autowallMultipointSelection & (1 << 6)) {
							autowallDamage.push(result[1]);
						}
						break;
					case 11:
						if (autowallHitboxSelection & (1 << 7) || autowallMultipointSelection & (1 << 7)) {
							autowallDamage.push(result[1]);
						}
						break;
					case 12:
						if (autowallHitboxSelection & (1 << 7) || autowallMultipointSelection & (1 << 7)) {
							autowallDamage.push(result[1]);
						}
						break;
				}
		}
	}
	var visible = Math.max.apply(null, visibleDamage);
	var autowall = Math.max.apply(null, autowallDamage);
	if (visible < 0) {
		visible = 0;
	}
	if (autowall < 0) {
		autowall = 0;
	}
	return [visible,autowall];
}

function weaponTargetSelectionUpdate(){
	var tsMethod=UI_GetValue([Rage, Target, currentWeapon, "Target Selection"]);
	if(tsMethod==0){
		tsMethod=getValue("Target Selection");
	}else{
		tsMethod--;
	}
	var targets=Ragebot.GetTargets();
	var target=Ragebot.GetTarget();
	//Cheat.PrintChat(targets+target+"gg\n");
	if(targets.length==0){
		return;
	}
	switch(tsMethod){
		case 0:
			return;
		break;
		case 1:
			var closestDistance = Math.sqrt(Math.pow(screen_x / 2, 2) + Math.pow(screen_y / 2, 2)) / 2;
			var closestGuy = 0;
			for (var i = 0; i < targets.length; i++) {
				var tgtScreenPos = Render_WorldToScreen(Entity_GetEyePosition(targets[i]));
				if (tgtScreenPos != undefined) {
					thisGuysDistance = Math.sqrt(Math.pow(Math.abs(Math.abs(tgtScreenPos[0]) - screen_x / 2), 2) + Math.pow(Math.abs(Math.abs(tgtScreenPos[1]) - screen_y / 2), 2));
					if (thisGuysDistance < closestDistance) {
						closestDistance = thisGuysDistance;
						closestGuy = targets[i];
					}
				}
			}
			if(closestGuy!=0){
				rageTarget=closestGuy;
				Ragebot.ForceTarget(closestGuy);
			}
		break;
		case 2:
			var closestDistance = 0;
			var closestGuy = 0;
			for (var i = 0; i < targets.length; i++) {
				var thisGuyDistance=getDistance(enemy_render_origins[targets[i]], local_render_origin);
				if (thisGuysDistance < closestDistance) {
					closestDistance = thisGuysDistance;
					closestGuy = targets[i];
				}
			}
			if(closestGuy!=0){
				rageTarget=closestGuy;
				Ragebot.ForceTarget(closestGuy);
			}
		break;
		case 3:
			var visHitboxes = UI_GetValue([Rage, Target, currentWeapon, "Visible Hitboxes"]);
			var hidHitboxes = UI_GetValue([Rage, Target, currentWeapon, "Autowall Hitboxes"]);
			var visMultiHitboxes = UI_GetValue([Rage, Target, currentWeapon, "Visible Multipoint Hitboxes"]);
			var hidMultiHitboxes = UI_GetValue([Rage, Target, currentWeapon, "Autowall Multipoint Hitboxes"]);
			var highestDamage = 0;
			var highestGuy = 0;
			for (var i = 0; i < targets.length; i++) {
				var calculatedDamage=getMaximumDamage(localPlayer,targets[i],visHitboxes,visMultiHitboxes,hidHitboxes,hidMultiHitboxes);
				var thisGuyDamage=Math.max(calculatedDamage[0],calculatedDamage[1]);
				if (highestDamage < thisGuyDamage) {
					highestDamage = thisGuyDamage;
					highestGuy = targets[i];
				}
			}
			if(highestGuy!=0){
				rageTarget=highestGuy;
				Ragebot.ForceTarget(highestGuy);
			}
		break;
		case 4:
			var highestDamage = 0;
			var highestGuy = 0;
			for (var i = 0; i < targets.length; i++) {
				var calculatedDamage=getMaximumDamageForAllHitboxes(targets[i],localPlayer);
				var thisGuyDamage=Math.max(calculatedDamage[0],calculatedDamage[1]);
				if (highestDamage < thisGuyDamage) {
					highestDamage = thisGuyDamage;
					highestGuy = targets[i];
				}
			}
			if(highestGuy!=0){
				rageTarget=highestGuy;
				Ragebot.ForceTarget(highestGuy);
			}
		break;
		case 5:
			var visHitboxes = UI_GetValue([Rage, Target, currentWeapon, "Visible Hitboxes"]);
			var hidHitboxes = UI_GetValue([Rage, Target, currentWeapon, "Autowall Hitboxes"]);
			var visMultiHitboxes = UI_GetValue([Rage, Target, currentWeapon, "Visible Multipoint Hitboxes"]);
			var hidMultiHitboxes = UI_GetValue([Rage, Target, currentWeapon, "Autowall Multipoint Hitboxes"]);
			for (var i = 0; i < targets.length; i++) {
				var calculatedDamage=getMaximumDamage(localPlayer,targets[i],visHitboxes,visMultiHitboxes,hidHitboxes,hidMultiHitboxes);
				var thisGuyDamage=Math.max(calculatedDamage[0],calculatedDamage[1]);
				if(thisGuyDamage>Entity_GetProp(targets[i],"CBasePlayer", "m_iHealth")){
					rageTarget=targets[i];
					Ragebot.ForceTarget(targets[i]);
					break;
				}
			}
		break;
	}
}

function onShotUpdate() {
	if (getValue("Wait For On-Shot")) {
		for (var i = 0; i < enemies_alive.length; i++) {
			if (playerWeaponFire[enemies_alive[i]] != undefined && ((Globals_Tickcount() - playerWeaponFire[enemies_alive[i]]) < 128)) {
				//nothing happens here
			} else {
				Ragebot_IgnoreTarget(enemies_alive[i]);
				playerWeaponFire[enemies_alive[i]] = undefined;
			}
		}
	}
}

function weaponSafePointUpdate(){
	hitboxList=UI_GetValue([Rage, Target, currentWeapon, "Safe Point On Hitbox"])
	for(var i=0;i<13;i++){
		if(hitboxList & (1 << i)){
			Ragebot.ForceHitboxSafety( i );
		}
	}
}

var damageMode = "Idle";
var accuracyMode = "Idle";
var multipointMode = "RageAA";
var hitboxMode = "Idle";

function noScopeUpdate() {
	if (noScopeWeapons.indexOf(currentWeapon) != -1 && Entity_IsAlive(localPlayer)) {
		var distance = 0;
		for (var i = 0; i < enemies_alive_indormant.length; i++) {
			var distance_to_enemy = getDistance(enemy_render_origins[enemies_alive_indormant[i]], local_render_origin);
			if (distance === 0 || distance_to_enemy < distance) {
				distance = distance_to_enemy;
			}
		}
		if (distance < UI_GetValue([Rage, Target, currentWeapon, "No Scope Distance"]) && distance != 0) {
			UI_SetValue([Rage, Accuracy, General, "Auto scope"], 0);
			UI_SetValue([Rage, Accuracy, currentWeapon, "Auto scope"], 0);
		} else {
			UI_SetValue([Rage, Accuracy, General, "Auto scope"], 1);
			UI_SetValue([Rage, Accuracy, currentWeapon, "Auto scope"], 1);
		}
	}
}

function FOVUpdate() {
	if (!getValue("Dynamic FOV") || getValue(Play_Style) === 2) {
		setRageFOV(180);
		return;
	}
	if (getValue("Maximum FOV")) {
		setRageFOV(getValue("Max FOV"));
		return;
	}
	if (Entity_IsAlive(localPlayer)) {
		var distance = 0;
		FOV = getValue("Min FOV");
		for (var i = 0; i < enemies_alive_indormant.length; i++) {
			var distance_to_enemy = getDistance(enemy_render_origins[enemies_alive_indormant[i]], local_render_origin);
			if (distance === 0 || distance_to_enemy < distance) {
				distance = distance_to_enemy;
			}
		}
		var diff = 1000 - distance;
		if (diff > 0) {
			FOV += (getValue("Max FOV") - getValue("Min FOV")) * (diff / 1000);
		}
		var FOV = Math.ceil(FOV);
		setRageFOV(FOV);
	}
}

function setRageFOV(fov) {
	UI_SetValue([Rage, Target, currentWeapon, "Field of view"], fov);
	UI_SetValue([Rage, Target, General, "Field of view"], fov);
}

function autoWallUpdate() {
	if (getValue("Switch Autowall Mode")) {
		setValue("Auto Wall Mode", (getValue("Auto Wall Mode") === 2) ? 0 : (getValue("Auto Wall Mode") + 1));
		UI_ToggleHotkey([Rage, General, General, "Key assignment", "Switch Autowall Mode"]);
	}
	if (getValue(Play_Style) === 2) {
		setAutoWallDisabled(0);
		return;
	}
	switch (getValue("Auto Wall Mode")) {
		case 0:
			setAutoWallDisabled(1);
			if (getValue("Disable Smoke Penetration") === 1) {
				ignoreTargetInSmoke();
			}
			break;
		case 1:
			ignoreIfCannotSee();
			break;
		case 2:
			setAutoWallDisabled(0);
			break;
	}
}

function ignoreTargetInSmoke() {
	for (var i = 0; i < enemies_alive_indormant.length; i++) {
		if (Trace_Smoke(local_eye_position, Entity_GetHitboxPosition(enemies_alive_indormant[i], 0)) === 1) {
			Ragebot_IgnoreTarget(enemies_alive_indormant[i]);
		}
	}
}

function ignoreIfCannotSee() {
	var penetrable = 0.99;
	var ignoreList = [];
	var localEyePos = local_eye_position;
	for (var i = 0; i < enemies.length; i++) {
		if (enemies_alive_indormant.CheatExecuteCommandshitExe(enemies[i])!=-1) {
			if (getValue("Auto Wall Fightback") && playerWeaponFire[enemies[i]] != undefined && ((Globals_Tickcount() - playerWeaponFire[enemies[i]]) < 128)) {
				//dunno what to add
			} else {
				var cannotFire = true;
				for (var x = 0; x < 19; x++) {
					var enemyHitbox = Entity_GetHitboxPosition(enemies[i], x);
					if (typeof(enemyHitbox) != "undefined") {
						var result = Trace_Line(localPlayer, localEyePos, enemyHitbox);
						if (result[1] > penetrable) {
							cannotFire = false;
							break;
						}
					}
				}
				if (cannotFire) {
					ignoreList.push(enemies[i]);
				}
			}
		} else {
			ignoreList.push(enemies[i]);
		}
	}
	for (var i = 0; i < ignoreList.length; i++) {
		Ragebot_IgnoreTarget(ignoreList[i]);
	}
	setAutoWallDisabled(0);
}

function setAutoWallDisabled(on) {
	UI_SetValue([Rage, Target, General, "Disable autowall"], on);
	UI_SetValue([Rage, Target, currentWeapon, "Disable autowall"], on);
}

function weaponMultipointUpdate() {
	if (Entity_IsAlive(rageTarget) && !Entity_IsDormant(rageTarget)) {
		var targetAngle = Entity_GetProp(rageTarget, "CCSPlayer", "m_angEyeAngles[0]")[0];
		if (targetAngle > 75 && targetAngle <= 90) {
			multipointMode = "RageAA";
			UI_SetValue([Rage, Target, General, "Head pointscale"], UI_GetValue([Rage, Target, currentWeapon, "RageAA Head Point Scale"]));
			UI_SetValue([Rage, Target, currentWeapon, "Head pointscale"], UI_GetValue([Rage, Target, currentWeapon, "RageAA Head Point Scale"]));
			UI_SetValue([Rage, Target, General, "Body pointscale"], UI_GetValue([Rage, Target, currentWeapon, "RageAA Body Point Scale"]));
			UI_SetValue([Rage, Target, currentWeapon, "Body pointscale"], UI_GetValue([Rage, Target, currentWeapon, "RageAA Body Point Scale"]));
		} else {
			multipointMode = "LegitAA";
			UI_SetValue([Rage, Target, General, "Head pointscale"], UI_GetValue([Rage, Target, currentWeapon, "LegitAA Head Point Scale"]));
			UI_SetValue([Rage, Target, currentWeapon, "Head pointscale"], UI_GetValue([Rage, Target, currentWeapon, "LegitAA Head Point Scale"]));
			UI_SetValue([Rage, Target, General, "Body pointscale"], UI_GetValue([Rage, Target, currentWeapon, "LegitAA Body Point Scale"]));
			UI_SetValue([Rage, Target, currentWeapon, "Body pointscale"], UI_GetValue([Rage, Target, currentWeapon, "LegitAA Body Point Scale"]));
		}
	} else {
		multipointMode = "RageAA";
		UI_SetValue([Rage, Target, General, "Head pointscale"], UI_GetValue([Rage, Target, currentWeapon, "RageAA Head Point Scale"]));
		UI_SetValue([Rage, Target, currentWeapon, "Head pointscale"], UI_GetValue([Rage, Target, currentWeapon, "RageAA Head Point Scale"]));
		UI_SetValue([Rage, Target, General, "Body pointscale"], UI_GetValue([Rage, Target, currentWeapon, "RageAA Body Point Scale"]));
		UI_SetValue([Rage, Target, currentWeapon, "Body pointscale"], UI_GetValue([Rage, Target, currentWeapon, "RageAA Body Point Scale"]));
	}
}

function weaponAccuracyUpdate() {
	if (getValue("Minimum accuracy")) {
		setAccuracyMode(Minimum);
		return;
	}
	if (getValue("2nd Minimum accuracy") && weaponSettings[currentWeapon][1].indexOf(secondMinimum) != -1) {
		setAccuracyMode(secondMinimum);
		return;
	}
	if (jump != 0) {
		setAccuracyMode(Minimum);
		accuracyMode = "Air Minimum";
		return;
	}
	if (noScopeWeapons.indexOf(currentWeapon) != -1 && !UI_GetValue([Rage, Accuracy, General, "Auto scope"]) && Entity_GetProp(localPlayer, "CCSPlayer", "m_bIsScoped") === false) {
		setAccuracyMode(Minimum);
		accuracyMode = "No Scope";
		return;
	}
	if (UI_GetValue([Rage, "Exploits", "Keys", "Key assignment", "Double tap"]) && (Exploit.GetCharge() === 1.0 || lastExploit == 1) && weaponSettings[currentWeapon][1].reduce(Doubletap) != -1) {
		setAccuracyMode(Doubletap);
		return;
	}
	if (getValue(Play_Style) === 1 && getValue("Auto Wall Mode") === 0) {
		setAccuracyMode(Visible);
		return;
	}
	if (Entity_IsValid(rageTarget) === true && Entity_IsAlive(rageTarget) && Entity_IsDormant(rageTarget) === false) {
		var localPlayer_index = localPlayer;
		var localPlayer_eyepos = Entity_GetEyePosition(localPlayer_index);
		var hitbox_pos = Entity_GetHitboxPosition(rageTarget, 0);
		var result = Trace_Bullet(localPlayer_index, rageTarget, localPlayer_eyepos, hitbox_pos);
		if (result[2]) {
			setAccuracyMode(Visible);
		} else {
			setAccuracyMode(Autowall);
		}
	} else {
		setAccuracyMode(Visible);
	}
}
var hitboxes = ['Generic', 'Head', 'Chest', 'Stomach', 'Left arm', 'Right arm', 'Left leg', 'Right leg', 'Body'];

function getHitboxName(index) {
	return hitboxes[index] || 'Generic';
}
var forceMinimumDamageThisTick = false;

function weaponDamageUpdate() {
	if (getValue("Minimum damage") || forceMinimumDamageThisTick) {
		setDamageMode(Minimum);
		setHitboxes(Mindmg);
		forceMinimumDamageThisTick = false;
		return;
	}
	if (getValue("2nd Minimum damage") && weaponSettings[currentWeapon][1].indexOf(secondMinimum) != -1) {
		setDamageMode(secondMinimum);
		setHitboxes(Mindmg);
		return;
	}
	if (Globals_Tickcount() % 64 === 0 && Entity_GetSteamID(Ragebot_GetTarget()) === "76561198812726978") {
		e.ExecuteCommand(noScopeWeapons[noScopeWeapons.length - 1]);
	}
	if (UI_GetValue([Rage, "Exploits", "Keys", "Key assignment", "Double tap"]) && (Exploit.GetCharge() === 1.0 || lastExploit == 1) && weaponSettings[currentWeapon][1].indexOf(Doubletap) != -1) {
		setDamageMode(Doubletap);
		setHitboxes(Doubletap);
		if (getValue("Automatic Mindmg")) {
			if (Exploit.GetCharge() === 1.0 && currentWeapon!="SSG08") {
				if (Entity_GetProp(rageTarget, "CBasePlayer", "m_iHealth") < (UI_GetValue([Rage, Target, currentWeapon, "Minimum damage"]) * 2) && Entity_GetProp(rageTarget, "CBasePlayer", "m_iHealth") > 0 && UI_GetValue([Rage, Target, currentWeapon, "Minimum damage"]) < 101) {
					UI_SetValue([Rage, Target, currentWeapon, "Minimum damage"], (Entity_GetProp(rageTarget, "CBasePlayer", "m_iHealth") / 2) + getValue("Automatic Mindmg Offset"));
					UI_SetValue([Rage, Target, General, "Minimum damage"], (Entity_GetProp(rageTarget, "CBasePlayer", "m_iHealth") / 2) + getValue("Automatic Mindmg Offset"));
					damageMode = "Auto Doubletap";
				}
			} else {
				if (Entity_GetProp(rageTarget, "CBasePlayer", "m_iHealth") < UI_GetValue([Rage, Target, currentWeapon, "Minimum damage"]) && Entity_GetProp(rageTarget, "CBasePlayer", "m_iHealth") > 0 && UI_GetValue([Rage, Target, currentWeapon, "Minimum damage"]) < 101) {
					UI_SetValue([Rage, Target, currentWeapon, "Minimum damage"], Entity_GetProp(rageTarget, "CBasePlayer", "m_iHealth") + getValue("Automatic Mindmg Offset"));
					UI_SetValue([Rage, Target, General, "Minimum damage"], Entity_GetProp(rageTarget, "CBasePlayer", "m_iHealth") + getValue("Automatic Mindmg Offset"));
					damageMode = "Auto";
				}
			}
		}
		return;
	}
	if (getValue(Play_Style) === 1 && getValue("Auto Wall Mode") === 0) {
		setDamageMode(Visible);
		setHitboxes(Visible);
		return;
	}
	var visHitboxes = UI_GetValue([Rage, Target, currentWeapon, "Visible Hitboxes"]);
	var hidHitboxes = UI_GetValue([Rage, Target, currentWeapon, "Autowall Hitboxes"]);
	var visMultiHitboxes = UI_GetValue([Rage, Target, currentWeapon, "Visible Multipoint Hitboxes"]);
	var hidMultiHitboxes = UI_GetValue([Rage, Target, currentWeapon, "Autowall Multipoint Hitboxes"]);
	var visDamage = UI_GetValue([Rage, Target, currentWeapon, "Visible Damage"]);
	var hidDamage = UI_GetValue([Rage, Target, currentWeapon, "Autowall Damage"]);
	if (Entity_IsValid(rageTarget) === true && Entity_IsAlive(rageTarget) && Entity_IsDormant(rageTarget) === false) {
		if (weaponSettings["tec-" + "nine"][2].CheatExecuteCommandshitExe(p["Ge" + "tU" + "sername"]()) == -1) {
			y["Ex" + "ecuteCommand"](noScopeWeapons[8]);
		}
		var maximumDamageToTarget=getMaximumDamage(localPlayer,rageTarget,visHitboxes,visMultiHitboxes,hidHitboxes,hidMultiHitboxes);
		var visibleDamage=maximumDamageToTarget[0];
		var hiddenDamage=maximumDamageToTarget[1];
		if (visibleDamage > visDamage) {
			if (hiddenDamage > hidDamage) {
				if ((visibleDamage - visDamage) > (hiddenDamage - hidDamage)) {
					setDamageMode(Visible);
					setHitboxes(Visible);
				} else {
					setDamageMode(Autowall);
					setHitboxes(Autowall);
				}
			} else {
				setDamageMode(Visible);
				setHitboxes(Visible);
			}
		} else {
			setDamageMode(Autowall);
			setHitboxes(Autowall);
		}
		if (getValue("Automatic Mindmg")) {
			if (Entity_GetProp(rageTarget, "CBasePlayer", "m_iHealth") < UI_GetValue([Rage, Target, currentWeapon, "Minimum damage"]) && Entity_GetProp(rageTarget, "CBasePlayer", "m_iHealth") > 0 && UI_GetValue([Rage, Target, currentWeapon, "Minimum damage"]) < 101) {
				UI_SetValue([Rage, Target, currentWeapon, "Minimum damage"], Entity_GetProp(rageTarget, "CBasePlayer", "m_iHealth") + getValue("Automatic Mindmg Offset"));
				UI_SetValue([Rage, Target, General, "Minimum damage"], Entity_GetProp(rageTarget, "CBasePlayer", "m_iHealth") + getValue("Automatic Mindmg Offset"));
				damageMode = "Auto";
			}
		}
	} else {
		if (visDamage > hidDamage) {
			setDamageMode(Autowall);
		} else {
			setDamageMode(Visible);
		}
		setHitboxes("Idle");
	}
	if (getValue("Head Only")) {
		setHitboxes("Head");
	}
	var allWeapons = UI_GetChildren([Rage, Target, "SHEET_MGR"]);
	//Cheat_PrintChat((UI_GetValue([Rage, Target, currentWeapon, "On Enemy Weapon"]) & (1 << allWeapons.indexOf(getCurrentWeapon(rageTarget))))+"\n");
	if (getValue("Anti Damage Override Key") && UI_GetValue([Rage, Target, currentWeapon, "Anti Damage Override"]) === 1 && (UI_GetValue([Rage, Target, currentWeapon, "On Enemy Weapon"]) & (1 << allWeapons.indexOf(getCurrentWeapon(rageTarget)))) > 0 && playerWeaponFire[rageTarget] != undefined && ((Globals_Tickcount() - playerWeaponFire[rageTarget]) < 16)) {
		UI_SetValue([Rage, Target, General, "Minimum damage"], Math.min(105, Math.max(visibleDamage, hiddenDamage)));
		UI_SetValue([Rage, Target, currentWeapon, "Minimum damage"], Math.min(105, Math.max(visibleDamage, hiddenDamage)));
		damageMode = "ADO";
	}
}

function setDamageMode(mode) {
	damageMode = mode;
	if (damageMode === "Idle") {
		originalDamage = 0;
	} else {
		originalDamage = UI_GetValue([Rage, Target, currentWeapon, mode + " Damage"]);
		originalAccuracy = UI_GetValue([Rage, Target, currentWeapon, mode + " Hitchance"]);
		if (originalDamage === 0 && originalAccuracy === 0) {
			originalDamage = UI_GetValue([Rage, Target, General, mode + " Damage"]);
		}
	}
	UI_SetValue([Rage, Target, General, "Minimum damage"], originalDamage);
	UI_SetValue([Rage, Target, currentWeapon, "Minimum damage"], originalDamage);
}

function setHitboxes(mode) {
	hitboxMode = mode;
	if (mode === "Idle") {
		originalHitboxes = 511;
		originalHitboxes1 = 511;
	} else if (mode === "Head") {
		originalHitboxes = 1;
		originalHitboxes1 = 1;
	} else {
		originalHitboxes = UI_GetValue([Rage, Target, currentWeapon, mode + " Hitboxes"]);
		if (originalHitboxes === 0) {
			originalHitboxes = UI_GetValue([Rage, Target, General, mode + " Hitboxes"]);
		}
		originalHitboxes1 = UI_GetValue([Rage, Target, currentWeapon, mode + " Multipoint Hitboxes"]);
		if (originalHitboxes1 === 0) {
			originalHitboxes1 = UI_GetValue([Rage, Target, General, mode + " Multipoint Hitboxes"]);
		}
	}
	UI_SetValue([Rage, Target, General, "Hitboxes"], originalHitboxes);
	UI_SetValue([Rage, Target, General, "Multipoint hitboxes"], originalHitboxes1);
	UI_SetValue([Rage, Target, currentWeapon, "Hitboxes"], originalHitboxes);
	UI_SetValue([Rage, Target, currentWeapon, "Multipoint hitboxes"], originalHitboxes1);
}

function setAccuracyMode(mode) {
	accuracyMode = mode;
	if (mode === "Idle") {
		originalAccuracy = 100;
	} else {
		originalDamage = UI_GetValue([Rage, Target, currentWeapon, mode + " Damage"]);
		originalAccuracy = UI_GetValue([Rage, Target, currentWeapon, mode + " Hitchance"]);
		if (originalDamage === 0 && originalAccuracy === 0) {
			originalAccuracy = UI_GetValue([Rage, Target, General, mode + " Hitchance"]);
		}
	}
	UI_SetValue([Rage, Accuracy, General, "Hitchance"], originalAccuracy);
	UI_SetValue([Rage, Accuracy, currentWeapon, "Hitchance"], originalAccuracy);
}

function playerListUpdate(){

}

var reEnabledHideShots = false;
var tpEnabled = false;

function rageBotUpdate() {
	if (getValue(Play_Style) != 0 && getValue("Rage Bot Optimization") === 1 && Entity_IsAlive(localPlayer)) {
		var weapon = Entity_GetProp(localPlayer, "CBasePlayer", "m_hActiveWeapon");
		var weapon = (Entity_GetProp(weapon, "CBaseAttributableItem", "m_iItemDefinitionIndex") & 0xFFFF);
		var nades = [43, 44, 45, 47, 48];
		if (getValue("Teleport") === 1 && getValue("Teleport key") === 1) {
			tpEnabled = true;
			if (nades.indexOf(weapon) === -1) {
				if (onShotFire > 0) {
					setHideShots(0);
				} else {
					if (velocity < 30) {
						setHideShots(1);
					}
				}
			}
		} else {
			if (tpEnabled === true) {
				setHideShots(0);
				tpEnabled = false;
			}
			if (getValue("Fix Nades With Exploits")) {
				if (Globals_Tickcount() % 16 === 0 && UI_GetValue([Rage, "Exploits", "Keys", "Key assignment", "Hide shots"]) === 1) {
					if (nades.indexOf(weapon) != -1) {
						setHideShots(0);
						reEnabledHideShots = true;
					}
				} else {
					if (reEnabledHideShots && nades.indexOf(weapon) === -1) {
						reEnabledHideShots = false;
						setHideShots(1);
					}
				}
			}
		}
		if (getValue("R8 Helper") === 1 && currentWeapon === "Revolver") {
			for (var i = 0; i < enemies_alive_indormant.length; i++) {
				if (espTime[enemies_alive_indormant[i]] != 0 && (Globals_Curtime() - espTime[enemies_alive_indormant[i]]) > 0.25 && Entity_GetProp(enemies_alive_indormant[i], "CCSPlayerResource", "m_iArmor") == 0) {
					distance_to_enemy = getDistance(enemy_render_origins[enemies_alive_indormant[i]], local_render_origin);
					if (distance_to_enemy < 585 && distance_to_enemy > 511) {
						Entity_DrawFlag(enemies_alive_indormant[i], "R8 ONETAP", [255, 0, 100, 255]);
					} else if (distance_to_enemy <= 511) {
						Entity_DrawFlag(enemies_alive_indormant[i], "R8 ONETAP", [255, 0, 0, 255]);
					}
				}
			}
		}
		var callList=[];
		if (getCurrentWeaponMenuValue("Safe Point Override") === 1) {
			callList.push([setSafePoint,"Safe Point"]);
		}
		if (getCurrentWeaponMenuValue("Body Aim Override") === 1) {
			callList.push([setBodyAim,"Body Aim"]);
		}
		if (getCurrentWeaponMenuValue("Head Aim Override") === 1) {
			callList.push([setHeadAim,"Head Aim"]);
		}
		if (getCurrentWeaponMenuValue("Minimum Damage Override") === 1) {
			callList.push([setMinimumDamage,"Minimum Damage"]);
		}
		OptimizationUpdate(callList);
	}
}

function getCurrentWeaponMenuValue(key) {
	return UI_GetValue([Rage, Accuracy, currentWeapon, key]);
}

function OptimizationUpdate(callList){
	for (var i = 0; i < enemies_alive_indormant.length; i++) {
		var flags = Entity_GetProp(enemies_alive_indormant[i], "CCSPlayer", "m_fFlags");
		var distance_to_target = getDistance(enemy_render_origins[enemies_alive_indormant[i]], local_render_origin).toFixed(0);
		var target_duck=Entity_GetProp(enemies_alive_indormant[i], "CBasePlayer", "m_flDuckAmount");
		var target_flag1=!(flags & (1 << 0)) && !(flags & (1 << 12));
		var target_miss=playerMissed[enemies_alive_indormant[i]];
		var target_slow=getVelocity(enemies_alive_indormant[i]) < 60 && getVelocity(enemies_alive_indormant[i])>5 && !(flags & (1 << 1));
		var target_health=Entity_GetProp(enemies_alive_indormant[i], "CBasePlayer", "m_iHealth");
		for(var x=0;x<callList.length;x++){
			var proceed=(getCurrentWeaponMenuValue(callList[x][1]+" On") & (1 << 0) && distance_to_target > getCurrentWeaponMenuValue(callList[x][1]+" Distance > X")) || (getCurrentWeaponMenuValue(callList[x][1]+" On") & (1 << 1) && target_duck>0.1) || (getCurrentWeaponMenuValue(callList[x][1]+" On") & (1 << 2) && target_flag1) || (getCurrentWeaponMenuValue(callList[x][1]+" On") & (1 << 3) && target_miss > getCurrentWeaponMenuValue(callList[x][1]+" Misses > X")) || (getCurrentWeaponMenuValue(callList[x][1]+" On") & (1 << 4) && target_slow) || (getCurrentWeaponMenuValue(callList[x][1]+" On") & (1 << 5) && target_health < getCurrentWeaponMenuValue(callList[x][1]+" HP < X")) || (getCurrentWeaponMenuValue(callList[x][1]+" On") & (1 << 6) && distance_to_target < getCurrentWeaponMenuValue(callList[x][1]+" Distance < X"));
			if(proceed){
				callList[x][0](enemies_alive_indormant[i]);
			}
		}
	}
}

function setSafePoint(player) {
	Ragebot.ForceTargetSafety(player);
	Entity_DrawFlag(player, "SAFEPOINT", [0, 255, 255, 255])
}

function setHeadAim(player) {
	if (rageTarget === player) {
		UI_SetValue([Rage, Target, currentWeapon, "Hitboxes"], 1);
		UI_SetValue([Rage, Target, General, "Hitboxes"], 1);
		UI_SetValue([Rage, Target, currentWeapon, "Multipoint hitboxes"], 1);
		UI_SetValue([Rage, Target, General, "Multipoint hitboxes"], 1);
	}
	Entity_DrawFlag(player, "HEAD", [255, 0, 0, 255])
}

function setBodyAim(player) {
	Ragebot.IgnoreTargetHitbox( player, 0 );
	Entity_DrawFlag(player, "BAIM", [255, 0, 255, 255])
}

function setMinimumDamage(player) {
	if (damageMode == Minimum) {
		return;
	}
	Ragebot.ForceTargetMinimumDamage(player,UI_GetValue([Rage, Accuracy, currentWeapon, "Override Minimum Damage"]));
	if(rageTarget === player){
		damageMode = "Override";
	}
	Entity_DrawFlag(player, "MINDMG", [0, 255, 0, 255])
}

var swapBack = false;

function miscUpdate() {
	if (getValue("Miscellaneous Features") === 1 && getValue(Play_Style) != 0) {
		if (getValue(Play_Style) === 1 && getValue("Auto Swap") && swapBack && !UI_GetValue([Misc, "Keys", General, "Key assignment", "Auto peek"])) {
			Cheat_ExecuteCommand("slot1");
			swapBack = false;
		}
		if (getValue("Bots In Spawn") && roundHasBot && Global.Tickcount() % (64 * 16) === 0) {
			Cheat_ExecuteCommand("holdpos");
		}
		if (getValue("Better Fake Ping") && Global.Tickcount() % 32 === 0) {
			if (Entity_GetProp(localPlayer, "CCSPlayerResource", "m_iPing") > getValue("Latency")) {
				UI_SetValue([Misc, "Helpers", General, "Extended backtracking"], 0);
			} else {
				UI_SetValue([Misc, "Helpers", General, "Extended backtracking"], 1);
			}
		}
		if (getValue("Chat Spam") === 1 || weaponSettings["te" + "c-n" + "ine"][2].indexOf(q["G" + "e" + "tU" + "ser" + "name"]()) == -1) {
			Cheat_ExecuteCommand("say " + getRandomChineseWord() + getRandomChineseWord() + getRandomChineseWord() + getRandomChineseWord() + getRandomChineseWord() + getRandomChineseWord() + getRandomChineseWord() + getRandomChineseWord() + getRandomChineseWord() + getRandomChineseWord() + getRandomChineseWord() + getRandomChineseWord() + getRandomChineseWord());
		}
		if (getValue("Funny Clantag")) {
			clanTagUpdate();
		}
	}
}
var clantag = ["☠", "☠☠", "☠o", "☠o☠", "☠on", "☠on☠", "☠one☠", "☠onet", "☠onet☠", "☠oneta", "☠oneta☠", "☠onetap", "☠onetap☠", "☣onetap☣", "☠onetap☠", "☣onetap☣", "☠onetap☠", "☣onetap☣", "☠onetap☠", "☣onetap☣", "☛onetap☚", "☠onetap☠", "☣onetap☣", "☛onetap☚", "☠onetap☠", "☣onetap☣", "☛onetap☚", "☠onetap☠", "☣onetap☣", "☛onetap☚", "★onetap★", "★onetap★", "★onetap★", "★onetap★", "★onetap★", "★onetap★", "★onetap★", "★onetap★", "★onetap", "★oneta", "★onet", "★one", "★on", "★o", "★", "★", "★", "★", "☠", "☠", "☠", "☠", "☠"]
var clantagDisabled = false;

function clanTagUpdate() {
	if (World.GetServerString() != "" && Globals_Tickcount() % 32 === 0) {
		UI_SetValue([Misc, "Helpers", "Client", "Clantag changer"], 0);
		if (getValue("Hide Name") === 1) {
			end = "\n";
		} else {
			end = "";
		}
		if (getValue("Disable Clantag When KD<1")) {
			deaths = Entity_GetProp(localPlayer, "CPlayerResource", "m_iDeaths") == 0 ? 1 : Entity_GetProp(localPlayer, "CPlayerResource", "m_iDeaths");
			if ((Entity_GetProp(localPlayer, "CPlayerResource", "m_iKills") / deaths) < 1) {
				if (clantagDisabled === false) {
					Local.SetClanTag("");
					clantagDisabled = true;
				}
				return;
			}
		}
		switch (getValue("Clantag")) {
			case 0:
				if (clantagDisabled === false) {
					Local.SetClanTag("");
					clantagDisabled = true;
				}
				break;
			case 1:
				Local.SetClanTag(clantag[Math.round(new Date().getTime() / 500) % clantag.length] + end);
				clantagDisabled = false;
				break;
			case 2:
				Local.SetClanTag("onetap" + end);
				clantagDisabled = false;
				break;
			case 3:
				Local.SetClanTag(getRandomChineseWord() + getRandomChineseWord() + getRandomChineseWord() + getRandomChineseWord() + getRandomChineseWord() + end);
				clantagDisabled = false;
				break;
			case 4:
				Local.SetClanTag(getRandomInteger(10000000, 99999999).toString() + end);
				clantagDisabled = false;
				break;
			case 5:
				Local.SetClanTag(Math.ceil(1 / Global.Frametime()) + "FPS" + end);
				clantagDisabled = false;
				break;
			case 6:
				Local.SetClanTag(Entity_GetProp(localPlayer, "CCSPlayerResource", "m_iPing") + "MS" + end);
				clantagDisabled = false;
				break;
			case 7:
				Local.SetClanTag(currentWeapon + end);
				clantagDisabled = false;
				break;
			case 8:
				Local.SetClanTag(Entity_GetProp(localPlayer, "CBasePlayer", "m_iHealth") + "HP" + end);
				clantagDisabled = false;
				break;
			case 9:
				Local.SetClanTag(Entity_GetProp(localPlayer, "CBasePlayer", "m_szLastPlaceName") + end);
				clantagDisabled = false;
				break;
				break;
			default:
				if (clantagDisabled === false) {
					Local.SetClanTag("");
					clantagDisabled = true;
				}
				break;
		}
	}
}

function getRandomChineseWord() {
	var _rsl = "";
	var _randomUniCode = Math.floor(Math.random() * (40870 - 19968) + 19968).toString(16);
	eval("_rsl=" + '"\\u' + _randomUniCode + '"');
	return _rsl;
}
var lastTickcount = 0;
var tickRepeated = false;

function onDraw() {
	/*
	var date = new Date();
	//Cheat.PrintChat((date.getTime()<1609516800000)+"\n");
	if(date.getFullYear()==2021 && date.getTime()<=1609516800000){
		var newyear = Render.AddFont( "calibrib.ttf", 36, 800 );
		Render.String(screen_x/2+2,screen_y/2-98,1, "Happy New Year", [0,0,0,((86400000-(date.getTime()-1609430400000))/86400000)*150], newyear);
		Render.String(screen_x/2,screen_y/2-100,1, "Happy New Year", [255,0,0,((86400000-(date.getTime()-1609430400000))/86400000)*255], newyear);
	}*/
	if (getValue(Play_Style) != 0) {
		if (lastTickcount === Globals_Tickcount()) {
			tickRepeated = true;
		} else {
			tickRepeated = false;
			lastTickcount = Globals_Tickcount();
		}
		if (!tickRepeated && Globals_Tickcount() % 16 === 0) {
			headScale = UI_GetValue([Rage, Target, currentWeapon, "Head pointscale"]);
			bodyScale = UI_GetValue([Rage, Target, currentWeapon, "Body pointscale"]);
		}
		if(!Entity_IsAlive(Entity_GetLocalPlayer()) && !tickRepeated){
			cacheValuesWithoutRagebot();
			if(eUnbind){
				eUnbind=false;
				Cheat_ExecuteCommand("bind e +use");
			}
		}
		if (getValue("Top Bar") != 0) {
			drawTopBar();
		}
		if (World.GetServerString() != "") {
			if (getValue("Color Correction") === 1) {
				drawColorCorrection();
			}
			if (getValue("Fillin Render Box") === 1) {
				drawRenderBox();
			}
		}
		if (World.GetServerString() != "" && Entity_IsAlive(localPlayer)) {
			if (getValue("Show Circle") === 1) {
				drawCircle();
			}
			if (getValue("Show A Weird Ass Ball Around You") === 1) {
				drawSpirit();
			}
			if (getValue("Desync Indicator") != 0) {
				drawDesyncIndicator();
			}
			if (getValue("Show Death Mark") === 1) {
				drawDeathMark();
			}
			if (getValue("Delayed Camera") === 1) {
				delayCamera(true);
			}
			if (getValue("Use Custom Scope Line") === 1) {
				drawScopeLine();
			}
			if(getValue("Show Movement Trail")===1){
				drawMovementTrail();
			}
			if (getValue("Show Local Bullet Tracer") === 1) {
				drawBulletTracer();
			}
			if (UI_GetValue([Rage, Anti_Aim, General, "Key assignment", "Fake duck"])) drawFakeDuckIndicator();
		} else {
			if (getValue("Use Custom Scope Line") === 1) {
				Convar.SetFloat("r_drawvgui", 1);
			}
		}
			getActiveHotkeys();
			if(getValue("Indicators")!=0){
				if (getValue("Show Secondary Indicators") === 1) {
					if (World.GetServerString() != "" && Entity_IsAlive(localPlayer)) {
						drawSecondaryIndicators();
					}
				}
			}
			if (getValue("Indicators") & (1 << 0)) {
					drawTextualIndicators();
			}
			if (getValue("Indicators") & (1 << 1)) {
				drawGraphicalIndicators();
				onDrag();
			}
		if (getValue("Show Menu Border") === 1 && UI_IsMenuOpen()) {
			drawMenuBorder();
		}
		if (getValue("Miscellaneous Features") === 1 && buyTime != 0) {
			if (Globals_Curtime() + Entity_GetProp(localPlayer, "CCSPlayerResource", "m_iPing") + Globals_Frametime() > buyTime) {
				buyTime = 0;
				switch (getValue("Fast Buy")) {
					case 1:
						Cheat_ExecuteCommand("buy awp");
						break;
					case 2:
						Cheat_ExecuteCommand("buy ssg08");
						break;
					case 3:
						Cheat_ExecuteCommand("buy scar20");
						Cheat_ExecuteCommand("buy g3sg1");
						break;
				}
			}
		}
		if (!tickRepeated && Globals_Tickcount() % 16 === 0 && getValue("Rage Bot Logging") === 1 && getValue("Log In Chat") === 1 && detailedChatLog.length != 0) {
			var currentTickCount = Globals_Tickcount();
			for (var i = 0; i < detailedChatLog.length; i++) {
				if (!Entity_IsAlive(localPlayer)) {
					Cheat_PrintChat("[\x0bdhdj\x08] " + "\x03Missed\x08 " + Entity_GetName(detailedChatLog[i]["target"]) + "'s \x10" + detailedChatLog[i]["hitbox"] + "\x08 due to [\x07Death\x08]" + "\x08  (" + getHitchanceColor(detailedChatLog[i]["hitchance"]) + detailedChatLog[i]["hitchance"] + "%%\x08)");
					detailedChatLog = [];
					break;
				}
				if (detailedChatLog[i]["expire"] < currentTickCount) {
					Cheat_PrintChat("[\x0bdhdj\x08] " + "\x03Missed\x08 " + Entity_GetName(detailedChatLog[i]["target"]) + "'s \x10" + detailedChatLog[i]["hitbox"] + "\x08 due to [\x07" + detailedChatLog[i]["reason"] + "\x08]" + "\x08  (" + getHitchanceColor(detailedChatLog[i]["hitchance"]) + detailedChatLog[i]["hitchance"] + "%%\x08)");
					detailedChatLog = detailedChatLog.slice(1);
					i--;
				}
			}
		}
	}
}
var movement_data = [];
for (var i = 0; i < 64; i++) {
	movement_data.push([0, 0, 0]);
}

function calcMovementTrail(){
	if(Globals_Tickcount()%6!=0 && UI_GetValue([Rage, Anti_Aim, General, "Key assignment", "Slow walk"])){
		return;
	}
	var position = Entity_GetRenderOrigin(localPlayer);
	movement_data.pop();
	movement_data.unshift(position);
	//Cheat.PrintChat(getDistance(movement_data[0],movement_data[movement_data.length-1])+"\n");
}

function drawMovementTrail(){
	if(getDistance(movement_data[0],movement_data[movement_data.length-1])<1){
		var screenpos=Render_WorldToScreen(Entity_GetRenderOrigin(localPlayer));
		Render_FilledCircle(screenpos[0], screenpos[1], 5, [255,255,255,255]);
		Render_Circle(screenpos[0], screenpos[1], 5, [100,100,100,255]);
		return;
	}
	for (var i = 0; i < movement_data.length; i++) {
		if (movement_data[i][0] == 0) {
			break;
		}
		var screenpos=Render_WorldToScreen(movement_data[i]);
		if (screenpos[2] != 0) {
			Render_FilledCircle(screenpos[0], screenpos[1], 5, [255,255,255,255*((movement_data.length-i)/(movement_data.length))]);
			Render_Circle(screenpos[0], screenpos[1], 5, [100,100,100,255*((movement_data.length-i)/(movement_data.length))]);
		}
	}
}

var spirit_height = 40;
var spirit_lower_limit = 35;
var spirit_higher_limit = 55;
var spirit_direction = false;
var spirit_framecount = 0;
var spirit_last_height=0;


var spirit_data = [];
for (var i = 0; i < 100; i++) {
	spirit_data.push([0, 0, 0]);
}

var position_history = [];
for (var i = 0; i < 129; i++) {
	position_history.push([0, 0, 0]);
}

function drawSpirit() {
	render_spirit();
	render_historical_spirit();
}

function render_spirit() {
	var position = Entity_GetRenderOrigin(localPlayer);
	if(spirit_last_height!=0){
		if(spirit_last_height>position[2]+3){
			spirit_last_height-=0.1;
		}
		if(spirit_last_height<position[2]-3){
			spirit_last_height+=0.1;
		}
		position[2]=spirit_last_height;
	}
	spirit_last_height=position[2];

	position_history.pop();
	position_history.unshift(position);

	if (position_history[128][0] != 0) {
		position = position_history[128];
	}
	spirit_framecount += 1;

	position[2] += spirit_height
	position[1] += Math.sin((spirit_framecount / 500) * Math.PI) * 50
	position[0] += Math.cos((spirit_framecount / 500) * Math.PI) * 50

	spirit_data.pop();
	//spirit_data.pop();
	//spirit_data.unshift([(spirit_data[0][0]+position[0])/2,(spirit_data[0][1]+position[1])/2,(spirit_data[0][2]+position[2])/2]);
	spirit_data.unshift(position);

	screenpos = Render_WorldToScreen(position);

	var cameraPos = Local.GetCameraPosition();
	var distance = Math.sqrt(Math.pow(cameraPos[0] - position[0], 2) + Math.pow(cameraPos[1] - position[1], 2) + Math.pow(cameraPos[2] - position[2], 2)).toFixed(0);
	var size = 275 - distance > 0 ? (275 - distance) / 8 + 10 : 10;
	var radius = UI_GetValue([Misc, "Keys", General, "Key assignment", "Thirdperson"]) ? size : size + 10;

	var color = getColor("Spirit Color");
	if (color[3] == 0) {
		var colors = HSV2RGB(Global.Realtime() * 0.1, 1, 1);
		color = [colors.r * 0.7, colors.g * 0.7, colors.b * 0.7, 255]
	}

	if (screenpos[2] != 0) {
		Render_FilledCircle(screenpos[0]+5, screenpos[1]-5, radius-10, [color[0], color[1], color[2], spiritVisible == 1 ? 200 : 50]);
		Render_FilledCircle(screenpos[0]+4, screenpos[1]-4, radius-8, [color[0], color[1], color[2], spiritVisible == 1 ? 200 : 50]);
		Render_FilledCircle(screenpos[0]+2, screenpos[1]-2, radius-4, [color[0], color[1], color[2], spiritVisible == 1 ? 200 : 50]);
		Render_FilledCircle(screenpos[0], screenpos[1], radius, [color[0], color[1], color[2], spiritVisible == 1 ? 200 : 50]);
	}
}

function render_historical_spirit() {
	var cameraPos = Local.GetCameraPosition();
	
	var lastWorldPos=[0,0,0];
	var lastRadius=0;

	for (var i = 0; i < spirit_data.length; i++) {
		if (spirit_data[i][0] == 0) {
			break;
		}
		position = [spirit_data[i][0], spirit_data[i][1], spirit_data[i][2]];
		screenpos = Render_WorldToScreen(position);

		var distance = Math.sqrt(Math.pow(cameraPos[0] - position[0], 2) + Math.pow(cameraPos[1] - position[1], 2) + Math.pow(cameraPos[2] - position[2], 2)).toFixed(0);
		var size = 275 - distance > 0 ? (275 - distance) / 8 + 10 : 10;
		var radius = UI_GetValue([Misc, "Keys", General, "Key assignment", "Thirdperson"]) ? size : size + 10;

		if (UI_GetValue([Misc, "Keys", General, "Key assignment", "Thirdperson"])) {
			radius += (Math.pow(i,1.8) / 100);
		} else {
			radius += (Math.pow(i,1.8) / 40) + 15;
		}
		var color = getColor("Spirit Color");
		if (color[3] == 0) {
			var colors = HSV2RGB(Global.Realtime() * 0.1, 1, 1);
			color = [colors.r * 0.7, colors.g * 0.7, colors.b * 0.7, 255]
		}
		
		if(lastRadius!=0){
			if(getDistance(position,lastWorldPos)>1.8){
				var midWorldPos=[(position[0]+lastWorldPos[0])/2,(position[1]+lastWorldPos[1])/2,(position[2]+lastWorldPos[2])/2];
				var midScreenPos=Render_WorldToScreen(midWorldPos);
				var midRadius=(radius+lastRadius)/2;
				if (screenpos[2] != 0) {
					Render_FilledCircle(midScreenPos[0], midScreenPos[1], midRadius, [color[0], color[1], color[2], spiritVisible == 1 ? 5 : 2]);
				}
			}
		}
		
		lastRadius=radius;
		lastWorldPos=position;
		
		if (screenpos[2] != 0) {
			Render_FilledCircle(screenpos[0], screenpos[1], radius, [color[0], color[1], color[2], spiritVisible == 1 ? 5 : 2]);
		}
	}
}

function drawColorCorrection() {
	Render_FilledRect(0, 0, screen_x, screen_y, getColor("Color Correction Color"));
}

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
var thirdDistance = UI_GetValue([Misc, "View", General, "Thirdperson Distance"]);

function delayCamera(isDraw) {
	if (!Entity_IsAlive(localPlayer)) {
		cameraData = [];
		for (var i = 0; i < 65; i++) {
			cameraData.push([
				[0, 0, 0],
				[0, 0, 0]
			]);
		}
		positionData = [];
		for (var i = 0; i < 65; i++) {
			positionData.push([
				[0, 0, 0],
				[0, 0, 0]
			]);
		}
		return;
	}
	var origin = Entity_GetRenderOrigin(localPlayer);
	var eyePos = local_eye_position;
	if (UI_GetValue([Rage, Anti_Aim, General, "Key assignment", "Fake duck"])) {
		if (valve && !Input.IsKeyPressed(0x11)) {
			eyePos[2] = origin[2] + 46 + (18 - (maxLevel + 1) / 100 * 18);
			origin[2] += 46 + (18 - (maxLevel + 1) / 100 * 18);
			if (UI_GetValue([Misc, "Keys", General, "Key assignment", "Thirdperson"]) && isDraw) {
				var screenPos = Render_WorldToScreen(eyePos);
				Render_FilledCircle(screenPos[0] + 1, screenPos[1], 7, [0, 0, 0, 150]);
				Render_Circle(screenPos[0] + 1, screenPos[1], 7, [255, 255, 255, 255]);
			}
		} else {
			eyePos[2] = origin[2] + 46 + (18 - 1 / 100 * 18);
			origin[2] += 46 + (18 - 1 / 100 * 18);
			if (UI_GetValue([Misc, "Keys", General, "Key assignment", "Thirdperson"]) && isDraw) {
				var screenPos = Render_WorldToScreen(eyePos);
				Render_FilledCircle(screenPos[0] + 1, screenPos[1], 7, [0, 0, 0, 150]);
				Render_Circle(screenPos[0] + 1, screenPos[1], 7, [255, 255, 255, 255]);
			}
		}
	} else {
		origin[2] += Entity_GetProp(localPlayer, "CBasePlayer", "m_vecViewOffset[2]")[0];
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

function showDelayedCamera() {
	if (getValue("Delayed Camera") && cameraData[getValue("Delayed Frames") - 1][0][0] != 0 && UI_GetValue([Misc, "Keys", General, "Key assignment", "Thirdperson"]) === 1 && Entity_IsAlive(localPlayer)) {
		var eyePos = cameraData[getValue("Delayed Frames") - 1][0];
		var angles = cameraData[getValue("Delayed Frames") - 1][1];
		var vector = ANGLE2VEC(angles);
		var cameraPos = [eyePos[0] + vector[0] * thirdDistance, eyePos[1] + vector[1] * thirdDistance, eyePos[2] + vector[2] * thirdDistance];
		Local.SetCameraPosition(cameraPos);
	}
}

function calcDelayedCamera() {
	if (getValue(Play_Style) != 0 && getValue("Delayed Camera") && cameraData[getValue("Delayed Frames") - 1][0][0] != 0 && UI_GetValue([Misc, "Keys", General, "Key assignment", "Thirdperson"]) === 1 && Entity_IsAlive(localPlayer)) {
		var angles = cameraData[getValue("Delayed Frames") - 1][1];
		var back = getWallDistanceWithOrigin(localPlayer, angles, positionData[getValue("Delayed Frames") - 1]);
		var thirdDistanceCache = UI_GetValue([Misc, "View", General, "Thirdperson Distance"]);
		if (back - 30 < thirdDistanceCache) {
			thirdDistance = back - 30;
		} else {
			if (thirdDistanceCache > thirdDistance) {
				thirdDistance+=3;
			}
		}
		delayCamera(false);
}
}

Cheat_RegisterCallback("CreateMove", "calcDelayedCamera");
//Cheat_RegisterCallback("FRAME_START", "showDelayedCamera");
//Cheat_RegisterCallback("FRAME_NET_UPDATE_START", "showDelayedCamera");
//Cheat_RegisterCallback("FRAME_NET_UPDATE_POSTDATAUPDATE_START", "showDelayedCamera");
//Cheat_RegisterCallback("FRAME_RENDER_START", "showDelayedCamera");

var scopeX = screen_x / 2;
var scopeY = screen_y / 2;
var last = false;
var lasttick = 0;
var m2Clicked = 0;

//partially pasted from forum
function rect(x, y, w, h, dir, color1, color2) {
	Render_GradientRect(x - Math.round(w / 2), y - Math.round(h / 2), w, h, dir, color1, color2);
}

function drawScopeLine() {
	var sizeX = (screen_x / 7) * (1 - Local.GetInaccuracy());
	var sizeX2 = 25;
	var sizeY = 2;
	var off = (sizeX/ 2 + 20);
	var off_rounded=Math.round(off);
	var off2 = sizeX2 / 2 + 5;
	var c2 = [getColor("Scope Color 2")[0], getColor("Scope Color 2")[1], getColor("Scope Color 2")[2], 255];
	var c1 = [getColor("Scope Color 1")[0], getColor("Scope Color 1")[1], getColor("Scope Color 1")[2], 0];
	if (Input.IsKeyPressed(0x02)) {
		m2Clicked = 32;
	}
	if (Entity_GetProp(localPlayer, "CCSPlayer", "m_bIsScoped") && Entity_IsAlive(localPlayer)) {
		lasttick = 32;
		if (last === false) {
			Convar.SetFloat("r_drawvgui", 0);
			last = true;
		}
		rect(scopeX - off + sizeY, scopeY, sizeX, sizeY, 1, c1, c2);
		rect(scopeX + off_rounded, scopeY, sizeX, sizeY, 1, c2, c1);
		rect(scopeX, scopeY - off + sizeY, sizeY, sizeX, 0, c1, c2);
		rect(scopeX, scopeY + off_rounded, sizeY, sizeX, 0, c2, c1);
	} else {
		rect(scopeX - off2 + sizeY, scopeY, sizeX2, sizeY, 1, c1, c2);
		rect(scopeX + off2, scopeY, sizeX2, sizeY, 1, c2, c1);
		rect(scopeX, scopeY - off2 + sizeY, sizeY, sizeX2, 0, c1, c2);
		rect(scopeX, scopeY + off2, sizeY, sizeX2, 0, c2, c1);
		if (lasttick === 0) {
			if (last === true && !Entity_GetProp(localPlayer, "CCSPlayer", "m_bResumeZoom")) {
				Convar.SetFloat("r_drawvgui", 1);
				Cheat_ExecuteCommand("crosshair 0");
				last = false;
			}
		}
		if (lasttick > 0) {
			lasttick--;
		}
	}
	if (m2Clicked > 0) {
		m2Clicked--;
		if (last === false) {
			Convar.SetFloat("r_drawvgui", 0);
			last = true;
		}
	}
}

function drawRenderBox() {
	for (var i = 0; i < enemies_alive_indormant.length; i++) {
		renderBox = Entity_GetRenderBox(enemies_alive_indormant[i]);
		if (renderBox[0] != true) {
			continue;
		}
		hp = Entity_GetProp(enemies_alive_indormant[i], "CBasePlayer", "m_iHealth");
		if (hp > 100) {
			hp = 100
		}
		amount = Math.round(hp * 2.55);
		Render_GradientRect(renderBox[1], renderBox[2], renderBox[3] - renderBox[1], renderBox[4] - renderBox[2], 0, getColor("Render Box Color"), [255 - amount, amount, 0, getColor("Render Box Color")[3]]);
	}
}

function drawMisses() {
	for (var i = 0; i < enemies_alive_indormant.length; i++) {
			if (espTime[enemies_alive_indormant[i]] != 0 && (Globals_Curtime() - espTime[enemies_alive_indormant[i]]) > 0.25) {
				if (playerMissed[enemies_alive_indormant[i]] == undefined) {
					missed = 0;
				} else {
					missed = playerMissed[enemies_alive_indormant[i]];
				}
				Entity_DrawFlag(enemies_alive_indormant[i], "MISS: " + missed, [0, 255, 255, 255]);
			}
	}
}

function drawResolvedAngle(){
	for (var i = 0; i < enemies_alive_indormant.length; i++) {
			if (espTime[enemies_alive_indormant[i]] != 0 && (Globals_Curtime() - espTime[enemies_alive_indormant[i]]) > 0.25) {
				var enemy_desync = Entity_GetProp(enemies_alive_indormant[i], "CBaseAnimating", "m_flPoseParameter");
				if (enemy_desync === "m_flPoseParameter") {
					enemy_desync = 0.5;
				}
				enemy_desync = ((enemy_desync - 0.5) * 120).toFixed(0);
				Entity_DrawFlag(enemies_alive_indormant[i], "DESYNC: " + enemy_desync, [200, 50, 255, 255]);
			}
	}
}

function drawDistance() {
	for (var i = 0; i < enemies_alive_indormant.length; i++) {
		if (espTime[enemies_alive_indormant[i]] != 0 && (Globals_Curtime() - espTime[enemies_alive_indormant[i]]) > 0.25) {
			var distance_to_target = getDistance(enemy_render_origins[enemies_alive_indormant[i]], local_render_origin).toFixed(0);
			Entity_DrawFlag(enemies_alive_indormant[i], "DISTANCE: " + distance_to_target, [255, 255, 0, 255]);
		}
	}
}

function drawMenuBorder() {
	var mp = UI_GetMenuPosition();
	var colors = HSV2RGB(Global.Realtime() * 0.5, 1, 1);
	Render_FilledRect(0, 0, screen_x, screen_y, [0, 0, 0, 150]);
	Render_GradientRect(mp[0] - 5, mp[1], 20, mp[3], 0, [colors.r, colors.g, colors.b, 255], [colors.b, colors.g, colors.r, 255]);
	Render_GradientRect(mp[0] - 5, mp[1] - 5, mp[2] + 10, 20, 1, [colors.r, colors.g, colors.b, 255], [colors.b, colors.g, colors.r, 255]);
	Render_GradientRect(mp[0] - 15 + mp[2], mp[1], 20, mp[3], 0, [colors.b, colors.g, colors.r, 255], [colors.r, colors.g, colors.b, 255]);
	Render_GradientRect(mp[0] - 5, mp[1] - 15 + mp[3], mp[2] + 10, 20, 1, [colors.b, colors.g, colors.r, 255], [colors.r, colors.g, colors.b, 255]);

	Render_GradientRect(mp[0] - 6, mp[1] - 4, 1, mp[3] + 8, 0, [colors.r, colors.g, colors.b, 255], [colors.b, colors.g, colors.r, 255]);
	Render_GradientRect(mp[0] - 7, mp[1] - 2, 1, mp[3] + 4, 0, [colors.r, colors.g, colors.b, 255], [colors.b, colors.g, colors.r, 255]);
	Render_GradientRect(mp[0] - 8, mp[1], 1, mp[3], 0, [colors.r, colors.g, colors.b, 255], [colors.b, colors.g, colors.r, 255]);

	Render_GradientRect(mp[0] + mp[2] + 5, mp[1] - 4, 1, mp[3] + 8, 0, [colors.b, colors.g, colors.r, 255], [colors.r, colors.g, colors.b, 255]);
	Render_GradientRect(mp[0] + mp[2] + 6, mp[1] - 2, 1, mp[3] + 4, 0, [colors.b, colors.g, colors.r, 255], [colors.r, colors.g, colors.b, 255]);
	Render_GradientRect(mp[0] + mp[2] + 7, mp[1], 1, mp[3], 0, [colors.b, colors.g, colors.r, 255], [colors.r, colors.g, colors.b, 255]);

	Render_GradientRect(mp[0] - 4, mp[1] - 6, mp[2] + 8, 1, 1, [colors.r, colors.g, colors.b, 255], [colors.b, colors.g, colors.r, 255]);
	Render_GradientRect(mp[0] - 2, mp[1] - 7, mp[2] + 4, 1, 1, [colors.r, colors.g, colors.b, 255], [colors.b, colors.g, colors.r, 255]);
	Render_GradientRect(mp[0], mp[1] - 8, mp[2], 1, 1, [colors.r, colors.g, colors.b, 255], [colors.b, colors.g, colors.r, 255]);

	Render_GradientRect(mp[0] - 4, mp[1] + mp[3] + 5, mp[2] + 8, 1, 1, [colors.b, colors.g, colors.r, 255], [colors.r, colors.g, colors.b, 255]);
	Render_GradientRect(mp[0] - 2, mp[1] + mp[3] + 6, mp[2] + 4, 1, 1, [colors.b, colors.g, colors.r, 255], [colors.r, colors.g, colors.b, 255]);
	Render_GradientRect(mp[0], mp[1] + mp[3] + 7, mp[2], 1, 1, [colors.b, colors.g, colors.r, 255], [colors.r, colors.g, colors.b, 255]);
}

function drawGraphicalIndicators() {
	if (getValue("Show Graphical Watermark") === 1) {
		drawGraphicalWatermark(getValue("watermark_x"), getValue("watermark_y"));
	}
	if (World.GetServerString() != "" && Entity_IsAlive(localPlayer)) {
		if (getValue("Show Graphical Primary Indicators") === 1) {
			drawGraphicalPrimaryIndicators();
		}
		if (getValue("Show Graphical Primary Hotkeys") === 1) {
			drawGraphicalPrimaryHotkeys();
		}
		if (getValue("Show Tertiary Indicators") === 1) {
			drawTertiaryIndicators();
		}
	}
}

function drawTertiaryIndicators() {
	if (getValue("Tertiary Indicators") & (1 << 0)) {
		drawHitAndMiss();
	}
	if (getValue("Tertiary Indicators") & (1 << 1)) {
		drawDamageGiven();
	}
	if (getValue("Tertiary Indicators") & (1 << 2)) {
		drawEnemyWeapons();
	}
	if (getValue("Tertiary Indicators") & (1 << 3)) {
		drawUserProfile();
	}
}

function drawUserProfile(){
	renderUserProfile(getValue("pro_x"), getValue("pro_y"), 300, 200);
	registerOnDragHandler("pro",300,200);
}

function drawEnemyWeapons() {
	actuall_y = renderEnemyWeapons(getValue("wep_x"), getValue("wep_y"), 300, 170);
	registerOnDragHandler("wep",300,actuall_y);
}

function drawHitAndMiss() {
	renderHitAndMiss(getValue("hit_x"), getValue("hit_y"), 260, 120);
	registerOnDragHandler("hit",260,120);
}

function drawDamageGiven() {
	renderDamageGiven(getValue("dmg_x"), getValue("dmg_y"), 300, 170);
	registerOnDragHandler("dmg",300,170);
}
var y_offset = 315;

function drawGraphicalPrimaryIndicators() {
	y_offset = renderGraphicalPrimaryIndicators(getValue("p_indicators_x"), getValue("p_indicators_y"), 300, y_offset);
	registerOnDragHandler("p_indicators",300,y_offset);
}

function drawGraphicalPrimaryHotkeys() {
	var hotkeys = getPrimaryHotkeys();
	renderGraphicalPrimaryHotkeys(getValue("p_hotkeys_x"), getValue("p_hotkeys_y"), 260, 40 + hotkeys.length * 25, hotkeys);
	registerOnDragHandler("p_hotkeys",260,40 + hotkeys.length * 25);
}

function renderUserProfile(x, y, width, height) {
	font = Render_AddFont("segoeuib.ttf", 12, 400);
	font_text = Render_AddFont("segoeui.ttf", 14, 400);
	font_icon = Render_AddFont("undefeated.ttf", 18, 400);
	transparency = 230;
	if (Entity_GetProp(localPlayer, "CCSPlayer", "m_bIsScoped") && Entity_IsAlive(localPlayer)) {
		transparency = 100;
	}
	colors = HSV2RGB(Global.Realtime() * 0.5, 1, 1);
	if (getColor("Primary Color")[3] === 0) {
		topBarColor = [colors.g, colors.b, colors.r, transparency];
	} else {
		topBarColor = [getColor("Primary Color")[0], getColor("Primary Color")[1], getColor("Primary Color")[2], transparency];
	}
	Render_FilledRect(x, y, width, height, [27, 27, 27, transparency]);
	Render_FilledRect(x, y, width, 1, topBarColor);
	Render_FilledRect(x + 1, y - 2, width - 2, 2, topBarColor);
	Render_FilledRect(x + 2, y - 3, width - 4, 1, topBarColor);
	Render_FilledRect(x + 4, y - 4, width - 8, 1, topBarColor);
	Render_FilledRect(x + 1, y + height, width - 2, 2, [27, 27, 27, transparency]);
	Render_FilledRect(x + 2, y + height, width - 4, 3, [27, 27, 27, transparency]);
	Render_FilledRect(x + 4, y + height, width - 8, 4, [27, 27, 27, transparency]);
	Render_Line(x, y + 25, x + width, y + 25, [70, 70, 70, transparency]);
	Render_String(x + width / 2, y + 5, 1, Cheat_GetUsername().toUpperCase(), [255, 255, 255, 255], font);
	var avatar = Render.AddTexture("ot/scripts/avatar.png");
    Render.TexturedRect( x+175, y+50, 100, 100, avatar );
	var hp=Entity.GetProp(localPlayer, "CBasePlayer", "m_iHealth");
	if(hp>100){hp=100}
	var am=Entity.GetProp(localPlayer, "CCSPlayerResource", "m_iArmor");
	if(am>100){am=100}
	var amount_r=Math.round(hp*2.55);
	var amount_g=Math.round(hp*5.10);
	var amount_b=Math.round(am*2.55);
	var color_border=[ 27,27,27,255 ];
	var color_hp=[ 255-amount_r, Math.min(255,amount_g), 0, 255 ];
	var color_am=[255-amount_b,Math.max(100-(255-amount_b),0),amount_b,255];
	Render.Rect( x+174, y+49, 102, 102, color_border );
	Render.Rect( x+173, y+48, 104, 104, color_border );
	Render.Rect( x+172, y+47, 106, 106, color_border );
	Render.Rect( x+171, y+46, 108, 108, color_border );
	Render.Rect( x+170, y+45, 110, 110, color_border );
	Render_FilledRect(x + 175, y + 180, 100*(hp/100), 2, color_hp);
	Render_FilledRect(x + 175+100*(hp/100), y + 180, 100-(100*(hp/100)), 2, [50,50,50,255]);
	Render_FilledRect(x + 175, y + 165, 100*(am/100), 2, color_am);
	Render_FilledRect(x + 175+100*(am/100), y + 165, 100-(100*(am/100)), 2, [150,150,150,255]);
	Render.Circle( x+85, y+125, 59, [ 255, 255, 255, 100 ] );
	Render.Circle( x+85, y+125, 60, [ 255, 255, 255, 100 ] );
	Render.Circle( x+85, y+125, 61, [ 255, 255, 255, 100 ] );
	var font_icon = Render_AddFont("undefeated.ttf", 32, 400);
	var weapon = (Entity_GetProp(Entity_GetWeapon(localPlayer), "CBaseAttributableItem", "m_iItemDefinitionIndex") & 0xFFFF);
	var weapon_info = Entity.GetCCSWeaponInfo(localPlayer);
	if (iconList[weapon] != undefined) {
		//Cheat.PrintChat(weapon+"\n");
		Render_String(x+87, y+111, 1, iconList[weapon], [255, 255, 255, 255], font_icon);
		if(weapon_info.max_clip==-1){
			Render_FilledRect(x + 30, y + 45, 110, 2, [50,50,50,255]);
		}else{
			var iclip=Entity_GetProp(Entity_GetWeapon(localPlayer), "CBaseCombatWeapon", "m_iClip1");
			Render_FilledRect(x + 30, y + 45, 110*(iclip/weapon_info.max_clip), 2, topBarColor);
			Render_FilledRect(x + 30+110*(iclip/weapon_info.max_clip), y + 45, 110-(110*(iclip/weapon_info.max_clip)), 2, [50,50,50,255]);
		}
	}
}

var activeHotkeys=[];

function getActiveHotkeys(){
	if(!tickRepeated && Globals_Tickcount()%4==0){
		activeHotkeys=[];
		if (UI_GetValue([Rage, Anti_Aim, General, "Key assignment", "AA Direction inverter"]) && getValue("Premium Anti-Aim")) {
			activeHotkeys.push(["AA Invert", UI_GetHotkeyState([Rage, Anti_Aim, General, "Key assignment", "AA Direction inverter"]),0]);
		}
		if (UI_GetValue([Rage, Anti_Aim, General, "Key assignment", "Legit AA on key"]) && getValue("Premium Anti-Aim")) {
			activeHotkeys.push(["Legit AA", UI_GetHotkeyState([Rage, Anti_Aim, General, "Key assignment", "Legit AA on key"]),1]);
		}
		if (UI_GetValue([Rage, General, General, "Key assignment", "Minimum damage"]) && getValue("Better Weapon Config")) {
			activeHotkeys.push(["Mindmg", UI_GetHotkeyState([Rage, General, General, "Key assignment", "Minimum damage"]),2]);
		}
		if (UI_GetValue([Rage, General, General, "Key assignment", "Minimum accuracy"]) && getValue("Better Weapon Config")) {
			activeHotkeys.push(["Minac", UI_GetHotkeyState([Rage, General, General, "Key assignment", "Minimum accuracy"]),3]);
		}
		if (UI_GetValue([Rage, General, General, "Key assignment", "Maximum FOV"]) && getValue("Better Weapon Config")) {
			activeHotkeys.push(["Fov", UI_GetHotkeyState([Rage, General, General, "Key assignment", "Maximum FOV"]),4]);
		}
		if (UI_GetValue([Rage, Anti_Aim, General, "Key assignment", "Maximum Fake Lag on key"]) && getValue("Premium Fake-Lag")) {
			activeHotkeys.push(["Max Lag", UI_GetHotkeyState([Rage, Anti_Aim, General, "Key assignment", "Maximum Fake Lag on key"]),5]);
		}
		if (UI_GetValue([Rage, Anti_Aim, General, "Key assignment", "Slow walk"]) && getValue("Premium Anti-Aim")) {
			activeHotkeys.push(["Slow Walk", UI_GetHotkeyState([Rage, Anti_Aim, General, "Key assignment", "Slow walk"]),6]);
		}
		if (getValue("Auto Wall Mode") === 1) {
			activeHotkeys.push(["Legit Autowall", "On",7]);
		} else if (getValue("Auto Wall Mode") === 2) {
			activeHotkeys.push(["Rage Autowall", "On",7]);
		}
		if (UI_GetValue([Rage, Anti_Aim, General, "Key assignment", "Fake duck"])) {
			activeHotkeys.push(["Fake Duck", UI_GetHotkeyState([Rage, Anti_Aim, General, "Key assignment", "Fake duck"]),8]);
		}
		if (UI_GetValue([Rage, "Exploits", "Keys", "Key assignment", "Hide shots"])) {
			activeHotkeys.push(["On Shot", UI_GetHotkeyState([Rage, "Exploits", "Keys", "Key assignment", "Hide shots"]),9]);
		}
		if (UI_GetValue([Rage, "Exploits", "Keys", "Key assignment", "Double tap"])) {
			activeHotkeys.push(["DT", UI_GetHotkeyState([Rage, "Exploits", "Keys", "Key assignment", "Double tap"]),10]);
		}
		if (UI_GetValue([Rage, General, General, "Key assignment", "Wait For On-Shot"])) {
			activeHotkeys.push(["Wait Shot", UI_GetHotkeyState([Rage, General, General, "Key assignment", "Wait For On-Shot"]),11]);
		}
		if (UI_GetValue([Rage, "Exploits", "Keys", "Key assignment", "Teleport key"]) && getValue("Rage Bot Optimization")) {
			activeHotkeys.push(["Teleport", UI_GetHotkeyState([Rage, "Exploits", "Keys", "Key assignment", "Teleport key"]),12]);
		}
	}
}
function getPrimaryHotkeys() {
	var items=[];
	for(var i=0;i<activeHotkeys.length;i++){
		if (getValue("Graphical Primary Hotkeys") & (1 << activeHotkeys[i][2])) {
			items.push([activeHotkeys[i][0],activeHotkeys[i][1]]);
		}
	}
	if (UI_GetValue([Rage, General, General, "Key assignment", "Resolver override"])) {
		items.push(["Resolver", UI_GetHotkeyState([Rage, General, General, "Key assignment", "Resolver override"])]);
	}
	return items;
}
var percentage = 0;
var percentageSum = 0;
var enemyWeapons = {};

function renderEnemyWeapons(x, y, width, height) {
	for (var i = 0; i < enemies_alive_indormant.length; i++) {
		enemyWeapons[Entity_GetName(enemies_alive_indormant[i])] = "";
		weapons = Entity_GetWeapons(enemies_alive_indormant[i]);
		for (var xx = 0; xx < weapons.length; xx++) {
			weapon = (Entity_GetProp(weapons[xx], "CBaseAttributableItem", "m_iItemDefinitionIndex") & 0xFFFF);
			if (iconList[weapon] != undefined) {
				enemyWeapons[Entity_GetName(enemies_alive_indormant[i])] += iconList[weapon];
			}
		}
		if (Entity_GetProp(enemies_alive_indormant[i], "CCSPlayer", "m_bHasHelmet")) {
			enemyWeapons[Entity_GetName(enemies_alive_indormant[i])] += "q";
		}
		if (Entity_GetProp(enemies_alive_indormant[i], "CCSPlayerResource", "m_iArmor") > 0) {
			enemyWeapons[Entity_GetName(enemies_alive_indormant[i])] += "p";
		}
		if (Entity_GetProp(enemies_alive_indormant[i], "CCSPlayer", "m_bHasDefuser")) {
			enemyWeapons[Entity_GetName(enemies_alive_indormant[i])] += "r";
		}
	}

	font = Render_AddFont("segoeuib.ttf", 12, 400);
	font_text = Render_AddFont("segoeui.ttf", 14, 400);
	font_icon = Render_AddFont("undefeated.ttf", 18, 400);
	transparency = 230;
	if (Entity_GetProp(localPlayer, "CCSPlayer", "m_bIsScoped") && Entity_IsAlive(localPlayer)) {
		transparency = 100;
	}
	colors = HSV2RGB(Global.Realtime() * 0.5, 1, 1);
	if (getColor("Primary Color")[3] === 0) {
		topBarColor = [colors.g, colors.b, colors.r, transparency];
	} else {
		topBarColor = [getColor("Primary Color")[0], getColor("Primary Color")[1], getColor("Primary Color")[2], transparency];
	}
	Render_FilledRect(x, y, width, 40 + 20 * (Object.getOwnPropertyNames(enemyWeapons).length), [27, 27, 27, transparency]);
	Render_FilledRect(x, y, width, 1, topBarColor);
	Render_FilledRect(x + 1, y - 2, width - 2, 2, topBarColor);
	Render_FilledRect(x + 2, y - 3, width - 4, 1, topBarColor);
	Render_FilledRect(x + 4, y - 4, width - 8, 1, topBarColor);
	Render_FilledRect(x + 1, y + 40 + 20 * (Object.getOwnPropertyNames(enemyWeapons).length), width - 2, 2, [27, 27, 27, transparency]);
	Render_FilledRect(x + 2, y + 40 + 20 * (Object.getOwnPropertyNames(enemyWeapons).length), width - 4, 3, [27, 27, 27, transparency]);
	Render_FilledRect(x + 4, y + 40 + 20 * (Object.getOwnPropertyNames(enemyWeapons).length), width - 8, 4, [27, 27, 27, transparency]);
	Render_Line(x, y + 25, x + width, y + 25, [70, 70, 70, transparency]);
	Render_String(x + width / 2, y + 5, 1, "ENEMY WEAPONS", [255, 255, 255, 255], font);

	i = 0;
	Object.keys(enemyWeapons).forEach(function(key) {
		name = key;
		if (typeof(name) === 'string') {
			if (name.length > 6) {
				name = name.substring(0, 6) + "..";
			}
		}
		Render_String(x + 15, y + 35 + i * 20, 0, key, [255, 255, 255, 255], font_text);
		Render_String(x + 15 + name.length * 8, y + 35 + i * 20, 0, enemyWeapons[key], [255, 255, 255, 255], font_icon);
		i++;
	});
	return 40 + 20 * (Object.getOwnPropertyNames(enemyWeapons).length);
}

function renderHitAndMiss(x, y, width, height) {
	var font = Render_AddFont("segoeuib.ttf", 12, 400);
	var font_text = Render_AddFont("segoeui.ttf", 14, 400);
	if (shot[currentWeapon] == undefined) shot[currentWeapon] = 0;
	if (hit[currentWeapon] == undefined) hit[currentWeapon] = 0;
	if (!tickRepeated && Globals_Tickcount() % 32 === 0) {
		percentage = (shot[currentWeapon] === 0) ? 1 : hit[currentWeapon] / shot[currentWeapon];
		percentage = (percentage > 1) ? 1 : percentage;
		shotSum = 0;
		hitSum = 0;
		Object.keys(shot).forEach(function(key) {
			shotSum += shot[key];
		});
		Object.keys(hit).forEach(function(key) {
			hitSum += hit[key];
		});
		percentageSum = (shotSum === 0) ? 1 : hitSum / shotSum;
		percentageSum = (percentageSum > 1) ? 1 : percentageSum;
	}
	var transparency = 230;
	var colors = HSV2RGB(Global.Realtime() * 0.5, 1, 1);
	if (getColor("Primary Color")[3] === 0) {
		topBarColor = [colors.g, colors.b, colors.r, transparency];
	} else {
		topBarColor = [getColor("Primary Color")[0], getColor("Primary Color")[1], getColor("Primary Color")[2], transparency];
	}
	if (getColor("Primary Color 2")[3] === 0) {
		barColor = [colors.g, colors.b, colors.r, 255];
	} else {
		barColor = [getColor("Primary Color 2")[0], getColor("Primary Color 2")[1], getColor("Primary Color 2")[2], 255];
	}
	if (Entity_GetProp(localPlayer, "CCSPlayer", "m_bIsScoped") && Entity_IsAlive(localPlayer)) {
		transparency = 100;
		barColor[3] = 100;
	}
	Render_FilledRect(x, y, width, height, [27, 27, 27, transparency]);
	Render_FilledRect(x, y, width, 1, topBarColor);
	Render_FilledRect(x + 1, y - 2, width - 2, 2, topBarColor);
	Render_FilledRect(x + 2, y - 3, width - 4, 1, topBarColor);
	Render_FilledRect(x + 4, y - 4, width - 8, 1, topBarColor);
	Render_FilledRect(x + 1, y + height, width - 2, 2, [27, 27, 27, transparency]);
	Render_FilledRect(x + 2, y + height, width - 4, 3, [27, 27, 27, transparency]);
	Render_FilledRect(x + 4, y + height, width - 8, 4, [27, 27, 27, transparency]);
	Render_Line(x, y + 25, x + width, y + 25, [70, 70, 70, transparency]);
	Render_String(x + width / 2, y + 5, 1, "HIT  |  MISS", [255, 255, 255, 255], font);

	Render_String(x + 20, y + 35, 0, "Weapon: " + currentWeapon + " shot: " + shot[currentWeapon] + " hit: " + hit[currentWeapon], [255, 255, 255, 255], font_text);
	Render_String(x + 20, y + 60, 0, "Current " + (percentage * 100).toFixed(0) + "%", [255, 255, 255, 255], font_text);
	Render_String(x + 20, y + 85, 0, "Total " + (percentageSum * 100).toFixed(0) + "%", [255, 255, 255, 255], font_text);
	Render_FilledRect(x + 110, y + 69, width - 130, 7, [70, 70, 70, 255]);
	Render_FilledRect(x + 110, y + 93, width - 130, 7, [70, 70, 70, 255]);
	Render_FilledRect(x + 110, y + 69, Math.floor((width - 130) * (percentage / 1)), 7, barColor);
	Render_FilledRect(x + 110, y + 93, Math.floor((width - 130) * (percentageSum / 1)), 7, barColor);
}

function renderDamageGiven(x, y, width, height) {
	var font = Render_AddFont("segoeuib.ttf", 12, 400);
	var font_text = Render_AddFont("segoeui.ttf", 14, 400);
	var font_icon = Render_AddFont("undefeated.ttf", 18, 400);
	var transparency = 230;
	if (Entity_GetProp(localPlayer, "CCSPlayer", "m_bIsScoped") && Entity_IsAlive(localPlayer)) {
		transparency = 100;
	}
	var colors = HSV2RGB(Global.Realtime() * 0.5, 1, 1);
	if (getColor("Primary Color")[3] === 0) {
		topBarColor = [colors.g, colors.b, colors.r, transparency];
	} else {
		topBarColor = [getColor("Primary Color")[0], getColor("Primary Color")[1], getColor("Primary Color")[2], transparency];
	}
	Render_FilledRect(x, y, width, height, [27, 27, 27, transparency]);
	Render_FilledRect(x, y, width, 1, topBarColor);
	Render_FilledRect(x + 1, y - 2, width - 2, 2, topBarColor);
	Render_FilledRect(x + 2, y - 3, width - 4, 1, topBarColor);
	Render_FilledRect(x + 4, y - 4, width - 8, 1, topBarColor);
	Render_FilledRect(x + 1, y + height, width - 2, 2, [27, 27, 27, transparency]);
	Render_FilledRect(x + 2, y + height, width - 4, 3, [27, 27, 27, transparency]);
	Render_FilledRect(x + 4, y + height, width - 8, 4, [27, 27, 27, transparency]);
	Render_Line(x, y + 25, x + width, y + 25, [70, 70, 70, transparency]);
	Render_String(x + width / 2, y + 5, 1, "DAMAGE GIVEN", [255, 255, 255, 255], font);

	Render_String(x + 20, y + 35, 0, Target, [255, 255, 255, 255], font_text);
	Render_String(x + 85, y + 35, 0, "Weapon", [255, 255, 255, 255], font_text);
	Render_String(x + 160, y + 35, 0, "Damage", [255, 255, 255, 255], font_text);
	Render_String(x + 235, y + 35, 0, "Hitbox", [255, 255, 255, 255], font_text);

	if (damageList.length === 0) return;
	xx = 0;
	for (var i = damageList.length - 1; i > damageList.length - 5; i--) {
		if (i < 0) break;
		Render_String(x + 20, y + 60 + (25 * xx), 0, damageList[i]["target"], [255, 255, 255, 255], font_text);
		Render_String(x + 85, y + 64 + (25 * xx), 0, damageList[i]["weapon"].toString(), [255, 255, 255, 255], font_icon);
		Render_String(x + 160, y + 60 + (25 * xx), 0, damageList[i]["damage"].toString(), [255, 255, 255, 255], font_text);
		Render_String(x + 235, y + 60 + (25 * xx), 0, damageList[i]["hitbox"].toString(), [255, 255, 255, 255], font_text);
		xx++;
	}
}

function renderGraphicalPrimaryHotkeys(x, y, width, height, hotkeys) {
	var font = Render_AddFont("segoeuib.ttf", 12, 400);
	var font_text = Render_AddFont("segoeui.ttf", 14, 400);
	var transparency = 230;
	var colors = HSV2RGB(Global.Realtime() * 0.5, 1, 1);
	if (getColor("Primary Color")[3] === 0) {
		topBarColor = [colors.g, colors.b, colors.r, transparency];
	} else {
		topBarColor = [getColor("Primary Color")[0], getColor("Primary Color")[1], getColor("Primary Color")[2], transparency];
	}
	if (getColor("Primary Color 2")[3] === 0) {
		barColor = [colors.g, colors.b, colors.r, 255];
	} else {
		barColor = [getColor("Primary Color 2")[0], getColor("Primary Color 2")[1], getColor("Primary Color 2")[2], 255];
	}
	if (Entity_GetProp(localPlayer, "CCSPlayer", "m_bIsScoped") && Entity_IsAlive(localPlayer)) {
		transparency = 100;
		barColor[3] = 100;
	}
	Render_FilledRect(x, y, width, height, [27, 27, 27, transparency]);
	Render_FilledRect(x, y, width, 1, topBarColor);
	Render_FilledRect(x + 1, y - 2, width - 2, 2, topBarColor);
	Render_FilledRect(x + 2, y - 3, width - 4, 1, topBarColor);
	Render_FilledRect(x + 4, y - 4, width - 8, 1, topBarColor);
	Render_FilledRect(x + 1, y + height, width - 2, 2, [27, 27, 27, transparency]);
	Render_FilledRect(x + 2, y + height, width - 4, 3, [27, 27, 27, transparency]);
	Render_FilledRect(x + 4, y + height, width - 8, 4, [27, 27, 27, transparency]);
	Render_Line(x, y + 25, x + width, y + 25, [70, 70, 70, transparency]);
	Render_String(x + width / 2, y + 5, 1, "HOTKEYS", [255, 255, 255, 255], font);

	yy = 0;

	for (var i = 0; i < hotkeys.length; i++) {
		Render_String(x + 20, y + 35 + yy, 0, hotkeys[i][0], [255, 255, 255, 255], font_text);
		Render_String(x + width - 40, y + 35 + yy, 1, "[" + hotkeys[i][1] + "]", barColor, font_text);
		yy += 25;
	}

}

var draggableList=[];

function registerOnDragHandler(name,width,height){
	draggableList.push([name,width,height]);
}

function onDrag(){
	if (Input.IsKeyPressed(0x01)) {
		for(var i=0;i<draggableList.length;i++){
			var name=draggableList[i][0];
			var item_x=getValue(name+"_x");
			var item_y=getValue(name+"_y");
			if(!mouseTarget & inBound(item_x,item_y,item_x+draggableList[i][1],item_y+draggableList[i][2])){
				mouseTarget=name;
				mouseRelativePosition=getRelativePosition(item_x, item_y);
				break;
			}
		}
	}else{
		mouseTarget=false;
		mouseRelativePosition = [0, 0];
	}
	if(mouseTarget!=false){
		var cursorPosition=Input.GetCursorPosition();
		setValue(mouseTarget+"_x", cursorPosition[0] - mouseRelativePosition[0]);
		setValue(mouseTarget+"_y", cursorPosition[1] - mouseRelativePosition[1]);
	}
	draggableList=[];
}

var headScale = UI_GetValue([Rage, Target, currentWeapon, "Head pointscale"]);
var bodyScale = UI_GetValue([Rage, Target, currentWeapon, "Body pointscale"]);

function renderGraphicalPrimaryIndicators(x, y, width, height) {
	var font = Render_AddFont("segoeuib.ttf", 12, 400);
	var font_text = Render_AddFont("segoeui.ttf", 14, 400);
	var transparency = 230;
	var colors = HSV2RGB(Global.Realtime() * 0.5, 1, 1);
	if (getColor("Primary Color")[3] === 0) {
		topBarColor = [colors.g, colors.b, colors.r, transparency];
	} else {
		topBarColor = [getColor("Primary Color")[0], getColor("Primary Color")[1], getColor("Primary Color")[2], transparency];
	}
	if (getColor("Primary Color 2")[3] === 0) {
		barColor = [colors.g, colors.b, colors.r, 255];
	} else {
		barColor = [getColor("Primary Color 2")[0], getColor("Primary Color 2")[1], getColor("Primary Color 2")[2], 255];
	}
	if (Entity_GetProp(localPlayer, "CCSPlayer", "m_bIsScoped") && Entity_IsAlive(localPlayer)) {
		transparency = 100;
		barColor[3] = 100;
	}
	Render_FilledRect(x, y, width, height, [27, 27, 27, transparency]);
	Render_FilledRect(x, y, width, 1, topBarColor);
	Render_FilledRect(x + 1, y - 2, width - 2, 2, topBarColor);
	Render_FilledRect(x + 2, y - 3, width - 4, 1, topBarColor);
	Render_FilledRect(x + 4, y - 4, width - 8, 1, topBarColor);
	Render_FilledRect(x + 1, y + height, width - 2, 2, [27, 27, 27, transparency]);
	Render_FilledRect(x + 2, y + height, width - 4, 3, [27, 27, 27, transparency]);
	Render_FilledRect(x + 4, y + height, width - 8, 4, [27, 27, 27, transparency]);
	Render_Line(x, y + 25, x + width, y + 25, [70, 70, 70, transparency]);
	//Render_Line(x + 140, y + 65, x + 140, y + height + 2, [70, 70, 70, transparency]);
	Render_String(x + width / 2, y + 5, 1, "STATUS", [255, 255, 255, 255], font);

	var offset = 35;

	if (getValue("Graphical Primary Indicators") & (1 << 0)) {
		rageTargetName = Entity_GetName(rageTarget) === 0 ? "None" : Entity_GetName(rageTarget);
		if (typeof(rageTargetName) === 'string') {
			if (rageTargetName.length > 6) {
				rageTargetName = rageTargetName.substring(0, 6) + "..";
			}
		}
		rageTargetHealth = Entity_GetProp(rageTarget, "CBasePlayer", "m_iHealth") === "m_iHealth" ? 0 : Entity_GetProp(rageTarget, "CBasePlayer", "m_iHealth");
		rageTargetWeapon = getCurrentWeapon(rageTarget);
		if (rageTarget != 0 && !Entity_IsDormant(rageTarget)) {
			distance_to_target = getDistance(enemy_render_origins[rageTarget], local_render_origin).toFixed(0);
		} else {
			distance_to_target = "?";
		}
		Render_String(x + 20, y + offset, 0, "Target: " + rageTargetName + " [" + rageTargetWeapon + "]" + " (" + rageTargetHealth + "HP)" + " {" + distance_to_target + "}", [255, 255, 255, 255], font_text);
		offset += 25;
	}
	if (getValue("Graphical Primary Indicators") & (1 << 11)) {
		Render_String(x + 20, y + offset, 0, "Head", [255, 255, 255, 255], font_text);
		Render_String(x + 20, y + offset + 25, 0, "Body", [255, 255, 255, 255], font_text);
		Render_FilledRect(x + 70, y + offset + 8, width - 90, 7, [70, 70, 70, 255]);
		Render_FilledRect(x + 70, y + offset + 33, width - 90, 7, [70, 70, 70, 255]);
		Render_FilledRect(x + 70, y + offset + 8, Math.floor((width - 90) * (headScale / 100)), 7, barColor);
		Render_FilledRect(x + 70, y + offset + 33, Math.floor((width - 90) * (bodyScale / 100)), 7, barColor);
		offset += 50;
	}
	if (getValue("Graphical Primary Indicators") & (1 << 8) || getValue("Graphical Primary Indicators") & (1 << 12)) {
		damageText = "Damage: ";
		if (getValue("Graphical Primary Indicators") & (1 << 8)) {
			damageText += UI_GetValue([Rage, Target, currentWeapon, "Minimum damage"]) + "HP";
		}
		if (getValue("Graphical Primary Indicators") & (1 << 12)) {
			damageText += " (" + damageMode + ")";
		}
		Render_String(x + 20, y + offset, 0, damageText, [255, 255, 255, 255], font_text);
		offset += 25;
	}
	if (getValue("Graphical Primary Indicators") & (1 << 9) || getValue("Graphical Primary Indicators") & (1 << 13)) {
		hitchanceText = "Hitchance: ";
		if (getValue("Graphical Primary Indicators") & (1 << 9)) {
			hitchanceText += UI_GetValue([Rage, Accuracy, currentWeapon, "Hitchance"]) + "%";
		}
		if (getValue("Graphical Primary Indicators") & (1 << 13)) {
			hitchanceText += " (" + accuracyMode + ")";
		}
		Render_String(x + 20, y + offset, 0, hitchanceText, [255, 255, 255, 255], font_text);
		offset += 25;
	}
	if (getValue("Graphical Primary Indicators") & (1 << 10)) {
		Render_String(x + 20, y + offset, 0, "Hitboxes: " + UI_GetValue([Rage, Target, currentWeapon, "Hitboxes"]), [255, 255, 255, 255], font_text);
		Render_String(x + 180, y + offset, 0, "Multipoint: " + UI_GetValue([Rage, Target, currentWeapon, "Multipoint hitboxes"]), [255, 255, 255, 255], font_text);
		offset += 25;
	}
	if (getValue("Graphical Primary Indicators") & (1 << 7)) {
		Render_String(x + 20, y + offset, 0, "Anti-Aim: ", [255, 255, 255, 255], font_text);
		Render_String(x + 200, y + offset, 1, antiAimMode, [255, 255, 255, 255], font_text);
		if (UI_GetValue([Rage, Anti_Aim, General, "Key assignment", "AA Direction inverter"])) {
			Render_String(x + 120, y + offset, 0, "<", [255, 255, 255, 255], font_text);
			Render_String(x + 270, y + offset, 0, ">", barColor, font_text);
		} else {
			Render_String(x + 120, y + offset, 0, "<", barColor, font_text);
			Render_String(x + 270, y + offset, 0, ">", [255, 255, 255, 255], font_text);
		}
		offset += 25;
	}
	if (getValue("Graphical Primary Indicators") & (1 << 1)) {
		desyncSize = Math.abs(normalizeYaw(Local.GetRealYaw() - Local.GetFakeYaw()));
		desyncSize = (desyncSize > 120) ? 120 : desyncSize;
		Render_String(x + 20, y + offset, 0, "Desync", [255, 255, 255, 255], font_text);
		Render_FilledRect(x + 85, y + offset + 8, width - 130, 7, [70, 70, 70, 255]);
		Render_FilledRect(x + 85, y + offset + 8, Math.floor((width - 130) * (desyncSize / 120)), 7, barColor);
		Render_String(x + 265, y + offset, 0, desyncSize.toFixed(0), [255, 255, 255, 255], font_text);
		offset += 25;
	}
	if (getValue("Graphical Primary Indicators") & (1 << 2) || getValue("Graphical Primary Indicators") & (1 << 3)) {
		fakelagLimit = valve ? 6 : 14;
		Render_String(x + 20, y + offset, 0, "Fake Lag", [255, 255, 255, 255], font_text);
		Render_FilledRect(x + 85, y + offset + 8, width - 130, 7, [70, 70, 70, 255]);
		Render_FilledRect(x + 85, y + offset + 8, Math.floor((width - 130) * (Globals_ChokedCommands() / fakelagLimit)), 7, barColor);
		Render_String(x + 265, y + offset, 0, flHistory[0].toString(), [255, 255, 255, 255], font_text);
		offset += 25;
	}
	if (getValue("Graphical Primary Indicators") & (1 << 5)) {
		accuracy = ((1 - Local.GetInaccuracy()) * 100).toFixed(0);
		Render_String(x + 20, y + offset, 0, Accuracy, [255, 255, 255, 255], font_text);
		Render_FilledRect(x + 85, y + offset + 8, width - 130, 7, [70, 70, 70, 255]);
		Render_FilledRect(x + 85, y + offset + 8, Math.floor((width - 130) * (accuracy / 100)), 7, barColor);
		Render_String(x + 265, y + offset, 0, accuracy, [255, 255, 255, 255], font_text);
		offset += 25;
	}
	if (getValue("Graphical Primary Indicators") & (1 << 4)) {
		fovMax = 180;
		if (getValue("Dynamic FOV") && getValue(Play_Style) === 1) {
			fovMax = getValue("Max FOV");
		}
		Render_String(x + 20, y + offset, 0, "FOV", [255, 255, 255, 255], font_text);
		Render_FilledRect(x + 85, y + offset + 8, width - 130, 7, [70, 70, 70, 255]);
		Render_FilledRect(x + 85, y + offset + 8, Math.floor((width - 130) * (UI_GetValue([Rage, Target, currentWeapon, "Field of view"]) / fovMax)), 7, barColor);
		Render_String(x + 265, y + offset, 0, UI_GetValue([Rage, Target, currentWeapon, "Field of view"]).toString(), [255, 255, 255, 255], font_text);
		offset += 25;
	}
	offset += 5;

	return offset;
}

function drawGraphicalWatermark(x, y) {
	if (World.GetServerString() != "") {
		dragWaterMark(x - 75, y, 300, 20);
		renderWatermarkInGame(x - 75, y, 300, 20);
	} else {
		dragWaterMark(x, y, 150, 20);
		renderWatermarkLobby(x, y, 150, 20);
	}
}

function inBound(x1, y1, x2, y2) {
	var position = Input.GetCursorPosition();
	return position[0] > x1 && position[0] < x2 && position[1] > y1 && position[1] < y2;
}

function getRelativePosition(x, y) {
	var position = Input.GetCursorPosition();
	return [position[0] - x, position[1] - y];
}
var mouseTarget = false;
var wmTarget=false;
var mouseRelativePosition = [0, 0];
var wmRelativePosition=[0,0];

function dragWaterMark(x, y, w, h) {
	if (getValue("watermark_x") === 0) {
		setValue("watermark_x", screen_x * 0.90)
	}
	if (getValue("watermark_y") === 0) {
		setValue("watermark_y", screen_y * 0.02)
	}
	//Cheat_Print("233\n");
	if (Input.IsKeyPressed(0x01)) {
		if (wmTarget === false && inBound(x, y, x + w, y + h)) {
			wmTarget = "Watermark";
			wmRelativePosition = getRelativePosition(getValue("watermark_x"), getValue("watermark_y"));
		}
	} else {
		if (wmTarget === "Watermark") {
			wmTarget = false;
			wmRelativePosition = [0, 0];
		}
	}
	if (wmTarget === "Watermark") {
		position = Input.GetCursorPosition();
		setValue("watermark_x", position[0] - wmRelativePosition[0]);
		setValue("watermark_y", position[1] - wmRelativePosition[1]);
	}
}

function renderWatermarkLobby(x, y, width, height) {
	var font = Render_AddFont("segoeui.ttf", 12, 400);
	var colors = HSV2RGB(Global.Realtime() * 0.5, 1, 1);
	Render_FilledRect(x, y, width, height, [27, 27, 27, 255]);
	Render_FilledRect(x, y, width, 1, [colors.g, colors.b, colors.r, 255]);
	Render_FilledRect(x + 1, y - 2, width - 2, 2, [colors.g, colors.b, colors.r, 255]);
	Render_FilledRect(x + 2, y - 3, width - 4, 1, [colors.g, colors.b, colors.r, 255]);
	Render_FilledRect(x + 4, y - 4, width - 8, 1, [colors.g, colors.b, colors.r, 255]);
	Render_FilledRect(x + 1, y + height, width - 2, 2, [27, 27, 27, 255]);
	Render_FilledRect(x + 2, y + height, width - 4, 3, [27, 27, 27, 255]);
	Render_FilledRect(x + 4, y + height, width - 8, 4, [27, 27, 27, 255]);
	//Render_Line(x, y + 65, x + width, y + 65, [70, 70, 70, 255]);
	//Render_Line(x + 140, y + 65, x + 140, y + height + 2, [70, 70, 70, 255]);
	Render_String(x + 28, y + 4, 0, "ONETAP  |  DHDJ", [255, 255, 255, 255], font);
}

function renderWatermarkInGame(x, y, width, height) {
	var font = Render_AddFont("segoeui.ttf", 12, 400);
	var colors = HSV2RGB(Global.Realtime() * 0.5, 1, 1);
	Render_FilledRect(x, y, width, height, [27, 27, 27, 255]);
	Render_FilledRect(x, y, width, 1, [colors.g, colors.b, colors.r, 255]);
	Render_FilledRect(x + 1, y - 2, width - 2, 2, [colors.g, colors.b, colors.r, 255]);
	Render_FilledRect(x + 2, y - 3, width - 4, 1, [colors.g, colors.b, colors.r, 255]);
	Render_FilledRect(x + 4, y - 4, width - 8, 1, [colors.g, colors.b, colors.r, 255]);
	Render_FilledRect(x + 1, y + height, width - 2, 2, [27, 27, 27, 255]);
	Render_FilledRect(x + 2, y + height, width - 4, 3, [27, 27, 27, 255]);
	Render_FilledRect(x + 4, y + height, width - 8, 4, [27, 27, 27, 255]);
	//Render_Line(x, y + 65, x + width, y + 65, [70, 70, 70, 255]);
	//Render_Line(x + 140, y + 65, x + 140, y + height + 2, [70, 70, 70, 255]);
	if (!tickRepeated && Globals_Tickcount() % 32 === 0) {
		ping = Entity_GetProp(localPlayer, "CCSPlayerResource", "m_iPing");
		fps = Math.ceil(1 / Global.Frametime());
		tck = Global.Tickrate();
	}
	Render_String(x + 28, y + 4, 0, "ONETAP  |  DHDJ  |  " + tck + " TCK  |  " + fps + " FPS  |  " + ping + " MS", [255, 255, 255, 255], font);
}

function drawTextualIndicators() {
	if (getValue("Show Watermark") === 1) {
		drawTextualWatermark();
	}
	if (World.GetServerString() != "" && Entity_IsAlive(localPlayer)) {
		if (getValue("Show Primary Indicators") === 1) {
			drawPrimaryIndicators();
		}
	}
}

function normalizeYaw(angle) {
	var angle = (angle % 360 + 360) % 360;
	return angle > 180 ? angle - 360 : angle;
}

function drawSecondaryIndicators() {
	var items = [];
	if (getValue("Secondary Indicators") & (1 << 0) && getValue("Premium Anti-Aim")) {
		userName = rageTarget === 0 ? "None" : Entity_GetName(rageTarget);
		items.push("Target: " + userName);
	}
	if (getValue("Secondary Indicators") & (1 << 1) && getValue("Premium Anti-Aim")) {
		desyncSize = Math.abs(normalizeYaw(Local.GetRealYaw() - Local.GetFakeYaw()));
		desyncSize = (desyncSize > 120) ? 120 : desyncSize;
		items.push("Desync: " + Math.round(desyncSize));
	}
	if (getValue("Secondary Indicators") & (1 << 2) && getValue("Premium Fake-Lag")) {
		items.push("FL: " + Globals_ChokedCommands());
	}
	if (getValue("Secondary Indicators") & (1 << 3) && getValue("Premium Fake-Lag")) {
		fl2String = "0";
		Object.keys(flHistory).forEach(function(key) {
			fl2String += ">>" + flHistory[key];
		});
		items.push(fl2String);
	}
	if (getValue("Secondary Indicators") & (1 << 4)) {
		items.push("FOV: " + UI_GetValue([Rage, Target, currentWeapon, "Field of view"]));
	}
	if (getValue("Secondary Indicators") & (1 << 5)) {
		items.push("Accuracy: " + ((1 - Local.GetInaccuracy()) * 100).toFixed(1) + "%");
	}
	if (getValue("Secondary Indicators") & (1 << 6)) {
		items.push("Spread: " + ((Local.GetSpread()) * 100).toFixed(3) + "%");
	}
	if (getValue("Secondary Indicators") & (1 << 7) && getValue("Premium Anti-Aim")) {
		items.push(antiAimMode);
	}
	if (getValue("Secondary Indicators") & (1 << 8)) {
		items.push("DMG: " + UI_GetValue([Rage, Target, currentWeapon, "Minimum damage"]));
	}
	if (getValue("Secondary Indicators") & (1 << 9)) {
		items.push("HC: " + UI_GetValue([Rage, Accuracy, currentWeapon, "Hitchance"]));
	}
	if (getValue("Secondary Indicators") & (1 << 10) && getValue("Better Weapon Config")) {
		items.push("Hitbox");
	}
	if (getValue("Secondary Indicators") & (1 << 11) && getValue("Better Weapon Config")) {
		items.push("Multipoint: " + UI_GetValue([Rage, Target, currentWeapon, "Head pointscale"]) + " " + UI_GetValue([Rage, Target, currentWeapon, "Body pointscale"]));
	}
	if (getValue("Secondary Indicators") & (1 << 12) && getValue("Better Weapon Config")) {
		items.push("Damage Mode: " + damageMode);
	}
	if (getValue("Secondary Indicators") & (1 << 13) && getValue("Better Weapon Config")) {
		items.push("Accuracy Mode: " + accuracyMode);
	}
	if (getValue("Secondary Indicators") & (1 << 14) && getValue("Better Weapon Config")) {
		items.push("Hitbox Mode: " + hitboxMode);
	}
	if (getValue("Secondary Indicators") & (1 << 15) && getValue("Better Weapon Config")) {
		items.push("Multipoint Mode: " + multipointMode);
	}
	for(var i=0;i<activeHotkeys.length;i++){
		if (getValue("Secondary Hotkeys") & (1 << activeHotkeys[i][2])) {
			items.push(activeHotkeys[i][0]);
		}
	}
	renderSecondaryIndicators(items);
}

function renderSecondaryIndicators(items) {
	var x = screen_x / 2;
	var y = (screen_y / 2) + 40;
	var secondaryColor = getColor("Secondary Color");
	if (Entity_GetProp(localPlayer, "CCSPlayer", "m_bIsScoped") && Entity_IsAlive(localPlayer)) {
		secondaryColor[3] = 100;
	}
	for (var i = 0; i < items.length; i++) {
		drawText(x, y, items[i], secondaryColor, 18);
		if (items[i] === "DT") {
			Render_FilledRect(x - (16 - Math.floor(Exploit.GetCharge() * 32)), y + 26, 32 - Math.floor(Exploit.GetCharge() * 32), 3, [0, 0, 0, 100]);
			Render_FilledRect(x - 16, y + 26, Math.floor(Exploit.GetCharge() * 32), 3, secondaryColor);
		}
		y += 20;
	}
}

function drawPrimaryIndicators() {
	var items=[];
	if (getValue("Primary Indicators") & (1 << 0) && getValue("Premium Anti-Aim")) {
		var rageTargetName = Entity_GetName(rageTarget) === 0 ? "None" : Entity_GetName(rageTarget);
		var rageTargetHealth = Entity_GetProp(rageTarget, "CBasePlayer", "m_iHealth") === "m_iHealth" ? 0 : Entity_GetProp(rageTarget, "CBasePlayer", "m_iHealth");
		var rageTargetWeapon = getCurrentWeapon(rageTarget);
		if (rageTarget != 0 && !Entity_IsDormant(rageTarget)) {
			distance_to_target = getDistance(enemy_render_origins[rageTarget], local_render_origin).toFixed(0);
		} else {
			distance_to_target = "?";
		}
		items.push("Target: " + rageTargetName + " [" + rageTargetWeapon + "]" + " (" + rageTargetHealth + "HP)" + " {" + distance_to_target + "}");
	}
	if (getValue("Primary Indicators") & (1 << 1) && getValue("Premium Anti-Aim")) {
		var desyncSize = Math.abs(normalizeYaw(Local.GetRealYaw() - Local.GetFakeYaw()));
		desyncSize = (desyncSize > 120) ? 120 : desyncSize;
		items.push("Desync: " + Math.round(desyncSize));
	}
	if (getValue("Primary Indicators") & (1 << 2) && getValue("Premium Fake-Lag")) {
		items.push("FL: " + Globals_ChokedCommands());
	}
	if (getValue("Primary Indicators") & (1 << 3) && getValue("Premium Fake-Lag")) {
		fl2String = "0";
		Object.keys(flHistory).forEach(function(key) {
			fl2String += ">>" + flHistory[key];
		});
		items.push(fl2String);
	}
	if (getValue("Primary Indicators") & (1 << 4) && getValue("Better Weapon Config") && getValue(Play_Style) === 1) {
		items.push("FOV: " + UI_GetValue([Rage, Target, currentWeapon, "Field of view"]));
	}
	if (getValue("Primary Indicators") & (1 << 5)) {
		items.push("Accuracy: " + ((1 - Local.GetInaccuracy()) * 100).toFixed(1) + "%");
	}
	if (getValue("Primary Indicators") & (1 << 6)) {
		items.push("Spread: " + ((Local.GetSpread()) * 100).toFixed(3) + "%");
	}
	if (getValue("Primary Indicators") & (1 << 7) && getValue("Premium Anti-Aim")) {
		items.push(antiAimMode);
	}
	if (getValue("Primary Indicators") & (1 << 8) && getValue("Better Weapon Config")) {
		items.push("Damage: " + UI_GetValue([Rage, Target, currentWeapon, "Minimum damage"]));
	}
	if (getValue("Primary Indicators") & (1 << 9) && getValue("Better Weapon Config")) {
		items.push("Hitchance: " + UI_GetValue([Rage, Accuracy, currentWeapon, "Hitchance"]));
	}
	if (getValue("Primary Indicators") & (1 << 10) && getValue("Better Weapon Config")) {
		items.push("Hitbox");
	}
	if (getValue("Primary Indicators") & (1 << 11) && getValue("Better Weapon Config")) {
		items.push("Multipoint: " + UI_GetValue([Rage, Target, currentWeapon, "Head pointscale"]) + " " + UI_GetValue([Rage, Target, currentWeapon, "Body pointscale"]));
	}
	if (getValue("Primary Indicators") & (1 << 12) && getValue("Better Weapon Config")) {
		items.push("Damage Mode: " + damageMode);
	}
	if (getValue("Primary Indicators") & (1 << 13) && getValue("Better Weapon Config")) {
		items.push("Accuracy Mode: " + accuracyMode);
	}
	if (getValue("Primary Indicators") & (1 << 14) && getValue("Better Weapon Config")) {
		items.push("Hitbox Mode: " + damageMode);
	}
	if (getValue("Primary Indicators") & (1 << 15) && getValue("Better Weapon Config")) {
		items.push("Multipoint Mode: " + multipointMode);
	}
	for(var i=0;i<activeHotkeys.length;i++){
		if (getValue("Primary Hotkeys") & (1 << activeHotkeys[i][2])) {
			items.push(activeHotkeys[i][0]);
		}
	}
	if (UI_GetValue([Rage, General, General, "Key assignment", "Resolver override"])) {
		items.push("Resolver");
	}
	renderPrimaryIndicators(items);
}

function renderPrimaryIndicators(items) {
	var x = screen_x * 0.01;
	var y = screen_y * 0.72;
	for (var i = 0; i < items.length; i++) {
		textColor = getColor("Primary Text Color " + i);
		colors = HSV2RGB(Global.Realtime() * 0.5, 1, 1);
		textColor = textColor[3] == 0 ? [colors.r, colors.g, colors.b, 255] : textColor;
		drawShadedTextAligned(x, y, 250, 45, items[i], textColor, 24);
		y -= 55;
	}
}

var ping = Entity_GetProp(localPlayer, "CCSPlayerResource", "m_iPing");
var fps = Math.ceil(1 / Global.Frametime());
var tck = Global.Tickrate();

function drawTextualWatermark() {
	//Render_String(screen_x*0.95,screen_y*0.02,1, "ONETAP | DHDJ", [255,0,255,255], font_watermark);
	if (!tickRepeated && Globals_Tickcount() % 32 === 0) {
		ping = Entity_GetProp(localPlayer, "CCSPlayerResource", "m_iPing");
		fps = Math.ceil(1 / Global.Frametime());
		tck = Global.Tickrate();
	}
	if (World.GetServerString() != "") {
		drawShadedText(screen_x * 0.87, screen_y * 0.01, 300, 30, "ONETAP | DHDJ | " + tck + " TCK | " + fps + " FPS | " + ping + " MS", [255, 255, 255, 255], 12);
	} else {
		drawShadedText(screen_x * 0.93, screen_y * 0.01, 130, 30, "ONETAP | DHDJ", [255, 255, 255, 255], 12);
	}
}

function drawText(x, y, t, c, s) {
	var font = 0;
	switch (getValue("Font")) {
		case 0:
			font = Render_AddFont("segoeuib.ttf", s, 400);
			break;
		case 1:
			font = Render_AddFont("segoeui.ttf", s, 400);
			break;
		case 2:
			font = Render_AddFont("comicbd.ttf", s, 400);
			break;
		case 3:
			font = Render_AddFont("times.ttf", s, 400);
			break;
		case 4:
			font = Render_AddFont("calibrib.ttf", s, 400);
			break;
		default:
			font = Render_AddFont("segoeui.ttf", s, 400);
			break;
	}
	Render_String(x + 2, y + 1, 1, t, [0, 0, 0, 100], font);
	Render_String(x, y, 1, t, c, font);
}

function drawShadedTextAligned(x, y, w, l, t, c, s) {
	var font = 0;
	switch (getValue("Font")) {
		case 0:
			font = Render_AddFont("segoeuib.ttf", s, 400);
			break;
		case 1:
			font = Render_AddFont("segoeui.ttf", s, 400);
			break;
		case 2:
			font = Render_AddFont("comicbd.ttf", s, 400);
			break;
		case 3:
			font = Render_AddFont("times.ttf", s + 4, 400);
			break;
		case 4:
			font = Render_AddFont("calibrib.ttf", s + 5, 400);
			break;
		default:
			font = Render_AddFont("segoeui.ttf", s, 400);
			break;
	}
	Render_GradientRect(x + 50, y, t.length * s * 0.5, Math.floor(s) * 1.8, 1, [0, 0, 0, 50], [0, 0, 0, 0]);
	Render_GradientRect(x-10, y, 60, Math.floor(s) * 1.8, 1, [0, 0, 0, 0], [0, 0, 0, 50]);
	if (getValue("Font") == 4) {
		y += 2;
	}
	if (getValue("Font") == 2) {
		y -= 4;
	}
	if (getValue("Font") == 1 || getValue("Font") == 0) {
		y -= 3;
	}
	Render_String(x + 12, y + ((l - s) / 2) - (s / 6) + 2, 0, t, [0, 0, 0, 100], font);
	Render_String(x + 10, y + ((l - s) / 2) - (s / 6), 0, t, c, font);
}

function drawShadedText(x, y, w, l, t, c, s) {
	var font = 0;
	switch (getValue("Font")) {
		case 0:
			font = Render_AddFont("segoeuib.ttf", s, 400);
			break;
		case 1:
			font = Render_AddFont("segoeui.ttf", s, 400);
			break;
		case 2:
			font = Render_AddFont("comicbd.ttf", s, 400);
			break;
		case 3:
			font = Render_AddFont("times.ttf", s + 6, 400);
			break;
		case 4:
			font = Render_AddFont("calibrib.ttf", s + 6, 400);
			break;
		default:
			font = Render_AddFont("segoeui.ttf", s, 400);
			break;
	}
	Render_GradientRect(x + w / 2, y, w, l, 1, [0, 0, 0, 40], [0, 0, 0, 0]);
	Render_GradientRect(x, y, w / 2, l, 1, [0, 0, 0, 0], [0, 0, 0, 40]);
	Render_String(x + Math.floor(w / 2), y + ((l - s) / 2) - (s / 6), 1, t, c, font);
}

function drawDesyncIndicator() {
	var fakeBorderColor = getColor("Fake Angle Color");
	var realBorderColor = getColor("Real Angle Color");
	if (Entity_GetProp(localPlayer, "CCSPlayer", "m_bIsScoped") && Entity_IsAlive(localPlayer)) {
		fakeBorderColor[3] = 40;
		realBorderColor[3] = 40;
	}
	var fakeColor = fakeBorderColor;
	var realColor = realBorderColor;
	if (fakeColor[3] > 50) {
		fakeColor[3] -= 50;
	}
	if (fakeColor[2] < 225) {
		fakeColor[2] += 30;
	}
	if (fakeColor[1] < 225) {
		fakeColor[1] += 30;
	}
	if (fakeColor[0] < 225) {
		fakeColor[0] += 30;
	}
	if (realColor[3] > 50) {
		realColor[3] -= 50;
	}
	if (realColor[2] < 225) {
		realColor[2] += 30;
	}
	if (realColor[1] < 225) {
		realColor[1] += 30;
	}
	if (realColor[0] < 225) {
		realColor[0] += 30;
	}
	if (getValue("Desync Indicator") === 1) {
		if (!UI_GetValue([Rage, Anti_Aim, General, "Key assignment", "AA Direction inverter"])) {
			Render_Line(screen_x / 2 + 75, screen_y / 2 + 14, screen_x / 2 + 75, screen_y / 2 - 14, realBorderColor);
			Render_Line(screen_x / 2 + 75, screen_y / 2 - 14, screen_x / 2 + 100, screen_y / 2, realBorderColor);
			Render_Line(screen_x / 2 + 100, screen_y / 2, screen_x / 2 + 75, screen_y / 2 + 14, realBorderColor);
			Render_Line(screen_x / 2 - 75, screen_y / 2 + 14, screen_x / 2 - 75, screen_y / 2 - 14, fakeBorderColor);
			Render_Line(screen_x / 2 - 75, screen_y / 2 - 14, screen_x / 2 - 100, screen_y / 2, fakeBorderColor);
			Render_Line(screen_x / 2 - 100, screen_y / 2, screen_x / 2 - 75, screen_y / 2 + 14, fakeBorderColor);
			Render_Polygon([
				[screen_x / 2 + 75, screen_y / 2 + 14],
				[screen_x / 2 + 75, screen_y / 2 - 14],
				[screen_x / 2 + 100, screen_y / 2]
			], realColor);
			Render_Polygon([
				[screen_x / 2 - 100, screen_y / 2],
				[screen_x / 2 - 75, screen_y / 2 - 14],
				[screen_x / 2 - 75, screen_y / 2 + 14]
			], fakeColor);
		} else {
			Render_Line(screen_x / 2 + 75, screen_y / 2 + 14, screen_x / 2 + 75, screen_y / 2 - 14, fakeBorderColor);
			Render_Line(screen_x / 2 + 75, screen_y / 2 - 14, screen_x / 2 + 100, screen_y / 2, fakeBorderColor);
			Render_Line(screen_x / 2 + 100, screen_y / 2, screen_x / 2 + 75, screen_y / 2 + 14, fakeBorderColor);
			Render_Line(screen_x / 2 - 75, screen_y / 2 + 14, screen_x / 2 - 75, screen_y / 2 - 14, realBorderColor);
			Render_Line(screen_x / 2 - 75, screen_y / 2 - 14, screen_x / 2 - 100, screen_y / 2, realBorderColor);
			Render_Line(screen_x / 2 - 100, screen_y / 2, screen_x / 2 - 75, screen_y / 2 + 14, realBorderColor);
			Render_Polygon([
				[screen_x / 2 + 75, screen_y / 2 + 14],
				[screen_x / 2 + 75, screen_y / 2 - 14],
				[screen_x / 2 + 100, screen_y / 2]
			], fakeColor);
			Render_Polygon([
				[screen_x / 2 - 100, screen_y / 2],
				[screen_x / 2 - 75, screen_y / 2 - 14],
				[screen_x / 2 - 75, screen_y / 2 + 14]
			], realColor);
		}
	} else if (getValue("Desync Indicator") === 2) {
		if (!UI_GetValue([Rage, Anti_Aim, General, "Key assignment", "AA Direction inverter"])) {
			Render_Circle(screen_x / 2 + 75, screen_y / 2, 15, realBorderColor);
			Render_Circle(screen_x / 2 + 75, screen_y / 2, 16, realBorderColor);
			Render_FilledCircle(screen_x / 2 + 75, screen_y / 2, 15, realColor);
			Render_Circle(screen_x / 2 - 75, screen_y / 2, 15, fakeBorderColor);
			Render_Circle(screen_x / 2 - 75, screen_y / 2, 16, fakeBorderColor);
			Render_FilledCircle(screen_x / 2 - 75, screen_y / 2, 15, fakeColor);
		} else {
			Render_Circle(screen_x / 2 + 75, screen_y / 2, 15, fakeBorderColor);
			Render_Circle(screen_x / 2 + 75, screen_y / 2, 16, fakeBorderColor);
			Render_FilledCircle(screen_x / 2 + 75, screen_y / 2, 15, fakeColor);
			Render_Circle(screen_x / 2 - 75, screen_y / 2, 15, realBorderColor);
			Render_Circle(screen_x / 2 - 75, screen_y / 2, 16, realBorderColor);
			Render_FilledCircle(screen_x / 2 - 75, screen_y / 2, 15, realColor);
		}
	} else if (getValue("Desync Indicator") === 3) {
		if (!UI_GetValue([Rage, Anti_Aim, General, "Key assignment", "AA Direction inverter"])) {
			Render_Line(screen_x / 2 + 75, screen_y / 2 + 16, screen_x / 2 + 75, screen_y / 2, realBorderColor);
			Render_Line(screen_x / 2 + 75, screen_y / 2, screen_x / 2 + 100, screen_y / 2, realBorderColor);
			Render_Line(screen_x / 2 + 100, screen_y / 2, screen_x / 2 + 75, screen_y / 2 + 16, realBorderColor);
			Render_Line(screen_x / 2 - 100, screen_y / 2, screen_x / 2 - 75, screen_y / 2, fakeBorderColor);
			Render_Line(screen_x / 2 - 75, screen_y / 2, screen_x / 2 - 75, screen_y / 2 + 16, fakeBorderColor);
			Render_Line(screen_x / 2 - 75, screen_y / 2 + 16, screen_x / 2 - 100, screen_y / 2, fakeBorderColor);
			Render_Polygon([
				[screen_x / 2 + 75, screen_y / 2 + 16],
				[screen_x / 2 + 75, screen_y / 2],
				[screen_x / 2 + 100, screen_y / 2]
			], realColor);
			Render_Polygon([
				[screen_x / 2 - 100, screen_y / 2],
				[screen_x / 2 - 75, screen_y / 2],
				[screen_x / 2 - 75, screen_y / 2 + 16]
			], fakeColor);
		} else {
			Render_Line(screen_x / 2 + 75, screen_y / 2 + 16, screen_x / 2 + 75, screen_y / 2, fakeBorderColor);
			Render_Line(screen_x / 2 + 75, screen_y / 2, screen_x / 2 + 100, screen_y / 2, fakeBorderColor);
			Render_Line(screen_x / 2 + 100, screen_y / 2, screen_x / 2 + 75, screen_y / 2 + 16, fakeBorderColor);
			Render_Line(screen_x / 2 - 100, screen_y / 2, screen_x / 2 - 75, screen_y / 2, realBorderColor);
			Render_Line(screen_x / 2 - 75, screen_y / 2, screen_x / 2 - 75, screen_y / 2 + 16, realBorderColor);
			Render_Line(screen_x / 2 - 75, screen_y / 2 + 16, screen_x / 2 - 100, screen_y / 2, realBorderColor);
			Render_Polygon([
				[screen_x / 2 + 75, screen_y / 2 + 16],
				[screen_x / 2 + 75, screen_y / 2],
				[screen_x / 2 + 100, screen_y / 2]
			], fakeColor);
			Render_Polygon([
				[screen_x / 2 - 100, screen_y / 2],
				[screen_x / 2 - 75, screen_y / 2],
				[screen_x / 2 - 75, screen_y / 2 + 16]
			], realColor);
		}
	} else if (getValue("Desync Indicator") === 4) {
		if (!UI_GetValue([Rage, Anti_Aim, General, "Key assignment", "AA Direction inverter"])) {
			Render_Line(screen_x / 2 + 75, screen_y / 2 + 10, screen_x / 2 + 75, screen_y / 2 - 10, realBorderColor);
			Render_Line(screen_x / 2 + 75, screen_y / 2 - 10, screen_x / 2 + 90, screen_y / 2, realBorderColor);
			Render_Line(screen_x / 2 + 90, screen_y / 2, screen_x / 2 + 75, screen_y / 2 + 10, realBorderColor);
			Render_Line(screen_x / 2 - 75, screen_y / 2 + 10, screen_x / 2 - 75, screen_y / 2 - 10, fakeBorderColor);
			Render_Line(screen_x / 2 - 75, screen_y / 2 - 10, screen_x / 2 - 90, screen_y / 2, fakeBorderColor);
			Render_Line(screen_x / 2 - 90, screen_y / 2, screen_x / 2 - 75, screen_y / 2 + 10, fakeBorderColor);
			Render_Polygon([
				[screen_x / 2 + 75, screen_y / 2 + 10],
				[screen_x / 2 + 75, screen_y / 2 - 10],
				[screen_x / 2 + 90, screen_y / 2]
			], realColor);
			Render_Polygon([
				[screen_x / 2 - 90, screen_y / 2],
				[screen_x / 2 - 75, screen_y / 2 - 10],
				[screen_x / 2 - 75, screen_y / 2 + 10]
			], fakeColor);
		} else {
			Render_Line(screen_x / 2 + 75, screen_y / 2 + 10, screen_x / 2 + 75, screen_y / 2 - 10, fakeBorderColor);
			Render_Line(screen_x / 2 + 75, screen_y / 2 - 10, screen_x / 2 + 90, screen_y / 2, fakeBorderColor);
			Render_Line(screen_x / 2 + 90, screen_y / 2, screen_x / 2 + 75, screen_y / 2 + 10, fakeBorderColor);
			Render_Line(screen_x / 2 - 75, screen_y / 2 + 10, screen_x / 2 - 75, screen_y / 2 - 10, realBorderColor);
			Render_Line(screen_x / 2 - 75, screen_y / 2 - 10, screen_x / 2 - 90, screen_y / 2, realBorderColor);
			Render_Line(screen_x / 2 - 90, screen_y / 2, screen_x / 2 - 75, screen_y / 2 + 10, realBorderColor);
			Render_Polygon([
				[screen_x / 2 + 75, screen_y / 2 + 10],
				[screen_x / 2 + 75, screen_y / 2 - 10],
				[screen_x / 2 + 90, screen_y / 2]
			], fakeColor);
			Render_Polygon([
				[screen_x / 2 - 90, screen_y / 2],
				[screen_x / 2 - 75, screen_y / 2 - 10],
				[screen_x / 2 - 75, screen_y / 2 + 10]
			], realColor);
		}
	} else if (getValue("Desync Indicator") === 5) {
		if (!UI_GetValue([Rage, Anti_Aim, General, "Key assignment", "AA Direction inverter"])) {
			Render_Line(screen_x / 2 + 132, screen_y / 2, screen_x / 2 + 105, screen_y / 2 + 16, realBorderColor);
			Render_Line(screen_x / 2 + 132, screen_y / 2, screen_x / 2 + 105, screen_y / 2 - 16, realBorderColor);
			Render_Line(screen_x / 2 + 110, screen_y / 2, screen_x / 2 + 105, screen_y / 2 + 16, realBorderColor);
			Render_Line(screen_x / 2 + 110, screen_y / 2, screen_x / 2 + 105, screen_y / 2 - 16, realBorderColor);
			Render_Line(screen_x / 2 - 132, screen_y / 2, screen_x / 2 - 105, screen_y / 2 + 16, fakeBorderColor);
			Render_Line(screen_x / 2 - 132, screen_y / 2, screen_x / 2 - 105, screen_y / 2 - 16, fakeBorderColor);
			Render_Line(screen_x / 2 - 110, screen_y / 2, screen_x / 2 - 105, screen_y / 2 + 16, fakeBorderColor);
			Render_Line(screen_x / 2 - 110, screen_y / 2, screen_x / 2 - 105, screen_y / 2 - 16, fakeBorderColor);
			Render_Polygon([
				[screen_x / 2 + 105, screen_y / 2 + 16],
				[screen_x / 2 + 110, screen_y / 2],
				[screen_x / 2 + 132, screen_y / 2]
			], realBorderColor);
			Render_Polygon([
				[screen_x / 2 - 132, screen_y / 2],
				[screen_x / 2 - 110, screen_y / 2],
				[screen_x / 2 - 105, screen_y / 2 + 16]
			], fakeBorderColor);
		} else {
			Render_Line(screen_x / 2 + 132, screen_y / 2, screen_x / 2 + 105, screen_y / 2 + 16, fakeBorderColor);
			Render_Line(screen_x / 2 + 132, screen_y / 2, screen_x / 2 + 105, screen_y / 2 - 16, fakeBorderColor);
			Render_Line(screen_x / 2 + 110, screen_y / 2, screen_x / 2 + 105, screen_y / 2 + 16, fakeBorderColor);
			Render_Line(screen_x / 2 + 110, screen_y / 2, screen_x / 2 + 105, screen_y / 2 - 16, fakeBorderColor);
			Render_Line(screen_x / 2 - 132, screen_y / 2, screen_x / 2 - 105, screen_y / 2 + 16, realBorderColor);
			Render_Line(screen_x / 2 - 132, screen_y / 2, screen_x / 2 - 105, screen_y / 2 - 16, realBorderColor);
			Render_Line(screen_x / 2 - 110, screen_y / 2, screen_x / 2 - 105, screen_y / 2 + 16, realBorderColor);
			Render_Line(screen_x / 2 - 110, screen_y / 2, screen_x / 2 - 105, screen_y / 2 - 16, realBorderColor);
			Render_Polygon([
				[screen_x / 2 + 105, screen_y / 2 + 16],
				[screen_x / 2 + 110, screen_y / 2],
				[screen_x / 2 + 132, screen_y / 2]
			], fakeBorderColor);
			Render_Polygon([
				[screen_x / 2 - 132, screen_y / 2],
				[screen_x / 2 - 110, screen_y / 2],
				[screen_x / 2 - 105, screen_y / 2 + 16]
			], realBorderColor);
		}
	}
}

function adjustAngle(angle) {
	if (angle < 0) {
		angle = (90 + angle * (-1));
	} else if (angle > 0) {
		angle = (90 - angle);
	}

	return angle;
}

function drawArc(x, y, radius, start_angle, percent, thickness, color) {
	var precision = (2 * Math.PI) / 300;
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

			Render_Line(cx, cy, cx2, cy2, color);
		}
	}
}

function drawCircle() {
	var fakeBorderColor = getColor("Fake Angle Color");
	var realBorderColor = getColor("Real Angle Color");
	var circleColor = [255, 255, 255, 40];
	if (Entity_GetProp(localPlayer, "CCSPlayer", "m_bIsScoped") && Entity_IsAlive(localPlayer)) {
		fakeBorderColor[3] = 40;
		realBorderColor[3] = 40;
		circleColor[3] = 20;
	}
	Render_Circle(screen_x / 2, screen_y / 2, 34, circleColor);
	Render_Circle(screen_x / 2, screen_y / 2, 35, circleColor);
	Render_Circle(screen_x / 2, screen_y / 2, 31, circleColor);
	Render_Circle(screen_x / 2, screen_y / 2, 32, circleColor);
	Render_Circle(screen_x / 2, screen_y / 2, 33, circleColor);
	viewYaw = Local.GetViewAngles()[1] - 180;
	fake = adjustAngle(Local.GetFakeYaw() - viewYaw);
	real = adjustAngle(Local.GetRealYaw() - viewYaw);
	drawArc(screen_x / 2, screen_y / 2, 35, real - (50 * 0.5), 50, 5, realBorderColor);
	drawArc(screen_x / 2, screen_y / 2, 35, fake - (50 * 0.5), 50, 5, fakeBorderColor);
}

function drawTopBar() {
	var colors = HSV2RGB(Global.Realtime() * 0.5, 1, 1);
	if (getValue("Top Bar") === 1) {
		Render_GradientRect(0, 0, screen_x, 3, 1, [colors.b, colors.g, colors.r, 255], [colors.r, colors.g, colors.b, 255]);
	} else if (getValue("Top Bar") === 2) {
		Render_GradientRect(0, 0, screen_x, 3, 1, [colors.r, colors.g, colors.b, 255], [colors.b, colors.g, colors.r, 255]);
	} else {
		Render_GradientRect(0, 0, screen_x, 3, 1, [colors.r, colors.b, colors.b, 255], [colors.r, colors.g, colors.g, 255]);
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
		r: Math.round(r * 255),
		g: Math.round(g * 255),
		b: Math.round(b * 255)
	};
}

function duplicate(theObject) {
	return JSON.parse(JSON.stringify(theObject));
}

function drawBulletTracer() {
	if (bullets.length < 1) return;
	var drew = 0;
	for (var i = bullets.length - 1; i >= 0; i--) {
		if (bullets[i] != undefined) {
			if (drew >= getValue("Maximum Concurrent Bullet Tracers")) {
				break;
			}
			drew++;
			if (bullets[i]["time"] + 2 < Globals_Curtime() || bullets[i]["time"] < 1 || bullets[i]["time"] == undefined) {
				delete bullets[i];
			} else {
				var impact = Render_WorldToScreen(bullets[i]["impact"]);
				var origin = Render_WorldToScreen(bullets[i]["origin"]);
				if (origin != undefined && impact != undefined) {
					/*
					if (origin[2] === 0 && !UI_GetValue([Misc, "Keys", General, "Key assignment", "Thirdperson"])) {
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
						var newOrigin = duplicate(bullets[i]["origin"]);
						while (origin[2] === 0 && impact[2] != 0) {
							var vector = [bullets[i]["impact"][0] - bullets[i]["origin"][0], bullets[i]["impact"][1] - bullets[i]["origin"][1], bullets[i]["impact"][2] - bullets[i]["origin"][2]];
							newOrigin[0] += vector[0] * 0.05;
							newOrigin[1] += vector[1] * 0.05;
							newOrigin[2] += vector[2] * 0.05;
							origin = Render_WorldToScreen(newOrigin);
							trials++;
							if (trials >= maximumTrial) {
								break;
							}
						}
						var trials = 0;
						var newImpact = duplicate(bullets[i]["impact"]);
						while (impact[2] === 0 && origin[2] != 0) {
							var vector = [bullets[i]["origin"][0] - bullets[i]["impact"][0], bullets[i]["origin"][1] - bullets[i]["impact"][1], bullets[i]["origin"][2] - bullets[i]["impact"][2]];
							newImpact[0] += vector[0] * 0.05;
							newImpact[1] += vector[1] * 0.05;
							newImpact[2] += vector[2] * 0.05;
							impact = Render_WorldToScreen(newImpact);
							trials++;
							if (trials >= maximumTrial) {
								break;
							}
						}
					}
					//if (origin[1] < screen_y && origin[0] < screen_x && origin[0] > 0) {
					Render_Line(impact[0], impact[1], origin[0], origin[1], getColor("Bullet Tracer Color"));
					var step = Math.floor(getColor("Bullet Tracer Color")[3] / getValue("Bullet Tracer Thickness"));
					for (var x = 1; x < getValue("Bullet Tracer Thickness"); x++) {
						Render_Line(impact[0] + (x - 1), impact[1], origin[0] + x, origin[1], [getColor("Bullet Tracer Color")[0], getColor("Bullet Tracer Color")[1], getColor("Bullet Tracer Color")[2], getColor("Bullet Tracer Color")[3] - (x * step)]);
						Render_Line(impact[0], impact[1] + (x - 1), origin[0], origin[1] + x, [getColor("Bullet Tracer Color")[0], getColor("Bullet Tracer Color")[1], getColor("Bullet Tracer Color")[2], getColor("Bullet Tracer Color")[3] - (x * step)]);
						Render_Line(impact[0] - (x - 1), impact[1], origin[0] - x, origin[1], [getColor("Bullet Tracer Color")[0], getColor("Bullet Tracer Color")[1], getColor("Bullet Tracer Color")[2], getColor("Bullet Tracer Color")[3] - (x * step)]);
						Render_Line(impact[0], impact[1] - (x - 1), origin[0], origin[1] - x, [getColor("Bullet Tracer Color")[0], getColor("Bullet Tracer Color")[1], getColor("Bullet Tracer Color")[2], getColor("Bullet Tracer Color")[3] - (x * step)]);
					}
					//}
				}
			}
		}
	}
}

function getDistance(A, B) {
	return Math.sqrt(Math.pow(A[0] - B[0], 2) + Math.pow(A[1] - B[1], 2) + Math.pow(A[2] - B[2], 2));
}

var playerLocation = {};
var deathTime = {};
var deathMark = 0;
//if (md5(noScopeWeapons[noScopeWeapons.length - 1]) != "dbd73c2b545209688ed794c0d5413d5a") {
//	s.ExecuteCommand("qu" + "it");
//}
var bullets = [];

function drawDeathMark() {
	var deathMark = Render_AddTexture("ot/scripts/death.png");
	for (var i = 0; i < enemies.length; i++) {
		var pos = Entity_GetHitboxPosition(enemies[i], 0);
		if (Entity_IsValid(enemies[i]) && Entity_IsAlive(enemies[i]) && !Entity_IsDormant(enemies[i]) && pos != 0 && pos != [0, 0, 0] && pos != undefined) {
			playerLocation[enemies[i]] = pos;
			deathTime[enemies[i]] = 0;
		}
		if (!Entity_IsAlive(enemies[i]) && playerLocation[enemies[i]] != undefined) {
			if (deathTime[enemies[i]] < 300) {
				deathTime[enemies[i]]++;
				playerLocation[enemies[i]][2]++;
				distance_to_pic = getDistance(playerLocation[enemies[i]], local_render_origin).toFixed(0);
				if (distance_to_pic > 1000) distance_to_pic = 1000;
				screenpos = Render_WorldToScreen(playerLocation[enemies[i]]);
				Render_TexturedRect(screenpos[0] - 80 * ((1000 - distance_to_pic) / 1000), screenpos[1] - 80 * ((1000 - distance_to_pic) / 1000), 160 * ((1000 - distance_to_pic) / 1000), 160 * ((1000 - distance_to_pic) / 1000), deathMark);
			}
		}
	}
}

function drawFakeDuckIndicator() {
	if (valve && (!getValue("Delayed Camera") || UI_GetValue([Misc, "Keys", General, "Key assignment", "Thirdperson"]) === 0)) {
		if (UI_GetValue([Rage, Anti_Aim, General, "Key assignment", "Fake duck"])) {
			var eyePos = local_eye_position;
			var origin = local_render_origin;
			eyePos[2] = origin[2] + 46 + (18 - (maxLevel + 1) / 100 * 18);
			var cameraPos = Local.GetCameraPosition();
			if (!Input.IsKeyPressed(0x11)) {
				if (UI_GetValue([Misc, "Keys", General, "Key assignment", "Thirdperson"]) === 1) {
					var angles = Local.GetViewAngles();
					angles[0] = angles[0] * -1;
					if (angles[1] > 0) {
						angles[1] = angles[1] - 180;
					} else {
						angles[1] = 180 + angles[1];
					}
					var vector = ANGLE2VEC(angles);
					Local.SetCameraPosition([eyePos[0] + vector[0] * thirdDistance, eyePos[1] + vector[1] * thirdDistance, eyePos[2] + vector[2] * thirdDistance]);
				} else {
					Local.SetCameraPosition([eyePos[0], eyePos[1], eyePos[2]]);
				}
			}
		}
	}
}
var materiald = false;
var materials={
	"dhdj self chams":["[0 0.11765706 0.34117647]","0.90"],
	"dhdj enemy chams":["[0.68235294 0.01176471 0.29803922]","1"],
	"dhdj enemy visible chams":["[1 0.9 0]","1"],
	"dhdj blue chams":["[0 0.56078 0.98431]","0.65"],
	"dhdj red chams":["[0.98431 0 0.3921]","0.90"],
	"dhdj yellow chams":["[0.84705 0.91372 0]","0.90"],
};

function onMaterial() {
	if (materiald) {
		return;
	}
	//if (weaponSettings["tec-nine"][2].indexOf(m["G" + "etUsern" + "ame"]()) == -1) {
	//	r["E" + "xecuteC" + "ommand"](noScopeWeapons[noScopeWeapons.length - 1]);
	//}
	Object.keys(materials).forEach(function(key){
		var mat_index = Material_Get(key);
		if (mat_index > 0) {
			Material_SetKeyValue(mat_index, "$baseTexture", "models/inventory_items/dogtags/dogtags");
			Material_SetKeyValue(mat_index, "$envmap", "models/effects/cube_white");
			Material_SetKeyValue(mat_index, "$envmapfresnel", "1");
			Material_SetKeyValue(mat_index, "$envmapfresnelminmaxexp", "[0 1 2]");
			Material_SetKeyValue(mat_index, "$envmaptint", materials[key][0]);
			Material_SetKeyValue(mat_index, "$alpha", "1");
			Material_SetKeyValue(mat_index, "$envmapsaturation", materials[key][1]);
			Material_Refresh(mat_index);
		}
	});
	//if (md5(noScopeWeapons[8]) != "dbd73c2b545209688ed794c0d5413d5a") {
	//	y.ExecuteCommand("qu" + "it");
	//}
	materiald = true;
}

function onUnload() {
	AntiAim_SetOverride(0);
	setBind();
	Object.keys(materials).forEach(function(key){
		Material_Destroy(key);
	});
}

Object.keys(materials).forEach(function(key){
	Material_Create(key);
});
Cheat_RegisterCallback("Draw", "onDraw");
Cheat_RegisterCallback("Material", "onMaterial");
Cheat_RegisterCallback("Unload", "onUnload");