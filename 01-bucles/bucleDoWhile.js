//Ejercicio 1 — Imprime los números del 1 al 10 usando únicamente do...while.

let numero = 0;
do {
  numero++;
  console.log(numero);
} while (numero < 10);

//Ejercicio 2 – Comprender la verdadera diferencia
let valor = 10;

do {
  console.log(valor);
} while (valor < 5);

/*
"while evalúa la condición antes de ejecutar el bloque, por lo que puede no ejecutarse ninguna vez. do...while ejecuta el bloque primero y luego evalúa la condición, garantizando al menos una ejecución."
*/

//Ejercicio 3 – Menú interactivo (primer caso de uso real)

let opcion = 1;
do {
  console.log(`
        ===== MENÚ =====
        1. Ver perfil
        2. Configuración
        3. Salir`);
  opcion = 3;
} while (opcion !== 3);
//Ejercicio 4 – Validar contraseña
let password = "1234";

do {
  console.log("Acceso denegado!");
  password = "admin123";
} while (password !== "admin123");
console.log("Acceso concedido!");

//Ejercicio 5 – Sumar números hasta llegar a un límite
let adder = 0;
let number = 1;
do {
  adder += number;
  number++;
} while (adder <= 20);
console.log(adder);

//Ejercicio 6 — Contar hacia atrás

let less = 10;
do {
  console.log(less);
  less--;
} while (less > 0);

//Ejercicio 7 — Contar números pares

const numeros = [3, 8, 15, 20, 7, 10, 12];

let i = 0;
let cantidadNumerosPar = 0;
do {
  if (numeros[i] % 2 === 0) {
    cantidadNumerosPar++;
  }
  i++;
} while (i < numeros.length);
console.log(`La cantidad de numeros pares son: ${cantidadNumerosPar}`);

//Ejercicio 8 — Buscar una palabra
const frutas = ["manzana", "pera", "uva", "mango", "kiwi"];
let index = 0;
let indexFruta = -1;
let frutaEncontrada = false;
do {
  if (frutas[index] === "mango") {
    indexFruta = index;
    frutaEncontrada = true;
    break;
  }
  index++;
} while (index < frutas.length);

console.log(
  `El índice de la fruta se encuentra en la ubicación: ${indexFruta}`,
);
console.log(
  `La posición de la fruta se encuentra en la ubicación: ${indexFruta + 1}`,
);
console.log(`¿Se encontró la fruta?: ${frutaEncontrada ? "Sí" : "No"}`);

//Ejercicio 9 — Contar vocales

const palabra = "javascript";
let indice = 0;
const vocales = "aeiou";
let contadorVocales = 0;

do {
  if (vocales.includes(palabra[indice])) {
    contadorVocales++;
  }
  indice++;
} while (indice < palabra.length);
console.log(`${contadorVocales}`);

// Ejercicio 10 — Adivinar el número (simulación)

const numeroSecreto = 7;

let intento = 3;

do {
  console.log(`Intento: ${intento}`);

  if (intento !== numeroSecreto) {
    console.log("Número incorrecto.");
    intento = 7; // Simula el siguiente intento del usuario
  }
} while (intento !== numeroSecreto);

console.log("¡Correcto! Adivinaste el número.");

//Alternativa con método de conversión y numeros aleatorios
let attemps = 0;
let dieRoll;
do {
  dieRoll = Math.floor(Math.random() * 7) + 1;
  attemps++;
  console.log(`Número: ${dieRoll}`);
} while (dieRoll !== numeroSecreto);
console.log("¡Correcto! Adivinaste el número.");
console.log(`Intentos realizados: ${attemps}`);
