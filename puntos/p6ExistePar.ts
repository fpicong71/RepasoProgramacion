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

// console.log(existePar([21,33,25,222]));


