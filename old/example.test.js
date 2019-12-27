import Example from "./example"
import * as library from "./library"

describe('Example', () => {
  document.body.innerHTML = `
    <div id="data"></div>
    <div id="results"></div>
  `;

  global.fetch = jest.fn(() => Promise.resolve({
    'json': jest.fn(cb => [{
        'name': "repo1"
      },
      {
        'name': "repo2"
      }
    ])
  }));

  describe.skip('#getData', () => {
    it('returns a promise', () => {
      let example = new Example();
      example.getData = jest.fn();
      example.getData.mockResolvedValue("bar");

      let result = example.getData('https://api.github.com/users/joshayoung/repos');

      expect(result).resolves.toBe("bar");
      expect(example.getData).toHaveBeenCalledWith('https://api.github.com/users/joshayoung/repos');
    });
  });

  describe.skip('#load', () => {
    it('populates the repo data on the page', async () => {
      let example = new Example();
      let data = await example.load();
      let html = document.getElementById("data").innerHTML;
      let structure = "<ul><li>repo1</li><li>repo2</li></ul>";
      expect(html).toBe(structure)
    });
  });

  describe('#data', () => {
    it.skip('populates the repo data on the page', done => {
      let example = new Example();
      function callback(val) {
        done();
        return val;
      }
      let returnValue = {
        then: jest.fn(cb => "repo1")
      };

      let spy = jest.spyOn(example, 'getData').mockImplementation(() => {
        returnValue
      });

      // example.getData = jest.fn(() => returnValue );

      let result = example.data(callback);

      // let html = document.getElementById("results").innerHTML;
      // let structure = "<ul><li>repo1</li><li>repo2</li></ul>";
      // expect(html).toBe(structure)
      expect(callback).toHaveBeenCalledWith(returnValue);
      expect(callback()).toBe("the value");

    });
  });

  describe('#myPromise', () => {
    it('resolved successfully', () => {
      let example = new Example();
      expect(example.myPromise()).resolves.toEqual('Yay!');
    });
  });

  describe('#noPromise', () => {
    it('rejects successfully', () => {
      let example = new Example();
      expect(example.noPromise()).rejects.toEqual('No!');
    });
  });
});
