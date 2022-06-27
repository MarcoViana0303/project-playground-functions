// Desafio 1
console.log(compareTrue(true, true));
function compareTrue(tatu, cigarra) {
  // seu código aqui
  if (tatu && cigarra) {
    return true;
  }
  else{
    return false;
  }
}

// Desafio 2
console.log(calcArea(5, 2));
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2;
}

// Desafio 3
console.log(splitSentence('go Trybe'));
function splitSentence(string) {
  // seu código aqui
  return string.split(' ')
}

// Desafio 4
const array = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']
console.log(concatName(array));
function concatName(param) {
  // seu código aqui
 
}

// Desafio 5
console.log(footballPoints(14, 8));
function footballPoints(wins, ties) {
  // seu código aqui
  let contWins = 0;
  let contTies = 0;
  for (let index = 0; index <= wins; index += 1) {
    
    
  }

}

// Desafio 6
let arrayNum = [9, 1, 2, 3, 9, 5, 7];
console.log(highestCount(arrayNum));
function highestCount(array) {
  // seu código aqui
  let cont = 0;
  for (let index = 0; index < array.length; index += 1) {
      let maiorNumero = Math.max( array[index]) 
    
  }
  return maiorNumero;
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
