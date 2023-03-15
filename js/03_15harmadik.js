/*
var objektum = 
{
    szam1: 34,
    szam2: 23,
    id: 0,
    ertek: "Zöldvár4",
    Torol: Torol(),
    szomszedok:[230,2424,2342,42]
}
function Torol()
{
    console.log("töröl");
}
console.log(objektum.szomszedok[0]);
console.log(objektum.szam1);
*/
console.log("\r\n   __ ______________  ______________________________  \r\n  / //_/ __/ __/_  / /  _/_  __/ __/_  __/_  __/ __/  \r\n / ,< / _/_\\ \\  / /__/ /  / / / _/  / /   / / / _/    \r\n/_/|_/___/___/ /___/___/ /_/ /___/ /_/   /_/ /___/    \r\n                                                      \r\n");
console.log("\r\n   ___         _    __                ___       ___      __ \r\n  / _ )__ __  (_)__/ /__  ___ ___    / _ )___ _/ (_)__  / /_\r\n / _  / // / / / _  / _ \\(_-</ _ \\  / _  / _ `/ / / _ \\/ __/\r\n/____/\\_,_/_/ /\\_,_/\\___/___/\\___/ /____/\\_,_/_/_/_//_/\\__/ \r\n         |___/                                              \r\n");
console.log("\r\n   ________\r\n  / __/ __/\r\n / _/_\\ \\  \r\n/___/___/  \r\n           \r\n");
console.log("\r\n   ______  _______  ___  ____  _____________  ____  ___ \r\n  / __/  |/  / __ \\/ _ \\/  _/ /_  __/  _/ _ )/ __ \\/ _ \\\r\n / _// /|_/ / /_/ / // // /    / / _/ // _  / /_/ / , _/\r\n/___/_/  /_/\\____/____/___/   /_/ /___/____/\\____/_/|_| \r\n                                                        \r\n");
var kartyAdatok = [

    { id: 1, value: -3, sign: '' },
    { id: 2, value: 2, sign: '' },
    { id: 3, value: 5, sign: '' },
    { id: 4, value: 4, sign: '' },
    { id: 5, value: 3, sign: '' },
    { id: 6, value: 0, sign: 'pap' },
    { id: 7, value: -6, sign: '' },
    { id: 8, value: 6, sign: '' },
    { id: 9, value: 0, sign: 'taliga' },
    { id: 10, value: 2, sign: '' },
    { id: 11, value: 0, sign: 'hegy' },
    { id: 12, value: -5, sign: '' },
    { id: 13, value: 4, sign: '' },
    { id: 14, value: 0, sign: 'sarkany' },
    { id: 15, value: 5, sign: '' },
    { id: 16, value: 6, sign: '' },
    { id: 17, value: -4, sign: '' },
    { id: 18, value: 1, sign: '' },
    { id: 19, value: -1, sign: '' },
    { id: 20, value: -2, sign: '' },
    { id: 21, value: 0, sign: 'hegy' },
    { id: 22, value: 3, sign: '' },
    { id: 23, value: 1, sign: '' }

];


var varadatok =
    [
        { id: 1, color: 1, value: 1 },
        { id: 2, color: 1, value: 2 },
        { id: 3, color: 1, value: 3 },
        { id: 4, color: 1, value: 4 },
        { id: 5, color: 2, value: 1 },
        { id: 6, color: 2, value: 2 },
        { id: 7, color: 2, value: 3 },
        { id: 8, color: 2, value: 4 },
        { id: 9, color: 3, value: 1 },
        { id: 10, color: 3, value: 2 },
        { id: 11, color: 3, value: 3 },
        { id: 12, color: 3, value: 4 },
        { id: 13, color: 4, value: 1 },
        { id: 14, color: 4, value: 2 },
        { id: 15, color: 4, value: 3 },
        { id: 16, color: 4, value: 4 }


    ];
var tabla = document.createElement("div");
var kartyaBox = document.createElement("div");
var leftside = document.createElement("div")
var pontBox = document.createElement("div");
var korBox = document.createElement("div");
var cellak = [];

var kepKivalasztva=false;
var kepElhelyezve =true;
var kepIndex;
var jatekter = document.getElementById("jatekter");



function JatekterBetoltese() {

    leftside.appendChild(kartyaBox);
    leftside.appendChild(pontBox);
    jatekter.appendChild(leftside);
    jatekter.appendChild(tabla);
    jatekter.appendChild(korBox);


    
    pontBox.innerHTML = "pontok";
    

}
function JatekterElrendezese() {
    kartyaBox.id = "kartyabox";
    korBox.id = "korbox";
    leftside.id = "leftside";
    tabla.id = "tabla";
    pontBox.id = "pontbox";
}
function Tablageneralasa() {
    var k = 0;
    var pothely = document.getElementById("potHely");
    for (var i = 0; i < 5; i++) {
        var sordiv = document.createElement("div");
        sordiv.classList += " sordiv";
        for (var j = 0; j < 6; j++) {
            var oszlopdiv = document.createElement("div");
            //oszlopdiv.innerHTML=5*i+j+"x";
            oszlopdiv.classList += " oszlopdiv";
            oszlopdiv.id = k;
            k++;
            oszlopdiv.addEventListener("click",function(){
                if(kepKivalasztva && !kepElhelyezve)
                {
                   
                    kepElhelyezve=true;
                    kepKivalasztva=false;
                    var kep1 = document.createElement("img");
                    kep1.src="../babuk/"+kepszam+".png";
                    kep1.style.height="100%";
                    kep1.style.width="100%";
                    this.appendChild(kep1);
                    
                    
                }
            })
            //oszlopdiv.setAttribute("onclick","Kepkivalasztas(this)")
            oszlopdiv.setAttribute("onclick","cellaRanyomsz(this)");


            sordiv.appendChild(oszlopdiv);

        }
        tabla.appendChild(sordiv);
    }
    
    kartyaBox.setAttribute("onclick","kartyaBoxRanyom(this)");


}
/* */ 
var ranyom;
function kartyaBoxRanyom(){
    ranyom = true;
    console.log("teszt")
}

var temp = 0;
var tombhely =0;
var szamok = [];

function cellaRanyomsz(div) {
    if (ranyom && temp < 24) {
        console.log(div);
        var velkartyaszam = Math.floor(Math.random() * 23 + 1);
        while (szamok.includes(velkartyaszam)) {
            velkartyaszam = Math.floor(Math.random() * 23 + 1);
        }
        szamok.push(velkartyaszam);
        var img = document.createElement("img");
        img.src = "../kartya/" + velkartyaszam + ".png";
        img.style.height = "20px";
        img.style.width = "20px";
        img.value = velkartyaszam;
        div.appendChild(img);
        console.log(img)
        var img2 = document.createElement("img");
        korBox.innerHTML = "";
        img2.src = "../kartya/" + velkartyaszam + ".png";
        img.style.height = "100%";
        img.style.width = "100%";
        img2.style.height = "100px";
        img2.style.width = "100px";
        //---------------------------------------
        var divo1 = document.createElement("div");
        divo1.style.border = "1px solid black";
        divo1.style.alignItems = "center";
        var divo = document.createElement("div");
        divo.style.border = "1px solid black";
        divo.style.alignItems = "center";
        var h1 = document.createElement("h1");
        h1.style.color = "white";
        h1.innerHTML = "A jelenlegi kör:";
        h1.style.textAlign = "center";
        var pjel = document.createElement("p");
        pjel.style.color = "white";
        pjel.innerHTML = "Legutoljára lerakott kártya:";
        korBox.appendChild(divo);
        divo.appendChild(h1);
        divo.appendChild(divo1);
        divo1.appendChild(pjel);
        divo1.appendChild(img2);
        div.setAttribute("onclick", "");
        temp++;
        console.log(szamok);
    }
    ranyom = false;

}
var varszamok = [];
var vartemp = 0;
var kepszam = 0;
function VarGen()
{
    
    for(var i=0;i<7;i++)
    {
        
        var hely = document.getElementById("potHely");
        var velvarszam = Math.floor(Math.random()*16+1);
        while (varszamok.includes(velvarszam)) {
            velvarszam = Math.floor(Math.random() * 16 + 1);
        }
        varszamok.push(velvarszam);
        var kep1 = document.createElement("img");
        kep1.src = "../babuk/"+velvarszam+".png";
        kep1.style.height="100px";
        kep1.style.width="100px";
        kep1.value = velvarszam;
        kep1.addEventListener("click",function(){
        if(!kepKivalasztva && kepElhelyezve)
        {
            kepIndex = varszamok[vartemp];
            console.log(varszamok);
            kepKivalasztva = true;
            this.style.visibility="hidden";
            kepElhelyezve = false;
            kepszam = varszamok[va];
            vartemp++;
        }
        
        })

        hely.appendChild(kep1);
    }
    
}



function Main() {

    // console.log(kartyAdatok[0]);// "."+elem ami kell pl.: kartyaAdatok[0].value

    JatekterBetoltese();
    JatekterElrendezese();
    Tablageneralasa();
    VarGen();
}

Main();
/*
cella = 
{
    type "vár / "kártya",
    info:
}
cella.type -> vár
cella.info.id -> 1
cellak[i].type > 
cellak[i].info.id ->1 
*/
