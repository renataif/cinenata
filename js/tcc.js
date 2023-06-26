function mascara(i,j){
   
    var v = i.value;
    
    if(isNaN(v[v.length-1])){ // impede entrar outro caractere que não seja número
       i.value = v.substring(0, v.length-1);
       return;
    }
    
    if(j=='cpf'){
        i.setAttribute("maxlength", "14");
        if (v.length == 3 || v.length == 7) i.value += ".";
        if (v.length == 11) i.value += "-";
    } else{ 
        i.setAttribute("maxlength", "14");
        if(v.length == 1) i.value = "(" + i.value;
        if (v.length == 3) i.value += ") ";
        if (v.length == 10) i.value += "-";
    }
}

