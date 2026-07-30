# Buenas prácticas

- Utilizar `const` para almacenar la función.
- Asignar nombres descriptivos a las variables.
- Evitar declarar funciones dentro de otras funciones si no es necesario.
- Mantener una única responsabilidad por función.
- Preferir Function Declarations cuando la función sea parte principal del programa.

---

# Errores comunes

## Llamar una Function Expression antes de declararla

```javascript
saludar();

const saludar = function() {};
```

Produce un `ReferenceError`.

---

## Usar `var`

```javascript
var saludar = function() {};
```

Aunque funciona, actualmente se recomienda utilizar `const`.

---

## Confundir Function Declaration con Function Expression

```javascript
function saludar() {}
```

No es lo mismo que:

```javascript
const saludar = function() {};
```

Ambas crean funciones, pero su comportamiento respecto al hoisting es diferente.

---

# Resumen

Las Function Expressions permiten almacenar funciones dentro de variables y tratarlas como cualquier otro valor. Son una parte esencial del lenguaje porque hacen posible trabajar con callbacks, programación funcional y asincronía.

Comprender la diferencia entre Function Declaration y Function Expression es fundamental antes de aprender Arrow Functions y métodos funcionales de los arreglos.

---

# Recursos

- MDN Web Docs – Functions
- MDN Web Docs – Function Expressions
- JavaScript.info – Functions
- ECMAScript Language Specification