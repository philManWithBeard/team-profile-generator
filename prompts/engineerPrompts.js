const inquirer = require("inquirer");

const engineerPrompts = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "engineer_name",
      message: "What is the engineer's name?",
      validate: (response) => {
        if (response) {
          return true;
        } else {
          console.log("That didn't work. Re-enter your engineers name.");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "engineer_id",
      message: "What is the engineer's id?",
      validate: (response) => {
        if (response) {
          return true;
        } else {
          console.log("That didn't work. Re-enter your engineers id.");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "engineer_email",
      message: "What is your engineer's email?",
      validate: (response) => {
        if (response) {
          return true;
        } else {
          console.log("That didn't work. Re-enter your managers email.");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "engineer_github",
      message: "What is your engineer's github username?",
      validate: (response) => {
        if (response) {
          return true;
        } else {
          console.log(
            "That didn't work. Re-enter your engineer's github username?"
          );
          return false;
        }
      },
    },
  ]);
};

module.exports = engineerPrompts;
