"use strict";

let firstNum = parseInt(prompt("Введите первое число"));
let secondNum = parseInt(prompt("Введите второе число"));
let operation = prompt("Введите оператор");
switch (operation) {
    case "+":
        console.log(firstNum + secondNum);
        break;
    case "-":
        console.log(firstNum - secondNum);
        break;
    case "*":
        console.log(firstNum * secondNum);
        break;
    case "/":
        console.log(firstNum / secondNum);
        break;
    default:
        console.log("Неверный оператор. Введите +, -, * или /")
}
