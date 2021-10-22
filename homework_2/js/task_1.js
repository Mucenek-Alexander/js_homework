"use strict";

let rightAnswers = 37;
if (rightAnswers <= 100 && rightAnswers >= 90) console.log("отлично");
else if (rightAnswers < 90 && rightAnswers >= 60) console.log("хорошо");
else if (rightAnswers < 60 && rightAnswers >= 40) console.log("удовлетварительно");
else if (rightAnswers < 40 && rightAnswers >= 0) console.log("попробуйте ещё раз");
else console.log("неверное значение верных ответов");


