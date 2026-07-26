// Ejercicio 5: Encuentra el número mayor.
const valMax = [12, 80, 6, 100, 45];

let maximum = valMax[0];

for (const valor of valMax) {
  if (maximum < valor) {
    maximum = valor;
  }
}

console.log(`El valor máximo de valMax es: ${maximum}`);
