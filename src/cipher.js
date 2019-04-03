window.cipher = {
  encode: (mensaje, offset) => {
    let msnCifrado= nuevaLetra;
    for(let i=0; i<=mensaje.legnth; i++){
    let numeroAscii=mensaje.charCodeAt(0);
    if(numeroAscii >=65 && numeroAscii<=90){
    let formula= (numeroAscii-65+parseInt(offset))&26+65;
    let nuevaLetra= string.fromCharCode(formula);
    console.log(msnCifrado)
    }
    }



/*for (let i = 0; i < mensaje.length; i++) {
  let letraAscii = mensaje[i].charCodeAt(0);
  console.log(letraAscii)
  if (letraAscii >= 65 && letraAscii <= 90){
    let nuevaLetraAscii= (letraAscii-65+offset)%26+65;
    let nuevaLetra = nuevaLetraAscii.String.fromCharCode(nuevaLetraAscii);
  }
  console.log(nuevaLetra)
}*/
}


  decode: () => {
    let msnCifrado= nuevaLetra;
    for(let i=0; i<=mensaje.legnth; i++){
    let numeroAscii=mensaje.charCodeAt(0);
    if(numeroAscii >=65 && numeroAscii<=90){
    let formula= (numeroAscii+ 65-parseInt(offset))&26+65;
    let nuevaLetra= string.fromCharCode(formula);
    console.log(msnCifrado)
  }
};

//FORMULA: (x+n)%26
//de letra a ascii charCodeAt
//de ascii a letra fromChardCode
//iteración (i)es ir de uno en uno
// 65 a 90 mayúsculas
//ciclo es...(de letra a ascii)-(ascii a formula)-(nuevo ascii a letra)
