// Ejercicio 3: Imprime únicamente las frutas que tengan más de cinco letras.
const frutas = ["Pera", "Manzana", "Kiwi", "Banano", "Sandía"];

for (const fruta of frutas) {
  if (fruta.length > 5) {
    console.log(`Las frutas con más de 5 letras son: ${fruta}`);
  }
}
