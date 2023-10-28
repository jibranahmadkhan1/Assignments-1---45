"use strict";
/*Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.*/
function make_shirt(size = "large", message = "I love TypeScript") {
    return console.log(`Size: ${size} message: "${message}"`);
}
// Large shirt with default message
make_shirt(); // output:size:large, message : `I Love Typescript`,
// Call the function with medium size and default message
make_shirt("medium", "Typescript is Easy"); // output:size:medium, message : `Typescript is Easy`
// Call the function with custom size and message
make_shirt("small", "TypeScript is fun!"); //output:size:small, message : `Typescript is fun`
