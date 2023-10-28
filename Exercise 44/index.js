"use strict";
/*Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.*/
function make_sandwich(items) {
    console.log("Sandwich Summary");
    for (const item of items) {
        console.log(`- ${item}`);
    }
    console.log("Sandwich is ready!\n");
}
// Call the function with different numbers of arguments
make_sandwich(["Turkey", "Lettuce", "Tomato", "Mayo"]);
make_sandwich(["Ham", "Cheese"]);
make_sandwich(["Peanut Butter", "Jelly"]);
