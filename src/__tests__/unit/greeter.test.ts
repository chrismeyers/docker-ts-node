import { Greeter } from '@app/Greeter';

describe('greetings', () => {
  test('greet everyone', () => {
    let greeter: Greeter = new Greeter();
    expect(greeter.greet()).toBe('Hello, world!');
  });

  test('greet specific person', () => {
    let greeter: Greeter = new Greeter('person');
    expect(greeter.greet()).toBe('Hello, person!');
  });
});
