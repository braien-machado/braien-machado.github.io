// Desafio 1
function compareTrue(a, b) {
  return a && b;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(sentence) {
  return sentence.split(' ');
}

// Desafio 4
/** Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
 * Utilizei o site para aprender sobre Template literals.
 * Assim, corrigi o erro do eslint: "Unexpected string concatenation".
 */
function concatName(arrayDeStrings) {
  let first = arrayDeStrings[arrayDeStrings.length - 1];
  let last = arrayDeStrings[0];
  return `${first}, ${last}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = wins * 3 + ties;
  return points;
}

// Desafio 6
function highestCount(numbers) {
  let count = 0;
  let highest = numbers[0];
  for (let number of numbers) {
    if (number > highest) {
      highest = number;
      count = 1;
    } else if (number === highest) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function valAbs(number) {
  if (number >= 0) {
    return number;
  }
  return (number * (-1));
}

function catAndMouse(mouse, cat1, cat2) {
  let distCat1 = valAbs(valAbs(mouse) - valAbs(cat1));
  let distCat2 = valAbs(valAbs(mouse) - valAbs(cat2));
  if (distCat1 < distCat2) {
    return 'cat1';
  }
  if (distCat1 > distCat2) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function divisores(number) {
  let div = [];
  for (let index = 3; index <= 5; index += 2) {
    if (number % index === 0) {
      div.push(index);
    }
  }
  if (div.length === 2) {
    return 15;
  }
  return div[0];
}

function switchDivisores(number) {
  switch (number) {
  case 3:
    return 'fizz';
  case 5:
    return 'buzz';
  case 15:
    return 'fizzBuzz';
  default:
    return 'bug!';
  }
}

function fizzBuzz(array) {
  let newArray = [];
  for (let index of array) {
    newArray.push(switchDivisores(divisores(index)));
  }
  return newArray;
}

// Desafio 9
function compareToEncode(char) {
  let list = ['a', 'e', 'i', 'o', 'u'];
  for (let index = 0; index < list.length; index += 1) {
    let code = index + 1;
    if (char === list[index]) {
      return `${code}`;
    }
  }
  return char;
}

function compareToDecode(char) {
  let list = ['a', 'e', 'i', 'o', 'u'];
  for (let index = 0; index < list.length; index += 1) {
    let code = index + 1;
    if (char === `${code}`) {
      return list[index];
    }
  }
  return char;
}

function encode(string) {
  let newString = '';
  for (let index = 0; index < string.length; index += 1) {
    newString += compareToEncode(string[index]);
  }
  return newString;
}

function decode(string) {
  let newString = '';
  for (let index = 0; index < string.length; index += 1) {
    newString += compareToDecode(string[index]);
  }
  return newString;
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
};
