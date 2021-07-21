function getHoroscopo (fecha:Date):string{

    let signoZodiaco:string ="";

    let dia:number = fecha.getDay();

    let mes:number = fecha.getMonth();

    if( (dia>=21 && mes == 3) || (dia<=19 && mes == 4) )
    {
        signoZodiaco = "Aries";
    }
    else if ((dia>=20 && mes == 4) || (dia<=20 && mes == 5))
    {
        signoZodiaco = "Tauro";
    }
    else if ((dia>=21 && mes == 5) || (dia<=20 && mes == 6))
    {
        signoZodiaco = "Géminis";
    }
    else if ((dia>=21 && mes == 6) || (dia<=22 && mes == 7))
    {
        signoZodiaco = "Cáncer";
    }
    else if ((dia>=23 && mes == 7) || (dia<=22 && mes == 8))
    {
        signoZodiaco = "Leo";
    }
    else if ((dia>=23 && mes == 8) || (dia<=22 && mes == 9))
    {
        signoZodiaco = "Virgo";
    }
    else if ((dia>=23 && mes == 9) || (dia<=22 && mes == 10))
    {
        signoZodiaco = "Libra";
    }
    else if ((dia>=23 && mes == 10) || (dia<=21 && mes == 11))
    {
        signoZodiaco = "Escorpio";
    }
    else if ((dia>=22 && mes == 11) || (dia<=22 && mes == 0))
    {
        signoZodiaco = "Sagitario";
    }
    else if ((dia>=23 && mes == 0) || (dia<=19 && mes == 1))
    {
        signoZodiaco = "Capricornio";
    }
    else if ((dia>=20 && mes == 1) || (dia<=18 && mes == 2))
    {
        signoZodiaco = "Acuario";
    }
    else
    {
        signoZodiaco = "Piscis"; 
    }
 
    return signoZodiaco;
}

function getContinente(pais:string):void
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

function empiezarXm2 (arr:string[]):void
{
    let longitud:number = arr.length;
    let empiezaM:boolean = true;
    let contador:number = 0;
    

    while(empiezaM && contador < longitud)
    {
        let letra:string = arr[contador][0];
        
        (letra.toUpperCase() !== "M" )  ?   empiezaM = false
                                        :   empiezaM = true;
        
        contador++;
    }

    empiezaM ==true   ? console.log("Todos empiezan por M")
                : console.log("NO todos empiezan por M");
                
}

function parImpar2(num:number):void
{
    num%2==0    ? console.log("El número es PAR")
                : console.log("El número es IMPAR");
    
}