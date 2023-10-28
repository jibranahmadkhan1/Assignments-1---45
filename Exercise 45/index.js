"use strict";
/*Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.*/
function create_car(manufacturer, model, ...properties) {
    let car = {
        manufacturer: model,
    };
    for (const [key, value] of properties) {
        car[key] = value;
    }
    return car;
}
// Call the function with required and optional information
let car_info = create_car("Toyota", "Camry", ["color", "blue"], ["year", 2023]);
// Print the object returned by the function
console.log(car_info);
