/*const text-area = document.getElementById(".text-area");
contenido.innerHTML = "Hola";*/

const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

//console.table(matrizCodigo);

//var letrae = "enter";
//var letrai = "imes";
//var letraa = "ai";
//var letrao = "ober";
//var letrau = "ufat";

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    munheco.style.display = "none";
    titulomensaje.style.display = "none";
    parrafo.style.display = "none";
}

function encriptar(stringEncriptada){
    let matrizCodigo = [["e","enter"],["i","imes"], ["a","ai"], ["o","ober"],["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;

}

function btnDesencriptar(){
    var textoEncriptado = desencriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
}

function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e","enter"],["i","imes"], ["a","ai"], ["o","ober"],["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencriptada;

}


function btnCopiar(){
    const textoPegado = copiar(textArea.value);
    mensaje.value = textoPegado;
}


function copiar(mensajeCopiado) {
    let contenido = document.querySelector(".mensaje");
    contenido.select();
    document.execCommand("copy");
    console.log("copiado el texto encriptado");
    return mensajeCopiado;
}


/*function btnBorrar(){

}

function reinicar(){

}*/