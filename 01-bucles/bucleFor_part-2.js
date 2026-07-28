//Ejercicio 11: Usando únicamente for...of, imprime cuántas palabras tienen 8 o más caracteres.
const palabras = [
  "javascript",
  "css",
  "html",
  "programacion",
  "api",
  "frontend",
];

let cantidadPalabrasLargas = 0;

for (const palabra of palabras) {
  //Al retornar un valor no agrego llaves
  const cantidadLetras = palabra.length;
  if (cantidadLetras >= 8) {
    cantidadPalabrasLargas++;
    console.log(
      `Las palabras que tiene 8 o más letras son: ${palabra} con ${cantidadLetras} letras`,
    );
  }
}
console.log(`La cantidad de palabras largas dentro del array es de: ${cantidadPalabrasLargas}`)


//Ejercicio 12: Encontrar la palabra más larga

const words = ["casa", "computador", "mesa", "desarrollador", "mouse"];

let majorWord = "";

for (const major of words) {
  if (major.length >= majorWord.length) {
    majorWord = major;
  }
}
console.log(`La palabra más larga del array es: ${majorWord}`);

//Ejercicio 13 - Contar positivos, negativos y ceros
const enteros = [-3, 0, 5, -10, 8, 0, 1, -2];

let positivos = 0;
let negativos = 0;
let cero = 0;

for (const numero of enteros) {
  if (numero > 0) {
    positivos += 1;
  } else if (numero < 0) {
    negativos += 1;
  } else {
    cero += 1;
  }
}
console.log(`Positivos: ${positivos}`);
console.log(`Negativos: ${negativos}`);
console.log(`Ceros: ${cero}`);

//Ejercicio 14 - Calcular el promedio

const notas = [4.5, 3.8, 5.0, 2.9, 4.0];

let totalNotas = 0;
let cantidadNotas = 0;
for (const nota of notas) {
  totalNotas += nota;
  cantidadNotas += 1;
}
let promedio = totalNotas / cantidadNotas;

console.log(`El promedio del estudiante es: ${promedio}`);

//Ejercicio 15 - Contar vocales por palabra y encontrar la mayor

const frontend = ["javascript", "computador", "array", "frontend"];

let majorFront = "";
let majorCount = 0;
const vowels = "aeiou";
for (const front of frontend) {
  let count = 0;

  for (const letter of front) {
    if (vowels.includes(letter)) {
      count++;
    }
  }
  if (count > majorCount) {
    majorFront = front;
    majorCount = count;
  }

  console.log(`La palabra ${front} tiene: ${count} vocales `);
}
console.log(
  `La palabra con más vocales es ${majorFront} con ${majorCount} vocales`,
);

//Ejercicio 16 - Eliminar duplicados

const duplicados = [5, 2, 5, 8, 2, 10, 8];

let unicos = [];
for (const numero of duplicados) {
  if (!unicos.includes(numero)) {
    unicos.push(numero);
  }
}

console.log(unicos);

//Ejercicio 17 - Invertir un string
const palabraJS = "javascript";
let reverse = "";
for (let index = palabraJS.length - 1; index >= 0; index--) {
  reverse += palabraJS[index];
}
console.log(reverse);

//Ejercicio 18 - Contar frecuencia de letras
const palabraCode = "programacion";

const frecuencia = {};

for (const letra of palabraCode) {
  if (frecuencia[letra] === undefined) {
    frecuencia[letra] = 1;
  } else {
    frecuencia[letra]++;
  }
}
console.log(frecuencia);

//Ejercicio 19 - Encontrar el segundo número mayor
const numeros = [20, 10, 80, 50, 100, 70];
let numeroMayor = -Infinity;
let segundoMayor = -Infinity;
for (const numero of numeros) {
  if (numero > numeroMayor) {
    segundoMayor = numeroMayor;
    numeroMayor = numero;
  } else if (numero > segundoMayor) {
    segundoMayor = numero;
  }
}
console.log(`Mayor: ${numeroMayor}`);
console.log(`Segundo mayor: ${segundoMayor}`);

//Ejercicio 20 - Mini estadística
const estadistica = [5, 8, 2, 10, 1, 20, 15];
let mayor = estadistica[0],
  menor = estadistica[0],
  promedioValor = 0,
  cantidad = 0,
  suma = 0;
for (const numero of estadistica) {
  if (numero > mayor) mayor = numero;
  if (numero < menor) menor = numero;
  cantidad++;
  suma += numero;
}
promedioValor = suma / cantidad;

console.log(`Mayor: ${mayor}`);
console.log(`Menor: ${menor}`);
console.log(`Promedio: ${promedioValor.toFixed(2)}`);
console.log(`Cantidad: ${cantidad}`);
console.log(`Suma: ${suma}`);
