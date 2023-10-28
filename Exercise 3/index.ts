// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

const personName: string = "JiBrAn AhMaD";

// In Lower Case

console.log("Lowercase:", personName.toLowerCase());

// In Upper Case 

console.log("Uppercase:", personName.toUpperCase());

// In Title Case

let words: string[] = personName.split(" ");
let titlecaseName: string = ""
for (let i = 0 ; i < words.length; i++) {

titlecaseName +=words[i].charAt(0).toUpperCase() +words[i].slice(1).toLowerCase()+" "
}
console.log(titlecaseName)
