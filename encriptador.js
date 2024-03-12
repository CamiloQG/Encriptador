const resultado = document.querySelector(".contenedor-respuesta");
const contenedorRespuesta = document.querySelector('#contenedor-respuesta');
let contenedorRespuestaEncriptada = document.querySelector('.contenedor-texto-encriptado');
const copiar = document.querySelector('.btm-copy');
const espacioTextoEncriptado = document.querySelector('.texto-encriptado');


contenedorRespuestaEncriptada.style.display = 'none';

// Función para encriptar
function encriptar() {
    let textoUsuario = document.querySelector('.ingresodetexto').value;


    if (textoUsuario !== '' && !/^[a-z\s_]+$/.test(textoUsuario)) {
        swal({
            title: "No se puede encriptar",
            text: "Lo siento, solo se puede encriptar texto en minúscula y sin acentos.",
            icon: "error",
        })
        return;
    }

    textoEncriptado = textoUsuario.replace(/e/g, "enter");
    textoEncriptado = textoEncriptado.replace(/i/g, "imes");
    textoEncriptado = textoEncriptado.replace(/a/g, "ai");
    textoEncriptado = textoEncriptado.replace(/o/g, "ober");
    textoEncriptado = textoEncriptado.replace(/u/g, "ufat");

    mostrarMensaje();
}

// Función para desencriptar
function desencriptar() {
    let textoUsuario = document.querySelector('.ingresodetexto').value;

    if (textoUsuario !== '' && !/^[a-z\s_]+$/.test(textoUsuario)) {
        swal({
            title: "No se puede encriptar",
            text: "Lo siento, solo se puede encriptar texto en minúscula y sin acentos.",
            icon: "error",
        })
        return;
    }

    textoEncriptado = textoUsuario.replace(/enter/g, "e");
    textoEncriptado = textoEncriptado.replace(/imes/g, "i");
    textoEncriptado = textoEncriptado.replace(/ai/g, "a");
    textoEncriptado = textoEncriptado.replace(/ober/g, "o");
    textoEncriptado = textoEncriptado.replace(/ufat/g, "u");

    mostrarMensaje();
}


// Funcion para mostrar mensaje, donde se deshabilita una clase del contenedor respuesta y se cambia por otra
function mostrarMensaje () {
    if (textoEncriptado != ''){
        document.querySelector('.desaparecer').style.display = 'none';
        let respuesta = document.querySelector('.texto-encriptado');
        respuesta.textContent = textoEncriptado
        document.querySelector('.contenedor-texto-encriptado').style.display = 'flex';
        document.querySelector('.btm-copy').style.display = 'block'
        contenedorRespuesta.classList.add('contenedor-respuesta2');
        contenedorRespuesta.classList.remove('contenedor-respuesta');
    } else {
        document.querySelector('.desaparecer').style.display = 'block';
        document.querySelector('.contenedor-texto-encriptado').style.display = 'none';
        document.querySelector('.btm-copy').style.display = 'none';
        contenedorRespuesta.classList.remove('contenedor-respuesta2');
        contenedorRespuesta.classList.add('contenedor-respuesta');
    }   
}

//Funcion copiar texto encriptado o desencriptado
copiar.addEventListener('click', e => {
    espacioTextoEncriptado.select();
    document.execCommand('copy');
})