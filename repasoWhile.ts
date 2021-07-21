

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

function empiezarXm (arr:string[]):void
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

function parImpar(num:number):void
{
    num%2==0    ? console.log("El número es PAR")
                : console.log("El número es IMPAR");
    
}

function existePar(arr:number[]):string
{
    let hayPar:boolean = false;
    let mensaje = "";
    let contador:number = 0;

    while( !hayPar && contador<arr.length  )
    {
        arr[contador]%2==0  ? hayPar = true 
                            : hayPar = false;

        contador ++;
    }

    hayPar  ? mensaje = "Hay número par" : mensaje = "No hay par" ;

    return mensaje;
}

function contarCaracters2 (arr:string[]):number
{
    let totalCaracteres:number = 0;

    arr.forEach(function(valor)
                {
                    totalCaracteres += valor.length;
                })

    return totalCaracteres;
}

function nCaracteresParImpar (arr:string[]):void
{
    console.log("Número de caracteres: " + contarCaracters2(arr) + "\n" );
    console.log(parImpar(contarCaracters2(arr)));
}