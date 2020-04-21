//Afficher/Cacher le panneau de controle
document.getElementById("controlesTitle").addEventListener("click",function(){
    let panneau = document.getElementById("controles");
    if(panneau.classList.contains("hidden")){
        panneau.classList.remove("hidden");
    }else{
        panneau.classList.add("hidden");
    }
})

//Boutons de controle
var haut = document.getElementById("haut");
var bas = document.getElementById("bas");
var droite = document.getElementById("droite");
var gauche = document.getElementById("gauche");
//Fonction d'ajout d'event de déplacement
function addControlesListener(button,carre,x,y){
    button.addEventListener("click",function(){

        if(deplacementPossible(carre,x,y)){
            deplacer(carre,x,y);
        }
        
    })
}

//Ajout d'event de déplacement sur les boutons
addControlesListener(haut,carre,0,-vitesse);
addControlesListener(bas,carre,0,vitesse);
addControlesListener(gauche,carre,-vitesse,0);
addControlesListener(droite,carre,vitesse,0);