#! /usr/bin/env node
import inquirer from "inquirer";
// Printing a WellCome Message
console.log("\n\t WellCome To \'Code Irfan\' - CLI Simple Calculatar\n");
let answar = await inquirer.prompt([
    { message: "Enter first number", type: "number", name: "firstnumber" },
    { message: "Enter second number", type: "number", name: "second number" },
    {
        message: "select one of the operators to perform action",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division",],
    },
]);
// conditional statement if-else
if (answar.operator === "Addition") {
    console.log(answar.firstnumber + answar.secondnumber);
}
else if (answar.operator === "Subtraction") {
    console.log(answar.firstnumber - answar.secondnumber);
}
else if (answar.operator === "Multiplication") {
    console.log(answar.firstnumber * answar.secondnumber);
}
else if (answar.operator === "Division") {
    console.log(answar.firstnumber / answar.secondnumber);
}
else {
    console.log("Invalid Input");
}
