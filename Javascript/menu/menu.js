//Labels cliquables des menus et sous-menus
var labels = document.getElementsByClassName("menuLabel");

//Ajout de l'envent click sur chaque label
for (let i = 0; i < labels.length; i++) {
    labels[i].addEventListener("click", labelClickListener);
}


//Fonction qui ferme tous les menus actifs
function closeAll() {
    var active = document.getElementsByClassName("active");

    for (let i = 0; i < active.length; i++) {
        active[i].classList.remove("active");
    }
}

//Click Listener qui ouvre ou ferme le menu lorsque son label est cliqué
function labelClickListener() {

    var menu = event.target.parentElement;
    var parentMenu = menu.parentElement;

    //Si le menu est ouvert, le fermer
    if (menu.classList.contains("active")) {

        //Enlever la classe active
        menu.classList.remove("active");

        //Recuperer tous les sous-menus enfants ou adjacents ouverts
        var activeMenus = parentMenu.getElementsByClassName("active");

        //Fermer tous les sous-menus
        for (let j = 0; j < activeMenus.length; j++) {
            activeMenus[j].classList.remove("active");
        }

        //Si le menu est fermé, l'ouvrir
    } else {

        //Si le menu est une categorie, fermer tous les autres
        if (menu.classList.contains("category")) {
            closeAll();
        }

        //Recuperer tous les sous-menus enfants ou adjacents ouverts
        var activeMenus = parentMenu.getElementsByClassName("active");

        //Fermer tous les sous-menus
        for (let j = 0; j < activeMenus.length; j++) {
            activeMenus[j].classList.remove("active");
        }

        //Ajouter la classe active
        menu.classList.add("active");
    }
}