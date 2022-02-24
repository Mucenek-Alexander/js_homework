"use strict";

//Задание 1
let users = new Map(), usersFromCity = [];
users.set("User1", "Moscow")
     .set("User2", "London")
     .set("User3", "Saint-Petersburg")
     .set("User4", "Saint-Petersburg")
     .set("User5", "London")
     .set("User6", "Moscow")

let getUser = (map, city) => {
    for (let item of map) {
        if (city === item[1]) usersFromCity.push(item[0]);
    }
}
getUser(users, "Moscow")
console.log(usersFromCity);


// Задание 2

let words = ["cat", "rat", "dog", "racoon", "cat", "dog", "sheep", "cat"];

function getMap(arr) {
    let map = new Map();
    for (let elem of arr) {
        if (map.has(elem)) {
            map.set(elem, map.get(elem)+1)
        } else {
            map.set(elem, 1);
        }
    }
    console.log(map);
}
getMap(words)


// Задание 3
let customerMap = new Map();
customerMap.set(45, {name: "Павел", id: 45, age: 23});
customerMap.set(87, {name: "Олег", id: 87, age: 45});
customerMap.set(91, {name: "Максим", id: 91, age: 18});
customerMap.set(99, {name: "Евгения", id: 99, age: 66});
customerMap.set(101, {name: "Алексей", id: 101, age: 34});
customerMap.set(112, {name: "Клара", id: 112, age: 39});
let customerFromToAge = new Map();
let customerAgeCheck = (map, ageFrom, ageTo) => {
    for (let item of map) {
        if (item[1].age >= ageFrom && item[1].age < ageTo) {
            customerFromToAge.set(item[0], map.get(item[0]));
        }
    }
};
customerAgeCheck(customerMap, 1, 30)
console.log(customerFromToAge);