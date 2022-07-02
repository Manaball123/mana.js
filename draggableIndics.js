//const { UI, Input } = require("./onetap");

function StringIndicator(initialString, initialColor, fontName, fontSize, initialX, initialY, hitboxW, hitboxH, centered)
{
    this.screenSize = Render.GetScreenSize();
    this.fontName = fontName;
    this.fontSize = fontSize * (this.screenSize[0] / 2560);
    this.string = initialString;
    this.color = initialColor;
    this.x = initialX == undefined ? 200 : initialX;
    this.y = initialY == undefined ? 200 : initialY;
    this.x = this.x * (this.screenSize[0] / 2560)
    this.y = this.y * (this.screenSize[0] / 2560)
    this.hitboxW = hitboxW == undefined ? 200 : hitboxW;
    this.hitboxH = hitboxH == undefined ? 200 : hitboxH;
    this.centered = centered == undefined ? 0 : 1;

    //this.font = Render.GetFont(this.fontName, this.fontSize, false);
    
    //if cursor is on it and m1 pressed or something
    this.IsSelected = function() 
    {
        if(UI.IsMenuOpen())
        {
            //key for m1
            if(Input.IsKeyPressed(0x01))
            {
                cursorPos = Input.GetCursorPosition()
                cursorPos[0] -= (this.hitboxW / 2);
                //I dont know why this works
                //But trust me it does
                //cursorPos[1] -= (this.hitboxH / 2);
                if(cursorPos[0] >= this.x && cursorPos[0] <= this.x + this.hitboxW);
                {
                    if(cursorPos[1] >= this.y && cursorPos[1] <= this.y + this.hitboxH)
                    return true;
                }
            }
        }
        return false;
    }

    this.Move = function(pos)
    {
        this.x = pos[0];
        this.y = pos[1];
    }

    this.Drag = function()
    {
        if(this.IsSelected())
        {
            
            cursorPos = Input.GetCursorPosition()
            cursorPos[0] -= (this.hitboxW / 2);
            cursorPos[1] -= (this.hitboxH / 2);
            //Cheat.Print(cursorPos.toString())
            this.Move(cursorPos)
        }
    }

    this.Draw = function()
    {   
        Render.String(this.x, this.y, this.centered, this.string, this.color, this.font);
    }
    this.DrawHitbox = function()
    {
        //Cheat.Print("called")
        Render.FilledRect(this.x,this.y,this.hitboxW,this.hitboxH, [255,255,255,128])
    }
    
    this.GetHitboxSize = function()
    {
        this.screenSize = Render.GetScreenSize()
        //The best estimate of the correct width
        this.hitboxW = this.fontSize * this.string.length * 0.6;
        this.hitboxH = this.fontSize;
    }

    this.UpdateFont = function(name, size)
    {

        this.fontName = fontName;


        this.font = Render.GetFont(this.fontName, this.fontSize, false);


    }

    this.OnResChange = function()
    {

        var scale = Render.GetScreenSize()[0] / this.screenSize[0];
        this.screenSize = Render.GetScreenSize()
        this.y = this.y * scale;
        this.x = this.x * scale;
        this.fontSize = fontSize * scale;
    }

    this.OnDraw = function()
    {
        /*
        if(Render.GetScreenSize()[0] != this.screenSize[0])
        {
            this.OnResChange()
        }
        */
        if(this.font == undefined)
        {
            this.UpdateFont()
        }
        
        this.GetHitboxSize()
        this.Drag()
        this.Draw()
        if(UI.IsMenuOpen())
        {
            this.DrawHitbox()
        }
        
    }

}


var str1 = new StringIndicator("AAAAAAA", [255,255,255,255], "calibri.ttf", 64);

function OnDraw()
{
    str1.OnDraw()

}

Cheat.RegisterCallback("Draw", "OnDraw")














