#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
function characterCount(paragraph) {
    let spaceFree = paragraph.replace(/\s/g, "");
    return spaceFree.length;
}
;
function wordCountMain(paragraph) {
    let wordCount = paragraph.split(" ");
    function checkString(element) {
        return typeof element === "string";
    }
    return wordCount.length;
}
;
async function userInput(characterCount, wordCountMain) {
    let response = await inquirer.prompt({
        type: "input",
        message: chalk.bold.redBright("Please enter your text here :"),
        name: "paragraph"
    });
    console.log(chalk.italic.greenBright("Total Characters Count", chalk.bold.whiteBright("="), chalk.bold.blueBright(characterCount(response.paragraph))));
    console.log(chalk.italic.greenBright("Total Words Count", chalk.bold.whiteBright("="), chalk.bold.blueBright(wordCountMain(response.paragraph))));
}
;
userInput(characterCount, wordCountMain);
