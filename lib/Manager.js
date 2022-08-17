const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, office) {
    super(name, id, email);

    this.office = office;
  }

  getRole() {
    return "Manager";
  }
  getSpecialCall() {
    return `<div class="place">Office: ${this.office}</div>`;
  }
}

module.exports = Manager;
