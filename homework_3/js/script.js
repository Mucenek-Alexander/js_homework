"use strict";


// задание 1
let nums = [
    [23, 56, 75, -90, 123],
    [17, 0, -6429, -122],
    [19, 86, 55, -3, 900, 0, 0],
    [4, 9, -2]
];
let averageArray, sumElem = 0;
for (let array of nums) {
    for (let elem of array) {
        sumElem += elem + 10;
        averageArray = Math.round(sumElem  / array.length);
        }
    averageArray = sumElem / nums.length;
    }
console.log("Сумма элементов массива:", sumElem);
console.log("Среднее арифметическое элементов массива:", averageArray);


// задание 2
let array = [], elem;
for (let i = 0; i < 6; i++) {
    elem = Math.round(Math.random() * 295) + 5;
    array.push(elem);
}
console.log("исходный массив:", array);
let max = Math.max(...array);
console.log("элемент с максимальным значением:", max);
let min = Math.min(...array);
console.log("элемент с минимальным значением:", min);
let maxI = array.indexOf(max);
let minI = array.indexOf(min);
array[maxI] = min;
array[minI] = max;
console.log("массив после замены:", array);


// задание 3
array = [123, 34, -1, 109, 0, -253, 45, -100, 23];
let index, arrayNew = [];
console.log("исходный массив:", array);
for (elem of array) {
    if (elem < 0) arrayNew.push(elem);
}
for (elem of array) {
    if (elem < 0) index = array.indexOf(elem);
    array.splice(index, index);
}
console.log("новый массив:", arrayNew);


// задание 4
array = ["Xodahe", "Gixath", "Qexeme", "Bolyky", "Fifiwu"];
let login;
while (array.includes(login) === false) {
    login = prompt("Введите логин:");
    if (array.includes(login) === false) console.log("неверный логин");
}
console.log("верный логин");


// задание 5

array = ["Xodahe", "Gixath", "Qexeme", "Bolyky", "Fifiwu"];
let loginNew = prompt("Придумайте логин:");
if (array.includes(loginNew) === false) array.push(loginNew);
else do {
        let loginNew = prompt("Логин существует. Придумайте новый:");
        array.push(loginNew);
        } while (array.includes(loginNew) === false);
console.log(array);
