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
const array = ['foguete', 'não', 'tem', 'ré'];
console.log(concatName(array));
function concatName(param) {
  // seu código aqui
  let primeiroEUltimo = '';
  primeiroEUltimo = param[param.length-1] + ', ' + param[0];

 return primeiroEUltimo;
}

// Desafio 5
console.log(footballPoints(0, 0));
function footballPoints(wins, ties) {
  // seu código aqui
  let contWins = 0;
  let contTies = 0;
  let somaTotal = 0
 
    contWins = contWins + (wins * 3);
    contTies = contTies + ties;
    somaTotal = contTies + contWins;

    return somaTotal;

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
console.log(catAndMouse(0, 5, -5));
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  if (cat1 - cat2 < mouse) {
    return 'cat1';
  }
  else if (cat2 - cat1 < mouse) {
    return 'cat1';
  }
  else
  {
    return 'Os gatos trombam e o rato foge';
  }
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
  let vogalE = string.replace(/e/gi, '2');
  let vogalI = string.replace(/i/gi, '3');

  return vogalE;
}


function decode() {
  // seu código aqui
}

// Desafio 10
let tec = ['React', 'Jest', 'HTML', 'CSS', 'JavaScript'];
let nome = 'Lucas';
console.log(techList(tec, nome));
function techList(nomeTec, nomePessoa) {
  // seu código aqui
   let tecENome = [];
   if (nomeTec.length === 0) {
    return 'Vazio!'
   }

   for (let index = 0; index < nomeTec.length; index+= 1) {
    tecENome.push({
      tech:nomeTec[index],
       name: nomePessoa
      });
    
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
