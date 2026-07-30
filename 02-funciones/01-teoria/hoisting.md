# Hoisting

El **Hoisting** es el comportamiento mediante el cual JavaScript mueve ciertas declaraciones al inicio de su contexto antes de ejecutar el código.

## Function Declaration

```javascript
saludar();

function saludar() {
    console.log("Hola");
}
```

Este código funciona correctamente.

---

## Function Expression

```javascript
saludar();

const saludar = function() {
    console.log("Hola");
};
```

Este código produce un error.

¿Por qué?

Porque únicamente se eleva la declaración de la variable, pero no la asignación de la función.

---

# Function Expressions como valores

En JavaScript las funciones son objetos de primera clase (*First-Class Citizens*).

Esto significa que pueden:

- Guardarse en variables.
- Enviarse como argumentos.
- Devolverse desde otras funciones.
- Almacenarse en objetos.
- Almacenarse en arreglos.

Ejemplo:

```javascript
const sumar = function(a, b) {
    return a + b;
};

const restar = function(a, b) {
    return a - b;
};

console.log(sumar(10, 5));
console.log(restar(10, 5));
```

---

# Callbacks (Introducción)

Un callback es una función enviada como argumento a otra función.

```javascript
function ejecutar(accion) {
    accion();
}

const saludar = function() {
    console.log("Hola");
};

ejecutar(saludar);
```

Este concepto será fundamental para aprender:

- Eventos.
- Fetch API.
- Promesas.
- Async/Await.
- Node.js.

---

# ¿Cuándo utilizar Function Expressions?

Se recomienda utilizarlas cuando:

- Se trabajará con callbacks.
- Se asignarán funciones a variables.
- Se utilizarán eventos.
- Se crearán funciones temporales.
- Se trabajará con métodos funcionales (`map`, `filter`, `reduce`, `forEach`).

---
