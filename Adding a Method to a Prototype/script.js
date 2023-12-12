function Student(n) {
  this.name = n;

}
const student = new Student("Anusha");
console.log(student.name);

Student.prototype.printDetails = function() {
  console.log(`Hello, my name in ${this.name}`);
}
student.printDetails(); // Hello, my name in Anusha