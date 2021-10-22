"use strict";

let randomNum = Math.floor(Math.random() * 491) + 10;
if (randomNum >= 25 && randomNum <=200) console.log("Число", randomNum, "содержится в диапазон (25;200)");
else console.log("Число", randomNum, "не содержится в диапазон (25;200)");
