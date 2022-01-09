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
    .then(async ({ options }) => {
        switch (options) {
            case 'View All Departments':
                await viewDepartments();
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
    connection.query(
        `SELECT * FROM employees`,
        function(err, results) {
            console.table(results);

            if (err) throw err;
        }
    )

    promptUser();
}

function addDepartment() {
    inquirer.prompt([
        {
            type: "input",
            message: "What is the name of the new department?",
            name: "name"
        }
    ]).then(function (response) {
        addNewDepartment(response)
    })
}

function addNewDepartment(data) {
    connection.query("INSERT INTO department SET ?", {name: data.name },
    function (err, res) {
        if (err) throw err;
        console.log(res);
        viewDepartments();
    }); 
}



// function addRole() {
//     return inquirer.prompt([
//         {
//             type: "input",
//             name: "newRole",
//             message: "What is the new role you'd like to add?"
//         }
//     ]).then(function (answer) {
//         console.log("answer", answer.roleId);

//         var query =
//         `SELECT e.id, e.first_name, e.last_name, r.title, d.name AS department
//         FROM employee e
//         JOIN role r
//         ON e.role_id = r.id
//         JOIN department d
//         ON d.id = r.department_id
//         WHERE d.id =?`

//         connection.query(query, answer.roleId, function (err, res) {
//             if (err) throw err;
//             console.table("response", res);
//             console.log(res.affectedRows + "Roles are views!\n");
//         })
//     })
// }

function addEmployee() {
    console.log("This is working");
}

function updateEmployee() {
    console.log("This is working");
}
