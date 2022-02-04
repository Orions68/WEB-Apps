function calcular() // La función calcular la llamo después de agregar el script script.js al final del body.
{
    var a = prompt("Introduce el Valor de A: "); // La variable "a" espera entrada por teclado con prompt.
    var b = prompt("Introduce el Valor de B: ");
    var c = prompt("Introduce el Valor de C: ");
    if (a > b && a > c) // comparo si a es mayor que b y si es mayor que c
    {
        document.getElementById("mayor").innerHTML = "A"; // Si se cumple la condición, imprime que A es mayor en el span con id mayor.
        if (b == c) // Aquí compruebo si b y c son iguales.
        {
            document.getElementById("igual").innerHTML = "B y C son"; // Si son iguales lo imprime en el span con el id igual.
        }
        else
        {
            b > c ? document.getElementById("menosMayor").innerHTML = "B" : document.getElementById("menosMayor").innerHTML = "C"; // Condición ternaria para saber cual de las dos es mayor si b o c y lo imprime en el span con id menosMayor.
            document.getElementById("igual").innerHTML = "no hay";
        }
    }
    else if (b > a && b > c)
    {
        document.getElementById("mayor").innerHTML = "B";
        if (a == c)
        {
            document.getElementById("igual").innerHTML = "A y C son";
        }
        else
        {
            a > c ? document.getElementById("menosMayor").innerHTML = "A" : document.getElementById("menosMayor").innerHTML = "C";
            document.getElementById("igual").innerHTML = "no hay";
        }
    }
    else if (c > a && c > b)
    {
        document.getElementById("mayor").innerHTML = "C";
        if (a == b)
        {
            document.getElementById("igual").innerHTML = "A y B son";
        }
        else
        {
            a > b ? document.getElementById("menosMayor").innerHTML = "A" : document.getElementById("menosMayor").innerHTML = "B";
            document.getElementById("igual").innerHTML = "no hay";
        }
    }
    else if (a == b && a == c) // Aquí comparo si las variables son iguales.
    {
        document.getElementById("mayor").innerHTML = "A, B y C"; // Si son todas iguales lo pone en el span con id mayor.
        document.getElementById("igual").innerHTML = "A, B y C son"; // E imprime que las tres variables son iguales en el span con id igual.
    }
    else if (a == b)
    {
        document.getElementById("mayor").innerHTML = "A y B";
        document.getElementById("menosMayor").innerHTML = "C"
        document.getElementById("igual").innerHTML = "A y B son";
    }
    else if (a == c)
    {
        document.getElementById("mayor").innerHTML = "A y C";
        document.getElementById("menosMayor").innerHTML = "B"
        document.getElementById("igual").innerHTML = "A y C son";
    }
    else
    {
        document.getElementById("mayor").innerHTML = "B y C";
        document.getElementById("menosMayor").innerHTML = "A"
        document.getElementById("igual").innerHTML = "B y C son";
    }
}