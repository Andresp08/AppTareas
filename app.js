
function agregarNota() {
    var elemento = document.createElement('li');
    var txt = document.getElementById('texto').value;
    console.log(txt);
    var texto = document.createTextNode(txt);
    var txt2 = document.getElementById('texto').value = " ";
    elemento.appendChild(texto);
    elemento.setAttribute('class', 'alert alert-dark text');

    var contenedor = document.getElementById('contenedor');
    contenedor.appendChild(elemento);
}

var btnInsertar = document.getElementById('enviar');
btnInsertar.addEventListener('click', agregarNota);



