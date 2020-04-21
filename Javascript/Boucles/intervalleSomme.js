var n1 = parseInt(prompt("Entrez un entier:"));
var n2 = parseInt(prompt("Entrez un entier:"));
var somme = 0;

for(var i = n1; i < n2; i++){
    somme+= i;
}

console.log(somme);