var audio =[];
audio["rebond"] = [new Audio('boop.wav'),true];
audio["rebond2"] = [new Audio('boop.wav'),true];
audio["score"] = [new Audio('lose.wav'),true];
audio["score2"] = [new Audio('lose.wav'),true];

function jouerSon(nom){
    if(audio[nom][1]){
        audio[nom][0].play();
        audio[nom][1]=false;
    }else{
        audio[nom][1]=true;
        audio[nom+"2"][0].play();
    }
    
}