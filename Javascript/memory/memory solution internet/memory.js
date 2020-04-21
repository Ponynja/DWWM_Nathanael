//DECLARER TOUTES LES VARIABLES*******************************
var motifsCartes=[1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
//Le codage utilisé :
    //0:face caché
    //1:face visible
    //-1:enlevé

//Au depart toutes les cartes sont présentées de dos
var etatsCartes=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
//Tableau contenant les numéros des cartes retournées à un moment donné du jeu 
var cartesRetournees=[];
//Cette variable contient le nombre de paires de cartes qui ont déjà été trouvées
var nbPairesTrouvees=0;
//Le tableau imgCarte contient les objets des éléments img de l'interface utilisateur
var imgCartes=document.getElementById("tapis").getElementsByTagName("img");        
//On parcourt le tableau des objets des éléments img, chacun d'eux reçoit une fonction déclenchée par l'événement onclick.
//La fonction ainsi définie est exécutée à chaque fois que l'utilisateur clique sur l'image son rôle est d'appeller controleJeu avec le numéro de l'image cliquée.
for(var i=0;i<imgCartes.length;i++){
    imgCartes[i].noCarte=i; //Ajout de la propriété noCarte à l'objet img
    imgCartes[i].onclick=function(){
        controleJeu(this.noCarte);
    }                      
}
//Appel de la fonction initialiseJeu pour mélanger les cartes.
initialiseJeu();
/*La fonction majAffichage met à jour l'affichage de la carte dont on passe le numéro en paramètre.
L'affichage rendu dépend de l'état actuel de la carte (donné par le tableau etatsCartes) :
état 0 : carte face cachée, on affichage l'image de dos de carte 
état 1 : carte retournée, on affiche l'image du motif correspondant, on notera que les différentes images des motifs sont dans les fichiers nommés carte1.png, carte2.png, etc.,
état -1 : carte enlevée du jeu, on cache l'élément img.*/
function majAffichage(noCarte){
    switch(etatsCartes[noCarte]){
        case 0:
            imgCartes[noCarte].src="fondcarte.png";
            break;
        case 1:
            imgCartes[noCarte].src="carte"+motifsCartes[noCarte]+".png";
            break;
        case -1:
            imgCartes[noCarte].style.visibility="hidden";
            break;
    }
}
//La fonction rejouer affiche un message et permet de jouer à nouveau en rechargeant la page dans le navigateur
function rejouer(){
    alert("Bravo !");
    location.reload();
}
/*La fonction initialiseJeu mélange les numéros de motif des cartes.
Pour cela un algorithme de mélange est utilisé : [explications de l'algorithme](/programmation-en-javascript/melanger-les-elements-d-un-tableau/6)*/
function initialiseJeu(){
    for(var position=motifsCartes.length-1; position>=1; position--){
        var hasard=Math.floor(Math.random()*(position+1));
        var sauve=motifsCartes[position];
        motifsCartes[position]=motifsCartes[hasard];
        motifsCartes[hasard]=sauve;
    }
}

//C'est la fonction controleJeu qui contient le coeur du programme : elle est appelée chaque fois que l'utilisateur clique sur une carte en passant en paramètre le numéro de la carte cliquée.
function controleJeu(noCarte){
    //pour ne pas retourner plus de 2 cartes:
    if(cartesRetournees.length<2){
         /*Si la carte cliquée est de dos (état 0) :
        on fait passer son état à 1,
        on ajoute son numéro au tableau des cartes retournées,
        on fait la mise à jour de son affichage.
        On notera que rien n'est fait pour les états 1 et -1 : cliquer sur une carte déjà retournée ne change rien et cliquer sur une zone de carte enlevée non plus.*/
        if(etatsCartes[noCarte]==0){
            etatsCartes[noCarte]=1;
            cartesRetournees.push(noCarte);
            majAffichage(noCarte);
        }
        /*Si on se retrouve avec deux cartes retournées, il faut déterminer si elles ont le même motif :
        si oui : les deux cartes prennent le nouvel état -1 (c'est à dire qu'il faut les enlever) et on incrémente la variable qui compte le nombre de paires trouvées (nbPairesTrouvees),
        si non : les deux cartes prennent le nouvel état 0 (c'est à dire qu'on les remet de dos).*/
        if(cartesRetournees.length==2){
            var nouveauEtat=0;
            if(motifsCartes[cartesRetournees[0]]==motifsCartes[cartesRetournees[1]]){
                nouveauEtat=-1;
                nbPairesTrouvees++;
            }

            etatsCartes[cartesRetournees[0]]=nouveauEtat;
            etatsCartes[cartesRetournees[1]]=nouveauEtat;
            /*Afin que le joueur ait le temps de voir ce qu'il se passe, on différe la mise à jour de l'affichage des cartes de 750 ms.
            Enfin au cas où toutes les paires ont été trouvées, on appelle la fonction rejouer*/
            setTimeout(function(){
                majAffichage(cartesRetournees[0]);
                majAffichage(cartesRetournees[1]);
                cartesRetournees=[];
                if(nbPairesTrouvees==10){
                    rejouer();
                }
            },1500);
        }
    }
}