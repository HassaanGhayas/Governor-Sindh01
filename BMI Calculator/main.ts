#!/usr/bin/env node
import inquirer from "inquirer";
 
// Questions
const questions = [
    {type: 'number', name: 'weight', message: 'weight(kg)'},
    {type: 'number', name: 'height', message: 'height(m)'}
]
const calculator = 
    (weight: number, height: number): number => weight/(height*height)

const app = async() => {
    const {weight, height} = await inquirer.prompt(questions)
console.log(`Your BMI is ${calculator(height, weight)}`);

};
app()
