class Person{
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    set studentName(name) {
        this.name = name;
    }
    get studentInfo() {
        return this.id + " " + this.name;
    }
}

let s1 = new Person(101, "Rahim");
console.log(s1);

s1.studentName= "Karim";
console.log(s1.name);

console.log(s1.studentInfo)