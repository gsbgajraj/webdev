class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    introduce() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
  }
  
  class Worker extends Person {
    constructor(name, age, jobTitle, salary) {
      super(name, age);
      this.jobTitle = jobTitle;
      this.salary = salary;
    }
  
    displayJobInfo() {
      console.log(`I am a ${this.jobTitle} with a salary of ${this.salary}.`);
    }
  }
  
  const intern = new Worker("Alex", 21, "Intern", 20000);
  intern.introduce(); // Output: Hello, my name is Alex and I am 21 years old.
  intern.displayJobInfo(); // Output: I am an Intern with a salary of 20000.
  
  const manager = new Worker("John", 35, "Manager", 50000);
  manager.introduce(); // Output: Hello, my name is John and I am 35 years old.
  manager.displayJobInfo(); // Output: I am a Manager with a salary of 50000.
  