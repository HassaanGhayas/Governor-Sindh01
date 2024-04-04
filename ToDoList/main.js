#!/usr/bin/env node
// Advance Todo App with multiple features
//let's start!
//importing inquirer
import inquirer from "inquirer";
//importing chalk
import chalk from "chalk";
//To do List's Array
let todos = [];
//loop Condition
let loopCondition = true;
//Welcome Message!
console.log(chalk.green("Welcome to the Todo App!"));
while (loopCondition) {
    let askOptions = await inquirer.prompt([
        {
            type: "list",
            name: "options",
            message: chalk.blue("What do you want to do?"),
            choices: ["Add Todo", "View Todos", "Replace Todos", "Delete Todos", "Exit"]
        }
    ]);
    if (askOptions.options === "Add Todo") {
        let addTodo = await inquirer.prompt([
            {
                type: "input",
                name: "todo",
                message: chalk.blue("Enter your todo")
            }
        ]);
        todos.push(addTodo.todo);
    }
    else if (askOptions.options === "View Todos") {
        if (todos.length === 0) {
            console.log(chalk.red("Currently No Todos to View"));
        }
        else {
            console.log(chalk.cyan("Your Todos"));
            for (let i = 0; i < todos.length; i++) {
                console.log(chalk.white(`${i + 1}) ${todos[i]}`));
            }
        }
    }
    else if (askOptions.options === "Delete Todos") {
        let deleteTodo = await inquirer.prompt([
            {
                type: "list",
                name: "todo",
                message: chalk.blue("Which one of the tasks you want to remove"),
                choices: todos,
            }
        ]);
        todos.splice(todos.indexOf(deleteTodo.todo), 1);
    }
    else if (askOptions.options === "Replace Todos") {
        let replaceTodo = await inquirer.prompt([
            {
                type: "list",
                name: "todo",
                message: chalk.blue("Which one of the tasks you want to replace"),
                choices: todos,
            },
            {
                type: "input",
                name: "replacementOfTodo",
                message: chalk.blue("What do you want to add instead")
            }
        ]);
        todos.splice(todos.indexOf(replaceTodo.todo), 1, replaceTodo.replacementOfTodo);
    }
    else {
        loopCondition = false;
    }
}
console.log(chalk.green("Thanks for using our app!"));
