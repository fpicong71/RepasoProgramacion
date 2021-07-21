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

// console.log(printImpares(27));