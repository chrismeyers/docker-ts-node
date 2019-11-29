export class Greeter {
  static punctuation: string = '!';
  name: string;
  constructor(name: string = 'world') {
    this.name = name;
  }
  greet() {
    return `Hello, ${this.name}${Greeter.punctuation}`;
  }
}
