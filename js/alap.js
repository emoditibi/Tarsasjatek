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
var kartyAdatok=[

    {id:1,value:-3,sign:''},
    {id:2,value:2,sign:''},
    {id:3,value:5,sign:''},
    {id:4,value:4,sign:''},
    {id:5,value:3,sign:''},
    {id:6,value:0,sign:'pap'},
    {id:7,value:-6,sign:''},
    {id:8,value:6,sign:''},
    {id:9,value:0,sign:'taliga'},
    {id:10,value:2,sign:''},
    {id:11,value:0,sign:'hegy'},
    {id:12,value:-5,sign:''},
    {id:13,value:4,sign:''},
    {id:14,value:0,sign:'sarkany'},
    {id:15,value:5,sign:''},
    {id:16,value:6,sign:''},
    {id:17,value:-4,sign:''},
    {id:18,value:1,sign:''},
    {id:19,value:-1,sign:''},
    {id:20,value:-2,sign:''},
    {id:21,value:0,sign:'hegy'},
    {id:22,value:3,sign:''},
    {id:23,value:1,sign:''}
    
    ];
    
    
    var varadatok = 
    [
    {id:1,color:1,value:1},
    {id:2,color:1,value:2},
    {id:3,color:1,value:3},
    {id:4,color:1,value:4},
    {id:5,color:2,value:1},
    {id:6,color:2,value:2},
    {id:7,color:2,value:3},
    {id:8,color:2,value:4},
    {id:9,color:3,value:1},
    {id:10,color:3,value:2},
    {id:11,color:3,value:3},
    {id:12,color:3,value:4},
    {id:13,color:4,value:1},
    {id:14,color:4,value:2},
    {id:15,color:4,value:3},
    {id:16,color:4,value:4}
    
    
    ];
    var tabla = document.createElement("div");
    var kartyaBox = document.createElement("div");
    var leftside = document.createElement("div")
    var pontBox = document.createElement("div");
    var korBox = document.createElement("div");
    var cellak = [];
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
    function Cellakfeltoltese()
    {
    
        for(var i = 0; i < 23; i++)
        {
            cellak[i] = {};
            cellak[i].type = "kártya";
            cellak[i].info = kartyAdatok[i];
        }
        console.log(cellak);
        for(var i = 23; i < 30; i++)
        {
            cellak[i]={};
            cellak[i].type="vár";
            cellak[i].info=varadatok[i-23];
        }
    
    }
    function CellakMegjelenitese()
    {
        //cellak[0] -> kep
        /*
        if(cellak[0].type == "kártya")
        {
            var kep = document.createElement("img");
            kep.src="../kartya"+cellak[0].info.id+".png";
            var hely =  cellak[0].info.id-1;
            hely.appendChild(kep);
        }
        */
        var szinek = ["kek","piros","zold","sarga"]
        for(var i = 0; i < 30; i++)
        {
            var  index = cellak[i].info.id; 
            var value = cellak[i].info.value;
            var kep = document.createElement("img");
            if(cellak[i].type == "kártya")
            {
                kep.src="./kartya/"+index+".png";
            }
            else
            {
                var varakelem = Math.floor(Math.random()*4);
                kep.src="./babuk/"+szinek[varakelem]+value+".png";
            }
            var div = document.getElementById(i);   
            div.appendChild(kep);
            console.log(value);
        }
        
    }
    function CeallakKeverese()
    {
    for(let i=0;i<100;i++)
    {
    var vel1=Math.floor(Math.random()*30);
    var vel2=Math.floor(Math.random()*30);
    var sv=cellak[vel1];
    cellak[vel1] = cellak[vel2];
    cellak[vel2] =sv;
    }
    
    }
    function Main()
    {
    
       // console.log(kartyAdatok[0]);// "."+elem ami kell pl.: kartyaAdatok[0].value
    
    
    
        JatekterBetoltese();
        JatekterElrendezese();
        Tablageneralasa();
        Cellakfeltoltese();
        CeallakKeverese();
        CellakMegjelenitese();
    
    }
    function SorokOszzege(){

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
