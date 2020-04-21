var tab = [52,789,7,45,654,78,124,45,725];

var permut = true;

while(permut){
    permut = false;
    for(var i = 0; i<tab.length-1;i++){
        if(tab[i]>tab[i+1]){
            var tmp = tab[i];
            tab[i] = tab[i+1];
            tab[i+1]=tmp;
            permut = true;
        }
    }
}

console.log(tab);