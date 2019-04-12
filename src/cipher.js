window.cipher = {
  encode: (offset, mensaje) => {
    let mnsCifrado = "";
    for(let i=0; i< mensaje.length; i++){
      //en este paso transformamos las letras a numero de codigo ASCII
    let numeroAscii= mensaje.charCodeAt(i);
    //ponemos una condición para letras mayúsculas
    if(numeroAscii >=65 && numeroAscii<=90){
      //aquí agregamos el desplazamiento del offset para codificar
    let formula = (numeroAscii-65+ offset)%26+65;
    mnsCifrado = mnsCifrado + String.fromCharCode(formula);//msnCifrado= aqui va todas mis nuevas letras juntas(concatenadas)
    }
    //minusculas
    else if(numeroAscii >=97 && numeroAscii<=122){
      let formula = (numeroAscii-97+ offset)%26+97;
      mnsCifrado = mnsCifrado + String.fromCharCode(formula);
    }//números
    else if(numeroAscii >=48 && numeroAscii<=57){
      let formula = (numeroAscii-48+ offset)%26+48;
      mnsCifrado = mnsCifrado + String.fromCharCode(formula);
    }
    else{
      mnsCifrado += mensaje[i];
    }
    }
return mnsCifrado;
  },

  decode: (offset, mensaje) => {
    let mnsCifrado ="";
    for(let i=0; i<mensaje.length; i++){
      //transforma letra en código ascii
    let numeroAscii=mensaje.charCodeAt(i);
    //doy condiciones
    if(numeroAscii >=65 && numeroAscii<=90){
      //aplico la formula 
    let formula= (numeroAscii - 90 - offset)%26+90;
    //console.log(formula);
    //transformamos los numeros ascii en las nuevas letras con sus posiciones ya cambiadas
     let nuevaLetra= String.fromCharCode(formula);
     mnsCifrado += nuevaLetra;
    
  }
  else if(numeroAscii >=97 && numeroAscii <=122){
    let formula= (numeroAscii - 122 - offset)%26+122;
     let nuevaLetra= String.fromCharCode(formula);
     mnsCifrado += nuevaLetra;
  }
  else if(numeroAscii >=48  && numeroAscii<=57){
    let formula= (numeroAscii - 57 - offset)%26+57;
     let nuevaLetra= String.fromCharCode(formula);
     mnsCifrado += nuevaLetra;
  }
  else{
    mnsCifrado += mensaje[i];
  }
    }
    return mnsCifrado;
  }
};
//codigo ascii 32 = espacio ( Espacio en blanco )