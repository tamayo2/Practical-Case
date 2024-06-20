/**
 * Comenzare calculando la longitud de cada nombre segun el array del caso
 * 
 * @param {string[]} nombres - Este es un array de cadenas de texto que representan nombres.
 * @returns {number[]} - Este es un array con las longitudes de cada nombre en el array original.
 * 
 * @example
 * // returns [6, 5, 8]
 * longitudCadenasArray(['Carlos, 'Pedro', 'Elisenda']);
 */

function longitudCadenasArray(nombres) {
    return nombres.map(nombre => nombre.length);
}

// Aqui unos ejemplos de uso
const resultado = longitudCadenasArray(['Carlos', 'Pedro', 'Elisenda']);
console.log(resultado); // el Output: [6, 5, 8]