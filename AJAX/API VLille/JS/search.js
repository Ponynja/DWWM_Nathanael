var bar = document.getElementById("searchBar");
var search = document.getElementById("searchButton");

//Lorsque l'on clique sur le bouton de recherche
search.addEventListener("click", function() {

    var filter = bar.value; //Valeur de la barre de recherche

    var stations = document.getElementsByClassName("station");

    //Pour chaque station, comparer la recherche avec le nom et l'adresse
    for (let i = 0; i < stations.length; i++) {

        //Valeurs du nom et de l'adresse de la station
        divnom = stations[i].getElementsByClassName("nom")[0];
        divadresse = stations[i].getElementsByClassName("adresse")[0];
        nom = divnom.innerText || divnom.textContent;
        adresse = divadresse.innerText || divadresse.textContent;

        //Si la recherche correspond, afficher la station
        if (nom.toUpperCase().indexOf(filter.toUpperCase()) != -1 || adresse.toUpperCase().indexOf(filter.toUpperCase()) != -1) {
            stations[i].style.display = "";

            //Sinon la cacher
        } else {
            stations[i].style.display = "none";
        }
    }

});