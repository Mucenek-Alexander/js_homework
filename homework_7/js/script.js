"use strict";

// Задание 1
let goods = {
    piano: {
        title: "Пианино",
        price: 3000,
        count: 25
    },
    guitar: {
        title: "Гитара",
        price: 1200,
        count: 40
    },
    drum: {
        title: "Барабаны",
        price: 2700,
        count: 12
    },
    flute: {
        title: "Флейта",
        price: 900,
        count: 50
    },
    harp: {
        title: "Арфа",
        price: 3400,
        count: 5
    }
};
let filteredGoods = {}
let priceFn = (object, from, to) => {
    if (!(typeof object === "object" && (typeof from && typeof to === "number"))) return console.log("false");
    for (let elem in object) {
        if (object[elem].price >= from && object[elem].price < to) {
            filteredGoods[elem] = object[elem];
        }
    }
}
priceFn(goods, 1000, 3500)
console.log(filteredGoods);


// Задание 2
let goodsFromCart = {
    title: "Гитара",
    countToCart: 12,
}

let buyGoods = (object) => {
    for (let item in object) {
        if (!(typeof object[item].title === "string" && typeof object[item].count === "number" && typeof object === "object"))
            return console.log("false");
        if (goodsFromCart.title === object[item].title && object[item].count < goodsFromCart.countToCart) {
            return console.log("false");
        }
        else if (goodsFromCart.title === object[item].title && object[item].count >= goodsFromCart.countToCart) {
            object[item].count = object[item].count - goodsFromCart.countToCart;
            return console.log("true");
        }
    }
}
buyGoods(goods);
console.log(goods);


// Задание 3
let books = [
    { author: 'Пушкин', title: 'Пир во время чумы'},
    { author: 'Толстой', title: 'Война и мир'},
    { author: 'Лермонтов', title: 'Тамань'},
    { author: 'Гончаров', title: 'Обломов'},
    { author: 'Лермонтов', title: 'Герой Нашего Времени'},
    { author: 'Пушкин', title: 'Руслан и Людмила'},
    { author: 'Лермонтов', title: 'И скучно, и грустно'},
];

let addBooks = (arr, author) => {
        return arr.filter(item => author === item.author);
    }
console.log(addBooks(books, 'Пушкин'));
