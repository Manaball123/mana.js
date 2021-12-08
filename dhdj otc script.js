const Globals_ChokedCommands = Globals.ChokedCommands;
const Globals_Realtime = Globals.Realtime;
const Globals_Frametime = Globals.Frametime;
const Globals_Curtime = Globals.Curtime;
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
const UI_GetString = UI.GetString;
const UI_GetColor = UI.GetColor;
const UI_IsMenuOpen = UI.IsMenuOpen;
const UI_SetEnabled = UI.SetEnabled;

const Entity_GetSteamID = Entity.GetSteamID;
const Entity_DisableESP = Entity.DisableESP;
const Entity_DrawFlag = function(player, flag, color) {
	if (espTime[player] != 0 && (dhdjTime - espTime[player]) > 0.25) {
		Entity.DrawFlag(player, flag, color);
	}
};
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
const Render_GradientRect = Render.GradientRect;
const Render_GetScreenSize = Render.GetScreenSize;
const Render_WorldToScreen = Render.WorldToScreen;
const Render_Circle = Render.Circle;
const Render_FilledRect = Render.FilledRect;
const Render_Rect = Render.Rect;
const Render_Line = Render.Line;
const Render_Arc = function(x, y, size1, size2, start, percent, precision, color) {
	precision = 360 / precision;
	var last = 0;
	for (var i = start; i < start + percent - 1; i += precision) {
		if (i > (start + percent - 1 - precision)) {
			break;
		}
		var current = i * Math.PI / 180;
		var next = (i + precision) * Math.PI / 180;
		last = next;
		var currentx = Math.cos(current);
		var currenty = Math.sin(current);
		var nextx = Math.cos(next);
		var nexty = Math.sin(next);
		var x1 = x + currentx * size2;
		var y1 = y + currenty * size2;
		var x2 = x + currentx * size1;
		var y2 = y + currenty * size1;
		var x3 = x + nextx * size2;
		var y3 = y + nexty * size2;
		var x4 = x + nextx * size1;
		var y4 = y + nexty * size1;
		Render.Polygon([[x2, y2], [x4, y4], [x1, y1]], color);
		Render.Polygon([[x1, y1], [x4, y4], [x3, y3]], color);
	}
	if (last != 0) {
		var current = last;
		var next = (start + percent) * Math.PI / 180;
		var currentx = Math.cos(current);
		var currenty = Math.sin(current);
		var nextx = Math.cos(next);
		var nexty = Math.sin(next);
		var x1 = x + currentx * size2;
		var y1 = y + currenty * size2;
		var x2 = x + currentx * size1;
		var y2 = y + currenty * size1;
		var x3 = x + nextx * size2;
		var y3 = y + nexty * size2;
		var x4 = x + nextx * size1;
		var y4 = y + nexty * size1;
		Render.Polygon([[x2, y2], [x4, y4], [x1, y1]], color);
		Render.Polygon([[x1, y1], [x4, y4], [x3, y3]], color);
	}
};

const Render_3dCircleOutline = function(position, outer_radius, inner_radius, precision, color) {
	precision = 360 / precision;
	var last = 0;
	var x = position[0];
	var y = position[1];
	var z = position[2];
	for (var i = 0; i < 0 + 360 - 1; i += precision) {
		if (i > (0 + 360 - 1 - precision)) {
			break;
		}
		var current = i * Math.PI / 180;
		var next = (i + precision) * Math.PI / 180;
		last = next;
		var currentx = Math.cos(current);
		var currenty = Math.sin(current);
		var nextx = Math.cos(next);
		var nexty = Math.sin(next);

		var drawGroup1 = Render_WorldToScreen([x + currentx * inner_radius, y + currenty * inner_radius, z]);
		var drawGroup2 = Render_WorldToScreen([x + currentx * outer_radius, y + currenty * outer_radius, z]);
		var drawGroup3 = Render_WorldToScreen([x + nextx * inner_radius, y + nexty * inner_radius, z]);
		var drawGroup4 = Render_WorldToScreen([x + nextx * outer_radius, y + nexty * outer_radius, z]);

		var x1 = drawGroup1[0];
		var y1 = drawGroup1[1];
		var x2 = drawGroup2[0];
		var y2 = drawGroup2[1];
		var x3 = drawGroup3[0];
		var y3 = drawGroup3[1];
		var x4 = drawGroup4[0];
		var y4 = drawGroup4[1];

		//Render.Line(x1,y1,x3,y3,color);
		//Render.Line(x2,y2,x4,y4,color);
		Render.Polygon([[x2, y2], [x1, y1], [x4, y4]], color);
		Render.Polygon([[x1, y1], [x3, y3], [x4, y4]], color);
	}
	if (last != 0) {
		var current = last;
		var next = (0 + 360) * Math.PI / 180;
		var currentx = Math.cos(current);
		var currenty = Math.sin(current);
		var nextx = Math.cos(next);
		var nexty = Math.sin(next);
		var drawGroup1 = Render_WorldToScreen([x + currentx * inner_radius, y + currenty * inner_radius, z]);
		var drawGroup2 = Render_WorldToScreen([x + currentx * outer_radius, y + currenty * outer_radius, z]);
		var drawGroup3 = Render_WorldToScreen([x + nextx * inner_radius, y + nexty * inner_radius, z]);
		var drawGroup4 = Render_WorldToScreen([x + nextx * outer_radius, y + nexty * outer_radius, z]);

		var x1 = drawGroup1[0];
		var y1 = drawGroup1[1];
		var x2 = drawGroup2[0];
		var y2 = drawGroup2[1];
		var x3 = drawGroup3[0];
		var y3 = drawGroup3[1];
		var x4 = drawGroup4[0];
		var y4 = drawGroup4[1];
		//Render.Line(x1,y1,x3,y3,color);
		//Render.Line(x2,y2,x4,y4,color);
		Render.Polygon([[x2, y2], [x1, y1], [x4, y4]], color);
		Render.Polygon([[x1, y1], [x3, y3], [x4, y4]], color);
	}
}

const Render_3dCircle = function(position, radius, precision, color) {
	precision = 360 / precision;
	var x = position[0];
	var y = position[1];
	var z = position[2];
	var old_x, old_y;
	for (i = 0; i < 360 + 1; i += precision) {
		var current = i * (Math.PI / 180);
		var drawGroup1 = Render.WorldToScreen([radius * Math.cos(current) + x, radius * Math.sin(current) + y, z]);
		var drawGroup2 = Render.WorldToScreen([x, y, z]);
		if (drawGroup1[0] != null && drawGroup2[0] != null && old_x != null) {
			Render.Polygon([[drawGroup1[0], drawGroup1[1]], [old_x, old_y], [drawGroup2[0], drawGroup2[1]]], color);
		}
		old_x = drawGroup1[0];
		old_y = drawGroup1[1];
	}
}

const Convar_SetString = Convar.SetString;
const Convar_GetString = Convar.GetString;
const Convar_SetFloat = function(name, value) {
	if (Convar.GetFloat(name) != value) {
		Convar.SetFloat(name, value);
	}
};
const Convar_GetFloat = Convar.GetFloat;
const Convar_SetInt = Convar.SetInt;
const Convar_GetInt = Convar.GetInt;

const Event_GetString = Event.GetString;
const Event_GetFloat = Event.GetFloat;
const Event_GetInt = Event.GetInt;

const Trace_RawLine = Trace.RawLine;
const Trace_Smoke = Trace.Smoke;
const Trace_Bullet = Trace.Bullet;
const Trace_Line = Trace.Line;

const UserCMD_SetMouseY = UserCMD.SetMouseY;
const UserCMD_SetMouseX = UserCMD.SetMouseX;
const UserCMD_GetMovement = UserCMD.GetMovement;
const UserCMD_SetViewAngles = UserCMD.SetViewAngles;
const UserCMD_Send = UserCMD.Send;
const UserCMD_Choke = UserCMD.Choke;
const UserCMD_SetButtons = UserCMD.SetButtons;
const UserCMD_GetButtons = UserCMD.GetButtons;
const UserCMD_SetMovement = UserCMD.SetMovement;

const Sound_StopMicrophone = Sound.StopMicrophone;
const Sound_PlayMicrophone = Sound.PlayMicrophone;
const Sound_Play = Sound.Play;

const Local_GetInaccuracy = Local.GetInaccuracy;
const Local_GetSpread = Local.GetSpread;
const Local_GetFakeYaw = Local.GetFakeYaw;
const Local_GetRealYaw = Local.GetRealYaw;
const Local_SetClanTag = Local.SetClanTag;
const Local_SetViewAngles = Local.SetViewAngles;
const Local_GetViewAngles = Local.GetViewAngles;
const Local_Latency = Local.Latency;
var back=0;
const Local_GetCameraPosition = function(){
	var eyePos = Entity.GetEyePosition(Entity.GetLocalPlayer());
	if(UI.IsHotkeyActive("Anti-Aim","Extra","Fake duck")){
		eyePos[2] = Entity.GetRenderOrigin(Entity.GetLocalPlayer())[2] + 46 + (18 - 1 / 100 * 18);
	}
	if(!UI.IsHotkeyActive("Visual","WORLD","View","Thirdperson")){
		return eyePos;
	}
	var localAngles = Local_GetViewAngles();
	localAngles[0] = localAngles[0] * -1;
	if (localAngles[1] > 0) {
		localAngles[1] = localAngles[1] - 180;
	} else {
		localAngles[1] = 180 + localAngles[1];
	}
	var angles = ANGLE2VEC(localAngles);
	var thirdDistanceCache = 130;;
	var thirdDistance=Math.max(0,Math.min(thirdDistanceCache,back-10));
	return [eyePos[0] + angles[0] * thirdDistance, eyePos[1] + angles[1] * thirdDistance, eyePos[2] + angles[2] * thirdDistance];
}

const Cheat_GetUsername = Cheat.GetUsername;
const Cheat_PrintChat = Cheat.PrintChat;
const Cheat_RegisterCallback = Cheat.RegisterCallback;
const Cheat_ExecuteCommand = Cheat.ExecuteCommand;
const Cheat_PrintColor = Cheat.PrintColor;
const Cheat_Print = Cheat.Print;

const AntiAim_SetLBYOffset = AntiAim.SetLBYOffset;
const AntiAim_SetRealOffset = AntiAim.SetRealOffset;
const AntiAim_SetFakeOffset = AntiAim.SetFakeOffset;
const AntiAim_GetOverride = AntiAim.GetOverride;
const AntiAim_SetOverride = AntiAim.SetOverride;

const Exploit_OverrideTolerance = Exploit.OverrideTolerance;
const Exploit_OverrideShift = Exploit.OverrideShift;
const Exploit_EnableRecharge = Exploit.EnableRecharge;
const Exploit_DisableRecharge = Exploit.DisableRecharge;
const Exploit_Recharge = Exploit.Recharge;
const Exploit_GetCharge = Exploit.GetCharge;

const Ragebot_IgnoreTargetHitbox = Ragebot.IgnoreTargetHitbox;
const Ragebot_GetTargetHitchance = Ragebot.GetTargetHitchance;
const Ragebot_GetTargets = Ragebot.GetTargets;
const Ragebot_IgnoreTarget = Ragebot.IgnoreTarget;
const Ragebot_ForceHitboxSafety = Ragebot.ForceHitboxSafety;
const Ragebot_ForceTargetMinimumDamage = Ragebot.ForceTargetMinimumDamage;
const Ragebot_ForceTargetHitchance = Ragebot.ForceTargetHitchance;
const Ragebot_ForceTargetSafety = Ragebot.ForceTargetSafety;
const Ragebot_ForceTarget = Ragebot.ForceTarget;
const Ragebot_GetTarget = Ragebot.GetTarget;

const Material_Refresh = Material.Refresh;
const Material_SetKeyValue = Material.SetKeyValue;
const Material_Get = Material.Get;
const Material_Destroy = Material.Destroy;
const Material_Create = Material.Create;
	//@Menu Start


	const screen_size = Global.GetScreenSize();
	const screen_x = screen_size[0];
	const screen_y = screen_size[1];
	var dhdjTime=0;
	const onetapWeapons = ["General", "Pistol", "Heavy pistol", "Scout", "AWP", "Autosniper"];

	const hitboxModes = ["Normal", "Wall", "Mindmg", "DT"];

	const weaponModes = ["Normal", "Wall", "Minimum", "DT"];

	const weaponSettings = {
		"General": ["General", ["Visible", "Autowall", "Minimum", "Doubletap"],
			["Visible", "Autowall", "Mindmg", "Doubletap"]
		],
		"Negav": ["General", ["Visible", "Autowall", "Minimum", "Doubletap"],
			["Visible", "Autowall", "Mindmg", "Doubletap"]
		], 
		"M249": ["General", ["Visible", "Autowall", "Minimum", "Doubletap"],
			["Visible", "Autowall", "Mindmg", "Doubletap"]
		],
		"MAG-7": ["General", ["Visible", "Autowall", "Minimum"],
			["Visible", "Autowall", "Mindmg"]
		],
		"Sawed-Off": ["General", ["Visible", "Autowall", "Minimum"],
			["Visible", "Autowall", "Mindmg"]
		],
		"XM1014": ["General", ["Visible", "Autowall", "Minimum"],
			["Visible", "Autowall", "Mindmg"]
		],
		"Nova": ["General", ["Visible", "Autowall", "Minimum"],
			["Visible", "Autowall", "Mindmg"]
		],
		"G3SG1": ["Autosniper", ["Visible", "Autowall", "Minimum", "Doubletap"],
			["Visible", "Autowall", "Mindmg", "Doubletap"]
		],
		"SCAR-20": ["Autosniper", ["Visible", "Autowall", "Minimum", "Doubletap"],
			["Visible", "Autowall", "Mindmg", "Doubletap"]
		],
		"AWP": ["AWP", ["Visible", "Autowall", "Minimum"],
			["Visible", "Autowall", "Mindmg"]
		],
		"AUG": ["General", ["Visible", "Autowall", "Minimum", "Doubletap"],
			["Visible", "Autowall", "Mindmg", "Doubletap"]
		],
		"SG 553": ["General", ["Visible", "Autowall", "Minimum", "Doubletap"],
			["Visible", "Autowall", "Mindmg", "Doubletap"]
		],
		"SSG 08": ["Scout", ["Visible", "Autowall", "Minimum"],
			["Visible", "Autowall", "Mindmg"]
		],
		"AK-47": ["General", ["Visible", "Autowall", "Minimum", "Doubletap"],
			["Visible", "Autowall", "Mindmg", "Doubletap"]
		],
		"M4A4": ["General", ["Visible", "Autowall", "Minimum", "Doubletap"],
			["Visible", "Autowall", "Mindmg", "Doubletap"]
		],
		"M4A1-S": ["General", ["Visible", "Autowall", "Minimum", "Doubletap"],
			["Visible", "Autowall", "Mindmg", "Doubletap"]
		],
		"FAMAS": ["General", ["Visible", "Autowall", "Minimum", "Doubletap"],
			["Visible", "Autowall", "Mindmg", "Doubletap"]
		],
		"Galil AR": ["General", ["Visible", "Autowall", "Minimum", "Doubletap"],
			["Visible", "Autowall", "Mindmg", "Doubletap"]
		],
		"PP-Bizon": ["General", ["Visible", "Autowall", "Minimum", "Doubletap"],
			["Visible", "Autowall", "Mindmg", "Doubletap"]
		],
		"P90": ["General", ["Visible", "Autowall", "Minimum", "Doubletap"],
			["Visible", "Autowall", "Mindmg", "Doubletap"]
		],
		"UMP-45": ["General", ["Visible", "Autowall", "Minimum", "Doubletap"],
			["Visible", "Autowall", "Mindmg", "Doubletap"]
		],
		"MP5-SD": ["General", ["Visible", "Autowall", "Minimum", "Doubletap"],
			["Visible", "Autowall", "Mindmg", "Doubletap"]
		],
		"MP7": ["General", ["Visible", "Autowall", "Minimum", "Doubletap"],
			["Visible", "Autowall", "Mindmg", "Doubletap"]
		],
		"MAC-10": ["General", ["Visible", "Autowall", "Minimum", "Doubletap"],
			["Visible", "Autowall", "Mindmg", "Doubletap"]
		],
		"MP9": ["General", ["Visible", "Autowall", "Minimum", "Doubletap"],
			["Visible", "Autowall", "Mindmg", "Doubletap"]
		],
		"Desert Eagle": ["Heavy pistol", ["Visible", "Autowall", "Minimum", "Doubletap"],
			["Visible", "Autowall", "Mindmg", "Doubletap"]
		],
		"R8 Revolver": ["Heavy pistol", ["Visible", "Autowall", "Minimum"],
			["Visible", "Autowall", "Mindmg"]
		],
		"Five-SeveN": ["Pistol", ["Visible", "Autowall", "Minimum", "Doubletap"],
			["Visible", "Autowall", "Mindmg", "Doubletap"]
		],
		"Tec-9": ["Pistol", ["Visible", "Autowall", "Minimum", "Doubletap"],
			["Visible", "Autowall", "Mindmg", "Doubletap"]
		],
		"CZ75-Auto": ["Pistol", ["Visible", "Autowall", "Minimum", "Doubletap"],
			["Visible", "Autowall", "Mindmg", "Doubletap"]
		],
		"P250": ["Pistol", ["Visible", "Autowall", "Minimum", "Doubletap"],
			["Visible", "Autowall", "Mindmg", "Doubletap"]
		],
		"Dual Berettas": ["Pistol", ["Visible", "Autowall", "Minimum", "Doubletap"],
			["Visible", "Autowall", "Mindmg", "Doubletap"]
		],
		"Glock-18": ["Pistol", ["Visible", "Autowall", "Minimum", "Doubletap"],
			["Visible", "Autowall", "Mindmg", "Doubletap"]
		],
		"P2000": ["Pistol", ["Visible", "Autowall", "Minimum", "Doubletap"],
			["Visible", "Autowall", "Mindmg", "Doubletap"]
		],
		"USP-S": ["Pistol", ["Visible", "Autowall", "Minimum", "Doubletap"],
			["Visible", "Autowall", "Mindmg", "Doubletap"]
		]
	};

	var jsLoadingSequence = 0;

	var jsLoadingCount = 0;

	var jsLoaded = false;

	var valve = false;

	var rageTarget = 0;

	const defaultConfig = {
		"Play Style": 2,
		"Premium Anti-Aim": true,
		"Dodge Bruteforce": 14,
		"Rage AA Settings": 0,
		"Disable On": 1,
		"On Shot Mode": 1,
		"Standing Ideal Yaw": true,
		"Standing LBY Mode": 0,
		"Standing Fake Mode": 1,
		"Standing Jitter Mode": 1,
		"Standing LBY": 80,
		"Standing LBY Step": 5,
		"Standing Fake": 30,
		"Standing Jitter": 7,
		"Moving Fake Mode": 0,
		"Moving Jitter Mode": 0,
		"Moving Fake": 60,
		"Moving Jitter": 0,
		"Air Mode": 1,
		"Slow Walk Mode": 0,
		"Slow Walk Delta": 0,
		"Slow Walk Fake": 35,
		"Slow Walk Jitter": 20,
		"Resolver Resolver":true,
		"Freestanding Mode": 1,
		"Peek Mode": 1,
		"Better Weapon Config": true,
		"Automatic Mindmg": true,
		"Weapon": 0,
		"Mode": 0,
		"Dynamic FOV": false,
		"Min FOV": 10,
		"Max FOV": 30,
		"Slow Walk": true,
		"Disable Fake Lag": false,
		"Slow Walk Mode": 1,
		"Min Speed": 10,
		"Max Speed": 70,
		"Rage Fake Lag": 2,
		"Semi-Rage Fake Lag": 5,
		"Clan Tag": 1,
		"Rage Bot Optimization": true,
		"Rage Bot Logging": true,
		"Auto Swap": true,
		"Auto Wall Fightback": true,
		"No Scope Distance": 300,
		"Safe Point Conditions": 0,
		"Body Conditions": 0,
		"Legit Auto Wall Penetration": 1,
		"Auto Wall Mode": 0,
		"Show Indicators": true,
		"Show Watermark": true,
		"Show Direction": true,
		"Show Status": true,
		"Top Bar": 1,
		"Show Hit and Miss": true,
		"Show Damage Given": true,
		"Show Death Mark": true,
		"Use Custom Scopeline": true,
		"Show Movement Trail": true,
		"Show Desync Size": true,
		"Show Weird Ass Ball": true,
		"Show Enemy Weapons": true,
		"Hide Automatically": true,
		"Show Bullet Tracer": true,
		"Bullet Tracer Thickness": 10,
		"Show Keybind States": 44,
		"Desync Indicator": 1,
		"Theme": 1,
		"Font": 0,
		"Sprite Color": [0, 0, 0, 200],
		"Desync Color": [0, 0, 0, 200],
		"Scope Color 1": [0, 0, 0, 200],
		"Scope Color 2": [0, 0, 0, 200],
		"Real Angle": [0, 0, 0, 200],
		"Fake Angle": [210, 210, 210, 200],
		"Bullet Tracer Color": [1, 165, 175, 200],
		"UI Color": [251, 34, 80, 255],
		"Fast Duck": true,
		"Reply Bot": false,
		"Bot In Spawn": true,
		"Rage Crash": false,
		"Chat Spam": false,
		"Logging (spams a lot)": false,
		"Load Default Config": false,
		"Reset Indicators": false,
		//DO NOT CHANGE THIS OTHERWISE YOU ARE GOING TO REGRET FOR IT

		//^lmfao
		"Performance Optimization": 16
	};
	
	function onMenuUpdate() {
		if (!jsLoaded) {
			while(!jsLoaded){
				initializeMenuItems();
			}
		} else {
			//Update the menu once every [int] ticks
			if (Globals.Tickcount() % getValue("Performance Optimization") != 0) return;
			//Load the default config if requested
			if (getValue("Load Default Config")) {
				loadDefaultConfig();
			}
			if (getValue("Reset Indicators")) {
				resetIndicators();
			}
			//Hide the unnecessary menu items
			optimizeMenuItems();
		}
	}

	function optimizeMenuItems() {
		if (!jsLoaded) {
			return;
		}
		if (getValue("Play Style") == 0) hideAllMenuItems();
		if (getValue("Play Style") == 1) {
			showSemiRageItems();
			showActiveItems(false);
		}
		if (getValue("Play Style") == 2) {
			showRageItems();
			showActiveItems(true);
		}
	}
	message = "test.js v1.1";

	function showActiveItems(rage) {
		if (rage) {
			if (getValue("Premium Anti-Aim")) {
				UI.SetValue("Anti-Aim", "Fake angles", "Enabled", false);
				setVisibility("Rage AA Settings", true);
				setVisibility("Legit AA On Key", true);
				setVisibility("Inverter", true);
				switch (getValue("Rage AA Settings")) {
					case 0:
						setVisibility("On Shot Mode", true);
						setVisibility("Disable On", true);
						setVisibility("Dodge Bruteforce", true);
						break;
					case 1:
						setVisibility("Standing Ideal Yaw", true);
						setVisibility("Standing LBY Mode", true);
						setVisibility("Standing Fake Mode", true);
						setVisibility("Standing Jitter Mode", true);
						if (getValue("Standing LBY Mode") != 2) {
							setVisibility("Standing LBY Step", true);
						}
						setVisibility("Standing LBY", true);
						setVisibility("Standing Jitter", true);
						setVisibility("Standing Fake", true);
						break;
					case 2:
						setVisibility("Moving Fake Mode", true);
						setVisibility("Moving Jitter Mode", true);
						setVisibility("Moving Jitter", true);
						setVisibility("Moving Fake", true);
						break;
					case 3:
						setVisibility("Air Mode", true);
						break;
					case 4:
						setVisibility("Slow Walk Mode", true);
						setVisibility("Slow Walk Delta", true);
						if (getValue("Slow Walk Delta") == 3) {
							setVisibility("Slow Walk Fake", true);
						}
						if (getValue("Slow Walk Mode") != 3) {
							setVisibility("Slow Walk Jitter", true);
						}
						setVisibility("Resolver Resolver", true);
						break;
					case 5:
						setVisibility("Freestanding Mode", true);
						if (getValue("Freestanding Mode") != 2) {
							setVisibility("Peek Mode", true);
						}
						break;
				}
			}
			setVisibility("Min FOV", false);
			setVisibility("Max FOV", false);
			setVisibility("Maximum FOV On Key", false);
		} else {
			if (getValue("Premium Anti-Aim")) {
				UI.SetValue("Anti-Aim", "Fake angles", "Enabled", false);
				setVisibility("Inverter", true);
				setVisibility("Legit AA Settings", true);
				switch (getValue("Legit AA Settings")) {
					case 0:
						setVisibility("On Shot Mode", true);
						setVisibility("Disable On", true);
						setVisibility("Dodge Bruteforce", true);
						break;
					case 1:
						setVisibility("Standing Legit LBY Mode", true);
						setVisibility("Standing Legit Fake Mode", true);
						setVisibility("Standing Minimum Distance", true);
						break;
					case 2:
						setVisibility("Moving Legit Fake Mode", true);
						setVisibility("Moving Inverter", true);
						setVisibility("Moving Minimum Distance", true);
						break;
					case 3:
						setVisibility("Crouching Legit LBY Mode", true);
						setVisibility("Crouching Legit Fake Mode", true);
						setVisibility("Crouching Minimum Distance", true);
						break;
					case 4:
						setVisibility("Slow Walk Legit Fake Mode", true);
						setVisibility("Slow Walk Inverter", true);
						setVisibility("Slow Walk Minimum Distance", true);
						break;
					case 5:
						setVisibility("Freestanding Mode", true);
						if (getValue("Freestanding Mode") != 2) {
							setVisibility("Peek Mode", true);
						}
						break;
				}

			}
			if (getValue("Dynamic FOV")) {
				setVisibility("Min FOV", true);
				setVisibility("Max FOV", true);
				setVisibility("Maximum FOV On Key", true);
			}
		}
		if (getValue("Rage Bot Optimization")) {
			setVisibility("Rage Bot Logging", true);
			setVisibility("Auto Swap", true);
			setVisibility("No Scope Distance", true);
			setVisibility("Body Conditions", true);
			setVisibility("Safe Point Conditions", true);
			if (getValue("Play Style") == 1) {
				setVisibility("Legit Auto Wall Penetration", true);
				setVisibility("Auto Wall Fightback", true);
				setVisibility("Auto Wall Mode", true);
				setVisibility("Auto Wall Switch", true);
			}
		}
		if (getValue("Slow Walk")) {
			setVisibility("Disable Fake Lag", true);
			setVisibility("Min Speed", true);
			setVisibility("Max Speed", true);
		}
		if (getValue("Show Indicators")) {
			setVisibility("Show Watermark", true);
			setVisibility("Show Direction", true);
			setVisibility("Show Status", true);
			setVisibility("Top Bar", true);
			setVisibility("Show Hit and Miss", true);
			setVisibility("Show Damage Given", true);
			setVisibility("Show Death Mark", true);
			setVisibility("Use Custom Scopeline", true);
			setVisibility("Show Desync Size", true);
			setVisibility("Show Weird Ass Ball",true);
			setVisibility("Show Movement Trail", true);
			setVisibility("Show Bullet Tracer", true);
			setVisibility("Show Ring Radar", true);
			if(getValue("Show Ring Radar")){
				setVisibility("Ring Radar Animation", true);
				setVisibility("Ring Radar Distance", true);
				setVisibility("Ring Radar Width", true);
				setVisibility("Ring Radar Gap", true);
				setVisibility("Ring Radar Length", true);
				setVisibility("Ring Radar Color", true);
			}
			setVisibility("Show Enemy Weapons", true);
			if (getValue("Show Enemy Weapons")) {
				setVisibility("Hide Automatically", true);
			}
			setVisibility("Show Keybind States", true);
			setVisibility("Desync Indicator", true);
			setVisibility("Font", true);
			if (getValue("Show Bullet Tracer")) {
				setVisibility("Bullet Tracer Thickness", true);
				setVisibility("Bullet Tracer Color", true);
			}
			if (getValue("Desync Indicator") != 0) {
				setVisibility("Real Angle", true);
				setVisibility("Fake Angle", true);
			}
			if(getValue("Show Weird Ass Ball")){
				setVisibility("Sprite Color", true);
			}
			if (getValue("Show Desync Size") != 0) {
				setVisibility("Desync Color", true);
			}
			if (getValue("Use Custom Scopeline") != 0) {
				setVisibility("Scope Color 1", true);
				setVisibility("Scope Color 2", true);
			}
			setVisibility("Color Correction Color", true);
			setVisibility("Peek Active Color", true);
			setVisibility("Peek Inactive Color", true);
			setVisibility("UI Color", true);
			setVisibility("Theme", true);
		}
		if (fakeLagMode != 0) {
			setVisibility("Maximum Fake Lag", true);
		}
		if (getValue("Better Weapon Config")) {
			setVisibility("Automatic Mindmg", true);
			setVisibility("Weapon", true);
			setVisibility("Mode", true);
			setVisibility("Minimum Damage", true);
			setVisibility("Minimum Accuracy", true);
			if (getString("Weapon") != "...") {
				if (getString("Mode") != "...") {
					if (weaponSettings[getString("Weapon")][1].indexOf(getString("Mode")) != -1) {
						mode = getString("Mode");
						if (mode == "Minimum") {
							mode = "Mindmg";
						}
						setVisibility(getString("Weapon") + " " + getString("Mode") + " Damage", true);
						setVisibility(getString("Weapon") + " " + getString("Mode") + " Hitchance", true);
						setVisibility(getString("Weapon") + " " + mode + " Hitboxes", true);
						setVisibility(getString("Weapon") + " " + mode + " Multipoint Hitboxes", true);
					}
				}
			}
		}
		if(getValue("Clan Tag")!=0){
			setVisibility("Show Clantag When KD >",true);
		}
	}

	function showRageItems() {
		showSemiRageItems();
		setVisibility("0x04", false);
		setVisibility("Dynamic FOV", false);
		setVisibility("Rage Removals", true);
		setVisibility("Semi-Rage Removals", false);
		setVisibility("Semi-Rage Fake Lag", false);
		setVisibility("Rage Fake Lag", true);
	}

	function showSemiRageItems() {
		setVisibility("0x02", true);
		setVisibility("0x03", true);
		setVisibility("0x04", true);
		setVisibility("0x05", true);
		setVisibility("0x06", true);
		setVisibility("0x07", true);
		setVisibility("0x08", true);
		setVisibility("0x09", true);
		setVisibility("0x0A", true);
		setVisibility("Semi-Rage Removals", true);
		setVisibility("Rage Removals", false);
		setVisibility("Premium Anti-Aim", true);
		setVisibility("Rage AA Settings", false);
		setVisibility("Dodge Bruteforce", false);
		setVisibility("On Shot Mode", false);
		setVisibility("Disable On", false);
		setVisibility("Legit AA Settings", false);
		setVisibility("Standing Legit LBY Mode", false);
		setVisibility("Standing Legit Fake Mode", false);
		setVisibility("Standing Minimum Distance", false);
		setVisibility("Moving Legit Fake Mode", false);
		setVisibility("Moving Inverter", false);
		setVisibility("Moving Minimum Distance", false);
		setVisibility("Crouching Legit LBY Mode", false);
		setVisibility("Crouching Legit Fake Mode", false);
		setVisibility("Crouching Minimum Distance", false);
		setVisibility("Slow Walk Legit Fake Mode", false);
		setVisibility("Slow Walk Inverter", false);
		setVisibility("Slow Walk Minimum Distance", false);
		setVisibility("Standing Ideal Yaw", false);
		setVisibility("Standing LBY Mode", false);
		setVisibility("Standing Fake Mode", false);
		setVisibility("Standing LBY", false);
		setVisibility("Standing LBY Step", false);
		setVisibility("Standing Jitter Mode", false);
		setVisibility("Standing Jitter", false);
		setVisibility("Standing Fake", false);
		setVisibility("Moving Fake Mode", false);
		setVisibility("Moving Jitter Mode", false);
		setVisibility("Moving Jitter", false);
		setVisibility("Moving Fake", false);
		setVisibility("Air Mode", false);
		setVisibility("Slow Walk Mode", false);
		setVisibility("Slow Walk Delta", false);
		setVisibility("Slow Walk Fake", false);
		setVisibility("Resolver Resolver", false);
		setVisibility("Slow Walk Jitter", false);
		setVisibility("Freestanding Mode", false);
		setVisibility("Peek Mode", false);
		setVisibility("Legit AA On Key", false);
		setVisibility("Inverter", false);
		setVisibility("Better Weapon Config", true);
		setVisibility("Automatic Mindmg", false);
		setVisibility("Weapon", false);
		setVisibility("Mode", false);
		Object.keys(weaponSettings)
			.forEach(function(key) {
				for (i = 0; i < weaponSettings[key][1].length; i++) {
					setVisibility(key + " " + weaponSettings[key][1][i] + " Damage", false);
					setVisibility(key + " " + weaponSettings[key][1][i] + " Hitchance", false);
				}
				for (i = 0; i < weaponSettings[key][2].length; i++) {
					setVisibility(key + " " + weaponSettings[key][2][i] + " Hitboxes", false);
					setVisibility(key + " " + weaponSettings[key][2][i] + " Multipoint Hitboxes", false);
				}
			});
		setVisibility("Minimum Damage", false);
		setVisibility("Minimum Accuracy", false);
		setVisibility("Dynamic FOV", true);
		setVisibility("Min FOV", false);
		setVisibility("Max FOV", false);
		setVisibility("Maximum FOV On Key", false);
		setVisibility("Slow Walk", true);
		setVisibility("Disable Fake Lag", false);
		setVisibility("Min Speed", false);
		setVisibility("Max Speed", false);
		setVisibility("Semi-Rage Fake Lag", true);
		setVisibility("Rage Fake Lag", false);
		setVisibility("Maximum Fake Lag", false);
		setVisibility("Clan Tag", true);
		setVisibility("Show Clantag When KD >",false);
		setVisibility("Rage Bot Optimization", true);
		setVisibility("Rage Bot Logging", false);
		setVisibility("Auto Swap", false);
		setVisibility("Auto Wall Fightback", false);
		setVisibility("No Scope Distance", false);
		setVisibility("Body Conditions", false);
		setVisibility("Safe Point Conditions", false);
		setVisibility("Legit Auto Wall Penetration", false);
		setVisibility("Auto Wall Mode", false);
		setVisibility("Auto Wall Switch", false);
		setVisibility("Show Indicators", true);
		setVisibility("Show Watermark", false);
		setVisibility("Show Direction", false);
		setVisibility("Show Status", false);
		setVisibility("Top Bar", false);
		setVisibility("Show Hit and Miss", false);
		setVisibility("Show Damage Given", false);
		setVisibility("Show Death Mark", false);
		setVisibility("Show Enemy Weapons", false);
		setVisibility("Hide Automatically", false);
		setVisibility("Show Bullet Tracer", false);
		setVisibility("Show Ring Radar", false);
		setVisibility("Ring Radar Animation", false);
		setVisibility("Ring Radar Distance", false);
		setVisibility("Ring Radar Width", false);
		setVisibility("Ring Radar Gap", false);
		setVisibility("Ring Radar Length", false);
		setVisibility("Bullet Tracer Thickness", false);
		setVisibility("Show Keybind States", false);
		setVisibility("Desync Indicator", false);
		setVisibility("Theme", false);
		setVisibility("Font", false);
		setVisibility("Real Angle", false);
		setVisibility("Fake Angle", false);
		setVisibility("Ring Radar Color", false);
		setVisibility("Color Correction Color", false);
		setVisibility("UI Color", false);
		setVisibility("Bullet Tracer Color", false);
		setVisibility("Fast Duck", true);
		setVisibility("Reply Bot", true);
		setVisibility("Bot In Spawn",true);
		setVisibility("Chat Spam", true);
		setVisibility("Logging (spams a lot)", true);
		setVisibility("Fake Duck", true);
		setVisibility("Better Auto Peek", true);
		setVisibility("Peek Return On Enemy Death", true);
		setVisibility("Peek Return After X Shots", true);
		setVisibility("Rage Crash", true);
	}

	function hideAllMenuItems() {
		setVisibility("0x02", false);
		setVisibility("0x03", false);
		setVisibility("0x04", false);
		setVisibility("0x05", false);
		setVisibility("0x06", false);
		setVisibility("0x07", false);
		setVisibility("0x08", false);
		setVisibility("0x09", false);
		setVisibility("0x0A", false);
		setVisibility("Semi-Rage Removals", false);
		setVisibility("Rage Removals", false);
		setVisibility("Premium Anti-Aim", false);
		setVisibility("Rage AA Settings", false);
		setVisibility("Dodge Bruteforce", false);
		setVisibility("On Shot Mode", false);
		setVisibility("Disable On", false);
		setVisibility("Legit AA Settings", false);
		setVisibility("Standing Legit LBY Mode", false);
		setVisibility("Standing Legit Fake Mode", false);
		setVisibility("Standing Minimum Distance", false);
		setVisibility("Crouching Legit LBY Mode", false);
		setVisibility("Crouching Legit Fake Mode", false);
		setVisibility("Crouching Minimum Distance", false);
		setVisibility("Slow Walk Legit Fake Mode", false);
		setVisibility("Slow Walk Inverter", false);
		setVisibility("Slow Walk Minimum Distance", false);
		setVisibility("Moving Legit Fake Mode", false);
		setVisibility("Moving Inverter", false);
		setVisibility("Moving Minimum Distance", false);
		setVisibility("Standing Ideal Yaw", false);
		setVisibility("Standing LBY Mode", false);
		setVisibility("Standing Fake Mode", false);
		setVisibility("Standing Jitter Mode", false);
		setVisibility("Standing LBY", false);
		setVisibility("Standing LBY Step", false);
		setVisibility("Standing Jitter", false);
		setVisibility("Standing Fake", false);
		setVisibility("Moving Fake Mode", false);
		setVisibility("Moving Jitter Mode", false);
		setVisibility("Moving Jitter", false);
		setVisibility("Moving Fake", false);
		setVisibility("Air Mode", false);
		setVisibility("Slow Walk Mode", false);
		setVisibility("Slow Walk Delta", false);
		setVisibility("Slow Walk Fake", false);
		setVisibility("Slow Walk Jitter", false);
		setVisibility("Resolver Resolver", false);
		setVisibility("Freestanding Mode", false);
		setVisibility("Peek Mode", false);
		setVisibility("Legit AA On Key", false);
		setVisibility("Inverter", false);
		setVisibility("Better Weapon Config", false);
		setVisibility("Automatic Mindmg", false);
		setVisibility("Weapon", false);
		setVisibility("Mode", false);
		Object.keys(weaponSettings)
			.forEach(function(key) {
				for (i = 0; i < weaponSettings[key][1].length; i++) {
					setVisibility(key + " " + weaponSettings[key][1][i] + " Damage", false);
					setVisibility(key + " " + weaponSettings[key][1][i] + " Hitchance", false);
				}
				for (i = 0; i < weaponSettings[key][2].length; i++) {
					setVisibility(key + " " + weaponSettings[key][2][i] + " Hitboxes", false);
					setVisibility(key + " " + weaponSettings[key][2][i] + " Multipoint Hitboxes", false);
				}
			});
		setVisibility("Minimum Damage", false);
		setVisibility("Minimum Accuracy", false);
		setVisibility("Dynamic FOV", false);
		setVisibility("Min FOV", false);
		setVisibility("Max FOV", false);
		setVisibility("Maximum FOV On Key", false);
		setVisibility("Slow Walk", false);
		setVisibility("Disable Fake Lag", false);
		setVisibility("Min Speed", false);
		setVisibility("Max Speed", false);
		setVisibility("Semi-Rage Fake Lag", false);
		setVisibility("Rage Fake Lag", false);
		setVisibility("Maximum Fake Lag", false);
		setVisibility("Clan Tag", false);
		setVisibility("Show Clantag When KD >",false);
		setVisibility("Rage Bot Optimization", false);
		setVisibility("Rage Bot Logging", false);
		setVisibility("Legit Auto Wall Penetration", false);
		setVisibility("Auto Swap", false);
		setVisibility("Auto Wall Fightback", false);
		setVisibility("No Scope Distance", false);
		setVisibility("Body Conditions", false);
		setVisibility("Safe Point Conditions", false);
		setVisibility("Auto Wall Mode", false);
		setVisibility("Auto Wall Switch", false);
		setVisibility("Show Indicators", false);
		setVisibility("Show Watermark", false);
		setVisibility("Show Direction", false);
		setVisibility("Show Status", false);
		setVisibility("Top Bar", false);
		setVisibility("Show Hit and Miss", false);
		setVisibility("Show Damage Given", false);
		setVisibility("Show Death Mark", false);
		setVisibility("Use Custom Scopeline", false);
		setVisibility("Show Desync Size", false);
		setVisibility("Show Weird Ass Ball", false);
		setVisibility("Show Movement Trail", false);
		setVisibility("Show Ring Radar", false);
		setVisibility("Ring Radar Animation", false);
		setVisibility("Ring Radar Distance", false);
		setVisibility("Ring Radar Width", false);
		setVisibility("Ring Radar Gap", false);
		setVisibility("Ring Radar Length", false);
		setVisibility("Show Enemy Weapons", false);
		setVisibility("Hide Automatically", false);
		setVisibility("Show Bullet Tracer", false);
		setVisibility("Bullet Tracer Thickness", false);
		setVisibility("Show Keybind States", false);
		setVisibility("Desync Indicator", false);
		setVisibility("Theme", false);
		setVisibility("Font", false);
		setVisibility("Scope Color 1", false);
		setVisibility("Scope Color 2", false);
		setVisibility("Peek Active Color", false);
		setVisibility("Peek Inactive Color", false);
		setVisibility("Desync Color", false);
		setVisibility("Sprite Color", false);
		setVisibility("Real Angle", false);
		setVisibility("Fake Angle", false);
		setVisibility("Ring Radar Color", false);
		setVisibility("Color Correction Color", false);
		setVisibility("UI Color", false);
		setVisibility("Bullet Tracer Color", false);
		setVisibility("Fast Duck", false);
		setVisibility("Reply Bot", false);
		setVisibility("Bot In Spawn",false);
		setVisibility("Chat Spam", false);
		setVisibility("Logging (spams a lot)", false);
		setVisibility("Fake Duck", false);
		setVisibility("Better Auto Peek", false);
		setVisibility("Peek Return On Enemy Death", false);
		setVisibility("Peek Return After X Shots", false);
		setVisibility("Rage Crash", false);
	}

	function initializeMenuItems() {
		if(jsLoaded){return;}
		if (jsLoadingSequence == 0) {
			Cheat.PrintColor([255, 0, 0, 255], "[dhdj] Loading Anti-Aim\n");
			UI.AddSliderInt("Welcome, " + Cheat.GetUsername(), 0, 0);
			UI.AddLabel("You have enabled test.js.");
			UI.AddLabel("test.js is based on dhdj.js 1.6");
			UI.AddLabel("Version: 1.1");
			UI.AddSliderInt("Loading", 0, Object.keys(weaponSettings)
				.length - 1);
			UI.AddSliderInt("0x01", 0, 0);
			UI.AddDropdown("Play Style", ["Why would I cheat", "Semi-Rage", "Rage"]);
			UI.AddMultiDropdown("Semi-Rage Removals", ["Smoke", "Flash", "Scope", "Visual kick", "Visual punch", "Scope time", "Landing bob", "Fire"]);
			UI.AddMultiDropdown("Rage Removals", ["Smoke", "Flash", "Scope", "Visual kick", "Visual punch", "Scope time", "Landing bob", "Fire"]);
			UI.AddSliderInt("0x02", 0, 0);
			UI.AddCheckbox("Premium Anti-Aim");
			UI.AddDropdown("Rage AA Settings", ["General", "Standing", "Moving", "Jumping", "Slow-walking", "Freestanding"]);
			UI.AddDropdown("Legit AA Settings", ["General", "Standing", "Moving", "Crouching", "Slow-walking", "Freestanding"]);
			UI.AddDropdown("On Shot Mode", ["Disabled", "Opposite"]);
			UI.AddMultiDropdown("Dodge Bruteforce", ["Standing", "Moving", "Jumping", "Slow-walking"]);
			UI.AddMultiDropdown("Disable On", ["Round End", "Enemy Invisible", "Luck"]);

			UI.AddDropdown("Standing Legit LBY Mode", ["LR Sway", "LS Sway", "Static"]);
			UI.AddDropdown("Standing Legit Fake Mode", ["Random", "Static"]);
			UI.AddSliderInt("Standing Minimum Distance", 0, 60);

			UI.AddDropdown("Moving Legit Fake Mode", ["Static", "LR Jitter", "LS Jitter", "LR Sway"]);
			UI.AddDropdown("Moving Inverter", ["Disabled", "Enabled"]);
			UI.AddSliderInt("Moving Minimum Distance", 0, 30);

			UI.AddDropdown("Crouching Legit LBY Mode", ["LR Sway", "LS Sway", "Static"]);
			UI.AddDropdown("Crouching Legit Fake Mode", ["Random", "Static"]);
			UI.AddSliderInt("Crouching Minimum Distance", 0, 60);

			UI.AddDropdown("Slow Walk Legit Fake Mode", ["Static", "LR Jitter", "LS Jitter", "LR Sway"]);
			UI.AddDropdown("Slow Walk Inverter", ["Disabled", "Enabled"]);
			UI.AddSliderInt("Slow Walk Minimum Distance", 0, 60);

			UI.AddCheckbox("Standing Ideal Yaw");
			UI.AddDropdown("Standing LBY Mode", ["LR Sway", "LS Sway", "Static"]);
			UI.AddDropdown("Standing Fake Mode", ["Normal", "Opposite"]);
			UI.AddDropdown("Standing Jitter Mode", ["Static", "Random"]);
			UI.AddSliderInt("Standing LBY", 0, 90);
			UI.AddSliderInt("Standing LBY Step", 1, 10);
			UI.AddSliderInt("Standing Fake", 0, 60);
			UI.AddSliderInt("Standing Jitter", 0, 60);
			UI.AddDropdown("Moving Fake Mode", ["Static", "Jitter"]);
			UI.AddDropdown("Moving Jitter Mode", ["Static", "Random"]);
			UI.AddSliderInt("Moving Fake", 0, 60);
			UI.AddSliderInt("Moving Jitter", 0, 60);
			UI.AddDropdown("Air Mode", ["Spin", "Sway", "Static"]);
			UI.AddDropdown("Slow Walk Mode", ["Reversed Jitter", "Random Jitter", "Static Jitter", "Static"]);
			UI.AddDropdown("Slow Walk Delta", ["Ideal", "Large", "Small", "Custom"]);
			UI.AddSliderInt("Slow Walk Fake", 0, 60);
			UI.AddSliderInt("Slow Walk Jitter", 0, 60);
			UI.AddCheckbox("Resolver Resolver");
			UI.AddDropdown("Freestanding Mode", ["Real", "Fake", "Disabled"]);
			UI.AddDropdown("Peek Mode", ["Normal", "Opposite"]);
			UI.AddHotkey("Inverter");
			UI.AddHotkey("Legit AA On Key");
			UI.AddSliderInt("0x03", 0, 0);
			UI.AddCheckbox("Better Weapon Config");
			UI.AddCheckbox("Automatic Mindmg");
			UI.AddDropdown("Weapon", Object.keys(weaponSettings));
			UI.AddDropdown("Mode", ["Visible", "Autowall", "Minimum", "Doubletap"]);
			setVisibility("0x01", false);
			setVisibility("0x02", false);
			setVisibility("0x03", false);
			setVisibility("Play Style", false);
			setVisibility("Semi-Rage Removals", false);
			setVisibility("Rage Removals", false);
			setVisibility("Premium Anti-Aim", false);
			setVisibility("Rage AA Settings", false);
			setVisibility("Dodge Bruteforce", false);
			setVisibility("On Shot Mode", false);
			setVisibility("Disable On", false);
			setVisibility("Legit AA Settings", false);
			setVisibility("Standing Legit LBY Mode", false);
			setVisibility("Standing Legit Fake Mode", false);
			setVisibility("Standing Minimum Distance", false);
			setVisibility("Crouching Legit LBY Mode", false);
			setVisibility("Crouching Legit Fake Mode", false);
			setVisibility("Crouching Minimum Distance", false);
			setVisibility("Slow Walk Legit Fake Mode", false);
			setVisibility("Slow Walk Inverter", false);
			setVisibility("Slow Walk Minimum Distance", false);
			setVisibility("Moving Legit Fake Mode", false);
			setVisibility("Moving Inverter", false);
			setVisibility("Moving Minimum Distance", false);
			setVisibility("Standing Ideal Yaw", false);
			setVisibility("Standing LBY Mode", false);
			setVisibility("Standing Fake Mode", false);
			setVisibility("Standing Jitter Mode", false);
			setVisibility("Standing LBY", false);
			setVisibility("Standing LBY Step", false);
			setVisibility("Standing Jitter", false);
			setVisibility("Standing Fake", false);
			setVisibility("Moving Fake Mode", false);
			setVisibility("Moving Jitter Mode", false);
			setVisibility("Moving Jitter", false);
			setVisibility("Moving Fake", false);
			setVisibility("Air Mode", false);
			setVisibility("Slow Walk Mode", false);
			setVisibility("Slow Walk Delta", false);
			setVisibility("Slow Walk Fake", false);
			setVisibility("Slow Walk Jitter", false);
			setVisibility("Resolver Resolver", false);
			setVisibility("Freestanding Mode", false);
			setVisibility("Peek Mode", false);
			setVisibility("Legit AA On Key", false);
			setVisibility("Inverter", false);
			setVisibility("Better Weapon Config", false);
			setVisibility("Automatic Mindmg", false);
			setVisibility("Weapon", false);
			setVisibility("Mode", false);
		}
		key = Object.keys(weaponSettings)[jsLoadingSequence]
		for (i = 0; i < weaponSettings[key][2].length; i++) {
			UI.AddMultiDropdown(key + " " + weaponSettings[key][2][i] + " Hitboxes", ["Head", "Upper chest", "Chest", "Lower chest", "Stomach", "Pelvis", "Legs", "Feet"]);
			setVisibility(key + " " + weaponSettings[key][2][i] + " Hitboxes", false);
		}
		for (i = 0; i < weaponSettings[key][2].length; i++) {
			UI.AddMultiDropdown(key + " " + weaponSettings[key][2][i] + " Multipoint Hitboxes", ["Head", "Upper chest", "Chest", "Lower chest", "Stomach", "Pelvis", "Legs", "Feet"]);
			setVisibility(key + " " + weaponSettings[key][2][i] + " Multipoint Hitboxes", false);
		}
		for (i = 0; i < weaponSettings[key][1].length; i++) {
			UI.AddSliderInt(key + " " + weaponSettings[key][1][i] + " Damage", 0, 130);
			setVisibility(key + " " + weaponSettings[key][1][i] + " Damage", false);
		}
		for (i = 0; i < weaponSettings[key][1].length; i++) {
			UI.AddSliderInt(key + " " + weaponSettings[key][1][i] + " Hitchance", 0, 100);
			setVisibility(key + " " + weaponSettings[key][1][i] + " Hitchance", false);
		}
		setValue("Loading", jsLoadingSequence);
		Cheat.PrintColor([getRandomInteger(0, 255), getRandomInteger(0, 255), getRandomInteger(0, 255), 255], "[dhdj] Loading Weapon " + Object.keys(weaponSettings)[jsLoadingSequence] + "\n");
		if (jsLoadingSequence == Object.keys(weaponSettings)
			.length - 1) {
			Cheat.PrintColor([255, 0, 0, 255], "[dhdj] Loading User Interface\n\n\n\n\n");
			setVisibility("0x01", true);
			setVisibility("Play Style", true);
			setVisibility("Loading", false);
			UI.AddHotkey("Minimum Damage");
			UI.AddHotkey("Minimum Accuracy");
			UI.AddSliderInt("0x04", 0, 0);
			UI.AddCheckbox("Dynamic FOV");
			UI.AddSliderInt("Min FOV", 0, 180);
			UI.AddSliderInt("Max FOV", 0, 180);
			UI.AddHotkey("Maximum FOV On Key");
			UI.AddSliderInt("0x05", 0, 0);
			UI.AddCheckbox("Slow Walk");
			UI.AddCheckbox("Disable Fake Lag");
			UI.AddSliderInt("Min Speed", 0, 100);
			UI.AddSliderInt("Max Speed", 0, 100);
			UI.AddSliderInt("0x06", 0, 0);
			UI.AddDropdown("Semi-Rage Fake Lag", ["Disabled", "HVH", "Match-Making", "Maximum", "Velocity", "Legit"]);
			UI.AddDropdown("Rage Fake Lag", ["Disabled", "HVH", "Match-Making", "Maximum", "Velocity", "Legit"]);
			UI.AddHotkey("Maximum Fake Lag");
			UI.AddSliderInt("0x07", 0, 0);
			UI.AddDropdown("Clan Tag", ["Disabled", "dhdj", "Random Chinese Characters", "Random Integers", "FPS", "Latency", "Weapon", "Health"]);
			UI.AddSliderFloat("Show Clantag When KD >", 0, 5);
			UI.AddSliderInt("0x08", 0, 0);
			UI.AddCheckbox("Rage Bot Optimization");
			UI.AddCheckbox("Rage Bot Logging");
			UI.AddCheckbox("Auto Swap");
			UI.AddCheckbox("Auto Wall Fightback");
			UI.AddSliderInt("No Scope Distance", 0, 2048);
			UI.AddMultiDropdown("Body Conditions", ["Slow Walk", "Low Health", "Luck"]);
			UI.AddMultiDropdown("Safe Point Conditions", ["Bunnyhopping", "Luck"]);
			UI.AddDropdown("Legit Auto Wall Penetration", ["Defensive", "Aggresive"]);
			UI.AddDropdown("Auto Wall Mode", ["Disabled", "Legit", "Rage"]);
			UI.AddHotkey("Auto Wall Switch");
			UI.AddSliderInt("0x09", 0, 0);
			UI.AddCheckbox("Show Indicators");
			UI.AddCheckbox("Show Watermark");
			UI.AddCheckbox("Show Direction");
			UI.AddCheckbox("Show Status");
			UI.AddCheckbox("Show Hit and Miss");
			UI.AddCheckbox("Show Damage Given");
			UI.AddCheckbox("Show Death Mark");
			UI.AddCheckbox("Use Custom Scopeline");
			UI.AddCheckbox("Show Desync Size");
			UI.AddCheckbox("Show Weird Ass Ball");
			UI.AddCheckbox("Show Movement Trail");
			UI.AddCheckbox("Show Ring Radar");
			UI.AddCheckbox("Ring Radar Animation");
			UI.AddSliderInt("Ring Radar Distance", 150, screen_size[1]);
			UI.AddSliderInt("Ring Radar Width", 5, 50);
			UI.AddSliderInt("Ring Radar Gap", 0, 50);
			UI.AddSliderInt("Ring Radar Length", 5, 180);
			UI.AddCheckbox("Show Enemy Weapons");
			UI.AddCheckbox("Hide Automatically");
			UI.AddCheckbox("Show Bullet Tracer");
			UI.AddSliderInt("Bullet Tracer Thickness", 2, 50);
			UI.AddDropdown("Top Bar", ["Disabled", "Gradient", "Reversed Gradient", "Blue & Red Pulse"]);
			UI.AddMultiDropdown("Show Keybind States", ["Inverter", "Legit AA On Key", "Damage Modes", "Accuracy Modes", "Maximum FOV On Key", "Maximum Fake Lag", " Slow Walk", "Auto Wall", "Fake Duck", "Hide Shots", "Double Tap"]);
			UI.AddDropdown("Desync Indicator", ["Disabled", "Equilateral Triangle", "Circular", "Right Triangle", "Smaller Triangle","Half-Filled"]);
			UI.AddDropdown("Theme", ["Blanco", "Arco Iris", "Negro"]);
			UI.AddDropdown("Font", ["Bold", "Normal", "Comic Sans", "Times New Roman"]);
			UI.AddColorPicker("Scope Color 1");
			UI.AddColorPicker("Scope Color 2");
			UI.AddColorPicker("Peek Active Color");
			UI.AddColorPicker("Peek Inactive Color");
			UI.AddColorPicker("Desync Color");
			UI.AddColorPicker("Sprite Color");
			UI.AddColorPicker("Real Angle");
			UI.AddColorPicker("Fake Angle");
			UI.AddColorPicker("Bullet Tracer Color");
			UI.AddColorPicker("Ring Radar Color");
			UI.AddColorPicker("Color Correction Color");
			UI.AddColorPicker("UI Color");
			UI.AddSliderInt("0x0A", 0, 0);
			UI.AddCheckbox("Fast Duck");
			UI.AddCheckbox("Reply Bot");
			UI.AddCheckbox("Bot In Spawn");
			UI.AddCheckbox("Chat Spam");
			UI.AddCheckbox("Rage Crash");
			UI.AddCheckbox("Logging (spams a lot)");
			UI.AddHotkey("Fake Duck");
			UI.AddHotkey("Better Auto Peek");
			UI.AddCheckbox("Peek Return On Enemy Death");
			UI.AddSliderInt("Peek Return After X Shots", 1, 10);
			UI.AddSliderInt("0x0B", 0, 0);
			UI.AddCheckbox("Reset Indicators");
			UI.AddCheckbox("Load Default Config");
			UI.AddSliderInt("Performance Optimization", 1, 128);
			UI.AddLabel("PUT 16 IF YOU DON'T UNDERSTAND");
			UI.AddSliderInt("0x0C", 0, 0);
			UI.AddSliderInt("x1", 0, screen_x);
			UI.AddSliderInt("y1", 0, screen_y);
			UI.AddSliderInt("x2", 0, screen_x);
			UI.AddSliderInt("y2", 0, screen_y);
			UI.AddSliderInt("x3", 0, screen_x);
			UI.AddSliderInt("y3", 0, screen_y);
			UI.AddSliderInt("x5", 0, screen_x);
			UI.AddSliderInt("y5", 0, screen_y);
			UI.AddSliderInt("x6", 0, screen_x);
			UI.AddSliderInt("y6", 0, screen_y);
			setVisibility("x1", false);
			setVisibility("y1", false);
			setVisibility("x2", false);
			setVisibility("y2", false);
			setVisibility("x3", false);
			setVisibility("y3", false);
			setVisibility("x5", false);
			setVisibility("y5", false);
			setVisibility("x6", false);
			setVisibility("y6", false);
			setValue("x1", (getValue("x1") == 0) ? screen_x - 320 : getValue("x1"));
			setValue("y1", (getValue("y1") == 0) ? Math.ceil(screen_y * 0.01) : getValue("y1"));
			setValue("x2", (getValue("x2") == 0) ? screen_x - 320 : getValue("x2"));
			setValue("y2", (getValue("y2") == 0) ? Math.ceil(screen_y * 0.37) : getValue("y2"));
			setValue("x3", (getValue("x3") == 0) ? Math.ceil(screen_x * 0.01) : getValue("x3"));
			setValue("y3", (getValue("y3") == 0) ? Math.ceil(screen_y * 0.47) : getValue("y3"));
			setValue("x5", (getValue("x5") == 0) ? Math.ceil(screen_x * 0.01) : getValue("x5"));
			setValue("y5", (getValue("y5") == 0) ? Math.ceil(screen_y * 0.60) : getValue("y5"));
			setValue("x6", (getValue("x6") == 0) ? screen_x - 275 : getValue("x6"));
			setValue("y6", (getValue("y6") == 0) ? Math.ceil(screen_y * 0.20) : getValue("y6"));
			if (getValue("Semi-Rage Removals") == 0 && UI.GetValue("Visual", "WORLD", "Entities", "Removals") != 0) {
				setValue("Semi-Rage Removals", UI.GetValue("Visual", "WORLD", "Entities", "Removals"));
			}
			if (getValue("Rage Removals") == 0 && UI.GetValue("Visual", "WORLD", "Entities", "Removals") != 0) {
				setValue("Rage Removals", UI.GetValue("Visual", "WORLD", "Entities", "Removals"));
			}
			UI.SetValue("Misc", "PERFORMANCE & INFORMATION", "Information", "Restrictions", 0);
			message = message.split("");
			for (i = 0; i < message.length; i++) {
				Cheat.PrintColor([getRandomInteger(0, 255), getRandomInteger(0, 255), getRandomInteger(0, 255), 255], message[i]);
			}
			Cheat.Print("\n");
			jsLoaded = true;
		} else {
			jsLoadingSequence++;
		}
	}

	function loadDefaultConfig() {
		Object.keys(defaultConfig)
			.forEach(function(key) {
				setValue(key, defaultConfig[key]);
			});
		setColor("Desync Color", defaultConfig["Desync Color"]);
		setColor("Bullet Tracer Color", defaultConfig["Bullet Tracer Color"]);
		setColor("UI Color", defaultConfig["UI Color"]);
		setColor("Fake Angle", defaultConfig["Fake Angle"]);
		setColor("Real Angle", defaultConfig["Real Angle"]);
	}

	function resetIndicators() {
		setValue("Reset Indicators", false);
		setValue("x1", screen_x - 320);
		setValue("y1", Math.ceil(screen_y * 0.01));
		setValue("x2", screen_x - 320);
		setValue("y2", Math.ceil(screen_y * 0.37));
		setValue("x3", Math.ceil(screen_x * 0.01));
		setValue("y3", Math.ceil(screen_y * 0.47));
		setValue("x5", Math.ceil(screen_x * 0.01));
		setValue("y5", Math.ceil(screen_y * 0.60));
		setValue("x6", screen_x - 275);
		setValue("y6", Math.ceil(screen_y * 0.20));
	}

	function setVisibility(key, visible) {
		UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", key, visible);
	}

	function getHotkey(key) {
		return UI.IsHotkeyActive("Misc", "JAVASCRIPT", "Script items", key);
	}

	function toggleHotkey(key) {
		UI.ToggleHotkey("Misc", "JAVASCRIPT", "Script items", key);
	}

	function getValue(key) {
		return UI.GetValue("Misc", "JAVASCRIPT", "Script items", key);
		//CANCER
		
	}

	function setValue(key, value) {
		UI.SetValue("Misc", "JAVASCRIPT", "Script items", key, value);
	}

	function setColor(key, value) {
		UI.SetColor("Misc", "JAVASCRIPT", "Script items", key, value);
	}

	function getColor(key) {
		return UI.GetColor("Misc", "JAVASCRIPT", "Script items", key);
	}

	function getString(key) {
		return UI.GetString("Misc", "JAVASCRIPT", "Script items", key);
	}

	Cheat.RegisterCallback("Draw", "onMenuUpdate");
	//@Menu End
	//@Main Start
	var logging = false;
	var frameCount = 0;
	var frameLimit = 60;
	var localPlayer=Entity.GetLocalPlayer();
	var velocity=0;
	var spriteVisible=true;
	
	function onCreateMove() {
		if (!jsLoaded) return;
		localPlayer=Entity.GetLocalPlayer();
		velocity = getVelocity(localPlayer);
		var angles = Local_GetViewAngles();
		angles[0] = angles[0] * -1;
		if (angles[1] > 0) {
			angles[1] = angles[1] - 180;
		} else {
			angles[1] = 180 + angles[1];
		}
		back = getWallDistance(localPlayer, angles);
		if(UI.IsHotkeyActive("Visual","WORLD","View","Thirdperson")){
			spriteVisible = Trace_Line(0,Local_GetCameraPosition(), sprite_data[0][0])[1];
		}else{
			spriteVisible = Trace_Line(localPlayer,Local_GetCameraPosition(), sprite_data[0][0])[1];
		}
		spriteVisible = (spriteVisible==0 || spriteVisible==1)?true:false;
		autoPeekUpdate();
		calcMovementTrail();
		othersUpdate();
		antiAimUpdate();
		if (getValue("Play Style") != 0 && getValue("Better Weapon Config")) weaponConfigUpdate();
		if (getValue("Play Style") != 0 && getValue("Rage Bot Optimization")) rageBotOptimizationUpdate();
		if (getValue("Play Style") != 0 && getValue("Slow Walk")) slowWalkUpdate();
		//if (getValue("Play Style") != 0 && getValue("Fast Duck")) fastDuckUpdate();
		if (getValue("Play Style") != 0 && (("Rage Fake Lag") != 0 || getValue("Semi-Rage Fake Lag") != 0)) fakeLagUpdate();
		if (onShotFire > 0) {
			onShotFire--;
		}
	}
	
	function autoPeekUpdate(){
		if (Input.IsKeyPressed(0x01)) {
			var weapon = Entity_GetProp(localPlayer, "CBasePlayer", "m_hActiveWeapon");
			if (weapon == "m_hActiveWeapon") {
				weapon = 0;
			} else {
				weapon = (Entity_GetProp(weapon, "CBaseAttributableItem", "m_iItemDefinitionIndex") & 0xFFFF);
			}
			var nades = [43, 44, 45, 46, 47, 48];
			if (nades.indexOf(weapon) == -1) {
				peekReturn = true;
			}
		}
		var localRenderOrigin=Entity_GetRenderOrigin(localPlayer);
		if (getHotkey("Better Auto Peek") && peekReturn) {
			var vecToPeek = [peekLocation[0] - localRenderOrigin[0], peekLocation[1] - localRenderOrigin[1], peekLocation[2] - localRenderOrigin[2]];
			var angle = Math.atan2(vecToPeek[1], vecToPeek[0]) * (180 / Math.PI);;
			var viewYaw = Local_GetViewAngles()[1] - 180;
			var realAngle = (adjustAngle(angle - viewYaw) + 90) * (Math.PI / 180);
			var distance = getDistance(localRenderOrigin, [peekLocation[0], peekLocation[1], localRenderOrigin[2]]);
			UserCMD.SetMovement([Math.cos(realAngle) * (distance < 20 ? 50 + distance * 5 : 450), Math.sin(realAngle) * (distance < 20 ? 50 + distance * 5 : 450), 0]);
			//UI.SetValue("Rage", weaponSettings[currentWeapon][0].toUpperCase(), "Accuracy", "Auto stop", 0);
			if (distance < 0.5) {
				peekReturn = false;
			}
		} else {
			//UI.SetValue("Rage", weaponSettings[currentWeapon][0].toUpperCase(), "Accuracy", "Auto stop", 1);
			peekReturn = false;
		}
	}

	function onDraw() {
		if (!jsLoaded) return;
		dhdjTime+=Globals.Frametime();
		if (getFrameCount() >= frameLimit) {
			resetFrameCount();
		}
		if (getValue("Play Style") != 0 && getFrameCount() % frameLimit == 0 && getValue("Clan Tag") != 0) clanTagUpdate();
		if (getFrameCount() % frameLimit == 15 && getValue("Dynamic FOV")) {
			if (getValue("Play Style") == 1) {
				FOVUpdate();
			} else {
				setRageFOV(180);
			}
		}
		if (getValue("Play Style") != 0 && getFrameCount() % frameLimit == 30 && getValue("Chat Spam")) chatSpamUpdate();
		if (getValue("Play Style") != 0 && getFrameCount() % frameLimit == 45 && getValue("Logging (spams a lot)")) {
			logging = true;
		} else {
			logging = false;
		}
		if (getValue("Play Style") != 0 && getValue("Show Indicators")) {
			UIUpdate();
		}
		if (getValue("Play Style") != 0 && getFrameCount() % frameLimit == 55 && getValue("Premium Anti-Aim") && getValue("Resolver Resolver"))calcClosestEnemy();
		nextFrame();
	}

	function onUnload() {
		Object.keys(materials).forEach(function(key) {
			Material.Destroy(key);
		});
		AntiAim.SetOverride(0);
		jsLoaded = false;
	}

	function nextFrame() {
		frameCount++;
	}

	function resetFrameCount() {
		frameCount = 0;
	}

	function getFrameCount() {
		return frameCount;
	}

	function getRandomChineseWord() {
		var _rsl = "";
		var _randomUniCode = Math.floor(Math.random() * (40870 - 19968) + 19968)
			.toString(16);
		eval("_rsl=" + '"\\u' + _randomUniCode + '"');
		return _rsl;
	}

	function Print(msg) {
		if (logging) {
			Cheat.Print(msg + "\n");
		}
	}

	function PrintChat(msg) {
		if (logging) {
			Cheat.PrintChat(msg + "\n");
		}
	}

	function getRandomInteger(min, max) {
		return min + Math.ceil(Math.random() * (max - min));
	}

	Cheat.RegisterCallback("CreateMove", "onCreateMove");
	Cheat.RegisterCallback("Draw", "onDraw");
	Cheat.RegisterCallback("Unload", "onUnload");
	//@Main End
	//@Anti-Aim Start
	var aaDisabled = false;
	var enableAA = true;
	var aaMode = "Standing";
	var roundEnd = false;

	function antiAimUpdate() {
		target = Ragebot.GetTarget();
		if(!Entity.IsAlive(rageTarget)){rageTarget=0;}
		if (target != 0) {
			rageTarget = target;
		}
		if (getValue("Disable On") & (1 << 1) && !roundEnd) {
			shouldEnable = false;
			enemies = Entity.GetEnemies();
			for (i = 0; i < enemies.length; i++) {
				if (Entity.IsAlive(enemies[i]) && !Entity.IsDormant(enemies[i])) {
					shouldEnable = true;
				}
			}
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

		if (!getValue("Premium Anti-Aim") || !enableAA) {
			disableAA();
			return;
		}
		switch (getValue("Play Style")) {
			case 0:
				disableAA();
				break;
			case 1:
				setLegitAA();
				break;
			case 2:
				if (getHotkey("Legit AA On Key")) {
					setRealLegitAA();
				} else {
					setRageAA();
				}
				break;
		}
	}
	var legitFakeDirection = 0; //0:right 1:left
	var legitFakeAmount = -60;

	function setRealLegitAA(){
	AntiAim.SetOverride(1);
		aaDisabled = false;
		UI.SetValue("Anti-Aim", "Extra", "Pitch", 0);
		UI.SetValue("Anti-Aim", "Rage Anti-Aim", "At targets", false);
		UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Yaw offset", 180);
		UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Jitter offset", 0);
		UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Manual dir", false);
		if (getHotkey("Inverter")) {
			AntiAim.SetFakeOffset(0);
			AntiAim.SetRealOffset(60);
			AntiAim.SetLBYOffset(-90);
		} else {
			AntiAim.SetFakeOffset(0);
			AntiAim.SetRealOffset(-60);
			AntiAim.SetLBYOffset(90);
		}
	}
	
	function setLegitAA() {
		AntiAim.SetOverride(1);
		aaDisabled = false;
		UI.SetValue("Anti-Aim", "Extra", "Pitch", 0);
		UI.SetValue("Anti-Aim", "Rage Anti-Aim", "At targets", false);
		UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Yaw offset", 180);
		UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Jitter offset", 0);
		lbyOffset = 90;
		realOffset = 60;
		fakeOffset = 0;

		if (getVelocity(Entity.GetLocalPlayer()) < 1) {
			if (Entity.GetProp(Entity.GetLocalPlayer(), "CCSPlayer", "m_flDuckAmount") == 0) {
				aaMode = "Standing";
				switch (getValue("Standing Legit LBY Mode")) {
					case 0:
						if (lbyDirection == 1) {
							if (standingLBY <= 60) {
								standingLBY += 1;
							} else {
								lbyDirection = 0;
							}
						} else {
							if (standingLBY >= -60) {
								standingLBY -= 1;
							} else {
								lbyDirection = 1;
							}
						}
						lbyOffset = standingLBY;
						break;
					case 1:
						if (lbyDirection == 1) {
							if (standingLBY <= 60) {
								standingLBY += 1;
							} else {
								lbyDirection = 0;
								standingLBY -= 1 * 2;
							}
						} else {
							if (standingLBY >= 0) {
								standingLBY -= 1;
							} else {
								lbyDirection = 1;
								standingLBY += 1 * 2;
							}
						}
						lbyOffset = standingLBY;
						break;
					case 2:
						lbyOffset = 60;
						break;
				}
				switch (getValue("Standing Legit Fake Mode")) {
					case 0:
						if (getValue("Standing Legit LBY Mode") == 0) {
							realOffset = getRandomInteger(-60, 60);
							while (Math.abs(-lbyOffset - realOffset) < getValue("Standing Minimum Distance")) {
								realOffset = getRandomInteger(-60, 60);
							}
						} else {
							realOffset = getRandomInteger(-lbyOffset + getValue("Standing Minimum Distance"), 60);
						}
						break;
					case 1:
						realOffset = 60;
						break;
				}
				dodgeBruteforce(getValue("Dodge Bruteforce") & (1 << 0));
			} else {
				aaMode = "Crouching";
				switch (getValue("Crouching Legit LBY Mode")) {
					case 0:
						if (lbyDirection == 1) {
							if (standingLBY <= 60) {
								standingLBY += 1;
							} else {
								lbyDirection = 0;
							}
						} else {
							if (standingLBY >= -60) {
								standingLBY -= 1;
							} else {
								lbyDirection = 1;
							}
						}
						lbyOffset = standingLBY;
						break;
					case 1:
						if (lbyDirection == 1) {
							if (standingLBY <= 60) {
								standingLBY += 1;
							} else {
								lbyDirection = 0;
								standingLBY -= 1 * 2;
							}
						} else {
							if (standingLBY >= 0) {
								standingLBY -= 1;
							} else {
								lbyDirection = 1;
								standingLBY += 1 * 2;
							}
						}
						lbyOffset = standingLBY;
						break;
					case 2:
						lbyOffset = 60;
						break;
				}
				switch (getValue("Crouching Legit Fake Mode")) {
					case 0:
						if (getValue("Crouching Legit LBY Mode") == 0) {
							realOffset = getRandomInteger(-60, 60);
							while (Math.abs(-lbyOffset - realOffset) < getValue("Crouching Minimum Distance")) {
								realOffset = getRandomInteger(-60, 60);
							}
						} else {
							realOffset = getRandomInteger(-lbyOffset + getValue("Crouching Minimum Distance"), 60);
						}
						break;
					case 1:
						realOffset = 60;
						break;
				}
				dodgeBruteforce(false);
			}
		} else {
			if (UI.IsHotkeyActive("Anti-Aim", "Extra", "Slow walk")) {
				aaMode = "Slow-walking";
				switch (getValue("Slow Walk Legit Fake Mode")) {
					case 0:
						realOffset = 60;
						break;
					case 1:
						realOffset = getRandomInteger(-60, 60);
						break;
					case 2:
						realOffset = getRandomInteger(getValue("Slow Walk Minimum Distance"), 60);
						break;
					case 3:
						if (Math.abs(legitFakeAmount) < getValue("Slow Walk Minimum Distance")) {
							if (legitFakeAmount < 0) {
								legitFakeAmount = getValue("Slow Walk Minimum Distance") + 1;
							} else {
								legitFakeAmount = -getValue("Slow Walk Minimum Distance") - 1;
							}
						}
						if (legitFakeDirection == 0) {
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
				if (getValue("Slow Walk Inverter")) {
					if (getRandomInteger(0, 3) == 1) {
						toggleHotkey("Inverter");
					}
				}
				dodgeBruteforce(getValue("Dodge Bruteforce") & (1 << 3));
			} else {
				aaMode = "Moving";
				switch (getValue("Moving Legit Fake Mode")) {
					case 0:
						realOffset = 30;
						break;
					case 1:
						realOffset = getRandomInteger(-30, 30);
						break;
					case 2:
						realOffset = getRandomInteger(getValue("Moving Minimum Distance"), 30);
						break;
					case 3:
						if (Math.abs(legitFakeAmount) < getValue("Moving Minimum Distance")) {
							if (legitFakeAmount < 0) {
								legitFakeAmount = getValue("Moving Minimum Distance") + 1;
							} else {
								legitFakeAmount = -getValue("Moving Minimum Distance") - 1;
							}
						}
						if (legitFakeDirection == 0) {
							if (legitFakeAmount < 30) {
								legitFakeAmount += 6;
							} else {
								legitFakeDirection = 1;
								legitFakeAmount -= 6;
							}
						} else {
							if (legitFakeAmount > -30) {
								legitFakeAmount -= 6;
							} else {
								legitFakeDirection = 0;
								legitFakeAmount += 6;
							}
						}
						realOffset = legitFakeAmount;
						break;
				}
				if (getValue("Moving Inverter")) {
					if (getRandomInteger(0, 3) == 1) {
						toggleHotkey("Inverter");
					}
				}
				dodgeBruteforce(getValue("Dodge Bruteforce") & (1 << 1));
			}
		}


		if (getValue("Freestanding Mode") != 2) {
			angles = Local.GetViewAngles();
			right = getWallDistance(Entity.GetLocalPlayer(), [0, angles[1] + 60]);
			left = getWallDistance(Entity.GetLocalPlayer(), [0, angles[1] - 60]);
			front = getWallDistance(Entity.GetLocalPlayer(), [0, angles[1]]);
			diff = Math.abs(left - right);
			if (front < 40) {
				if (getValue("Freestanding Mode") == 0) {
					aaMode = "Freestanding Real";
					setInvert(left < right);
				} else if (getValue("Freestanding Mode") == 1) {
					aaMode = "Freestanding Fake";
					setInvert(right < left);
				}
				wasFreestanding = true;
			} else {
				if (wasFreestanding && getValue("Peek Mode") == 1 && Entity.GetProp(Entity.GetLocalPlayer(), "CCSPlayer", "m_flDuckAmount") == 0) {
					toggleHotkey("Inverter");
					wasFreestanding = false;
				}
			}
		}
		if (onShotFire > 0 && getValue("On Shot Mode") == 1) {
			fakeOffset *= -1;
			realOffset *= -1;
			lbyOffset *= -1;
		}
		if (getHotkey("Inverter")) {
			AntiAim.SetFakeOffset(fakeOffset);
			AntiAim.SetRealOffset(realOffset);
			AntiAim.SetLBYOffset(-lbyOffset);
		} else {
			AntiAim.SetFakeOffset(-fakeOffset);
			AntiAim.SetRealOffset(-realOffset);
			AntiAim.SetLBYOffset(lbyOffset);
		}
	}

	var standingLBY = 0;
	var lbyDirection = 0; //0 left 1 right
	var airYaw = -66;
	var fakeDirection = 0 //0 shrink 1 expand
	var slowWalkOffset = 0
	var wasFreestanding = false;
	var resolvers={};

	function setRageAA() {
		AntiAim.SetOverride(1);
		aaDisabled = false;
		UI.SetValue("Anti-Aim", "Extra", "Pitch", 1);
		UI.SetValue("Anti-Aim", "Rage Anti-Aim", "At targets", true);
		UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Yaw offset", 0);
		UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Manual dir", true);
		lbyOffset = 0;
		realOffset = 0;
		fakeOffset = 0;
		if (getVelocity(Entity.GetLocalPlayer()) < 1) {
			aaMode = "Standing";
			switch (getValue("Standing LBY Mode")) {
				case 0:
					if (lbyDirection == 1) {
						if (standingLBY <= getValue("Standing LBY")) {
							standingLBY += getValue("Standing LBY Step");
						} else {
							lbyDirection = 0;
						}
					} else {
						if (standingLBY >= -getValue("Standing LBY")) {
							standingLBY -= getValue("Standing LBY Step");
						} else {
							lbyDirection = 1;
						}
					}
					lbyOffset = standingLBY;
					break;
				case 1:
					if (lbyDirection == 1) {
						if (standingLBY <= getValue("Standing LBY")) {
							standingLBY += getValue("Standing LBY Step");
						} else {
							lbyDirection = 0;
							standingLBY -= getValue("Standing LBY Step") * 2;
						}
					} else {
						if (standingLBY >= 0) {
							standingLBY -= getValue("Standing LBY Step");
						} else {
							lbyDirection = 1;
							standingLBY += getValue("Standing LBY Step") * 2;
						}
					}
					lbyOffset = standingLBY;
					break;
				case 2:
					lbyOffset = getValue("Standing LBY");
					break;
			}
			switch (getValue("Standing Jitter Mode")) {
				case 0:
					UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Jitter offset", getValue("Standing Jitter"));
					break;
				case 1:
					UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Jitter offset", getRandomInteger(0, getValue("Standing Jitter")));
					break;
			}
			if (getValue("Standing LBY Mode") == 0) {
				switch (getValue("Standing Fake Mode")) {
					case 0:
						if (lbyOffset >= 0) {
							realOffset = -getValue("Standing Fake");
						} else {
							realOffset = +getValue("Standing Fake");
						}
						break;
					case 1:
						if (lbyOffset >= 0) {
							realOffset = +getValue("Standing Fake");
						} else {
							realOffset = -getValue("Standing Fake");
						}
						break;
				}
			} else {
				realOffset = +getValue("Standing Fake");
			}
			if (getValue("Standing Ideal Yaw")) {
				angles = Local.GetViewAngles();
				right = getWallDistance(Entity.GetLocalPlayer(), [0, angles[1] + 60]);
				left = getWallDistance(Entity.GetLocalPlayer(), [0, angles[1] - 60]);
				front = getWallDistance(Entity.GetLocalPlayer(), [0, angles[1]]);
				diff = Math.abs(left - right);
				if (diff > 30 && front < 40) {
					if (right > left) {
						UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Yaw offset", 30);
					} else {
						UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Yaw offset", -30);
					}
				}
			}
			if (getValue("Air Mode") == 1) {
				airYaw = -66;
			}
			dodgeBruteforce(getValue("Dodge Bruteforce") & (1 << 0));
		} else {
			if (getJump(Entity.GetLocalPlayer()) == 0) {
				if (UI.IsHotkeyActive("Anti-Aim", "Extra", "Slow walk")) {
					aaMode = "Slow-walking";
					baseFake = 0;
					switch (getValue("Slow Walk Delta")) {
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
							baseFake = getValue("Slow Walk Fake");
							break;
					}
					switch (getValue("Slow Walk Mode")) {
						case 0:
							//lbyOffset=90;
							slowWalkStep=(getValue("Slow Walk Jitter")>5)?5:1;
							slowWalkStep=(getValue("Slow Walk Jitter")>12)?6:slowWalkStep;
							if (fakeDirection == 1) {
								if (slowWalkOffset <= getValue("Slow Walk Jitter")) {
									slowWalkOffset += slowWalkStep;
								} else {
									slowWalkOffset -= slowWalkStep;
									fakeDirection = 0;
								}
							} else {
								if (slowWalkOffset >= 0) {
									slowWalkOffset -= slowWalkStep;
								} else {
									slowWalkOffset += slowWalkStep;
									fakeDirection = 1;
								}
							}
							realOffset = baseFake - slowWalkOffset;
							if (getHotkey("Inverter")) {
								slowYaw = Math.ceil(realOffset / 2);
							} else {
								slowYaw = -Math.ceil(realOffset / 2);
							}
							//slowYaw=0;
							UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Yaw offset", slowYaw);
							UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Jitter offset", 0);
							break;
						case 1:
							realOffset = baseFake;
							UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Yaw offset", 0);
							UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Jitter offset", getRandomInteger(0, getValue("Slow Walk Jitter")));
							break;
						case 2:
							realOffset = baseFake;
							UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Yaw offset", 0);
							UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Jitter offset", getValue("Slow Walk Jitter"));
							break;
						case 3:
							realOffset = baseFake;
							UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Yaw offset", 0);
							UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Jitter offset", 0);
							break;
					}



					if(getValue("Resolver Resolver") && closestEnemyChanged){
						if(resolvers[closestEnemy]==undefined){
							resolvers[closestEnemy]=true;
						}
						setInvert(resolvers[closestEnemy]);
						closestEnemyChanged=false;
					}
					dodgeBruteforce(getValue("Dodge Bruteforce") & (1 << 3));
				} else {
					aaMode = "Moving";
					switch (getValue("Moving Fake Mode")) {
						case 0:
							realOffset = getValue("Moving Fake");
							break;
						case 1:
							realOffset = getRandomInteger(0, getValue("Moving Fake"));
							break;
					}
					switch (getValue("Moving Jitter Mode")) {
						case 0:
							UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Jitter offset", getValue("Moving Jitter"));
							break;
						case 1:
							UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Jitter offset", getRandomInteger(0, getValue("Moving Jitter")));
							break;
					}
					UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Yaw offset", 0);
					if (getValue("Air Mode") == 1) {
						airYaw = -66;
					}
					dodgeBruteforce(getValue("Dodge Bruteforce") & (1 << 1));
				}
			} else {
				aaMode = "Jumping";
				realOffset = 60;
				lbyOffset = 90;
				UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Jitter offset", 0);
				if (getValue("Air Mode") == 1) {
					if (airYaw < 66) {
						airYaw += 3;
					}
					UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Yaw offset", airYaw);
				} else if (getValue("Air Mode") == 0) {
					airYaw += 10;
					if (airYaw > 180) {
						airYaw = -180;
					}
					UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Yaw offset", airYaw);
				} else {
					UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Yaw offset", 0);
				}
				dodgeBruteforce(getValue("Dodge Bruteforce") & (1 << 2));
			}
		}
		if (getValue("Freestanding Mode") != 2 && !(getValue("Resolver Resolver") && UI.IsHotkeyActive("Anti-Aim", "Extra", "Slow walk"))) {
			angles = Local.GetViewAngles();
			right = getWallDistance(Entity.GetLocalPlayer(), [0, angles[1] + 60]);
			left = getWallDistance(Entity.GetLocalPlayer(), [0, angles[1] - 60]);
			front = getWallDistance(Entity.GetLocalPlayer(), [0, angles[1]]);
			diff = Math.abs(left - right);
			if (front < 40) {
				if (getValue("Freestanding Mode") == 0) {
					aaMode = "Freestanding Real";
					setInvert(left < right);
				} else if (getValue("Freestanding Mode") == 1) {
					aaMode = "Freestanding Fake";
					setInvert(right < left);
				}
				wasFreestanding = true;
			} else {
				if (wasFreestanding && getValue("Peek Mode") == 1 && Entity.GetProp(Entity.GetLocalPlayer(), "CCSPlayer", "m_flDuckAmount") == 0) {
					toggleHotkey("Inverter");
					wasFreestanding = false;
				}
			}
		}

		//Cheat.PrintChat(getValue("Dodge Bruteforce")+"\n")
		if (onShotFire > 0 && getValue("On Shot Mode") == 1) {
			fakeOffset *= -1;
			realOffset *= -1;
			lbyOffset *= -1;
		}
		if (getHotkey("Inverter")) {
			AntiAim.SetFakeOffset(-fakeOffset);
			AntiAim.SetRealOffset(-realOffset);
			AntiAim.SetLBYOffset(lbyOffset);
		} else {
			AntiAim.SetFakeOffset(fakeOffset);
			AntiAim.SetRealOffset(realOffset);
			AntiAim.SetLBYOffset(-lbyOffset);
		}
	}

	function setInvert(shouldInvert) {
		if (shouldInvert) {
			if (!getHotkey("Inverter")) {
				toggleHotkey("Inverter");
			}
		} else {
			if (getHotkey("Inverter")) {
				toggleHotkey("Inverter");
			}
		}
	}
	var closestEnemy=0;
	var closestEnemyChanged=false;
	function calcClosestEnemy(){
		if(!Entity.IsAlive(closestEnemy)){
			closestEnemy=0;
		}
		enemimies=Entity.GetEnemies();
		closestDistance=Math.sqrt(Math.pow(screen_x/2,2)+Math.pow(screen_y/2,2));
		closestGuy=0;
		for(i=0;i<enemimies.length;i++){
			enmiScreenPos=Render.WorldToScreen(Entity.GetEyePosition( enemimies[i] ));
			if(enmiScreenPos!=undefined){
				thisGuysDistance=Math.sqrt(Math.pow(Math.abs(Math.abs(enmiScreenPos[0])-screen_x/2),2)+Math.pow(Math.abs(Math.abs(enmiScreenPos[1])-screen_y/2),2));
				if(thisGuysDistance<closestDistance){
					closestDistance=thisGuysDistance;
					closestGuy=enemimies[i];
				}
			}
		}
		if(closestEnemy!=closestGuy && closestGuy!=0){
			closestEnemy=closestGuy;
			closestEnemyChanged=true;
		}
	}

	function disableAA() {
		AntiAim.SetOverride(0);
		if (!aaDisabled) {
			UI.SetValue("Anti-Aim", "Extra", "Pitch", 0);
			UI.SetValue("Anti-Aim", "Rage Anti-Aim", "At targets", false);
			UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Yaw offset", 180);
			UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Jitter offset", 0);
			aaDisabled = true;
			aaMode = "Disabled";
		}
	}
	//deg2rad function
	function DEG2RAD(degree) {
		return (Math.PI / 180) * degree;
	}
	var roundHasBot=false;
	function rage_onRoundStart() {
		enableAA = true;
		roundEnd = false;
		if(getValue("Bot In Spawn")){
			 teammates = Entity.GetTeammates();
        for (i = 0; i < teammates.length; i++) {
            if (Entity.IsAlive(teammates[i]) && Entity.IsBot(teammates[i])) {
                roundHasBot=true;
				break;
            }
        }
		}
	}

	function rage_onRoundEnd() {
		if (getValue("Disable On") & (1 << 0)) {
			var players = Entity.GetEnemies();
			for (i = 0; i < players.length; i++) {
				if (Entity.IsAlive(players[i])) {
					return;
				}
			}
			enableAA = false;
			roundEnd = true;
		}
		roundHasBot=false;
	}

	var shotStart = {};
	var shotEnd = {};


	//more compact but shittier
	///NOT deciphering this, no.
	function dodgeBruteforce(shouldInvert) {
		//get head hitbox pos
		head = Entity.GetHitboxPosition(Entity.GetLocalPlayer(), 0);
		if (head != 0) {
			Object.keys(shotStart)
				.forEach(function(key) {
					if (shotStart.hasOwnProperty(key) && shotEnd.hasOwnProperty(key) && shotStart[key] != undefined && shotEnd[key] != undefined && shotStart[key][0] != undefined) {
						start = JSON.parse(JSON.stringify(shotStart[key]));
						end = JSON.parse(JSON.stringify(shotEnd[key]));
						delete shotStart[key];
						delete shotEnd[key];
						//SIKE
						//check if antibrute is on
						if (shouldInvert) {
							//vector of bullet beam
							vec = [end[0] - start[0], end[1] - start[1], end[2] - start[2]];

							//no idea wtf this is
							equation = [vec[1], -vec[2] - vec[0], vec[1], (vec[0] * start[1]) - (vec[1] * start[0]) - (vec[1] * start[2]) + (vec[2] * start[1])];
							
							//dist from head to beam
							//	abseloute value of something
							distance = Math.abs((equation[0] * head[0]) + (equation[1] * head[1]) + (equation[2] * head[2]) + equation[3]) / Math.sqrt(Math.pow(equation[0], 2) + Math.pow(equation[1], 2) + Math.pow(equation[2], 2));
							//Cheat.PrintChat(distance + "\n");
							if (distance < 30 && distance > 0) {
								toggleHotkey("Inverter");
								//resolvers[key]=getHotkey("Inverter");
							}
						}
					}
				});
				
		}
	}

	function clearShotData() {
		shotStart = {};
		shotEnd = {};
	}

	function rage_onWeaponFire() {
		if (Entity.IsEnemy(Entity.GetEntityFromUserID(Event.GetInt("userid")))) {
			shotStart[Entity.GetEntityFromUserID(Event.GetInt("userid"))] = Entity.GetEyePosition(Entity.GetEntityFromUserID(Event.GetInt("userid")));
		}
	}

	function rage_onBulletImpact() {
		if (Entity.IsEnemy(Entity.GetEntityFromUserID(Event.GetInt("userid")))) {
			shotEnd[Entity.GetEntityFromUserID(Event.GetInt("userid"))] = [Event.GetInt("x"), Event.GetInt("y"), Event.GetInt("z")];
		}
	}

	function ANGLE2VEC(angle) {
		pitch = angle[0];
		yaw = angle[1];
		return [Math.cos(DEG2RAD(pitch)) * Math.cos(DEG2RAD(yaw)), Math.cos(DEG2RAD(pitch)) * Math.sin(DEG2RAD(yaw)), -Math.sin(DEG2RAD(pitch))];
	}

	function getWallDistance(entity, angle) {
		vector = ANGLE2VEC(angle);
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
	}

	Cheat.RegisterCallback("weapon_fire", "rage_onWeaponFire");
	Cheat.RegisterCallback("bullet_impact", "rage_onBulletImpact");
	Cheat.RegisterCallback("round_end", "rage_onRoundEnd");
	Cheat.RegisterCallback("round_start", "rage_onRoundStart");
	//@Anti-Aim End
	//@Weapon Config Start
	var damageMode = "Normal"
	var lastExploit = 0;

	function weaponConfigUpdate() {
		target = Ragebot.GetTarget();

		if (target != 0) {
			rageTarget = target;
		}
		weaponDamageUpdate();
		weaponAccuracyUpdate();
	}

	function getOnetapHitboxName(index) {
		var hitboxName = "";
		switch (index) {
			case 0:
				hitboxName = "Head";
				break;
			case 1:
				hitboxName = "Neck";
				break;
			case 2:
				hitboxName = "Pelvis";
				break;
			case 3:
				hitboxName = "Body";
				break;
			case 4:
				hitboxName = "Thorax";
				break;
			case 5:
				hitboxName = "Chest";
				break;
			case 6:
				hitboxName = "Upper chest";
				break;
			case 7:
				hitboxName = "Left thigh";
				break;
			case 8:
				hitboxName = "Right thigh";
				break;
			case 9:
				hitboxName = "Left calf";
				break;
			case 10:
				hitboxName = "Right calf";
				break;
			case 11:
				hitboxName = "Left foot";
				break;
			case 12:
				hitboxName = "Right foot";
				break;
			case 13:
				hitboxName = "Left hand";
				break;
			case 14:
				hitboxName = "Right hand";
				break;
			case 15:
				hitboxName = "Left upper arm";
				break;
			case 16:
				hitboxName = "Left forearm";
				break;
			case 17:
				hitboxName = "Right upper arm";
				break;
			case 18:
				hitboxName = "Right forearm";
				break;
			default:
				hitboxName = "Generic";
		}

		return hitboxName;
	}

	function ragebotLogs() {
		lastExploit = Event.GetInt("exploit");
		ragebot_target = Event.GetInt("target_index");
		ragebot_target_hitbox = Event.GetInt("hitbox");
		ragebot_target_hitchance = Event.GetInt("hitchance");
		ragebot_target_safepoint = Event.GetInt("safepoint");
		ragebot_target_exploit = Event.GetInt("exploit");
		targetName = Entity.GetName(ragebot_target);
		if (getValue("Rage Bot Logging")) {
			Cheat.PrintColor(getColor("UI Color"), "[dhdj] fired shot at " + targetName + " Hitbox: " + getOnetapHitboxName(ragebot_target_hitbox) + " | Hitchance: " + ragebot_target_hitchance + " | Safepoint: " + ragebot_target_safepoint + " | Exploit: " + ragebot_target_exploit + " | Damage Mode: " + damageMode + "\n");
		}
	}

	function weaponDamageUpdate() {
		//Cheat.PrintChat(Entity.GetProp(Entity.GetLocalPlayer(),"CCSPlayer","m_angEyeAngles[0]")[0]+"\n")
		if (getHotkey("Minimum Damage")) {
			setDamageMode("Minimum");
			setHitboxes("Mindmg");
			return;
		}
		if (UI.IsHotkeyActive("Rage", "GENERAL", "Exploits", "Doubletap") && (Exploit.GetCharge() == 1.0 || lastExploit == 1) && weaponSettings[currentWeapon][1].indexOf("Doubletap") != -1) {
			setDamageMode("Doubletap");
			setHitboxes("Doubletap");
			if (getValue("Automatic Mindmg")) {
				if (Exploit.GetCharge() == 1.0) {
					if (Entity.GetProp(rageTarget, "CBasePlayer", "m_iHealth") < (UI.GetValue("Rage", weaponSettings[currentWeapon][0].toUpperCase(), "Targeting", "Minimum damage") * 2) && Entity.GetProp(rageTarget, "CBasePlayer", "m_iHealth") > 0 && UI.GetValue("Rage", weaponSettings[currentWeapon][0].toUpperCase(), "Targeting", "Minimum damage") < 101) {
						UI.SetValue("Rage", weaponSettings[currentWeapon][0].toUpperCase(), "Targeting", "Minimum damage", (Entity.GetProp(rageTarget, "CBasePlayer", "m_iHealth") / 2) + 1);
						damageMode = "Auto Doubletap";
					}
				} else {
					if (Entity.GetProp(rageTarget, "CBasePlayer", "m_iHealth") < UI.GetValue("Rage", weaponSettings[currentWeapon][0].toUpperCase(), "Targeting", "Minimum damage") && Entity.GetProp(rageTarget, "CBasePlayer", "m_iHealth") > 0 && UI.GetValue("Rage", weaponSettings[currentWeapon][0].toUpperCase(), "Targeting", "Minimum damage") < 101) {
						UI.SetValue("Rage", weaponSettings[currentWeapon][0].toUpperCase(), "Targeting", "Minimum damage", Entity.GetProp(rageTarget, "CBasePlayer", "m_iHealth") + 1);
						damageMode = "Auto";
					}
				}
			}
			return;
		}
		if (Entity.IsValid(rageTarget) == true && Entity.IsAlive(rageTarget) && Entity.IsDormant(rageTarget) == false) {
			localPlayer_index = Entity.GetLocalPlayer();
			localPlayer_eyepos = Entity.GetEyePosition(localPlayer_index);
			damageMode = "Autowall";
			for (x = 0; x < 13; x++) {
				hitboxPos = Entity.GetHitboxPosition(rageTarget, x);
				result = Trace.Bullet(localPlayer_index, rageTarget, localPlayer_eyepos, hitboxPos);
				if (result[2] && x != 0) {
					if (getValue(currentWeapon + " Visible Damage") > getValue(currentWeapon + " Autowall Damage")) {
						if (result[1] > getValue(currentWeapon + " Visible Damage")) {
							damageMode = "Visible";
							break;
						}
					} else {
						damageMode = "Visible";
						break;
					}
				}
			}
			setDamageMode(damageMode);
			setHitboxes(damageMode);
			if (getValue("Automatic Mindmg")) {
				if (Entity.GetProp(rageTarget, "CBasePlayer", "m_iHealth") < UI.GetValue("Rage", weaponSettings[currentWeapon][0].toUpperCase(), "Targeting", "Minimum damage") && Entity.GetProp(rageTarget, "CBasePlayer", "m_iHealth") > 0 && UI.GetValue("Rage", weaponSettings[currentWeapon][0].toUpperCase(), "Targeting", "Minimum damage") < 101) {
					UI.SetValue("Rage", weaponSettings[currentWeapon][0].toUpperCase(), "Targeting", "Minimum damage", Entity.GetProp(rageTarget, "CBasePlayer", "m_iHealth") + 1);
					damageMode = "Auto";
				}
			}
		} else {
			setHitboxes("Visible");
			setDamageMode("Visible");
		}
	}

	function weaponAccuracyUpdate() {
		if (getHotkey("Minimum Accuracy") || !UI.GetValue("Rage", "GENERAL", "General", "Auto scope")) {
			setAccuracyMode("Minimum");
			return;
		}
		if (UI.IsHotkeyActive("Rage", "GENERAL", "Exploits", "Doubletap") && weaponSettings[currentWeapon][1].indexOf("Doubletap") != -1) {
			setAccuracyMode("Doubletap");
			return;
		}
		if (Entity.IsValid(rageTarget) == true && Entity.IsAlive(rageTarget) && Entity.IsDormant(rageTarget) == false) {
			localPlayer_index = Entity.GetLocalPlayer();
			localPlayer_eyepos = Entity.GetEyePosition(localPlayer_index);
			hitbox_pos = Entity.GetHitboxPosition(rageTarget, 0);
			result = Trace.Bullet(localPlayer_index, rageTarget, localPlayer_eyepos, hitbox_pos);
			if (result[2]) {
				setAccuracyMode("Visible");
			} else {
				setAccuracyMode("Autowall");
			}
		} else {
			setAccuracyMode("Visible");
		}
	}

	function getCurrentWeapon(player) {
		if (!Entity.IsAlive(player)) return "General";
		weapon = Entity.GetProp(player, "CBasePlayer", "m_hActiveWeapon");
		if (weapon == "m_hActiveWeapon") return "General";
		weapon = (Entity.GetProp(weapon, "CBaseAttributableItem", "m_iItemDefinitionIndex") & 0xFFFF);
		if (nameList[weapon] != undefined) {
			return nameList[weapon];
		} else {
			return "General";
		}
	}

	function getCurrentWeaponConfig(player) {
		weapon = getCurrentWeapon(player);
		switch (weaponSettings[weapon][0]) {
			case "Pistol":
				return "Pistol config";
				break;
			case "Heavy pistol":
				return "Heavy pistol config";
				break;
			case "Scout":
				return "Scout config";
				break;
			case "AWP":
				return "AWP config";
				break;
			case "Autosniper":
				return "Auto config";
				break;
			default:
				return "Targeting";
				break;
		}
	}

	nameList = {
		1: "Desert Eagle",
		2: "Dual Berettas",
		3: "Five-SeveN",
		4: "Glock-18",
		7: "AK-47",
		8: "AUG",
		9: "AWP",
		10: "FAMAS",
		11: "G3SG1",
		13: "Galil AR",
		14: "M249",
		16: "M4A4",
		17: "MAC-10",
		19: "P90",
		23: "MP5-SD",
		24: "UMP-45",
		25: "XM1014",
		26: "PP-Bizon",
		27: "MAG-7",
		28: "Negav",
		29: "Sawed-Off",
		30: "Tec-9",
		32: "P2000",
		33: "MP7",
		34: "MP9",
		35: "Nova",
		36: "P250",
		38: "SCAR-20",
		39: "SG 553",
		40: "SSG 08",
		60: "M4A1-S",
		61: "USP-S",
		63: "CZ75-Auto",
		64: "R8 Revolver",

	};
	buyList = {
		"weapon_deagle":"a",
		"weapon_elite":"b",
		"weapon_sg556":"E",
		"weapon_p90":"C",
		"weapon_aug":"f",
		"weapon_negev":"u",
		"weapon_mag7":"t",
		"weapon_mp9":"A",
		"weapon_mp7":"t",
		"weapon_p250":"y",
		"weapon_ak47":"e",
		"weapon_revolver":"R",
		"weapon_scar20":"D",
		"weapon_g3sg1":"j",
		"weapon_awp":"g",
		"weapon_sawedoff":"v",
		"weapon_ssg08":"F",
		"item_assaultsuit":"S",
		"item_kevlar":"T",
		"item_defuser":"U",
		"weapon_flashbang":"H",
		"weapon_hegrenade":"I",
		"weapon_smokegrenade":"J",
		"weapon_incgrenade":"K"
	}
	iconList = {
		1: "a",
		2: "b",
		3: "c",
		4: "d",
		7: "e",
		8: "f",
		9: "g",
		10: "h",
		11: "j",
		13: "k",
		14: "i",
		16: "l",
		17: "n",
		19: "C",
		23: "p",
		24: "q",
		25: "r",
		26: "s",
		27: "t",
		28: "u",
		29: "v",
		30: "w",
		31: "x",
		32: "o",
		33: "t",
		34: "A",
		35: "B",
		36: "y",
		38: "D",
		39: "E",
		40: "F",
		42: "G",
		43: "H",
		44: "I",
		45: "J",
		46: "K",
		47: "L",
		59: "O",
		60: "l",
		61: "P",
		63: "Q",
		64: "R",
		513: "1",
		514: "2",
		515: "3",
		516: "4",
		517: "5",
		518: "6",
		519: "7",
		520: "8",

	};

	function getWeaponIcon(player) {
		if (!Entity.IsAlive(player)) return "9";
		weapon = Entity.GetProp(player, "CBasePlayer", "m_hActiveWeapon");
		if (weapon == "m_hActiveWeapon") return "9";
		weapon = (Entity.GetProp(weapon, "CBaseAttributableItem", "m_iItemDefinitionIndex") & 0xFFFF);
		if (iconList[weapon] != undefined) {
			return iconList[weapon];
		} else {
			return "9";
		}
	}

	function setDamageMode(mode) {
		damageMode = mode;
		originalDamage = getValue(currentWeapon + " " + mode + " Damage");
		if (originalDamage == 0) {
			originalDamage = getValue("General " + mode + " Damage");
		}
		UI.SetValue("Rage", weaponSettings[currentWeapon][0].toUpperCase(), "Targeting", "Minimum damage", originalDamage);
	}

	function setAccuracyMode(mode) {
		originalAccuracy = getValue(currentWeapon + " " + mode + " Hitchance");
		if (originalAccuracy == 0) {
			originalAccuracy = getValue("General " + mode + " Hitchance");
		}
		UI.SetValue("Rage", weaponSettings[currentWeapon][0].toUpperCase(), "Accuracy", "Hitchance", originalAccuracy);
	}

	function setHitboxes(mode) {
		originalHitboxes = getValue(currentWeapon + " " + mode + " Hitboxes");
		if (originalHitboxes == 0) {
			originalHitboxes = getValue("General " + mode + " Hitboxes");
		}
		originalHitboxes1 = getValue(currentWeapon + " " + mode + " Multipoint Hitboxes");
		if (originalHitboxes1 == 0) {
			originalHitboxes1 = getValue("General " + mode + " Multipoint Hitboxes");
		}
		UI.SetValue("Rage", weaponSettings[currentWeapon][0].toUpperCase(), "Targeting", "Hitboxes", originalHitboxes);
		UI.SetValue("Rage", weaponSettings[currentWeapon][0].toUpperCase(), "Targeting", "Multipoint hitboxes", originalHitboxes1);
	}
	//@Weapon Config End
	//@Rage Bot Start
	var defaultMulti = {
		"GENERAL": [0, 0],
		"PISTOL": [0, 0],
		"HEAVY PISTOL": [0, 0],
		"SCOUT": [0, 0],
		"AWP": [0, 0],
		"AUTOSNIPER": [0, 0]
	};
	var players = {};
	var multiHitbox = 0;
	var ignoreList = []
	var onShotFire = 0;
	var swapBack = false;
	var playerWeaponFire = [];

	function rageBotOptimizationUpdate() {
		target = Ragebot.GetTarget();

		if (target != 0) {
			rageTarget = target;
		}
		if (getValue("No Scope Distance") > 0 && Globals.Tickcount() % 32 == 0) {
			noScopeUpdate();
		}
		if (getValue("Safe Point Conditions") != 0) {
			calculateSafePointConditions();
		}
		if (getValue("Body Conditions") != 0) {
			calculateBodyConditions();
		}
		if (getValue("Play Style") == 1) {
			if (getHotkey("Auto Wall Switch")) {
				toggleHotkey("Auto Wall Switch");
				setValue("Auto Wall Mode", (getValue("Auto Wall Mode") == 2) ? 0 : (getValue("Auto Wall Mode") + 1));
			}
			switch (getValue("Auto Wall Mode")) {
				case 0:
					setAutoWall(false);
					break;
				case 1:
					ignoreIfCannotSee();
					break;
				case 2:
					setAutoWall(true);
					break;
			}
		} else {
			setAutoWall(true);
		}
		if (getValue("Auto Swap") && swapBack && !UI.IsHotkeyActive("Misc", "GENERAL", "Movement", "Auto peek")) {
			Global.ExecuteCommand("slot1");
			swapBack = false;
		}
	}

	function noScopeUpdate() {
		if (Entity.IsAlive(Entity.GetLocalPlayer())) {
			distance = 0;
			enemies = Entity.GetEnemies();
			for (i = 0; i < enemies.length; i++) {
				if (Entity.IsAlive(enemies[i]) && !Entity.IsDormant(enemies[i])) {
					origin = Entity.GetRenderOrigin( enemies[i] );
					myself = Entity.GetRenderOrigin(Entity.GetLocalPlayer());
					distance_to_enemy = Math.sqrt(Math.pow(origin[0] - myself[0], 2) + Math.pow(origin[1] - myself[1], 2) + Math.pow(origin[2] - myself[2], 2));
					if (distance == 0 || distance_to_enemy < distance) {
						distance = distance_to_enemy;
					}
				}
			}
			if (distance < getValue("No Scope Distance")) {
				UI.SetValue("Rage", "GENERAL", "General", "Auto scope", false);
			} else {
				UI.SetValue("Rage", "GENERAL", "General", "Auto scope", true);
			}
		} else {
			UI.SetValue("Rage", "GENERAL", "General", "Auto scope", true);
		}
	}

	function setAutoWall(on) {
		UI.SetValue("Rage", "GENERAL", "Targeting", "Disable autowall", !on);
		UI.SetValue("Rage", "PISTOL", "Pistol config", "Disable autowall", !on);
		UI.SetValue("Rage", "HEAVY PISTOL", "Heavy pistol config", "Disable autowall", !on);
		UI.SetValue("Rage", "SCOUT", "Scout config", "Disable autowall", !on);
		UI.SetValue("Rage", "AWP", "AWP config", "Disable autowall", !on);
		UI.SetValue("Rage", "AUTOSNIPER", "Auto config", "Disable autowall", !on);
	}

	function ignoreIfCannotSee() {
		penetrable = (getValue("Legit Auto Wall Penetration") == 1) ? 0.98 : 0.99;
		ignoreList = [];
		enemies = Entity.GetEnemies();
		localEyePos = Entity.GetEyePosition(Entity.GetLocalPlayer());
		for (i = 0; i < enemies.length; i++) {
			if (Entity.IsAlive(enemies[i]) && Entity.IsDormant(enemies[i]) == false) {
				if (getValue("Auto Wall Fightback") && playerWeaponFire[enemies[i]] != undefined && ((Globals.Tickcount() - playerWeaponFire[enemies[i]]) < 128)) {
					//dunno what to add
				} else {
					cannotFire = true;
					for (x = 0; x < 18; x++) {
						enemyHitbox = Entity.GetHitboxPosition(enemies[i], x);
						if (typeof(enemyHitbox) != "undefined") {
							result = Trace.Line(Entity.GetLocalPlayer(), localEyePos, enemyHitbox);
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
		//Cheat.PrintChat(ignoreList+"\n");
		for (i = 0; i < ignoreList.length; i++) {
			Ragebot.IgnoreTarget(ignoreList[i]);
		}
		setAutoWall(true);
	}

	function ragebotoptimization_onWeaponFire() {
		if (getValue("Auto Wall Fightback")) {
			playerWeaponFire[Entity.GetEntityFromUserID(Event.GetInt("userid"))] = Globals.Tickcount();
		}
		if (Entity.GetEntityFromUserID(Event.GetInt("userid")) == Entity.GetLocalPlayer()) {
			onShotFire = 4;
		}
	}

	function getJump(index) {
		return Entity.GetProp(index, "CBasePlayer", "m_vecVelocity[0]")[2]
	}

	function calculateSafePointConditions() {
		if (getValue("Safe Point Conditions") & (1 << 0)) {
			if (Math.abs(getJump(rageTarget)) >= 40) {
				Ragebot.ForceTargetSafety(rageTarget);
			}
		}
		if (getValue("Safe Point Conditions") & (1 << 1)) {
			if (getRandomInteger(0, 10) > 5) {
				Ragebot.ForceTargetSafety(rageTarget);
			}
		}
	}

	function calculateBodyConditions() {
		doBaim = false;
		if (getValue("Body Conditions") & (1 << 0)) {
			if (getVelocity(rageTarget) <= 90 && getVelocity(rageTarget) >= 20) {
				if (!UI.IsHotkeyActive("Rage", "GENERAL", "General", "Force body aim")) {
					UI.ToggleHotkey("Rage", "GENERAL", "General", "Force body aim");
				}
				doBaim = true;
			}
		}
		if (getValue("Body Conditions") & (1 << 1)) {
			if (Entity.GetProp(rageTarget, "CBasePlayer", "m_iHealth") < 20) {
				if (!UI.IsHotkeyActive("Rage", "GENERAL", "General", "Force body aim")) {
					UI.ToggleHotkey("Rage", "GENERAL", "General", "Force body aim");
				}
				doBaim = true;
			}
		}
		if (getValue("Body Conditions") & (1 << 2)) {
			if (getRandomInteger(0, 10) > 5) {
				if (!UI.IsHotkeyActive("Rage", "GENERAL", "General", "Force body aim")) {
					UI.ToggleHotkey("Rage", "GENERAL", "General", "Force body aim");
				}
				doBaim = true;
			}
		}
		if (!doBaim) {
			if (UI.IsHotkeyActive("Rage", "GENERAL", "General", "Force body aim")) {
				UI.ToggleHotkey("Rage", "GENERAL", "General", "Force body aim");
			}
		}
	}
	var shotsFired=0;
	function ragebotoptimization_onRagebotFire() {
		if (getValue("Auto Swap") && (weaponSettings[currentWeapon][0] == "Scout" || weaponSettings[currentWeapon][0] == "AWP") && !UI.IsHotkeyActive("Misc", "GENERAL", "Movement", "Auto peek")) {
			Global.ExecuteCommand("slot3");
			swapBack = true;
		}
		shotsFired++;
		if (shotsFired >= getValue("Peek Return After X Shots") || ["AWP", "SSG 08", "R8 Revolver"].indexOf(currentWeapon) != -1) {
			shotsFired = 0;
			peekReturn = true;
		}
		if (getValue("Show Bullet Tracer")) {
			lastFireEyePos = Entity.GetEyePosition(localPlayer);
			firedByRageBot = true;
		}
	}

	function ragebotoptimization_onPlayerHurt() {

	}

	function duplicate(theObject) {
		return JSON.parse(JSON.stringify(theObject));
	}

	Cheat.RegisterCallback("ragebot_fire", "ragebotoptimization_onRagebotFire");
	Cheat.RegisterCallback("player_hurt", "ragebotoptimization_onPlayerHurt");
	Cheat.RegisterCallback("ragebot_fire", "ragebotLogs");
	Cheat.RegisterCallback("weapon_fire", "ragebotoptimization_onWeaponFire");
	//Cheat.RegisterCallback("Draw", "ragebotoptimization_onDraw");
	//@Rage Bot End
	//@Slow Walk Start
	function slowWalkUpdate() {
		if (UI.IsHotkeyActive("Anti-Aim", "Extra", "Slow walk")) {
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
	}
	//@Slow Walk End


	//look at this
	//this is how dhdj writes his shit
	//confirming that this is his script


	//god damn bro
	//ur shits fucked up ngl
	//please do ==true in if statements
	//PLEASE
	//@Fast Duck Start

	var enableFakeLag = true;
	var maxLevel = 28;
	//wtf are those vars

	function fastDuckUpdate() {
		var buttons = UserCMD.GetButtons();
		//if rage use 28 as max, else use 25 maybe
		maxLevel = (getValue("Play Style") == 1) ? 28 : 25;
		//if on valve server
		if (valve) {
			//if fakeducking
			if (getHotkey("Fake Duck")) {

				//disable fakelag(what?)
				enableFakeLag = false;

				//duckamount is probably duck progress(1 is fully ducked and 0 is not ig)
				duckAmount = Entity.GetProp(Entity.GetLocalPlayer(), "CCSPlayer", "m_flDuckAmount");

				//
				UserCMD.Choke();
				//if too high crouch and keep choking
				if (duckAmount <= maxLevel / 100) {
					//do mind that packets are still choked when start duck(probably why its called"fake duck")
					crouched = true
				};
				//if low enough 
				if (duckAmount >= 0.8) {
					crouched = false;
					//stop choking and stand up(kinda instantly)
					UserCMD.Send()
				};

				if (crouched) {
					//crouch down
					UserCMD.SetButtons(buttons | (1 << 2));
				} 
				else {
					//stand up
					UserCMD.SetButtons(buttons | (1 << 22));
				}
			} 
			//if not fakeducking at all
			else {
				UserCMD.SetButtons(buttons | (1 << 22));
				enableFakeLag = true;
			}
		}
	} 
	//@Fast Duck End
	//@Fake Lag Start
	var fakeLagMode = 0;
	var lastChokedCommands = 0;
	var commandSequence = 0;

	function fakeLagUpdate() {
		UI.SetValue("Anti-Aim","Fake-Lag","Enabled",1);
		if(getHotkey("Maximum Fake Lag")){
			UI.SetValue("Anti-Aim","Fake-Lag","Limit",valve?6:15);
			UI.SetValue("Anti-Aim","Fake-Lag","Jitter",0);
			UI.SetValue("Anti-Aim","Fake-Lag","Triggers",0);
			UI.SetValue("Anti-Aim","Fake-Lag","Trigger limit",0);
			return;
		}
		if(getValue("Play Style")==1){
			fakeLagMode=getValue("Semi-Rage Fake Lag");
		}else{
			fakeLagMode=getValue("Rage Fake Lag");
		}
		switch(fakeLagMode){
			case 0:
				UI.SetValue("Anti-Aim","Fake-Lag","Limit",0);
				UI.SetValue("Anti-Aim","Fake-Lag","Jitter",0);
				UI.SetValue("Anti-Aim","Fake-Lag","Triggers",0);
				UI.SetValue("Anti-Aim","Fake-Lag","Trigger limit",0);
			break;
			case 1:
				UI.SetValue("Anti-Aim","Fake-Lag","Limit",6);
				UI.SetValue("Anti-Aim","Fake-Lag","Jitter",33);
				UI.SetValue("Anti-Aim","Fake-Lag","Triggers",2);
				UI.SetValue("Anti-Aim","Fake-Lag","Trigger limit",15);
			break;
			case 2:
				UI.SetValue("Anti-Aim","Fake-Lag","Limit",0);
				UI.SetValue("Anti-Aim","Fake-Lag","Jitter",0);
				UI.SetValue("Anti-Aim","Fake-Lag","Triggers",2);
				UI.SetValue("Anti-Aim","Fake-Lag","Trigger limit",6);
			break;
			case 3:
				UI.SetValue("Anti-Aim","Fake-Lag","Limit",15);
				UI.SetValue("Anti-Aim","Fake-Lag","Jitter",0);
				UI.SetValue("Anti-Aim","Fake-Lag","Triggers",0);
				UI.SetValue("Anti-Aim","Fake-Lag","Trigger limit",0);
			break;
			case 4:
				if(valve){
					UI.SetValue("Anti-Aim","Fake-Lag","Limit",Math.max(0,Math.min(velocity/40,6)));
				}else{
					UI.SetValue("Anti-Aim","Fake-Lag","Limit",Math.max(0,Math.min(velocity/15,15)));
				}
				UI.SetValue("Anti-Aim","Fake-Lag","Jitter",0);
				UI.SetValue("Anti-Aim","Fake-Lag","Triggers",0);
				UI.SetValue("Anti-Aim","Fake-Lag","Trigger limit",0);
			break;
			case 5:
				var enemies = Entity.GetEnemies();
				var unlag = true;
				for (i = 0; i < enemies.length; i++) {
					if (Entity.IsAlive(enemies[i]) && !Entity.IsDormant(enemies[i])) {
						unlag = false;
						break;
					}
				}
				if (unlag) {
					UI.SetValue("Anti-Aim","Fake-Lag","Limit",0);
					UI.SetValue("Anti-Aim","Fake-Lag","Jitter",0);
					UI.SetValue("Anti-Aim","Fake-Lag","Triggers",0);
					UI.SetValue("Anti-Aim","Fake-Lag","Trigger limit",0);
				} else {
					UI.SetValue("Anti-Aim","Fake-Lag","Limit",valve?6:15);
					UI.SetValue("Anti-Aim","Fake-Lag","Jitter",0);
					UI.SetValue("Anti-Aim","Fake-Lag","Triggers",0);
					UI.SetValue("Anti-Aim","Fake-Lag","Trigger limit",0);
				}
			break;
		}
	}

	//only gets 2d velocity

	function getVelocity(index) {
		var velocity = Entity.GetProp(index, "CBasePlayer", "m_vecVelocity[0]");
	
		return Math.sqrt(velocity[0] * velocity[0] + velocity[1] * velocity[1]);
	}
	//@Fake Lag End
	//@Clan Tag Start
	var clantag = ["☠", "☠☠", "☠o", "☠o☠", "☠on", "☠on☠", "☠one☠", "☠onet", "☠onet☠", "☠oneta", "☠oneta☠", "☠onetap", "☠onetap☠", "☣onetap☣", "☠onetap☠", "☣onetap☣", "☠onetap☠", "☣onetap☣", "☠onetap☠", "☣onetap☣", "☛onetap☚", "☠onetap☠", "☣onetap☣", "☛onetap☚", "☠onetap☠", "☣onetap☣", "☛onetap☚", "☠onetap☠", "☣onetap☣", "☛onetap☚", "★onetap★", "★onetap★", "★onetap★", "★onetap★", "★onetap★", "★onetap★", "★onetap★", "★onetap★", "★onetap", "★oneta", "★onet", "★one", "★on", "★o", "★", "★", "★", "★", "☠", "☠", "☠", "☠", "☠"]

	function clanTagUpdate() {
		if (World.GetServerString() != "" && Entity.GetProp(Entity.GetLocalPlayer(),"CCSPlayerResource","m_iMatchStats_Kills_Total")/Entity.GetProp(Entity.GetLocalPlayer(),"CCSPlayerResource","m_iMatchStats_Deaths_Total")>=getValue("Show Clantag When KD >")) {
			switch (getValue("Clan Tag")) {
				case 1:
					Local.SetClanTag(clantag[Math.round(new Date()
						.getTime() / 500) % clantag.length]);
					break;
				case 2:
					Local.SetClanTag(getRandomChineseWord() + getRandomChineseWord() + getRandomChineseWord() + getRandomChineseWord() + getRandomChineseWord());
					break;
				case 3:
					Local.SetClanTag(getRandomInteger(10000000, 99999999)
						.toString());
					break;
				case 4:
					Local.SetClanTag(Math.ceil(1 / Global.Frametime()) + "FPS");
					break;
				case 5:
					Local.SetClanTag(Math.ceil(Local.Latency() * 1000) + "MS");
					break;
				case 6:
					Local.SetClanTag(Entity.GetName(Entity.GetWeapon(Entity.GetLocalPlayer()))
						.toString());
					break;
				case 7:
					Local.SetClanTag(Entity.GetProp(Entity.GetLocalPlayer(), "CBasePlayer", "m_iHealth") + "HP");
					break;
			}
		}
	}
	//@Clan Tag End
	//@FOV Start

	function FOVUpdate() {
		if (getHotkey("Maximum FOV On Key")) {
			setRageFOV(getValue("Max FOV"));
			return;
		}
		if (Entity.IsAlive(Entity.GetLocalPlayer())) {
			distance = 0;
			FOV = getValue("Min FOV");
			enemies = Entity.GetEnemies();
			for (i = 0; i < enemies.length; i++) {
				if (Entity.IsAlive(enemies[i]) && !Entity.IsDormant(enemies[i])) {
					origin = Entity.GetRenderOrigin( enemies[i] );
					myself = Entity.GetRenderOrigin(Entity.GetLocalPlayer());
					distance_to_enemy = Math.sqrt(Math.pow(origin[0] - myself[0], 2) + Math.pow(origin[1] - myself[1], 2) + Math.pow(origin[2] - myself[2], 2));
					if (distance == 0 || distance_to_enemy < distance) {
						distance = distance_to_enemy;
					}
				}
			}
			diff = 1000 - distance;
			if (diff > 0) {
				FOV += (getValue("Max FOV") - getValue("Min FOV")) * (diff / 1000);
			}
			FOV = Math.ceil(FOV);
			setRageFOV(FOV);
		}
	}

	function setRageFOV(fov) {
		UI.SetValue("Rage", "GENERAL", "Targeting", "FOV", fov);
		UI.SetValue("Rage", "PISTOL", "Targeting", "FOV", fov);
		UI.SetValue("Rage", "HEAVY PISTOL", "Targeting", "FOV", fov);
		UI.SetValue("Rage", "SCOUT", "Targeting", "FOV", fov);
		UI.SetValue("Rage", "AWP", "Targeting", "FOV", fov);
		UI.SetValue("Rage", "AUTOSNIPER", "Targeting", "FOV", fov);
	}
	//@FOV End
	//@Chat Spam Start

	function chatSpamUpdate() {
		Cheat.ExecuteCommand("say " + getRandomChineseWord() + getRandomChineseWord() + getRandomChineseWord() + getRandomChineseWord() + getRandomChineseWord() + getRandomChineseWord() + getRandomChineseWord() + getRandomChineseWord() + getRandomChineseWord() + getRandomChineseWord() + getRandomChineseWord() + getRandomChineseWord() + getRandomChineseWord());
	}
	//@Chat Spam End
	//@Others Start
	var currentWeapon = "General";
	var currentWeaponConfig = "Targeting";
	var enemyList = [];

	function othersUpdate() {
		if (getValue("Rage Crash")) {
			//hahaha
			Cheat.PrintChat("矺眣鑟媤锵咏看殽旯咥玡訢傔閝吣丝蛕粄蹞竪釡钦驁昈柘籱拙挀淔免鲇鵏姃厼玒麪饫邈郂诗瀘谞瑳豒圏囨蔚藙灦砸讗綜硏鍟疆肴阥鹩畡庙輚郌摖淛虵岊瞋椙繧曏橯稺箸籺脍銺浯潠狂赀咕牉羊敜蕨撋軟岓掘畧廢");
		}
		currentWeapon = getCurrentWeapon(Entity.GetLocalPlayer());
		currentWeaponConfig = getCurrentWeaponConfig(Entity.GetLocalPlayer());
		if (Globals.Tickcount() % 64 == 0) {
			if (getValue("Play Style") == 1) {
				UI.SetValue("Visual", "WORLD", "Entities", "Removals", getValue("Semi-Rage Removals"));
			}
			if (getValue("Play Style") == 2) {
				UI.SetValue("Visual", "WORLD", "Entities", "Removals", getValue("Rage Removals"));
			}
		}

		valve = Entity.GetProp(Entity.GetGameRulesProxy(), "CCSGameRulesProxy", "m_bIsValveDS");
		if(roundHasBot && Global.Tickcount()%(64*16)==0){
			Cheat.ExecuteCommand("holdpos");
		}
	}

	function others_onPlayerSay() {
		if (getValue("Reply Bot")) {
			Cheat.ExecuteCommand("say " + Event.GetString("text"));
		}
	}

	Cheat.RegisterCallback("player_say", "others_onPlayerSay")
	//@Others End
	var tickrate = Global.Tickrate();
	var ping = Math.ceil(Global.Latency() * 1000);
	var fps = Math.ceil(1 / Global.Frametime());
	var today = new Date();
	var datetime = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
	var fakeLagMax = (fakeLagMode == 2) ? 6 : 14;
	var fakeLag = 0;
	var lastChoke = 0;
	var colors = HSV2RGB(Global.Realtime() * 0.5, 1, 1);
	var shot = {};
	var hit = {};
	var percentage = 1;
	var percentageSum = 1;
	var headScale = 100;
	var bodyScale = 100;
	var keybinds = [];

	var theme_text = [30, 30, 30, 200];
	var theme_bar_border = [80, 80, 80, 255];
	var theme_bar_content = [120, 120, 120, 255];
	var theme_bar_separator = false;
	var theme_background_border = [210, 210, 210, 200];
	var theme_background_margin = [230, 230, 230, 255];
	var theme_background_content = [240, 240, 240, 255];
	var theme_rainbow = false;

	var theme_font = 1;

	var damageList = [];

	var playerLocation = {};
	var deathTime = {};
	var deathMark = 0;

	var bullets = [];

	var hitboxes = [
		'Generic',
		'Head',
		'Chest',
		'Stomach',
		'Left arm',
		'Right arm',
		'Left leg',
		'Right leg',
		'Body'
	];

	function UIUpdate() {
		if (getValue("Theme") == 0) {
			theme_text = [30, 30, 30, 200];
			theme_bar_border = [80, 80, 80, 255];
			theme_bar_content = [120, 120, 120, 255];
			theme_bar_separator = false;
			theme_background_border = [210, 210, 210, 200];
			theme_background_margin = [230, 230, 230, 255];
			theme_background_content = [240, 240, 240, 255];
			theme_rainbow = false;
		} else if (getValue("Theme") == 1) {
			theme_text = [255, 255, 255, 200];
			theme_bar_border = [40, 40, 40, 255];
			theme_bar_separator = false;
			theme_bar_content = [120, 120, 120, 255];
			theme_background_border = [30, 30, 30, 150];
			theme_background_margin = [30, 30, 30, 255];
			theme_background_content = [30, 30, 30, 255];
			theme_rainbow = true;
		} else {
			theme_text = [255, 255, 255, 200];
			theme_bar_border = [80, 80, 80, 255];
			theme_bar_content = [240, 240, 240, 255];
			theme_bar_separator = true;
			theme_background_border = [30, 30, 30, 150];
			theme_background_margin = [30, 30, 30, 255];
			theme_background_content = [30, 30, 30, 255];
			theme_rainbow = false;
		}
		/*
		if (getValue("Font") == 0) {
			theme_font = 1;
		} else {
			theme_font = 9;
		}*/
		switch (getValue("Font")) {
			case 0:
				theme_font = Render.AddFont("Segoe UI", 9, 700);
				theme_font_big = Render.AddFont("Segoe UI", 15, 700);
				break;
			case 1:
				theme_font = Render.AddFont("Segoe UI", 9, 400);
				theme_font_big = Render.AddFont("Segoe UI", 15, 400);
				break;
			case 2:
				theme_font = Render.AddFont("Comic Sans MS", 9, 400);
				theme_font_big = Render.AddFont("Comic Sans MS", 15, 400);
				break;
			case 3:
				theme_font = Render.AddFont("Times New Roman", 9, 400);
				theme_font_big = Render.AddFont("Times New Roman", 15, 400);
				break;
		}
		if (getValue("Show Watermark")) drawWaterMark();
		if (getValue("Top Bar") != 0) drawRainbow();
		if (World.GetServerString() != ""){
			if (getValue("Show Weird Ass Ball")) drawSprite();
			Render_FilledRect(0, 0, screen_x, screen_y, getColor("Color Correction Color"));
		}
		if (World.GetServerString() != "" && Entity.IsAlive(Entity.GetLocalPlayer())) {
			if (getValue("Premium Anti-Aim")) drawDesyncIndicator();
			if (getValue("Premium Anti-Aim") && getValue("Show Direction")) drawDirectionIndicator();
			if (getValue("Show Status")) drawStatusIndicator(getValue("x2"), getValue("y2"));
			if (getValue("Show Hit and Miss")) drawHitAndMiss(getValue("x3"), getValue("y3"));
			if (getValue("Show Damage Given")) drawDamageGiven(getValue("x5"), getValue("y5"));
			if (getValue("Show Death Mark")) drawDeathMark();
			if (getValue("Show Desync Size")) drawDesyncSize();
			if (getValue("Use Custom Scopeline")) drawCustomScopeline();
			//Cheat.Print(getValue("x6")+"\n");
			if (getValue("Show Enemy Weapons")) drawEnemyWeapons(getValue("x6"), getValue("y6"));
			if (getValue("Show Bullet Tracer")) drawBulletTracer();
			if (getValue("Show Ring Radar")) drawRingRadar();
			if (getValue("Show Keybind States") != 0) drawKeybindStates();
			if (getHotkey("Fake Duck")) drawFakeDuckIndicator();
			drawPeekIndicator();
			dragMenuItems();
			if(getValue("Show Movement Trail")){
				if(dhdjTime>2){
					drawMovementTrail();
				}
			}
		}
	}
	
	var maxDistance = 1;
var lastHiddenTime = {};
var lengthAdd = {};
var lastEspTime = {};

function drawRingRadar() {
	var colors = HSV2RGB(dhdjTime * 0.1, 1, 1);
	if (getColor("Ring Radar Color")[3] === 0) {
		ringRadarColor = [colors.g, colors.b, colors.r, 80];
	} else {
		ringRadarColor = getColor("Ring Radar Color");
	}

	var startRadius = getValue("Ring Radar Distance");
	var length = getValue("Ring Radar Length");
	var viewYaw = Local_GetViewAngles()[1] - 180;
	var renderList = {};
	var enemies_alive=Entity.GetEnemies();
	var local_render_origin=Entity.GetRenderOrigin(localPlayer);
	maxDistance = 1;
	for (var i = 0; i < enemies_alive.length; i++) {
		if(!Entity.IsAlive(enemies_alive[i])){
			return;
		}
		if (lengthAdd[enemies_alive[i]] == undefined) {
			lengthAdd[enemies_alive[i]] = 15;
		}

		var enemy_screen_pos = Render_WorldToScreen(Entity_GetRenderOrigin(enemies_alive[i]));
		var arcColor = [ringRadarColor[0], ringRadarColor[1], ringRadarColor[2], ringRadarColor[3]];
		if (enemy_screen_pos[2] != 0) {
			if (getValue("Ring Radar Animation")) {
				arcColor[3] = Math.max(20, (1 - (dhdjTime - lastHiddenTime[enemies_alive[i]])) * 50);
			} else {
				arcColor[3] = 20;
			}
		} else {
			lastHiddenTime[enemies_alive[i]] = dhdjTime;
		}
		if (Entity_IsDormant(enemies_alive[i])) {
			arcColor = [200, 200, 200, 0];
			if (getValue("Ring Radar Animation") && (dhdjTime - lastEspTime[enemies_alive[i]]) > 0.25) {
				arcColor[3] = Math.max(0, (4 - (dhdjTime - lastEspTime[enemies_alive[i]])) * 50);
			} else {
				arcColor[3] = 80;
			}
		} else {
			lastEspTime[enemies_alive[i]] = dhdjTime;
		}
		if (lastEspTime[enemies_alive[i]] != undefined && (dhdjTime - lastEspTime[enemies_alive[i]]) < 2.55) {
			var enemiesWorldPos = Entity_GetRenderOrigin(enemies_alive[i]);
			var vecToEnemy = [enemiesWorldPos[0] - local_render_origin[0], enemiesWorldPos[1] - local_render_origin[1], enemiesWorldPos[2] - local_render_origin[2]];
			var angle = Math.atan2(vecToEnemy[1], vecToEnemy[0]) * (180 / Math.PI);
			var distance = getDistance(Entity_GetRenderOrigin(enemies_alive[i]), local_render_origin);
			if (distance > maxDistance) {
				maxDistance = distance;
			}
			if (getValue("Ring Radar Animation") && lengthAdd[enemies_alive[i]] > 0) {
				lengthAdd[enemies_alive[i]] -= 0.1;
			}
			renderList[distance] = [adjustAngle(angle - viewYaw), arcColor, lengthAdd[enemies_alive[i]] > 10 ? 10 : lengthAdd[enemies_alive[i]]];
		} else {
			lengthAdd[enemies_alive[i]] = 15;
		}
	}
	if (renderList.length == 0) {
		return;
	}
	Object.keys(renderList).sort(function(a, b) {
		return b - a;
	}).forEach(function(key) {
		var add = 0;
		if (getValue("Ring Radar Animation")) {
			add = renderList[key][2];
		}
		Render_Arc(screen_x / 2, screen_y / 2, startRadius, startRadius - getValue("Ring Radar Width"), renderList[key][0] - (((length + (length * (key / maxDistance))) + add) / 2), (length + (length * (key / maxDistance))) + add, 100, [renderList[key][1][0], renderList[key][1][1], renderList[key][1][2], Math.max(renderList[key][1][3],add * 10.0)]);
		startRadius -= getValue("Ring Radar Width") + getValue("Ring Radar Gap");
	});
}
	
	var peekTime = 0;
	var endPeekTime = 0;
	var peekPressed = false;
	var peekLocation = [0, 0, 0];
	var peekCircleFinalSize=0;
	var peekReturn=false;
	
	function drawPeekIndicator(){
		if (getHotkey("Better Auto Peek")) {
			if (!peekPressed) {
				peekPressed = true;
				peekLocation = Entity_GetRenderOrigin(localPlayer);
			}
			if (peekReturn) {
				var peekColor = getColor("Peek Active Color");
			} else {
				var peekColor = getColor("Peek Inactive Color");
			}
			if (peekColor[3] == 0) {
				var colors = HSV2RGB(dhdjTime * 0.2, 1, 1);
				peekColor = [colors.r, colors.g, colors.b, 255]
			}
			var circleSize = Math.min(easeInOutQuad(Math.min(0.2, dhdjTime - peekTime), 1, 16, 0.2), 16);
			peekCircleFinalSize=circleSize;
			Render_3dCircleOutline(peekLocation, circleSize, circleSize - 0.5, 40, peekColor);
			peekColor[3] = 100;
			Render_3dCircle(peekLocation, circleSize - 0.5, 40, peekColor);
			endPeekTime = dhdjTime;
		} else {
			if (endPeekTime != 0 && dhdjTime - endPeekTime < 0.2 && dhdjTime - endPeekTime > 0) {
				var peekColor = getColor("Peek Inactive Color");
				if (peekColor[3] == 0) {
					var colors = HSV2RGB(dhdjTime * 0.2, 1, 1);
					peekColor = [colors.r, colors.g, colors.b, 255]
				}
				var circleSize = Math.min(peekCircleFinalSize - easeInOutQuad(Math.min(0.2, dhdjTime - endPeekTime), 0, peekCircleFinalSize-1, 0.2), peekCircleFinalSize);
				Render_3dCircleOutline(peekLocation, circleSize, circleSize - 0.5, 40, peekColor);
				peekColor[3] = 100;
				Render_3dCircle(peekLocation, circleSize - 0.5, 40, peekColor);
			}
			peekPressed = false;
			peekTime = dhdjTime;
		}
	}
	
	
	var movement_data = [];
	for (var i = 0; i < 80; i++) {
		movement_data.push([[0, 0, 0], [0, 0, 0, 0]]);
	}

	function calcMovementTrail() {
		var position = Entity_GetRenderOrigin(localPlayer);
		var last_position=movement_data[0][0];
		var colors = HSV2RGB(dhdjTime * 0.5, 1, 1);
		var color = [colors.r, colors.g, colors.b, 255]

		movement_data.pop();
		movement_data.unshift([position, color]);
	}

	function drawMovementTrail() {
		if (getDistance(movement_data[0][0], movement_data[movement_data.length - 1][0]) < 1) {
			return;
		}
		var cameraLocation=Local_GetCameraPosition();
		
		for (var i = 0; i < movement_data.length; i++) {
			if (movement_data[i][0][0] == 0) {
				break;
			}
			var screenpos = Render_WorldToScreen(movement_data[i][0]);
			var distance = getDistance(cameraLocation, movement_data[i][0]);
			var size = 170 * Math.atan(10 / (2 * distance));
			if (screenpos[2] != 0) {
				Render_FilledCircle(screenpos[0], screenpos[1], size, [movement_data[i][1][0], movement_data[i][1][1], movement_data[i][1][2], 255 * ((movement_data.length - i) / (movement_data.length))]);
			}
		}
		
	}
	
	function rect(x, y, w, h, dir, color1, color2) {
		Render.GradientRect(x - Math.round(w/2), y - Math.round(h/2), w, h, dir, color1, color2);
	}
	var scopeX = screen_x / 2;
	var scopeY = screen_y / 2;
	var last = false;
	var lasttick = 0;
	var m2Clicked = 0;
	var maxLength = (screen_x / 7);
	var zoomTime = 0;
	var animationInProgress = false;
	
	function easeInOutQuad(currentTime, startValue, changeValue, duration) {
		currentTime /= duration / 2;
		if (currentTime < 1) return changeValue / 2 * currentTime * currentTime + startValue;
		currentTime--;
		return - changeValue / 2 * (currentTime * (currentTime - 2) - 1) + startValue;
	}

	function drawCustomScopeline(){
		if (Entity_GetProp(localPlayer, "CCSPlayer", "m_bIsScoped")) {
			var curLength = Math.min(easeInOutQuad(Math.min(0.2, dhdjTime - zoomTime), 25, maxLength, 0.2), maxLength);
			animationInProgress = false;
		} else {
			var curLength = Math.min(maxLength - easeInOutQuad(Math.min(0.2, dhdjTime - zoomTime), 0, maxLength, 0.2), maxLength);
			animationInProgress = curLength != 0;
		}
		var sizeX = curLength * (1 - Local_GetInaccuracy());

		var sizeX2 = 25;
		var sizeY = 2;
		var off = (sizeX / 2 + 20);
		var off_rounded = Math.round(off);
		var off2 = sizeX2 / 2 + 5;
		var c2 = [getColor("Scope Color 2")[0], getColor("Scope Color 2")[1], getColor("Scope Color 2")[2], 255];
		var c1 = [getColor("Scope Color 1")[0], getColor("Scope Color 1")[1], getColor("Scope Color 1")[2], 0];
		if (Input.IsKeyPressed(0x02)) {
			m2Clicked = true;
		}
		if (Entity_GetProp(localPlayer, "CCSPlayer", "m_bIsScoped") && Entity_IsAlive(localPlayer)) {
			Convar_SetFloat("r_drawvgui", 0);
			if (last === false) {
				zoomTime = dhdjTime;
				last = true;
			}
			rect(scopeX - off + sizeY, scopeY, sizeX, sizeY, 1, c1, c2);
			rect(scopeX + off_rounded, scopeY, sizeX, sizeY, 1, c2, c1);
			rect(scopeX, scopeY - off + sizeY, sizeY, sizeX, 0, c1, c2);
			rect(scopeX, scopeY + off_rounded, sizeY, sizeX, 0, c2, c1);
		} else {
			drawVgui = 0;
			if (animationInProgress) {
				rect(scopeX - off + sizeY, scopeY, sizeX, sizeY, 1, c1, c2);
				rect(scopeX + off_rounded, scopeY, sizeX, sizeY, 1, c2, c1);
				rect(scopeX, scopeY - off + sizeY, sizeY, sizeX, 0, c1, c2);
				rect(scopeX, scopeY + off_rounded, sizeY, sizeX, 0, c2, c1);
			} else {
				rect(scopeX - off2 + sizeY, scopeY, sizeX2, sizeY, 1, c1, c2);
				rect(scopeX + off2, scopeY, sizeX2, sizeY, 1, c2, c1);
				rect(scopeX, scopeY - off2 + sizeY, sizeY, sizeX2, 0, c1, c2);
				rect(scopeX, scopeY + off2, sizeY, sizeX2, 0, c2, c1);
			}
			if (!Entity_GetProp(localPlayer, "CCSPlayer", "m_bResumeZoom")) {
				Convar_SetFloat("r_drawvgui", 1);
				if (last === true) {
					zoomTime = dhdjTime;
					Cheat_ExecuteCommand("crosshair 0");
					last = false;
				}
			} else {
				if (last === true) {
					zoomTime = dhdjTime;
					last = false;
				}
			}
		}
		if (m2Clicked) {
			m2Clicked = false;
			Convar_SetFloat("r_drawvgui", 0);
		}
	}
	
	function drawDesyncSize(){
		var negativeColor =getColor("Desync Color");
		desyncSize = Math.abs(normalizeYaw(Local.GetRealYaw() - Local.GetFakeYaw()));
        desyncSize = (desyncSize > 120) ? 120 : desyncSize;
		Render.String(screen_size[0]/2,screen_size[1]/2+45,1,desyncSize.toFixed(0)+"",[255,255,255,150],10);
		desyncSize60=desyncSize = (desyncSize > 60) ? 60 : desyncSize;
		Render.GradientRect(screen_size[0]/2-Math.floor(120*(desyncSize60/60)),screen_size[1]/2+65,Math.floor(120*(desyncSize60/60)),5,1,[negativeColor[0],negativeColor[1],negativeColor[2],0],negativeColor);
		Render.GradientRect(screen_size[0]/2,screen_size[1]/2+65,Math.floor(120*(desyncSize60/60)),5,1,negativeColor,[negativeColor[0],negativeColor[1],negativeColor[2],0]);
	}

	var dx1 = 0,
		dy1 = 0,
		dx2 = 0,
		dy2 = 0,
		dx3 = 0,
		dy3 = 0,
		dx5 = 0,
		dy5 = 0,
		dx6 = 0,
		dy6 = 0;

	function dragMenuItems() {
		cursorPos = Input.GetCursorPosition();
		if (Input.IsKeyPressed(0x01)) {
			if (cursorPos[0] >= getValue("x6") && cursorPos[1] >= getValue("y6") + 2 && cursorPos[0] <= getValue("x6") + 260 && cursorPos[1] <= getValue("y6") + 40 + 20 * (Object.getOwnPropertyNames(enemyWeapons)
				.length)) {
				if (dx6 != 0 && dy6 != 0) {
					setValue("x6", cursorPos[0] - dx6);
					setValue("y6", cursorPos[1] - 2 - dy6);
				}
				dx6 = cursorPos[0] - (getValue("x6"));
				dy6 = cursorPos[1] - (getValue("y6") + 2);
			} else
			if (cursorPos[0] >= getValue("x5") && cursorPos[1] >= getValue("y5") + 2 && cursorPos[0] <= getValue("x5") + 260 && cursorPos[1] <= getValue("y5") + 167) {
				if (dx5 != 0 && dy5 != 0) {
					setValue("x5", cursorPos[0] - dx5);
					setValue("y5", cursorPos[1] - 2 - dy5);
				}
				dx5 = cursorPos[0] - (getValue("x5"));
				dy5 = cursorPos[1] - (getValue("y5") + 2);
			} else
			if (cursorPos[0] >= getValue("x3") && cursorPos[1] >= getValue("y3") + 2 && cursorPos[0] <= getValue("x3") + 260 && cursorPos[1] <= getValue("y3") + 102) {
				if (dx3 != 0 && dy3 != 0) {
					setValue("x3", cursorPos[0] - dx3);
					setValue("y3", cursorPos[1] - 2 - dy3);
				}
				dx3 = cursorPos[0] - (getValue("x3"));
				dy3 = cursorPos[1] - (getValue("y3") + 2);
			} else
			if (cursorPos[0] >= getValue("x2") + 45 && cursorPos[1] >= getValue("y2") + 2 && cursorPos[0] <= getValue("x2") + 305 && cursorPos[1] <= getValue("y2") + 242) {
				if (dx2 != 0 && dy2 != 0) {
					setValue("x2", cursorPos[0] - 45 - dx2);
					setValue("y2", cursorPos[1] - 2 - dy2);
				}
				dx2 = cursorPos[0] - (getValue("x2") + 45);
				dy2 = cursorPos[1] - (getValue("y2") + 2);
			} else
			if (cursorPos[0] >= getValue("x1") + 45 && cursorPos[1] >= getValue("y1") + 2 && cursorPos[0] <= getValue("x1") + 305 && cursorPos[1] <= getValue("y1") + 57) {
				if (dx1 != 0 && dy1 != 0) {
					setValue("x1", cursorPos[0] - 45 - dx1);
					setValue("y1", cursorPos[1] - 2 - dy1);
				}
				dx1 = cursorPos[0] - (getValue("x1") + 45);
				dy1 = cursorPos[1] - (getValue("y1") + 2);
			}
		} else {
			dx1 = 0;
			dy1 = 0;
			dx2 = 0;
			dy2 = 0;
			dx3 = 0;
			dy3 = 0;
			dx5 = 0;
			dy5 = 0;
			dx6 = 0;
			dy6 = 0;
		}
	}

	var enemyWeapons = {};
	var lastEnemyWeapons = {};
	var noUpdate = 0;
	
	function UI_onItemPurchase(){
		if(!getValue("Show Enemy Weapons")){return;}
		//Cheat.PrintChat(Event.GetString("weapon")+"\n");
		if (Entity.IsEnemy(Entity.GetEntityFromUserID(Event.GetInt("userid"))) && buyList[Event.GetString("weapon")] != undefined && (enemyWeapons[Entity.GetName(Entity.GetEntityFromUserID(Event.GetInt("userid")))]==undefined || enemyWeapons[Entity.GetName(Entity.GetEntityFromUserID(Event.GetInt("userid")))].indexOf(buyList[Event.GetString("weapon")])==-1)) {
			if(enemyWeapons[Entity.GetName(Entity.GetEntityFromUserID(Event.GetInt("userid")))]==undefined){
				enemyWeapons[Entity.GetName(Entity.GetEntityFromUserID(Event.GetInt("userid")))]=getRandomInteger(0,10)+"P";
			}
			enemyWeapons[Entity.GetName(Entity.GetEntityFromUserID(Event.GetInt("userid")))]+=buyList[Event.GetString("weapon")];
			//Cheat.PrintChat(Entity.GetName(Entity.GetEntityFromUserID(Event.GetInt("userid")))+" bought "+Event.GetString("weapon")+enemyWeapons[Entity.GetName(Entity.GetEntityFromUserID(Event.GetInt("userid")))]+"\n");
		}
	}
	
	function UI_onPlayerDeath(){
		if(getValue("Show Enemy Weapons")){
			if(Entity.IsEnemy(Entity.GetEntityFromUserID(Event.GetInt("userid")))){
				delete enemyWeapons[Entity.GetName(Entity.GetEntityFromUserID(Event.GetInt("userid")))];
			}
		}
		if(getValue("Premium Anti-Aim") && getValue("Resolver Resolver") && UI.IsHotkeyActive("Anti-Aim", "Extra", "Slow walk")){
			if(Entity.GetEntityFromUserID(Event.GetInt("userid"))==Entity.GetLocalPlayer()){
				if(getHotkey("Inverter")){
					resolverInvert=false;
				}else{
					resolverInvert=true;
				}
				resolvers[Entity.GetEntityFromUserID(Event.GetInt("attacker"))]=resolverInvert;
				closestEnemy=0;
			}
		}
		if (Entity_GetEntityFromUserID(Event_GetInt("attacker")) === localPlayer) {
			if (getValue("Peek Return On Enemy Death")) {
				peekReturn = true;
			}
		}
	}
	function UI_onPlayerConnectFull(){
		if(getValue("Show Enemy Weapons")){
			enemyWeapons = {};
		}
		if(Entity.GetEntityFromUserID(Event.GetInt("userid"))==Entity.GetLocalPlayer()){
		enableAA=true;
		if(getValue("Resolver Resolver")){
			resolvers = {};
		}
	}
	}
	var previousEnemies=[];
	function drawEnemyWeapons(xx, y) {
		//if(!valve)return;
		if (getFrameCount() % frameLimit == 0) {
			all_enemies = Entity.GetEnemies();
			living_enemies = [];
			for (i = 0; i < all_enemies.length; i++) {
				if (Entity.IsAlive(all_enemies[i]) && !Entity.IsDormant(all_enemies[i])) {
					living_enemies.push(all_enemies[i]);
					//Cheat.PrintChat(Entity.GetProp(all_enemies[i], "CCSPlayer", "m_iWeaponPurchasesThisRound")+"\n");
				}
			}
			for (i = 0; i < living_enemies.length; i++) {
				enemyWeapons[Entity.GetName(living_enemies[i])] = "";
				weapons = Entity.GetWeapons(living_enemies[i]);
				for (x = 0; x < weapons.length; x++) {
					weapon = (Entity.GetProp(weapons[x], "CBaseAttributableItem", "m_iItemDefinitionIndex") & 0xFFFF);
					if (iconList[weapon] != undefined) {
						enemyWeapons[Entity.GetName(living_enemies[i])] += iconList[weapon];
					}
				}
				if (Entity.GetProp(living_enemies[i], "CCSPlayer", "m_bHasHelmet")) {
					enemyWeapons[Entity.GetName(living_enemies[i])] += "T";
				}
				if (Entity.GetProp(living_enemies[i], "CCSPlayerResource", "m_iArmor") > 0) {
					enemyWeapons[Entity.GetName(living_enemies[i])] += "S";
				}
				if (Entity.GetProp(living_enemies[i], "CCSPlayer", "m_bHasDefuser")) {
					enemyWeapons[Entity.GetName(living_enemies[i])] += "U";
				}
			}
			if (JSON.stringify(lastEnemyWeapons) == JSON.stringify(enemyWeapons)) {
				if (noUpdate < 100) {
					noUpdate++;
				}
			} else {
				noUpdate = 0;
			}
			lastEnemyWeapons = duplicate(enemyWeapons);
		}
		if (getValue("Hide Automatically") && noUpdate > 20) {
			return;
		}
		Render.FilledRect(xx, y + 2, 260, 40 + 20 * (Object.getOwnPropertyNames(enemyWeapons)
			.length), theme_background_border); // background
		Render.Rect(xx, y + 2, 260, 40 + 20 * (Object.getOwnPropertyNames(enemyWeapons)
			.length), theme_background_margin);
		Render.FilledRect(xx + 5, y + 7, 250, 30 + 20 * (Object.getOwnPropertyNames(enemyWeapons)
			.length), theme_background_content); // background1
		Render.String(xx + 130, y + 12, 1, "ENEMY  WEAPONS", theme_text, 3);
		drawFilledOrRainbowRect(xx + 10, y + 25, 240, 3, true); // lol
		i = 0;
		/*
		Render.String(x-1000, y + 135, 0, "abcdefghijklmnopqrstuvwxyz", theme_text, 5);
		Render.String(x-1000, y + 155, 0, "ABCDEFGHIJKLMNOPQRSTUVWXYZ", theme_text, 5);
		Render.String(x-1000, y + 175, 0, "1234567890", theme_text, 5);
		Render.String(x-1000, y + 195, 0, "!@#$%^&*()_+-=", theme_text, 5);
		*/
		Object.keys(enemyWeapons)
			.forEach(function(key) {
				//if(key.length>10){key="";}
				//Render.StringCustom(xx + 15, y + 35 + i * 20, 0, key, theme_text, theme_font);
				Render.String(xx + 15 /*+ key.length * 8*/, y + 35 + i * 20, 0, enemyWeapons[key], theme_text, 5);
				i++;
			});
	}

	function drawFakeDuckIndicator() {
		eyePos = Entity.GetEyePosition(Entity.GetLocalPlayer());
		origin = Entity.GetRenderOrigin(Entity.GetLocalPlayer());
		eyePos[2] = origin[2] + 46 + (18 - (maxLevel + 1) / 100 * 18);
		screenPos = Render.WorldToScreen(eyePos);
		Render.FilledCircle(screenPos[0] + 1, screenPos[1], 7, [0, 0, 0, 150]);
		Render.Circle(screenPos[0] + 1, screenPos[1], 7, [255, 255, 255, 255]);
	}
	var lastFireEyePos = [0, 0, 0];
	var firedByRageBot = false;
	
	function UI_onBulletImpact() {
		if (!getValue("Show Bullet Tracer")) return;
		player = Entity.GetEntityFromUserID(Event.GetInt("userid"));
		if (Entity.GetLocalPlayer() !== player) return;
		if (bullets.length > 20) bullets = [];
		eyePos = lastFireEyePos;
		bullets.push({
			"impact": [Event.GetFloat("x"), Event.GetFloat("y"), Event.GetFloat("z")],
			"origin": eyePos,
			"time": Globals.Curtime()
		});
	}

	function drawBulletTracer() {
		if (bullets.length < 1) return;
		for (i = 0; i < bullets.length; i++) {
			if (bullets[i] != undefined) {
				if (bullets[i]["time"] + 2 < Globals.Curtime() || bullets[i]["time"] < 1 || bullets[i]["time"] == undefined) {
					delete bullets[i];
				} else {
					var impact = Render.WorldToScreen(bullets[i]["impact"]);
					var origin = Render.WorldToScreen(bullets[i]["origin"]);
					if (origin != undefined && impact != undefined) {
					if (origin[2] === 0 || impact[2] === 0) {
						var maximumTrial = 20;
						var trials = 0;
						var newOrigin = duplicate(bullets[i]["origin"]);
						while (origin[2] === 0 && impact[2] != 0) {
							var vector = [bullets[i]["impact"][0] - bullets[i]["origin"][0], bullets[i]["impact"][1] - bullets[i]["origin"][1], bullets[i]["impact"][2] - bullets[i]["origin"][2]];
							newOrigin[0] += vector[0] * 0.05;
							newOrigin[1] += vector[1] * 0.05;
							newOrigin[2] += vector[2] * 0.05;
							origin = Render.WorldToScreen(newOrigin);
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
							impact = Render.WorldToScreen(newImpact);
							trials++;
							if (trials >= maximumTrial) {
								break;
							}
						}
					}
					Render.Line(impact[0], impact[1], origin[0], origin[1], getColor("Bullet Tracer Color"));
					var step = Math.floor(getColor("Bullet Tracer Color")[3] / getValue("Bullet Tracer Thickness"));
					for (var x = 1; x < getValue("Bullet Tracer Thickness"); x++) {
						Render.Line(impact[0] + (x - 1), impact[1], origin[0] + x, origin[1], [getColor("Bullet Tracer Color")[0], getColor("Bullet Tracer Color")[1], getColor("Bullet Tracer Color")[2], getColor("Bullet Tracer Color")[3] - (x * step)]);
						Render.Line(impact[0], impact[1] + (x - 1), origin[0], origin[1] + x, [getColor("Bullet Tracer Color")[0], getColor("Bullet Tracer Color")[1], getColor("Bullet Tracer Color")[2], getColor("Bullet Tracer Color")[3] - (x * step)]);
						Render.Line(impact[0] - (x - 1), impact[1], origin[0] - x, origin[1], [getColor("Bullet Tracer Color")[0], getColor("Bullet Tracer Color")[1], getColor("Bullet Tracer Color")[2], getColor("Bullet Tracer Color")[3] - (x * step)]);
						Render.Line(impact[0], impact[1] - (x - 1), origin[0], origin[1] - x, [getColor("Bullet Tracer Color")[0], getColor("Bullet Tracer Color")[1], getColor("Bullet Tracer Color")[2], getColor("Bullet Tracer Color")[3] - (x * step)]);
					}
					}
				}
			}
		}
	}

	function getDistance(A, B) {
		return Math.sqrt(Math.pow(A[0] - B[0], 2) + Math.pow(A[1] - B[1], 2) + Math.pow(A[2] - B[2], 2));
	}

	function drawDeathMark() {
		enemies = Entity.GetEnemies();
		deathMark = Render.AddTexture("ot/scripts/death.png");
		for (i = 0; i < enemies.length; i++) {
			pos = Entity.GetHitboxPosition(enemies[i], 0);
			if (Entity.IsValid(enemies[i]) && Entity.IsAlive(enemies[i]) && !Entity.IsDormant(enemies[i]) && pos != 0 && pos != [0, 0, 0] && pos != undefined) {
				playerLocation[enemies[i]] = pos;
				deathTime[enemies[i]] = 0;
			}
			if (!Entity.IsAlive(enemies[i]) && playerLocation[enemies[i]] != undefined) {
				if (deathTime[enemies[i]] < 300) {
					deathTime[enemies[i]]++;
					playerLocation[enemies[i]][2]++;
					myself = Entity.GetRenderOrigin(Entity.GetLocalPlayer());
					distance_to_pic = Math.sqrt(Math.pow(playerLocation[enemies[i]][0] - myself[0], 2) + Math.pow(playerLocation[enemies[i]][1] - myself[1], 2) + Math.pow(playerLocation[enemies[i]][2] - myself[2], 2));
					if (distance_to_pic > 1000) distance_to_pic = 1000;
					screenpos = Render.WorldToScreen(playerLocation[enemies[i]]);
					//Render.TexturedRect( screenpos[0]-200*((1000-distance_to_pic)/1000), screenpos[1]-200*((1000-distance_to_pic)/1000), 400*((1000-distance_to_pic)/1000), 400*((1000-distance_to_pic)/1000), deathMark );
					Render.TexturedRect(screenpos[0] - 80 * ((1000 - distance_to_pic) / 1000), screenpos[1] - 80 * ((1000 - distance_to_pic) / 1000), 160 * ((1000 - distance_to_pic) / 1000), 160 * ((1000 - distance_to_pic) / 1000), deathMark);
				}
			}
		}
	}

	//HAHAHAHAHA
	//DHDJ PASTER
	//BOTTOM TEXT

	// Pasted from https://www.onetap.com/threads/release-cornflakes-indicator-script.27327/. LOLLOLLOLLOLLOL
	function normalizeYaw(angle) {
		angle = (angle % 360 + 360) % 360;
		return angle > 180 ? angle - 360 : angle;
	}

	function drawKeybindStates() {
		//Cheat.Print(getValue("Show Keybind States")+"\n");
		if (getValue("Show Keybind States") & (1 << 0) && getValue("Premium Anti-Aim")) {
			if (getHotkey("Inverter")) {
				keybinds.push("INVERT");
			}
		}
		if (getValue("Show Keybind States") & (1 << 1) && getValue("Premium Anti-Aim")) {
			if (getHotkey("Legit AA On Key")) {
				keybinds.push("LEGIT");
			}
		}
		if (getValue("Show Keybind States") & (1 << 2) && getValue("Better Weapon Config")) {
			if (getHotkey("Minimum Damage")) {
				keybinds.push("MINDMG");
			}
			/* else if (UI.IsHotkeyActive("Rage", "GENERAL", "Exploits", "Doubletap")) {
							keybinds.push("DTDMG");
						}*/
		}
		if (getValue("Show Keybind States") & (1 << 3) && getValue("Better Weapon Config")) {
			if (getHotkey("Minimum Accuracy")) {
				keybinds.push("MINAC");
			}
			/* else if (UI.IsHotkeyActive("Rage", "GENERAL", "Exploits", "Doubletap")) {
							keybinds.push("DTAC");
						}*/
		}
		if (getValue("Show Keybind States") & (1 << 4) && getValue("Play Style") == 1) {
			if (getHotkey("Maximum FOV On Key")) {
				keybinds.push("FOV");
			}
		}
		if (getValue("Show Keybind States") & (1 << 5) && fakeLagMode != 0) {
			if (getHotkey("Maximum Fake Lag")) {
				keybinds.push("LAG");
			}
		}
		if (getValue("Show Keybind States") & (1 << 6)) {
			if (UI.IsHotkeyActive("Anti-Aim", "Extra", "Slow walk")) {
				keybinds.push("SLOW-WALK");
			}
		}
		if (getValue("Show Keybind States") & (1 << 7) && getValue("Play Style") == 1) {
			if (getValue("Auto Wall Mode") == 1) {
				keybinds.push("LEGIT AUTO-WALL");
			} else if (getValue("Auto Wall Mode") == 2) {
				keybinds.push("RAGE AUTO-WALL");
			}
		}
		if (getValue("Show Keybind States") & (1 << 8)) {
			if (UI.IsHotkeyActive("Anti-Aim", "Extra", "Fake duck")) {
				keybinds.push("FAKE-DUCK");
			}
		}
		if (getValue("Show Keybind States") & (1 << 9)) {
			if (UI.IsHotkeyActive("Rage", "GENERAL", "Exploits", "Hide shots")) {
				keybinds.push("HIDE SHOTS");
			}
		}
		if (getValue("Show Keybind States") & (1 << 10)) {
			if (UI.IsHotkeyActive("Rage", "GENERAL", "Exploits", "Doubletap")) {
				keybinds.push("DT");
			}
		}
		drawAllKeybinds();
		keybinds = [];
	}

	function drawAllKeybinds() {
		x4 = screen_x / 2;
		y4 = (screen_y / 2) + 70;
		for (i = 0; i < keybinds.length; i++) {
			Render.StringCustom(x4, y4, 1, keybinds[i], getColor("UI Color"), theme_font);
			if (keybinds[i] == "DT") {
				Render.FilledRect(x4 - (16 - Math.floor(Exploit.GetCharge() * 32)), y4 + 20, 32 - Math.floor(Exploit.GetCharge() * 32), 3, [0, 0, 0, 100]);
				Render.FilledRect(x4 - 16, y4 + 20, Math.floor(Exploit.GetCharge() * 32), 3, getColor("UI Color"));
			}
			y4 += 15;
		}
	}

	function UI_onWeaponFire() {
		if (Entity.IsLocalPlayer(Entity.GetEntityFromUserID(Event.GetInt("userid")))) {
			if (shot[Entity.GetName(Entity.GetWeapon(Entity.GetLocalPlayer()))] == undefined) {
				shot[Entity.GetName(Entity.GetWeapon(Entity.GetLocalPlayer()))] = 1;
			} else {
				shot[Entity.GetName(Entity.GetWeapon(Entity.GetLocalPlayer()))]++;
			}
		}
		if (getValue("Show Bullet Tracer")) {
			if (firedByRageBot) {
				firedByRageBot = false;
			} else {
				lastFireEyePos = Entity.GetEyePosition(localPlayer);
			}
		}
	}

	function UI_onPlayerHurt() {
		if (Entity.IsLocalPlayer(Entity.GetEntityFromUserID(Event.GetInt("attacker")))) {
			if (hit[Entity.GetName(Entity.GetWeapon(Entity.GetLocalPlayer()))] == undefined) {
				hit[Entity.GetName(Entity.GetWeapon(Entity.GetLocalPlayer()))] = 1;
			} else {
				hit[Entity.GetName(Entity.GetWeapon(Entity.GetLocalPlayer()))]++;
			}
			if (damageList.length > 100) {
				damageList = [];
			}
			damageList.push({
				"target": Entity.GetName(Entity.GetEntityFromUserID(Event.GetInt('userid'))),
				"weapon": getWeaponIcon(Entity.GetLocalPlayer()),
				"damage": Event.GetInt('dmg_health'),
				"hitbox": getHitboxName(Event.GetInt('hitgroup'))
			});
		}
	}

	function drawHitAndMiss(x, y) {
		if (shot[Entity.GetName(Entity.GetWeapon(Entity.GetLocalPlayer()))] == undefined) shot[Entity.GetName(Entity.GetWeapon(Entity.GetLocalPlayer()))] = 0;
		if (hit[Entity.GetName(Entity.GetWeapon(Entity.GetLocalPlayer()))] == undefined) hit[Entity.GetName(Entity.GetWeapon(Entity.GetLocalPlayer()))] = 0;
		if (getFrameCount() % frameLimit == 35) {
			percentage = (shot[Entity.GetName(Entity.GetWeapon(Entity.GetLocalPlayer()))] == 0) ? 1 : hit[Entity.GetName(Entity.GetWeapon(Entity.GetLocalPlayer()))] / shot[Entity.GetName(Entity.GetWeapon(Entity.GetLocalPlayer()))];
			percentage = (percentage > 1) ? 1 : percentage;
			shotSum = 0;
			hitSum = 0;
			Object.keys(shot)
				.forEach(function(key) {
					shotSum += shot[key];
				});
			Object.keys(hit)
				.forEach(function(key) {
					hitSum += hit[key];
				});
			percentageSum = (shotSum == 0) ? 1 : hitSum / shotSum;
			percentageSum = (percentageSum > 1) ? 1 : percentageSum;
		}
		Render.FilledRect(x, y + 2, 260, 100, theme_background_border); // background
		Render.Rect(x, y + 2, 260, 100, theme_background_margin);
		Render.FilledRect(x + 5, y + 7, 250, 90, theme_background_content); // background1
		Render.String(x + 130, y + 12, 1, "HIT | MISS", theme_text, 3);
		drawFilledOrRainbowRect(x + 10, y + 25, 240, 3, true); // lol
		Render.StringCustom(x + 15, y + 35, 0, "Weapon: " + Entity.GetName(Entity.GetWeapon(Entity.GetLocalPlayer())) + " shot: " + shot[Entity.GetName(Entity.GetWeapon(Entity.GetLocalPlayer()))] + " hit: " + hit[Entity.GetName(Entity.GetWeapon(Entity.GetLocalPlayer()))], theme_text, theme_font);
		Render.StringCustom(x + 15, y + 55, 0, "Current " + (percentage * 100)
			.toFixed(0) + "%", theme_text, theme_font);
		Render.Rect(x + 100, y + 60, 145, 6, theme_bar_border);
		drawFilledOrRainbowRect(x + 100, y + 61, Math.floor(145 * percentage), 4, false);
		Render.StringCustom(x + 15, y + 75, 0, "Total " + (percentageSum * 100)
			.toFixed(0) + "%", theme_text, theme_font);
		Render.Rect(x + 100, y + 80, 145, 6, theme_bar_border);
		drawFilledOrRainbowRect(x + 100, y + 81, Math.floor(145 * percentageSum), 4, false);
	}

	function drawDamageGiven(xx, yy) {
		Render.FilledRect(xx, yy + 2, 260, 165, theme_background_border); // background
		Render.Rect(xx, yy + 2, 260, 165, theme_background_margin);
		Render.FilledRect(xx + 5, yy + 7, 250, 155, theme_background_content); // background1
		Render.String(xx + 130, yy + 12, 1, "DAMAGE GIVEN", theme_text, 3);
		drawFilledOrRainbowRect(xx + 10, yy + 25, 240, 3, true); // lol
		Render.StringCustom(xx + 15, yy + 35, 0, "Target", theme_text, theme_font);
		Render.StringCustom(xx + 70, yy + 35, 0, "Weapon", theme_text, theme_font);
		Render.StringCustom(xx + 135, yy + 35, 0, "Damage", theme_text, theme_font);
		Render.StringCustom(xx + 195, yy + 35, 0, "Hitbox", theme_text, theme_font);

		if (damageList.length == 0) return;
		x = 0;
		for (i = damageList.length - 1; i > damageList.length - 6; i--) {
			if (i < 0) break;
			Render.StringCustom(xx + 15, yy + 55 + (20 * x), 0, damageList[i]["target"], theme_text, theme_font);
			Render.String(xx + 70, yy + 55 + (20 * x), 0, damageList[i]["weapon"].toString(), theme_text, 5);
			Render.StringCustom(xx + 160, yy + 55 + (20 * x), 1, damageList[i]["damage"].toString(), theme_text, theme_font);
			Render.StringCustom(xx + 195, yy + 55 + (20 * x), 0, damageList[i]["hitbox"].toString(), theme_text, theme_font);
			x++;
		}
	}

	function UI_onRoundStart() {
		deathTime = [];
	}

	function getHitboxName(index) {
		return hitboxes[index] || 'Generic';
	}

	function drawRainbow() {
		colors = HSV2RGB(Global.Realtime() * 0.5, 1, 1);
		if (getValue("Top Bar") == 1) {
			Render.GradientRect(0, 0, screen_x, 3, 1, [colors.g, colors.b, colors.r, 255], [colors.r, colors.g, colors.b, 255]);
		} else if (getValue("Top Bar") == 2) {
			Render.GradientRect(0, 0, screen_x, 3, 1, [colors.r, colors.b, colors.b, 255], [colors.b, colors.g, colors.r, 255]);
		} else {
			Render.GradientRect(0, 0, screen_x, 3, 1, [colors.r, colors.b, colors.b, 255], [colors.r, colors.g, colors.g, 255]);
		}
	}

	function drawFilledOrRainbowRect(x, y, a, b, separator) {
		if (theme_rainbow) {
			Render.GradientRect(x, y, a, b, 1, [colors.g, colors.b, colors.r, 255], [colors.r, colors.g, colors.b, 255]);
		} else {
			if (separator) {
				if (theme_bar_separator == false) {
					Render.FilledRect(x, y, a, b, theme_bar_content);
				} else {
					Render.GradientRect(x, y, a, b, 1, [colors.g, colors.b, colors.r, 255], [colors.r, colors.g, colors.b, 255]);
				}
			} else {
				Render.FilledRect(x, y, a, b, theme_bar_content);
			}
		}
	}

	function drawStatusIndicator(x, y) {
		targetName = rageTarget == 0 ? "None" : Entity.GetName(rageTarget);
		headScale = 100;
		bodyScale = 100;
		expectedDamage = UI.GetValue("Rage", weaponSettings[currentWeapon][0].toUpperCase(), "Targeting", "Minimum damage");
		desyncSize = Math.abs(normalizeYaw(Local.GetRealYaw() - Local.GetFakeYaw()));
		desyncSize = (desyncSize > 120) ? 120 : desyncSize;
		fakeLagMax = valve ? 6 : 15;
		fakeLag=UI.GetValue("Anti-Aim","Fake-Lag","Limit");
		rageFOV = UI.GetValue("Rage", weaponSettings[currentWeapon][0].toUpperCase(), "Targeting", "FOV");
		FOVMax = (getValue("Play Style") == 1 && getValue("Dynamic FOV") && getValue("Max FOV") != 0) ? getValue("Max FOV") : 180;
		accuracy = ((1 - Local.GetInaccuracy()) * 100)
			.toFixed(2);

		Render.FilledRect(x + 45, y + 2, 260, 240, theme_background_border); // background
		Render.Rect(x + 45, y + 2, 260, 240, theme_background_margin);
		Render.FilledRect(x + 50, y + 7, 250, 230, theme_background_content); // background1
		Render.String(x + 175, y + 12, 1, "STATUS", theme_text, 3);
		drawFilledOrRainbowRect(x + 55, y + 25, 240, 3, true); // lol
		Render.StringCustom(x + 60, y + 35, 0, "Current Target: " + targetName, theme_text, theme_font);
		Render.StringCustom(x + 60, y + 55, 0, "Head Scale ", theme_text, theme_font);
		Render.Rect(x + 135, y + 59, 155, 6, theme_bar_border);
		drawFilledOrRainbowRect(x + 135, y + 60, Math.floor(155 * (headScale / 100)), 4, false);
		Render.StringCustom(x + 60, y + 75, 0, "Body Scale ", theme_text, theme_font);
		Render.Rect(x + 135, y + 79, 155, 6, theme_bar_border);
		drawFilledOrRainbowRect(x + 135, y + 80, Math.floor(155 * (bodyScale / 100)), 4, false);
		Render.StringCustom(x + 60, y + 95, 0, "Damage Mode: " + damageMode, theme_text, theme_font);
		Render.StringCustom(x + 60, y + 115, 0, "Expected Damage: " + expectedDamage + "HP", theme_text, theme_font);
		Render.StringCustom(x + 60, y + 135, 0, "Anti-Aim Mode: " + aaMode, theme_text, theme_font);
		Render.StringCustom(x + 60, y + 155, 0, "Desync ", theme_text, theme_font);
		Render.Rect(x + 135, y + 159, 155, 6, theme_bar_border);
		drawFilledOrRainbowRect(x + 135, y + 160, Math.floor(155 * (desyncSize / 120)), 4, false);
		Render.StringCustom(x + 60, y + 175, 0, "Fake Lag ", theme_text, theme_font);
		Render.Rect(x + 135, y + 179, 155, 6, theme_bar_border);
		drawFilledOrRainbowRect(x + 135, y + 180, Math.floor(155 * (fakeLag / fakeLagMax)), 4, false);
		Render.StringCustom(x + 60, y + 195, 0, "Rage FOV ", theme_text, theme_font);
		Render.Rect(x + 135, y + 199, 155, 6, theme_bar_border);
		drawFilledOrRainbowRect(x + 135, y + 200, Math.floor(155 * (rageFOV / FOVMax)), 4, false);
		Render.StringCustom(x + 60, y + 215, 0, "Accuracy ", theme_text, theme_font);
		Render.Rect(x + 135, y + 219, 155, 6, theme_bar_border);
		drawFilledOrRainbowRect(x + 135, y + 220, Math.floor(155 * (accuracy / 100)), 4, false);
	}
	//pasted!

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

				Render.Line(cx, cy, cx2, cy2, color);
			}
		}
	}

	function drawDirectionIndicator() {
		var circleColor=[255, 255, 255, 40];
		var fakeBorderColor = getColor("Fake Angle");
		var realBorderColor = getColor("Real Angle");
		Render.Circle(screen_x / 2, screen_y / 2, 34, circleColor);
		Render.Circle(screen_x / 2, screen_y / 2, 35, circleColor);
		Render.Circle(screen_x / 2, screen_y / 2, 31, circleColor);
		Render.Circle(screen_x / 2, screen_y / 2, 32, circleColor);
		Render.Circle(screen_x / 2, screen_y / 2, 33, circleColor);
		var viewYaw = Local.GetViewAngles()[1] - 180;
		var fake = adjustAngle(Local.GetFakeYaw()-viewYaw);
		var real = adjustAngle(Local.GetRealYaw()-viewYaw);
		drawArc(screen_x/2,screen_y/2,35,real - (50 * 0.5),50,5,realBorderColor);
		drawArc(screen_x/2,screen_y/2,35,fake - (50 * 0.5),50,5,fakeBorderColor);
	}

	function drawDesyncIndicator() {
		var fakeBorderColor = getColor("Fake Angle");
		var realBorderColor = getColor("Real Angle");
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
		if (getValue("Desync Indicator") == 1) {
		if (getValue("Inverter")) {
			Render.Line(screen_x / 2 + 75, screen_y / 2 + 14, screen_x / 2 + 75, screen_y / 2 - 14, realBorderColor);
			Render.Line(screen_x / 2 + 75, screen_y / 2 - 14, screen_x / 2 + 100, screen_y / 2, realBorderColor);
			Render.Line(screen_x / 2 + 100, screen_y / 2, screen_x / 2 + 75, screen_y / 2 + 14, realBorderColor);
			Render.Line(screen_x / 2 - 75, screen_y / 2 + 14, screen_x / 2 - 75, screen_y / 2 - 14, fakeBorderColor);
			Render.Line(screen_x / 2 - 75, screen_y / 2 - 14, screen_x / 2 - 100, screen_y / 2, fakeBorderColor);
			Render.Line(screen_x / 2 - 100, screen_y / 2, screen_x / 2 - 75, screen_y / 2 + 14, fakeBorderColor);
			Render.Polygon([[screen_x / 2 + 75, screen_y / 2 + 14], [screen_x / 2 + 75, screen_y / 2 - 14], [screen_x / 2 + 100, screen_y / 2]], realColor);
			Render.Polygon([[screen_x / 2 - 100, screen_y / 2], [screen_x / 2 - 75, screen_y / 2 - 14], [screen_x / 2 - 75, screen_y / 2 + 14]], fakeColor);
		} else {
			Render.Line(screen_x / 2 + 75, screen_y / 2 + 14, screen_x / 2 + 75, screen_y / 2 - 14, fakeBorderColor);
			Render.Line(screen_x / 2 + 75, screen_y / 2 - 14, screen_x / 2 + 100, screen_y / 2, fakeBorderColor);
			Render.Line(screen_x / 2 + 100, screen_y / 2, screen_x / 2 + 75, screen_y / 2 + 14, fakeBorderColor);
			Render.Line(screen_x / 2 - 75, screen_y / 2 + 14, screen_x / 2 - 75, screen_y / 2 - 14, realBorderColor);
			Render.Line(screen_x / 2 - 75, screen_y / 2 - 14, screen_x / 2 - 100, screen_y / 2, realBorderColor);
			Render.Line(screen_x / 2 - 100, screen_y / 2, screen_x / 2 - 75, screen_y / 2 + 14, realBorderColor);
			Render.Polygon([[screen_x / 2 + 75, screen_y / 2 + 14], [screen_x / 2 + 75, screen_y / 2 - 14], [screen_x / 2 + 100, screen_y / 2]], fakeColor);
			Render.Polygon([[screen_x / 2 - 100, screen_y / 2], [screen_x / 2 - 75, screen_y / 2 - 14], [screen_x / 2 - 75, screen_y / 2 + 14]], realColor);
		}
	} else if (getValue("Desync Indicator") === 2) {
		if (getValue("Inverter")) {
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
		if (getValue("Inverter")) {
			Render.Line(screen_x / 2 + 75, screen_y / 2 + 16, screen_x / 2 + 75, screen_y / 2, realBorderColor);
			Render.Line(screen_x / 2 + 75, screen_y / 2, screen_x / 2 + 100, screen_y / 2, realBorderColor);
			Render.Line(screen_x / 2 + 100, screen_y / 2, screen_x / 2 + 75, screen_y / 2 + 16, realBorderColor);
			Render.Line(screen_x / 2 - 100, screen_y / 2, screen_x / 2 - 75, screen_y / 2, fakeBorderColor);
			Render.Line(screen_x / 2 - 75, screen_y / 2, screen_x / 2 - 75, screen_y / 2 + 16, fakeBorderColor);
			Render.Line(screen_x / 2 - 75, screen_y / 2 + 16, screen_x / 2 - 100, screen_y / 2, fakeBorderColor);
			Render.Polygon([[screen_x / 2 + 75, screen_y / 2 + 16], [screen_x / 2 + 75, screen_y / 2], [screen_x / 2 + 100, screen_y / 2]], realColor);
			Render.Polygon([[screen_x / 2 - 100, screen_y / 2], [screen_x / 2 - 75, screen_y / 2], [screen_x / 2 - 75, screen_y / 2 + 16]], fakeColor);
		} else {
			Render.Line(screen_x / 2 + 75, screen_y / 2 + 16, screen_x / 2 + 75, screen_y / 2, fakeBorderColor);
			Render.Line(screen_x / 2 + 75, screen_y / 2, screen_x / 2 + 100, screen_y / 2, fakeBorderColor);
			Render.Line(screen_x / 2 + 100, screen_y / 2, screen_x / 2 + 75, screen_y / 2 + 16, fakeBorderColor);
			Render.Line(screen_x / 2 - 100, screen_y / 2, screen_x / 2 - 75, screen_y / 2, realBorderColor);
			Render.Line(screen_x / 2 - 75, screen_y / 2, screen_x / 2 - 75, screen_y / 2 + 16, realBorderColor);
			Render.Line(screen_x / 2 - 75, screen_y / 2 + 16, screen_x / 2 - 100, screen_y / 2, realBorderColor);
			Render.Polygon([[screen_x / 2 + 75, screen_y / 2 + 16], [screen_x / 2 + 75, screen_y / 2], [screen_x / 2 + 100, screen_y / 2]], fakeColor);
			Render.Polygon([[screen_x / 2 - 100, screen_y / 2], [screen_x / 2 - 75, screen_y / 2], [screen_x / 2 - 75, screen_y / 2 + 16]], realColor);
		}
	} else if (getValue("Desync Indicator") === 4) {
		if (getValue("Inverter")) {
			Render.Line(screen_x / 2 + 75, screen_y / 2 + 10, screen_x / 2 + 75, screen_y / 2 - 10, realBorderColor);
			Render.Line(screen_x / 2 + 75, screen_y / 2 - 10, screen_x / 2 + 90, screen_y / 2, realBorderColor);
			Render.Line(screen_x / 2 + 90, screen_y / 2, screen_x / 2 + 75, screen_y / 2 + 10, realBorderColor);
			Render.Line(screen_x / 2 - 75, screen_y / 2 + 10, screen_x / 2 - 75, screen_y / 2 - 10, fakeBorderColor);
			Render.Line(screen_x / 2 - 75, screen_y / 2 - 10, screen_x / 2 - 90, screen_y / 2, fakeBorderColor);
			Render.Line(screen_x / 2 - 90, screen_y / 2, screen_x / 2 - 75, screen_y / 2 + 10, fakeBorderColor);
			Render.Polygon([[screen_x / 2 + 75, screen_y / 2 + 10], [screen_x / 2 + 75, screen_y / 2 - 10], [screen_x / 2 + 90, screen_y / 2]], realColor);
			Render.Polygon([[screen_x / 2 - 90, screen_y / 2], [screen_x / 2 - 75, screen_y / 2 - 10], [screen_x / 2 - 75, screen_y / 2 + 10]], fakeColor);
		} else {
			Render.Line(screen_x / 2 + 75, screen_y / 2 + 10, screen_x / 2 + 75, screen_y / 2 - 10, fakeBorderColor);
			Render.Line(screen_x / 2 + 75, screen_y / 2 - 10, screen_x / 2 + 90, screen_y / 2, fakeBorderColor);
			Render.Line(screen_x / 2 + 90, screen_y / 2, screen_x / 2 + 75, screen_y / 2 + 10, fakeBorderColor);
			Render.Line(screen_x / 2 - 75, screen_y / 2 + 10, screen_x / 2 - 75, screen_y / 2 - 10, realBorderColor);
			Render.Line(screen_x / 2 - 75, screen_y / 2 - 10, screen_x / 2 - 90, screen_y / 2, realBorderColor);
			Render.Line(screen_x / 2 - 90, screen_y / 2, screen_x / 2 - 75, screen_y / 2 + 10, realBorderColor);
			Render.Polygon([[screen_x / 2 + 75, screen_y / 2 + 10], [screen_x / 2 + 75, screen_y / 2 - 10], [screen_x / 2 + 90, screen_y / 2]], fakeColor);
			Render.Polygon([[screen_x / 2 - 90, screen_y / 2], [screen_x / 2 - 75, screen_y / 2 - 10], [screen_x / 2 - 75, screen_y / 2 + 10]], realColor);
		}
	} else if (getValue("Desync Indicator") === 5) {
		if (getValue("Inverter")) {
			Render.Line(screen_x / 2 + 132, screen_y / 2, screen_x / 2 + 105, screen_y / 2 + 16, realBorderColor);
			Render.Line(screen_x / 2 + 132, screen_y / 2, screen_x / 2 + 105, screen_y / 2 - 16, realBorderColor);
			Render.Line(screen_x / 2 + 110, screen_y / 2, screen_x / 2 + 105, screen_y / 2 + 16, realBorderColor);
			Render.Line(screen_x / 2 + 110, screen_y / 2, screen_x / 2 + 105, screen_y / 2 - 16, realBorderColor);
			Render.Line(screen_x / 2 - 132, screen_y / 2, screen_x / 2 - 105, screen_y / 2 + 16, fakeBorderColor);
			Render.Line(screen_x / 2 - 132, screen_y / 2, screen_x / 2 - 105, screen_y / 2 - 16, fakeBorderColor);
			Render.Line(screen_x / 2 - 110, screen_y / 2, screen_x / 2 - 105, screen_y / 2 + 16, fakeBorderColor);
			Render.Line(screen_x / 2 - 110, screen_y / 2, screen_x / 2 - 105, screen_y / 2 - 16, fakeBorderColor);
			Render.Polygon([[screen_x / 2 + 105, screen_y / 2 + 16], [screen_x / 2 + 110, screen_y / 2], [screen_x / 2 + 132, screen_y / 2]], realBorderColor);
			Render.Polygon([[screen_x / 2 - 132, screen_y / 2], [screen_x / 2 - 110, screen_y / 2], [screen_x / 2 - 105, screen_y / 2 + 16]], fakeBorderColor);
		} else {
			Render.Line(screen_x / 2 + 132, screen_y / 2, screen_x / 2 + 105, screen_y / 2 + 16, fakeBorderColor);
			Render.Line(screen_x / 2 + 132, screen_y / 2, screen_x / 2 + 105, screen_y / 2 - 16, fakeBorderColor);
			Render.Line(screen_x / 2 + 110, screen_y / 2, screen_x / 2 + 105, screen_y / 2 + 16, fakeBorderColor);
			Render.Line(screen_x / 2 + 110, screen_y / 2, screen_x / 2 + 105, screen_y / 2 - 16, fakeBorderColor);
			Render.Line(screen_x / 2 - 132, screen_y / 2, screen_x / 2 - 105, screen_y / 2 + 16, realBorderColor);
			Render.Line(screen_x / 2 - 132, screen_y / 2, screen_x / 2 - 105, screen_y / 2 - 16, realBorderColor);
			Render.Line(screen_x / 2 - 110, screen_y / 2, screen_x / 2 - 105, screen_y / 2 + 16, realBorderColor);
			Render.Line(screen_x / 2 - 110, screen_y / 2, screen_x / 2 - 105, screen_y / 2 - 16, realBorderColor);
			Render.Polygon([[screen_x / 2 + 105, screen_y / 2 + 16], [screen_x / 2 + 110, screen_y / 2], [screen_x / 2 + 132, screen_y / 2]], fakeBorderColor);
			Render.Polygon([[screen_x / 2 - 132, screen_y / 2], [screen_x / 2 - 110, screen_y / 2], [screen_x / 2 - 105, screen_y / 2 + 16]], realBorderColor);
		}
	}
	}

	//yes this part of the code is pasted. I didn't even change the comment LOL.
	function drawWaterMark() {
		//Cheat.Print(screen_x+"\n");
		if (getFrameCount() % frameLimit == 50) {
			ping = Math.ceil(Global.Latency() * 1000);
			fps = Math.ceil(1 / Global.Frametime());
		}
		if (getFrameCount() % frameLimit == 10) {
			today = new Date();
			datetime = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
			tickrate = Global.Tickrate();
		}

		Render.FilledRect(getValue("x1") + 45, getValue("y1") + 2, 260, 55, theme_background_border); // background
		Render.Rect(getValue("x1") + 45, getValue("y1") + 2, 260, 55, theme_background_margin);
		Render.FilledRect(getValue("x1") + 50, getValue("y1") + 7, 250, 45, theme_background_content); // background1
		Render.String(getValue("x1") + 122, getValue("y1") + 37, 0, "TCK   ", [120, 120, 120, 255], 3); //TCK
		Render.String(getValue("x1") + 127, getValue("y1") + 37, 0, "          " + tickrate, theme_text, 3); // TCK1
		Render.Rect(getValue("x1") + 120, getValue("y1") + 35, 23, 13, [120, 120, 120, 255]); // TCK2
		Render.Rect(getValue("x1") + 170, getValue("y1") + 35, 6, 13, [120, 120, 120, 255]); // ping
		Render.Rect(getValue("x1") + 177, getValue("y1") + 38, 6, 10, [120, 120, 120, 255]); // ping1
		Render.Rect(getValue("x1") + 184, getValue("y1") + 41, 6, 7, [120, 120, 120, 255]); // ping2
		Render.Circle(getValue("x1") + 237, getValue("y1") + 41, 6, [120, 120, 120, 255]); // clock
		Render.Line(getValue("x1") + 237, getValue("y1") + 42, getValue("x1") + 237, getValue("y1") + 36, [120, 120, 120, 255]); // clock1
		Render.Line(getValue("x1") + 237, getValue("y1") + 42, getValue("x1") + 243, getValue("y1") + 42, [120, 120, 120, 255]); // clock2
		Render.String(getValue("x1") + 192, getValue("y1") + 37, 0, " " + ping + "ms", theme_text, 3);
		Render.Rect(getValue("x1") + 67, getValue("y1") + 33, 21, 13, [120, 120, 120, 255]); // fps2
		Render.Rect(getValue("x1") + 69, getValue("y1") + 31, 21, 13, [120, 120, 120, 255]); // fps3     
		Render.FilledRect(getValue("x1") + 65, getValue("y1") + 35, 21, 13, theme_background_content); // background fps
		Render.Rect(getValue("x1") + 65, getValue("y1") + 35, 21, 13, [120, 120, 120, 255]); // fps1
		Render.String(getValue("x1") + 67, getValue("y1") + 37, 0, "FPS   ", [120, 120, 120, 255], 3);
		Render.String(getValue("x1") + 72, getValue("y1") + 37, 0, "           " + fps, theme_text, 3);
		Render.String(getValue("x1") + 247, getValue("y1") + 37, 0, " " + datetime, theme_text, 3);
		drawFilledOrRainbowRect(getValue("x1") + 55, getValue("y1") + 25, 240, 3, true); // lol
		Render.String(getValue("x1") + 175, getValue("y1") + 12, 1, "ONETAP  |  DHDJ", theme_text, 3);
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
	
var sprite_framecount = 0;
var sprite_color = [0, 0, 0, 0];
var sprite_radius = 0;
var sprite_distance=0;

var sprite_data = [];
for (var i = 0; i < 98; i++) {
	sprite_data.push([[0, 0, 0],false]);
}

var sprite_location=null;

function drawSprite() {
	var targetPlayer= Entity_IsAlive(localPlayer)?localPlayer:Entity_GetProp(localPlayer,"CBasePlayer","m_hObserverTarget");
	if(targetPlayer== "m_hObserverTarget" || !Entity.IsAlive(targetPlayer)){
		return;
	}
	render_sprite(targetPlayer);
	render_historical_sprite();
}
var spriteVelocityFactor=0;
function render_sprite(targetPlayer) {
	var player_position = Entity_GetRenderOrigin(targetPlayer);
	if(sprite_location==null){
		sprite_location=duplicate(player_position);
	}
	var distanceToPlayer=getDistance(sprite_location, player_position);
	if(distanceToPlayer>300){
		sprite_location=null;
		sprite_distance=0;
		sprite_data = [];
		for (var i = 0; i < 98; i++) {
			sprite_data.push([[0, 0, 0],false]);
		}
		return;
	}
	var velocityFactor=(Math.sqrt(Math.max(15,distanceToPlayer))-3.5)/8;
	spriteVelocityFactor=velocityFactor;
	if(velocityFactor>2){
		if(sprite_distance>20){
			sprite_distance-=0.1;
		}
	}else{
		if(sprite_distance<36){
			sprite_distance+=0.1;
		}
	}
	if(distanceToPlayer>1){
		var vecToPlayer=[(player_position[0] - sprite_location[0])/distanceToPlayer, (player_position[1] - sprite_location[1])/distanceToPlayer, (player_position[2] - sprite_location[2])/distanceToPlayer];
		sprite_location=[sprite_location[0]+vecToPlayer[0]*velocityFactor,sprite_location[1]+vecToPlayer[1]*velocityFactor,sprite_location[2]+vecToPlayer[2]*velocityFactor];
	}
	var position=duplicate(sprite_location);
	sprite_framecount += 1;
	
	position[2] += 34 + Math.sin(dhdjTime*2.5) * 14;
	position[1] += Math.sin((dhdjTime/1.8) * Math.PI) * sprite_distance;
	position[0] += Math.cos((dhdjTime/1.8) * Math.PI) * sprite_distance;
	
	if(sprite_framecount%2==0){
		sprite_data.pop();
		sprite_data.unshift([position,spriteVisible]);
	}
	

	var screenpos = Render_WorldToScreen(position);

	var cameraPos = Local_GetCameraPosition();
	var distance = getDistance(position, cameraPos);
	var size = 800 * Math.atan(10 / (2 * distance));
	var radius = size;
	sprite_radius = radius;

	sprite_color = getColor("Sprite Color");
	if (sprite_color[3] == 0) {
		var colors = HSV2RGB(dhdjTime * 0.1, 1, 1);
		sprite_color = [colors.r * 0.7, colors.g * 0.7, colors.b * 0.7, 255]
	}

	if (screenpos[2] != 0) {
		if(spriteVisible){
			Render_FilledCircle(screenpos[0] + 2, screenpos[1] - 2, radius - 4, [sprite_color[0], sprite_color[1], sprite_color[2], 220]);
			Render_FilledCircle(screenpos[0], screenpos[1], radius, [sprite_color[0], sprite_color[1], sprite_color[2], 220]);
		}else{
			Render_FilledCircle(screenpos[0], screenpos[1], radius, [sprite_color[0], sprite_color[1], sprite_color[2], 50]);
		}
	}
}

function render_historical_sprite() {
	var cameraPos = Local_GetCameraPosition();

	for (var i = 0; i < sprite_data.length; i++) {
		if (sprite_data[i][0][0] == 0) {
			break;
		}
		if (UI.IsHotkeyActive("Visual","WORLD","View","Thirdperson") && !sprite_data[i][1]) {
			continue;
		}

		var position = [sprite_data[i][0][0], sprite_data[i][0][1], sprite_data[i][0][2]];
		var screenpos = Render_WorldToScreen(position);
		var radius = sprite_radius + i*sprite_radius*(0.01+Math.sqrt(spriteVelocityFactor)/150);

		if (screenpos[2] != 0 && sprite_data[i][1]) {
			Render_FilledCircle(screenpos[0], screenpos[1], radius, [sprite_color[0], sprite_color[1], sprite_color[2], 8]);
		}
	}
}
	
	var materiald = false;
var materials = {
	"dhdj self chams": ["[0 0.11765706 0.34117647]", "0.90"],
	"dhdj enemy chams": ["[0.68235294 0.01176471 0.29803922]", "1"],
	"dhdj enemy visible chams": ["[1 0.9 0]", "1"],
	"dhdj blue chams": ["[0 0.56078 0.98431]", "0.65"],
	"dhdj red chams": ["[0.98431 0 0.3921]", "0.90"],
	"dhdj yellow chams": ["[0.84705 0.91372 0]", "0.90"],
};

function UI_onMaterial() {
	if (materiald) {
		return;
	}
	Object.keys(materials).forEach(function(key) {
		var mat_index = Material.Get(key);
		if (mat_index > 0) {
			Material.SetKeyValue(mat_index, "$baseTexture", "models/inventory_items/dogtags/dogtags");
			Material.SetKeyValue(mat_index, "$envmap", "models/effects/cube_white");
			Material.SetKeyValue(mat_index, "$envmapfresnel", "1");
			Material.SetKeyValue(mat_index, "$envmapfresnelminmaxexp", "[0 1 2]");
			Material.SetKeyValue(mat_index, "$envmaptint", materials[key][0]);
			Material.SetKeyValue(mat_index, "$alpha", "1");
			Material.SetKeyValue(mat_index, "$envmapsaturation", materials[key][1]);
			Material.Refresh(mat_index);
		}
	});
	materiald = true;
}

Object.keys(materials).forEach(function(key) {
	Material.Create(key);
});
	Cheat.RegisterCallback("weapon_fire", "UI_onWeaponFire");
	Cheat.RegisterCallback("player_hurt", "UI_onPlayerHurt");
	Cheat.RegisterCallback('round_start', 'UI_onRoundStart');
	Cheat.RegisterCallback('bullet_impact', 'UI_onBulletImpact');
	Cheat.RegisterCallback('item_purchase',"UI_onItemPurchase");
	Cheat.RegisterCallback('player_death',"UI_onPlayerDeath");
	Cheat.RegisterCallback('player_connect_full',"UI_onPlayerConnectFull");
	Cheat.RegisterCallback("Material", "UI_onMaterial");
	/* Callbacks
	onMenuUpdate
	onCreateMove
	onDraw
	onUnload
	rage_onRoundEnd
	rage_onRoundStart
	rage_onPlayerHurt
	rage_onWeaponFire
	rage_onBulletImpact
	ragebotoptimization_onRagebotFire
	ragebotoptimization_onPlayerHurt
	ragebotoptimization_onWeaponFire
	ragebotLogs
	others_onPlayerSay
	UI_onWeaponFire
	UI_onPlayerHurt
	UI_onRoundStart
	UI_onBulletImpact
	UI_onItemPurchase
	UI_onPlayerDeath
	UI_onPlayerConnectFull
	*/