USE employees_db;

INSERT INTO department (name)
VALUES ('SALES');
INSERT INTO department (name)
VALUES ('FINANCE');
INSERT INTO department (name)
VALUES ('ENGINEERING');
INSERT INTO department (name)
VALUES ('LEGAL');

INSERT INTO roles (title, salary, department_id)
VALUES ('SALESPERSON', 80000, 1);
INSERT INTO roles (title, salary, department_id)
VALUES ('ATTORNEY', 250000, 2);
INSERT INTO roles (title, salary, department_id)
VALUES ('ENGINEER', 100000, 3);
INSERT INTO roles (title, salary, department_id)
VALUES ('SALESPERSON MANAGER', 200000, 1);
INSERT INTO roles (title, salary, department_id)
VALUES ('ACCOUNTANT', 200000, 4);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ('John', 'Smith', 1, 1);
INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ('Jane', 'Doe', 2, 2);
INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ('Debbie', 'Downer', 3, 1);
INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ('Johnny', 'Appleseed', 4, 1);
INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ('Jo', 'March', 1, 3);
INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ('Peter', 'Rabbit', 2, 1);
