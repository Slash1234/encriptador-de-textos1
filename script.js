function encriptar(){
    var frase = document.getElementById("textoEncriptado").value.toLowerCase();
    
    if (frase.trim() === "") {
        mostrarMuñeco();
        return;
    }
//i= es para que tome letras mayusculas y minusculas
//g= tome en cuenta toda la linea de oracion
//m= tome en cuenta multiples lineas
    var textoEncriptado = frase.replace(/e/img, "enter")
                               .replace(/o/img, "ober")
                               .replace(/i/img, "imes")
                               .replace(/a/img, "ai")
                               .replace(/u/img, "ufat");

    document.getElementById("textoDesencriptado").value = textoEncriptado;
    document.getElementById("textoDesencriptado").style.display = "block";
    document.getElementById("botonCopiar").style.display = "block";
    

    ocultarMuñeco();
}

function desencriptar(){
    var frase = document.getElementById("textoEncriptado").value.toLowerCase();

    if (frase.trim() === "") {
        mostrarMuñeco();
        return;
    }

    var textoDesencriptado = frase.replace(/enter/img, "e")
                                  .replace(/ober/img, "o")
                                  .replace(/imes/img, "i")
                                  .replace(/ai/img, "a")
                                  .replace(/ufat/img, "u");

    document.getElementById("textoDesencriptado").value = textoDesencriptado;
    document.getElementById("textoDesencriptado").style.display = "block";
    document.getElementById("botonCopiar").style.display = "block";

    ocultarMuñeco();
}
function copiar(){

    var contenido = document.querySelector ("#textoDesencriptado");
    contenido.select();
    document.execCommand("copy");
}
/*function prueba(){
    let elem1 = document.getElementById("imagen_muñeco");
        elem1.remove();
    let elem2 = document.querySelector(".titulo");
        elem2.remove();
    let elem3 = document.querySelector(".subtitulo");
        elem3.remove();    
}*/

function ocultarMuñeco(){
    document.getElementById("imagen_muñeco").style.display = "none";
    document.querySelector(".titulo").style.display = "none";
    document.querySelector(".subtitulo").style.display = "none";
}

function mostrarMuñeco(){
    document.getElementById("imagen_muñeco").style.display = "block";
    document.querySelector(".titulo").style.display = "block";
    document.querySelector(".subtitulo").style.display = "block";
    document.getElementById("textoDesencriptado").style.display = "none";
    document.getElementById("botonCopiar").style.display = "none";
}


/*document.getElementById("botonEncriptado").addEventListener("click",function(){
    document.getElementById("textoDesencriptado").style.display = "block";
});*/

/*function prueba2 (){
    let respuesta = document.getElementById("imagen_muñeco");
    respuesta.outerHTML = `<textarea class="contenedor2"> ${textoEncriptado} </textarea>`;
}*/
