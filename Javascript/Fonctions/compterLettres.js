function compterLettres(lettre, phrase){
    var nb=0;
    for(var i = 0; i < phrase.length;i++){
        console.log(phrase.substr(i));
        if(phrase.substr(i,1) == lettre){
            nb++;
        }
    }
    
    return nb;
}

document.write(compterLettres('a',"banane"));

document.write(compterLettres('r',"ratelier"));