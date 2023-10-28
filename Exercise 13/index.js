"use strict";
//Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car,
//and make a list that stores several examples. Use your list to print a series of statements about these items,
//such as “I would like to own a Honda motorcycle.”
let favouriteTransportation = [];
favouriteTransportation.push(["Motorcycle", "Honda"]);
favouriteTransportation.push(["Car", "Toyota"]);
favouriteTransportation.push(["Heavybike", "Suzuki"]);
//console.log(favouriteTransportation)
//I would like to own a Honda Motorcycle.
//using for each loop to print a series of statement
favouriteTransportation.forEach(([transport, brand]) => { console.log(`I would like to own a ${brand} ${transport}`); });
