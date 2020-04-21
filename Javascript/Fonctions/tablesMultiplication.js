function tableMult(nb){
    document.write("Table de "+nb+":</br>");
    for(var i = 1; i <= 10; i++){
        document.write(i+" x "+nb+" = "+(i*nb)+"</br>");
    }
}

tableMult(5);