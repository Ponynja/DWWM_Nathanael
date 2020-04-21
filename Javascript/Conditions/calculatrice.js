var a = parseFloat(window.prompt("Entrez un premier nombre:"));
var b = parseFloat(window.prompt("Entrez un second nombre:"));
var operateur = window.prompt("Entrez un opérateur(+,-,*,/) :");
var resultat;

switch(operateur){
    case "+": 
        resultat=a+b;
        alert(resultat); break;
    case "-": 
        resultat=a-b;
        alert(resultat); break;
    case "*": 
        resultat=a*b;
        alert(resultat); break;
    case "/":
        if(b!=0){
            resultat=a/b;
            alert(resultat); 
        }else{
            alert("Erreur: Division par zero!");
        }
    break;
    default: alert("Opérateur non supporté!");
}