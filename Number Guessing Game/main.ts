#!/usr/bin/env node
import inquirer from "inquirer";
let randomNumber: number = Math.floor(Math.random() * 10 + 1)
const answer = await inquirer.prompt([
    { name: "usersGuess", type: "number", message: "Enter your guess:", }
])
console.log(`You sure it was ${answer.usersGuess}?`);
if (answer.usersGuess === randomNumber) {
    console.log(`Yep u weren't wrong \n Congrats`);
}
else { 
    console.log(`Nah it was ${randomNumber} \n Better Luck Next Time!`);
}