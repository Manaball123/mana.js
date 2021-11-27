
var template=
[
    [0,0,0], //static
    [0,0,0,0,0,0,0,0,0,1.0,1.0,1.0,1.0,1.0,1.0], //jitter
    [
        //arrays for switch, can potentially be changed
        [0,0],//real
        [0,0],//fake
        [0,0],//lby
        [1,1,1],//real,fake,lby max index of phase
        [1.0,1.0],//real delay
        [1.0,1.0],//fake delay
        [1.0,1.0]//lby delay
        
    ],
    [0,0,0,0,0,0,1.0,1.0,1.0], //sway
    [0,0,0,0,0,0,0,0,0,1.0,1.0,1.0,1.0,1.0,1.0], //random
    [0,0,0],//modes
    "Mana Default AA",//name
];

var testArray=[template]
function main()
{
    //Cheat.Print(toString(testArray[0]));
    Cheat.Print("value of arr is "+testArray.toString()+"\n")
    Cheat.Print("value of 6eth eleemnt is"+testArray[0][6]+"\n")
}


Cheat.RegisterCallback("Draw","main");






