//Recupération des desserts dans la liste
var desserts = document.getElementById("desserts").getElementsByTagName("li");

//Fonction qui ajoute un event qui supprime l'objet cliqué
function addEventSupprimer(obj){
    obj.addEventListener("click",function(){
        event.target.remove();
    });
}

//Ajout de l'evenement de suppression à tous les desserts
for(let i = 0; i < desserts.length; i++){
    addEventSupprimer(desserts[i]);
}

//Ajout d'un event "click" sur le bouton d'ajout
document.getElementById("ajoutDessert").addEventListener("click", function(){

    //Demande un dessert à l'utilisateur
    var dessert = window.prompt("Entrez un dessert:");

    //Créé un élement de liste
    var li = document.createElement("li");
    li.innerHTML = dessert;

    //Ajout de l'élément à la liste
    li = document.getElementById("desserts").appendChild(li);

    //Ajout de l'evenement de suppression
    addEventSupprimer(li);
})