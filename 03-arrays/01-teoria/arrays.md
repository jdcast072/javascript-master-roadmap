# Arrays en JavaScript

## ¿Qué es un Array?

Un **Array** (arreglo) es una estructura de datos que permite almacenar múltiples valores en una sola variable. Cada valor ocupa una posición dentro del arreglo y puede accederse mediante un índice.

Los arrays son una de las estructuras más utilizadas en JavaScript porque permiten organizar y manipular colecciones de datos de forma eficiente.

---

# ¿Por qué utilizar Arrays?

Sin un arreglo, tendríamos que declarar una variable para cada dato.

```javascript
const fruta1 = "Manzana";
const fruta2 = "Pera";
const fruta3 = "Uva";
```

Con un arreglo:

```javascript
const frutas = ["Manzana", "Pera", "Uva"];
```

Ahora todos los datos relacionados están agrupados en una única variable.

---

# Sintaxis

```javascript
const numeros = [10, 20, 30, 40];
```

Los elementos se escriben entre corchetes (`[]`) y se separan por comas.

---

# Índices

Cada elemento tiene una posición llamada **índice**.

Los índices comienzan en **0**, no en 1.

```text
Índice

0        1        2        3
↓        ↓        ↓        ↓

["Rojo", "Azul", "Verde", "Negro"]
```

Por ejemplo:

```javascript
const colores = ["Rojo", "Azul", "Verde", "Negro"];

console.log(colores[0]);
console.log(colores[2]);
```

Salida:

```text
Rojo
Verde
```

---

# Longitud del arreglo

La propiedad `length` devuelve la cantidad de elementos.

```javascript
const frutas = ["Manzana", "Pera", "Uva"];

console.log(frutas.length);
```

Salida:

```text
3
```

Es importante recordar que:

```text
Último índice = length - 1
```

Ejemplo:

```javascript
const numeros = [5, 10, 15, 20];

console.log(numeros.length);
console.log(numeros[numeros.length - 1]);
```

Salida:

```text
4
20
```

---

# Tipos de datos permitidos

Un Array puede almacenar cualquier tipo de dato.

## Números

```javascript
const numeros = [1, 2, 3];
```

## Strings

```javascript
const nombres = ["Juan", "Laura", "Carlos"];
```

## Booleanos

```javascript
const estados = [true, false, true];
```

## Objetos

```javascript
const persona = [
    {
        nombre: "Juan",
        edad: 25
    }
];
```

## Funciones

```javascript
const operaciones = [
    () => 2 + 2,
    () => 5 * 10
];
```

## Mezcla de tipos

```javascript
const datos = [
    10,
    "Hola",
    true,
    {
        nombre: "Juan"
    }
];
```

Aunque JavaScript lo permite, en aplicaciones reales se recomienda que los elementos de un mismo arreglo sean del mismo tipo para facilitar su mantenimiento.

---

# Arrays de Objetos

Es uno de los casos más comunes en desarrollo web.

```javascript
const usuarios = [
    {
        nombre: "Juan",
        edad: 25
    },
    {
        nombre: "Laura",
        edad: 30
    },
    {
        nombre: "Carlos",
        edad: 22
    }
];
```

Acceder al primer usuario:

```javascript
console.log(usuarios[0]);
```

Acceder únicamente al nombre:

```javascript
console.log(usuarios[0].nombre);
```

Acceder a la edad del tercer usuario:

```javascript
console.log(usuarios[2].edad);
```

---

# Arrays Multidimensionales

Un arreglo puede contener otros arreglos.

```javascript
const matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
```

Acceder al número 5:

```javascript
console.log(matriz[1][1]);
```

Explicación:

- `matriz[1]` obtiene el segundo arreglo.
- `[1]` obtiene el segundo elemento de ese arreglo.

---

# Modificar elementos

Podemos cambiar un elemento utilizando su índice.

```javascript
const frutas = ["Manzana", "Pera", "Uva"];

frutas[1] = "Kiwi";

console.log(frutas);
```

Salida:

```javascript
["Manzana", "Kiwi", "Uva"]
```

---

# Recorrer un Array

La forma clásica consiste en utilizar un bucle `for`.

```javascript
const numeros = [10, 20, 30];

for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
}
```

Más adelante aprenderás formas más modernas utilizando:

- `for...of`
- `forEach()`
- `map()`
- `filter()`
- `reduce()`

---

# Errores comunes

## Pensar que los índices comienzan en 1

Incorrecto:

```javascript
frutas[1];
```

para obtener el primer elemento.

Correcto:

```javascript
frutas[0];
```

---

## Acceder a un índice inexistente

```javascript
const numeros = [1, 2, 3];

console.log(numeros[10]);
```

Resultado:

```javascript
undefined
```

---

## Confundir `length` con el último índice

```javascript
const numeros = [1, 2, 3];
```

```javascript
numeros.length;
```

Devuelve:

```text
3
```

Pero el último índice es:

```text
2
```

---

# Buenas prácticas

- Utilizar `const` cuando no se vaya a reasignar el arreglo.
- Dar nombres descriptivos a los arreglos.
- Mantener el mismo tipo de dato dentro del arreglo cuando sea posible.
- Utilizar `length` en lugar de escribir manualmente el tamaño del arreglo.
- Evitar acceder a índices que no existen.

---

# Resumen

Los Arrays permiten almacenar colecciones de datos relacionadas en una única variable. Cada elemento se identifica mediante un índice que comienza en cero. JavaScript permite almacenar cualquier tipo de dato, incluidos objetos, funciones y otros arreglos, lo que convierte a los Arrays en una de las estructuras más importantes del lenguaje.

Comprender cómo acceder, modificar y recorrer un arreglo es esencial antes de aprender los métodos como `push()`, `pop()`, `map()`, `filter()` y `reduce()`.

---

# Recursos

- MDN Web Docs – Indexed Collections (Arrays)
- JavaScript.info – Arrays
- ECMAScript Language Specification – Array Objects