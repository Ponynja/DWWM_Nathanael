var somme = 0;

var i = -1;
do{
    nb=parseInt(prompt("Entrez un entier (0=fin):")) ;
    somme+=nb;
    i++;
}while(nb != 0);

console.log("Somme: "+somme);
console.log("Moyenne: "+(somme/i));
            
