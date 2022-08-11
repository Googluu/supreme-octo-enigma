/* eslint-disable prettier/prettier */
const myName = "name";
const myAge = 17;
const sum = (a: number, b: number) => {
  return a + b
}
sum(12, 23);

class Persona {
  // private age;
  // private name;

  constructor(private age: number, private name: string) {
    this.age = age;
    this.name = name;
  }

  getSummary() {
    return `my name is ${this.name} ${this.age}`;
  }
}

const nam = new Persona(17, 'John');
nam.getSummary();
