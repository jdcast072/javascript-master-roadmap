// Ejercicio 7: Cuenta cuántas vocales tiene cada palabra.
const words = ["computador", "javascript", "array"];
const vowels = "aeiou";
let count = 0;

for (const word of words) {
  for (const letter of word) {
    if (vowels.includes(letter)) {
      count++;
    }
  }
}

console.log(count);
