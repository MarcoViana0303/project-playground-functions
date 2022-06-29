// Desafio 11
let array = [1, 1, 8, 6, 6, 2, 0, 7, 9, 9, 5];
console.log(generatePhoneNumber(array));
function generatePhoneNumber(numeroTel) {
  // seu código aqui
  let ddd = numeroTel.slice(0, 2).toString().replace(/,/g, '');
    let prefixo = numeroTel.slice(2, 7).toString().replace(/,/g, '');
    let posTraco = numeroTel.slice(-4).toString().replace(/,/g, '');
    let telefoneCompleto = `(${ddd}) ${prefixo}-${posTraco}`;

    if (numeroTel.length !== 11) 
    { 
      return 'Array com tamanho incorreto.'; 
    } 

    for (let index = 0; index < numeroTel.length; index += 1) {
      let contador = 0;
      if (numeroTel[index] > 9 || numeroTel[index] < 0)
       {
        return 'não é possível gerar um número de telefone com esses valores';
      }

      for (let index1 = 0; index1 < numeroTel.length; index1 += 1) {
        if (numeroTel[index] === numeroTel[index1]) {
          contador += 1;
        }
        if (contador >= 3) 
        {
          return 'não é possível gerar um número de telefone com esses valores';
        }
      }
    }
    return telefoneCompleto;
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
