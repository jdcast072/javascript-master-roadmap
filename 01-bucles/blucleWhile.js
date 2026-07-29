// Ejercicio 1: Usando únicamente while, imprime los números del 1 al 10.
let valor = 1;
while (valor <= 10) {
  console.log(valor);
  valor++;
}
console.log("");

//Ejercicio 2: Usando solo while, imprime los números del 20 al 1.
let numero = 20;
while (numero > 0) {
  console.log(numero);
  numero--;
}

//Ejercicio 3 – Sumar los números del 1 al 100
let contador = 1;
let suma = 0;
while (contador <= 100) {
  suma += contador;
  contador++;
}
console.log(suma);

//Ejercicio 4 – Contar números pares
const numeros = [3, 8, 15, 20, 7, 10, 12];
let i = 0;
let cantidadPares = 0;

while (i < numeros.length) {
  if (numeros[i] % 2 === 0) {
    cantidadPares++;
    console.log(`Valores pares con el bucle while: ${numeros[i]}`);
  }
  i++;
}
console.log(cantidadPares);

//Ejercicio 5 – Buscar el primer número mayor que 50

const valores = [12, 35, 48, 51, 80, 10];
let count = 0;
let primerValorMayor = 0;

while (count < valores.length) {
  if (valores[count] > 50) {
    primerValorMayor = valores[count];
    break;
  }
  count++;
}
console.log(primerValorMayor);

//Ejercicio 6 – Buscar un elemento

const frutas = ["manzana", "pera", "uva", "mango", "kiwi"];
let index = 0;
let indiceFruta = 0;
let frutaEncontrada = false;
while (index < frutas.length) {
  if (frutas[index] === "mango") {
    indiceFruta = index;
    frutaEncontrada = true;
    break;
  }
  index++;
}
console.log(
  `El índice de la fruta se encuentra en la ubicación: ${indiceFruta}`,
);
console.log(
  `La posición de la fruta se encuentra en la ubicación: ${indiceFruta + 1}`,
);
console.log(`¿Se encontró la fruta?: ${frutaEncontrada ? "Sí" : "No"}`);

//Ejercicio 7 – Encontrar el número mayor

const naturales = [15, 8, 42, 3, 27, 50, 19];

let indice = 0,
  mayor = 0;
while (indice < naturales.length) {
  if (mayor < naturales[indice]) {
    mayor = naturales[indice];
  }
  indice++;
}
console.log(mayor);

//Ejercicio 7.1 – Invertir un string
const palabra = "javascript";

let inicio = palabra.length - 1;
let reverseWord = "";

while (inicio > 0) {
    inicio--;
  reverseWord += palabra[inicio];
}
console.log(reverseWord);

//Ejercicio 8: Contar vocales

const palabraJS = "javascript";

let started = 0;
const vowels = 'aeiou'
let cantidadVocales = 0;
while (started < palabraJS.length) {
    if(vowels.includes(palabraJS[started])){
        cantidadVocales++;
    }
    started++;
}
console.log(`La cantidad de vocales que tiene JS es:${cantidadVocales}`);