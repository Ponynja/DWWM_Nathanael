//Ajoute la fonction de calcul au changement de chaque champ
for (let i = 0; i < inputsToValidate.length; i++) {
    inputsToValidate[i].addEventListener("input", calculmensualite);
}

//Ajoute la fonction de calcul au bouton calculer
document.getElementById("calcButton").addEventListener("click", calculmensualite);

//Vide les champs au click sur le bouton nouveau calcul
document.getElementById("resetButton").addEventListener("click", function() {

    //Recupérer les inputs
    inputs = document.getElementsByTagName("input");

    //Parcourir les inputs et les vider
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].value = null;

        //Si l'input doit être valide
        if (inputs[i].classList.contains("checkValidity")) {
            updateValidity(inputs[i]);
        }
    }

});


//Fonction qui calcule la mensualite et le cout total si les données entrées sont correctes
function calculmensualite() {

    //Booleen de validité de tous les champs
    isValid = true;

    //Convertir l'objet validity en array contenant les valeurs de ses attributs Ex: {input: true, input2: false, input3: false} => [true,false,false]
    validityArray = Object.entries(validity);

    //Verifier si l'array contient false, si oui tous les champs ne sont pas valides => changer isValid à faux
    validityArray.forEach(element => {
        if (element.includes(false)) {
            isValid = false;
        }
    });

    //Si tous les champs sont valides
    if (isValid) {

        //Récupérer les données des inputs
        capital = document.getElementById("capitalEmprunte").value;
        taux = document.getElementById("tauxNominalAnnuel").value / 100;
        nbAnnees = document.getElementById("dureeEmprunt").value;
        nbMois = nbAnnees * 12;


        //Calculer la mensualtié et le cout total 
        var mensulalite = (capital  *  taux / 12) / (1  -  Math.pow(1  +  taux / 12,  -nbMois));
        var coutTotal = mensulalite * nbMois;

        //Mettre à jour l'affichage des résultats
        document.getElementById("mensualite").value = mensulalite;
        document.getElementById("coutTotal").value = coutTotal;

    };

}