#! /usr/bin//env node
import inquirer from "inquirer";
// Asking question from users thougt inquirer
let answers = await inquirer.prompt([
    { message: "Enter first number", type: "number", name: "first number" },
    { message: "Enter second number", type: "number", name: "second number" },
    { message: "select one operator to perfrom operation",
        type: "list",
        name: "operator",
        choices: ["Addition", "subtraction", "multiplication", "division"],
    },
]);
console.log(answers);
