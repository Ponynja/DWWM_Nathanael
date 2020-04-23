//Contient tous les champs à vérifier  identifiés par la class "checkValidity"
inputsToValidate = document.getElementsByClassName("checkValidity");

//Contient la validité de tous les champs à vérifier
var validity = {};

//Ajoute la vérification de validité au changement de chaque champ
for (let i = 0; i < inputsToValidate.length; i++) {
    inputsToValidate[i].addEventListener("input", function() {
        updateValidity(event.target);
    });
    updateValidity(inputsToValidate[i]);
}

//Vérifie la validité et change le style en conséquence
function updateValidity(input) {
    isValid = validateInput(input);
    styleValidity(input, isValid);
    messageValidity(input, isValid);
}

//Vérifie la validité
function validateInput(input) {
    isValid = input.checkValidity();
    validity[input.id] = isValid;
    return isValid;
}

// Affiche le message d'erreur
function messageValidity(input, isValid) {

    var message = input.parentNode.getElementsByClassName("message")[0];
    message.classList.add("visible");

    if (isValid) {
        message.innerHTML = "Champ valide.";
        message.style.color = "rgb(50,150,50)";

    } else {
        if (input.value == "" && input.required) {
            message.innerHTML = "Champ requis!";
        } else {
            message.innerHTML = "Format invalide!";
        }

        message.style.color = "rgb(225,50,50)";
    }

}

//Changer la couleur du champ en foncion de la validité
function styleValidity(input, isValid) {
    if (isValid) {
        input.style.borderColor = "rgb(50,150,50)";
    } else {
        input.style.borderColor = "rgb(225,50,50)";
    }
}