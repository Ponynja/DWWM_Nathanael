var carte = document.getElementById("carte"); //Carte
var isAnim = false; //Vrai si l'animation est en train d'être jouée

//Lorsque l'on clique sur la carte
carte.addEventListener("click",function(){

    //Recuperer la cible du clique (la carte)
    var target = event.target;

    //Si elle n'est pas en train d'être retournée
    if(!isAnim){

        //Si elle possede la classe  "flip"
        if(target.classList.contains("flip")){
            //Retirer la classe flip
            target.classList.remove("flip");
        }else{
            //Ajouter la classe flip
            target.classList.add("flip");
        }

        //L'animation est en cours
        isAnim = true;

        //Attendre 1/2 seconde
        setTimeout(function(){
            //L'animation est terminée
            isAnim = false;
        }, 500);

        //Attendre 200 millisecondes
        setTimeout(function(){

            //Changer la source
            let srcSplit = target.src.split('/');
            let src = srcSplit[srcSplit.length - 1];
            switch(src){
                case "recto.png": target.src = "verso.png";break;
                case "verso.png": target.src = "recto.png";break;
            }
        }, 200);

    }
    
    
})

