import Example from "./example"
import * as library from "./library"

describe('Example', () => {
  document.body.innerHTML = `
    <div id="data"></div>
  `;

  global.fetch = jest.fn(() => Promise.resolve({
    'json': jest.fn(cb => [
      { 'name': "repo1" },
      { 'name': "repo2" }
    ])
  }));

  it('bmi works', () => {
    expect(library.bmi(1, 2)).toBe("20");
  });

  describe('#load', () => {
    it('populates the repo data on the page', async () => {
      let example = new Example();
      let data = await example.load();
      let html = document.getElementById("data").innerHTML;
      let structure = "<ul><li>repo1</li><li>repo2</li></ul>";
      expect(html).toBe(structure)
    });
  })
});
