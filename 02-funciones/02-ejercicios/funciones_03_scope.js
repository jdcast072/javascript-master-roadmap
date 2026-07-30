//Ejercicio 21: Crear una variable global
const saludar = "Hola mundo";

function llamarSaludo() {
  console.log(saludar);
}

llamarSaludo();

// Ejercicio 22: Crear una variable dentro de una función.

function simularErrorSaludo() {
  const saludo = "Saludos locales";
  console.log(saludo);
}

simularErrorSaludo();

// console.log(saludo);
// ReferenceError: saludo is not defined

// Ejercicio 23: Crear una variable dentro del bloque if.

if (true) {
  let valor = 5;
  console.log(`Dentro del bloque: ${valor}`);
}

// console.log(valor);
// ReferenceError: valor is not defined

//Ejercicio 24: Crear una variable global y otra local con el mismo nombre (Shadowing).
let numero = 117;
function validarNumero(){
    let numero = 110;
    console.log(numero)
}
console.log(numero)
validarNumero()

//Ejercicio 25: Crear dos funciones. Crear una variable llamada contador y verificar que son independientes

function contadorUno(){
    let contador = 90;
    console.log(contador)
}
function contadorDos(){
    let contador = 75;
    console.log(contador)
}
contadorUno()
contadorDos()

// Ejercicio 26: Crear un bloque {} con una variable const.

{
  const lenguaje = "JavaScript";
  console.log(lenguaje);
}

// console.log(lenguaje);
// ReferenceError: lenguaje is not defined

// Ejercicio 27: Crear una variable var dentro de un if. Compararla con let.

if (true) {
  var lenguajeVar = "JavaScript";
}

if (true) {
  let lenguajeLet = "TypeScript";
}

console.log(`Variable con var: ${lenguajeVar}`);

// console.log(lenguajeLet);
// ReferenceError: lenguajeLet is not defined


//Ejercicio 28: Modificar una variable global desde una función. Analizar el resultado.

// Ejercicio 28: Modificar una variable global desde una función.

let contador = 0;

console.log(`Antes: ${contador}`);

function incrementarContador() {
  contador++;
}

incrementarContador();

console.log(`Después: ${contador}`);

//Ejercicio 29: Crear una función que utilice únicamente variables locales.

function contarNumeros(){
    const array = [20,30,40,50];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        //Valores dentro del array potenciados a la 2
        console.log(element ** 2);
    }
}

contarNumeros();

//Ejercicio 29: Alternativo

// Ejercicio 29: Crear una función que utilice únicamente variables locales.

function calcularAreaRectangulo() {
  const base = 10;
  const altura = 5;
  const area = base * altura;

  return area;
}

console.log(`Área: ${calcularAreaRectangulo()}`);

// Ejercicio 30: Escribir una breve conclusión sobre cuándo conviene usar:const, let y variables globales

/*
Conclusión

- const: se utiliza cuando el valor no cambiará durante la ejecución del programa.
- let: se utiliza cuando el valor necesita modificarse.
- Variables globales: deben utilizarse solo cuando varias partes del programa necesiten compartir información, ya que un uso excesivo dificulta el mantenimiento del código.
*/