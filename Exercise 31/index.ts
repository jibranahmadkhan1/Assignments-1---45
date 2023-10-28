/*No Users: Add an if test to Exercise 30 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!

• Remove all of the usernames from your array, and make sure the correct message is printed.*/

// Array of usernames
let usernames: string[] = [`admin`,`ali`,`salman`,`ahmad`,`atif`];

// Check if the array is empty
if (usernames.length === 0) {
  console.log("We need to find some users!");
} else {
  // Loop through the array and print greetings
  for (const username of usernames) {
    if (username === "admin") {
      console.log(`Hello ${username}, would you like to see a status report?`);
    } else {
      console.log(`Hello ${username}, thank you for logging in again.`);
          }
  }
}
// for empty array
usernames = [];
      console.log(`We need to find some users!`);