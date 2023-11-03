#! /usr/bin/env node
import inquirer from "inquirer";
import { Student } from "./student.js";
import chalk from "chalk";
const { input } = await inquirer.prompt({
    name: 'input',
    message: chalk.bold.yellowBright(" Type 1 if you talk to other and Type 2 if you would rather it to yourself", chalk.blueBright(":")),
    type: "number"
});
const Person = new Student();
Person.askQuestion(input);
console.log(chalk.italic.redBright(`You are`, chalk.blueBright(`:`), chalk.bold.greenBright(`${Person.getPersonality()}`)));
const { name } = await inquirer.prompt({
    name: 'name',
    message: chalk.bold.yellowBright("Enter Your Name", chalk.blueBright("?")),
    type: "input"
});
Person.name = name;
console.log(chalk.italic.redBright(`Your Name is`, chalk.blueBright(`:`), chalk.bold.greenBright(`${Person.name}`), chalk.italic.redBright(`and your Personality Type is`), chalk.bold.greenBright(`${Person.getPersonality()}`)));
