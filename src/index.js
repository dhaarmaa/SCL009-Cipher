//addEventListeneer() es un escuchardor y funciona a la vez
//()=> funcion arrow
document.getElementById("cifrar").addEventListener('click', () =>{
    let mensaje= document.getElementById("mensaje1").value;
    let offset= parseInt(document.getElementById("espacios").value);
    document.getElementById("mensaje_nuevo").innerHTML = window.cipher.encode(offset, mensaje);
});

document.getElementById("descifrar").addEventListener('click', () =>{
    let mensaje= document.getElementById("mensaje1").value;
    let offset=parseInt(document.getElementById("espacios").value);
    
     document.getElementById("mensaje_nuevo").innerHTML = window.cipher.decode(offset, mensaje);
});

