//Boutons de changement de couleur
var boutonRouge = document.getElementById("boutonRouge");
var boutonVert = document.getElementById("boutonVert");
var boutonBleu = document.getElementById("boutonBleu");

//Div des differentes couleurs
var couleurs = document.getElementsByClassName("couleur");

//Ajout du changement de couleur lorsque l'input perd le focus
for (let i = 0; i < couleurs.length; i++) {
    couleurs[i].getElementsByTagName("input")[0].addEventListener("focusout", function() {
        backgroundColorFromInput()
    });
}

//Si le cookie existe, mettre sa valeur deans les input
if (cookie = readCookie("bgColor")) {

    couleurs[0].getElementsByTagName("input")[0].value = cookie.substring(1, 3);
    couleurs[1].getElementsByTagName("input")[0].value = cookie.substring(3, 5);
    couleurs[2].getElementsByTagName("input")[0].value = cookie.substring(5, 7);

}

//Change la couleur en fonction des inputs
backgroundColorFromInput();


//Event listeners sur les boutons
boutonRouge.addEventListener("click", function() {
    changeBackgroundColor("FF", "00", "00");
});

boutonVert.addEventListener("click", function() {
    changeBackgroundColor("00", "FF", "00");
});

boutonBleu.addEventListener("click", function() {
    changeBackgroundColor("00", "00", "FF");
});


//Changement de couleur du background
function changeBackgroundColor(r, g, b) {
    var color = "#" + r + g + b;
    document.getElementsByTagName("body")[0].style.backgroundColor = color;
    createCookie("bgColor", color, 5);
}


//Changement de couleur du background depuis la valeur des input
function backgroundColorFromInput() {
    r = couleurs[0].getElementsByTagName("input")[0].value;
    g = couleurs[1].getElementsByTagName("input")[0].value;
    b = couleurs[2].getElementsByTagName("input")[0].value;

    changeBackgroundColor(r, g, b);
}