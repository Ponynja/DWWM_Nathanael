//---------------------------------------------------------------------
// Fonctions
//---------------------------------------------------------------------

//Mélanger les carte
function melangecartes(cartes) {
    for (i = 0; i < cartes.length - 1; i++) {
        var m1 = Math.floor(Math.random() * (cartes.length));
        var m2 = Math.floor(Math.random() * (cartes.length));
        temp = cartes[m1];
        cartes[m1] = cartes[m2];
        cartes[m2] = temp;
    }
}

//Retourner une carte vers coté recto
function retournerCarteRecto(carte) {
    //Ajouter la classe "flip"
    carte.classList.add("flip");

    //Attendre 200 millisecondes et changer l'image
    setTimeout(function () {

        //Recuperer l'attribut "data-image" de la carte
        let imgCarte = carte.getAttribute('data-image');
        carte.src = imgCarte;
    }, 200);
}

//Retourner une carte vers coté verso
function retournerCarteVerso(carte) {
     //Attendre 2 seconde et retourner la carte
     setTimeout(function () {

        //Retirer la classe "flip"
       carte.classList.remove("flip");

        //Attendre 200 millisecondes et changer l'image
        setTimeout(function () {
           carte.src = "fondcarte.png";
        }, 200);

    }, 1000);
}

//Ajoute l'evenement retourner carte
function ajouterEventCarte(carte) {

    //Lorsque l'on clique sur la carte
    carte.addEventListener("click", function () {
        //Recuperer la cible du clique (la carte)
        var target = event.target;


        //Si elle ne possede pas la classe  "flip"
        if (!target.classList.contains("flip") && cartesRetournees.length < 2) {

            nbClicks++;
            afficherNbClicks();

            cartesRetournees[cartesRetournees.length] = target;

            retournerCarteRecto(target);

        }

        var cartesTemp;

        //Si il y a deux cartes retournées et qu'elles sont differentes 
        if (cartesRetournees.length == 2 && !comparerCartes()) {

            // Pour chaque carte retournée
            for (let i = 0; i < 2; i++) {

                //Copie cartes retournées car il sera vidé avant de retourner les cartes
                cartesTemp = cartesRetournees;

                retournerCarteVerso(cartesTemp[i]);
              
            }

            //Vider les cartes retournées
            cartesRetournees = [];

            //Si les cartes sont identiques
        } else if (cartesRetournees.length == 2) {
            //Vider les cartes retournées
            cartesRetournees = [];
            nbPaireTrouve++;

            //Condition de victoire avec délai pour animer la derniere carte
            setTimeout(function () {
                if (nbPaireTrouve == 8) {
                    alert("bravo ! c'est gagné")
                }
            }, 500);

        }
    })
}

//Comparer l'attribut data-image des cartes retournées
function comparerCartes() {
    return (cartesRetournees[0].getAttribute("data-image") == cartesRetournees[1].getAttribute("data-image"));
}


//Affiche le nombre de clicks
function afficherNbClicks(){
    document.getElementById("nbClicks").innerHTML = nbClicks;
}


//---------------------------------------------------------------------
// Execution du programme
//---------------------------------------------------------------------

var nbClicks = 0; //Nombre de clicks
var nbPaireTrouve = 0; //Nombre de paires trouvées

//Liste des images des cartes
var cartes = ["carte1.png", "carte2.png", "carte3.png", "carte4.png", "carte5.png", "carte6.png", "carte7.png", "carte8.png",
    "carte1.png", "carte2.png", "carte3.png", "carte4.png", "carte5.png", "carte6.png", "carte7.png", "carte8.png"];

console.log(cartes);

//Contient les cartes qui sont retournées
var cartesRetournees = [];

//On mélange les cartes
melangecartes(cartes);
console.log(cartes);

//Cartes de jeu
var listeCartes = document.getElementsByClassName("carte"); //Cartes

//Pour chaque carte 
for (let i = 0; i < listeCartes.length; i++) {

    //Définir la valeur de l'attribut data-image
    listeCartes[i].setAttribute("data-image", cartes[i]);

    //ajouter l'evenement retourner carte
    ajouterEventCarte(listeCartes[i]);
}


//Bouton solution
var solution = document.getElementById("solution");

//Lorsqu'on click sur solution
solution.addEventListener("click", function () {

    //Mettre les paire trouvées à zero
    nbPaireTrouve = 0;

    //Retourner toutes les cartes
    for (let i = 0; i < listeCartes.length; i++) {
        retournerCarteRecto(listeCartes[i]);
    }
});


//Bouton rejouer
var rejouer = document.getElementById("rejouer");

//Lorsqu'on click sur rejouer
rejouer.addEventListener("click", function() {
    //Recharger la page
    location.reload();
});




