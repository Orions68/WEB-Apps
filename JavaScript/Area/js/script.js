function calcular()
{
    var base = prompt("Introduce la medida de la Base en metros:"); // Espera la entrada de la variable base por teclado mediante prompt.
    var altura = prompt("Introduce la medida de la Altura metros:");
    if (base == altura) // Compara si base y altura son iguales.
    {
        document.getElementById("menormayor").innerHTML = "Igual"; // Si se cumple la condición imprime en el span con id menormayor que son iguales.
    }
    else // Si, no
    {
        base < altura ? document.getElementById("menormayor").innerHTML = "Mayor" : document.getElementById("menormayor").innerHTML = "Menor" /* La condición ternaria se usa para 
        distinguir entre dos valores, como no se puede saber si la base y la altura son iguales, primero se compara si hay igualdad en el if anterior. Se imprime la palabra
         Mayor o Menor según el resultado de la condición ternaria, en el span con id menosMayor. */
    }
    document.getElementById("base").innerHTML = base + " Metros."; // Escribe el valor de la base en metros.
    document.getElementById("altura").innerHTML = altura + " Metros."; // Escribe el valor de la altura en metros.
    document.getElementById("resultado").innerHTML = base * altura / 2 + " Metros Cuadrados."; // Escribe el resultado en metros cuadrados.
}