var visites = readCookie("visites");

if(visites == null){
    visites = 1;
}else{
    visites++;
}

createCookie("visites",visites,1);
document.getElementById("compteurVisites").innerHTML = visites;

document.getElementById("reset").addEventListener("click",function(){
    createCookie("visites",0,1);
    document.getElementById("compteurVisites").innerHTML = 0;
})