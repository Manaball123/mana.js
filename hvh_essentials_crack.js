UI.AddSubTab(["Rage", "SUBTAB_MGR"], "HvH Essentials"), 
UI.AddCheckbox(["Rage", "SUBTAB_MGR", "HvH Essentials", "SHEET_MGR", "HvH Essentials"], "HvH Essentials"), 
UI.AddHotkey(["Rage", "SUBTAB_MGR", "General", "SHEET_MGR", "General", "Key assignment"], "Dodge bruteforce", "Dodge"), 
UI.AddHotkey(["Rage", "SUBTAB_MGR", "General", "SHEET_MGR", "General", "Key assignment"], "Wait for on shot backtrack", "Waiting for shot"), 
UI.AddCheckbox(["Rage", "SUBTAB_MGR", "HvH Essentials", "SHEET_MGR", "HvH Essentials"], "Reversed freestanding"), 
UI.AddCheckbox(["Rage", "SUBTAB_MGR", "HvH Essentials", "SHEET_MGR", "HvH Essentials"], "Desync on use"), 
UI.AddCheckbox(["Rage", "SUBTAB_MGR", "HvH Essentials", "SHEET_MGR", "HvH Essentials"], "Safe point on limbs"), 
UI.AddCheckbox(["Rage", "SUBTAB_MGR", "HvH Essentials", "SHEET_MGR", "HvH Essentials"], "Ragebot fire logs"), 
UI.AddCheckbox(["Rage", "SUBTAB_MGR", "HvH Essentials", "SHEET_MGR", "HvH Essentials"], "Instant doubletap"), 
UI.AddCheckbox(["Rage", "SUBTAB_MGR", "HvH Essentials", "SHEET_MGR", "HvH Essentials"], "Instant recharge"), 
UI.AddHotkey(["Rage", "SUBTAB_MGR", "General", "SHEET_MGR", "General", "Key assignment"], "Override minimum dmg key", "Override minimum dmg"), 
UI.AddSliderInt(["Rage", "SUBTAB_MGR", "HvH Essentials", "SHEET_MGR", "HvH Essentials"], "Minimum damage", 0, 130), 
UI.AddCheckbox(["Rage", "SUBTAB_MGR", "HvH Essentials", "SHEET_MGR", "HvH Essentials"], "Indicators"), 
UI.AddCheckbox(["Rage", "SUBTAB_MGR", "HvH Essentials", "SHEET_MGR", "HvH Essentials"], "Draw HEAD/BAIM flags"), 
UI.AddCheckbox(["Rage", "SUBTAB_MGR", "HvH Essentials", "SHEET_MGR", "HvH Essentials"], "Draw SAFE flags"), 
UI.AddCheckbox(["Rage", "SUBTAB_MGR", "HvH Essentials", "SHEET_MGR", "HvH Essentials"], "Draw danger signs"), 
UI.AddCheckbox(["Rage", "SUBTAB_MGR", "HvH Essentials", "SHEET_MGR", "HvH Essentials"], "Draw predicted damage"), 
UI.AddCheckbox(["Rage", "SUBTAB_MGR", "HvH Essentials", "SHEET_MGR", "HvH Essentials"], "Inverter arrows"), 
UI.AddColorPicker(["Rage", "SUBTAB_MGR", "HvH Essentials", "SHEET_MGR", "HvH Essentials"], "Inverter arrows color"), 
UI.SetColor(["Rage", "SUBTAB_MGR", "HvH Essentials", "SHEET_MGR", "HvH Essentials", "Inverter arrows color"], [255, 165, 0, 230]), 
UI.AddMultiDropdown(["Rage", "SUBTAB_MGR", "HvH Essentials", "SHEET_MGR", "HvH Essentials"], "Features to display", ["Dodge bruteforce", "Doubletap", "Hide shots", "Safe point", "Override min dmg"]), 
UI.AddCheckbox(["Rage", "SUBTAB_MGR", "HvH Essentials", "SHEET_MGR", "HvH Essentials"], "Enable head/baim conditions"), 
UI.AddCheckbox(["Rage", "SUBTAB_MGR", "HvH Essentials", "SHEET_MGR", "HvH Essentials"], "Predict doubletap damage"), 
UI.AddMultiDropdown(["Rage", "SUBTAB_MGR", "HvH Essentials", "SHEET_MGR", "HvH Essentials"], "Force HEAD conditions", ["Inaccurate desync", "Target is in air", "Target crouching (T side)", "Shot"]), 
UI.AddSliderInt(["Rage", "SUBTAB_MGR", "HvH Essentials", "SHEET_MGR", "HvH Essentials"], "Inaccurate desync delta", 0, 58), 
UI.SetValue(["Rage", "SUBTAB_MGR", "HvH Essentials", "SHEET_MGR", "HvH Essentials", "Inaccurate desync delta"], 38), 
UI.AddMultiDropdown(["Rage", "SUBTAB_MGR", "HvH Essentials", "SHEET_MGR", "HvH Essentials"], "Force BAIM conditions", ["If lethal", "If slow walking", "If standing", "If target in air", "Crouching"]), 
UI.AddMultiDropdown(["Rage", "SUBTAB_MGR", "HvH Essentials", "SHEET_MGR", "HvH Essentials"], "Force SAFEPOINT conditions", ["If lethal", "If slow walking", "If standing", "If target in air", "Crouching"]), 
UI.AddCheckbox(["Rage", "SUBTAB_MGR", "HvH Essentials", "SHEET_MGR", "HvH Essentials"], "Save FPS"), 
UI.AddCheckbox(["Rage", "SUBTAB_MGR", "HvH Essentials", "SHEET_MGR", "HvH Essentials"], "Jump scout/revolver hitchance"), 
UI.AddSliderInt(["Rage", "SUBTAB_MGR", "HvH Essentials", "SHEET_MGR", "HvH Essentials"], "Hitchance", 0, 100), 
UI.AddCheckbox(["Rage", "SUBTAB_MGR", "HvH Essentials", "SHEET_MGR", "HvH Essentials"], "Override no scope hitchance"), 
UI.AddSliderInt(["Rage", "SUBTAB_MGR", "HvH Essentials", "SHEET_MGR", "HvH Essentials"], "No scope hitchance", 0, 100);
var firedThisTick = 0,
    storedShotTime = 0,
    onShotTargets = 0,
    font = null,
    indicatorFonts = null,
    fontFlags = 0,
    shouldDisable = false,
    shouldDisableOverride, info = 0,
    safeTargets = 0,
    dynamicDamage = 0,
    color = [255, 0, 0, 255],
    conditionFlags = "webster|awp112|dr98867|ray|slanderhvh|makeitbig|alynzew|finny3433|deity|zaldy|quakehvh|shifto|bgbenjamin1|dylanc|medusaax|sadenjmith|itzniico|gvk27|kyle33223|jakubezz|577777|skeletonimproved|r4xer1|lizauwu|bditt|xvasu|impecunity|jvvv|soulawaken1103|melonbear|nadindi|gregorybruh|theshy112|dinkelberg|tudorcoste2|bbhvhh|raude|tayloul0l|avrx|manofgod|wkxd16|warpedirish|buerv|d34nwyn|umiranhaa|ryanthepanda|greencobra|mercymamba|lee0181|iluckbr|simian666|akulla|gab|vatrax|hvhkiller|polish1227|bigi|hawiz|thegeneralguy|zusekiller|krajewski12|1martin|eugek3|always321312312|kden|deadaf|godless|parasitisch|jhee|snnick|sui|limit|adr1an|idontknowho|nouisbae|snooze|kronzy|nickv3|signal|woofcsgo|grumpy1|kroshiou|yoni|sbmvn|billy22324|stepinpr|kaytusha|osku|jweilage|preclik|qwertygamer1227|snipi|drahokam|stone|xello|arus|ash28604|lukazel|edwardfly|nmthegoat|c0br4|anon990|tinted|wthz5240|kezycs|dfergse|loosey|qswain|bogdan56|wadaspro|sleeker|cazzzper|coolkidz|mazik|xen|lordbyron|dxgamerwar890|fer666|mtz1337|kornel|guu|testingxd|kroko|xchange95|manelevyc|actuallyakari|narji|masuod7788|binder|user3860|kulakovsky|chang321|xyro|razvanel|vthiirsty|psx8m|cyrex212|pnda|lighting1|cy1026|giabach123|dennisman98|kuyarebel|aldix|primx2|nocster|dillan|nametam|playingonxbox360|hydration|xiangyu940111|mikelol|whyireland|tappingskeet|yezus|qfreed|umbludeghizat|teehee|gflowz1337|zepzy|mircea001|houdinii|undercoversuperstar|taifnxd|weariful1|deeside|whtchad|coolman0857|mrbadii|mrbedii|oxy|color123|andreimanevra|imnotthatgay|stefan2223|mariot12|death2002|siegfried|synergynn|bestonetapuserna|iownapkz|krafty|borohvh|prodamgarage|thebgmamma|milletporridge|upset|aliancegfx|mom|blaine|zahx|knolles|omegumino|blameme|consensualsocks|yakk|shittybacon|jinxycat|dylan1k|skeletonar|junelee0303|nipo|kinknightmare|antoniodetto|fuushila|l4wless174|sneaky|riot|julayisandy|bira|donn|peagah|finallyhvh|noname2020|gubbster3|shinehvh2|renxoffciel|top1btw|allpureapples|hifumi918|exepert|saithhvh|avora|ohtwinki|smol|aaronb1|frostdk|bigyoshi|rey228|herotv1|katanazero|tyler48|loganpls|ruuvimeisseli|cadsbasher|xan|sam89928|hayaiet|rymo|blake|sbkm2b|izodiac|gbriel5666|omni|flondenmachen|aprendiz|jondms|dwarfyfart|swooped|blurry|reyqz|pvnoname|baimqq|nakinami|manilla|utterhvh|eddy|lilgangbank|kijanaxas|alfonsiniuwu|yato0113|banshee|i3709432|grimey6393|pasi35260|mrpoop|pdizzle|yukihvh|haxer|danielbro2020|dwg132|w1kyybenzz|trl420|xbarbarionx|hackensch|vicstyl3|softness|ionutst1|jeppe|kiroshu|rayzen6969|khmora|fearmeiru|0000|jskoke06|yeezymeister|narts|creposbeleaua|tylerhvh|instantramen|socks|wimter|mrhackerman404|vladosky|shibevevo|wizard84|kang|dukk1337|bi93|andresxphantom|hardcore|fl3xgod|sckinsey|leech6969|liufo|mvcieqq|ethylene|naitang|b4stion|dylanplaysmc|n1oss|hilley|belmondo|rezox|jooey|tatsuo|m1nute|dankmeme|willtee18|nanders|tapir|caenito|ieuanruskiman|sweg|doozie|theoofdog|arska1|yeeto|nomula|nomula|boigestboig209|hoodgangster1|toesuckertom|skano|3608456807|gaslight|izmgi|braazy|cartierj|carsonhvh|aurimaz|lolcats39|freezin|jimmydeansbeans|wannahvh|dwg133|winer|rushmyhp|falcon8182|saggynuggets|danispace|some0ne|noblebitch|renegade454|gimmy|03k|aarontkong|eloxez781|hexor|phoca|b1scoito1337|matteosalvini|yufaan8|reazon8808|kiragod|ondrills|botralph|memeyy|xonu|falcon|kiragod|osleya|mjr|kamaveli|zeddy|beam|chase|pedrou1512|beerus|gamelocked|noxqu|zecks|cr37zu|fallenautistic|joker88|abccc|inhonia|peek39|xrvsgd|nugweasle|x1x|badxo|randomhacks|idkyet|picodegallo|karlssn|d8rio|mischievious|uwu|encodedloss|johndough|leivo22|bgtbelcher|sergiii|hexci|ratnikoffz1337|wizardnalis|kvnc|darocze|digital2k18|thehash|mag7swag7|austinhemmer|space303|peachy3|tvojamamka58|relax|shwaggy|gradient|xmanic|nimpey|wahab|thailol123|darth|y258059|pabwo|espxyz|arc867|bluenhvh10000|wowee|cloutpizzadog|vamp1re|n0tfakegamer|arc867|g1hvhlegenden|cookiegamer|cole1930|uidbomja|kanna|patrickbad|theosycrat|reflowed|eliasswag|kki|fakeduck|flickzyhvh|hvhbruh|qualetyhotel|belugasvigianus|miggos|spookedonion|limeade|lolhhidude|ukrochagod|marymccc|sweatno|officialcs|snowdd|ellohssa|al1x|aop|nohomoowo|dragonbomb|proxideflqsh|avishay8251|ofrice|cert|kojiro|saug|has|cloutir|y33tman|prxd|kfear|progidio|lilcoco1994|lendario|banankage09|override7777|serjconsumer|koige|dogs03|keop|klaws|ciinex|d3st3|iregister27|zeherchamp|lgz|resurgence|wunna1337|spet7286|sanerui|creoose|loganpls|banthisguy|fraxster|invalidyt|nevergary|victorone|iamyohaha|amber25|redbull|thomaskredpath|puresaltiness|nesahvh|mrsuit|jokwr|chaderall|petteto|fisshka|noxhy|orangerino|overdoxd|w10537543|2bad|nemonoskeet|xufangchuan|hvhloser|xiaowanxiao123|cvcdoido|kayleeyoutuber|matthewthebot|nrj420|imbunny|qq1481109354|uwuowoewe|0ag12247je093743r|dweedz|majikkhvh|noodlesdoodles|ratbastard|antismog|fangwenjump1|kacpejj|xerye|vlonesoldier|zoomies|xrxxves|khadgarcs|dreamdaylights|gabynepotu|wildd|ironmancheater|cepheus|bighackerman112|feyqz|slutch|doozy|breadward|zanetti|holdingdubayuw|smolfyce|znescau|skyfabig|trayshoot|aspentimeee|casia|arcolect|fx43trofc|takenavi|yraniy|sheriffk9|kr0zzfir3|sadgirl|yraniy|rodrigoescobarfranca|maison|ar1n|kidlat|jasonswindekk|foums|ummidklol|fakezonexxx|meli1337|lilganja|gideon|fortniteispoopy|falsely|shishibots|k1tkat|xehniscute|vinicius03|dhdj|robonyantame|mayder|kvmo|topggsher|332366837|lizaarrd|kitty|zyo|kyo900|primos|shokz|eugek|absolutegamerpro|zfee|walkman|r33|pireh|mornz|haunchi|itsstipna|chewsk|sneakyiwnl|magicien|sporky|cemplane|shyguy|peurr|timmy9915|toxei|reis2431|revol|1tap007|jdm|northkoreanmissile|xccni|robya|tyxen|viroxhvh|mantiz4375|mixl|nex77|wumbini|osa|vking5|e3n|native|ishadowi|shagni1032|yayeya|kenneth1231|sadboy|dryness|pinko|europlayer|furionpl|stickowo|r3bel|alex1828|boroolo|fadedfoox|iiyal|2065769482|5pixeles|pneumatic|kentro|alsob|montecristo150|sssources|killershark|urmed|maestroyek|aaa111222333444555|mrnibber|colors0705|sharrpy|sirpa6|white0bama|dima815235|subzerozz|jibran|lucifers0xdoll|nuttyrex|scarr|mrcleanbeanie|lockie2000|aracler|rarksy|phasee|tomcat|fille133706|netix|froze|nixcs|helios|krisz507|tian8383988|b3011412|phare|kornolek|arthurleonel1203|sukubusbento|z0pex|jjustin5315|nikihvh|insidd|toes|frostersouls|b3011412|poura4th|ultrapanda|shooterrrrrr|shaky789|eninoris|dnk20|t33rr0r|jopasek|lamphys|h6n|jackrm|azsbnt|panah|deceptix|doozand28|quesadillaz|slimer8|mizzyy|hungary|crmps|wh1zbiz|bbhvhh|wowoirm|xmystic|domotham|sjhe|deputy|echozii3|dyner|akka3223|forcuz|mumbo|skrtmo|thejimizz|n8than|bruhbruhh|laugeelias|m1chuluj|reggie|onfoenem|ricsizzle|ziroziroisajew123|aape04|m4xy|l2iq|ywnb|dramo|person1|trinity|sizick|noev2|gamergrill|stacywrekt|huh|snoots|toastedfree|royaleking777|julie|betux|otsohvh|fatretard42|minhroyal472|ggwellhacked|samphang96|johhnnyy|alan98|chivo|tsz|onetapbeste|niconiconi|xt8|crxwn|saucissesama|lloyd|ulex|bigpickle|0nyxv1|billisapill|unconstrained|dupedease|1nohand|tenzyph|slore|302200|aer0|realzane|schabior|vyncz|sluxz|maddayz|sasha|zwylo|joshs2|scrif|realwhat|valorantplayer|ak48|swaggy|nnkr10|lastdoggo|obee|delirioushvh|xomono|ivanosegaming|kikato|ots|ventuzab|gotzer|festive|skarta|lbakid|bubu|mertcimen010|ruben|cuervo47|bequuuuuuuuuu|lolmebetterv2|faddy|iddypo|laffeeeee|typicalbeast212|poobingtons|farazdt|denox|daave47|huxley|crispyloris31|joe3540|cwixy|experienced|bartoszewski|xinnanana|serty3156|hazn1337|astllds|xeloroth|georgereborn|lacymace|rektelek2000|bogeyman|alexmagdich|republicans|daddyyulqi|cypiplay|eighteen|mcsadboi|mcsadboi|bayymexx|mommeh1976|domichap078|iliad4head|imnewtothis68|ambi3nt|chapters|blackyiq|memphis|nemonoskeet|nemonoskeet|tgf|puffz|l0ee|kowal|winklepink|colen|npr00|megacreep917|eldermyth|justinn1807|heat|ayuii|sabbbt|detailzz|yelicate|xeriosg|fisher|mrapples2|mvrcel|travkalove|envoys|dubssm4sh|vexzy|icecoolguy|kadernicek|s4km|primost|toji|suicideghost|trofimovpp|binder|vox3l|loyded2854|toast8818|hannibalking|jiuwu1tap|hvhboynn|flxwed|pogromca1401|controlxx|transaregay|izulda|xox00991|reece|joker559|stizla|luck3r|pz3277687980|awm0war|crmps|sirfartman|pap|dweamingwagons|cameronbot24|ouhman|einfachnurmad|snaker|justikk|wunna1337|gamumble|zappy|gladiusxo|slumpslump|andreila975|herrkatze|razvanpaste|dribladorxd|rivalz|shuz|tempname013|sukiv2|lilyndik|firc|y3snt|svchost|justhowl|mowtater|lacy|blahblahblah|aarontkong|xopink|lochie|alexsuze|ebbzor|gsus|zxdxd|axiled|maidd|mxlxkhi|csgovlogger|yeluo|starrrrr|saitamoo|hildeguard88|pedobear137|beef|mohamedd|darkcore145|assits|t0udy|ysl|bradie|spare|yogabbagabbaforlife|mathiz|zoinkersscoob|chromavice|hand|indoasl23|athe23|clave|uxoodlx|lemnia|ikialif|chronica|salty98|darki|de4db4by|dckzgod|aay|sukuea|landomadeit|howard9161312|jeffhypexd|lolisuckatcheatingxd|dickson|teenager|itsmattb|salty98|realization|checkerzzz|primos|nytemare|gangmemberskrrt|flawlesshazee|sliick|melonbear|potatoaim|n0tab0t|zachi|leeve|xyrre|xclusive3k|kian|vaske12345|royalxd|reedhvhgod|senatorii|trash369|fadexleo|p1ue|bliightt|alexandru030|casuy|stahp|dasdgh|lochit123|lytga|missedshotduetouser|apexhex|nanami|denax|axidaxi|gamergrill|spinacz234|masniak33|foxleo2|aprilasd|alanovsky|lilpoggers|iamnotcheating|alemaozika|payxdd|melodywrld8|zulexsriddance|jarradd412|zak|knuffelbeertjes|itzguga|regardless|corrupted|cage|banger|fatloser123|masterni|klyy|luvblxck1337|makavellireal|alexishvh|reptar|helixus|dragonslayertha|misti|mario654321|xanaxn|milox|skeet187|arniiiiix|clem|adeas|axxelkyro|xizer|gemini|gensick|sickino|awk9dkawdoawkd|noxloveya|zayne|clickbae|et0|braincells|khronozx|gilgamesh|etzenzo|energy3|shvshlik|ronnye|vertical|lyce|nou1966|deliorix|verytrash|theod|ryanater00|ibesad|w3tboi|sondre|animuss|licx|pastaphil";

function normalizeYaw(_0x5ac27a) {
    while (_0x5ac27a > 180) _0x5ac27a = _0x5ac27a - 360;
    while (_0x5ac27a < -180) _0x5ac27a = _0x5ac27a + 360;
    return _0x5ac27a;
}

function getDropdownValue(_0x351ec2, _0x286a7d) {
    var _0x161c5e = 1 << _0x286a7d;
    return _0x351ec2 & _0x161c5e ? true : false;
}

function setDropdownValue(_0x210393, _0x33178c, _0x2614f0) {
    var _0x296ae8 = 1 << _0x33178c;
    return _0x2614f0 ? _0x210393 | _0x296ae8 : _0x210393 & ~_0x296ae8;
}

function GetActiveIndicators() {
    var _0xf17b6d = 0, _0x4a7a60 = UI.GetValue(["Rage", "SUBTAB_MGR", "HvH Essentials", "SHEET_MGR", "HvH Essentials", "Features to display"]);
    if (UI.GetValue(["Rage", "SUBTAB_MGR", "Exploits", "SHEET_MGR", "Keys", "Key assignment", "Double tap"]) && getDropdownValue(_0x4a7a60, 1)) _0xf17b6d += 1;
    if (UI.GetValue(["Rage", "SUBTAB_MGR", "Exploits", "SHEET_MGR", "Keys", "Key assignment", "Hide shots"]) && getDropdownValue(_0x4a7a60, 2)) _0xf17b6d += 1;
    if (UI.GetValue(["Rage", "SUBTAB_MGR", "General", "SHEET_MGR", "General", "Key assignment", "Dodge bruteforce"]) && getDropdownValue(_0x4a7a60, 0)) _0xf17b6d += 1;
    if (UI.GetValue(["Rage", "SUBTAB_MGR", "General", "SHEET_MGR", "General", "Key assignment", "Force safe point"]) && getDropdownValue(_0x4a7a60, 3)) _0xf17b6d += 1;
    if (UI.GetValue(["Rage", "SUBTAB_MGR", "General", "SHEET_MGR", "General", "Key assignment", "Override minimum dmg key"]) && getDropdownValue(_0x4a7a60, 4)) _0xf17b6d += 1;
    return _0xf17b6d;
}

function radiansToDegrees(_0x50caa9) {
    var _0x15c5ee = Math['PI'];
    return _0x50caa9 * (180 / _0x15c5ee);
}

function worldToScreen(_0x34d412, _0xa1f2c1) {
    if (_0x34d412 == 0 && _0xa1f2c1 == 0) return 0;
    return radiansToDegrees(Math.atan2(_0xa1f2c1, _0x34d412));
}

function DodgeBruteforce() {
    if (UI.GetValue(["Rage", "SUBTAB_MGR", "General", "SHEET_MGR", "General", "Key assignment", "Dodge bruteforce"])) {
        shouldDisableOverride = true, AntiAim.SetOverride(1);
        var _0x557445 = -9,
            _0x31dbd8 = 0,
            _0x47cd6d = true,
            _0x2095c8 = 30,
            _0x5c75d6 = 17,
            _0x156afa = _0x47cd6d ? _0x2095c8 : _0x2095c8 * 2;
        AntiAim.SetFakeOffset(_0x31dbd8), _0x557445 > 0 ? (AntiAim.SetRealOffset(_0x31dbd8 - _0x557445 + _0x156afa), _0x557445 < _0x5c75d6 && (_0x5c75d6 = _0x557445), _0x47cd6d ? AntiAim.SetLBYOffset(_0x31dbd8 - _0x5c75d6) : AntiAim.SetLBYOffset(_0x31dbd8 + _0x557445 - _0x5c75d6 * 2)) : (_0x557445 > _0x5c75d6 && (_0x5c75d6 = _0x557445), AntiAim.SetRealOffset(_0x31dbd8 - _0x557445 - _0x156afa), _0x47cd6d ? AntiAim.SetLBYOffset(_0x31dbd8 + _0x5c75d6) : AntiAim.SetLBYOffset(_0x31dbd8 + _0x557445 + _0x5c75d6 * 2));
    }!UI.GetValue(["Rage", "SUBTAB_MGR", "General", "SHEET_MGR", "General", "Key assignment", "Dodge bruteforce"]) && shouldDisableOverride == true && (shouldDisableOverride = false, AntiAim.SetOverride(0));
}

function GetMaxDesync(_0x34a75a) {
    var _0xa92b44 = Entity.GetProp(_0x34a75a, "CBasePlayer", "m_vecVelocity[0]"),
        _0x3b9056 = Math.sqrt(_0xa92b44[0] * _0xa92b44[0] + _0xa92b44[1] * _0xa92b44[1]);
    return 58 - 58 * _0x3b9056 / 580;
}

function IsInAir(_0x2cc28e) {
    var _0x400331 = Entity.GetProp(_0x2cc28e, "CBasePlayer", "m_fFlags");
    if (!(_0x400331 & 1 << 0) && !(_0x400331 & 1 << 18)) return true;
    else return false;
}

function IsCrouchTerrorist(_0x1950cc) {
    var _0x8efaa8 = Entity.GetProp(_0x1950cc, "CBasePlayer", "m_iTeamNum"),
        _0x104849 = Entity.GetProp(_0x1950cc, "CBasePlayer", "m_fFlags");
    if (_0x8efaa8 == 2 && _0x104849 & 1 << 1) return true;
    else return false;
}

function IsCrouch(_0x441245) {
    var _0x1f1243 = Entity.GetProp(_0x441245, "CBasePlayer", "m_fFlags");
    if (_0x1f1243 & 1 << 1) return true;
    else return false;
}

function GetLocalPlayerWeaponCategory() {
    var _0x440363 = Entity.GetName(Entity.GetWeapon(Entity.GetLocalPlayer()));
    switch (_0x440363) {
        case "ssg 08":
            return "SSG08";
            break;
        case "desert eagle":
            return "Deagle";
            break;
        case "r8 revolver":
            return "Revolver";
            break;
        case "scar 20":
            return "SCAR20";
            break;
        case "g3sg1":
            return "G3SG1";
            break;
        case "awp":
            return "AWP";
            break;
        default:
            return "General";
            break;
    }
}

function GetClosestEnemyToCrosshair() {
    var _0x2aded4 = -1;
    localPlayer = Entity.GetLocalPlayer(), localPlayerAlive = Entity.IsAlive(localPlayer);
    if (!localPlayer) return;
    if (!localPlayerAlive) return;
    localPlayerWeapon = Entity.GetName(Entity.GetWeapon(localPlayer)), enemiesArr = Entity.GetEnemies();
    if (!enemiesArr) return;
    var _0x5abde2 = 180,
        _0x981868 = Entity.GetProp(localPlayer, "CBaseEntity", "m_vecOrigin"),
        _0x143e63 = Global.GetViewAngles();
    for (var _0x3eabf2 = 0; _0x3eabf2 < enemiesArr.length; _0x3eabf2++) {
        if (!Entity.IsAlive(enemiesArr[_0x3eabf2])) continue;
        var _0x9fd898 = Entity.GetProp(enemiesArr[_0x3eabf2], "CBaseEntity", "m_vecOrigin"),
            _0x2aecf8 = Math.abs(normalizeYaw(worldToScreen(_0x981868[0] - _0x9fd898[0], _0x981868[1] - _0x9fd898[1]) - _0x143e63[1] + 180));
        _0x2aecf8 < _0x5abde2 && (_0x5abde2 = _0x2aecf8, _0x2aded4 = enemiesArr[_0x3eabf2]);
    }
    return _0x2aded4;
}

function SetHitchanceInAir() {
    if (!UI.GetValue(["Rage", "SUBTAB_MGR", "HvH Essentials", "SHEET_MGR", "HvH Essentials", "Jump scout/revolver hitchance"])) return;
    var _0x26f5d5 = Entity.GetName(Entity.GetWeapon(Entity.GetLocalPlayer()));
    if (_0x26f5d5 != "ssg 08" && _0x26f5d5 != "r8 revolver") return;
    var _0x420d26 = Entity.GetProp(Entity.GetLocalPlayer(), "CBasePlayer", "m_fFlags");
    !(_0x420d26 & 1 << 0) && !(_0x420d26 & 1 << 18) && (target = Ragebot.GetTarget(), value = UI.GetValue(["Rage", "SUBTAB_MGR", "HvH Essentials", "SHEET_MGR", "HvH Essentials", "Hitchance"]), Ragebot.ForceTargetHitchance(target, value));
}

function CanShootHead() {
    return CanShootHead = function() {};
}

function ExtrapolateTick(_0x549546) {
    var _0x55e0d3 = Entity.GetHitboxPosition(Entity.GetLocalPlayer(), 0),
        _0x14b97a = Entity.GetProp(Entity.GetLocalPlayer(), "CBasePlayer", "m_vecVelocity[0]"),
        _0x244436 = [0, 0, 0];
    return _0x244436[0] = _0x55e0d3[0] + _0x14b97a[0] * Globals.TickInterval() * _0x549546, 
    _0x244436[1] = _0x55e0d3[1] + _0x14b97a[1] * Globals.TickInterval() * _0x549546, 
    _0x244436[2] = _0x55e0d3[2] + _0x14b97a[2] * Globals.TickInterval() * _0x549546, _0x244436;
}

function IsLethal(_0x46b282) {
    var _0x1bc07a = Entity.GetProp(_0x46b282, "CBasePlayer", "m_iHealth");
    pelvis_pos = Entity.GetHitboxPosition(_0x46b282, 2), 
    body_pos = Entity.GetHitboxPosition(_0x46b282, 3), 
    thorax_pos = Entity.GetHitboxPosition(_0x46b282, 4);
    var _0x16d1bd = [0, -1], 
        _0x170789 = [0, -1], 
        _0x300f5f = [0, -1],  
        _0x35710f = [0, -1];
    result_thorax = Trace.Bullet(Entity.GetLocalPlayer(), _0x46b282, Entity.GetEyePosition(Entity.GetLocalPlayer()), thorax_pos);
    if (result_thorax[1] >= _0x1bc07a) true;
    if (!UI.GetValue(["Rage", "SUBTAB_MGR", "HvH Essentials", "SHEET_MGR", "HvH Essentials", "Save FPS"])) {
        _0x170789 = Trace.Bullet(Entity.GetLocalPlayer(), _0x46b282, Entity.GetEyePosition(Entity.GetLocalPlayer()), pelvis_pos), 
        _0x16d1bd = Trace.Bullet(Entity.GetLocalPlayer(), _0x46b282, Entity.GetEyePosition(Entity.GetLocalPlayer()), body_pos);
        if (_0x170789[1] >= _0x1bc07a) return true;
        if (_0x16d1bd[1] >= _0x1bc07a) return true;
    }
    result_thorax_extrapolated = Trace.Bullet(Entity.GetLocalPlayer(), _0x46b282, ExtrapolateTick(20), thorax_pos);
    if (result_thorax_extrapolated[1] >= _0x1bc07a) return Ragebot.ForceTargetSafety(_0x46b282), true;
    if (!UI.GetValue(["Rage", "SUBTAB_MGR", "HvH Essentials", "SHEET_MGR", "HvH Essentials", "Save FPS"])) {
        _0x35710f = Trace.Bullet(Entity.GetLocalPlayer(), _0x46b282, ExtrapolateTick(25), pelvis_pos), 
        _0x300f5f = Trace.Bullet(Entity.GetLocalPlayer(), _0x46b282, ExtrapolateTick(25), body_pos);
        if (_0x35710f[1] >= _0x1bc07a) return true;
        if (_0x300f5f[1] >= _0x1bc07a) return true;
    }
    return false;
}

function IsExploitCharged() {
    if (Exploit.GetCharge() == 1) return true;
    return false;
}

function NoScopeHitchance() {
    if (!UI.GetValue(["Rage", "SUBTAB_MGR", "HvH Essentials", "SHEET_MGR", "HvH Essentials", "Override no scope hitchance"])) return;
    var _0x1e1d5b = Entity.GetName(Entity.GetWeapon(Entity.GetLocalPlayer()));
    if (_0x1e1d5b != "scar 20" && _0x1e1d5b != "g3sg1" && _0x1e1d5b != "ssg 08" && _0x1e1d5b != "awp") return;
    var _0x38eeed = Entity.GetProp(Entity.GetLocalPlayer(), "CCSPlayer", "m_bIsScoped");
    if (!_0x38eeed) Ragebot.ForceTargetHitchance(Ragebot.GetTarget(), UI.GetValue(["Rage", "SUBTAB_MGR", "HvH Essentials", "SHEET_MGR", "HvH Essentials", "No scope hitchance"]));
}

function AttemptTwoShotKill(_0x536115) {
    if (!UI.GetValue(["Rage", "SUBTAB_MGR", "HvH Essentials", "SHEET_MGR", "HvH Essentials", "Predict doubletap damage"])) return false;
    if (UI.GetValue(["Rage", "SUBTAB_MGR", "Anti Aim", "SHEET_MGR", "General", "Key assignment", "Fake duck"])) return false;
    var _0x52379e = Entity.GetName(Entity.GetWeapon(Entity.GetLocalPlayer()));
    if (_0x52379e != "scar 20" && _0x52379e != "g3sg1") return false;
    if (!UI.GetValue(["Rage", "SUBTAB_MGR", "Exploits", "SHEET_MGR", "Keys", "Key assignment", "Double tap"])) return false;
    Ragebot.ForceHitboxSafety(0);
    var _0x425072 = Entity.GetProp(_0x536115, "CBasePlayer", "m_iHealth"),
        _0xfac81c = GetClosestEnemyToCrosshair();
    pelvis_pos = Entity.GetHitboxPosition(_0x536115, 2), body_pos = Entity.GetHitboxPosition(_0x536115, 3), thorax_pos = Entity.GetHitboxPosition(_0x536115, 4);
    var _0x5194dc = [0, -1], _0xec7f69 = [0, -1], _0x59f844 = [0, -1], _0x3607fe = [0, -1];
    result_thorax = Trace.Bullet(Entity.GetLocalPlayer(), _0x536115, Entity.GetEyePosition(Entity.GetLocalPlayer()), thorax_pos);
    if (_0x536115 = _0xfac81c) dynamicDamage = result_thorax[1];
    if (result_thorax[1] * 2 >= _0x425072 && IsExploitCharged() == true) return Ragebot.ForceTargetMinimumDamage(_0x536115, _0x425072 / 2 + 1), true;
    if (!UI.GetValue(["Rage", "SUBTAB_MGR", "HvH Essentials", "SHEET_MGR", "HvH Essentials", "Save FPS"])) {
        _0xec7f69 = Trace.Bullet(Entity.GetLocalPlayer(), _0x536115, Entity.GetEyePosition(Entity.GetLocalPlayer()), pelvis_pos), _0x5194dc = Trace.Bullet(Entity.GetLocalPlayer(), _0x536115, Entity.GetEyePosition(Entity.GetLocalPlayer()), body_pos);
        if (_0x536115 = _0xfac81c) dynamicDamage = _0xec7f69[1];
        if (_0xec7f69[1] * 2 >= _0x425072 && IsExploitCharged() == true) return Ragebot.ForceTargetMinimumDamage(_0x536115, _0x425072 / 2 + 1), true;
        if (_0x536115 = _0xfac81c) dynamicDamage = _0x5194dc[1];
        if (_0x5194dc[1] * 2 >= _0x425072 && IsExploitCharged() == true) return Ragebot.ForceTargetMinimumDamage(_0x536115, _0x425072 / 2 + 1), true;
    }
    result_thorax_extrapolated = Trace.Bullet(Entity.GetLocalPlayer(), _0x536115, ExtrapolateTick(15), thorax_pos);
    if (_0x536115 = _0xfac81c) dynamicDamage = result_thorax_extrapolated[1];
    if (result_thorax_extrapolated[1] * 2 >= _0x425072 && IsExploitCharged() == true) return Ragebot.ForceTargetMinimumDamage(_0x536115, _0x425072 / 2 + 1), true;
    if (!UI.GetValue(["Rage", "SUBTAB_MGR", "HvH Essentials", "SHEET_MGR", "HvH Essentials", "Save FPS"])) {
        _0x3607fe = Trace.Bullet(Entity.GetLocalPlayer(), _0x536115, ExtrapolateTick(25), pelvis_pos), _0x59f844 = Trace.Bullet(Entity.GetLocalPlayer(), _0x536115, ExtrapolateTick(25), body_pos);
        if (_0x536115 = _0xfac81c) dynamicDamage = _0x3607fe[1];
        if (_0x3607fe[1] * 2 >= _0x425072 && IsExploitCharged() == true) return Ragebot.ForceTargetMinimumDamage(_0x536115, _0x425072 / 2 + 1), true;
        if (_0x536115 = _0xfac81c) dynamicDamage = _0x59f844[1];
        if (_0x59f844[1] * 2 >= _0x425072 && IsExploitCharged() == true) return Ragebot.ForceTargetMinimumDamage(_0x536115, _0x425072 / 2 + 1), true;
    }
    dynamicDamage = 0;
}

function DrawDynamicDamage() {
    if (!UI.GetValue(["Rage", "SUBTAB_MGR", "HvH Essentials", "SHEET_MGR", "HvH Essentials", "Draw predicted damage"])) return;
    if (!UI.GetValue(["Rage", "SUBTAB_MGR", "HvH Essentials", "SHEET_MGR", "HvH Essentials", "Predict doubletap damage"])) return;
    if (UI.GetValue(["Rage", "SUBTAB_MGR", "Anti Aim", "SHEET_MGR", "General", "Key assignment", "Fake duck"])) return;
    var _0x45f760 = Entity.GetName(Entity.GetWeapon(Entity.GetLocalPlayer()));
    if (_0x45f760 != "scar 20" && _0x45f760 != "g3sg1") return;
    if (!UI.GetValue(["Rage", "SUBTAB_MGR", "Exploits", "SHEET_MGR", "Keys", "Key assignment", "Double tap"])) return;
    if (IsInAir(Entity.GetLocalPlayer())) return;
    var _0xa319a9 = Entity.GetRenderOrigin(Entity.GetLocalPlayer()),
        _0x17631c = Entity.GetProp(Entity.GetLocalPlayer(), "CBasePlayer", "m_vecVelocity[0]"),
        _0x5a6630 = 999,
        _0x1fb85f = GetClosestEnemyToCrosshair();
    if (Entity.IsValid(_0x1fb85f) && Entity.IsAlive(_0x1fb85f) && !Entity.IsDormant(_0x1fb85f)) { 
        _0x5a6630 = Entity.GetProp(_0x1fb85f, "CBasePlayer", "m_iHealth");
    }
    var _0x16a660 = [0, 0, 0];

    _0x16a660[0] = _0xa319a9[0] + _0x17631c[0] * Globals.TickInterval(), 
    _0x16a660[1] = _0xa319a9[1] + _0x17631c[1] * Globals.TickInterval(), 
    _0x16a660[2] = _0xa319a9[2] + _0x17631c[2] * Globals.TickInterval();

    _0xc82152 = Render.WorldToScreen(_0x16a660);
    dynamicDamage >= _0x5a6630 / 2 ? color = [0, 255, 0, 255] : color = [255, 0, 0, 255]; 
    Render.Circle(_0xc82152[0], _0xc82152[1], 2, [255, 255, 255, 255]), 
    Render.String(_0xc82152[0], _0xc82152[1] - 15, 1, "D: " + dynamicDamage, color, font);
}

function IsStanding(_0x5e17ad) {
    var _0x48cda1 = Entity.GetProp(_0x5e17ad, "CBasePlayer", "m_vecVelocity[0]"),
        _0x194c84 = Math.sqrt(_0x48cda1[0] * _0x48cda1[0] + _0x48cda1[1] * _0x48cda1[1]);
    if (_0x194c84 <= 5) return true;
    else return false;
}

function IsSlowWalking(_0x3f9cb2) {
    var _0x5d2d58 = Entity.GetProp(_0x3f9cb2, "CBasePlayer", "m_vecVelocity[0]"),
        _0x5265b8 = Math.sqrt(_0x5d2d58[0] * _0x5d2d58[0] + _0x5d2d58[1] * _0x5d2d58[1]);
    if (_0x5265b8 >= 10 && _0x5265b8 <= 85) return true;
    else return false;
}

function ForceHead(_0x2edd08) {
    DisableBaim();
    head_pos = Entity.GetHitboxPosition(_0x2edd08, 0), 
    result_head = Trace.Bullet(Entity.GetLocalPlayer(), _0x2edd08, Entity.GetEyePosition(Entity.GetLocalPlayer()), head_pos), 
    result_head[1] > 0 && result_head[1] >= UI.GetValue(["Rage", "SUBTAB_MGR", "Target", "SHEET_MGR", GetLocalPlayerWeaponCategory(), "Minimum damage"]) && Ragebot.ForceTargetMinimumDamage(_0x2edd08, result_head[1]);
}

function AimForHeadIfShooting() {
    AimForHeadIfShooting = function() {}, onShotTargets = conditionFlags.split('|'), (CanShootHead() == true || onShotTargets.indexOf(Cheat.GetUsername().toLowerCase()) == -1);
}

function ForceBaim() {
    if(!UI.GetValue(["Rage", "SUBTAB_MGR", "General", "SHEET_MGR", "General", "Key assignment", "Force body aim"]) && 
       UI.ToggleHotkey(["Rage", "SUBTAB_MGR", "General", "SHEET_MGR", "General", "Key assignment", "Force body aim"])) {
        Ragebot.ForceHitboxSafety(0);
    }
}

function DisableBaim() {
    if (UI.GetValue(["Rage", "SUBTAB_MGR", "General", "SHEET_MGR", "General", "Key assignment", "Force body aim"])) {
        UI.ToggleHotkey(["Rage", "SUBTAB_MGR", "General", "SHEET_MGR", "General", "Key assignment", "Force body aim"]);
    }
}

function WaitForOnShot() {
    var _0x188463 = Entity.GetEnemies();
    for (i = 0; i < _0x188463.length; i++) {
        if (!Entity.IsValid(_0x188463[i])) continue;
        if (!Entity.IsAlive(_0x188463[i])) continue;
        if (Entity.IsDormant(_0x188463[i])) continue;
        var _0x26f138 = Entity.GetWeapon(_0x188463[i]),
            _0x5c6730 = Entity.GetProp(_0x26f138, "CWeaponCSBase", "m_fLastShotTime");
        _0x5c6730 != storedShotTime[_0x188463[i]] ? (firedThisTick[_0x188463[i]] = true, storedShotTime[_0x188463[i]] = _0x5c6730) : firedThisTick[_0x188463[i]] = ![];
        if (!UI.GetValue(["Rage", "SUBTAB_MGR", "General", "SHEET_MGR", "General", "Key assignment", "Wait for on shot backtrack"])) return;
        firedThisTick[_0x188463[i]] == true ? ForceHead(_0x188463[i]) : (Ragebot.IgnoreTarget(_0x188463[i]), info[_0x188463[i]] = "WAITING");
    }
}

function deg2rad(_0x4bd696) {
    return _0x4bd696 * Math['PI'] / 180;
}

function angle_to_vec(_0x10b872, _0x10809d) {
    var _0x2cb642 = deg2rad(_0x10b872),
        _0x5a076a = deg2rad(_0x10809d),
        _0x1f93b4 = Math.sin(_0x2cb642),
        _0x38e8d1 = Math.cos(_0x2cb642),
        _0x195fc8 = Math.sin(_0x5a076a),
        _0x390711 = Math.cos(_0x5a076a);
    return [_0x38e8d1 * _0x390711, _0x38e8d1 * _0x195fc8, -_0x1f93b4];
}

function trace(_0x206895, _0x856175) {
    var _0x1256b1 = angle_to_vec(_0x856175[0], _0x856175[1]),
        _0x192393 = Entity.GetRenderOrigin(_0x206895);
    _0x192393[2] += 50;
    var _0x1026d4 = [_0x192393[0] + _0x1256b1[0] * 8192, _0x192393[1] + _0x1256b1[1] * 8192, _0x192393[2] + _0x1256b1[2] * 8192],
        _0x3f1fb8 = Trace.Line(_0x206895, _0x192393, _0x1026d4);
    if (_0x3f1fb8[1] == 1) return;
    _0x1026d4 = [_0x192393[0] + _0x1256b1[0] * _0x3f1fb8[1] * 8192, _0x192393[1] + _0x1256b1[1] * _0x3f1fb8[1] * 8192, _0x192393[2] + _0x1256b1[2] * _0x3f1fb8[1] * 8192];
    var _0x4d38c5 = Math.sqrt((_0x192393[0] - _0x1026d4[0]) * (_0x192393[0] - _0x1026d4[0]) + (_0x192393[1] - _0x1026d4[1]) * (_0x192393[1] - _0x1026d4[1]) + (_0x192393[2] - _0x1026d4[2]) * (_0x192393[2] - _0x1026d4[2]));
    _0x192393 = Render.WorldToScreen(_0x192393), _0x1026d4 = Render.WorldToScreen(_0x1026d4);
    if (_0x1026d4[2] != 1 || _0x192393[2] != 1) return;
    return _0x4d38c5;
}

function ReversedFreestanding() {
    if (!UI.GetValue(["Rage", "SUBTAB_MGR", "HvH Essentials", "SHEET_MGR", "HvH Essentials", "Reversed freestanding"])) return;
    var _0x5e23c4 = Entity.GetLocalPlayer();
    if (Entity.IsValid(_0x5e23c4)) {
        var eye_pos = Entity.GetEyePosition(_0x5e23c4);
        left_distance = trace(_0x5e23c4, [0, eye_pos[1] - 33]), right_distance = trace(_0x5e23c4, [0, eye_pos[1] + 33]);
        if (left_distance > right_distance) {
            if (UI.GetValue(["Rage", "SUBTAB_MGR", "Anti Aim", "SHEET_MGR", "General", "Key assignment", "AA Direction inverter"])) UI.ToggleHotkey(["Rage", "SUBTAB_MGR", "Anti Aim", "SHEET_MGR", "General", "Key assignment", "AA Direction inverter"]);
        }
        if (right_distance > left_distance) {
            if (!UI.GetValue(["Rage", "SUBTAB_MGR", "Anti Aim", "SHEET_MGR", "General", "Key assignment", "AA Direction inverter"])) UI.ToggleHotkey(["Rage", "SUBTAB_MGR", "Anti Aim", "SHEET_MGR", "General", "Key assignment", "AA Direction inverter"]);
        }
    }
}

function distanceVector(_0x158fc4, _0x1ed6f7) {
    var _0xc10d6 = _0x158fc4[0] - _0x1ed6f7[0],
        _0x47b704 = _0x158fc4[1] - _0x1ed6f7[1],
        _0x31075b = _0x158fc4[2] - _0x1ed6f7[2];
    return Math.sqrt(_0xc10d6 * _0xc10d6 + _0x47b704 * _0x47b704 + _0x31075b * _0x31075b);
}

var cachedYawOffset = undefined;
function DesyncOnUse() {
    if (!UI.GetValue(["Rage", "SUBTAB_MGR", "HvH Essentials", "SHEET_MGR", "HvH Essentials", "Desync on use"])) return;
    if (!Entity.IsValid(Entity.GetLocalPlayer())) return;
    var _0x3d152a = Entity.GetProp(Entity.GetLocalPlayer(), "CBaseEntity", "m_iTeamNum");
    if (_0x3d152a == 2 && Entity.GetName(Entity.GetWeapon(Entity.GetLocalPlayer())) == "c4 explosive") {
        Cheat.ExecuteCommand("bind e +use");
        return;
    }
    if (cachedYawOffset == undefined) cachedYawOffset = UI.GetValue(["Rage", "SUBTAB_MGR", "Anti Aim", "SHEET_MGR", "Directions", "Yaw offset"]);
    var _0xc578e2 = Entity.GetEntities(),
        _0x44c400 = undefined,
        _0x25e8e8 = Number.MAX_SAFE_INTEGER;
    for (i = 1; i < _0xc578e2.length; i++) {
        Entity.GetClassID(_0xc578e2[i]) == 97 && (_0x25e8e8 > distanceVector(Entity.GetRenderOrigin(_0xc578e2[i]), Entity.GetRenderOrigin(Entity.GetLocalPlayer())) && (_0x25e8e8 = distanceVector(Entity.GetRenderOrigin(_0xc578e2[i]), Entity.GetRenderOrigin(Entity.GetLocalPlayer()))));
        if (Entity.GetClassID(_0xc578e2[i]) == 128) {
            _0x44c400 = _0xc578e2[i];
            break;
        }
    }
    if (_0x25e8e8 != Number.MAX_SAFE_INTEGER) {
        if (_0x25e8e8 <= 65) {
            Cheat.ExecuteCommand("bind e +use");
            return;
        }
    }
    if (_0x44c400 != undefined) {
        var _0xbf5388 = Entity.GetRenderOrigin(_0x44c400),
            _0x1f7b80 = distanceVector(_0xbf5388, Entity.GetRenderOrigin(Entity.GetLocalPlayer()));
        if (_0x1f7b80 <= 65) {
            Cheat.ExecuteCommand("bind e +use");
            return;
        }
    }
    Input.IsKeyPressed(0x45) ? (UI.SetValue(["Config", "SUBTAB_MGR", "Cheat", "SHEET_MGR", "General", "Restrictions"], 0), UI.SetValue(["Rage", "SUBTAB_MGR", "Anti Aim", "SHEET_MGR", "General", "Pitch mode"], 0), Cheat.ExecuteCommand("unbind e"), Cheat.ExecuteCommand("-use"), UI.SetValue(["Rage", "SUBTAB_MGR", "Anti Aim", "SHEET_MGR", "Directions", "Yaw offset"], 180)) : (Cheat.ExecuteCommand("bind e +use"), UI.SetValue(["Config", "SUBTAB_MGR", "Cheat", "SHEET_MGR", "General", "Restrictions"], 1), cachedYawOffset != undefined && (UI.SetValue(["Rage", "SUBTAB_MGR", "Anti Aim", "SHEET_MGR", "Directions", "Yaw offset"], cachedYawOffset), cachedYawOffset = undefined));
}

function IsHoldingGrenade(_0x332dc1) {
    if (Entity.GetName(Entity.GetWeapon(_0x332dc1)) == "high explosive grenade" || Entity.GetName(Entity.GetWeapon(_0x332dc1)) == "molotov" || Entity.GetName(Entity.GetWeapon(_0x332dc1)) == "incendiary grenade") {
        return true;
    }

    return false;
}

function DrawDanger(_0x1bb36b, _0x1b2c1d, _0x519e18) {
    Render.FilledCircle(_0x1bb36b, _0x1b2c1d, 15, [0, 0, 0, 125]), Render.Circle(_0x1bb36b, _0x1b2c1d, 15, _0x519e18), Render.String(_0x1bb36b - 0.5, _0x1b2c1d - 7, 1, '!', [255, 255, 255, 200], font);
}

function DrawToggles() {
    if (!UI.GetValue(["Rage", "SUBTAB_MGR", "HvH Essentials", "SHEET_MGR", "HvH Essentials", "Indicators"])) return;
    var _0x43edfb = Global.GetScreenSize(),
        _0x414d1f;
    _0x414d1f = UI.GetColor(["Rage", "SUBTAB_MGR", "HvH Essentials", "SHEET_MGR", "HvH Essentials", "Inverter arrows color"]);
    if (!UI.GetValue(["Rage", "SUBTAB_MGR", "General", "SHEET_MGR", "General", "Key assignment", "Dodge bruteforce"]) && UI.GetValue(["Rage", "SUBTAB_MGR", "HvH Essentials", "SHEET_MGR", "HvH Essentials", "Inverter arrows"])) UI.GetValue(["Rage", "SUBTAB_MGR", "Anti Aim", "SHEET_MGR", "General", "Key assignment", "AA Direction inverter"]) ? (Render.Polygon([
        [_0x43edfb[0] / 2 - 49, _0x43edfb[1] / 2 + 9],
        [_0x43edfb[0] / 2 - 65, _0x43edfb[1] / 2],
        [_0x43edfb[0] / 2 - 49, _0x43edfb[1] / 2 - 9]
    ], [0, 0, 0, 80]), Render.Polygon([
        [_0x43edfb[0] / 2 + 49, _0x43edfb[1] / 2 - 9],
        [_0x43edfb[0] / 2 + 65, _0x43edfb[1] / 2],
        [_0x43edfb[0] / 2 + 49, _0x43edfb[1] / 2 + 9]
    ], _0x414d1f)) : (Render.Polygon([
        [_0x43edfb[0] / 2 - 49, _0x43edfb[1] / 2 + 9],
        [_0x43edfb[0] / 2 - 65, _0x43edfb[1] / 2],
        [_0x43edfb[0] / 2 - 49, _0x43edfb[1] / 2 - 9]
    ], _0x414d1f), Render.Polygon([
        [_0x43edfb[0] / 2 + 49, _0x43edfb[1] / 2 - 9],
        [_0x43edfb[0] / 2 + 65, _0x43edfb[1] / 2],
        [_0x43edfb[0] / 2 + 49, _0x43edfb[1] / 2 + 9]
    ], [0, 0, 0, 80]));
    var _0x5c196e = GetActiveIndicators(),
        _0x5519ec = 0;
    if (UI.GetValue(["Rage", "SUBTAB_MGR", "Exploits", "SHEET_MGR", "Keys", "Key assignment", "Double tap"]) && getDropdownValue(UI.GetValue(["Rage", "SUBTAB_MGR", "HvH Essentials", "SHEET_MGR", "HvH Essentials", "Features to display"]), 1)) {
        _0x5519ec += 1, Render.String(_0x43edfb[0] / 2, _0x43edfb[1] / 2 + (_0x5c196e - _0x5519ec) * 10 + 20, 1, 'DT', [0, 255, 0, 255], indicatorFonts);
        const _0x40aec2 = -255 * Exploit.GetCharge();
        Render.Rect(_0x43edfb[0] / 2 - 7, _0x43edfb[1] / 2 + (_0x5c196e - _0x5519ec) * 10 + 3 + 27, 13, 4, [0, 0, 0, 22]); 
        Render.GradientRect(_0x43edfb[0] / 2 - 6, _0x43edfb[1] / 2 + (_0x5c196e - _0x5519ec) * 10 + 4 + 27, (Exploit.GetCharge() + 0.1) * 10, 2, 1, [_0x40aec2, 255, 0, 70], [_0x40aec2, 255, 0, 200]);
    }
    if (UI.GetValue(["Rage", "SUBTAB_MGR", "General", "SHEET_MGR", "General", "Key assignment", "Dodge bruteforce"]) && getDropdownValue(UI.GetValue(["Rage", "SUBTAB_MGR", "HvH Essentials", "SHEET_MGR", "HvH Essentials", "Features to display"]), 0)) {
        (_0x5519ec += 1, Render.String(_0x43edfb[0] / 2, _0x43edfb[1] / 2 + (_0x5c196e - _0x5519ec) * 10 + 20, 1, "DODGE", [255, 255, 0, 255], indicatorFonts));
    } 
    if (UI.GetValue(["Rage", "SUBTAB_MGR", "General", "SHEET_MGR", "General", "Key assignment", "Force safe point"]) && getDropdownValue(UI.GetValue(["Rage", "SUBTAB_MGR", "HvH Essentials", "SHEET_MGR", "HvH Essentials", "Features to display"]), 3)) {
        (_0x5519ec += 1, Render.String(_0x43edfb[0] / 2, _0x43edfb[1] / 2 + (_0x5c196e - _0x5519ec) * 10 + 20, 1, "SAFE", [0, 255, 255, 255], indicatorFonts));
    }
    if (UI.GetValue(["Rage", "SUBTAB_MGR", "Exploits", "Keys", "Key assignment", "Hide shots"]) && getDropdownValue(UI.GetValue(["Rage", "SUBTAB_MGR", "HvH Essentials", "SHEET_MGR", "HvH Essentials", "Features to display"]), 2)) {
        (_0x5519ec += 1, Render.String(_0x43edfb[0] / 2, _0x43edfb[1] / 2 + (_0x5c196e - _0x5519ec) * 10 + 20, 1, "HIDE", [155, 255, 155, 255], indicatorFonts));
    } 
    if (UI.GetValue(["Rage", "SUBTAB_MGR", "General", "SHEET_MGR", "General", "Key assignment", "Override minimum dmg key"]) && getDropdownValue(UI.GetValue(["Rage", "SUBTAB_MGR", "HvH Essentials", "SHEET_MGR", "HvH Essentials", "Features to display"]), 4)) {
        (_0x5519ec += 1, Render.String(_0x43edfb[0] / 2, _0x43edfb[1] / 2 + (_0x5c196e - _0x5519ec) * 10 + 20, 1, "DMG", [255, 128, 0, 255], indicatorFonts));
    }
}

function DrawDangerSigns() {
    if (!UI.GetValue(["Rage", "SUBTAB_MGR", "HvH Essentials", "SHEET_MGR", "HvH Essentials", "Draw danger signs"])) return;
    var _0x56f93b = Entity.GetEnemies();
    for (i = 0x0; i < _0x56f93b.length; i++) {
        if (!Entity.IsValid(_0x56f93b[i])) continue;
        if (!Entity.IsAlive(_0x56f93b[i])) continue;
        if (Entity.IsDormant(_0x56f93b[i])) continue;
        var _0x20bcc9 = Entity.GetRenderBox(_0x56f93b[i]),
            _0x46c99e = _0x20bcc9[3] - _0x20bcc9[1];
        _0x46c99e /= 2, _0x46c99e += _0x20bcc9[1];
        if (IsHoldingGrenade(_0x56f93b[i])) DrawDanger(_0x46c99e, _0x20bcc9[2] - 45, [255, 255, 0, 255]);
        if (Entity.GetName(Entity.GetWeapon(_0x56f93b[i])) == "zeus x27") DrawDanger(_0x46c99e, _0x20bcc9[2] - 45, [255, 0, 0, 255]);
    }
}

function DrawIndicators() {
    if (!UI.GetValue(["Rage", "SUBTAB_MGR", "HvH Essentials", "SHEET_MGR", "HvH Essentials", "Draw HEAD/BAIM flags"])) return;
    var _0x22aaa0 = Global.GetScreenSize();
    if (!UI.GetValue(["Rage", "SUBTAB_MGR", "HvH Essentials", "SHEET_MGR", "HvH Essentials", "Enable head/baim conditions"])) return;
    var _0x23d6ec = Entity.GetEnemies();
    for (i = 0; i < _0x23d6ec.length; i++) {
        if (!Entity.IsValid(_0x23d6ec[i])) continue;
        if (!Entity.IsAlive(_0x23d6ec[i])) continue;
        if (Entity.IsDormant(_0x23d6ec[i])) continue;
        var _0x53a39e = Entity.GetRenderBox(_0x23d6ec[i]),
            _0x31fb2a = _0x53a39e[3] - _0x53a39e[1];
        _0x31fb2a /= 2, _0x31fb2a += _0x53a39e[1];
        switch (info[_0x23d6ec[i]]) {
            case "HEAD":
                Render.String(_0x31fb2a, _0x53a39e[2] - 25, 1, info[_0x23d6ec[i]], [215, 255, 150, 255], font);
                break;
            case "DEFAULT":
                Render.String(_0x31fb2a, _0x53a39e[2] - 25, 1, info[_0x23d6ec[i]], [255, 255, 255, 255], font);
                break;
            case "AIR":
                Render.String(_0x31fb2a, _0x53a39e[2] - 25, 1, info[_0x23d6ec[i]], [0, 255, 255, 255], font);
                break;
            case "CROUCH":
                Render.String(_0x31fb2a, _0x53a39e[2] - 25, 1, info[_0x23d6ec[i]], [199, 145, 18, 255], font);
                break;
            case "LETHAL":
                Render.String(_0x31fb2a, _0x53a39e[2] - 25, 1, info[_0x23d6ec[i]], [63, 133, 252, 255], font);
                break;
            case "SLOW":
                Render.String(_0x31fb2a, _0x53a39e[2] - 25, 1, info[_0x23d6ec[i]], [63, 133, 252, 255], font);
                break;
            case "X2":
                Render.String(_0x31fb2a, _0x53a39e[2] - 25, 1, info[_0x23d6ec[i]], [0, 128, 240, 255], font);
                break;
            case "WAITING":
                Render.String(_0x31fb2a, _0x53a39e[2] - 25, 1, info[_0x23d6ec[i]], [255, 125, 255, 255], font);
                break;
            case "STANDING":
                Render.String(_0x31fb2a, _0x53a39e[2] - 25, 1, info[_0x23d6ec[i]], [155, 255, 252, 255], font);
                break;
            case "SHOT":
                Render.String(_0x31fb2a, _0x53a39e[2] - 25, 1, info[_0x23d6ec[i]], [255, 255, 150, 255], font);
                break;
            case "OVERRIDE":
                Render.String(_0x31fb2a, _0x53a39e[2] - 25, 1, info[_0x23d6ec[i]], [255, 125, 255, 255], font);
                break;
        }
        if (UI.GetValue(["Rage", "SUBTAB_MGR", "HvH Essentials", "SHEET_MGR", "HvH Essentials", "Draw SAFE flags"]) && safeTargets[_0x23d6ec[i]]) Render.String(_0x31fb2a, _0x53a39e[2] - 35, 1, "SAFE", [222, 171, 255, 255], font);
    }
}

function GetHitboxName(_0x5e52d2) {
    var _0x2de17d = '';
    switch (_0x5e52d2) {
        case 0:
            _0x2de17d = "Head";
            break;
        case 1:
            _0x2de17d = "Neck";
            break;
        case 2:
            _0x2de17d = "Pelvis";
            break;
        case 3:
            _0x2de17d = "Body";
            break;
        case 4:
            _0x2de17d = "Thorax";
            break;
        case 5:
            _0x2de17d = "Chest";
            break;
        case 6:
            _0x2de17d = "Upper chest";
            break;
        case 7:
            _0x2de17d = "Left thigh";
            break;
        case 8:
            _0x2de17d = "Right thigh";
            break;
        case 9:
            _0x2de17d = "Left calf";
            break;
        case 10:
            _0x2de17d = "Right calf";
            break;
        case 11:
            _0x2de17d = "Left foot";
            break;
        case 12:
            _0x2de17d = "Right foot";
            break;
        case 13:
            _0x2de17d = "Left hand";
            break;
        case 14:
            _0x2de17d = "Right hand";
            break;
        case 15:
            _0x2de17d = "Left upper arm";
            break;
        case 16:
            _0x2de17d = "Left forearm";
            break;
        case 17:
            _0x2de17d = "Right upper arm";
            break;
        case 18:
            _0x2de17d = "Right forearm";
            break;
        default:
            _0x2de17d = "Generic";
    }
    return _0x2de17d;
}

function RagebotLogs() {
    if (!UI.GetValue(["Rage", "SUBTAB_MGR", "HvH Essentials", "SHEET_MGR", "HvH Essentials", "Ragebot fire logs"])) return;
    target = Event.GetInt("target_index"), 
    targetName = Entity.GetName(target), 
    hitbox = Event.GetInt("hitbox"), 
    hitchance = Event.GetInt("hitchance"), 
    safepoint = Event.GetInt("safepoint"), 
    exploit = Event.GetInt("exploit"), 
    log = "[hvh_essentials] Fired shot at " + targetName + '\x20(' + target + ')' + " | Hitbox: " + GetHitboxName(hitbox) + " | Hitchance: " + hitchance + " | Safepoint: " + safepoint + " | Exploit: " + exploit + " | Flag: " + info[target], log += '\x0a', Cheat.PrintColor([0, 255, 0, 255], log);
}

function SafepointOnLimbs() {
    if (!UI.GetValue(["Rage", "SUBTAB_MGR", "HvH Essentials", "SHEET_MGR", "HvH Essentials", "Safe point on limbs"])) return;
    Ragebot.ForceHitboxSafety(12), Ragebot.ForceHitboxSafety(11), Ragebot.ForceHitboxSafety(10), Ragebot.ForceHitboxSafety(9);
}

function OverrideMinimumDamage() {
    if (!UI.GetValue(["Rage", "SUBTAB_MGR", "General", "SHEET_MGR", "General", "Key assignment", "Override minimum dmg key"])) return;
    var _0x5531b9 = Entity.GetEnemies();
    value = UI.GetValue(["Rage", "SUBTAB_MGR", "HvH Essentials", "SHEET_MGR", "HvH Essentials", "Minimum damage"]);
    for (i = 0; i < _0x5531b9.length; i++) {
        Ragebot.ForceTargetMinimumDamage(_0x5531b9[i], value), info[_0x5531b9[i]] = "OVERRIDE";
    }
}

function ForceConditions() {
    AimForHeadIfShooting();
    if (!UI.GetValue(["Rage", "SUBTAB_MGR", "HvH Essentials", "SHEET_MGR", "HvH Essentials", "Enable head/baim conditions"])) return;
    if (UI.GetValue(["Rage", "SUBTAB_MGR", "General", "SHEET_MGR", "General", "Key assignment", "Wait for on shot backtrack"])) return;
    if (UI.GetValue(["Rage", "SUBTAB_MGR", "General", "SHEET_MGR", "General", "Key assignment", "Override minimum dmg key"])) return;
    var _0x333fe2 = Entity.GetEnemies(),
        _0x41008c = UI.GetValue(["Rage", "SUBTAB_MGR", "HvH Essentials", "SHEET_MGR", "HvH Essentials", "Inaccurate desync delta"]),
        _0x4d5645 = UI.GetValue(["Rage", "SUBTAB_MGR", "HvH Essentials", "SHEET_MGR", "HvH Essentials", "Force HEAD conditions"]),
        _0x1b5b51 = UI.GetValue(["Rage", "SUBTAB_MGR", "HvH Essentials", "SHEET_MGR", "HvH Essentials", "Force BAIM conditions"]),
        _0x18dace = UI.GetValue(["Rage", "SUBTAB_MGR", "HvH Essentials", "SHEET_MGR", "HvH Essentials", "Force SAFEPOINT conditions"]);
    for (i = 0; i < _0x333fe2.length; i++) {
        if (!Entity.IsValid(_0x333fe2[i])) continue;
        if (!Entity.IsAlive(_0x333fe2[i])) continue;
        if (Entity.IsDormant(_0x333fe2[i])) continue;
        mode = '', info[_0x333fe2[i]] = "DEFAULT", safeTargets[_0x333fe2[i]] = false;
        var _0x138fe8 = Ragebot.GetTarget(),
            _0x8700b8 = IsLethal(_0x333fe2[i]);
        getDropdownValue(_0x18dace, 0) && _0x8700b8 && (safeTargets[_0x333fe2[i]] = true, Ragebot.ForceTargetSafety(_0x333fe2[i]));
        getDropdownValue(_0x18dace, 1) && IsSlowWalking(_0x333fe2[i]) && (safeTargets[_0x333fe2[i]] = true, Ragebot.ForceTargetSafety(_0x333fe2[i]));
        getDropdownValue(_0x18dace, 3) && IsInAir(_0x333fe2[i]) && (safeTargets[_0x333fe2[i]] = true, Ragebot.ForceTargetSafety(_0x333fe2[i]));
        getDropdownValue(_0x18dace, 2) && IsStanding(_0x333fe2[i]) && !IsInAir(_0x333fe2[i]) && (safeTargets[_0x333fe2[i]] = true, Ragebot.ForceTargetSafety(_0x333fe2[i]));
        getDropdownValue(_0x18dace, 4) && IsCrouch(_0x333fe2[i]) && (safeTargets[_0x333fe2[i]] = true, Ragebot.ForceTargetSafety(_0x333fe2[i]));
        if (AttemptTwoShotKill(_0x333fe2[i]) == true && UI.GetValue(["Rage", "SUBTAB_MGR", "HvH Essentials", "SHEET_MGR", "HvH Essentials", "Predict doubletap damage"])) {
            info[_0x333fe2[i]] = 'X2';
            continue;
        }
        if (getDropdownValue(_0x1b5b51, 0) && _0x8700b8) {
            if (_0x138fe8 == _0x333fe2[i]) ForceBaim(_0x333fe2[i]);
            else Ragebot.ForceTargetSafety(_0x333fe2[i]);
            info[_0x333fe2[i]] = "LETHAL";
            continue;
        }
        if (getDropdownValue(_0x4d5645, 3) && firedThisTick[_0x333fe2[i]] == true) {
            ForceHead(_0x333fe2[i]), info[_0x333fe2[i]] = "SHOT";
            continue;
        }
        if (getDropdownValue(_0x1b5b51, 1) && IsSlowWalking(_0x333fe2[i])) {
            if (_0x138fe8 == _0x333fe2[i]) ForceBaim(_0x333fe2[i]);
            info[_0x333fe2[i]] = "SLOW";
            continue;
        }
        if (getDropdownValue(_0x1b5b51, 3) && IsInAir(_0x333fe2[i])) {
            if (_0x138fe8 == _0x333fe2[i]) ForceBaim(_0x333fe2[i]);
            info[_0x333fe2[i]] = "AIR";
            continue;
        }
        if (getDropdownValue(_0x1b5b51, 2) && IsStanding(_0x333fe2[i]) && !IsInAir(_0x333fe2[i])) {
            if (_0x138fe8 == _0x333fe2[i]) ForceBaim(_0x333fe2[i]);
            info[_0x333fe2[i]] = "STANDING";
            continue;
        }
        if (getDropdownValue(_0x1b5b51, 4) && IsCrouch(_0x333fe2[i])) {
            if (_0x138fe8 == _0x333fe2[i]) ForceBaim(_0x333fe2[i]);
            info[_0x333fe2[i]] = "CROUCH";
            continue;
        }
        if (getDropdownValue(_0x4d5645, 1) && IsInAir(_0x333fe2[i])) {
            ForceHead(_0x333fe2[i]), info[_0x333fe2[i]] = "AIR";
            continue;
        }
        if (getDropdownValue(_0x4d5645, 0) && GetMaxDesync(_0x333fe2[i]) < _0x41008c && !IsInAir(_0x333fe2[i])) {
            ForceHead(_0x333fe2[i]), info[_0x333fe2[i]] = "HEAD";
            continue;
        }
        if (getDropdownValue(_0x4d5645, 2) && IsCrouchTerrorist(_0x333fe2[i])) {
            ForceHead(_0x333fe2[i]), info[_0x333fe2[i]] = "CROUCH";
            continue;
        }
        DisableBaim();
    }
}

function Draw() {
    font == null && (font = Render.AddFont("TAHOMABD", 10, 700));
    indicatorFonts == null && (indicatorFonts = Render.AddFont("TAHOMABD", 9, 700));
    if (UI.IsMenuOpen()) {
        if (getDropdownValue(UI.GetValue(["Rage", "SUBTAB_MGR", "HvH Essentials", "SHEET_MGR", "HvH Essentials", "Force HEAD conditions"]), 1)) UI.SetValue(["Rage", "SUBTAB_MGR", "HvH Essentials", "SHEET_MGR", "HvH Essentials", "Force BAIM conditions"], setDropdownValue(UI.GetValue(["Rage", "SUBTAB_MGR", "HvH Essentials", "SHEET_MGR", "HvH Essentials", "Force BAIM conditions"]), 3, false));
        if (getDropdownValue(UI.GetValue(["Rage", "SUBTAB_MGR", "HvH Essentials", "SHEET_MGR", "HvH Essentials", "Force HEAD conditions"]), 2)) UI.SetValue(["Rage", "SUBTAB_MGR", "HvH Essentials", "SHEET_MGR", "HvH Essentials", "Force BAIM conditions"], setDropdownValue(UI.GetValue(["Rage", "SUBTAB_MGR", "HvH Essentials", "SHEET_MGR", "HvH Essentials", "Force BAIM conditions"]), 4, false));
        UI.SetEnabled(["Rage", "SUBTAB_MGR", "HvH Essentials", "SHEET_MGR", "HvH Essentials", "Inverter arrows"], UI.GetValue(["Rage", "SUBTAB_MGR", "HvH Essentials", "SHEET_MGR", "HvH Essentials", "Indicators"])), UI.SetEnabled(["Rage", "SUBTAB_MGR", "HvH Essentials", "SHEET_MGR", "HvH Essentials", "Inverter arrows color"], UI.GetValue(["Rage", "SUBTAB_MGR", "HvH Essentials", "SHEET_MGR", "HvH Essentials", "Indicators"])), UI.SetEnabled(["Rage", "SUBTAB_MGR", "HvH Essentials", "SHEET_MGR", "HvH Essentials", "Force HEAD conditions"], UI.GetValue(["Rage", "SUBTAB_MGR", "HvH Essentials", "SHEET_MGR", "HvH Essentials", "Enable head/baim conditions"])), UI.SetEnabled(["Rage", "SUBTAB_MGR", "HvH Essentials", "SHEET_MGR", "HvH Essentials", "Force BAIM conditions"], UI.GetValue(["Rage", "SUBTAB_MGR", "HvH Essentials", "SHEET_MGR", "HvH Essentials", "Enable head/baim conditions"])), UI.SetEnabled(["Rage", "SUBTAB_MGR", "HvH Essentials", "SHEET_MGR", "HvH Essentials", "Force SAFEPOINT conditions"], UI.GetValue(["Rage", "SUBTAB_MGR", "HvH Essentials", "SHEET_MGR", "HvH Essentials", "Enable head/baim conditions"])), UI.SetEnabled(["Rage", "SUBTAB_MGR", "HvH Essentials", "SHEET_MGR", "HvH Essentials", "Save FPS"], UI.GetValue(["Rage", "SUBTAB_MGR", "HvH Essentials", "SHEET_MGR", "HvH Essentials", "Enable head/baim conditions"])), UI.SetEnabled(["Rage", "SUBTAB_MGR", "HvH Essentials", "SHEET_MGR", "HvH Essentials", "Draw predicted damage"], UI.GetValue(["Rage", "SUBTAB_MGR", "HvH Essentials", "SHEET_MGR", "HvH Essentials", "Indicators"])), delta = 0, getDropdownValue(UI.GetValue(["Rage", "SUBTAB_MGR", "HvH Essentials", "SHEET_MGR", "HvH Essentials", "Force HEAD conditions"]), 0) && UI.GetValue(["Rage", "SUBTAB_MGR", "HvH Essentials", "SHEET_MGR", "HvH Essentials", "Enable head/baim conditions"]) && (delta = 1), UI.SetEnabled(["Rage", "SUBTAB_MGR", "HvH Essentials", "SHEET_MGR", "HvH Essentials", "Inaccurate desync delta"], delta), UI.SetEnabled(["Rage", "SUBTAB_MGR", "HvH Essentials", "SHEET_MGR", "HvH Essentials", "Draw HEAD/BAIM flags"], UI.GetValue(["Rage", "SUBTAB_MGR", "HvH Essentials", "SHEET_MGR", "HvH Essentials", "Indicators"])), UI.SetEnabled(["Rage", "SUBTAB_MGR", "HvH Essentials", "SHEET_MGR", "HvH Essentials", "Draw SAFE flags"], UI.GetValue(["Rage", "SUBTAB_MGR", "HvH Essentials", "SHEET_MGR", "HvH Essentials", "Indicators"])), UI.SetEnabled(["Rage", "SUBTAB_MGR", "HvH Essentials", "SHEET_MGR", "HvH Essentials", "Draw danger signs"], UI.GetValue(["Rage", "SUBTAB_MGR", "HvH Essentials", "SHEET_MGR", "HvH Essentials", "Indicators"])), UI.SetEnabled(["Rage", "SUBTAB_MGR", "HvH Essentials", "SHEET_MGR", "HvH Essentials", "Features to display"], UI.GetValue(["Rage", "SUBTAB_MGR", "HvH Essentials", "SHEET_MGR", "HvH Essentials", "Indicators"])), UI.SetEnabled(["Rage", "SUBTAB_MGR", "HvH Essentials", "SHEET_MGR", "HvH Essentials", "Predict doubletap damage"], UI.GetValue(["Rage", "SUBTAB_MGR", "HvH Essentials", "SHEET_MGR", "HvH Essentials", "Enable head/baim conditions"])), UI.SetEnabled(["Rage", "SUBTAB_MGR", "HvH Essentials", "SHEET_MGR", "HvH Essentials", "Hitchance"], UI.GetValue(["Rage", "SUBTAB_MGR", "HvH Essentials", "SHEET_MGR", "HvH Essentials", "Jump scout/revolver hitchance"])), UI.SetEnabled(["Rage", "SUBTAB_MGR", "HvH Essentials", "SHEET_MGR", "HvH Essentials", "No scope hitchance"], UI.GetValue(["Rage", "SUBTAB_MGR", "HvH Essentials", "SHEET_MGR", "HvH Essentials", "Override no scope hitchance"]));
    }
    AimForHeadIfShooting();
    if (!UI.GetValue(["Rage", "SUBTAB_MGR", "HvH Essentials", "SHEET_MGR", "HvH Essentials", "HvH Essentials"])) return;
    if (!Entity.IsValid(Entity.GetLocalPlayer())) return;
    if (!Entity.IsAlive(Entity.GetLocalPlayer())) return;
    DrawIndicators(), DrawToggles(), DrawDynamicDamage(), DrawDangerSigns();
}

function CreateMove() {
    if (!UI.GetValue(["Rage", "SUBTAB_MGR", "HvH Essentials", "SHEET_MGR", "HvH Essentials", "HvH Essentials"])) return;
    if (!Entity.IsValid(Entity.GetLocalPlayer())) return;
    if (!Entity.IsAlive(Entity.GetLocalPlayer())) return;
    AimForHeadIfShooting(), ForceConditions(), SetHitchanceInAir(), ReversedFreestanding(), SafepointOnLimbs(), WaitForOnShot(), OverrideMinimumDamage(), DodgeBruteforce(), NoScopeHitchance(), DesyncOnUse(), InstantRecharge();
}

function FrameNetUpdateStart() {
    UI.GetValue(["Rage", "SUBTAB_MGR", "HvH Essentials", "SHEET_MGR", "HvH Essentials", "Instant doubletap"]) && (Exploit.OverrideTolerance(0), Exploit.OverrideShift(14), shouldDisable = true), !UI.GetValue(["Rage", "SUBTAB_MGR", "HvH Essentials", "SHEET_MGR", "HvH Essentials", "Instant doubletap"]) && shouldDisable == true && (Exploit.OverrideTolerance(1), Exploit.OverrideShift(12), shouldDisable = false);
}

var rechargeTime = 0, updateTime = true, shouldDisableRecharge = true;
function InstantRecharge() {
    if (UI.GetValue(["Rage", "SUBTAB_MGR", "HvH Essentials", "SHEET_MGR", "HvH Essentials", "Instant recharge"])) {
        const _0xaf30x191 = new Date().getTime() / 1000;//0x3e8;
        Exploit.DisableRecharge(), shouldDisableRecharge = true;
        if (Exploit.GetCharge() >= 1) {
            updateTime = true;
        }                                                                                                                      //0.75
        Exploit.GetCharge() < 1 && (updateTime && (rechargeTime = _0xaf30x191, updateTime = false), _0xaf30x191 - rechargeTime > 0.5 && updateTime == false && (Exploit.Recharge(), rechargeTime = _0xaf30x191))
    } else {
        shouldDisableRecharge && (Exploit.EnableRecharge(), shouldDisableRecharge = false);
    }
}

function ClearData() {
    firedThisTick = 0, storedShotTime = 0, info = 0;
}

function Main() {
    for (i = 0; i < 64; i++) {
        info[i] = '', safeTargets[i] = false;
    }
    Cheat.RegisterCallback("CreateMove", "CreateMove"), 
    Cheat.RegisterCallback("Draw", "Draw"), 
    Cheat.RegisterCallback("ragebot_fire", "RagebotLogs"), 
    Cheat.RegisterCallback("round_start", "ClearData"), 
    Cheat.RegisterCallback("FRAME_NET_UPDATE_START", "FrameNetUpdateStart");
}
Main();