#! /usr/bin/env node

import inquirer from "inquirer";
// Printing a WellCome Message
console.log("\n\t WellCome To \'Code Irfan\' - CLI Simple Calculatar\n");


let answar = await inquirer.prompt([
  { message: "Enter first number", type: "number", name: "firstnumber" },
  { message: "Enter second number", type: "number", name: "secondnumber" },
  {
    message: "select one of tmbhe operators to perform action",
    type: "list",
    name: "operator",
    choices:["addition", "subtraction", "multiplication", "division",],
  },
]);

    
// conditional statement if-else
if(answar.operator === "addition"){
    console.log(answar.firstnumber + answar.secondnumber);
}
else if(answar.operator === "subtraction"){
  console.log(answar.firstnumber - answar.secondnumber);
}
else if(answar.operator === "multiplication"){
  console.log(answar.firstnumber * answar.secondnumber);
}
else if(answar.operator === "division"){
  console.log(answar.firstnumber / answar.secondnumber);
}
else{
console.log("Invalid Input");
}
 