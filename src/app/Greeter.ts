export class Greeter {
  static punctuation: string = '!';
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  greet() {
    return `Hello, ${this.name}${Greeter.punctuation}`;
  }
}
