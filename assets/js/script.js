
// codigos para el ejercicio-1
// tengo imagen desde el DOM
const imagen = document.getElementById("imagen");
// captura evento despues de hacer click
imagen.addEventListener("click", function () {
  if (imagen.style.border === "2px solid red") {
    imagen.style.border = "none";
  } else {
    imagen.style.border = "2px solid red";
  }
});

/* ******************************************** */
/* ******************************************** */

// codigo para el ejercicios-2
// capturamos los elementos del DOM
const sticker1 = document.getElementById("sticker1");
const sticker2 = document.getElementById("sticker2");
const sticker3 = document.getElementById("sticker3");
const btnVerificar = document.getElementById("btnVerificar");
const resultado = document.getElementById("resultado");

btnVerificar.addEventListener("click", function () {
  // Convertimos los valores ingresados a número.
  // Si el input está vacío, lo tomamos como 0.
  const cantidad1 = Number(sticker1.value) || 0;
  const cantidad2 = Number(sticker2.value) || 0;
  const cantidad3 = Number(sticker3.value) || 0;
  const total = cantidad1 + cantidad2 + cantidad3;
  // A. Mostramos la cantidad si es <= 10
  // B. Mostramos advertencia si es > 10
  if (total <= 10) {
    resultado.textContent = "Llevas " + total + " stickers";
  } else {
    resultado.textContent = "Llevas demasiados stickers";
  }
});

/* ******************************************** */
/* ******************************************** */

// codigo para el ejercicios-3
// capturamos los 3 select del DOM
const select1 = document.getElementById("select1");
const select2 = document.getElementById("select2");
const select3 = document.getElementById("select3");
// capturamos boton ingresar y resultado
const btnIngresar = document.getElementById("btnIngresar");
const resultado3 = document.getElementById("resultado3");
// llena la funcion select
function llenarSelect(select) {
  for (let i = 1; i <= 9; i++) {
    const opcion = document.createElement("option");
    opcion.value = i;
    opcion.textContent = i;
    select.appendChild(opcion);
  }
}// Al cargar la página ya estan llenos los select
llenarSelect(select1);
llenarSelect(select2);
llenarSelect(select3);
// capturo evento click del botón Ingresar
btnIngresar.addEventListener("click", function () {
  // se arma la password concatenado
  const password = select1.value + select2.value + select3.value;
  // Se implementa condiciones anidadas
  if (password === "911") {
    resultado3.textContent = "password 1 correcto";
  } else if (password === "714") {
    resultado3.textContent = "password 2 es correcto";
  } else {
    resultado3.textContent = "password incorrecto";
  }
});
