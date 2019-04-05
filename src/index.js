//const mensajeTextArea= document.getElementById("mensaje1").value;
const espacios= document.getElementById("espacios");
//const btnCifrar= document.getElementById("cifrar");
//const btnDescifrar= document.getElementById("descifrar");
//const containerResultado= document.getElementById("mensaje_nuevo");



document.getElementById("cifrar").addEventListener('click', () =>{
    let mensaje= document.getElementById("mensaje1").value.toUpperCase();
    let offset= parseInt(document.getElementById("espacios").value);
    document.getElementById("mensaje_nuevo").innerHTML = window.cipher.encode(offset, mensaje);
});

document.getElementById("descifrar").addEventListener('click', () =>{
    let mensaje= document.getElementById("mensaje1").value;
    let offset=parseInt(document.getElementById("espacios").value);
    
     document.getElementById("mensaje_nuevo").innerHTML = window.cipher.decode(offset, mensaje);
});

/*let btncifrar= document.getElementById("cifrar")
    cifrar.addEventListener("click", () => {
    let mensaje = document.getElementById("mensaje");
    let espacios= document.getElementById("espacios");
    let = document.getElementById("mensajeNuevo");
    if(mensajeNuevo !=""){
        let mensajeNuevo= cipher.encode
    }
console.log("funciona")
    })


let descifrar=document.getElementById("descifrar")
descifrar.addEventListener("click", () => {
    let mensaje = document.getElementById("mensaje");
    let espacios= document.getElementById("espacios");
    let mensajeNuevo= document.getElementById("mensajeNuevo");
    if(mensajeNuevo !=""){
        let linkear = cipher.decode
    } 
    console.log("ayuda")
})




/*let mensaje= document.getElementsByTagName('imput')[0]
let espacios = document.getElementByName('input')[1]

document.getElementById("cifrar").addEventListener("click", () => {
}
document.getElementById("descifrar").addEventListener("click", () => {
})*/


/*function mensaje(){

}//addEventListener escucha y  hace que funcione los mandatos de  DOMContentLoaded o de las funciones en general
document.addEventListener("DOMContentLoaded", mensaje, false);*/

/*let mensaje=document.getElementById("mensaje").Value
let offset= document.getElementById("offset").value
let mensajeNuevo= document.getElementById("mensajeNuevo").value
const cifrar= document.getElementById("cifrar")
cifrar.addEventListener("click", () => {
})*/
