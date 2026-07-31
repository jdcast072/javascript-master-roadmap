// Ejercicio 31: Crear una Function Declaration que salude a una persona.
function llamarSaludo(nombre) {
  return `Hola usuario ${nombre}`;
};
console.log(llamarSaludo("Juan Castañeda"));

//Ejercicio 32: Crear una Function Expression que haga exactamente lo mismo.

const enviarSaludos = function (nombre) {
  return `Hola usuario ${nombre}`;
};
console.log(enviarSaludos("Invitado"));

//Ejercicio 33: Crear una función anónima almacenada en una variable que devuelva el cuadrado de un número.
const cuadrado = function (numero) {
  return numero ** 2;
};

console.log(`El valor de cuadrado es: ${cuadrado(10)}`)

//Ejercicio 34: Crear una Function Expression con dos parámetros que devuelva el mayor de ellos.

const mayor = function (num1, num2) {
  if (num1 > num2) {
    return num1;
  }
  return num2;
};

console.log(`EL número mayor es: ${mayor(20, 30)}`);

//Ejercicio 35: Intentar llamar una Function Expression antes de declararla.

//llamarNumero();

const llamarNumero = function () {
  console.log(300);
};
/*
ReferenceError: Cannot access 'llamarNumero' before initialization
at Object.<anonymous> 
*/

//Ejercicio 36: Llamar una Function Declaration antes de declararla.
console.log(llamarNombre("Zenith"));

function llamarNombre(nombre) {
  return nombre;
}

//Ejercicio 37: Guardar una función en una variable y ejecutarla varias veces con distintos argumentos.

const numeros = function (valor) {
  return valor;
};

let count = 0;
do {
  count++;
  console.log(`El valor de numeros es: ${numeros(count)}`);
} while (count < 4);

//Ejercicio 38: Crear una función que reciba otra función como parámetro y la ejecute.

function ejecutarDatos(nombre,edad,callback){
    return callback(nombre,edad)
}

const darSaludos = function(nombre, edad) {
    return `Hola ${nombre} su edad actual es: ${edad}`
}
console.log(ejecutarDatos("Juan", 25, darSaludos))

//Ejercicio 39: Crear una función que reciba un número y una operación (otra función) para aplicarla al número.


function aplicarOperacion(numero, operacion){
    return operacion(numero)
}
function duplicar(numero){
    return numero * 2;
}
function triplicar(numero){
    return numero * 3;
}
function alCuadrado (numero){
    return numero ** 2;
}

console.log(`El valor de la operación de duplicación es: ${aplicarOperacion(2,duplicar)}`)
console.log(`El valor de la operación de triplicación es: ${aplicarOperacion(12,triplicar)}`)
console.log(`El valor de la operación al cuadrado es: ${aplicarOperacion(37,alCuadrado)}`)

// Ejercicio 40: Escribir una conclusión breve respondiendo:
//
// - ¿Qué diferencia existe entre una Function Declaration y una Function Expression?
// - ¿Qué es el Hoisting?
// - ¿Cuándo conviene utilizar cada una?

/*
Conclusión

Las Function Declarations se declaran utilizando la palabra clave `function`
seguida del nombre de la función. Gracias al hoisting, pueden llamarse antes
de aparecer físicamente en el código, ya que JavaScript las registra durante
la fase de creación del contexto de ejecución.

Las Function Expressions consisten en almacenar una función dentro de una
variable. Estas funciones solo pueden ejecutarse después de que la variable
haya sido inicializada, por lo que intentar llamarlas antes produce un
ReferenceError.

El hoisting es el proceso mediante el cual JavaScript mueve determinadas
declaraciones al inicio de su contexto de ejecución antes de ejecutar el
programa. En el caso de las Function Declarations, se eleva toda la función;
en las Function Expressions únicamente se eleva la declaración de la variable,
pero no la asignación de la función.

En general, las Function Declarations son recomendables para funciones
principales y reutilizables dentro de la aplicación, mientras que las
Function Expressions son ideales para callbacks, eventos, funciones
temporales y programación funcional.
*/