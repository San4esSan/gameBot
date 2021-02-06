'use strict';

let isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

let game = function (n) {
  let number = 35;
  let guessNumber = prompt('Угадай число от 1 до 100');

  function start() {
    if (guessNumber === null) {
      alert('Игра окончена');
    } else if (guessNumber < number) {
      alert('Загаданное число больше');
      game();
    } else if (!isNumber(guessNumber)) {
      alert('Введи число!');
      game();
    } else if (guessNumber > number) {
      alert('Загаданное число меньше');
      game();
    } else if (+guessNumber === number) {
      alert('Поздравляю, Вы угадали!!!');
    }
  }
  start();
};
game();