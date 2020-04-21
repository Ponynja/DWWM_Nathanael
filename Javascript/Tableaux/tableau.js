var taille = parseInt(prompt("Taille du tableau"));
var tab = [];
for(var i = 0; i<taille;i++){
    tab[i] = prompt("Valeur "+(i+1)+":");
}

for(var i = 0; i<taille;i++){
    document.write(tab[i]+" ");
}