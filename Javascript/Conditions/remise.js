var pu = parseFloat(prompt("Prix Unitaire:"));
var qtcom = parseInt(prompt("Quantité:"));
var tot = 0;
var port = 0;
var rem = 0;

for(var i = 0; i<qtcom; i++){
    tot+=pu;
}

if(tot < 500){
    port = (tot/100)*2;
    if(port < 6){
        port = 6;
    }
}

if(tot > 100 && tot <200){
    rem = (tot/100)*5;
}else if(tot >=200){
    rem =(tot/100)*10;
}

var pap = tot - rem + port;

alert("Prix à payer: " + pap + " (Total: "+tot+", Remise: "+rem+", FDP: "+port+")");
