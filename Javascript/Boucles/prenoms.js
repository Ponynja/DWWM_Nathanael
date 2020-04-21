var prenom = "";
var nb = -1;
do{
    console.log(prenom);
    prenom = prompt("Entrez un prenom:");
    nb++;
}while(prenom != "");

console.log("Vous avez entré "+nb+" prenoms.");