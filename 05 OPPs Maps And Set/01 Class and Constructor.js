class Student {
  constructor(name = "Jhon", r = 2) {
    this.Name = name;
    this.roll_number = r;
  }
}

var ram = new Student("Ram", 4);
console.log(ram.roll_number);
var z = new Student();
console.log(z.Name);
