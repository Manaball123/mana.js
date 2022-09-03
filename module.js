

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
//UI Elements grouped together, behavior can be changed depending on category selected
//(i.e. all ragebot weapon options)
//path arg should be pointed to the sheet where the elements are located
//members arg must be an object(key = name, value = type)
//Note that the actual settings are not saved in this object
function ElementCollection(path, collectionName, categoryNames, members, memberSettings)
{
    this.enabled = true;
    this.path = path;
    this.members = {};
    this.collectionName = collectionName;

    
    Object.keys(members).forEach(function(key)
    {
        this.members[key] = new UIElement(path, key, members[key], )
    })
}





function Module(path, name)
{

}