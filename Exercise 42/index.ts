/*Great Magicians: Start with a copy of your program from Exercise 41. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.*/

// Array of magician's names
let magician_names: string[] = ["David Copperfield", "Houdini", "Penn Jillette", "Teller"];

function show_magicians(magicians: string[]): void {
    for (const magician of magicians) {
      console.log(magician);
    }
  }
  function make_great(magicians: string[]): string[] {
    let great_magicians: string[] = magicians.map(magician =>`The Great ${magician}`);
return great_magicians;}

//Modify the array to add "The Great " to each magician's name 
const great_magiciansnames: string [] = make_great(magician_names)

// Call the function to display the original magician names
console.log("Original Magicians:");  
show_magicians(magician_names);

// Call the function to display the great magician names
console.log("Great Magicians:");  
show_magicians(great_magiciansnames);

