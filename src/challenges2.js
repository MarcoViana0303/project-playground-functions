// Desafio 11
let array = [1, 1, 9, 6, 6, 2, 0, 7, 9, 9, 5];
console.log(generatePhoneNumber(array));
function generatePhoneNumber(numeroTel) {
  // seu código aqui
  let numeroRepetido = 0;
  if (numeroTel.length < 11 || numeroTel.length > 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let index = 0; index < numeroTel.length; index++) {
    if (numeroTel[index] < 0 || numeroTel[index] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }

  }
}

// Desafio 12
console.log(triangleCheck(10, 14, 8));
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  let result;
  if ((lineB + lineC) < lineA ||  (lineA + lineC) < lineB || (lineA + lineB) < lineC) {
    result = false;
  }

  if (lineA < Math.abs(lineB - lineC) || lineB < Math.abs(lineA - lineC) || lineC < Math.abs(lineA - lineB)) {
    result = false;
  }

  else
  {
    result = true;
  }
  return result;
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
