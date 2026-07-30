//Nivel 1 — Fundamentos (10 ejercicios)
function saludo() {
  console.log("Hola JavaScript");
}
saludo();
console.log("");

//Ejercicio 2 — Llamar varias veces una función usando la función anterior
let i = 0;
while (i < 3) {
  saludo();
  i++;
}
console.log("");

//Ejercicio 3 — Función con un parámetro
function saludar(nombre) {
  console.log(`Hola ${nombre}`);
}
saludar("Juan");
saludar("Pedro");
saludar("Ana");

//Ejercicio 4 — Dos parámetros
function presentar(nombre, edad) {
  console.log(`Mi nombre es ${nombre} y tengo ${edad}`);
}
presentar("Juan", 24);

//Ejercicio 5 — Parámetro con valor por defecto
function saludarInvitado(nombre = "Invitado") {
  console.log(`Soy: ${nombre}`);
}
saludarInvitado();
saludarInvitado("Juan");

//Ejercicio 6 — Función sin retorno
function imprimirLinea() {
  console.log("------------------------");
}
//Ejercicio 7 — Reutilización
function imprimirTitulo(producto) {
  imprimirLinea();
  console.log(producto);
  imprimirLinea();
}
imprimirTitulo("Producto");

//Ejercicio 8 — Parámetros opcionales

function crearUsuario(nombre, rol = "Cliente") {
  console.log(`${nombre} - ${rol}`);
}
crearUsuario("Juan");
crearUsuario("Pedro", "Administrador");

//Ejercicio 9 — Función que recibe un arreglo
function mostrarNumeros(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}
mostrarNumeros([1, 2, 3, 4]);

//Ejercicio 10 — Función que llama otra función
function saludarUsuario(nombre) {
  console.log(`Hola usuario: ${nombre}`);
}

function llamarSaludo(nombre) {
  saludarUsuario(nombre);
}

llamarSaludo("Juan");