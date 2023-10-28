"use strict";
/*Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

• Print a second set of invitation messages, one for each person who is still in your list.*/
Object.defineProperty(exports, "__esModule", { value: true });
let guestList = [
    "Quaid-e-Azam Muhammad Ali Jinnah",
    "Allama Muhammad Iqbal",
    "Sir Syed Ahmad Khan",
    "Liaqat Ali Khan"
];
//Step 1: print the name of the person who can't make it
let guestWhoCantMakeIt = "Quaid-e-Azam Muhammad Ali Jinnah";
console.log(`${guestWhoCantMakeIt} cant make it to the dinner`);
//Step 2: Replace the name of the guest  who cant make it.
let newGuest = "Sir Zia Khan";
let indexOfguestWhoCantMakeIt = guestList.indexOf(guestWhoCantMakeIt);
//console.log(indexOfguestWhoCantMakeIt)
if (indexOfguestWhoCantMakeIt !== -1) {
    guestList[indexOfguestWhoCantMakeIt] = newGuest;
}
// Step 3: Print a second set of invitation message
console.log("second set of invitation message:");
guestList.forEach((guest) => {
    console.log(`Dear ${guest}, you are invited to the dinner.`);
});
