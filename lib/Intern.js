const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);

    this.school = school;
  }
  getSchool() {
    return `The School I went to is ${this.school}`;
  }

  getRole() {
    return "Intern";
  }
}

module.exports = Intern;
