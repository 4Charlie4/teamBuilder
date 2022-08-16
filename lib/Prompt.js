const inquirer = require("inquirer");
const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");

class Prompt {
  constructor() {
    this.manager;
  }
  //Prompts for information about Manager
  getManager() {
    inquirer
      .prompt([
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
          validate: (idNumber) => {
            if (idNumber) {
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
          validate: (officeNumber) => {
            if (officeNumber) {
              return true;
            } else {
              console.log("Please enter the Employee's Email");
              return false;
            }
          },
        },
      ])
      //Creates Manager Object
      .then(({ mName, mID, mEmail, office }) => {
        this.manager = new Manager(mName, mID, mEmail, office);
        console.log(this.manager);
      });
  }

  getTeam(teamData) {
    if (!teamData.engineer) {
      teamData.engineer = [];
    }
    if (!teamData.intern) {
      teamData.intern = [];
    }
    inquirer
      .prompt([
        {
          type: "list",
          name: "teamBuild",
          message: "Add An employee.",
          choices: ["Engineer", "Intern", "Finish"],
        },
      ])
      .then(({ teamBuild }) => {
        if (teamBuild === "Engineer") {
          inquirer.prompt({});
        }
      });
  }
}

module.exports = Prompt;
