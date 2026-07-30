//Ejercicio 11: Debe devolver la suma.
function suma(a, b) {
  return a + b;
}
console.log(`La suma de los dos valores es: ${suma(10, 20)}`);

//Ejercicio 12: Debe devolver la resta.

function resta(a, b) {
  return a - b;
}
console.log(`La resta de los dos valores es: ${resta(10, 20)}`);

//Ejercicio 13: Debe devolver una multiplicación.

function multi(a, b) {
  return a * b;
}
console.log(`La multiplicación de los dos valores es: ${multi(10, 20)}`);
//Ejercicio 14: Debe devolver una división.
function dividir(a, b) {
  if (b === 0) {
    console.log("No se puede dividir entre 0");
    return;
  }
  return a / b;
}
console.log(`La división de los dos valores es: ${dividir(60, -20)}`);

//Ejercicio 15: Devolver verdadero si es par

function esPar(numero) {
  return numero % 2 === 0;
}
console.log(
  esPar(2) ? `El número es par (${true})` : `El número no es par (${false})`,
);

//Ejercicio 16: Verificar si la persona es mayor de edad.

function esMayorEdad(edad) {
  return edad >= 18;
}
console.log(
  esMayorEdad(17)
    ? `La persona es mayor de edad (${true})`
    : `La persona es menor de edad (${false})`,
);

//Ejercicio 17: Comparar el número mayor
function mayor(numero1, numero2) {
  if (numero1 > numero2) {
    return numero1;
  }
  return numero2;
}

console.log(`El número mayor es: ${mayor(20, 10)}`);

//Ejercicio 18: Comparar el número menor

function menor(numero1, numero2) {
  if (numero1 < numero2) {
    return numero1;
  }
  return numero2;
}

console.log(`El número menor es: ${menor(20, 10)}`);

//Ejercicio 19: Contar letras
function contarLetras(texto) {
  return texto.length;
}
console.log(
  `La cantidad de letras de este texto es de: ${contarLetras("Arbol")}`,
);

//Ejercicio 20: Obtener inicial de cada palabra
function obtenerInicial(nombre) {
  return nombre[0];
}

console.log(`La inicial del texto ingresado es: ${obtenerInicial("Juan")}`);
