// #! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";

const waitFunc = () => {
    return new Promise((resolve) => {
        setTimeout(resolve, 3000);
    });
};
async function welcomTitle() {
    await waitFunc();
}
await welcomTitle();
async function mainAppCT() {
    const userInput = await inquirer.prompt({
        name: "userMain",
        type: "input",
        message: chalk.bold.magentaBright(" Please enter the number : ")
    });
    let userInputVar = userInput.userMain;
    const timerMain = () => {
        console.clear();
        if (userInputVar > 0) {
            console.log(chalk.bold.greenBright(`Timer is Started !\n`),'\n',chalk.bold.redBright(`Timer =`), chalk.bold.blueBright(`${userInputVar}`));
            setTimeout(timerMain, 1000);
            userInputVar -= 1;
        }
        else {
            console.log(chalk.bold.italic.redBright(" Timer is Completed \n"));
            restartCounter();
        }
    };
    console.clear();
    setTimeout(timerMain);
}
mainAppCT();
async function restartCounter() {
    let userInput2 = await inquirer.prompt({
        name: "userRestart",
        type: "list",
        choices: ["Yes", "No"],
        message: chalk.bold.cyanBright(" Do you want to Restart ? ")
    });
    let userRequest = userInput2.userRestart;
    if (userRequest === "Yes") {
        mainAppCT();
    }
    else if (userRequest === "No") {
        console.log(chalk.bold.yellowBright(" Thank you "));
    }
}










