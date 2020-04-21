//Tableau de prenoms
var tab = ["Pierre", "Paul", "Jacques"];

//Prenom à supprimer
var prenom = prompt("Entrez le prenom à supprimer:");

//Position du prenom dans le tableau
var pos = tab.indexOf(prenom);

//Si position != -1 (prenom trouvé dans le tableau)
if (pos != -1) {
    
    //Retirer le prenom
    tab.splice(pos, 1);
}

//Afficher tableau
console.log(tab);
