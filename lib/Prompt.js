const inquirer = require("inquirer");
const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");
const generateHTML = require("../src/generateHTML");

class Prompt {
  constructor() {
    this.manager;
    this.engineer = [];
    this.intern = [];
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
        this.getTeam();
      });
  }

  getTeam() {
    //start other employee
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
        if (teamBuild === "Engineer") this.getEngineer();
        if (teamBuild === "Intern") this.getIntern();
        if (teamBuild === "Finish")
          generateHTML([this.manager, ...this.engineer, ...this.intern]);
      });
  }

  getEngineer() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "eName",
          message: "Please enter the employee's name.",
          validate: (eNameInput) => {
            if (eNameInput) {
              return true;
            } else {
              return false;
            }
          },
        },
        {
          type: "input",
          name: "eID",
          message: "Please enter employee's ID.",
          validate: (eID) => {
            if (eID) {
              return true;
            } else {
              return false;
            }
          },
        },
        {
          type: "input",
          name: "eEmail",
          message: "Please enter employee's email",
          validate: (eEmail) => {
            if (eEmail) {
              return true;
            } else {
              return false;
            }
          },
        },
        {
          type: "input",
          name: "github",
          message: "What is the username for your engineer's github?",
          validate: (github) => {
            if (github) {
              return true;
            } else {
              return false;
            }
          },
        },
      ])
      .then(({ eName, eID, eEmail, github }) => {
        this.engineer.push(new Engineer(eName, eID, eEmail, github));
        console.log(this.engineer);
        return this.getTeam();
      });
  }

  getIntern() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "iName",
          message: "Please enter the employee's name.",
          validate: (iNameInput) => {
            if (iNameInput) {
              return true;
            } else {
              return false;
            }
          },
        },
        {
          type: "input",
          name: "iID",
          message: "Please enter employee's ID.",
          validate: (iID) => {
            if (iID) {
              return true;
            } else {
              return false;
            }
          },
        },
        {
          type: "input",
          name: "iEmail",
          message: "Please enter employee's email",
          validate: (iEmail) => {
            if (iEmail) {
              return true;
            } else {
              return false;
            }
          },
        },
        {
          type: "input",
          name: "school",
          message: "What school is your intern going to?",
          validate: (school) => {
            if (school) {
              return true;
            } else {
              return false;
            }
          },
        },
      ])
      .then(({ iName, iID, iEmail, school }) => {
        this.intern.push(new Intern(iName, iID, iEmail, school));
        console.log(this.intern);
        return this.getTeam();
      });
  }
}

module.exports = Prompt;
