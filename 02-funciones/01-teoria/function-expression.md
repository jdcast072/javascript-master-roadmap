# Function Expressions en JavaScript

## ¿Qué es una Function Expression?

Una **Function Expression** es una función que se almacena dentro de una variable. A diferencia de una **Function Declaration**, la función se trata como un valor que puede asignarse, pasarse como argumento o devolverse desde otra función.

Las Function Expressions son ampliamente utilizadas en JavaScript moderno, especialmente en callbacks, eventos, promesas y métodos de arreglos como `map()`, `filter()` y `forEach()`.

---

# Sintaxis

La sintaxis básica consiste en asignar una función a una variable.

```javascript
const saludar = function(nombre) {
    return `Hola ${nombre}`;
};
```

En este ejemplo:

- `saludar` es la variable.
- `function(nombre)` es la función.
- La variable almacena una referencia a esa función.

Para ejecutarla:

```javascript
console.log(saludar("Juan"));
```

---

# Function Declaration vs Function Expression

## Function Declaration

```javascript
function sumar(a, b) {
    return a + b;
}
```

Características:

- Tiene nombre.
- Puede llamarse antes de declararse gracias al **Hoisting**.
- Es ideal para funciones principales y reutilizables.

---

## Function Expression

```javascript
const sumar = function(a, b) {
    return a + b;
};
```

Características:

- Se almacena en una variable.
- Solo puede utilizarse después de haber sido creada.
- Es muy utilizada como callback.

---

# Funciones Anónimas

Una función anónima es una función que no posee un nombre propio.

```javascript
const cuadrado = function(numero) {
    return numero ** 2;
};
```

La variable ya permite acceder a la función, por lo que un nombre adicional normalmente no es necesario.

---

# Funciones con Nombre

También es posible asignar un nombre a una Function Expression.

```javascript
const multiplicar = function producto(a, b) {
    return a * b;
};
```

El nombre `producto` únicamente existe dentro de la propia función.

Esto puede ser útil para:

- Depuración.
- Recursividad.
- Mostrar nombres más descriptivos en los errores.

---

