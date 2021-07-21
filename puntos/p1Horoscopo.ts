function getHoroscopo (fecha:Date):string{

    let signoZodiaco:string ="";

    let dia:number = fecha.getDay();

    let mes:number = fecha.getMonth();

    /* Aries -> 21 de marzo al 19 abril
    Tauro -> 20 de abril al 20 de mayo
    Geminis -> 21 mayo al  20 de junio
    Cancer -> 21 de junio al 22 de julio
    Leo -> 23 julio a 22 agosto
    Virgo -> 23 agosto a 22 septiembre
    Libra -> 23 septiembre 22 octubre
    Escorpio -> 23 octubre 21 noviembre
    Sagitario  ->22 noveimbre a 21 diciembre
    Capricornio -> 22 diciembre 19 enero
    Acuario -> 20 enero 18 febrero
    Piscis -> 19 febrero 20 marzo*/

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

// console.log("Eres: ");

// console.log(getHoroscopo(new Date(1986,1,17)));

