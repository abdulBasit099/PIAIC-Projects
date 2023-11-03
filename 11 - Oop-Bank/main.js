#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 3500);
    });
};
export const answers = await inquirer.prompt([
    {
        type: "list",
        name: "signUp",
        choices: ["Sign in", "Sign up"],
        message: chalk.italic.blueBright(" Welcome to Our Bank : ")
    },
    {
        type: "input",
        name: "userName",
        message: chalk.bold.yellowBright(" Enter your Name : "),
        when(answers) {
            return answers.signUp;
        },
    },
    {
        type: "number",
        name: "userPin",
        message: chalk.bold.redBright(" Enter your PIN Code : "),
        when(answers) {
            return answers.signUp;
        },
    },
    {
        type: "input",
        name: "userEmail",
        message: chalk.bold.yellowBright(" Enter your email Address : "),
        when(answers) {
            return answers.signUp == "Sign up";
        },
    },
    {
        type: "number",
        name: "userPhone",
        message: chalk.bold.redBright(" Enter your phone number : "),
        when(answers) {
            return answers.signUp == "Sign up";
        },
    },
    {
        type: "list",
        name: "accountType",
        choices: ["Current", "Saving"],
        message: chalk.bold.greenBright(" Select account type : ")
    },
    {
        type: "list",
        name: "transactionType",
        choices: ["Fast Cash", "withdrawal"],
        message: chalk.bold.greenBright(" Select transaction method : "),
        when(answers) {
            return answers.accountType;
        },
    },
    {
        type: "list",
        name: "amount",
        choices: [1000, 2000, 3000, 4000],
        message: chalk.bold.greenBright(" Select amount : "),
        when(answers) {
            return answers.transactionType == "Fast Cash";
        }
    },
    {
        type: "number",
        name: "amount",
        message: chalk.bold.greenBright(" Enter your amount : "),
        when(answers) {
            return answers.transactionType == "withdrawal";
        }
    },
]);
