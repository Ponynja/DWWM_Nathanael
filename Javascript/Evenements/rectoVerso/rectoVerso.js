var carte = document.getElementById("carte");
var isAnim = false;

carte.addEventListener("click",function(){

    var target = event.target;
    if(!isAnim){
        isAnim = true;
        if(target.classList.contains("flip")){
            target.classList.remove("flip");
        }else{
            target.classList.add("flip");
        }

        setTimeout(function(){
            isAnim = false;
        }, 500);

        setTimeout(function(){
            let srcSplit = target.src.split('/');
            let src = srcSplit[srcSplit.length - 1];
            switch(src){
                case "recto.png": target.src = "verso.png";break;
                case "verso.png": target.src = "recto.png";break;
            }
        }, 200);

    }
    
    
})

