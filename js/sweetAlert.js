Swal.fire({
  icon: "question",
  title: "¿Sabes como jugar?",
  text: 'El "Juego" es muy simple y fácil de comprender, únicamente consiste en presionar el botón para conseguir puntos y posteriormente comprar trabajos para conseguir estos mismos automáticamente.',
  showConfirmButton: false,
  showCloseButton: true,
});

function ventanaRechazado() {
  Swal.fire({
    icon: "error",
    title: "Error:",
    text: "Tu saldo actual es menor al requerido para realizar la compra.",
    showConfirmButton: false,
    showCloseButton: true,
    backdrop: false,
    timer: "5000",
    timerProgressBar: true,
    position: "bottom-right",
    toast: true,
  });
}

function ventanaSatisfactorio() {
  Swal.fire({
    icon: "success",
    title: "Se ha realizado satisfactoriamente la compra.",
    showConfirmButton: false,
    showCloseButton: true,
    backdrop: false,
    timer: "5000",
    timerProgressBar: true,
    position: "bottom-right",
    toast: true,
  });
}
