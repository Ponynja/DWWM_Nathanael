function hrmnToMin(hrmn){var r;
        hrmn.replace(/(\d\d):(\d\d)/,function(all,h,m){r=+parseInt(m,10)+60*parseInt(h,10)});
        return r;
    }
    alert('08:37 '+hrmnToMin('08:37'));
    alert('12:15 '+hrmnToMin('12:15'));
     
    // Convertir des minutes en chaînes heures et minutes avec zéro de complétion
    function minToHrMn(min){
         var m=min%60,h=(min-m)/60;
         return (h<10?'0'+h:h)+':'+(m<10?'0'+m:m);
    }
     
    alert(minToHrMn(hrmnToMin('12:15')-hrmnToMin('08:37')));