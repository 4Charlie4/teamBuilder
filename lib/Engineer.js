const Employee = require("./Employee");
class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);

    this.github = github;
  }

  getGithub() {
    return `https://github.com/${this.github}`;
  }

  getRole() {
    return "Engineer";
  }
  getSpecialCall() {
    return `<div class="place">Github: <a href="${this.getGithub()}">${
      this.github
    }</a></div>`;
  }
}

module.exports = Engineer;
