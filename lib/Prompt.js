const inquirer = require("inquirer");
const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");

class Prompt {

  getManager() {

    inquirer.prompt([
      {
        type: "input",
        name: "mName",
        message: "Enter the name of your team's manager.",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please Enter the name of your team's manager.");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "mID",
        message: "Enter their Employee ID.",
        validate: (idInput) => {
          if (idInput) {
            return true;
          } else {
            console.log("Please enter the Employee's ID");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "mEmail",
        message: "Please Enter their Email.",
        validate: (emailInput) => {
          if (emailInput) {
            return true;
          } else {
            console.log("Please enter the Employee's Email");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "office",
        message: "Please enter the office number",
        validate: (officeInput) => {
          if (officeInput) {
            return true;
          } else {
            console.log("Please enter the Employee's Email");
            return false;
          }
        },
      },
    ]);
  }


  getTeam() {
    inquirer;
  }
}


module.exports = Prompt;
