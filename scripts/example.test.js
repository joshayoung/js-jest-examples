import Example from "./example"
import * as library from "./library"

test('returns the correct value', () => {
  let example = new Example();
  expect(example.test()).toBe("test");
});

test('bmi works', () => {
  expect(library.bmi(1, 2)).toBe("20");
})
