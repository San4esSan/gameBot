'use strict';

let isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
};

let guessNumber = promt('Угадай число от 1 до 100');
