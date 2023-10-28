"use strict";
/*Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.

• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!*/
//Array of favourite fruits
let favourite_fruits = ["apple", "mango", "banana"];
if (favourite_fruits.includes("apple")) {
    console.log("I like apple.");
}
if (favourite_fruits.includes("mango")) {
    console.log("I like mango.");
}
if (favourite_fruits.includes("banana")) {
    console.log("I like banana.");
}
if (favourite_fruits.includes("orange")) {
    console.log("I like orange.");
}
if (favourite_fruits.includes("grapes")) {
    console.log("I like grapes.");
}
