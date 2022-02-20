const score = document.getElementById("score");
var puntaje = 0;

function sumarScore() {
  puntaje += 1;
  score.innerHTML = "Puntuación: " + puntaje.toFixed(1);
}

function obrero() {
  if (puntaje >= 10) {
    puntaje -= 10;
    setInterval(() => {
      puntaje += 0.1;
      score.innerHTML = "Puntuación: " + puntaje.toFixed(1);
    }, 1000);
    let obrerobox = document.getElementById("obrerobox");
    obrerobox.classList.add("desaparecer");
  } else {
    alert("No se pudo...");
  }
}

function panadero() {
  if (puntaje >= 25) {
    puntaje -= 25;
    setInterval(() => {
      puntaje += 0.3;
      score.innerHTML = "Puntuación: " + puntaje.toFixed(1);
    }, 1000);
    let panaderobox = document.getElementById("panaderobox");
    panaderobox.classList.add("desaparecer");
  } else {
    alert("No se pudo...");
  }
}

function verdulero() {
  if (puntaje >= 50) {
    puntaje -= 50;
    setInterval(() => {
      puntaje += 0.5;
      score.innerHTML = "Puntuación: " + puntaje.toFixed(1);
    }, 1000);
    let verdulerobox = document.getElementById("verdulerobox");
    verdulerobox.classList.add("desaparecer");
  } else {
    alert("No se pudo...");
  }
}

function kiosquero() {
  if (puntaje >= 100) {
    puntaje -= 100;
    setInterval(() => {
      puntaje += 1;
      score.innerHTML = "Puntuación: " + puntaje.toFixed(1);
    }, 1000);
    let kiosquerobox = document.getElementById("kiosquerobox");
    kiosquerobox.classList.add("desaparecer");
  } else {
    alert("No se pudo...");
  }
}

function armero() {
  if (puntaje >= 250) {
    puntaje -= 250;
    setInterval(() => {
      puntaje += 3;
      score.innerHTML = "Puntuación: " + puntaje.toFixed(1);
    }, 1000);
    let armerobox = document.getElementById("armerobox");
    armerobox.classList.add("desaparecer");
  } else {
    alert("No se pudo...");
  }
}

function abogado() {
  if (puntaje >= 500) {
    puntaje -= 500;
    setInterval(() => {
      puntaje += 5;
      score.innerHTML = "Puntuación: " + puntaje.toFixed(1);
    }, 1000);
    let abogadobox = document.getElementById("abogadobox");
    abogadobox.classList.add("desaparecer");
  } else {
    alert("No se pudo...");
  }
}

function contador() {
  if (puntaje >= 1000) {
    puntaje -= 1000;
    setInterval(() => {
      puntaje += 10;
      score.innerHTML = "Puntuación: " + puntaje.toFixed(1);
    }, 1000);
    let contadorbox = document.getElementById("contadorbox");
    contadorbox.classList.add("desaparecer");
  } else {
    alert("No se pudo...");
  }
}

function inversionista() {
  if (puntaje >= 5000) {
    puntaje -= 5000;
    setInterval(() => {
      puntaje += 50;
      score.innerHTML = "Puntuación: " + puntaje.toFixed(1);
    }, 1000);
    let inversionistabox = document.getElementById("inversionistabox");
    inversionistabox.classList.add("desaparecer");
  } else {
    alert("No se pudo...");
  }
}

function empresario() {
  if (puntaje >= 10000) {
    puntaje -= 10000;
    setInterval(() => {
      puntaje += 100;
      score.innerHTML = "Puntuación: " + puntaje.toFixed(1);
    }, 1000);
    let empresariobox = document.getElementById("empresariobox");
    empresariobox.classList.add("desaparecer");
  } else {
    alert("No se pudo...");
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
