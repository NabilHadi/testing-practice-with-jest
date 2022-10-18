export function capitalize(str = "") {
  return str[0].toUpperCase() + str.slice(1);
}

export function reverseString(str = "") {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }

  return reversed;
}

export const calculator = (function () {
  return {
    add(a, b) {
      return a + b;
    },
    subtract(a, b) {
      return a - b;
    },
    divide(a, b) {
      return a / b;
    },
    multiply(a, b) {
      return a * b;
    },
  };
})();

export function caesarCipher(str = "") {
  function isLetter(charCode) {
    if (charCode >= 65 && charCode <= 95) {
      return true;
    } else if (charCode >= 97 && charCode <= 122) {
      return true;
    } else {
      return false;
    }
  }

  return str
    .split("")
    .map((char) => {
      if (!isLetter(char.charCodeAt(0))) return char;

      let charCode;
      if (char.charCodeAt(0) === 122) {
        charCode = 97;
      } else if (char.charCodeAt(0) === 90) {
        charCode = 65;
      } else {
        charCode = char.charCodeAt(0) + 1;
      }
      return String.fromCharCode(charCode);
    })
    .join("");
}

export function analyzeArray(arr = []) {
  return {
    average: arr.reduce((prev, curr) => prev + curr, 0) / arr.length,
    min: arr.reduce((prev, curr) => (prev > curr ? curr : prev)),
    max: arr.reduce((prev, curr) => (prev > curr ? prev : curr)),
    length: arr.length,
  };
}
