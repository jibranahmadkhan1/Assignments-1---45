"use strict";
/*T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.*/
//defining the function
let make_shirt = (Size, Message) => { console.log(`Size: ${Size}, Message: ${Message}`); };
//Call the function
let Size = "Large";
let Message = "Be Happy";
make_shirt(Size, Message);
make_shirt("Large", "Be Happy");
