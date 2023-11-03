#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";


function characterCount(paragraph: string) {
    let spaceFree = paragraph.replace(/\s/g, "")
    return spaceFree.length
};

function wordCountMain(paragraph: string) {

    let wordCount = paragraph.split(" ")

    function checkString(element: string) {
        return typeof element === "string"
    }
    return wordCount.length
};

async function userInput(characterCount: (text: string) => number, wordCountMain: (text: string) => number) {
    let response = await inquirer.prompt({
        type: "input",
        message: chalk.bold.redBright("Please enter your text here :"),
        name: "paragraph"
    })

    console.log(chalk.italic.greenBright("Total Characters Count", chalk.bold.whiteBright("="), chalk.bold.blueBright(characterCount(response.paragraph))));
    console.log(chalk.italic.greenBright("Total Words Count", chalk.bold.whiteBright("="), chalk.bold.blueBright(wordCountMain(response.paragraph))));

};

userInput(characterCount, wordCountMain);