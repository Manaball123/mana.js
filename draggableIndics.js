const { UI, Input } = require("./onetap");

class stringIndicator
{
    constructor(font,initialString,initialX,initialY,initialColor,hitboxW,hitboxH)
    {
        this.font = font
        this.string = initialString;
        this.x = initialX;
        this.y = initialY;
        this.color = initialColor;
        this.hitboxW = hitboxW;
        this.hitboxH = hitboxH;
    };
    //if cursor is on it and m1 pressed or something
    isSelected() 
    {
        if(UI.IsMenuOpen()==true)
        {
            //key for m1
            if(Input.IsKeyPressed(01))
            {
                cursorPos = Input.GetCursorPosition()
                if(cursorPos[0] <= (this.x + (hitboxW/2)) && cursorPos[0] >= (this.x - (hitboxW/2)) && cursorPos[1] <= (this.y + (hitboxH/2)) && cursorPos[1] >= (this.y + (hitboxH/2)))
                {
                    return true;
                }
            }
        }
        return false;
    }

    move(pos)
    {
        this.x = pos[0]
        this.y = pos[1]
    }

    render()
    {
        Render.String(this.x,this.y,1,this.string,this.color,this.font)
    }

}











