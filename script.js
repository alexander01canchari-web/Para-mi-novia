// Cambia esta fecha por la de ustedes ❤️
const fechaInicio = new Date("2025-12-28");

function actualizarContador() {
  const ahora = new Date();
  const diferencia = ahora - fechaInicio;

  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diferencia / (1000 * 60)) % 60);
  const segundos = Math.floor((diferencia / 1000) % 60);

  document.getElementById("contador").innerHTML =
    `Nuestros caminos se cruzaron hace <br>
     ${dias} días, ${horas} horas, ${minutos} minutos y ${segundos} segundos 💖`;
}

setInterval(actualizarContador, 1000);

// Crear corazones animados
function crearCorazon() {
  const corazon = document.createElement("div");
  corazon.innerHTML = "❤️";
  corazon.classList.add("corazon");

  corazon.style.left = Math.random() * 160 + 40 + "px";
  corazon.style.top = "140px";
  corazon.style.fontSize = Math.random() * 20 + 10 + "px";

  document.getElementById("corazones").appendChild(corazon);

  setTimeout(() => {
    corazon.remove();
  }, 4000);
}

setInterval(crearCorazon, 300);