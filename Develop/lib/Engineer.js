// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(github) {
        this.github = github;
    }

    // Method that returns GitHub username
    getGithub() {
        return this.github;
    }

    // Method that overrides to return Engineer
    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;