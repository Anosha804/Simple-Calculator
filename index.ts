#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

const answer = await inquirer.prompt([
    {name : "firstNumber", type: "number", message: "Please Enter Your First Number: "},
    {name : "secondNumber", type: "number", message: "Please Enter Your Second Number: "},
    {
        name : "operator",
        type : "list",
        message : "Please select your operator to perform the operation",
        choices : ["Addition", "Subtraction", "Multiplication", "Division"]
    },
])

if (answer.operator === "Addition"){
    console.log(chalk.green("Your value is: ", answer.firstNumber + answer.secondNumber));
}

else if (answer.operator === "Subtraction"){
    console.log(chalk.green("Your value is: ", answer.firstNumber - answer.secondNumber));
}

else if (answer.operator === "Multiplication"){
    console.log(chalk.green("Your value is: ", answer.firstNumber * answer.secondNumber));
}

else if (answer.operator === "Division"){
    console.log(chalk.green("Your value is: ", answer.firstNumber / answer.secondNumber));
}

else {
    console.log("Invalid Operator");
}