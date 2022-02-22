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
    alert("Tu puntaje actual es menor a " + cuantoCuesta + ".");
  }
}

// ScrollReveal

window.sr = ScrollReveal();

sr.reveal("#score", {
  duration: 1500,
  origin: "top",
  distance: "100px",
});

sr.reveal("h3", {
  duration: 1500,
  origin: "top",
  distance: "20px",
  delay: "500",
});

sr.reveal(".boxtop", {
  origin: "top",
  duration: 1500,
  distance: "2.5em",
});

sr.reveal(".boxbottom", {
  origin: "bottom",
  duration: 1500,
  distance: "2.5em",
});

sr.reveal(".boxleft", {
  origin: "left",
  duration: 1500,
  distance: "2.5em",
});

sr.reveal(".boxright", {
  origin: "right",
  duration: 1500,
  distance: "2.5em",
});

sr.reveal(".boxcenter", {
  duration: 1500,
  distance: "2.5em",
});
