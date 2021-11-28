
/*Index explanations:
    AA[i]:preset number



        AA[i][0][x]:values for static
            0: real offset
            1: fake offset
            2: lby offset


        
        AA[i][1][x]:values for jitter
            0: real offset
            1: fake offset
            2: lby offset

            3: real jitter
            4: fake jitter
            5: lby jitter

            6: real randomized intervals(1 or 0)
            7: fake randomized intervals(1 or 0)
            8: lby randomized intervals(1 or 0)

            9: real jitter delay
            10: fake jitter delay 
            11: lby jiter delay

            12: real jitter interval offset
            13. fake jitter interval offset
            14. lby jitter interval offset


        
        AA[i][2][x]: values for switch
            AA[i][2][0]: values for real offset
            AA[i][2][1]: values for fake offset
            AA[i][2][2]: values for lby offset
            
            //calculated internally
            AA[i][2][3]: values for max index of switch

            (delay[0]=time between 0--->1)
            AA[i][2][4]: values for real offset switch delay
            AA[i][2][5]: values for fake offset switch delay
            AA[i][2][6]: values for lby offset switch delay

            

        AA[i][3][x]: values for sway
            0: real start
            1: fake start
            2: lby start

            //calculated internally
            3: real delta
            4: fake delta
            5: lby delta
        
           
            6: real sway time
            7: fake sway time
            8: lby sway time
            

            
        AA[i][4][x]: values for random
            0: real offset
            1: fake offset
            2: lby offset
            3: real delta
            4: fake delta
            5: lby delta

            6: real randomized intervals(1 or 0)
            7: fake randomized intervals(1 or 0)
            8: lby randomized intervals(1 or 0)

            9: real delay
            10: fake delay
            11: lby delay

            12: real randomize interval offset
            13. fake randomize interval offset
            14. lby randomize interval offset
    


        AA[i][5][x]: active mode(0=static,1=jitter,2=switch,3=sway,4=random) for real(0),fake(1), and lby(2)



        AA[i][6]: name of aa preset
*/

/*
ALSO ADD FORCE SWITCH KEY

AA_MANAGER index explanations

0=Standing 
1=Running 
2=Slow-Walking
3=Crouching 
4=In Air 
5=On Peek 
6=Fake-Ducking
7:HS Active
8:DT Active
9:On Use
10:Knifing
11:Zeusing
12:Override Key 1 
13:Override Key 2     
14:Override Key 3
15:Override Key 4


[i][0]: General Settings:
    0: no/conditional switch(only when antibruteforce)
    1: sequenced switch
    2: random switch

[i][1]:
    0: no antibruteforce
    1: complex antibruteforce(forces an aa switch,if switch enabled)

[i][2]:
    INT representing active multidropdown options

[i][3]: Switch Delay

[i][4]: Switch Delta

*/
var presetTemplate=
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
    [0,0,0],
    "Mana Default AA"
];
var AA=[presetTemplate];
var conditionTemplate=
[
    0,
    0,
    0,
    0,
    0
];
