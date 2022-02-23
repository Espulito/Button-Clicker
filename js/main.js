const score = document.getElementById("score");
var puntaje = 0;

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
  } else {
    return ventanaRechazado();
  }
}
