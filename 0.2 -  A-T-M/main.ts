#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

interface userType {

    userId: string,
    userPin: number,
    accountType: string,
    transactionType: string,
    amount: number

};

const answer: userType = await inquirer.prompt([
    {
        name: "userId",
        type: "input",
        message: chalk.greenBright("Enter your Id Name :")
    },
    {
        name: "userPin",
        type: "number",
        message: chalk.greenBright("Enter your Pin Code Only 4 Number use :")
    },
    {
        name: "accountType",
        type: "list",
        message: chalk.greenBright("Select Your Account Type :"),
        choices: ["Current", "saving"]
    },
    {
        name: "transactionType",
        type: "list",
        message: chalk.greenBright("Select your transaction"),
        choices: ["Fast Cash", "Withdraw"],

        when(answer) {
            return answer.accountType
        },
    },
    {
        name: "amount",
        type: "list",
        message: chalk.greenBright("Select your amount"),
        choices: [1000, 2000, 10000, 20000],

        when(answer) {
            return answer.transactionType == "Fast Cash"
        },
    },
    {
        name: "amount",
        type: "number",
        message: chalk.greenBright("Enter your amount"),

        when(answer) {
            return answer.transactionType == "Withdraw"
        },
    }
]);

if (answer.userId && answer.userPin) {

    const balance = Math.floor(Math.random() * 10000000);

    console.log(chalk.redBright(balance));

    const EnterdAmount = answer.amount;

    if (balance >= EnterdAmount) {

        const remianing = balance - EnterdAmount

        console.log(chalk.blueBright("YOur Remaining Balance is :"), chalk.redBright(remianing))
    } else {

        console.log(chalk.redBright("Insuficient Balanc"))
    }
};
