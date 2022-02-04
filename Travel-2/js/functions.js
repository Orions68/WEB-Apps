function navigate(event)
{
    var y = event.deltaY;
    if (y > 0)
    {
        counter++;
        if (counter > 3)
        {
            counter = 3;
        }
        switch(counter)
        {
            case 1:
                document.getElementById("moon").scrollIntoView();
            break;
            case 2:
                document.getElementById("mars").scrollIntoView();
            break;
            case 3:
                document.getElementById("other").scrollIntoView();
            break;
            default:
                document.getElementById("pageTop").scrollIntoView();
            break;
        }
    }
    else
    {
        counter--;
        if (counter < 0)
        {
            counter = 0;
        }
        switch(counter)
        {
            case 0:
                document.getElementById("pageTop").scrollIntoView();
            break;
            case 1:
                document.getElementById("moon").scrollIntoView();
            break;
            case 2:
                document.getElementById("mars").scrollIntoView();
            break;
            default:
                document.getElementById("other").scrollIntoView();
            break;
        }
    }
}

function screenSize()
{
    var top = document.getElementById("pageTop");
    var moon = document.getElementById("moon");
    var mars = document.getElementById("mars");
    var other = document.getElementById("other");
    var screenHeight = window.innerHeight;
    top.style.height = screenHeight + "px";
    moon.style.height = screenHeight + "px";
    mars.style.height = screenHeight + "px";
    other.style.height = screenHeight + "px";
}