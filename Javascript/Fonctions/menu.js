function multiples() {
    var nb = parseInt(prompt("Entrez un entier:"))
    document.write("Table de " + nb + ":</br>");
    for (var i = 1; i <= 10; i++) {
        document.write(i + " x " + nb + " = " + (i * nb) + "</br>");
    }
}

function sommeEtMoyenne() {
    var somme = 0;

    var i = -1;
    do {
        nb = parseInt(prompt("Entrez un entier (0=fin):"));
        somme += nb;
        i++;
    } while (nb != 0);

    document.write("Somme: " + somme + "</br>");
    document.write("Moyenne: " + (somme / i) + "</br>");

}

function nbCaracteres(lettres, phrase) {
    var nb = 0;
    var i = 0;

    do {
        for (var j = 0; j < phrase.length; j++) {
            if (phrase[j] == lettres[i]) {
                nb++;
            }
        }
        
        i++;
    }
    while (i < lettres.length);
    return nb;
}

function nbCaractere() {
    var phrase = prompt("Entrez une phrase:");
    var car = prompt("Entrez le caractère à chercher:");
    var nbCar = nbCaracteres([car], phrase);
    document.write("Il y a " + nbCar + " fois le caractère " + car + " dans la phrase: " + phrase);
}

function nbVoyelles() {
    var phrase = prompt("Entrez une phrase:");
    var nbCar = nbCaracteres(['a', 'e', 'i', 'o', 'u', 'y'], phrase);
    document.write("Il y a " + nbCar + " voyelles dans la phrase: " + phrase);
}

document.write("1 - Multiples </br>");
document.write("2 - Somme et moyenne </br>");
document.write("3 - Recherche du nombre de voyelles </br>");
document.write("4 - Recherche du nombre de caractères suivants </br>");

setTimeout(function () {

    var option = parseInt(prompt("Choisissez votre option:"));

    switch (option) {
        case 1:
            multiples();
            break;

        case 2:
            sommeEtMoyenne();
            break;

        case 3:
            nbVoyelles();
            break;

        case 4:
            nbCaractere();
            break;

        default:
            break;
    }

}, 1000);
