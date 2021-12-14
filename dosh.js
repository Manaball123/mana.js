/* D03H.JS Write By Dosh */
Convar.SetInt("mat_queue_mode",2);
const globals_ChokedCommands = Globals.ChokedCommands;
const globals_Realtime = Globals.Realtime;
const globals_Frametime = Globals.Frametime;
const globals_Curtime = Globals.Curtime;
const globals_TickInterval = Globals.TickInterval;
const globals_Tickrate = Globals.Tickrate;
const globals_Tickcount = Globals.Tickcount;
const globals_FrameStage = Globals.FrameStage;

const menu_RegisterCallback = UI.RegisterCallback;
const menu_Getmenu_Position = UI.Getmenu_Position;
const menu_UpdateList = UI.UpdateList;
const menu_RemoveItem = UI.RemoveItem;
const menu_GetHotkey = UI.GetHotkey;
const menu_SetHotkeyState = UI.SetHotkeyState;
const menu_GetHotkeyState = UI.GetHotkeyState;
const menu_ToggleHotkey = UI.ToggleHotkey;
const menu_SetColor = UI.SetColor;
const menu_addSubTab = UI.AddSubTab;
const menu_addTextbox = UI.AddTextbox;
const menu_addColorPicker = UI.AddColorPicker;
const menu_addMultiDropdown = UI.AddMultiDropdown;
const menu_addDropdown = UI.AddDropdown;
const menu_addHotkey = UI.AddHotkey;
const menu_addSliderFloat = UI.AddSliderFloat;
const menu_addSliderInt = UI.AddSliderInt;
const menu_addCheckbox = UI.AddCheckbox;
const menu_SetValue = UI.SetValue;
const menu_GetChildren = UI.GetChildren;
const menu_GetValue = UI.GetValue;
const menu_GetString = UI.GetString;
const menu_GetColor = UI.GetColor;
const menu_IsMenuOpen = UI.IsMenuOpen;
const menu_SetEnabled = UI.SetEnabled;

const entity_GetSteamID = Entity.GetSteamID;
const entity_DisableESP = Entity.DisableESP;
const entity_DrawFlag = Entity.DrawFlag;

const entity_GetCCSWeaponInfo = Entity.GetCCSWeaponInfo;
const entity_GetRenderBox = Entity.GetRenderBox;
const entity_GetWeapons = Entity.GetWeapons;
const entity_GetEntitiesByClassID = Entity.GetEntitiesByClassID;
const entity_GetHitboxPosition = Entity.GetHitboxPosition;
const entity_GetEyePosition = Entity.GetEyePosition;
const entity_GetGameRulesProxy = Entity.GetGameRulesProxy;
const entity_IsBot = Entity.IsBot;
const entity_GetWeapon = Entity.GetWeapon;
const entity_SetProp = Entity.SetProp;
const entity_GetProp = Entity.GetProp;
const entity_GetRenderOrigin = Entity.GetRenderOrigin;
const entity_GetName = Entity.GetName;
const entity_GetClassName = Entity.GetClassName;
const entity_GetClassID = Entity.GetClassID;
const entity_IsDormant = Entity.IsDormant;
const entity_IsAlive = Entity.IsAlive;
const entity_IsValid = Entity.IsValid;
const entity_IsLocalPlayer = Entity.IsLocalPlayer;
const entity_IsEnemy = Entity.IsEnemy;
const entity_IsTeammate = Entity.IsTeammate;
const entity_GetEntityFromUserID = Entity.GetEntityFromUserID;
const entity_GetLocalPlayer = Entity.GetLocalPlayer;
const entity_GetTeammates = Entity.GetTeammates;
const entity_GetEnemies = Entity.GetEnemies;
const entity_GetPlayers = Entity.GetPlayers;
const entity_GetEntities = Entity.GetEntities;

const render_TextSize = Render.TextSize;
const render_String = Render.String;
const render_FilledCircle = Render.FilledCircle;
const render_TexturedRect = Render.TexturedRect;
const render_AddTexture = Render.AddTexture;
const render_GetFont=Render.GetFont;
const render_Polygon = Render.Polygon;
const render_GradientRect = Render.GradientRect;
const render_GetScreenSize = Render.GetScreenSize;
const render_WorldToScreen = Render.WorldToScreen;
const render_Circle = Render.Circle;
const render_FilledRect = Render.FilledRect;
const render_Rect = Render.Rect;
const render_Line = Render.Line;
const render_Arc = function(x, y, size1, size2, start, percent, precision, color) {
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
const nameList = {
	1 : "Deagle",
	2 : "Dualies",
	3 : "Five Seven",
	4 : "Glock",
	7 : "AK47",
	8 : "AUG",
	9 : "AWP",
	10 : "FAMAS",
	11 : "G3SG1",
	13 : "GALIL",
	14 : "M249",
	16 : "M4A4",
	17 : "Mac10",
	19 : "P90",
	23 : "MP5",
	24 : "UMP45",
	25 : "XM1014",
	26 : "PP-Bizon",
	27 : "MAG7",
	28 : "Negev",
	29 : "Sawed off",
	30 : "Tec-9",
	32 : "P2000",
	33 : "MP7",
	34 : "MP9",
	35 : "Nova",
	36 : "P250",
	38 : "SCAR20",
	39 : "SG553",
	40 : "SSG08",
	60 : "M4A1-S",
	61 : "USP",
	63 : "CZ-75",
	64 : "Revolver",

};
function GetWeapon(player){
	if (!entity_IsAlive(player)) return "General";
	var weapon = entity_GetProp(player, "CBasePlayer", "m_hActiveWeapon");
	if (weapon === "m_hActiveWeapon") return "General";
	weapon = (entity_GetProp(weapon, "CBaseAttributableItem", "m_iItemDefinitionIndex") & 0xFFFF);
	if (nameList[weapon] != undefined) {
		return nameList[weapon];
	} else {
		return "General";
	}
}

function render_Shaodw_String(x,y,o,string,color,font){

	render_String(x,y,o,string.toString(),color,font);

	render_String(x+5,y,o,string.toString(),[255,255,255,255],font);

}

const render_3dCircleOutline = function(position, outer_radius, inner_radius, precision, color) {
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

		var drawGroup1 = render_WorldToScreen([x + currentx * inner_radius, y + currenty * inner_radius, z]);
		var drawGroup2 = render_WorldToScreen([x + currentx * outer_radius, y + currenty * outer_radius, z]);
		var drawGroup3 = render_WorldToScreen([x + nextx * inner_radius, y + nexty * inner_radius, z]);
		var drawGroup4 = render_WorldToScreen([x + nextx * outer_radius, y + nexty * outer_radius, z]);

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
		var drawGroup1 = render_WorldToScreen([x + currentx * inner_radius, y + currenty * inner_radius, z]);
		var drawGroup2 = render_WorldToScreen([x + currentx * outer_radius, y + currenty * outer_radius, z]);
		var drawGroup3 = render_WorldToScreen([x + nextx * inner_radius, y + nexty * inner_radius, z]);
		var drawGroup4 = render_WorldToScreen([x + nextx * outer_radius, y + nexty * outer_radius, z]);

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

const render_3dCircle = function(position, radius, precision, color) {
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

const render_RoundedRectangle = function(x,y,w,h,r,c,st,sb){
	if(w/2<r || h/2<r){
		return;
	}
	var p=10;
	render_FilledRect(x,y+r,w,h-(r*2),c);
	if(!st){
		render_FilledRect(x+r,y,w-(r*2),r,c);
		render_Arc(x+r-0.5,y+r-0.5,r,0,180,90,p,c);
		render_Arc(x+w-r-0.5,y+r-0.5,r,0,270,90,p,c);
	}else{
		render_FilledRect(x,y,w,r,c);
	}
	if(!sb){
		render_FilledRect(x+r,y+h-r,w-(r*2),r,c);
		render_Arc(x+r-0.5,y+h-r-0.5,r,0,90,90,p,c);
		render_Arc(x+w-r-0.5,y+h-r-0.5,r,0,0,90,p,c);
	}else{
		render_FilledRect(x,y+h-r,w,r,c);
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

const UserCMD_SetMouseY = UserCMD.SetMouseY;
const UserCMD_SetMouseX = UserCMD.SetMouseX;
const UserCMD_GetMovement = UserCMD.GetMovement;
const UserCMD_SetViewAngles = UserCMD.SetViewAngles;
const UserCMD_Send = UserCMD.Send;
const UserCMD_Choke = UserCMD.Choke;


const Cheat_IsRageConfigActive = Cheat.IsRageConfigActive;
const Cheat_GetUsername = Cheat.GetUsername;
const Cheat_PrintChat = Cheat.PrintChat;
const Cheat_RegisterCallback = Cheat.RegisterCallback;
const Cheat_ExecuteCommand = Cheat.ExecuteCommand;
const Cheat_PrintColor = Cheat.PrintColor;
const Cheat_PrintLog = Cheat.PrintLog;
const Cheat_Print = Cheat.Print;
const Cheat_IsLegitConfigActive = Cheat.IsLegitConfigActive;

const Exploit_OverrideMaxProcessTicks=Exploit.OverrideMaxProcessTicks;
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


const screen_size = Global.GetScreenSize();
const screen_x = screen_size[0];
const screen_y = screen_size[1];

const Rage = "Rage";
const Visuals = "Visuals";
const Misc = "Misc.";
const Config = "Config";

const General = "General";
const Target = "Target";
const Accuracy = "Accuracy";
const Anti_Aim = "Anti Aim";
const Exploits = "Exploits";
const Fake_Lag = "Fake Lag";

const Key = "Key";
const Keys = "Keys";
const Key_List = "Key assignment";
const D03H = "D03H";

function GetVelocity(index) {
    var velocity = Entity.GetProp(index, "CBasePlayer", "m_vecVelocity[0]");
    return Math.sqrt(velocity[0] * velocity[0] + velocity[1] * velocity[1]);
}

function getJump(index) {
	return entity_GetProp(index, "CBasePlayer", "m_vecVelocity[2]")[0]
}
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}



//PrintLog

Cheat_PrintColor([25,25,255,255],"Welcome... \n");


//menu_Create

RageType = ["Defult","Mining","Double tap"];

allweapons = menu_GetChildren([Rage,Target,"SHEET_MGR"]);

function menu_Once(){


    menu_addSubTab([Config,"SUBTAB_MGR"],"D03H");

    menu_addSliderInt([Config,D03H,D03H],"WELCOME D03H.JS -- Dear > > "+Cheat_GetUsername(),0,0);

    D03H_CheckBox = ["RageBot","Double Tap","Fake Lag"];

    D03H_CheckBox.forEach(function(Value){

        menu_addCheckbox([Config,D03H,D03H],"Enable extra "+Value+" Set")

    })
	
	menu_addSliderInt([Config,D03H,D03H],"",0,0);
	
    menu_addCheckbox([Config,D03H,D03H],"Enable Visuals");
	
    menu_addSliderInt([Config,D03H,D03H],"IQ++",0,100);
    
	menu_addHotkey([Rage,General,General,Key_List],"Mining Damage","Mini");

	menu_addHotkey([Rage,General,General,Key_List],"SecondMining Damage","Second");


    for(x=0;x<allweapons.length;x++){

        menu_addCheckbox([Rage,Target,allweapons[x]],"Auto Optimization");

        menu_addSliderInt([Rage,Target,allweapons[x]],"Auto Optimization is GOOD for Rage    ! ! ! ! ",0,0);

        menu_addDropdown([Rage,Target,allweapons[x]],"Damage Mode",["Defult","Mining","Double tap"],0);

     

        for(i=0;i<RageType.length;i++){

            menu_addSliderInt([Rage,Target,allweapons[x]],RageType[i]+" Damage",0,130);

            menu_addSliderInt([Rage,Target,allweapons[x]],RageType[i]+" Hitchance",0,100);

            menu_addMultiDropdown([Rage,Target,allweapons[x]],RageType[i]+" Hitboxes",["Head","Upper Chest","Chest","Lower Chest","Stomach","Pelvis","Legs","Feet","Arms"]);

            menu_addMultiDropdown([Rage,Target,allweapons[x]],RageType[i]+" Multipoint Hitboxes",["Head","Upper Chest","Chest","Lower Chest","Stomach","Pelvis","Legs","Feet","Arms"]);

            menu_addSliderInt([Rage,Target,allweapons[x]],RageType[i]+" Head Pointscale",0,100);

            menu_addSliderInt([Rage,Target,allweapons[x]],RageType[i]+" Body Pointscale",0,100);


        }

        menu_addSliderInt([Rage,Target,allweapons[x]],"",0,0);

        menu_addCheckbox([Rage,Target,allweapons[x]],"Enable SecondMining Setting Override");

        menu_addSliderInt([Rage,Target,allweapons[x]],"SecondMining Damage",0,130);

        menu_addSliderInt([Rage,Target,allweapons[x]],"SecondMining Hitchance",0,100);

        menu_addMultiDropdown([Rage,Target,allweapons[x]],"SecondMining Hitboxes",["Head","Upper Chest","Chest","Lower Chest","Stomach","Pelvis","Legs","Feet","Arms"]);

        menu_addMultiDropdown([Rage,Target,allweapons[x]],"SecondMining Multipoint Hitboxes",["Head","Upper Chest","Chest","Lower Chest","Stomach","Pelvis","Legs","Feet","Arms"]);

        menu_addSliderInt([Rage,Target,allweapons[x]],"SecondMining Head Pointscale",0,100);

        menu_addSliderInt([Rage,Target,allweapons[x]],"SecondMining Body Pointscale",0,100);

   
	menu_addSliderInt([Rage,Accuracy,allweapons[x]],"",0,0);

	menu_addCheckbox([Rage,Accuracy,allweapons[x]],"Enabel SafePoint On Hitboxes");
	
	menu_addMultiDropdown([Rage,Accuracy,allweapons[x]],"SafePoint On Hitboxes",["head", "Neck", "Pelvis", "Body", "Thorax", "Chest", "Upper Chest", "Left Thigh", "Right Thigh", "Left Calf", "Right Calf", "Left Foot", "Right Foot"])

}

	//Double Tap

	menu_addDropdown([Rage,Exploits,General],"Ticks Mode",["Defult","Adaptive","18","15"],0);

	//FakeLag
	
    menu_addDropdown([Rage,"Fake Lag","Fake Lag"],"Fake Lag Mode?",["Max","Match_Making","HVH","Adaptive","Match_Making Random","HVH Random"],0);
	
	
	







}
menu_Once();

function Enable(){

    if(menu_GetValue([Config,D03H,D03H,"Enable extra RageBot Set"])){
        RageKey = 1;
        RageKeys = 0;
    }else{
        RageKey = 0;
        RageKeys = 1;
    }

	RageMisc = ["Minimum damage","Disable autowall","Hitboxes","Multipoint hitboxes","Head pointscale","Body pointscale"];
    
		for(x=0;x<allweapons.length;x++){
	
			RageMisc.forEach(function(Value){
		
				menu_SetEnabled([Rage,Target,allweapons[x],Value],RageKeys);
		
			});
			menu_SetEnabled([Rage,Accuracy,allweapons[x],"Hitchance"],RageKeys);

			

    if(menu_GetValue([Config,D03H,D03H,"Enable extra RageBot Set"])){

		

		menu_SetEnabled([Rage,Accuracy,allweapons[x],"Enabel SafePoint On Hitboxes"],1);

		menu_SetEnabled([Rage,Accuracy,allweapons[x],"SafePoint On Hitboxes"],1);


        for(i=0;i<RageType.length;i++){

            menu_SetEnabled([Rage,Target,allweapons[x],RageType[i]+" Damage"],0);

            menu_SetEnabled([Rage,Target,allweapons[x],RageType[i]+" Hitchance"],0);
    
            menu_SetEnabled([Rage,Target,allweapons[x],RageType[i]+" Hitboxes"],0);
    
            menu_SetEnabled([Rage,Target,allweapons[x],RageType[i]+" Multipoint Hitboxes"],0);

            menu_SetEnabled([Rage,Target,allweapons[x],RageType[i]+" Head Pointscale"],0);
    
            menu_SetEnabled([Rage,Target,allweapons[x],RageType[i]+" Body Pointscale"],0);

    
        if(menu_GetValue([Rage,Target,allweapons[x],"Enable SecondMining Setting Override"])){

            menu_SetEnabled([Rage,Target,allweapons[x],"SecondMining Damage"],1);

            menu_SetEnabled([Rage,Target,allweapons[x],"SecondMining Hitchance"],1);
    
            menu_SetEnabled([Rage,Target,allweapons[x],"SecondMining Hitboxes"],1);
    
            menu_SetEnabled([Rage,Target,allweapons[x],"SecondMining Multipoint Hitboxes"],1);

            menu_SetEnabled([Rage,Target,allweapons[x],"SecondMining Head Pointscale"],1);

            menu_SetEnabled([Rage,Target,allweapons[x],"SecondMining Body Pointscale"],1);

        }else{

            menu_SetEnabled([Rage,Target,allweapons[x],"SecondMining Damage"],0);

            menu_SetEnabled([Rage,Target,allweapons[x],"SecondMining Hitchance"],0);
    
            menu_SetEnabled([Rage,Target,allweapons[x],"SecondMining Hitboxes"],0);
    
            menu_SetEnabled([Rage,Target,allweapons[x],"SecondMining Multipoint Hitboxes"],0);

            menu_SetEnabled([Rage,Target,allweapons[x],"SecondMining Head Pointscale"],0);

            menu_SetEnabled([Rage,Target,allweapons[x],"SecondMining Body Pointscale"],0);

        }

		if(menu_GetString([Rage,Target,allweapons[x],"Damage Mode"])!="..."){

			menu_SetEnabled([Rage,Target,allweapons[x],menu_GetString([Rage,Target,allweapons[x],"Damage Mode"])+" Damage"],1);
	
			menu_SetEnabled([Rage,Target,allweapons[x],menu_GetString([Rage,Target,allweapons[x],"Damage Mode"])+" Hitchance"],1);
	
			menu_SetEnabled([Rage,Target,allweapons[x],menu_GetString([Rage,Target,allweapons[x],"Damage Mode"])+" Hitboxes"],1);
	
			menu_SetEnabled([Rage,Target,allweapons[x],menu_GetString([Rage,Target,allweapons[x],"Damage Mode"])+" Multipoint Hitboxes"],1);
	
			menu_SetEnabled([Rage,Target,allweapons[x],menu_GetString([Rage,Target,allweapons[x],"Damage Mode"])+" Head Pointscale"],1);
	
			menu_SetEnabled([Rage,Target,allweapons[x],menu_GetString([Rage,Target,allweapons[x],"Damage Mode"])+" Body Pointscale"],1);
		}
    }
	

    }
	if(menu_GetValue([Config,D03H,D03H,"Enable extra RageBot Set"])!=1){
	
		menu_SetEnabled([Rage,Target,allweapons[x],""],0);

		menu_SetEnabled([Rage,Target,allweapons[x],"Auto Optimization"],0);

		menu_SetEnabled([Rage,Target,allweapons[x],"Auto Optimization is GOOD for Rage    ! ! ! ! "],0);

		menu_SetEnabled([Rage,Target,allweapons[x],"Damage Mode"],0);

		menu_SetEnabled([Rage,Target,allweapons[x],""],0);

		menu_SetEnabled([Rage,Target,allweapons[x],"Enable SecondMining Setting Override"],0);

		menu_SetEnabled([Rage,Target,allweapons[x],""],0);

		menu_SetEnabled([Rage,Target,allweapons[x],"SecondMining Damage"],0);

		menu_SetEnabled([Rage,Target,allweapons[x],"SecondMining Hitchance"],0);

		menu_SetEnabled([Rage,Target,allweapons[x],"SecondMining Hitboxes"],0);

		menu_SetEnabled([Rage,Target,allweapons[x],"SecondMining Multipoint Hitboxes"],0);

		menu_SetEnabled([Rage,Target,allweapons[x],"SecondMining Head Pointscale"],0);

		menu_SetEnabled([Rage,Target,allweapons[x],"SecondMining Body Pointscale"],0);

		menu_SetEnabled([Rage,Accuracy,allweapons[x],"Enabel SafePoint On Hitboxes"],0);

		menu_SetEnabled([Rage,Accuracy,allweapons[x],"SafePoint On Hitboxes"],0);

		RageType.forEach(function(value){
			menu_SetEnabled([Rage,Target,allweapons[x],value+" Damage"],0);

			menu_SetEnabled([Rage,Target,allweapons[x],value+" Hitchance"],0);
	
			menu_SetEnabled([Rage,Target,allweapons[x],value+" Hitboxes"],0);
	
			menu_SetEnabled([Rage,Target,allweapons[x],value+" Multipoint Hitboxes"],0);
	
			menu_SetEnabled([Rage,Target,allweapons[x],value+" Head Pointscale"],0);
	
			menu_SetEnabled([Rage,Target,allweapons[x],value+" Body Pointscale"],0);
		});
	    }
    }

	if(menu_GetValue([Config,D03H,D03H,"Enable extra Double Tap Set"])){

		menu_SetValue([Rage,Exploits,General,"Speed"],3);

		menu_SetEnabled([Rage,Exploits,General,"Speed"],0);

		menu_SetEnabled([Rage,Exploits,General,"Ticks Mode"],1);
	}

	if(menu_GetValue([Config,D03H,D03H,"Enable extra Double Tap Set"])!=1){

		menu_SetEnabled([Rage,Exploits,General,"Speed"],1);

		menu_SetEnabled([Rage,Exploits,General,"Ticks Mode"],0);
	}
	
	if(menu_GetValue([Config,D03H,D03H,"Enable extra Fake Lag Set"])){
		
		menu_SetEnabled([Rage,"Fake Lag","Fake Lag","Limit"],0);
		menu_SetEnabled([Rage,"Fake Lag","Fake Lag","Jitter"],0);
		menu_SetEnabled([Rage,"Fake Lag","Fake Lag","Triggers"],0);
	    menu_SetEnabled([Rage,"Fake Lag","Fake Lag","Fake Lag Mode?"],1);
		menu_SetEnabled([Rage,"Fake Lag","Fake Lag","Trigger limit"],0);
		
	}
		
	if(menu_GetValue([Config,D03H,D03H,"Enable extra Fake Lag Set"])!=1){
		
		menu_SetEnabled([Rage,"Fake Lag","Fake Lag","Limit"],1);
		menu_SetEnabled([Rage,"Fake Lag","Fake Lag","Jitter"],1);
		menu_SetEnabled([Rage,"Fake Lag","Fake Lag","Triggers"],1);
		menu_SetEnabled([Rage,"Fake Lag","Fake Lag","Fake Lag Mode?"],0);
		menu_SetEnabled([Rage,"Fake Lag","Fake Lag","Trigger limit"],1);
		
	}
	
	
}

function UI_CallBack(){
	if (!menu_IsMenuOpen() || globals_Tickcount() % 16 != 0) {
		return;
	}
    Enable();
}
Cheat_RegisterCallback("Draw","UI_CallBack");



function DamageWithOpin(){


	FirstDMG = menu_GetValue([Rage,General,General,Key_List,"Mining Damage"]);

	SecondDMG = menu_GetValue([Rage,General,General,Key_List,"SecondMining Damage"]);

	DTDMG = menu_GetValue([Rage,"Exploits","Keys","Double tap"]);

	MyWeapon = GetWeapon(entity_GetLocalPlayer());


	if(menu_GetValue([Config,D03H,D03H,"Enable extra RageBot Set"])&&entity_IsAlive(entity_GetLocalPlayer())){



			menu_SetValue([Rage,Target,General,"Minimum damage"],menu_GetValue([Rage,Target,General,"Defult Damage"]));

			menu_SetValue([Rage,Accuracy,General,"Hitchance"],menu_GetValue([Rage,Target,General,"Defult Hitchance"]));
	  
			menu_SetValue([Rage,Target,General,"Hitboxes"],menu_GetValue([Rage,Target,General,"Defult Hitboxes"]));
	  
			menu_SetValue([Rage,Target,General,"Multipoint hitboxes"],menu_GetValue([Rage,Target,General,"Defult Multipoint Hitboxes"]));
	  
			menu_SetValue([Rage,Target,General,"Head pointscale"],menu_GetValue([Rage,Target,General,"Defult Head Pointscale"]));
	  
			menu_SetValue([Rage,Target,General,"Body pointscale"],menu_GetValue([Rage,Target,General,"Defult Body Pointscale"]));


			menu_SetValue([Rage,Target,MyWeapon,"Minimum damage"],menu_GetValue([Rage,Target,MyWeapon,"Defult Damage"]));
	  
			menu_SetValue([Rage,Accuracy,MyWeapon,"Hitchance"],menu_GetValue([Rage,Target,MyWeapon,"Defult Hitchance"]));
	  
			menu_SetValue([Rage,Target,MyWeapon,"Hitboxes"],menu_GetValue([Rage,Target,MyWeapon,"Defult Hitboxes"]));
	  
			menu_SetValue([Rage,Target,MyWeapon,"Multipoint hitboxes"],menu_GetValue([Rage,Target,MyWeapon,"Defult Multipoint Hitboxes"]));
	  
			menu_SetValue([Rage,Target,MyWeapon,"Head pointscale"],menu_GetValue([Rage,Target,MyWeapon,"Defult Head Pointscale"]));
	  
			menu_SetValue([Rage,Target,MyWeapon,"Body pointscale"],menu_GetValue([Rage,Target,MyWeapon,"Defult Body Pointscale"]));
		

	   


	  if(FirstDMG){

		menu_SetValue([Rage,Target,General,"Minimum damage"],menu_GetValue([Rage,Target,General,"Mining Damage"]));

		menu_SetValue([Rage,Accuracy,General,"Hitchance"],menu_GetValue([Rage,Target,General,"Mining Hitchance"]));
  
		menu_SetValue([Rage,Target,General,"Hitboxes"],menu_GetValue([Rage,Target,General,"Mining Hitboxes"]));
  
		menu_SetValue([Rage,Target,General,"Multipoint hitboxes"],menu_GetValue([Rage,Target,General,"Mining Multipoint Hitboxes"]));
  
		menu_SetValue([Rage,Target,General,"Head pointscale"],menu_GetValue([Rage,Target,General,"Mining Head Pointscale"]));
  
		menu_SetValue([Rage,Target,General,"Body pointscale"],menu_GetValue([Rage,Target,General,"Mining Body Pointscale"]));
  
  
		menu_SetValue([Rage,Target,MyWeapon,"Minimum damage"],menu_GetValue([Rage,Target,MyWeapon,"Mining Damage"]));
  
		menu_SetValue([Rage,Accuracy,MyWeapon,"Hitchance"],menu_GetValue([Rage,Target,MyWeapon,"Mining Hitchance"]));
  
		menu_SetValue([Rage,Target,MyWeapon,"Hitboxes"],menu_GetValue([Rage,Target,MyWeapon,"Mining Hitboxes"]));
  
		menu_SetValue([Rage,Target,MyWeapon,"Multipoint hitboxes"],menu_GetValue([Rage,Target,MyWeapon,"Mining Multipoint Hitboxes"]));
  
		menu_SetValue([Rage,Target,MyWeapon,"Head pointscale"],menu_GetValue([Rage,Target,MyWeapon,"Mining Head Pointscale"]));
  
		menu_SetValue([Rage,Target,MyWeapon,"Body pointscale"],menu_GetValue([Rage,Target,MyWeapon,"Mining Body Pointscale"]));

	  };

	  if(DTDMG){

	  	menu_SetValue([Rage,Target,General,"Minimum damage"],menu_GetValue([Rage,Target,General,"Double tap Damage"]));

		menu_SetValue([Rage,Accuracy,General,"Hitchance"],menu_GetValue([Rage,Target,General,"Double tap Hitchance"]));
  
		menu_SetValue([Rage,Target,General,"Hitboxes"],menu_GetValue([Rage,Target,General,"Double tap Hitboxes"]));
  
		menu_SetValue([Rage,Target,General,"Multipoint hitboxes"],menu_GetValue([Rage,Target,General,"Double tap Multipoint Hitboxes"]));
  
		menu_SetValue([Rage,Target,General,"Head pointscale"],menu_GetValue([Rage,Target,General,"Double tap Head Pointscale"]));
  
		menu_SetValue([Rage,Target,General,"Body pointscale"],menu_GetValue([Rage,Target,General,"Double tap Body Pointscale"]));
  
  
		menu_SetValue([Rage,Target,MyWeapon,"Minimum damage"],menu_GetValue([Rage,Target,MyWeapon,"Double tap Damage"]));
  
		menu_SetValue([Rage,Accuracy,MyWeapon,"Hitchance"],menu_GetValue([Rage,Target,MyWeapon,"Double tap Hitchance"]));
  
		menu_SetValue([Rage,Target,MyWeapon,"Hitboxes"],menu_GetValue([Rage,Target,MyWeapon,"Double tap Hitboxes"]));
  
		menu_SetValue([Rage,Target,MyWeapon,"Multipoint hitboxes"],menu_GetValue([Rage,Target,MyWeapon,"Double tap Multipoint Hitboxes"]));
  
		menu_SetValue([Rage,Target,MyWeapon,"Head pointscale"],menu_GetValue([Rage,Target,MyWeapon,"Double tap Head Pointscale"]));
  
		menu_SetValue([Rage,Target,MyWeapon,"Body pointscale"],menu_GetValue([Rage,Target,MyWeapon,"Double tap Body Pointscale"]));

	  };


	  if(SecondDMG&&menu_GetValue([Rage,Target,General,"Enable SecondMining Setting Override"])){

		menu_SetValue([Rage,Target,General,"Minimum damage"],menu_GetValue([Rage,Target,General,"SecondMining Damage"]));

		menu_SetValue([Rage,Accuracy,General,"Hitchance"],menu_GetValue([Rage,Target,General,"SecondMining Hitchance"]));
  
		menu_SetValue([Rage,Target,General,"Hitboxes"],menu_GetValue([Rage,Target,General,"SecondMining Hitboxes"]));
  
		menu_SetValue([Rage,Target,General,"Multipoint hitboxes"],menu_GetValue([Rage,Target,General,"SecondMining Multipoint Hitboxes"]));
  
		menu_SetValue([Rage,Target,General,"Head pointscale"],menu_GetValue([Rage,Target,General,"SecondMining Head Pointscale"]));
  
		menu_SetValue([Rage,Target,General,"Body pointscale"],menu_GetValue([Rage,Target,General,"SecondMining Body Pointscale"]));
  
	};

	if(SecondDMG&&menu_GetValue([Rage,Target,MyWeapon,"Enable SecondMining Setting Override"])){

		menu_SetValue([Rage,Target,MyWeapon,"Minimum damage"],menu_GetValue([Rage,Target,MyWeapon,"SecondMining Damage"]));
  
		menu_SetValue([Rage,Accuracy,MyWeapon,"Hitchance"],menu_GetValue([Rage,Target,MyWeapon,"SecondMining Hitchance"]));
  
		menu_SetValue([Rage,Target,MyWeapon,"Hitboxes"],menu_GetValue([Rage,Target,MyWeapon,"SecondMining Hitboxes"]));
  
		menu_SetValue([Rage,Target,MyWeapon,"Multipoint hitboxes"],menu_GetValue([Rage,Target,MyWeapon,"SecondMining Multipoint Hitboxes"]));
  
		menu_SetValue([Rage,Target,MyWeapon,"Head pointscale"],menu_GetValue([Rage,Target,MyWeapon,"SecondMining Head Pointscale"]));
  
		menu_SetValue([Rage,Target,MyWeapon,"Body pointscale"],menu_GetValue([Rage,Target,MyWeapon,"SecondMining Body Pointscale"]));

	};


	

	

	
};
	


}; 

Cheat_RegisterCallback("Draw","DamageWithOpin");	


function On_CM(){
	
	MyWeapon = GetWeapon(entity_GetLocalPlayer());
	
	if(menu_GetValue([Rage,Target,MyWeapon,"Auto Optimization"])&&entity_IsAlive(entity_GetLocalPlayer())){

		Enemies = entity_GetEnemies();
		for(i=0;i<Enemies.length;i++){
			
			const Enemt = Enemies[i];
		
		if(menu_GetValue([Config,D03H,D03H,"Enable extra RageBot Set"])&&entity_IsAlive(entity_GetLocalPlayer())&&menu_GetValue([Rage,Target,GetWeapon(entity_GetLocalPlayer()),"Auto Optimization"])){
			
			    if(MyWeapon == "AWP"||"SSG08"){
				
		
				
			    }else{
				

			    };
		    };
	    };
    };

	if(menu_GetValue([Rage,Accuracy,MyWeapon,"Enabel SafePoint On Hitboxes"])){


		switch(menu_GetValue([Rage,Accuracy,MyWeapon,"SafePoint On Hitboxes"])){

			case 0:Ragebot.ForceHitboxSafety(0); break;

			case 1:Ragebot.ForceHitboxSafety(1); break;

			case 2:Ragebot.ForceHitboxSafety(2); break;

			case 3:Ragebot.ForceHitboxSafety(3); break;

			case 4:Ragebot.ForceHitboxSafety(4); break;

			case 5:Ragebot.ForceHitboxSafety(5); break;

			case 6:Ragebot.ForceHitboxSafety(6); break;

			case 7:Ragebot.ForceHitboxSafety(7); break;

			case 8:Ragebot.ForceHitboxSafety(8); break;

			case 9:Ragebot.ForceHitboxSafety(9); break;

			case 10:Ragebot.ForceHitboxSafety(10); break;

			case 11:Ragebot.ForceHitboxSafety(11); break;

			case 12:Ragebot.ForceHitboxSafety(12); break;


		}



	}
	//DoubleTap

	if(menu_GetValue([Config,D03H,D03H,"Enable extra Double Tap Set"])&&entity_IsAlive(entity_GetLocalPlayer())){
		
	   DtValue  =	menu_GetValue([Rage,Exploits,General,"Ticks Mode"]);
	   
	   switch(DtValue){
		   
		   case 0:
		   
		   Exploit_OverrideMaxProcessTicks(17);
		   Exploit_OverrideShift(17);
		   Exploit_OverrideTolerance(0);
		   
		   break;
		   
		   case 1:
		   	   
	       Exploit_OverrideMaxProcessTicks(Convar.GetFloat("sv_maxusrcmdprocessticks")-2);
	       Exploit_OverrideShift(Convar.GetFloat("sv_maxusrcmdprocessticks")-2);
	       Exploit_OverrideTolerance(Convar.GetFloat("sv_maxusrcmdprocessticks")-Convar.GetFloat("sv_maxusrcmdprocessticks"));
		   
		   break;
		   
		   case 2:
		   
		   Exploit_OverrideMaxProcessTicks(18);
		   Exploit_OverrideShift(18);
		   Exploit_OverrideTolerance(0);
		   
		   break;
		   
		   case 3:
		   
		   Exploit_OverrideMaxProcessTicks(15);
		   Exploit_OverrideShift(15);
		   Exploit_OverrideTolerance(0);
		   
		   break;
		   
		   
	   }	
	}
	
	//Fake Lag
	
	if(menu_GetValue([Config,D03H,D03H,"Enable extra Fake Lag Set"])&&entity_IsAlive(entity_GetLocalPlayer())){
		
		switch(menu_GetValue([Rage,"Fake Lag","Fake Lag","Fake Lag Mode?"])){
			
			case 0:
			
			menu_SetValue([Rage,"Fake Lag","Fake Lag","Limit"],14);
			menu_SetValue([Rage,"Fake Lag","Fake Lag","Jitter"],100);
			
			if(globals_ChokedCommands()==0&&globals_ChokedCommands()<15){
				UserCMD_Send();
				UserCMD_Send();
				UserCMD_Choke();
			}
			if(globals_ChokedCommands==14){
			    UserCMD_Send();
				UserCMD_Choke();
				UserCMD_Choke();
			}
			
			break;
			
			case 1:
			
			menu_SetValue([Rage,"Fake Lag","Fake Lag","Limit"],6);
			menu_SetValue([Rage,"Fake Lag","Fake Lag","Jitter"],6);
			
			if(globals_ChokedCommands()==0&&globals_ChokedCommands()<7){
				UserCMD_Send();
				UserCMD_Send();
				UserCMD_Choke();
			}
			if(globals_ChokedCommands==6){
			    UserCMD_Send();
				UserCMD_Choke();
				UserCMD_Choke();
			}
			break;
			
			case 2:
			
			menu_SetValue([Rage,"Fake Lag","Fake Lag","Limit"],12);
			menu_SetValue([Rage,"Fake Lag","Fake Lag","Jitter"],88);
			
			if(globals_ChokedCommands()==0&&globals_ChokedCommands()<13){
				UserCMD_Send();
				UserCMD_Send();
				UserCMD_Choke();
			}
			if(globals_ChokedCommands==12){
			    UserCMD_Send();
				UserCMD_Choke();
				UserCMD_Choke();
			}
			
			break;
			
			case 3:
			
            if(World.GetServerString() == "vlave"){
			menu_SetValue([Rage,"Fake Lag","Fake Lag","Limit"],3);
			menu_SetValue([Rage,"Fake Lag","Fake Lag","Jitter"],3);
			
			if(globals_ChokedCommands()==0&&globals_ChokedCommands()<4){
				UserCMD_Send();
				UserCMD_Send();
				UserCMD_Choke();
			}
			if(globals_ChokedCommands==12){
			    UserCMD_Send();
				UserCMD_Choke();
				UserCMD_Choke();
			}
			}else{
			menu_SetValue([Rage,"Fake Lag","Fake Lag","Limit"],12);
			menu_SetValue([Rage,"Fake Lag","Fake Lag","Jitter"],14);
			
			if(globals_ChokedCommands()==0&&globals_ChokedCommands()<13){
				UserCMD_Send();
				UserCMD_Send();
				UserCMD_Choke();
			}
			if(globals_ChokedCommands==12){
			    UserCMD_Send();
				UserCMD_Choke();
				UserCMD_Choke();
			}
			}
			
			break;
			
			case 4:
			limitvalue = getRndInteger(0,3);
			
			menu_SetValue([Rage,"Fake Lag","Fake Lag","Limit"],limitvalue);
			menu_SetValue([Rage,"Fake Lag","Fake Lag","Jitter"],limitvalue);
			
			if(limitvalue == 3){
				UserCMD_Send();
				}else{
				UserCMD_Choke();
			}
			
			break;
			
			case 5:
			limit_2_Value = getRndInteger(0,12);
			jitter_2_value = getRndInteger(0,88);
			
			menu_SetValue([Rage,"Fake Lag","Fake Lag","Limit"],limit_2_Value);
			menu_SetValue([Rage,"Fake Lag","Fake Lag","Jitter"],jitter_2_value);
			
			if(limit_2_Value == 12 || jitter_2_value == 88)
				UserCMD_Send();
			else
				UserCMD_Choke();
			
			break;
			
			
			
			
		}
	
	}
};
Cheat_RegisterCallback("CreateMove","On_CM");



function VisualsOnDraw(){
	
	
	
	
	
	
}
Cheat_RegisterCallback("Draw","VisualsOnDraw");
















