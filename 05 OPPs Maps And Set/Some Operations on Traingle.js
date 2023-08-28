class traingle {
  constructor(a = 0, b = 0, c = 0) {
    this.side1 = a;
    this.side2 = b;
    this.side3 = c;
  }
  calculate_area() {
    return this.side1 * this.side2 * this.side3;
  }
  calculate_perimeter() {
    return this.side1 + this.side2 + this.side3;
  }
}

var t = new traingle();
console.log(t.calculate_area());

var t = new traingle(3, 4, 5);
console.log(t.calculate_area());
console.log(t.calculate_perimeter());
