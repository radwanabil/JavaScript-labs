class Person {
    #healthRate;
    constructor(fullName, money, sleepMode, age) {
        this.fullName = fullName;
        this.money = money;
        this.sleepMode = sleepMode;
        this.age = age;

    }
    set setHealthRate(healthRate) {
        if (healthRate < 0) {
            this.#healthRate = 0
        } else if (healthRate > 100) {
            this.#healthRate = 100;
        } else {
            this.#healthRate = healthRate;
        }
    }
    get getHealthRate() {
        return this.#healthRate;
    }

    Sleep(hours) {
        if (hours == 7) {
            this.sleepMode = "Happy";
        } else if (hours < 7) {
            this.sleepMode = "Tired";
        } else if (hours > 7) {
            this.sleepMode = "Lazy";
        }
        return this.sleepMode
    }

    Eat(meals) {
        if (meals == 3) {
            this.#healthRate = "100";
        } else if (meals == 2) {
            this.#healthRate = "75";
        } else if (meals == 1) {
            this.#healthRate = "50";
        }
        return this.#healthRate
    }
    Buy(items) {
        if (items == 1) {
            this.money = this.money - 10;
        }
        return this.money
    }
}

class Employee extends Person {
    #salary;
    constructor(ID, email, workMood, isManager, fullName, money, sleepMode, age) {

        super(fullName, money, sleepMode, age);
        this.ID = ID;
        this.email = email;
        this.workMood = workMood;
        this.isManager = isManager;


    }
    set setSalary(salary) {
        if (salary < 1000) {
            this.#salary = 1000
        } else if (salary > 1000) {
            this.#salary = salary;
        } else {
            this.#salary = salary;
        }
    }
    get getSalary() {
        return this.#salary;
    }

    Work(hours) {
        if (hours == 8) {
            this.workMood = "Happy";
        } else if (hours > 8) {
            this.workMood = "Tired";
        } else if (hours < 8) {
            this.workMood = "Lazy";
        }
        return this.workMood
    }
}

class Office {
    constructor(name, employees) {
        this.name = name;
        this.employees = employees;
    }
    getAllEmpolyees() { //get all current employees
        return this.employees;
    }
    getEmployee(empID) { //get employee data of given employee id, and if he is a manager display all info except salary
        var employee = 0
        this.employees.forEach(element => {
            if (element.ID == empID) {

                employee = element;
            }
        });
        if (employee.isManager == "manager") {
            return alert("Manager name is: " + employee.fullName + "\nEmail: " + employee.email + "\nworkMood: " + employee.workMood);
        } else if (employee.isManager == "normal") {
            return alert("Employee name is: " + employee.fullName + "\nSalary is: " + employee.getSalary + "\nEmail: "
                + employee.email + "\nworkMood: " + employee.workMood);
        } else {
            return alert("Not found");
        }
    }
    hire(employee) { //hires the given employee.
        this.employees.push(employee);
    }
    fire(empID) { //fires the given employee.
        let i = 0
        for (let emp of this.employees) {
            if (emp.ID == empID) {
                return delete this.employees[i];
            }
            i++;
        }
    }
}
const radwa = new Employee("1", "radwa@gmail.com", "lazy", "manager", "Radwa Nabil", "1000", "happy", "900", "23");
radwa.setSalary = 5000;
radwa.setHealthRate = 120;
const rima = new Employee("2", "rima@gmail.com", "lazy", "normal", "Rima Nabil", "1000", "lazy", "900", "6");
const omer = new Employee("3", "omer@gmail.com", "lazy", "normal", "omer Nabil", "1000", "lazy", "900", "16");
rima.setSalary = 500;
rima.setHealthRate = -1;
const employeeObj = [];
employeeObj.push(radwa);
employeeObj.push(rima);
employeeObj.push(omer);
const office1 = new Office("office1", employeeObj);




function menu() {
    var stop = false;
    do {
        if (operation == "q") break;
        var operation = prompt("1-To add an employee(add)\n2-To get employee/manager(get)\n3-To delete employee/manager(delete)\n4-To exit(q)");
        switch (operation) {
            case "add": {
                var empOrManager = prompt("(manager) or (normal)");
                var name = prompt("Enter Full Name: ");
                var age = prompt("Enter Age: ");
                var id = prompt("Enter ID: ");
                var email = prompt("Enter Email: ");
                var salary = prompt("Enter Salary: ");
                const emp = new Employee(id, email, "happy", empOrManager, name, "1000", "tired", age);
                emp.setSalary = salary;
                office1.hire(emp);
                break;

            }
            case "get": {
                var emp_id = prompt("Enter ID of employee: ");
                office1.getEmployee(emp_id);
                break;

            }

            case "delete": {
                var empToDelete = prompt("Enter ID of employee: ");
                office1.fire(empToDelete);
                alert("Employee is deleted");
                break;
            }
            case "q":
                stop = true;
                break;
        }
    } while (!stop)
}
menu();


