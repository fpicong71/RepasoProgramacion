import { contarCaracters } from "./p8ContarCaracters";
import { parImpar } from "./p9ParImpar";

function nCaracteresParImpar (arr:string[]):void
{
    console.log("Número de caracteres: " + contarCaracters(arr) + "\n" );
    console.log(parImpar(contarCaracters(arr)));
}

// nCaracteresParImpar(["Casa","Coche","Ciudad","Cesta"]);
// nCaracteresParImpar(["Barco","Baca","Bicicleta","Balón","Bisiesto","Brasil"]);
// nCaracteresParImpar(["Venezuela","Veneno","Voltaje"]);