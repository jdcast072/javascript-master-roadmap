// Ejercicio 1: Imprime cada nombre del siguiente arreglo.
const nombres = ["Carlos", "Laura", "Miguel", "Sara"];
for (const nombre of nombres) {
  console.log(`Nombre: ${nombre}`);
}

// Ejercicio 2: Muestra cada número multiplicado por 2.
const numeros = [2, 4, 6, 8, 10];
for (const numero of numeros) {
  console.log(`El valor ${numero} se multiplica x2 dando: ${numero * 2}`);
}

// Ejercicio 3: Imprime únicamente las frutas que tengan más de cinco letras.
const frutas = ["Pera", "Manzana", "Kiwi", "Banano", "Sandía"];

for (const fruta of frutas) {
  if (5 < fruta.length)
    console.log(`las frutas con más de 5 letras son:${fruta}`);
}

// Ejercicio 4: Suma todos los números usando for...of.
const totales = [5, 8, 10, 20, 30];

let total = 0;
for (const valor of totales) {
  total += valor;
}
console.log(`El total del valor del ejercicio 4 es: ${total}`);

//Ejercicio 5: Encuentra el número mayor.

const valMax = [12, 80, 6, 100, 45];

let maximum = valMax[0];

for (const valor of valMax) {
  if (maximum < valor) maximum = valor;
}
console.log(`El valor máximo de valMax es: ${maximum}`);

//Ejercicio 6: Convierte todas las palabras a mayúsculas e imprímelas.

const palabras = ["javascript", "tripleten", "frontend"];

for (const palabra of palabras) {
  console.log(palabra.toUpperCase());
}

// Ejercicio 7: Cuenta cuántas vocales tiene cada palabra.
const words = ["computador", "javascript", "array"];
const vowels = "aeiou";

for (const word of words) {
  let count = 0;
  for (const letter of word) {
    if (vowels.includes(letter)) {
      count++;
    }
  }
  console.log(`La palabra ${word} cuenta con ${count} vocales`);
}

//Ejercicio 8: Recorre esta cadena con for...of e imprime un carácter por línea..

const texto = "TripleTen";

for (let letra of texto) {
  console.log(letra);
}

//Ejercicio 9: Muestra solo los números pares
const valores = [3, 8, 11, 14, 20, 31, 42];

for (let index = 0; index < valores.length; index++) {
  if (valores[index] % 2 === 0)
    console.log(`Valores pares con el bucle for: ${valores[index]}`);
}

for (const valor of valores) {
  if (valor % 2 == 0) console.log(`Valores pares con el bucle for...of: ${valor}`);
}

//Ejercicio 10: Crea un nuevo arreglo con el doble de cada número sin usar map(), únicamente con for...of y push().
const misNumeros = [1, 2, 3, 4, 5];
let numerosDobles = [];
for (let numeros of misNumeros) {
  numerosDobles.push(numeros * 2);
}
console.log(numerosDobles);
