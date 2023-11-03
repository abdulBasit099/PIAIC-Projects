#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
let ranNum = Math.floor(Math.random() * 4);
//console.log(ranNum);
let user = await inquirer.prompt({
    name: 'num01',
    type: 'list',
    message: chalk.whiteBright("Select the Number Please: "),
    choices: ["0", "1", "2", "3"]
});
console.log(chalk.bold.blueBright(`User-Number : ${user.num01} | System-Number: ${ranNum}`));
if (ranNum === parseInt(user.num01)) {
    console.log(chalk.bold.greenBright("You Win"));
}
else {
    console.log(chalk.bold.redBright("Please Try Again!"));
}
;
