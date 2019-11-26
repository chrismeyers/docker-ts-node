export class Greeter {
  static punctuation: string = '!';
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
  greet() {
    return `Hello, ${this.greeting}${Greeter.punctuation}`;
  }
}
