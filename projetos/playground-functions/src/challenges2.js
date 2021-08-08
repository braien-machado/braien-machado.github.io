// Desafio 10
function techList(array, string) {
  if (array.length >= 1) {
    array.sort();
    let lista = [];
    for (let valor of array) {
      let obj = {
        tech: valor,
        name: string,
      };
      lista.push(obj);
    }
    return lista;
  }
  return 'Vazio!';
}

// Desafio 11
function verificaTamanho(array) {
  if (array.length !== 11) {
    return false;
  }
  return true;
}

function verificaNumeros(array) {
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] < 0 || array[index] > 9) {
      return false;
    }
  }
  return true;
}

function listaRepeticao(array) {
  let lista = {};
  for (let value of array) {
    if (lista[value] === undefined) {
      lista[value] = 1;
    } else {
      lista[value] += 1;
    }
  }
  return lista;
}

function verificaRepeticao(array) {
  let repeticao = listaRepeticao(array);
  for (let key in repeticao) {
    if (repeticao[key] >= 3) {
      return false;
    }
  }
  return true;
}

function verificaParametro(array) {
  if (verificaTamanho(array) !== true) {
    return 'Array com tamanho incorreto.';
  }
  if (verificaNumeros(array) !== true) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  if (verificaRepeticao(array) !== true) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  return true;
}

/** Source: https://www.devmedia.com.br/javascript-replace-substituindo-valores-em-uma-string/39176#:~:text=O%20m%C3%A9todo%20replace()%20percorre,feita%2C%20%C3%A9%20devolvida%20pelo%20m%C3%A9todo.
 * Utilizei o site para aprender a substituir sequências de caracteres em strings por meio do método "replace()"
*/

function generatePhoneNumber(array) {
  if (verificaParametro(array) !== true) {
    return verificaParametro(array);
  }
  let number = '(  )X     -    ';
  let posicao = 0;
  for (posicao; posicao < array.length; posicao += 1) {
    number = number.replace(' ', array[posicao]);
  }
  number = number.replace('X', ' ');
  return number;
}

// Desafio 12
function verifyTriangleSide(side, sum, dif) {
  if (side > sum) {
    return false;
  }
  if (side < dif) {
    return false;
  }
  return true;
}

function triangleCheck(a, b, c) {
  let sumBC = b + c;
  let sumAC = a + c;
  let sumBA = b + a;
  let difBC = Math.abs(b - c);
  let difAC = Math.abs(a - c);
  let difBA = Math.abs(b - a);
  if (verifyTriangleSide(a, sumBC, difBC)) {
    return true;
  }
  if (verifyTriangleSide(b, sumAC, difAC)) {
    return true;
  }
  if (verifyTriangleSide(c, sumBA, difBA)) {
    return true;
  }
  return false;
}

// Desafio 13
/** Source: https://www.youtube.com/watch?v=pfkkdzeyx6U
 * Utilizei o vídeo para aprender a utilizar a expressão regular que seleciona números em strings.
 * Além disso, incorporei as funções '.match()' e 'parseInt()' por influência do mesmo vídeo.
*/

function hydrate(string) {
  let reg = /\d+/g;
  let arrayNumbers = string.match(reg);
  let sum = 0;
  for (let valor of arrayNumbers) {
    sum += parseInt(valor, 10);
  }
  if (sum > 1) {
    return `${sum} copos de água`;
  }
  return '1 copo de água';
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
