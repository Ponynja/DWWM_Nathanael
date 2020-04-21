var saisie = document.getElementById("saisie");

var nom = readCookie("nom");
var prenom = readCookie("prenom");

alert(nom + " " + prenom);

if (nom != null && prenom != null) {

    saisie.style.display = "none";

    var el = document.createElement("p");
    el.innerHTML = "Bienvenue, " + prenom + " " + nom + ".";

    document.getElementsByTagName("body")[0].appendChild(el)

}

document.getElementById("valider").addEventListener("click", function() {

    nom = document.getElementById("nom").value;
    prenom = document.getElementById("prenom").value;
    createCookie("nom", nom, 3);
    createCookie("prenom", prenom, 3);
});