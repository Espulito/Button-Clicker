const score = document.getElementById("score");
var puntaje = Number(localStorage.getItem("puntaje")) || 0;

score.innerHTML = "Puntuación: " + puntaje;

// Puntaje que se otorga al presionar el botón

function sumarScore() {
  puntaje += 1;
  localStorage.setItem("puntaje", puntaje.toFixed(1));
  score.innerHTML = "Puntuación: " + localStorage.getItem("puntaje");
}

// Trabajos

function trabajos(cuantoCuesta, cuantoDa, trabajoBox) {
  if (puntaje >= cuantoCuesta) {
    puntaje -= cuantoCuesta;
    setInterval(() => {
      puntaje += cuantoDa;
      localStorage.setItem("puntaje", puntaje.toFixed(1));
      score.innerHTML = "Puntuación: " + localStorage.getItem("puntaje");
    }, 1000);
    document.getElementById(trabajoBox).classList.add("desaparecer");
    ventanaSatisfactorio();
  } else {
    return ventanaRechazado();
  }
}
