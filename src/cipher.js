window.cipher = {
  encode: (offset, mensaje) => {
    let mnsCifrado = "";
    for(let i=0; i< mensaje.length; i++){
      //en este paso transformamos las letras a numero de codigo ASCII
    let numeroAscii= mensaje.charCodeAt(i);
    //console.log(numeroAscii);
    //ponemos una condición para letras mayúsculas
    if(numeroAscii >=65 && numeroAscii<=90){
      //aquí agregamos el desplazamiento del offset para codificar
    let formula = (numeroAscii-65+ offset)%26+65;
    //console.log(formula);
    mnsCifrado = mnsCifrado + String.fromCharCode(formula);
    //console.log(mnsCifrado);
    //msnCifrado= aqui va todas mis nuevas letras juntas(concatenadas)
    //.concat o += o =+ 
    //console.log(mnsCifrado)
    }//si o si ..desoues de un if debe ir un else .. else if es para mas condiciones
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
    //console.log(funciona)
    if(numeroAscii >=65 && numeroAscii<=90){
      //aplico la formula 
    let formula= (numeroAscii + 65 - offset)%26+65;
    //console.log(formula);
    //transformamos los numeros ascii en las nuevas letras con sus posiciones ya cambiadas
     let nuevaLetra= String.fromCharCode(formula);
     mnsCifrado += nuevaLetra;
    // msnDescifrado = msnDescifrado = String.fromCharCode(formula);
   // console.log(hola)
  }
  else{
    mnsCifrado += mensaje[i];
  }
    }
    return mnsCifrado;
  }
};
//codigo ascii 32 = espacio ( Espacio en blanco )