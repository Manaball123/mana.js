//made by Mana#1092
//trash code below dont look
//TODO: make autopeek compatible(goes back after not able to shoot)
const SLIDERINT =     0;
const SLIDERFLOAT =   1;
const DROPDOWN =      2;
const MULTIDROPDOWN = 3;
const CHECKBOX =      4;
const TEXTBOX =       5;
const COLORPICKER =   6;
const HOTKEY =        7;

function UIElement(path, name, type, val1, val2)
{

    this.path = path;
    this.name = name;
    this.fullpath = this.path.concat(this.name)
    this.type = type;
    this.val1 = val1;
    this.val2 = val2;

    this.Get = function()
    {
        return UI.GetValue(this.fullpath);
    }
    this.Set = function(n)
    {
        UI.SetValue(this.fullpath, n);
    }
    this.Hide = function()
    {
        UI.SetEnabled(this.fullpath, 0);
    }
    this.Show = function()
    {
        UI.SetEnabled(this.fullpath, 1);
    }
    this.Delete = function()
    {
        UI.RemoveItem(this.fullpath);
    }

    switch(this.type)
    {
        case SLIDERINT:
            UI.AddSliderInt(this.path, this.name, this.val1, this.val2);
            break;
        case SLIDERFLOAT:
            UI.AddSliderFloat(this.path, this.name, this.val1, this.val2);
            break;
        case DROPDOWN:
            if(this.val2 == undefined)
            {
                this.val2 = 0;
            }
            UI.AddDropdown(this.path, this.name, this.val1, this.val2);
            break;

        case MULTIDROPDOWN:
            
            UI.AddMultiDropdown(this.path, this.name, this.val1)
            this.GetAtIndex = function(i)
            {
                var mask = 1 << i;
                return UI.GetValue(this.fullpath) & mask ? true : false;
            }
            this.SetAtIndex = function(i)
            {
                UI.SetValue(this.fullpath, UI.GetValue(this.fullpath) | (1 << i));
            }
            break;
        case CHECKBOX:
            UI.AddCheckbox(this.path, this.name);
            break;

        case TEXTBOX:
            UI.AddTextbox(this.path, this.name);
            this.Get = function()
            {
                return UI.GetString(this.fullpath);
            }
            break;
            
        case COLORPICKER:

            UI.AddColorPicker(this.path, this.name);

            this.Get = function()
            {
                return UI.GetColor(this.fullpath);
            }
            this.Set = function(n)
            {
                UI.SetColor(this.fullpath, n);
            }
            break;
        case HOTKEY:
            UI.AddHotkey(this.path, this.name, this.val1);
            this.GetState = function()
            {
                return UI.GetHotkeyState(this.fullpath);
            }
            this.SetState = function(n)
            {
                UI.SetHotkeyState(this.fullpath, n);
            }

            this.Set = function(n)
            {
                this.Get() != n ? UI.ToggleHotkey(this.fullpath) : 0;
            }
            this.Toggle = function()
            {
                UI.ToggleHotkey(this.fullpath)
            }
            break;
    }


}








const und = undefined;

const screensize = Render.GetScreenSize()

function Vector(a, x, y, z)
{
    this.x = x;
    this.y = y;
    this.z = z;
    if(a != undefined)
    {
        this.x = a[0];
        this.z = a[1];
        this.y = a[2]; 
    }

    this.GetArr = function()
    {

        return [this.x,this.z,this.y];
    }
    this.Copy = function()
    {
        return new Vector(und, this.x, this.y, this.z);
    }
    this.Length = function()
    {
        return Math.sqrt(this.x ** 2 + this.y ** 2 + this.z ** 2);
    }
    this.AddFrom = function(v)
    {

        this.x += v.x;
        this.y += v.y;
        this.z += v.z;

    }
    this.SubFrom = function(v)
    {
        this.x -= v.x;
        this.y -= v.y;
        this.z -= v.z;
    }
    this.Scale = function(n)
    {
        this.x = this.x * n;
        this.y = this.y * n;
        this.z = this.z * n;
    }
    this.GetNormalized = function()
    {
        var length = this.Length();
        return new Vector(und, this.x / length, this.y / length, this.z / length);
    }
    this.Normalize = function()
    {
        var length = this.Length();
        this.x = this.x / length;
        this.y = this.y / length;
        this.z = this.z / length;
    }
    this.Add = function(v)
    {
        res = new Vector(und, this.x + v.x,this.y + v.y,this.z + v.z);
        return res;
    };
    this.Sub = function(v)
    {
        res = new Vector(
            und,
            this.x - v.x,
            this.y - v.y,
            this.z - v.z)
            return res;
    }

    this.Dot = function(v)
    {
        return this.x * v.x + this.y * v.y + this.z * v.z;
    }


}
function Angles(a, yaw, pitch, roll)
{

        this.yaw = yaw;
        this.pitch = pitch;
        this.roll = roll;
    
    if(a != undefined)
    {
        this.pitch = a[0];
        this.yaw = a[1];
        this.roll = a[2];

    }
        
    
    this.GetArr = function()
    {
       
        return [this.pitch,this.yaw,this.roll];
    }
    this.ToVec = function()
    {
        return new Vector(und, Math.cos(DEG2RAD(this.pitch)) * Math.cos(DEG2RAD(this.yaw)),  -Math.sin(DEG2RAD(this.pitch)), Math.cos(DEG2RAD(this.pitch)) * Math.sin(DEG2RAD(this.yaw)));
    }
}

function ExtrapolatedTimeToPoint()
{
    
}

function GetDropdownValue(value, index)
{
    var mask = 1 << index;
    return value & mask ? true : false;
}

function ANGLE2VEC(angle) 
{
	var pitch = angle[0];
	var yaw = angle[1];
	return [Math.cos(DEG2RAD(pitch)) * Math.cos(DEG2RAD(yaw)), Math.cos(DEG2RAD(pitch)) * Math.sin(DEG2RAD(yaw)), -Math.sin(DEG2RAD(pitch))];
}
function DEG2RAD(degree)
{
    return degree * Math.PI / 180.0;
}
function MoveToPoint(point)
{

    localplayerPos = GetLocalOrigin();
    var vecToPeek = point.Sub(localplayerPos);
    vecToPeek.y = 0
	var angle = Math.atan2(vecToPeek.z, vecToPeek.x) * (180 / Math.PI);;
	var viewYaw = Local.GetViewAngles()[1] - 180;
	var realAngle = (AdjustAngle(angle - viewYaw) + 90) * (Math.PI / 180);
	var distance = vecToPeek.Length();
    UserCMD.SetMovement([Math.cos(realAngle) * (distance < 20 ? 50 + distance * 5 : 450), Math.sin(realAngle) * (distance < 20 ? 50 + distance * 5 : 450), 0]);
    return distance;
}

Render.Filled3DCircle = function(position, radius, degrees, start_at, color, fill_color) 
{
    //position, radius, color, fill_color: self explanatory
    //degrees: circle span(can be used to make half circles too, but use 360 for full circle)
    //start_at: start span at x degrees
    var old_x, old_y;

    //clamp degrees between 360 and 0
    degrees = degrees < 361 && degrees || 360; 
    degrees = degrees > -1 && degrees || 0;
    start_at += 1;

    for (rot = start_at; rot < degrees + start_at + 1; rot += start_at * 8) {
        rot_r = rot * (Math.PI / 180);
        line_x = radius * Math.cos(rot_r) + position[0], line_y = radius * Math.sin(rot_r) + position[1];

        var curr = Render.WorldToScreen([line_x, line_y, position[2]]);
        var cur = Render.WorldToScreen([position[0], position[1], position[2]]);

        if (cur[0] != null && curr[0] != null && old_x != null) {
            Render.Polygon([[curr[0], curr[1]], [old_x, old_y], [cur[0], cur[1]]], fill_color)
            Render.Line(curr[0], curr[1], old_x, old_y, color)
        }

        old_x = curr[0], old_y = curr[1];
    }
}

Render.Line3D = function(pos1, pos2, color)
{
    p1 = Render.WorldToScreen(pos1.GetArr());
    p2 = Render.WorldToScreen(pos2.GetArr());

    Render.Line(p1[0], p1[1],p2[0],p2[1],color);
}
Trace.LineToWall = function(pos1, pos2)
{
    var res = Trace.Line(Entity.GetLocalPlayer(), pos1.GetArr(), pos2.GetArr())
    var resvec = pos2.Sub(pos1)
    resvec.Scale(res[1]);

    
    return resvec.Add(pos1);
    //return resvec;

}

function AdjustAngle(angle) {
    if (angle < 0) {
        angle = (90 + angle * (-1));
    } else if (angle > 0) {
        angle = (90 - angle);
    }

    return angle;
}
function GetLocalOrigin()
{
    return new Vector(Entity.GetProp(Entity.GetLocalPlayer(), "CBaseEntity", "m_vecOrigin"));
}




//Hitscan autopeek thing active
function AutoPeeker()
{
    this.peekPosPhase = 0;
    this.phase = 0;
    //Vanilla autopeek(auto return) active
    this.autoReturnActive = false;

    const PHASE_DORMANT = 0;
    const PHASE_SCAN = 1;
    const PHASE_PEEK = 2;
    const PHASE_RETURN = 3;

    //Timers:
    //Phase 1 -> 2
    this.peekOutTimer = 0;
    //Phase 2 -> 3
    this.forceReturnTimer = 0;
    this.returnTimer = 0;
    this.enemies = Entity.GetEnemies()

    this.hitboxesSettingCache = 0;
    this.hitboxes = []

    this.startPoint = undefined;
    this.peekPoint  = undefined;
    
    this.hsLines = []
    this.findHSLinesTimer = 0x0fffffff;

    
    UI.AddSubTab(["Config", "SUBTAB_MGR"], "Auto Peek Settings")
    UI.AddSubTab(["Visuals", "SUBTAB_MGR"], "Auto Peek Visuals")

    const settingsPath = ["Config", "SUBTAB_MGR", "Auto Peek Settings", "SHEET_MGR", "Auto Peek Settings"];
    const keybindsPath = ["Config", "SUBTAB_MGR", "Scripts", "SHEET_MGR", "JS Keybinds"];
    const visualsPath = ["Visuals","SUBTAB_MGR","Auto Peek Visuals","SHEET_MGR","Auto Peek Visuals"];
    const directions = ["none","left","right"];
    const defAutoPeekPath = ["Misc.","SUBTAB_MGR", "Keys" , "SHEET_MGR", "Keys", "Auto peek"]
    const dtPath = ["Rage", "SUBTAB_MGR", "Exploits", "SHEET_MGR", "Keys", "Double tap"];

    this.hitboxesSetting =      new UIElement(settingsPath,     "Hitboxes",             MULTIDROPDOWN,["Head","Neck","Pelvis","Body","Thorax","Chest","Upper Chest","Left Thigh","Right Thigh","Left Calf","Right Calf","Left Foot","Right Foot","Left Hand","Right Hand","Left Upper Arm","Left Upper Forearm","Right Upper Arm","Right Upper Forearm"]);
    this.enableDelay =          new UIElement(settingsPath,     "Enable Delay",         SLIDERINT, 0, 16 );
    this.forceDisableTime =     new UIElement(settingsPath,     "Force Return Delay",   SLIDERINT, 0, 64 );
    this.disableDelay =         new UIElement(settingsPath,     "Return Delay",         SLIDERINT, 0, 16 );
    this.pointDistance =        new UIElement(settingsPath,     "Point Distance",       SLIDERFLOAT, 1, 128);
    this.uptraceOffset =        new UIElement(settingsPath,     "Uptrace Offset",       SLIDERFLOAT, 0, 64);
    this.downtraceOffset =      new UIElement(settingsPath,     "Downtrace Offset",     SLIDERINT, 0, 64);
    this.mindmg =               new UIElement(settingsPath,      "Mindmg",               SLIDERINT, 1,101);
    this.mindmgOverride =       new UIElement(settingsPath,      "Mindmg Override",      SLIDERINT, 1,101);

    //UI.AddHotkey(["Scripts", "Keys", "JS Keybinds"], "Disable Selection", "Disable Selection");

    //World Visuals
    UI.AddSliderInt(visualsPath, "World Visuals",0,0)

    
    this.circleRadius =         new UIElement(visualsPath,      "Circle Radius",            SLIDERFLOAT, 1, 32);
    
    this.activeOutlineColor =   new UIElement(visualsPath,      "Active Outline Color",     COLORPICKER);
    this.activeColor =          new UIElement(visualsPath,      "Active Color",             COLORPICKER);

    this.inactiveOutlineColor = new UIElement(visualsPath,      "Inactive Outline Color",   COLORPICKER);
    this.inactiveColor =        new UIElement(visualsPath,      "Inactive Color",           COLORPICKER);

    this.dormantOutlineColor =  new UIElement(visualsPath,      "Dormant Outline Color",    COLORPICKER);
    this.dormantColor =         new UIElement(visualsPath,      "Dormant Color",            COLORPICKER);

    UI.AddSliderInt(visualsPath,"Indicators",0,0);
    UI.AddSliderInt(visualsPath,"Reload script after setting the font",0,0);
    this.fontName =             new UIElement(visualsPath,      "Font",                     TEXTBOX);
    this.fontSize =             new UIElement(visualsPath,      "Font Size",                SLIDERINT, 1, 64);
    

    this.activePeekColor =      new UIElement(visualsPath,      "Peek Active",              COLORPICKER);
    this.inactivePeekColor =    new UIElement(visualsPath,      "Peek Inactive",            COLORPICKER);
    this.returnPeekColor =      new UIElement(visualsPath,      "Peek Returning",           COLORPICKER);

    this.peekTextX =            new UIElement(visualsPath,      "Peek Text x",              SLIDERINT,0,3840);
    this.peekTextY =            new UIElement(visualsPath,      "Peek Text y",              SLIDERINT,0,2160);


    this.PeekTimerColor =       new UIElement(visualsPath,      "Peek Timer Color",         COLORPICKER);
    this.peekTimerX =           new UIElement(visualsPath,      "Peek Timer x",             SLIDERINT, 0,3840);
    this.peekTimerY =           new UIElement(visualsPath,      "Peek Timer y",             SLIDERINT,0,2160);

    this.posTextColor =         new UIElement(visualsPath,      "Point Position Color",     COLORPICKER);
    this.posTextX =             new UIElement(visualsPath,      "Point Position x",         SLIDERINT, 0,3840);
    this.posTextY =             new UIElement(visualsPath,      "Point Position y",         SLIDERINT, 0,2160);

    this.hsVisual =             new UIElement(visualsPath,      "Hitscan Visualization",    CHECKBOX);
    this.hsVisualHeadOnly =     new UIElement(visualsPath,      "Draw To Head Only",        CHECKBOX);
    this.hsLineColor =          new UIElement(visualsPath,      "HS Line Color",     COLORPICKER);

    
    this.autoPeek =             new UIElement(keybindsPath, "Auto Peek", HOTKEY, "Auto Peek");
    this.selectPos =            new UIElement(keybindsPath, "Select Position", HOTKEY, "Select Position");
    this.HSMindmgOverride =     new UIElement(keybindsPath, "Enable Hitscan Mindmg Override", HOTKEY, "HS MD Override")
    
    this.DrawPeekIndicator = function()
    {

        var font = Render.GetFont(this.fontName.Get(), this.fontSize.Get(), false);
        if(font == null){ return;}
        var peekColor;
        switch(this.phase)
        {
            case PHASE_DORMANT:
                peekColor = this.inactivePeekColor.Get()
                break;
            case PHASE_SCAN:
                peekColor = this.inactivePeekColor.Get()
                break;
            case PHASE_PEEK:
                peekColor = this.activePeekColor.Get()
                break;
            case PHASE_RETURN:
                peekColor = this.returnPeekColor.Get()
                break;
        }
                

        Render.String(this.peekTextX.Get(), this.peekTextY.Get(), 0, "PEEKING", peekColor, font);

        
        
        if(this.phase == PHASE_PEEK)
        {
            
            Render.String(this.peekTimerX.Get(), this.peekTimerY.Get(), 0, "Force Returning After " + (this.forceDisableTime.Get() - this.forceReturnTimer).toString() + " Ticks",this.PeekTimerColor.Get(), font)
        }
        else
        {
            Render.String(this.peekTimerX.Get(), this.peekTimerY.Get(), 0, "Peeking After " + (this.enableDelay.Get() - this.peekOutTimer).toString() + " Ticks", this.PeekTimerColor.Get(), font)
        }
        
        
        Render.String(this.posTextX.Get(), this.posTextY.Get(), 0, "Current Point Position: " + directions[this.peekPosPhase], this.posTextColor.Get(), font);
    };

    this.RenderSelectedPosition = function()
    {

        if(this.peekPoint != undefined)
        {
            
            localPlayer = Entity.GetLocalPlayer();
            originPos = this.peekPoint.Copy();
            originPos.y += Entity.GetProp(localPlayer, "CBasePlayer", "m_vecViewOffset[2]")[0];
            screenPos = Render.WorldToScreen(originPos.GetArr())
            
            var outlineColor;
            var color;
            switch(this.phase)
            {
                case PHASE_DORMANT:
                    outlineColor = this.dormantOutlineColor.Get()
                    color = this.dormantColor.Get()
                    break;
                case PHASE_SCAN:
                    outlineColor = this.inactiveOutlineColor.Get()
                    color = this.inactiveColor.Get()
                    break;
                case PHASE_PEEK:
                    outlineColor = this.activeOutlineColor.Get()
                    color = this.activeColor.Get()
                    break;
                case PHASE_RETURN:
                    outlineColor = this.activeOutlineColor.Get()
                    color = this.activeColor.Get()
                    break;
            }
            //Renders selected pos circles
            Render.Filled3DCircle(this.peekPoint.GetArr(), this.circleRadius.Get(), 360, 0, outlineColor, color)
            Render.FilledCircle(screenPos[0],screenPos[1],10, color)
        }
        //Renders start circle
        
        if(this.startPoint != undefined)
        {
            var color;
            var outlineColor;
            if(this.autoReturnActive)
            {
                color = this.activeColor.Get()
                outlineColor = this.activeOutlineColor.Get()
            }
            else
            {
                color = this.inactiveColor.Get()
                outlineColor = this.inactiveOutlineColor.Get();
            }
            Render.Filled3DCircle(this.startPoint.GetArr(), this.circleRadius.Get(), 360, 0, outlineColor, color);
        }
            
        
    };

    this.GetHitboxes = function()
    {

        if(this.hitboxesSetting.Get() != this.hitboxesSettingCache)
        {
            this.hitboxesSettingsCache = this.hitboxesSetting.Get()
            this.hitboxes = [];
            //iterate through hitboxes
            for(i = 0;i < 19;i++)
            {
                if(GetDropdownValue(this.hitboxesSetting.Get(), i))
                {
                    this.hitboxes.push(i);
                }
            }
        }

    }


    this.Hitscan = function(originPos, target, hitboxes)
    {

        if(Entity.IsValid(target) == true && Entity.IsAlive(target) && Entity.IsDormant(target) == false)
        {
            localPlayer = Entity.GetLocalPlayer()
            originPos.y += Entity.GetProp(localPlayer, "CBasePlayer", "m_vecViewOffset[2]")[0];
            maxDmg = -1;
            currentDmg = -1;
            for(var i in hitboxes)
            {
                
                currentDmg = Trace.Bullet(localPlayer, target, originPos.GetArr(), Entity.GetHitboxPosition(target, hitboxes[i]))[1]
                //overrides the maxdmg thing if damage is increased relative to previous results
                maxDmg = currentDmg > maxDmg ? currentDmg : maxDmg
                //did i do this right? i hope i did....

            }
            return maxDmg; 
        }   
        else 
        {
            return -1;
        }
    }
    this.CheckTargets = function()
    {
        if(this.phase != PHASE_SCAN || this.triggerPeek || this.peekPoint == undefined) 
        {
            return;
        }
        this.enemies = Entity.GetEnemies();
        var originPos = this.peekPoint.Copy();

        //originPos[2] += Entity.GetProp(localPlayer, "CBasePlayer", "m_vecViewOffset[2]")[0];
        //check each enemy's hitbox cache poses
        for(i in this.enemies)
        {
            
            var enemyDamage = this.Hitscan(originPos, this.enemies[i], this.hitboxes);
            var enemyHealth = Entity.GetProp(this.enemies[i], "CBasePlayer", "m_iHealth");

            //UI.GetValue(["Rage", "General", "General","Key assignment", "Damage override"])
            var mindmg = this.HSMindmgOverride.Get() ? this.mindmgOverride.Get() : this.mindmg.Get();
            if(enemyDamage >= mindmg || enemyDamage > enemyHealth)
            {
                //sets the trigger
                this.triggerPeek = true;
                
                return;
            }
        };
    }
    //The default autopeek
    //AKA the "shoot and go back" auto peek
    this.AutoReturn = function()
    {
        //Binds the autopeek key to select
        UI.SetValue(defAutoPeekPath,0x5D);
        UI.SetHotkeyState(defAutoPeekPath, "None")
        

        if(this.autoPeek.Get())
        {
            
            //Set point if no point exist
            UI.SetHotkeyState(defAutoPeekPath, "Always")
            if(this.startPoint == undefined)
            {
                this.startPoint = GetLocalOrigin();
            }
            if(this.autoReturnActive == true)
            {
                UI.SetHotkeyState(dtPath, "None");
                Exploit.DisableRecharge();

                if(MoveToPoint(this.startPoint) < 1)
                {
                    UI.SetHotkeyState(dtPath, "Toggle");
                    Exploit.EnableRecharge();
                    Exploit.Recharge();
                    
                    //this.autoPeek.Toggle();
                    this.autoReturnActive = false;
                    this.startPoint = undefined;
                    this.phase = PHASE_DORMANT;
                    this.Reset()
                }
            }
        }
        else
        {
            this.startPoint = undefined;
            Exploit.EnableRecharge();
        }
        
    }
    this.GetPeekPosition = function()
    {
        if(this.selectPos.Get())
        {
            this.selectPos.Toggle();
            this.peekPosPhase++;
            if(this.peekPosPhase > 2)
            {
                this.peekPosPhase = 0;
                peekActive = false;
                this.Reset();
                return;
            }
     
        }
        if(this.phase >= PHASE_PEEK)
        {
            return;
        }
        angle = new Angles(Local.GetCameraAngles());

        if(this.peekPosPhase == 0)
        {
            UI.SetHotkeyState(["Rage", "Anti Aim","General", "Key assignment", "Right direction"], "Toggle");
            UI.SetHotkeyState(["Rage", "Anti Aim", "General", "Key assignment","Left direction"], "Toggle"); 
            this.peekPoint = undefined;
            this.phase = PHASE_DORMANT;
            return;
            
        }
        if(this.peekPosPhase == 1)
        {
            angle.yaw += 90;
            UI.SetHotkeyState(["Rage", "Anti Aim","General", "Key assignment", "Right direction"], "Always");
            UI.SetHotkeyState(["Rage", "Anti Aim", "General", "Key assignment","Left direction"], "Toggle"); 
        }
        else
        {
            angle.yaw -= 90;   
            UI.SetHotkeyState(["Rage", "Anti Aim","General", "Key assignment", "Right direction"], "Toggle");
            UI.SetHotkeyState(["Rage", "Anti Aim", "General", "Key assignment","Left direction"], "Always");
            
        }
        angle.pitch = 0;
        angle.roll = 0;

        
        var length = this.pointDistance.Get();
        pointVec = angle.ToVec();
        pointVec.y = 0;

        pointVec.Scale(length);


        entity = Entity.GetLocalPlayer();
        originPos = new Vector(Entity.GetProp(entity, "CBaseEntity", "m_vecOrigin"));
        var upOffset = UI.GetValue(settingsPath.concat("Uptrace Offset"));
        var downOffset = UI.GetValue(settingsPath.concat("Downtrace Offset"));


        //pointVec + playerpos
        var expectedPoint = originPos.Add(pointVec);


    
        result = Trace.Line(entity, originPos.GetArr(), expectedPoint.GetArr());
        
        //If there is no obstruction, attempt downtrace
        if(result[1] >= 0.999)
        {
            //Trace down from the expected point as there is no obstruction
            var downExpPoint = expectedPoint.Add(new Vector(und, 0, -downOffset, 0));

            dresult = Trace.Line(entity, expectedPoint.GetArr(), downExpPoint.GetArr());
            this.peekPoint = new Vector(und, expectedPoint.x, expectedPoint.y - (downOffset * dresult[1]), expectedPoint.z);
        }
        //Attempt uptrace otherwise
        else
        {

            //Start trace from a point higher than player origin
            var upOrigin = originPos.Copy();
            upOrigin.y += upOffset;
            //Towards expected point + y
            var upExpPoint = upOrigin.Add(pointVec);
            //Result of the horizontal trace
            uhresult = Trace.Line(entity, upOrigin.GetArr(), upExpPoint.GetArr());
            //If the horizontal trace didn't hit anything
            if(uhresult[1] >= 0.999)
            {
                //Attempt downtrace at the resultant point
                uvResult = Trace.Line(entity, upExpPoint.GetArr(), expectedPoint.GetArr());
                this.peekPoint = new Vector(und, expectedPoint.x, expectedPoint.y + pointVec.y * (1 - uvResult[1]), expectedPoint.z)
            }
            else
            {
                this.peekPoint = new Vector(und, expectedPoint.x - pointVec.x * (1 - uhresult[1]), upExpPoint.y, expectedPoint.z - pointVec.z * (1 - uhresult[1]))
            }
            
        }

    }
    
    this.FindHSLines = function()
    {
        
        if(!this.hsVisual.Get() || this.peekPoint == undefined)
        {
            this.hsLines = []
            return;

        }
        if(this.findHSLinesTimer < 0)
        {
            this.findHSLinesTimer++;
            return;
        }
        else
        {
            this.findHSLinesTimer = 0;
        }
        this.hsLines = []
        for(i in this.enemies)
        {
            var target = this.enemies[i];
            var origin = this.peekPoint.Copy();
            var color = this.hsLineColor.Get()
            origin.y += Entity.GetProp(Entity.GetLocalPlayer(), "CBasePlayer", "m_vecViewOffset[2]")[0];
            if(Entity.IsValid(target) == true && Entity.IsAlive(target) && Entity.IsDormant(target) == false)
            {
                if(this.hsVisualHeadOnly.Get())
                {
                    var pos = new Vector(Entity.GetHitboxPosition(target, 0));
                    this.hsLines.push(Trace.LineToWall(origin,pos));
                    

                }
                else
                {
                    this.GetHitboxes();
                    for(j in this.hitboxes)
                    {
                        var pos = new Vector(Entity.GetHitboxPosition(target, this.hitboxes[j]));
                        this.hsLines.push(Trace.LineToWall(origin, pos));
                    }
                }
                
            }
        } 
    }
    this.DrawHSLines = function()
    {
        if(!this.hsVisual.Get() || this.peekPoint == undefined)
        {
            return;

        }
        var origin = this.peekPoint.Copy()
        origin.y += Entity.GetProp(localPlayer, "CBasePlayer", "m_vecViewOffset[2]")[0];
        for(i in this.hsLines)
        {
            Render.Line3D(origin, this.hsLines[i], this.hsLineColor.Get())
            
        }
        
    }
    
    this.StartPeek = function()
    {
        if(this.phase == PHASE_PEEK)
        {
            if(MoveToPoint(this.peekPoint) < 1)
            {
                this.phase = PHASE_RETURN;
            }
        }
    }

    this.TickTimer = function()
    {
        if(this.phase == PHASE_DORMANT)
        {
            return;
        }
        //Peek out timer
        if(this.phase == PHASE_SCAN)
        {
            if(this.triggerPeek)
            {
                this.peekOutTimer++;
                if(this.enableDelay.Get() <= this.peekOutTimer)
                {
                    this.phase = PHASE_PEEK;
                }

            }

        }
        else if(this.phase == PHASE_PEEK)
        {
            this.forceReturnTimer++;
            if(this.forceDisableTime.Get() <= this.forceReturnTimer)
            {
                
                this.phase = PHASE_RETURN;
                this.autoReturnActive = true;
            }
        }
    }
    this.ResetCheck = function()
    {
        if(this.peekPosPhase == 0)
        {
            this.phase = PHASE_DORMANT;
        }
        else if(this.peekPosPhase == PHASE_RETURN && !this.autoReturnActive)
        {
            this.phase = PHASE_DORMANT;
        }

    }
    
    this.Reset = function()
    {
        UI.SetHotkeyState(["Rage", "Anti Aim","General", "Key assignment", "Right direction"], "Toggle");
        UI.SetHotkeyState(["Rage", "Anti Aim", "General", "Key assignment","Left direction"], "Toggle"); 
        this.peekOutTimer = 0;
        this.triggerPeek = false;
        //Phase 2 -> 3
        this.forceReturnTimer = 0;
        this.returnTimer = 0;
        this.enemies = Entity.GetEnemies()
    
        this.hitboxesSettingCache = 0;
        this.hitboxes = []
    
        this.phase = PHASE_DORMANT;
        this.autoReturnActive = false;
        UI.SetHotkeyState(dtPath, "Toggle");
        
    }
    

    this.OnCM = function()
    {
        this.AutoReturn();
        this.TickTimer();
        this.FindHSLines();
        this.GetPeekPosition();
        if(this.autoPeek.Get())
        {
            if(this.phase <= PHASE_SCAN)
            {
                this.phase = PHASE_SCAN;
            }
            
        }
        else
        {
            this.Reset()
        }
        switch(this.phase)
        {
            case PHASE_DORMANT:
                
                break;
            case PHASE_SCAN:
                this.GetPeekPosition();
                this.GetHitboxes();
                this.CheckTargets();
                
                break;
            case PHASE_PEEK:
                this.StartPeek();
            case PHASE_RETURN:
                //this.autoReturnActive = true;
                break;
        }

    }
    this.OnDraw = function()
    {
        this.DrawPeekIndicator();
        this.RenderSelectedPosition()
        this.DrawHSLines();
    }
    this.OnLocalPlayerFire = function()
    {
        this.autoReturnActive = true;
        this.phase = PHASE_RETURN;
    }
    this.OnLocalPlayerDeath = function()
    {
        this.phase = PHASE_DORMANT;
        this.Reset();
    }
            

}


var AutoPeekModule = new AutoPeeker();
function OnCM()
{

    AutoPeekModule.OnCM();

}
function OnDraw()
{
    
    AutoPeekModule.OnDraw();
}

function OnDeath()
{
    if(Entity.GetEntityFromUserID(Event.GetString("userid")) == Entity.GetLocalPlayer())
    {
        AutoPeekModule.OnLocalPlayerDeath();
    }
}
function OnFire()
{
    if(Entity.GetEntityFromUserID(Event.GetString("userid")) == Entity.GetLocalPlayer())
    {
        AutoPeekModule.OnLocalPlayerFire();
    }
    
}
function OnRBFire()
{
    AutoPeekModule.OnLocalPlayerFire();
}
Cheat.RegisterCallback("weapon_fire","OnFire")
Cheat.RegisterCallback("CreateMove","OnCM")
Cheat.RegisterCallback("Draw","OnDraw");
Cheat.RegisterCallback("ragebot_fire", "OnRBFire")
Cheat.RegisterCallback("player_death", "OnDeath")


