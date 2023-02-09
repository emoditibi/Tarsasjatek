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

for(var i = 0; i<5; i++)
{
    var sordiv = document.createElement("div");
    sordiv.classList += " sordiv";
    for(var j = 0; j<6; j++)
{
    var oszlopdiv = document.createElement("div");
    oszlopdiv.innerHTML=5*i+j+"x";
    oszlopdiv.classList += " oszlopdiv";
    sordiv.appendChild(oszlopdiv);

}
tabla.appendChild(sordiv);
}

}

function Kartyakatbelegeneral(db)
{
  for(var i = 0; i < 30; i++)
  {

    

  }
}
function Main()
{


    JatekterBetoltese();
    JatekterElrendezese();
    Tablageneralasa();
    Kartyakatbelegeneral(5);
}

Main();














