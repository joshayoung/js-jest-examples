import Example from "./example"
import * as library from "./library"

describe('Tests', () => {
  document.body.innerHTML = `
    <div id="data"></div>
  `;

  global.fetch = jest.fn(() => Promise.resolve({
    'json': jest.fn(cb => [
      { 'name': "repo1" },
      { 'name': "repo2" }
    ])
  }));

  test('returns the correct value', () => {
    let example = new Example();
    expect(example.test()).toBe("test");
  });

  test('bmi works', () => {
    expect(library.bmi(1, 2)).toBe("20");
  });

  test('the load function', async () => {
    let example = new Example();
    let data = await example.load();
    expect(document.getElementById("data").innerHTML).toBe("<ul><li>repo1</li><li>repo2</li></ul>")
  });
})
