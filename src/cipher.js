window.cipher = {
  encode: (mensaje, offset) => {
    let msnCifrado = "";
    for(let i=0; i<=mensaje.length; i++){
    let numeroAscii=mensaje[i].charCodeAt(0);
    if(numeroAscii >=65 && numeroAscii<=90){
    let formula= (numeroAscii-65+parseInt(offset))&26+65;
    mnsCifrado =msnCifrado + String.fromCharCode(formula);
    //msnCifrado= aqui va todas mis nuevas letras juntas(concatenadas)
    //.concat o += o =+ 
    //console.log(mnsCifrado)
    }
    }
return msnCifrado
  }

  }
//var uevo text
/*for (let i = 0; i < mensaje.length; i++) {
  let letraAscii = mensaje[i].charCodeAt(0);
  console.log(letraAscii)
  if (letraAscii >= 65 && letraAscii <= 90){
    let nuevaLetraAscii= (letraAscii-65+offset)%26+65;
    let nuevaLetra = nuevaLetraAscii.String.fromCharCode(nuevaLetraAscii);
  }
  console.log(nuevaLetra)
}*/



  decode: () => {
    let msnDescifrado ="";
    for(let i=0; i<=mensaje.length; i++){
    let numeroAscii=mensaje.charCodeAt(0);
    if(numeroAscii >=65 && numeroAscii<=90){
    let formula= (numeroAscii+ 65-parseInt(offset))&26+65;
    let msnDescifrado= msnDescifrado + string.fromCharCode(formula);
   // console.log(hola)
  }
    }
  }