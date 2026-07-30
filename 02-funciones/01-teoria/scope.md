## ¿Qué es el Scope?

El scope determina desde qué partes del programa puede accederse a una variable.

## Scope global

Las variables globales pueden utilizarse desde cualquier parte del programa.

## Scope local

Las variables declaradas dentro de una función solo existen dentro de esa función.

## Scope de bloque

Las variables declaradas con `let` y `const` solo existen dentro del bloque (`{}`) donde fueron creadas.

## Shadowing

Una variable local puede tener el mismo nombre que una variable global. Dentro del ámbito local, la variable global queda oculta.

## `var` vs `let` y `const`

- `var` tiene alcance de función y presenta un comportamiento diferente respecto al scope de bloque.
- `let` y `const` tienen alcance de bloque y son las opciones recomendadas en JavaScript moderno.

## Buenas prácticas

- Utilizar `const` por defecto.
- Utilizar `let` cuando el valor deba cambiar.
- Evitar `var` en código nuevo.
- Reducir al mínimo el uso de variables globales.
""",
"function_expressions.md": """# Function Expressions en JavaScript

## Function Declaration

Es la forma tradicional de declarar una función. Puede invocarse antes de su declaración gracias al hoisting.

## Function Expression

Consiste en almacenar una función dentro de una variable. Solo puede utilizarse después de que la variable haya sido inicializada.

## Funciones anónimas

Son funciones que no poseen un nombre propio y suelen utilizarse dentro de expresiones.

## Funciones con nombre

Una expresión de función también puede tener un nombre, útil principalmente para depuración o recursividad.
