let indiceImagen = 1;
mostrarImagenes(indiceImagen);

function siguienteImagen(n) {
  mostrarImagenes(indiceImagen += n);
}

function seleccionarImagen(n) {
  mostrarImagenes(indiceImagen = n);
}

function mostrarImagenes(n) {
  let i;
  let imagenes = document.getElementsByClassName("foto");
  let puntos = document.getElementsByClassName("punto");
  if (n > imagenes.length) {indiceImagen = 1}
  if (n < 1) {indiceImagen = imagenes.length}
  for (i = 0; i < imagenes.length; i++) {
    imagenes[i].style.display = "none";
  }
  for (i = 0; i < puntos.length; i++) {
    puntos[i].className = puntos[i].className.replace(" active", "");
  }
  imagenes[indiceImagen-1].style.display = "block";
  puntos[indiceImagen-1].className += " active";
}

// Deslizador automático
let contador = setInterval(() => {
  siguienteImagen(1);
}, 4000);

function reiniciarContador() {
  borrarContador(contador);
  contador = setInterval(() => {
    siguienteImagen(1);
  }, 4000);
}