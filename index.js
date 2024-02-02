import Manager from "./lib/Manager.js";
import Engineer from "./lib/Engineer.js";
import Intern from "./lib/Intern.js";
import inquirer from "inquirer";
import figlet from "figlet";
// const inquirer = require("inquirer");
import path from "path";
import fs from "fs";
import managerPrompts from "./prompts/managerPrompts.js";
import choicePrompts from "./prompts/choicePrompts.js";

// const OUTPUT_DIR = path.resolve(__dirname, "output");
// const outputPath = path.join(OUTPUT_DIR, "team.html");

import render from "./src/page-template.js";
// const render = require("./src/page-template.js");

// TODO: Write Code to gather information about the development team members, and render the HTML file.

const employees = [];

// asynchronous function to initialise the app
const manager = async () => {
  try {
    // asks user questions and wait for response
    const answers = await managerPrompts();

    const managerObj = new Manager(
      answers.name,
      answers.employeeId,
      answers.email,
      answers.officeNumber
    );
    // push the results into employees array
    employees.push(managerObj);
    console.log(employees);
    employeeChoice();
  } catch (err) {
    // log errors to the user
    console.log(err);
  }
};

// asynchronous function to initialise the app
const employeeChoice = async () => {
  try {
    // asks user questions and wait for response
    const answers = await choicePrompts();

    console.log(answers);
    switch (answers.team_member) {
      case "Engineer":
        console.log("hi engineer");
        break;
      case "Intern":
        console.log("hi intern");
        break;
      default:
        console.log("no more employees");
        break;
    }
  } catch (err) {
    // log errors to the user
    console.log(err);
  }
};

// function call to initialize program
manager();
