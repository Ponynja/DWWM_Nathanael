//Déclaration des HH:MM:SS en chaine de caractères
var h1 = "20:14:52";
var h2 = "05:48:12";

//Separation des chaines de caractères
var h1split = h1.split(':');
var h2split = h2.split(':');

//Calcul de h1+h2: total de chaque unité (heure, min, sec)
var totalSec = parseInt(h1split[2]) + parseInt(h2split[2]); //Ajout des sec de h1 aux sec de h2
var totalMin = parseInt(h1split[1]) + parseInt(h2split[1]); //Ajout des min de h1 aux min de h2
var totalHeure = parseInt(h1split[0]) + parseInt(h2split[0]); //Ajout des heures de h1 aux heures de h2

//Conversion des totaux par modulo (60sec -> 1min, 60min -> 1h, 24h->1j)
var resultatSec = totalSec%60;
var resultatMin = Math.floor(totalSec/60) + (totalMin%60);
var resultatHeure = Math.floor(resultatMin/60) + (totalHeure%24);

//Tableau contenant le resultat [HH,MM,SS]
var resultat = [resultatHeure,resultatMin,resultatSec];

//Ajout des zéros initiaux si un seul chiffre (Ex: [5,10,6] => [05,10,06])
for(var i = 0;i< resultat.length;i++){
    if(resultat[i].toString().length < 2){
        resultat[i] = "0"+resultat[i];
    }
}

//Jointure des unités sous la forme HH:MM:SS
resultat = resultat.join(':');

//Affichage du résultat
document.write(resultat);


