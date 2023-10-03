const string = "Hello, world!";
const palabras = ["Hola", "mundo", "cómo", "estás"];

//
const reversedString = string.reduce(
    (accumulator, currentValue) => {
  return accumulator + currentValue;
});

console.log(reversedString); // !dlrow ,olleH


const resultado = palabras.reduce(
    (acumulador, palabra) => acumulador + " " + palabra
);

console.log(resultado); // Imprimirá: "Hola mundo cómo estás"



// Filter
const strings = ["hola", "mundo", "adiós"];

const longStrings = strings.filter((string) => string.length > 5);

console.log(longStrings); // ["mundo", "adiós"]