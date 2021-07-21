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

// empiezarXm(["María","Mónica","Juana"]);
// empiezarXm(["María","Mónica","Manuela","mireia"]);