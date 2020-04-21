//Déplacement du carré en fontion de la touche appuyée
function deplacerFleches(){
    var key = event.keyCode;
    switch(key){
        case 38: 
            if(deplacementPossible(carre,0,-vitesse)){
                deplacer(carre,0,-vitesse)
            }; break;
        case 40: 
            if(deplacementPossible(carre,0,vitesse)){
                deplacer(carre,0,vitesse)
            }; break;
        case 39: 
            if(deplacementPossible(carre,vitesse,0)){
                deplacer(carre,vitesse,0)
            }; break;
        case 37: 
            if(deplacementPossible(carre,-vitesse,0)){
                deplacer(carre, 0-vitesse,0)
            }; break;
        default: break;
    }
}



//Ajout d'event de détection de touches appuyées
document.addEventListener("keydown",deplacerFleches);
