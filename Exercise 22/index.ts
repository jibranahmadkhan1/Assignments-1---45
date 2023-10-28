//Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.

// function to create a fruit object
function createFruit(name: string, color:string, taste:string)
{
return{name,color,taste};
}
//create an Array of fruits
const fruits = [
createFruit("Apple","Red","Sweet"),    
createFruit("Banana","Yellow","Sweet"),    
createFruit("Grapes","Green","Sweet"),  
createFruit("Orange","Orange","Sweet"),    
createFruit("Strawberry","Red","Sweet"),    
];      
// Accessing an invalid index
const invalidIndex = 10;
//only 5 elements in the array , so it will cause an error 
console.log(`Fruit at index ${invalidIndex};`, fruits[invalidIndex]);
//print the fruits
fruits.forEach((fruit) => {
console.log(`Name: ${fruit.name}, Color: ${fruit.color}, Taste: ${fruit.taste}`);
});