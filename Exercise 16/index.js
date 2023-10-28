"use strict";
/*More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. Print a new set of invitation messages, one for each person in your list.*/
let guestList = [
    "Sir Zia Khan",
    "Allama Muhammad Iqbal",
    "Sir Syed Ahmad Khan",
    "Liaqat Ali Khan"
];
// Step 1 informing guest that you found a bigger dinner table.
for (let guest of guestList) {
    console.log(`Hello, ${guest}, we found a bigger dinner table.`);
}
// Step 2 Add a new guest at the beginning of Array.
let newGuestAtBeginning = "Jahanzaib Tayyab";
guestList.unshift(newGuestAtBeginning);
console.log(guestList);
// Step 3 Add one guest at the middle of Array.
let newGuestAtMiddle = "Muhammad Kamran";
let middleIndex = Math.floor(guestList.length / 2);
guestList.splice(middleIndex, 0, newGuestAtMiddle);
console.log(guestList);
// Step 4 Add one guest at the end of Array.
let newGuestAtEnd = "Abid Sherwani";
guestList.push(newGuestAtEnd);
console.log(guestList);
// Final Step Print a new set of invitation messages, one for each person in your list.
console.log("New set of invitation message:");
for (let guest of guestList) {
    console.log(`Dear ${guest} you are invited to dinner`);
}
