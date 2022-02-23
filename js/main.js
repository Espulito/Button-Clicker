const score = document.getElementById("score");
const puntaje = localStorage.getItem("puntaje") || 0;

// Puntaje que se otorga al presionar el botón

function sumarScore() {
  puntaje += 1;
  score.innerHTML = "Puntuación: " + puntaje.toFixed(1);
}

// Trabajos

function trabajos(cuantoCuesta, cuantoDa, trabajoBox) {
  if (puntaje >= cuantoCuesta) {
    puntaje -= cuantoCuesta;
    setInterval(() => {
      puntaje += cuantoDa;
      score.innerHTML = "Puntuación: " + puntaje.toFixed(1);
    }, 1000);
    document.getElementById(trabajoBox).classList.add("desaparecer");
    ventanaSatisfactorio();
  } else {
    return ventanaRechazado();
  }
}
