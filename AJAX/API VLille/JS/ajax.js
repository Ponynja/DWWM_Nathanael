// Utilisation de l'Ajax pour appeler l'API et récuperer les enregistrements
var contenu = document.getElementById("pageContent");
var enregs; // contient la reponse de l'API
// on définit une requete
const req = new XMLHttpRequest();
//on vérifie les changements d'états de la requête
req.onreadystatechange = function(event) {
    if (this.readyState === XMLHttpRequest.DONE) {
        if (this.status === 200) {
            // la requete a abouti et a fournit une reponse
            //on décode la réponse, pour obtenir un objet
            reponse = JSON.parse(this.responseText);
            // console.log(this.responseText);
            // console.log(reponse);
            enregs = reponse.records;
            for (let i = 0; i < enregs.length; i++) {
                // on crée les elements html

                station = document.createElement("div");
                station.classList.add("station");

                localisation = enregs[i].fields.localisation;
                station.setAttribute("data-latitude", localisation[0]);
                station.setAttribute("data-longitude", localisation[1]);

                entete = document.createElement("section");
                entete.classList.add("entete");

                nom = document.createElement("h2");
                nom.classList.add("nom");
                nom.innerHTML = enregs[i].fields.nom;

                adresse = document.createElement("p");
                adresse.classList.add("adresse");
                adresse.innerHTML = enregs[i].fields.adresse + " </br> " + enregs[i].fields.commune;

                entete.appendChild(nom);
                entete.appendChild(adresse);

                corps = document.createElement("section");
                corps.classList.add("corps");

                dispo = document.createElement("div");
                dispo.classList.add("dispo");

                velos = document.createElement("div");
                velos.classList.add("velos");

                label = document.createElement("p");
                label.classList.add("label");
                label.innerHTML = "Vélos Dispo"

                num = document.createElement("p");
                num.classList.add("num");
                num.innerHTML = enregs[i].fields.nbvelosdispo;

                velos.appendChild(label);
                velos.appendChild(num);

                places = document.createElement("div");
                places.classList.add("places");

                label = document.createElement("p");
                label.classList.add("label");
                label.innerHTML = "Places Dispo"

                num = document.createElement("p");
                num.classList.add("num");
                num.innerHTML = enregs[i].fields.nbplacesdispo;

                places.appendChild(label);
                places.appendChild(num);

                dispo.appendChild(velos);
                dispo.appendChild(places);

                corps.appendChild(dispo);

                pied = document.createElement("section");
                pied.classList.add("pied");

                etat = document.createElement("p");
                etat.classList.add("etat");
                etat.innerHTML = enregs[i].fields.etat;

                pied.appendChild(etat);

                station.appendChild(entete);
                station.appendChild(corps);
                station.appendChild(pied);

                contenu.appendChild(station);

            }

            var stations = document.getElementsByClassName("station");

            for (let i = 0; i < stations.length; i++) {
                stations[i].getElementsByClassName("adresse")[0].addEventListener("click", function() {
                    latLongGoogleMaps(stations[i]);
                });
            }

            //console.log("Réponse reçue: %s", this.responseText);
        } else {
            //console.log("Status de la réponse: %d (%s)", this.status, this.statusText);
        }
    }
};

//on envoi la requête
req.open('GET', 'https://opendata.lillemetropole.fr/api/records/1.0/search/?dataset=vlille-realtime&facet=libelle&facet=nom&facet=commune&facet=etat&facet=type&facet=etatconnexion&rows=300', true);
req.send(null);