var nb = parseInt(prompt("Entrez un entier:"));

var premier = true;

for(var i = 2; i < nb; i++){
    if(nb%i==0){
        premier = false;
    }
}

if(premier){
    console.log(nb+" est premier.");
}else{
    console.log(nb+" n'est pas premier.");
}