function getInteger(message){
    return parseInt(prompt(message));
}

function initTab(){
    var taille = parseInt(getInteger("Taille du tableau:"));
    return new Array(taille);
}

function saisieTab(tab){
    for(var i = 0; i < tab.length; i++){
        tab[i] = getInteger("Valeur n°"+(i+1)+":");
    }
    return tab;
}

function afficheTab(tab){
    for(var i = 0; i < tab.length; i++){
        document.write(tab[i]+" ");
    }
    document.write("</br>");
}

function rechercheTab(tab, i){
    document.write("La position "+i+" contient la valeur: "+tab[i]+"</br>");
}

function maxTab(tab){
    var max = tab[0];
    for(var i = 0; i < tab.length; i++){
        if(tab[i]> max){
            max = tab[i];
        }
    }
    return max;
}

function moyenneTab(tab){
    var somme = 0;
    for(var i = 0; i < tab.length; i++){
        somme+=tab[i];
    }
    return (somme/tab.length);
}

function infoTab(tab){
    document.write("Max: "+maxTab(tab)+"</br>");
    document.write("Moyenne: "+moyenneTab(tab)+"</br>");
}

var tab = initTab();
tab = saisieTab(tab);
afficheTab(tab);
rechercheTab(tab, getInteger("Index à chercher:"));
infoTab(tab);