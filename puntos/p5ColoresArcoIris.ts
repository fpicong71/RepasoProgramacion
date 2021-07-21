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

// console.log(coloresArcoIris(["Azul", "Bermellón", "Naranja", "Gris"]));