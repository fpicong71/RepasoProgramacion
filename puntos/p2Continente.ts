/* function getContinente(pais:string):void
{
    switch(pais)
    {
        case "España"   :
        case "Francia"  :
        case "Alemania" :
        case "Italia"   :
        case "Portugal" :
           console.log("Europa");
           break;

        case "Marruecos"   :
        case "Tunez"  :
        case "Senegal" :
        case "Sudafrica"   :
        case "Congo" :
            console.log("África");
            break;

        case "Argentina"   :
        case "Chile"  :
        case "Colombia" :
        case "Brasil"   :
        case "Venezuela" :
            console.log("América");
            break;

        case "Tailandia"   :
        case "China"  :
        case "Japón" :
        case "India"   :
        case "Malasia" :
            console.log("Asia");
            break;
    
        case "Nueva Zelanda"   :
        case "Australia"  :
        case "Papua" :
        case "Samoa"   :
        case "Papua Nueva Guinea" :
            console.log("Oceanía");
            break;
        default:
            console.log("Pais no recogido");
            break;
    }

} */

function getContinente2(pais:string):void
{
    let encontrado = false;
    let continent = "";
    let misPaises:any[] =  [ { 
                            "continente": "Europa",
                            "paises"    : ["España","Francia","Alemania","Italia","Portugal"]
                        },
                        {
                            "continente": "África",
                            "paises"    : ["Marruecos","Tunez","Senegal","Sudafrica","Congo"]   
                        },
                        {
                            "continente": "Asia",
                            "paises"    : ["Tailandia","China","Japón","India","Malasia"]   
                        },
                        {
                            "continente": "América",
                            "paises"    : ["Argentina","Chile","Colombia","Brasil","Venezuela"]   
                        },
                        {
                            "continente": "Oceanía",
                            "paises"    : ["Nueva Zelanda","Australia","Papua","Samoa","Fiji"]   
                        }
                      ]

    let contador:number = 0;

    while(!encontrado && contador<misPaises.length)
    {
        encontrado = misPaises[contador].paises.includes(pais);
        if(encontrado)
        {
            continent = misPaises[contador].continente;
        }
        contador ++;      
    }

    if(!encontrado)
    {
        console.log("No encontrado");
    }
    else
    {
        console.log(continent);  
    }  
}

// console.log(getContinente2("Italia"));

