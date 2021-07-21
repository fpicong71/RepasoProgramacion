function printImpares(num:number):string
{
    let impares: string = "";

    console.log("Impares hasta " + num + ": " );

    for (let i=0; i<=num; i++)
    {
        let esPar:boolean = num%2==0 ? true : false;

        if (esPar && i == (num-1) || !esPar && i == num)
        {
            if( i%2!=0 ) impares += (i);
        }
        else
        {
            if( i%2!=0 ) impares += (i) + " - ";
        }

    }
    return impares;
}

function coloresArcoIris(colors:string[]):string
{
    let enArcoIris:string = "";

    colors.forEach( function(valor)
                    {
                        switch(valor)
                        {
                            case "Rojo"         :
                            case "Naranja"      :
                            case "Amarillo"     :
                            case "Verde"        :
                            case "Cyan"         :
                            case "Celeste"      :
                            case "Azul"  :
                            case "Añil"         :
                            case "Azul Marino"  :
                            case "Violeta"      :
                            case "Morado"       :
                                enArcoIris += valor 
                                            + " - Está en el arcoIris \n";
                                break;

                            default:
                                enArcoIris += valor 
                                + " - NO Está en el arcoIris \n";
                                break;
                        }

                    } )

    return enArcoIris;
}
function contarCaracters (arr:string[]):number
{
    let totalCaracteres:number = 0;

    arr.forEach(function(valor)
                {
                    totalCaracteres += valor.length;
                })

    return totalCaracteres;
}

function reverseArr(arr:any[]):any[]
{   let arrInvertido:any[] = [];
    arrInvertido = arr.reverse();
    return arrInvertido;
}