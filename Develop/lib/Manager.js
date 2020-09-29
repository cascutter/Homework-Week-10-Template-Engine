// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Manager extends Employee {
    constructor(officeNumber) {
        this.officeNumber = officeNumber;
    }

    getOfficeNumber () {
        return this.officeNumber;
    }

    // Method that overrides to return Manager
    getRole() {
        return "Manager";
    }
}

module.exports = Manager;