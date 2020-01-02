import Data from "./data";

describe('Data', () => {
  let data = '';

  beforeEach(() => {
    data = new Data();
  });

  describe('#getData', () => {
    it('calls the callback', () => {
        function callback(data) {
          expect(data).toBe('test');
          done();
        }

        data.getData(callback);
      });
  });
});
