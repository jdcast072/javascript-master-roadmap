// Ejercicio 9: Muestra solo los números pares.
const valores = [3, 8, 11, 14, 20, 31, 42];

for (let index = 0; index < valores.length; index++) {
  if (valores[index] % 2 === 0) {
    console.log(valores[index]);
  }
}
