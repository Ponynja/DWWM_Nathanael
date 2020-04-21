var plateau = plateau = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

//Initiaisation du plateau de jeu
function init() {

    //Lettres de l'alphabet pour l'affichage des colonnes
    var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

    //Pour chaque ligne
    for (let i = 0; i <= 10; i++) {

        //Créer une ligne
        var ligne = document.createElement("div");
        ligne.classList.add("ligne");

        //Pour chaque colonne
        for (let j = 0; j <= 10; j++) {

            //Créer une case
            var casePlateau = document.createElement("div");
            casePlateau.classList.add("case");
            casePlateau.innerHTML = " ";

            //Style et affichage des entetes de lignes et colonnes
            if (i == 0) {
                casePlateau.style.backgroundColor = "grey";
                if (j > 0) {
                    casePlateau.innerHTML = alphabet[j - 1];
                }
            } else if (j == 0) {
                casePlateau.style.backgroundColor = "grey";
                if (i > 0) {
                    casePlateau.innerHTML = i;
                }
            }

            //Ajout de la case à la ligne
            ligne.append(casePlateau);
        }
        //Ajout de la ligne au plateau
        document.getElementsByClassName("plateau")[0].append(ligne);
    }
}

//Mettre les valeurs d'un tableau dans le plateau de jeu
function afficherTableau(tab) {

    var lignes = document.getElementsByClassName("ligne");

    //Pour chaque ligne
    for (let i = 0; i < 10; i++) {

        //Récupérer la ligne
        var ligne = lignes[i + 1];
        //Récupérer les cases de la ligne
        var casesLigne = ligne.getElementsByClassName("case");

        //Pour chaque colonne
        for (let j = 0; j < 10; j++) {

            //Récupérer la case
            var caseLigne = casesLigne[j + 1];

            //Mettre la valeur dans la case
            caseLigne.innerHTML = plateau[i][j];
            if(plateau[i][j] == 0){
                caseLigne.style.backgroundColor = "skyblue";
            }else{
                caseLigne.style.backgroundColor = "green";
            }

        }
    }
}

// Trouver les espaces vides de nbCases dans le plateau, retourner aléatoirement la première case d'un des espaces trouvé et les directions libres
// Ex de valeur de retour [1,2,false,true] => Case [1,2], espace disponible à la verticale mais pas à l'horizontale
function trouverPlace(plateau, nbCases) {

    var casesDepartValides = [];

    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {

            var caseDepart = plateau[i][j];

            if (caseDepart == 0) {

                let iHor = 0;
                let iVert = 0;

                if (i + nbCases < 10) {

                    while (iHor < nbCases && plateau[i + iHor][j] == 0) {
                        iHor++;
                    }


                }

                if (j + nbCases < 10) {
                    while (iVert < nbCases && plateau[i][j + iVert] == 0) {
                        iVert++;
                    }
                }


                if (iVert == nbCases || iHor == nbCases) {

                    casesDepartValides[casesDepartValides.length] = [i, j, (iHor == nbCases), (iVert == nbCases)];

                }

            }

        }
    }

    return casesDepartValides[Math.floor(Math.random() * casesDepartValides.length)];

}

//Placement d'un bateau
function placerBateau(numBateau, nbCases) {

    var casePlacement = trouverPlace(plateau, nbCases);

    let hor = casePlacement[2];
    let vert = casePlacement[3];

    let both = (hor && vert);
    

    if(both){
        let pick =  Math.floor(Math.random() * (4 - 2) + 2);
        switch(pick){
            case 1:hor=true;
            case 2:vert=true;
        }
    }

    if (hor) {

        for (let i = casePlacement[0]; i < casePlacement[0] + nbCases; i++) {
            plateau[i][casePlacement[1]] = numBateau;
        }

    } else {
        for (let j = casePlacement[1]; j < casePlacement[1] + nbCases; j++) {
            plateau[casePlacement[0]][j] = numBateau;
        }
    }

}

init();

placerBateau(1, 5);
placerBateau(2, 4);
placerBateau(3, 3);
placerBateau(4, 3);
placerBateau(5, 2);

afficherTableau(plateau);
