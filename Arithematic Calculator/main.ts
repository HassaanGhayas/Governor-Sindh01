#!/usr/bin/env node
import inquirer from "inquirer";

const questions = await inquirer.prompt(
    [
        {type: 'number', name: 'num1', message: 'enter num1'},
        {type: 'number', name: 'num2', message: 'enter num2'},
        {
            type: 'list',
            message: 'select operator',
            name: 'arithematicop',
            choices: ['Addition', 'Subtraction', 'Multiplication', 'Division']
        }
    ]
)
if (questions.arithematicop === "Addition") {
    console.log(questions.num1 + questions.num2);
}
 else if (questions.arithematicop === "Subtraction") {
    console.log(questions.num1 - questions.num2);
}
else if (questions.arithematicop === "Multiplication") {
    console.log(questions.num1 * questions.num2);
}
else if (questions.arithematicop === "Division") {
    console.log(questions.num1 / questions.num2);
}
else {
   console.log("Error");
}
