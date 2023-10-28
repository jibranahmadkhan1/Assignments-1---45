/*Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
• Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.

• Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!*/

// Array of favorite pizza names
let favorite_pizzas: string[] = ["Pepperoni", "Margherita", "BBQ Chicken"];

// print the name of each pizza using a for loop
console.log("My favorite_pizzas are:")
for (let i = 0; i< favorite_pizzas.length;i++)
console.log(favorite_pizzas[i]);
// Loop to print pizza names and statements
for (const pizza of favorite_pizzas) {
  console.log(`I like ${pizza} pizza.`);
}

// Statement expressing love for pizza
console.log("I really love pizza!");
