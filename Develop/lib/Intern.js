// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Intern extends Employee {
    constructor(school) {
        this.school = school;
    }

    // Method that returns School
    getSchool() {
        return this.school;
    }

    // Method that overrides to return Intern
    getRole() {
        return "Intern";
    }
}

module.exports = Intern;