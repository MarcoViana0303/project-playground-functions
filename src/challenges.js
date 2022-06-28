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
console.log(catAndMouse(20, 23, 17));
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  if (Math.abs(mouse - cat1) < Math.abs(mouse - cat2)) {
    return 'cat1';
  }
  else if (Math.abs (mouse - cat1) === Math.abs(mouse - cat2)) {
    return 'os gatos trombam e o rato foge';
  }
  else
  {
    return 'cat2';
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
let frase = 'g4 Tryb2!';
console.log(encode(frase));
function encode(string) {
  // seu código aqui
  let vogal = string.replace(/a/gi, '1').replace(/e/gi, '2').replace(/i/gi, '3').replace(/o/gi, '4').replace(/u/gi, '5');

  return vogal;
}

let frase2 = 'h3 th2r2!';
console.log(decode(frase2));
function decode(string) {
  // seu código aqui
  let vogal2 = string.replace(/1/gi, 'a').replace(/2/gi, 'e').replace(/3/gi, 'i').replace(/4/gi, 'o').replace(/5/gi, 'u');

  return vogal2;
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
      })
    
   }
   tecENome.sort(function(a, b) {
    if(a.tech < b.tech) {
      return -1;
    } else {
      return true;
    }
  });
  
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
