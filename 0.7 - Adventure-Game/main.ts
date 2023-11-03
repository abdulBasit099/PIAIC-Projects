#! /usr/bin/env node

import chalk from "chalk";
import inquirer from "inquirer";

class Player {
    name: string;
    life: number = 100
    constructor(name: string) {
        this.name = name;
    }
    lifeDown() {
        let life = this.life - 25;
        this.life = life;
    }
    lifeUp() {
        this.life = 100;
    }
}
class Opponent {
    name: string;
    life: number = 100
    constructor(name: string) {
        this.name = name;
    }
    lifeDown() {
        let life = this.life - 25;
        this.life = life;
    }
}

let player1 = await inquirer.prompt({
    type: "input",
    name: "player1Name",
    message: chalk.bold.blueBright("Enter The Name : ")
})

let opponent1 = await inquirer.prompt({
    type: "list",
    name: "opponentName",
    message: chalk.bold.magentaBright(" Select The Opponent : "),
    choices: ["Zombie", "Venom", "Evil"]
})

let pp1 = new Player(player1.player1Name)
let opp1 = new Opponent(opponent1.opponentName)

if (opp1.name == "Zombie") {
    console.log(`${chalk.bold.green(pp1.name)} VS ${chalk.bold.red(opp1.name)}`)
} else if (opp1.name == "Venom") {
    console.log(`${chalk.bold.green(pp1.name)} VS ${chalk.bold.red(opp1.name)}`)
} else if (opp1.name == "Evil") {
    console.log(`${chalk.bold.green(pp1.name)} VS ${chalk.bold.red(opp1.name)}`)
}

do {
    if (opp1.name == "Zombie") {
        let powers = await inquirer.prompt({
            type: "list",
            name: "powersName",
            message: chalk.bold.yellowBright(" Select the Option : "),
            choices: ["Attack", "Get Life", "Run Away"]
        })
        if (powers.powersName == "Attack") {
            let num1 = Math.floor(Math.random() * 2)
            if (num1 > 0) {
                pp1.lifeDown()
                console.log(chalk.bold.red(`${pp1.name} your life is ${pp1.life}`))
                console.log(chalk.bold.green(`${opp1.name} your life is ${opp1.life}`))
                if (pp1.life <= 0) {
                    console.log(chalk.bold.italic.redBright(`Sorry ${pp1.name} ! You Loose `))
                    break
                }
            }
            if (num1 <= 0) {
                opp1.lifeDown()
                console.log(chalk.bold.green(`${pp1.name} your life is ${pp1.life}`))
                console.log(chalk.bold.red(`${opp1.name} your life is ${opp1.life}`))
                if (opp1.life <= 0) {
                    console.log(chalk.bold.italic.greenBright(`Congratulations ${pp1.name} ! You Win `))
                    break
                }
            }
        }
        if (powers.powersName == "Get Life") {
            pp1.lifeUp()
            console.log(chalk.bold.italic.greenBright(`You Get the Life, New Life is ${pp1.life}`))
        }
        if (powers.powersName == "Run Away") {
            console.log(chalk.bold.italic.redBright("Life End ! "))
            break
        }
    }

    if (opp1.name == "Venom") {
        let powers = await inquirer.prompt({
            type: "list",
            name: "powersName",
            message: chalk.bold.yellowBright(" Select the Option : "),
            choices: ["Attack", "Get Life", "Run Away"]
        })
        if (powers.powersName == "Attack") {
            let num1 = Math.floor(Math.random() * 2)
            if (num1 > 0) {
                pp1.lifeDown()
                console.log(chalk.bold.red(`${pp1.name} your life is ${pp1.life}`))
                console.log(chalk.bold.green(`${opp1.name} your life is ${opp1.life}`))
                if (pp1.life <= 0) {
                    console.log(chalk.bold.italic.redBright(`Sorry ${pp1.name} ! You Loose`))
                    break
                }
            }
            if (num1 <= 0) {
                opp1.lifeDown()
                console.log(chalk.bold.green(`${pp1.name} your life is ${pp1.life}`))
                console.log(chalk.bold.red(`${opp1.name} your life is ${opp1.life}`))
                if (opp1.life <= 0) {
                    console.log(chalk.bold.italic.greenBright(`Congratulations ${pp1.name}! You Win `))
                    break
                }
            }
        }
        if (powers.powersName == "Get Life") {
            pp1.lifeUp()
            console.log(chalk.bold.italic.greenBright(`You Get the Life, New Life is ${pp1.life}`))
        }
        if (powers.powersName == "Run Away") {
            console.log(chalk.bold.italic.redBright("Life End ! "))
            break
        }
    }

    if (opp1.name == "Evil") {
        let powers = await inquirer.prompt({
            type: "list",
            name: "powersName",
            message: chalk.bold.yellowBright(" Select the Option : "),
            choices: ["Attack", "Get Life", "Run Away"]
        })
        if (powers.powersName == "Attack") {
            let num1 = Math.floor(Math.random() * 2)
            if (num1 > 0) {
                pp1.lifeDown()
                console.log(chalk.bold.red(`${pp1.name} your life is ${pp1.life}`))
                console.log(chalk.bold.green(`${opp1.name} your life is ${opp1.life}`))
                if (pp1.life <= 0) {
                    console.log(chalk.bold.italic.redBright(`Sorry ${pp1.name} ! You Loose `))
                    break
                }
            }
            if (num1 <= 0) {
                opp1.lifeDown()
                console.log(chalk.bold.green(`${pp1.name} your life is ${pp1.life}`))
                console.log(chalk.bold.red(`${opp1.name} your life is ${opp1.life}`))
                if (opp1.life <= 0) {
                    console.log(chalk.bold.italic.greenBright(`Congratulations ${pp1.name}! You Win `))
                    break
                }
            }
        }
        if (powers.powersName == "Get Life") {
            pp1.lifeUp()
            console.log(chalk.bold.italic.greenBright(`You Get the Life, New Life is ${pp1.life}`))
        }
        if (powers.powersName == "Run Away") {
            console.log(chalk.bold.italic.redBright("Life End !"))
            break
        }
    }
}
while (true)