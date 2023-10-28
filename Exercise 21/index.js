"use strict";
//They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
//Define an Array of Province
const Province = [
    { name: "Punjab",
        capital: "Lahore",
        population: 130000000
    },
    {
        name: "Sindh",
        capital: "Karachi",
        population: 90000000
    },
    {
        name: "Khyber",
        capital: "Peshawar",
        population: 20000000
    },
    {
        name: "Balochistan",
        capital: "Quetta",
        population: 10000000
    },
];
// Print information about each province
console.log("province Information:");
for (const province of Province) {
    console.log(`Name: ${province.name}`);
    console.log(`Capital: ${province.capital}`);
    console.log(`Population: ${province.population}`);
    console.log("-----");
}
