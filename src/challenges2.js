// Desafio 11
let array = [1, 1, 9, 6, 6, 2, 0, 7, 9, 9, 5];
console.log(generatePhoneNumber(array));
function generatePhoneNumber(numeroTel) {
  // seu código aqui
  
}

// Desafio 12
console.log(triangleCheck(10, 14, 8));
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  let result;
  if ((lineB + lineC) < lineA || (lineA + lineC) < lineB || (lineA + lineB) < lineC) {
    result = false;
  }

  if (lineA < Math.abs(lineB - lineC) || lineB < Math.abs(lineA - lineC) || lineC < Math.abs(lineA - lineB)) {
    result = false;
  }

  else {
    result = true;
  }
  return result;
}

// Desafio 13
console.log(hydrate('1 tequila'));
function hydrate(string) {
  // seu código aqui
  let contador = 0;
for (const iterador in string) {
  if (string[iterador] >= 1 || string[iterador] <= 9) {
    contador = contador + Math.floor(string[iterador]);
  }
 
  
}
if (contador === 1) {
  return contador + ' copo de água';
}

  return contador + ' copos de água';
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
