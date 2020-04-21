var tab = [52,789,7,45,654,78,124,45,725];
var j = 1;
var n = tab.length;

while(j < n){
    var i = j-1; 
    var tmp = tab[j];
    while(i > -1 && tab[i]<tmp){
        tab[i+1]=tab[i];
        i--;
    }
    tab[i+1] = tmp;
    j++;
}
console.log(tab);