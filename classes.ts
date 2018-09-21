class Person {
  protected name: string;
  protected age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Employee extends Person {
  private department: string;

  constructor(name: string, age: number, department: string) {
    super(name, age);
    this.department = department;
  }

  public getInfo() {
    return `${this.name}, ${this.age}, ${this.department}`
  }
}

let Bob = new Employee("Bob", 22, "remote");

console.log(Bob.getInfo());

abstract class Animal {
  abstract makeSound(): void;
  move(): void {
    console.log("roaming...");
  }
}