const mysql = require('mysql2');
const inquirer = require('inquirer');
const cTable = require('console.table');


// Inquirer options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Arabella2022!$100',
    database: 'employees_dB',
    
    
})

connection.connect(function(err) {
    if (err) throw err;
    promptUser();
    console.log("Connected!");
})


// View all departments
const promptUser = () => {
    return inquirer.prompt([
        {
            type: "list",
            name: "options",
            message: "What would you like to do?",
            choices: ['View All Departments', 'View All Roles', 'View All Employees', 'Add a Department', 'Add a Role', 'Add an Employee', 'Update an Employee Role', 'Finish']
        }
    ])
    .then(({ options }) => {
        switch (options) {
            case 'View All Departments':
                viewDepartments();
                break;
            case 'View All Roles':
                viewRoles();
                return;
            case 'View All Employees':
                viewEmployees();
                return;
            case 'Add a Department':
                addDepartment();
                return;
            case 'Add a Role':
                addRole();
                return;
            case 'Add an Employee':
                addEmployee();
                return;
            case 'Update an Employee Role':
                updateEmployee();
                return; 
            case 'Finish':
               connection.end();
               return;                
        }
    }) 
};

function viewDepartments() {
    connection.query(
        `SELECT * FROM department`,
        function(err, results) {
            console.table(results);

            if (err) throw err;
        }
    )

    promptUser();
}

function viewRoles() {
    connection.query(
        `SELECT * FROM roles`,
        function(err, results) {
            console.table(results);

            if (err) throw err;
        }
    )

    promptUser();
}

function viewEmployees() {
    console.log("This is working");
}

function addDepartment() {
    // DO I JUST USE 'INSERT INTO' FOR THE NEXT 3 ITEMS? Inquirer prompt then query
    console.log("This is working");
}

function addRole() {
    console.log("This is working");
}

function addEmployee() {
    console.log("This is working");
}

function updateEmployee() {
    console.log("This is working");
}
