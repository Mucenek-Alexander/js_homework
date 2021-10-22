"use strict";

let m = Math.floor(Math.random() * 9) +1;
let n;
while (n = parseInt(prompt("Введите число от 1 до 9"))) {
    console.log("Вы ввели:", n);
    if (n === 0) break;
    else if (n > m && n <= 9) console.log("Загаданное число меньше");
    else if (n < m && n <= 9) console.log("Загаданное число больше");
    else if (n === m) {
        console.log("Вы угадали!");
        break;
    }
    else console.log("Вы ввели неверное число. Введите число от 1 до 9");
}


























