/*Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.*/

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

