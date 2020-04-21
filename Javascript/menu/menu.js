var labels = document.getElementsByClassName("menuLabel");

for (let i = 0; i < labels.length; i++) {
    labels[i].addEventListener("click", labelClickListener);
}

function closeAll() {
    var active = document.getElementsByClassName("active");

    for (let i = 0; i < active.length; i++) {
        active[i].classList.remove("active");
    }
}


function labelClickListener() {

    var menu = event.target.parentElement;

    if (menu.classList.contains("active")) {
        menu.classList.remove("active");

        var activeMenus = menu.getElementsByClassName("active");

        for (let j = 0; j < activeMenus.length; j++) {
            activeMenus[j].classList.remove("active");
        }

    } else {
        if (menu.classList.contains("category")) {
            closeAll();
        }
        menu.classList.add("active");
    }
}