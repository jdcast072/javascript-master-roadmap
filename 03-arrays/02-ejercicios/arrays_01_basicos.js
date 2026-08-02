//Ejercicio 51 — Crear un Array: rear un arreglo llamado `frutas` con cinco frutas distintas.
/*
Imprimir:

- El arreglo completo.
- La cantidad de elementos.
*/
const frutas = ["Manzana", "Pera", "Uva", "Kiwi", "Mango"];

console.log(frutas);
console.log(`La cantidad de elementos son: ${frutas.length}`);

//Ejercicio 52 — Acceder por índice:
/*
Utilizando el arreglo anterior:

- Mostrar el primer elemento.
- Mostrar el último elemento utilizando `length`.
- Mostrar el último elemento utilizando `at()`.
*/

console.log(`El primer elemento de frutas es: ${frutas[0]}`);
console.log(
  `El último elemento con el método length es: ${frutas[frutas.length - 1]}`,
);
console.log(`El último elemento con el método at es: ${frutas.at(-1)}`);

//Ejercicio 53 — Agregar elementos: Agregar dos frutas utilizando `push()`.
/*
Imprimir:

- Nueva longitud.
- Arreglo actualizado.
*/

frutas.push("Uva", "Mora");

console.log(`La nueva longitud de las frutas es: ${frutas.length}`);
console.log(frutas);

//Ejercicio 54 — Eliminar el último elemento: Eliminar el último elemento utilizando `pop()`.
console.log(frutas.pop());
console.log(`La nueva longitud de las frutas es: ${frutas.length}`);
console.log(frutas);

//## Ejercicio 55 — Agregar al inicio: Agregar dos frutas al inicio utilizando `unshift()`.
//Imprimir el arreglo.

frutas.unshift("Lulo", "Pitaya");
console.log(frutas);

//## Ejercicio 56 — Eliminar el primero: Eliminar el primer elemento utilizando `shift()`.
/*
Imprimir:

- Elemento eliminado.
- Arreglo actualizado.
*/
console.log(frutas.shift());
console.log(frutas);

//Ejercicio 57 — Buscar un elemento: Utilizando `includes()` comprobar si existe:
console.log(
  `¿El banano si existe?: ${frutas.includes("Banano") ? "Si existe la fruta" : "No existe"}`,
);
console.log(
  `¿El kiwi si existe?: ${frutas.includes("Kiwi") ? "Si existe la fruta" : "No existe"}`,
);

//## Ejercicio 58 — Buscar la posición
/*
Utilizar `indexOf()` para encontrar:

- Mango
- Uva

Mostrar el índice.

Si el elemento no existe, mostrar un mensaje.
*/
const frutaExistente = (fruta) => {
  if (frutas.indexOf(fruta) !== -1) {
    console.log(`El índice de ${fruta} es: ${frutas.indexOf(fruta)}`);
  } else if (frutas.indexOf(fruta) === -1) {
    console.log("La fruta que buscas no existe");
  }
};
frutaExistente("Mango");
frutaExistente("Uva");
frutaExistente("Cereza");

//Ejercicio 59 — Convertir a String

/*
Utilizar `join()` con:

- coma
- guion
- barra

Ejemplo

```text
Manzana, Pera, Kiwi
Manzana - Pera - Kiwi
Manzana / Pera / Kiwi
```
*/

console.log(`La lista de frutas actuales son: ${frutas.join(", ")}`);
console.log(`La lista de frutas actuales son: ${frutas.join(" - ")}`);
console.log(`La lista de frutas actuales son: ${frutas.join(" / ")}`);

//## Ejercicio 60 — Reemplazar un elemento
// Cambiar "Pera" por "Sandía".
// No utilizar `push()`.
console.log(frutas);
const actualizarFruta = frutas.indexOf("Pera");
frutas[actualizarFruta] = "Sandía";
console.log(frutas);

/*
============================================================
NIVEL INTERMEDIO
============================================================

Ejercicio 61 — Inventario
Crear un arreglo de productos.
Agregar tres productos.
Eliminar uno.
Mostrar el inventario final.
*/

const inventario = [];
inventario.push("Leche", "Arroz", "Pollo");
console.log(inventario);

/*
Ejercicio 62 — Lista de tareas
Crear una lista de tareas.
Agregar:
- Estudiar JavaScript
- Hacer ejercicio
- Leer documentación
Eliminar la primera.
Mostrar las tareas restantes.
*/

const tareas = ["Estudiar JS", "Hacer ejercicio", "Leer documentación"];
tareas.shift();
console.log(tareas);

/*
Ejercicio 63 — Verificar usuarios
const usuarios = [
  "Juan",
  "Laura",
  "Carlos",
  "Ana"
];
Verificar si existen:
- Juan
- Pedro
*/

const usuarios = ["Juan", "Laura", "Carlos", "Ana"];

console.log(
  `El usuario Juan ${usuarios.includes("Juan") ? "existe" : "no existe"}`,
);
console.log(
  `El usuario Pedro ${usuarios.includes("Pedro") ? "existe" : "no existe"}`,
);

/*
Ejercicio 64 — Buscar posición
Con el arreglo anterior.
Mostrar la posición de:
- Ana
- Carlos
*/
console.log(`La posición de Ana es: ${usuarios.indexOf("Ana") + 1}`);
console.log(`La posición de Carlos es: ${usuarios.indexOf("Carlos") + 1}`);

/*
Ejercicio 65 — Mostrar como texto
Convertir el arreglo anterior en:
Juan | Laura | Carlos | Ana
*/
console.log(`Los usuarios son: ${usuarios.join(" | ")}`);

/*
Ejercicio 66 — Arrays de números
const numeros = [10, 20, 30, 40];
Agregar:
- 50
- 60
Eliminar el primero.
Eliminar el último.
Mostrar el arreglo final.
*/
const numeros = [10, 20, 30, 40];

numeros.push(50, 60);
console.log(numeros);
numeros.pop();
numeros.shift();
console.log(numeros);

/*
============================================================
NIVEL AVANZADO
============================================================

Ejercicio 67 — Array de Objetos
const usuarios = [
  {
    nombre: "Juan",
    edad: 25
  },
  {
    nombre: "Laura",
    edad: 30
  }
];
Agregar un nuevo usuario utilizando push().
Mostrar el arreglo.

*/
const personas = [
  {
    nombre: "Juan",
    edad: 25,
  },
  {
    nombre: "Laura",
    edad: 30,
  },
];

personas.push({ nombre: "Katheryn", edad: 24 });
console.log(personas);

/*
Ejercicio 68 — Buscar usuario
Utilizando includes()...
¿Funcionará para buscar un objeto?
Antes de escribir código responde:
¿Por qué sí?
¿Por qué no?
Después realiza la prueba.

Respuesta: No, porque includes() compará la ubicación de memoria del elemento (en este caso objeto). Así que devolverá false, aunque tenga los mismos valores dentro del método.
Para que devuelva true tendría que devolver la posición del objeto, con los tipos de datos primitivos si se puede devolver el valor del elemento ya que compara:
const a = "Juan";
const b = "Juan";

console.log(a === b); //true

*/
//Con objetos:
console.log(personas.includes({ nombre: "Juan" })); //false

/*
Ejercicio 69 — Mostrar nombres
Recorrer el arreglo anterior e imprimir únicamente los nombres.
No utilizar map() todavía.
*/
console.log("Recorrer arreglo de objetos con bucle for:");
for (const persona of personas) {
  console.log(persona.nombre);
}

console.log("Recorrer arreglo de objetos con método forEach:");
personas.forEach((persona) => console.log(persona.nombre));

console.log(
  "Recorrer arreglo de objetos dentro de una función declarativa con for",
);
function mostrarNombres(personas) {
  for (const persona of personas) {
    console.log(persona.nombre);
  }
}
mostrarNombres(personas);

console.log(
  "Recorrer arreglo de objetos dentro de una función declarativa con forEach",
);
function mostrarLosNombres(personas) {
  personas.forEach((persona) => console.log(persona.nombre));
}

mostrarLosNombres(personas);

console.log(
  "Recorrer arreglo de objetos dentro de una función expresiva con for..of con console.log",
);
const obtenerNombresConsole = (personas) => {
  for (const persona of personas) {
    nombres = persona.nombre;
    console.log(nombres);
  }
};
obtenerNombresConsole(personas);

console.log(
  "Recorrer arreglo de objetos dentro de una función expresiva con for..of y retornar arreglo",
);

const obtenerNombresArregloReturn = (personas) => {
  const gente = [];
  //let i = 0;
  for (const persona of personas) {
    gente.push(persona.nombre); //Método manual tiene: contardor "let i", gente[i] y actaulización (i++);
    //gente[i] = element.nombre
    //i++;
  }
  return gente;
};
console.log(obtenerNombresArregloReturn(personas));

console.log(
  "Recorrer arreglo de objetos dentro de una función expresiva con for..of y retornar texto",
);

const obtenerNombres = (personas) => {
  let texto = "";
  for (const persona of personas) {
    texto += `${persona.nombre}\n`;
  }
  return texto;
};
console.log(obtenerNombres(personas));

/*
Ejercicio 70 — Buscar por índice
Mostrar:
- primer usuario
- último usuario
Utilizando:
- índices
- at()
*/

console.log(`Mostrar el primer usuario con el índice : ${personas[0].nombre}`);
console.log(
  `Mostrar el último usuario con el índice : ${personas[personas.length - 1].nombre}`,
);
console.log(`Mostrar el primer usuario con at : ${personas.at(0).nombre}`);
console.log(`Mostrar el último usuario con at : ${personas.at(-1).nombre}`);

/*
Ejercicio 71 — Actualizar un objeto
Modificar únicamente la edad de Laura.
No reemplazar todo el objeto.
*/
console.log("Ejercicio 71");
console.log(personas);
personas[1].edad = 31;
console.log(personas);

const cambiarEdad = (personas, nombre, nuevaEdad) => {
  for (const persona of personas) {
    if (persona.nombre == nombre) {
      persona.edad = nuevaEdad;
    }
  }
  return;
};
cambiarEdad(personas, "Laura", 32);
console.log(personas);

//Ejercicio 72 — Catálogo Mostrar únicamente los nombres.

const productos = [
  {
    nombre: "Monitor",
    precio: 1200,
  },
  {
    nombre: "Mouse",
    precio: 80,
  },
  {
    nombre: "Teclado",
    precio: 150,
  },
];

const nombreProductos = (productos) => {
  for (const producto of productos) {
    const nombres = producto.nombre;
    console.log(`Producto: ${nombres}`);
  }
};
nombreProductos(productos);

/*
Ejercicio 73 — Lista de compras
Crear un arreglo vacío.
Agregar productos.
Eliminar uno.
Agregar otro.
Mostrar el resultado final.
*/

const compras = [];
const agregarProducto = (lista, producto) => {
  lista.push(producto);
};

const eliminarUltimoProducto = (lista) => {
  return lista.pop();
};

const cambiarProducto = (compra, producto, nuevoProducto) => {
  const indice = compra.indexOf(producto);
  if (compra.indexOf(producto) !== -1) {
    {
      compra[indice] = nuevoProducto;
    }
  } else if (compra.indexOf(producto) === -1) {
    console.log("No se puede cambiar el producto, debe ser uno existente");
  }
};

agregarProducto(compras, "Pan");
agregarProducto(compras, "Leche");
agregarProducto(compras, "Huevos");

eliminarUltimoProducto(compras);

agregarProducto(compras, "Arroz");
console.log(compras);

cambiarProducto(compras, "Leche", "Mayonesa");
console.log(compras);

/*
Ejercicio 74 — Agenda telefónica
Agregar un contacto.
Actualizar un teléfono.
Mostrar todos los contactos.
*/

const contactos = [
  {
    nombre: "Juan",
    telefono: "3001111111",
  },
  {
    nombre: "Laura",
    telefono: "3002222222",
  },
];
const agregarContacto = (nombre, telefono) => {
  return contactos.push({ nombre, telefono });
};
agregarContacto("Diego", "3185236831");
console.log(contactos);

const cambiarTelefono = (nombre, nuevoTelefono) => {
  for (const contacto of contactos) {
    if (contacto.nombre == nombre) {
      contacto.telefono = nuevoTelefono;
    }
  }
};
cambiarTelefono("Laura", "3003333333");
console.log(contactos);

/*
Ejercicio 75 — Mini Inventario
Crear un sistema que permita:
- agregar producto
- eliminar último
- verificar si existe un nombre
- mostrar el inventario separado por comas
Utilizar únicamente:
- push()
- pop()
- includes()
- join()
*/
const inventarios = [];
inventarios.push("Placa Madre", "Fuente ATX", "Monitor", "Parlantes");
console.log(inventarios);
inventarios.pop();
console.log(inventarios);
console.log(
  inventarios.includes("Placa Madre")
    ? "Ahí está la madre"
    : "No está la madre",
);
console.log(`El inventario tiene: ${inventarios.join(", ")}`);
