export class Strawhats{
  id: Number;
  firstName: String;
  lastName: String;
  age: Number;
  bounty?: Number;


  constructor(id: Number, firstName: String, lastName: String, age: Number, bounty: Number) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.bounty = bounty;
  }
}
