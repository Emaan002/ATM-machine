#! /usr/bin/env node

import inquirer from "inquirer";

let userName = "Emaan";
let userAns = await inquirer.prompt(
    [
    {
        name: "user",
        message: "Enter your name",
        type: "string"
    }
]
);
  if(userAns.user === userName){
    console.log(`Welcome ${userName}`);
}

let myBalance = 50000;
let myPin = 12345;

let pinAnswer = await inquirer.prompt(
    [
      {
        name: "pin",
        message: "enter your pin number",
        type: "number",
      }
    ]
);
if(pinAnswer.pin === myPin){
    console.log("correct pin code!!!");
 
 let operationAns = await   inquirer.prompt(
    [
        {
            name: "operation",
            message: "please select option",
            type: "list",
            choices: ["withdraw","fast cash", "check balance"]
        }
    ]
);
 console.log(operationAns);

if (operationAns.operation === "withdraw"){
    let amountAns = await inquirer.prompt(
    [
        {
            name: "amount",
            message: "enter your number",
            type: "number"
        }
    ]
);
if(amountAns.amount > myBalance){
    console.log("insufficient amount");
}
else{ myBalance -= amountAns.amount
    console.log(`your remaining balance is: ${myBalance}`);
}
}
if(operationAns.operation === "fast cash"){
    let fastCash = await inquirer.prompt(
        [
          {
             name: "fastcash",
             message: "please select your desired amount",
             type: "list",
             choices: ["10000","20000","30000","40000","45000","50000"],
          }
       ]
    );
    console.log(`Here is yor amount ${fastCash.fastcash}`);
}
if(operationAns.operation === "check balance"){
    console.log(`your balance is: ${myBalance}`);
};
}
else {
    console.log("incorret pin number");
}
