const mysql = require('mysql');
const inquirer = require('inquirer');
const Connection = require('mysql2/typings/mysql/lib/Connection');

// Inquirer options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Arabella2022!$100',
    
})

con.connect(function(err) {
    if (err) throw err;
    promptUser();
    console.log("Connected!");
})
// View all departments
const promptUser = () => {
    return inquirer.prompt([
        {
            type: "checkbox",
            name: "options",
            message: "What would you like to do?",
            choices: ['View All Departments', 'View All Roles', 'View All Employees', 'Add a Departmnet', 'Add a Role', 'Add an Employee', 'Update an Employee Role', 'Finish']
        }
    ])
    .then(function ({ options }) {
        switch (options) {
            case 'View All Departments':
                viewDepartments();
                break;
            case 'View All Roles':
                viewRoles();
                break;
            case 'View All Employees':
                viewEmployees();
                break;
            case 'Add a Department':
                addDepartment();
                break;
            case 'Add a Role':
                addRole();
                break;
            case 'Add an Employee':
                addEmployee();
                break;
            case 'Update an Employee':
                updateEmployee();
                break; 
            case 'Finish':
               connection.end();
               break;                
        }
    }) 
};