/*  Create a class "PARENT" with a method print that prints "this is a parent class" and its Child class "CHILD" with a method print that prints "this is a child class". Now, create an object for each of the class and call

1 - method of parent class by object of parent class

2 - method of child class by object of child class

3 - method of parent class by object of child class   */

class PARENT {
  print() {
    console.log("this is a parent class");
  }
}

class CHILD extends PARENT {
  print() {
    console.log("this is a child class");
    super.print();
  }
}
//Do Not change the Below  Code

var obj_parent = new PARENT();
obj_parent.print();

var obj_child = new CHILD();
obj_child.print();
