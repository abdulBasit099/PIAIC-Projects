#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const conversion = {
    "PKR": {
        "USD": 0.0034,
        "EUR": 0.0031,
        "SAR": 0.013,
        "IQD": 0.0010,
        "PKR": 1
    },
    "USD": {
        "PKR": 300,
        "EUR": 0.93,
        "SAR": 3.75,
        "IQD": 0.31,
        "USD": 1
    },
    "EUR": {
        "PKR": 320.54,
        "USD": 1.107,
        "SAR": 4.03,
        "IQD": 0.33,
        "EUR": 1
    },
    "SAR": {
        "PKR": 79.55,
        "USD": 0.27,
        "EUR": 0.25,
        "IQD": 0.082,
        "SAR": 1
    },
    "IQD": {
        "PKR": 966.71,
        "USD": 3.24,
        "EUR": 3.02,
        "SAR": 12.15,
        "IQD": 1
    },
};
const answer = await inquirer.prompt([
    {
        type: "list",
        name: "from",
        choices: ["PKR", "USD", "EUR", "SAR", "IQD"],
        message: chalk.bold.greenBright("Please Select your Currency : ")
    },
    {
        type: "list",
        name: "to",
        choices: ["PKR", "USD", "EUR", "SAR", "IQD"],
        message: chalk.bold.greenBright("Please Select your conversion Currency : ")
    },
    {
        type: "number",
        name: "amount",
        message: chalk.bold.greenBright("Please Enter your Amount : ")
    }
]);
const { from, to, amount } = answer;
if (from && to && amount) {
    let result = conversion[from][to] * amount;
    console.log(chalk.bold.blueBright(`Your conversion from`), chalk.bold.redBright(`${from}`), chalk.bold.blueBright(`to`), chalk.bold.redBright(`${to}`), chalk.bold.blueBright(`is`), chalk.bold.redBright(`${result}`));
}
else {
    console.log(chalk.bold.redBright("Invalid Outputs"));
}
;
