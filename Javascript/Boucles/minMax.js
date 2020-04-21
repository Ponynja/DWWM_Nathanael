var somme = 0;
var min;
var max;
var i = -1;
do{
    var nb=parseInt(prompt("Entrez un entier (0=fin):")) ;
    somme+=nb;
    if(i==-1 && nb != 0){
        min = nb;
        max = nb;
    }else{
        if(nb > max){
            max = nb;
        }
        if(nb < min){
            min = nb;
        }
    }
    
    
    i++;
}while(nb != 0);

console.log("Somme: "+somme);
console.log("Moyenne: "+(somme/i));

console.log("Min: "+min);

console.log("Max: "+max);


            
