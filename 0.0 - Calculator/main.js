#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let answer = await inquirer.prompt([
    {
        message: chalk.bold.greenBright(" Enter your first number ", chalk.blue(":")),
        type: "number",
        name: "num1"
    },
    {
        message: chalk.bold.greenBright(" Enter your second number ", chalk.blue(":")),
        type: "number",
        name: "num2"
    },
    {
        message: chalk.bold.greenBright(" Select Operator ", chalk.blue(":")),
        type: "list",
        choices: ["+", "-", "*", "/"],
        name: "Operator"
    }
]);
const { num1, num2, Operator } = answer;
if (num1 && num2 && Operator) {
    let result = 0;
    if (Operator === "+") {
        result = num1 + num2;
    }
    else if (Operator === "-") {
        result = num1 - num2;
    }
    if (Operator === "*") {
        result = num1 * num2;
    }
    if (Operator === "/") {
        result = num1 / num2;
    }
    console.log(chalk.bold.yellowBright("Your Answer "), chalk.blue(":"), chalk.italic.redBright(result));
}
else {
    console.log(chalk.bold.redBright(" Kindly Invalid Input ", chalk.blue("!")));
}
