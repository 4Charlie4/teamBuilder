const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);

    this.school = school;
  }
  getSchool() {
    return `${this.school}`;
  }

  getRole() {
    return "Intern";
  }
  getSpecialCall() {
    return `<div class="place">School: ${this.school}</div>`;
  }
}

module.exports = Intern;
