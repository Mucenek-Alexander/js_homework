"use strict";

let plates = parseInt(prompt("Введите количество тарелок")), platesWashed = 0;
let soap = parseInt(prompt("Введите количество моющего средства"));
console.log("кол-во тарелок:", plates, "кол-во моющего средства:", soap)
while (plates - platesWashed >= 1 && soap >= 0.5) {
    platesWashed += 1;
    soap = soap - 0.5;
    console.log("вымыто тарелок:", platesWashed, "Остаток моющего средства:", soap);
}
console.log("Количество оставшихся тарелок:", plates - platesWashed);
console.log("Остаток моющего средства:", soap);