#! /usr/bin/env node
import inquirer from "inquirer";

let MyBalance = 10000;
let MyPin: number = 1123;

//First part pincode determination
console.log("WARMLY WELCOME TO MY RESPECTED USER");

const pinAnswer = await inquirer.prompt({
  name: "pincode",
  type: "number",
  message: "enter you pincode:",
});
// pincode === Mypin(1123)[true] code will proceed onwards

if (pinAnswer.pincode === MyPin) {
  console.log(`Correct pincode let's proceed`);
} //if code will be incorrect or false code will stop
else {
  console.log(`Incorrect pincode Try again.`);
}
// if pincode is true then condition will apply
//second part

if (pinAnswer.pincode === MyPin) {
  let operationAns = await inquirer.prompt({
    name: "option",
    type: "list",
    message: "please select option",
    choices: ["fastcash", "withdraw", "check balance"],
  });

  //3rd part

  if (operationAns.option === "withdraw") {
    let amountAns = await inquirer.prompt([
      {
        name: "amount",
        type: "number",
        message: "enter your amount",
      },
    ]);if (amountAns.amount > MyBalance )
    {
     console.log("you have insufficient balance");}
     else if (MyBalance -= amountAns.amount) {
     console.log(`your remaining balance is: ${MyBalance}`);}
     

     
    else if (operationAns.option === "check balance") {
      console.log(`Your Current Balance is : ${MyBalance}`);
    }

    //4rth part
  } else if (operationAns.option === "fastcash") {
    let fastcash = await inquirer.prompt([
      {
        name: "cash",
        type: "list",
        message: "select your amount",
        choices: [1000, 2000, 5000, 7000],
      },
    ]);
    MyBalance -= fastcash.cash;
    console.log(`your remaining balance is ${MyBalance} `);
  } else {
    console.log("Unfortunately! your operation has been Failed");
  }
}
