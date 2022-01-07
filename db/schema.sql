DROP DATABASE IF EXISTS employees_db;

CREATE DATABASE employees_db;

USE employees_db;

-- view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role

-- view all departments table, department names and department ids
CREATE TABLE department (
    id INTEGER NOT NULL AUTO_INCREMENT,
    name VARCHAR(50) NULL,
    PRIMARY KEY (id)
);

-- view all roles table, job title, role id, the department that role belongs to, and the salary for that role
CREATE TABLE roles (
    id INTEGER NOT NULL AUTO_INCREMENT,
    title VARCHAR(50) NULL,
    salary INTEGER NULL,
    department_id INTEGER NULL,
    PRIMARY KEY (id)
);
-- view all employees table, employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
CREATE TABLE employees (
    id INTEGER NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(50) NULL,
    last_name VARCHAR(50) NULL,
    role_id INTEGER NULL,
    PRIMARY KEY (id)
);