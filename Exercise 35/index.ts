/*Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!*/

// Array of animals with a common characteristic
let animals: string[] = ["Dog", "Cat", "Rabbit"];

// Loop to print animal names and statements
console.log("List of animals:");
for (const animal of animals) {
    console.log(animal);
}
// print a statement about each animal
console.log("statement about each animal:");
for (const animal of animals)
if (animal === `Dog`)
{console.log(`A ${animal} is a great pet.`);}
else if (animal === `Cat`)
{console.log(`A ${animal} is a great pet.`);}
else if (animal === `Rabbit`)
{   console.log(`A ${animal} is a great pet.`);}

// Statement about the common characteristic
console.log(`what these animals have in common:`);
console.log("Any of these animals would make a great pet!");
