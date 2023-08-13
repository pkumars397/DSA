/* Create a class named 'Member' having the following attributes:
Data Attributes of Member Class
1 - Name
2 - Age
3 - Phone number
4 - Address
5 - Salary
It also has a method named 'printSalary' which prints the salary of the members.

Two classes 'Employee' and 'Manager' inherits the 'Member' class. The 'Employee' and 'Manager' classes have attributes 'specialization' and 'department' respectively.

Both these classes will also have a method print_details.

Print_details of Employee class will print name & 'specialization' and will also call the printSalary method.

Print_details of Manager class will print name & 'department' and will also call the printSalary method.

Now, assign name, age, phone number, address and salary to an employee and a manager by making an object of both of these classes.
and print the same.

*/
class Member {
  constructor(n, a, p, add, s) {
    this.Name = n;
    this.Age = add;
    this.Phone_number = p;
    this.Address = a;
    this.Salary = s;
  }
  printSalary(){
    console.log(this.Salary)
}
}

class Employee extends Member {
  constructor(n, a, p, add, s, spec) {
    super(n, a, p, add, s);
    this.specialization = spec;
  }
  print_details() {
    console.log(this.Name);
    console.log(this.specialization);
    // super.printSalary()
    this.printSalary()
  }
}

class Manager extends Member {
  constructor(na,aa,pa,adda,sa,depart) {
    super(na,aa,pa,adda,sa);
    this.department = depart;
  }
  print_details() {
    console.log(this.Name);
    console.log(this.department);
  }
}

var e1 = new Employee(
  "Prashant",
  23,
  9199852168,
  "Machhagra",
  50000,
  "Engineer"
);
e1.print_details();
var obj_Man = new Manager("babu", 100, "1234", "Bangalore", 1000, "JP");
obj_Man.print_details();
