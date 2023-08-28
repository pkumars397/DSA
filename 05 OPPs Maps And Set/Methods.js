class Student {
  constructor(name = "Jhon", r = 2) {
    this.Name = name;
    this.roll_number = r;
  }

  display() {
    console.log(this.Name);
    console.log(this.roll_number);
  }
}

var ram = new Student("Ram", 4);
console.log(ram.roll_number);
var z = new Student();
console.log(z.Name);

ram.display(); /* Methods calling by object*/
z.display();
