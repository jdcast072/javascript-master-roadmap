# Métodos básicos de Arrays en JavaScript

## Introducción

JavaScript proporciona numerosos métodos para trabajar con arreglos. Algunos modifican el arreglo original (métodos mutables) y otros crean uno nuevo (métodos inmutables).

En este archivo aprenderás los métodos básicos más utilizados para agregar, eliminar, buscar y convertir elementos de un arreglo.

---

# push()

## ¿Qué hace?

Agrega uno o varios elementos al **final** del arreglo.

## Sintaxis

```javascript
array.push(elemento1, elemento2, ...);
```

## Ejemplo

```javascript
const frutas = ["Manzana", "Pera"];

frutas.push("Uva");

console.log(frutas);
```

Salida

```javascript
["Manzana", "Pera", "Uva"]
```

## Valor de retorno

`push()` devuelve la nueva longitud del arreglo.

```javascript
const numeros = [10, 20];

const longitud = numeros.push(30);

console.log(longitud);
```

Salida

```text
3
```

## ¿Modifica el arreglo?

✅ Sí.

---

# pop()

## ¿Qué hace?

Elimina el último elemento del arreglo.

## Sintaxis

```javascript
array.pop();
```

## Ejemplo

```javascript
const frutas = ["Manzana", "Pera", "Uva"];

const eliminada = frutas.pop();

console.log(eliminada);
console.log(frutas);
```

Salida

```text
Uva
```

```javascript
["Manzana", "Pera"]
```

## Valor de retorno

Devuelve el elemento eliminado.

## ¿Modifica el arreglo?

✅ Sí.

---

# shift()

## ¿Qué hace?

Elimina el primer elemento del arreglo.

## Sintaxis

```javascript
array.shift();
```

## Ejemplo

```javascript
const frutas = ["Manzana", "Pera", "Uva"];

const primera = frutas.shift();

console.log(primera);
console.log(frutas);
```

Salida

```text
Manzana
```

```javascript
["Pera", "Uva"]
```

## Valor de retorno

Devuelve el elemento eliminado.

## ¿Modifica el arreglo?

✅ Sí.

---

# unshift()

## ¿Qué hace?

Agrega uno o varios elementos al inicio del arreglo.

## Sintaxis

```javascript
array.unshift(elemento1);
```

## Ejemplo

```javascript
const frutas = ["Pera", "Uva"];

frutas.unshift("Manzana");

console.log(frutas);
```

Salida

```javascript
["Manzana", "Pera", "Uva"]
```

## Valor de retorno

Devuelve la nueva longitud del arreglo.

## ¿Modifica el arreglo?

✅ Sí.

---

# includes()

## ¿Qué hace?

Verifica si un elemento existe dentro del arreglo.

## Sintaxis

```javascript
array.includes(valor);
```

## Ejemplo

```javascript
const frutas = ["Manzana", "Pera", "Uva"];

console.log(frutas.includes("Pera"));
console.log(frutas.includes("Kiwi"));
```

Salida

```text
true
false
```

## Valor de retorno

Devuelve un booleano.

## ¿Modifica el arreglo?

❌ No.

---

# indexOf()

## ¿Qué hace?

Busca un elemento y devuelve su índice.

## Sintaxis

```javascript
array.indexOf(valor);
```

## Ejemplo

```javascript
const frutas = ["Manzana", "Pera", "Uva"];

console.log(frutas.indexOf("Pera"));
```

Salida

```text
1
```

Si el elemento no existe:

```javascript
console.log(frutas.indexOf("Kiwi"));
```

Salida

```text
-1
```

## Valor de retorno

- índice encontrado.
- `-1` si no existe.

## ¿Modifica el arreglo?

❌ No.

---

# at()

## ¿Qué hace?

Obtiene un elemento mediante su índice.

Su ventaja es que acepta índices negativos.

## Sintaxis

```javascript
array.at(indice);
```

## Ejemplo

```javascript
const frutas = ["Manzana", "Pera", "Uva"];

console.log(frutas.at(0));
console.log(frutas.at(-1));
```

Salida

```text
Manzana
Uva
```

## Comparación

Antes:

```javascript
frutas[frutas.length - 1];
```

Ahora:

```javascript
frutas.at(-1);
```

Mucho más legible.

## ¿Modifica el arreglo?

❌ No.

---

# join()

## ¿Qué hace?

Convierte un arreglo en un string utilizando un separador.

## Sintaxis

```javascript
array.join(separador);
```

## Ejemplo

```javascript
const frutas = ["Manzana", "Pera", "Uva"];

console.log(frutas.join(", "));
```

Salida

```text
Manzana, Pera, Uva
```

Otro ejemplo:

```javascript
console.log(frutas.join(" - "));
```

Salida

```text
Manzana - Pera - Uva
```

## Valor de retorno

Devuelve un string.

## ¿Modifica el arreglo?

❌ No.

---

# Resumen de mutabilidad

| Método | Modifica el arreglo | Retorna |
|---------|---------------------|----------|
| push() | ✅ | Nueva longitud |
| pop() | ✅ | Elemento eliminado |
| shift() | ✅ | Elemento eliminado |
| unshift() | ✅ | Nueva longitud |
| includes() | ❌ | Booleano |
| indexOf() | ❌ | Índice o -1 |
| at() | ❌ | Elemento |
| join() | ❌ | String |

---

# Errores comunes

## Usar indexOf() para obtener el último elemento

Incorrecto:

```javascript
frutas.indexOf(frutas.length - 1);
```

Correcto:

```javascript
frutas.at(-1);
```

---

## Pensar que includes() devuelve un índice

Incorrecto:

```javascript
const posicion = frutas.includes("Pera");
```

`includes()` devuelve:

```text
true
```

No el índice.

---

## Pensar que push() devuelve el arreglo

Incorrecto:

```javascript
const nuevo = frutas.push("Kiwi");
```

`nuevo` contendrá:

```text
4
```

porque devuelve la longitud.

---

# Buenas prácticas

- Utilizar `push()` y `pop()` cuando trabajes con pilas (Stack).
- Utilizar `shift()` y `unshift()` solo cuando realmente necesites modificar el inicio del arreglo.
- Preferir `includes()` cuando únicamente quieras saber si un elemento existe.
- Utilizar `indexOf()` cuando necesites conocer la posición del elemento.
- Utilizar `at(-1)` para acceder al último elemento de forma más legible.

---

# Resumen

Estos métodos forman la base del trabajo con Arrays en JavaScript. Comprender cuáles modifican el arreglo y cuáles no facilitará el aprendizaje de métodos más avanzados como `slice()`, `splice()`, `concat()`, `map()`, `filter()`, `find()` y `reduce()`.

---

# Recursos

- MDN Web Docs – Array
- MDN Web Docs – Array Methods
- JavaScript.info – Arrays
- ECMAScript Specification – Array Objects