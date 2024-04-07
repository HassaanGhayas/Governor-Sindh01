#!/usr/bin/env node
import inquirer from "inquirer";


let passcode = 42101


let accountbalance: number = 20000



const answers = await inquirer.prompt([
    { type: "number", name: "passkey", message: "Enter your Passcode" },
])


if (answers.passkey == passcode) {
    console.log("Your Passcode is Valid");
    let depositorwithdrawal = await inquirer.prompt([{
        type: "list",
        name: "Task",
        message: "Select any one option",
        choices: ["Deposit", "Withdrawal", "TotalBalance"],
    }])



    if (depositorwithdrawal.Task === "Deposit") {
            let deposit1 = await inquirer.prompt([{
                type: "number",
                name: "deposit",
                message: "Enter your Deposit Amount",}])
            console.log(`${deposit1.deposit} Successfully Deposited to Your Account! \n Your Total Balance is now ${accountbalance + deposit1.deposit}$`);
            }


    else if (depositorwithdrawal.Task === "Withdrawal") {
        let withdrawal1 = await inquirer.prompt([{
            type: "list",
            name: "withdrawal",
            message: "Select any one option",
            choices: ["Fast Cash", "Other Amount"],
        }])


        if (withdrawal1.withdrawal === "Fast Cash") {
            let fastCash1 = await inquirer.prompt([{
                type: "list",
                name: "fastCash",
                message: "Select Amount",
                choices: ["2000", "5000", "10000"],
            }])



            if (accountbalance > fastCash1.fastCash) {
                console.log(`${fastCash1.fastCash}$ Withdrew \n Your Total Balance remaining is now ${accountbalance -= fastCash1.fastCash}$`);
            } 
            
            else {
                console.log("Insufficient Balance");
            }
            }
            
            
            else if (withdrawal1.withdrawal === "Other Amount") {
            let otherAmount1 = await inquirer.prompt([{
                type: "number",
                name: "otherAmount",
                message: "Enter your Withdrawal Amount",
            }])



            if (accountbalance > otherAmount1.otherAmount) {
                console.log(`${otherAmount1.otherAmount}$ Withdrew \n Your Total Balance remaining is now ${accountbalance -= otherAmount1.otherAmount}$`)
            }
                


             else {
                console.log("Insufficient Balance");
            }
            }
        


        else {
            console.log("Transaction Error");
        }}


        else if (depositorwithdrawal.Task === "TotalBalance") {
            console.log(`Your Total Balance is ${accountbalance}$`)
        }
        else {
            console.log("Error");
        }
    }


 else {
    console.log("Invalid Passcode");
}