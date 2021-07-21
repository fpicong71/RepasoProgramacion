export function contarCaracters (arr:string[]):number
{
    let totalCaracteres:number = 0;

    arr.forEach(function(valor)
                {
                    totalCaracteres += valor.length;
                })

    return totalCaracteres;
}

// console.log("Suma total de Caracteres en el arrray:\n"
//             + contarCaracters(["Esto"," es", "palabras"])
//             ); //15 caracteres
