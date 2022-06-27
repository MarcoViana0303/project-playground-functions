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
let arrayNum = [0, 0, 0];
console.log(highestCount(arrayNum));
function highestCount(array) {
  // seu código aqui
  let cont = 0;
  let maiorNumero = Math.max.apply(null, array)

  for (let index = 0; index < array.length; index+= 1) {
      if (array[index] === maiorNumero) {
        cont = cont + 1;
      }
    
  }
  
  return cont;
}

// Desafio 7
console.log(catAndMouse(0, 5, -2));
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui

}

// Desafio 8
let array1 = [9, 25];
console.log(fizzBuzz(array1));
function fizzBuzz(array) {
  // seu código aqui
  let stringArray = [];
  for (let index = 0; index < array.length; index+= 1) {
    if (array[index] % 3 === 0 && array[index] % 5 === 0) {
      stringArray.push('fizzBuzz')
    }

     else if (array[index] % 3 === 0) {
      stringArray.push('fizz')
     }

     else if (array[index] % 5 === 0) {
      stringArray.push('buzz')
     }
     else
     {
      stringArray.push('bug!')
     }
    
  }
  return stringArray; 
}

// Desafio 9
let frase = 'hi there';
console.log(encode(frase));
function encode(string) {
  // seu código aqui

}
function decode() {
  // seu código aqui
}

// Desafio 10
let tec = [];
let nome = 'Lucas';
console.log(techList(tec, nome));
function techList(nomeTec, nomePessoa) {
  // seu código aqui
   let tecENome = [];
   for (let index = 0; index < nomeTec.length; index+= 1) {
    tecENome.push({tech:nomeTec[index],name: nomePessoa});
    
   }
   if (nomeTec === 0) {
    return 'Vazio!'
   }
   return tecENome;
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
