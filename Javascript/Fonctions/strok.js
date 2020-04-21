function strok(str1, str2, n){
    var tab = str1.split(str2);
    return tab[n];
}

document.write(strok("a;b;c",";",1));