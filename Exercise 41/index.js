"use strict";
/*Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array. */
// Array of magician's names
let magician_names = ["David Copperfield", "Houdini", "Penn Jillette", "Teller"];
function show_magicians(magicians) {
    for (const magician of magicians) {
        console.log(magician);
    }
}
// Call the function to show magician names
show_magicians(magician_names);
