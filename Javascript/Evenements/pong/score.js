//Score des joueurs
var scoreJ1 = 0;
var scoreJ2 = 0;

//Elements d'affichage des scores
var scoreJ1Affichage = document.getElementById("score1");
var scoreJ2Affichage = document.getElementById("score2");


//Affichage des scores
afficherScore(scoreJ1,scoreJ1Affichage,2);
afficherScore(scoreJ2,scoreJ2Affichage,2);


//Ajouter un point au joueur
function marquerPoint(joueur){
    switch(joueur){
        case 1:
            scoreJ1 = parseInt(scoreJ1)+1;
            afficherScore(scoreJ1,scoreJ1Affichage,2);
        break;
        case 2:
            scoreJ2 = parseInt(scoreJ2)+1;
            afficherScore(scoreJ2,scoreJ2Affichage,2);
        break;
    }

    jouerSon("score");
}

//Mettre a jour l'affichage des points du joueur avec 0 initiaux
function afficherScore(scoreJoueur,affichage,format){
    var score = "";
    var scoreLength = scoreJoueur.toString().length;
    if (scoreLength < format){
        for(let i = 0; i < format-scoreLength;i++){
            score+="0";
        }
    }
    score+=scoreJoueur;

    affichage.innerHTML = score;
}

//Retourne le joueur gagnant ou false
function verifVictoire(nb){
    if(scoreJ1 == nb){
        return 1;
    }else if(scoreJ2 == nb){
        return 2;
    }else{
        return false;
    }
}

//Afficher le meesage de victoire
function afficherVictoire(joueur){
    var affichage = document.getElementById("victoire");
    switch(joueur){
        case 1:
            affichage.style.backgroundColor = "rgb(0, 120, 255)";
            affichage.innerHTML = "Victoire du joueur 1!"
            affichage.classList.remove("hidden");
        break;
        case 2:
            affichage.style.backgroundColor = "rgb(255,120,0)";
            affichage.innerHTML = "Victoire du joueur 2!"
            affichage.classList.remove("hidden");
        break;
    }
}