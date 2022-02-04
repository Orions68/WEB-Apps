function calcular()
{
    var precio = 150;
    var edad = prompt("Introduzca la edad del pasajero: "); // Espera la entrada por teclado de la edad con prompt.
    if (edad >= 0 && edad < 2) // Si la edad está entre 0 y menos de 2 años.
    {
        document.getElementById("edad").innerHTML = edad + " años."; // Escribe la edad en el span con id edad.
        document.getElementById("total").innerHTML = precio * 0 + " €"; // Forma normal de escribir texto concatenado, en el span con id total.
    }
    else if (edad >=2 && edad < 12) // Si la edad está entre 2 y menos de 12 años.
    {
        document.getElementById("edad").innerHTML = edad + " años."; // Escribe la edad en el span con id edad.
        document.getElementById("total").innerHTML = `${precio * .5} €`; // Forma de escribir texto concatenado con la pantilla literal de javascript, en el span con id total.
    }
    else if (edad >= 12) // Si la edad es mayor o igual a 12 años.
    {
        document.getElementById("edad").innerHTML = edad + " años."; // Escribe la edad en el span con id edad.
        document.getElementById("total").innerHTML = `${precio} €`; // Igual que la linea anterior, fijense que la comilla que usa es la de al lado de la letra p del teclado.
    }
    else
    {
        document.getElementById("total").innerHTML = "La edad debe ser un número positivo comensando por 0 (cero) como mínimo."; // Si la edad no es un número positivo o es una letra.
    }
}