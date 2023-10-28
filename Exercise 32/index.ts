/*Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
• Make a list of five or more usernames called current_users.

• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted. */

// List of current usernames
let current_users: string[] = ["Ali", "Babar", "Salman", "Atif", "Ahmad"];

// List of new usernames
let new_users: string[] = ["Salman", "Wasim", "Ali", "Zafar", "Mansoor"];

// Convert current usernames to lowercase for case-insensitive comparison
let current_users_lowercase: string[] = current_users.map(user => user.toLowerCase());

// Loop through new usernames and check for uniqueness
for (const new_user of new_users) {
  const new_user_lowercase = new_user.toLowerCase();
  if (current_users_lowercase.includes(new_user_lowercase)) {
    console.log(`Sorry, the username '${new_user}' is already taken. Please choose a different username.`);
  } else {
    console.log(`Congratulations! The username '${new_user}' is available.`);
  }
}
