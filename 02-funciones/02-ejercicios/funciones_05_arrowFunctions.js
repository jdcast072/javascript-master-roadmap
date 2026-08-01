//Ejercicios — Arrow Functions

//Ejercicio 41 — Convertir una Function Expression

const saludar = (nombre) => `Hola ${nombre}`;

console.log(saludar("Juan"));

// Ejercicio 42 — Sumar dos números: Crear una Arrow Function que reciba dos números y retorne su suma.

const suma = (a, b) => a + b;
console.log(`El valor de la suma es: ${suma(30, 50)}`);

//Ejercicio 43 — Un solo parámetro: Crear una Arrow Function que reciba un número y retorne su cuadrado.

const cuadrado = (numero) => numero ** 2;
console.log(`El valor del número al cuadrado es: ${cuadrado(30)}`);

//Ejercicio 44 — Sin parámetros: Crear una Arrow Function que no reciba parámetros y retorne un mensaje de bienvenida.

const bienvenida = () => `Bienvenido a JavaScript`;
console.log(bienvenida());

// Ejercicio 45 — Retorno implícito: Crear una Arrow Function que reciba un número y devuelva el triple utilizando retorno implícito.

const multiTriple = (numero) => numero * 3;
console.log(`El triple de retorno implícito es de: ${multiTriple(10)}`);

//Ejercicio 46 — Retornar un objeto

/*
Crear una Arrow Function que reciba:

- nombre
- edad

y retorne un objeto.

### Ejemplo

Entrada

```text
Juan
25
```

Salida

```javascript
{
    nombre: "Juan",
    edad: 25
}
```
*/

const datosPersona = (nombre, edad) => ({ nombre, edad });
console.log(datosPersona("Juan", 25));

// Ejercicio 47 — Convertir `map()`
/*
Dado el siguiente código:

```javascript
const numeros = [1, 2, 3, 4, 5];

const dobles = numeros.map(function(numero) {
    return numero * 2;
});
```

Reescribirlo utilizando Arrow Functions.

### Salida esperada

```javascript
[2, 4, 6, 8, 10]
*/

const numeros = [1, 2, 3, 4, 5];

const dobles = numeros.map((numero) => numero * 2);

console.log(
  `El valor doble dentro de los elementos del array son de: ${dobles}`,
);

// Ejercicio 48 — Convertir `filter()`
/* 
Dado el siguiente código:

```javascript
const edades = [15, 22, 17, 30, 18];

const mayores = edades.filter(function(edad) {
    return edad >= 18;
});
```

Convertirlo a Arrow Function.

### Salida esperada

```javascript
[22, 30, 18]
```
*/

const edades = [15, 22, 17, 30, 18];

const mayores = edades.filter((edad) => edad >= 18);
console.log(`Las edades mayores son: ${mayores}`);

// Ejercicio 49 — Callback con Arrow Function

/*
Crear una función que reciba:

- un número
- una Arrow Function

La función deberá ejecutar el callback recibido utilizando ese número.

Crear al menos tres callbacks distintos.

Ejemplos:

- duplicar
- triplicar
- elevar al cuadrado

### Ejemplo

Entrada

```text
10
Duplicar
```

Salida

```text
20
```
*/

function ejecutarOperacion(numero, operacion) {
  return operacion(numero);
}

const duplicar = (numero) => numero * 2;
const triplicar = (numero) => numero * 3;
const alCuadrado = (numero) => numero ** 2;

console.log(
  `El valor ingresado multiplicado a la 2 es: ${ejecutarOperacion(10, duplicar)}`,
);
console.log(
  `El valor ingresado multiplicado a la 3 es: ${ejecutarOperacion(20, triplicar)}`,
);
console.log(
  `El valor ingresado elevado al cuadrado es: ${ejecutarOperacion(30, alCuadrado)}`,
);

//Desafíos adicionales

//Desafío 1: Convertir todas estas funciones a Arrow Functions.

/*
function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    return a / b;
}
*/

const sumar = (a, b) => {
  return a + b;
};

const restar = (a, b) => {
  return a - b;
};

const multiplicar = (a, b) => {
  return a * b;
};

const dividir = (a, b) => {
  if (b === 0) return "El denominador debe ser otro valor diferente de 0.";
  return a / b;
};

console.log(`El valor para sumar es de: ${sumar(30, 15)}`);
console.log(`El valor para restar es de: ${restar(30, 15)}`);
console.log(`El valor para multiplicar es de: ${multiplicar(30, 15)}`);
console.log(`El valor para dividir es de: ${dividir(30, 15)}`);

//Desafío 2: Utilizar únicamente Arrow Functions para:
/*
Utilizar únicamente Arrow Functions para:

map()
filter()
find()

Para el siguiente arreglo:
*/
const naturales = [10, 15, 22, 31, 44, 57, 68];

const multiDup = naturales.map((numero) => numero * 2);
const pares = naturales.filter((numero) => numero % 2 === 0);
const numMayor = naturales.find((numero) => numero > 40);

console.log(
  `Los números duplicados dentro del array dan como resultado: ${multiDup}`,
);
console.log(`Los números pares dentro del array son: ${pares}`);
console.log(`El primer número mayor a 40 dentro del array es: ${numMayor}`);

//Desafío 3 (Nivel TripleTen): Crear un pequeño sistema de calificaciones.

const estudiantes = [
  { nombre: "Juan", nota: 95 },
  { nombre: "Ana", nota: 72 },
  { nombre: "Carlos", nota: 88 },
  { nombre: "Laura", nota: 60 },
];

const aprobados = estudiantes.filter((estudiante) => estudiante.nota >= 70);
console.log(aprobados);
const nombresAprobados = aprobados.map((estudiante) => estudiante.nombre);
console.log(nombresAprobados);
