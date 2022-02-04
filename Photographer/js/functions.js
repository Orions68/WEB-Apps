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
                document.getElementById("photos").scrollIntoView();
            break;
            case 2:
                document.getElementById("photos2").scrollIntoView();
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
                document.getElementById("photos").scrollIntoView();
            break;
            case 2:
                document.getElementById("photos2").scrollIntoView();
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
    var photos = document.getElementById("photos");
    var photos2 = document.getElementById("photos2");
    var other = document.getElementById("other");
    var screenHeight = window.innerHeight;
    top.style.height = screenHeight + "px";
    photos.style.height = screenHeight + "px";
    photos2.style.height = screenHeight + "px";
    other.style.height = screenHeight + "px";
}