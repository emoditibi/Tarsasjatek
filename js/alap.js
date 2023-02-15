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
var tabla = document.createElement("div");
var kartyaBox = document.createElement("div");
var leftside = document.createElement("div")
var pontBox = document.createElement("div");

var korBox = document.createElement("div");

var jatekter = document.getElementById("jatekter");



function JatekterBetoltese()
{

    leftside.appendChild(kartyaBox);
    leftside.appendChild(pontBox);
    jatekter.appendChild(leftside);
    jatekter.appendChild(tabla);
    jatekter.appendChild(korBox);
    
  
    kartyaBox.innerHTML="kartya box";
    pontBox.innerHTML="pontok";
    korBox.innerHTML="kor";

}
function JatekterElrendezese()
{
    kartyaBox.id="kartyabox";
    korBox.id="korbox";
    leftside.id = "leftside";
    tabla.id="tabla";
    pontBox.id="pontbox";
}
function Tablageneralasa()
{
var k = 0;
for(var i = 0; i<5; i++)
{
    var sordiv = document.createElement("div");
    sordiv.classList += " sordiv";
    for(var j = 0; j<6; j++)
{
    var oszlopdiv = document.createElement("div");
    //oszlopdiv.innerHTML=5*i+j+"x";
    oszlopdiv.classList += " oszlopdiv";
    oszlopdiv.id = k;
    k++;
    sordiv.appendChild(oszlopdiv);

}
tabla.appendChild(sordiv);
}

}

function Kartyakatbelegeneral(db)
{
//Hf design
//csináld meg h ne legyen isétlődés
var tomb = new Array();

for(var i = 0; i <= db;i++)
{
    var velkartyaszam = Math.floor(Math.random()*23+1);
    var kep1 = document.createElement("img");
    kep1.src = "../kartya/"+velkartyaszam+".png";
    var velhelyszam = Math.floor(Math.random()*30+1);
    while(tomb.includes(velhelyszam))   
    {
        var velhelyszam = Math.floor(Math.random()*30+1);
    }
    var hely = document.getElementById(velhelyszam);
    tomb.push(velhelyszam);
    hely.appendChild(kep1);
    //Varak(tomb);
}
/*
function Varak(tomb)
{
    var vlista = new Array();
    var darab = 7;
    var szinek = ["kek","piros","zold","sarga"]
    var i = 0;
    while(i<darab)
    {
        var random = Math.floor(Math.random()*30+1);
        var random2 = Math.floor(Math.random()*4+1);

        if(!tomb.includes(random) && !vlista.includes(random))
        {
            vlista.push(random);
            var kep = document.createElement("img");
            kep.src = "../babuk/"+szinek+"/"+random2+".png";
            var cella = document.getElementById(random);
            cella.appendChild(kep);
            i++
        }
    }

}
*/
}
function Main()
{


    JatekterBetoltese();
    JatekterElrendezese();
    Tablageneralasa();
    Kartyakatbelegeneral(5);
}

Main();














