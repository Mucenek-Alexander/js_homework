"use strict";

// 1 задание
let a = 10;
let b = 34;
let c = 25
let S = 2 * (a * b + b * c + a * c);
console.log("Даны высота =", a, "ширина =", b, "длинна =", c, "прямоугольно парраллелипипеда, его площадь =", S);

// 2 задание
let n = 76;
console.log("Дано число n =", n,);
a = n % 10;
b = (n - a) / 10;
n = a + b;
console.log("Сумма его чисел", a, "+", b, "равна =", n);

// 3 задание
a = 7;
b = 3;
console.log("Заданы числа a =", a, "b =", b,);
a = a % 4;
b = (b * 10) % 23;
console.log("После замены а =", a, "b =", b);