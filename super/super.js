class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  hi() {
    console.log("Hello", this.name);
    console.log("You are", this.age, "years old");
  }
}

class Student extends Person{

    constructor(name, age, gpa) {
        super(name, age);
        this.gpa = gpa;
  }
  
  hello() {
    super.hi();
    console.log("You GPA is", this.gpa);
  }

}

class Teacher extends Person {
  constructor(name, age, group) {
    super(name, age);
    this.group = group;
  }
  hello() {
    super.hi();
    console.log("You Group is", this.group);
  }
}

let std = new Student("Rahim", 23, 3.50);
let techer = new Teacher("Abdur Rahman", 45, "Science");

// console.log(std.name);
// console.log(std.age);
// console.log(std.gpa);


// console.log(techer.name);
// console.log(techer.age);
// console.log(techer.group);

std.hello();
techer.hello();

