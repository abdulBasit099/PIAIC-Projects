#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
const waitFunc = () => {
    return new Promise((resolve) => {
        setTimeout(resolve, 3000);
    });
};
async function welcomTitle() {
    let mainWelcomeTitle = chalkAnimation.rainbow(" Welcome to  TODO App ");
    await waitFunc();
    mainWelcomeTitle.stop();
}
await welcomTitle();
let mainTask = [];
async function mainApp() {
    const inputTaskFunc = await inquirer.prompt({
        type: "list",
        message: chalk.redBright("Please Select your Operator"),
        choices: ["Add-Task", "Delete-Task", "Edit-Task", "Exit"],
        name: "operators"
    });
    if (inputTaskFunc.operators === "Add-Task") {
        addTaskFunc();
    }
    else if (inputTaskFunc.operators === "Delete-Task") {
        deleteTaskFunc();
    }
    else if (inputTaskFunc.operators === "Edit-Task") {
        editTaskFunc();
    }
    else if (inputTaskFunc.operators === "Exit") {
        console.log(chalk.bold.yellowBright(" Thank You"));
    }
    ;
}
;
async function addTaskFunc() {
    const addTaskMain = await inquirer.prompt({
        type: "input",
        message: chalk.bold.yellowBright("Please Enter Your Task : "),
        name: "addTask"
    });
    mainTask.push(addTaskMain.addTask);
    console.clear();
    if (mainTask.length > 0) {
        console.log(chalk.bold.underline.greenBright(" Your All To-Do List ! \n"));
        mainTask.map((allTodo) => {
            let taskIndexNum = mainTask.indexOf(allTodo) + 1;
            console.log(chalk.bold.greenBright(`Task no. ${taskIndexNum}: ${allTodo}`));
        });
    }
    else {
        console.log(chalk.bold.redBright("No Found in the List !"));
    }
    mainApp();
}
;
async function deleteTaskFunc() {
    const delTaskMain = await inquirer.prompt({
        type: "input",
        message: chalk.bold.yellowBright("Please Enter the Task Number : "),
        name: "deleteTask"
    });
    let indexNum = delTaskMain.deleteTask;
    if (mainTask.length > 0) {
        mainTask.splice(indexNum - 1, 1);
    }
    else {
        console.log(chalk.bold.redBright(" No Found in the List ! "));
    }
    ;
    console.clear();
    if (mainTask.length > 0) {
        console.log(chalk.bold.underline.greenBright(" Your All  To-Do List ! "));
        mainTask.map((allTodo) => {
            let taskIndexNum = mainTask.indexOf(allTodo) + 1;
            console.log(chalk.bold.greenBright(`Task no. ${taskIndexNum}: ${allTodo}`));
        });
    }
    mainApp();
}
;
async function editTaskFunc() {
    const editTaskMain = await inquirer.prompt([{
            type: "input",
            message: chalk.bold.yellowBright("Please Enter the Task Number : "),
            name: "editTask1"
        },
        {
            type: "input",
            message: chalk.bold.yellowBright("Please Enter Your New Task : "),
            name: "editTask2"
        }]);
    let taskNum = editTaskMain.editTask1;
    let taskName = editTaskMain.editTask2;
    if (mainTask.length > 0) {
        mainTask.splice(taskNum - 1, 1, taskName);
    }
    else {
        console.log(chalk.bold.redBright(" No  Found in the List ! "));
    }
    ;
    console.clear();
    if (mainTask.length > 0) {
        console.log(chalk.bold.underline.greenBright("Your All  To-Do List!"));
        mainTask.map((allTodo) => {
            let taskIndexNum = mainTask.indexOf(allTodo) + 1;
            console.log(chalk.bold.greenBright(`Task no. ${taskIndexNum}: ${allTodo}`));
        });
    }
    mainApp();
}
;
mainApp();
