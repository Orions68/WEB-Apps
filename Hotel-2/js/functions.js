/* Función para cambiar de página cuando el usuario gira la rueda del mouse, no funciona en Edge. */
function navigate(event)
{
    var y = event.deltaY; /* Pone en la variable y la variación del giro de la rueda del mouse, hacia abajo es positivo, hacia arriba es negativo. */
    if (y > 0) /* Si y es positivo */
    {
        counter++; /* Incrementa la variable counter */
        if (counter > 4) /* Si counter supera 4, hace lo que está entre las llaves {} */
        {
            counter = 4; /* Pone el valor 4 en la variable counter */
        }
        switch(counter) /* cambia al valor de counter. */
        {
            case 1:
                document.getElementById("services").scrollIntoView(); /* Hace scroll a la página services, el div con el ID services */
            break;
            case 2:
                document.getElementById("rooms").scrollIntoView(); /* Hace scroll a la página rooms, el div con el ID rooms */
            break;
            case 3:
                document.getElementById("restaurant").scrollIntoView(); /* Hace scroll a la página restaurant, el div con el ID restaurant */
            break;
            case 4:
                document.getElementById("relax").scrollIntoView(); /* Hace scroll a la página relax, el div con el ID relax */
            break;
            default:
                document.getElementById("pageTop").scrollIntoView(); /* Por defecto muestra la página topPage, el div con el ID topPage */
            break;
        }
    }
    else /* Si y es negativo */
    {
        counter--; /* Decrementa la variable counter */
        if (counter < 0) /* Si counter es menor que 0, hace lo que está entre las llaves {} */
        {
            counter = 0; /* Pone el valor 0 en la variable counter */
        }
        switch(counter) /* cambia al valor de counter. */
        {
            case 0:
                document.getElementById("pageTop").scrollIntoView(); /* Hace scroll a la página topPage, el div con el ID topPage */
            break;
            case 1:
                document.getElementById("services").scrollIntoView(); /* Hace scroll a la página services, el div con el ID services */
            break;
            case 2:
                document.getElementById("rooms").scrollIntoView(); /* Hace scroll a la página rooms, el div con el ID rooms */
            break;
            case 3:
                document.getElementById("restaurant").scrollIntoView(); /* Hace scroll a la página restaurant, el div con el ID restaurant */
            break;
            default:
                document.getElementById("relax").scrollIntoView(); /* Por defecto muestra la página relax, el div con el ID relax */
            break;
        }
    }
}

function screenSize() // Función para igualar el alto de las páginas al alto disponible en la vista del navegador.
{
    var top = document.getElementById("pageTop"); /* Pone en la variable top el Elemento <div> con el ID pageTop */
    var services = document.getElementById("services"); /* Pone en la variable services el Elemento <div> con el ID services */
    var rooms = document.getElementById("rooms"); /* Pone en la variable rooms el Elemento <div> con el ID rooms */
    var restaurant = document.getElementById("restaurant"); /* Pone en la variable restaurant el Elemento <div> con el ID restaurant */
    var relax = document.getElementById("relax"); /* Pone en la variable relax el Elemento <div> con el ID relax */
    var screenHeight = window.innerHeight; /* Obtiene en la variable screenHeight el tamaño disponible en la pantalla del navegador. */
    top.style.height = screenHeight + "px"; /* Usa el tamaño de pantalla disponible como altura del Elemento <div> con la ID top */
    services.style.height = screenHeight + "px"; /* Usa el tamaño de pantalla disponible como altura del Elemento <div> con la ID services */
    rooms.style.height = screenHeight + "px"; /* Usa el tamaño de pantalla disponible como altura del Elemento <div> con la ID rooms */
    restaurant.style.height = screenHeight + "px"; /* Usa el tamaño de pantalla disponible como altura del Elemento <div> con la ID restaurant */
    relax.style.height = screenHeight + "px"; /* Usa el tamaño de pantalla disponible como altura del Elemento <div> con la ID relax */
    /* Nota: al final de la variable screenHeight se agrega el texto px, ya que es necesario para el estilo altura. */
}