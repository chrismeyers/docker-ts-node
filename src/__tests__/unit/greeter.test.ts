import { Greeter } from '../../app/Greeter';

test('greet everyone', () => {
  let greeter: Greeter = new Greeter('world');
  expect(greeter.greet()).toBe('Hello, world!');
});
