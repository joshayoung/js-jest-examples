import Data from "./data";

describe('Data', () => {
  let data = '';

  beforeEach(() => {
    data = new Data();
  });

  describe('#getData', () => {
    it('calls the callback', done => {
        function callback(data) {
          expect(data.slip.advice).toBe('Remember that spiders are more afraid of you, than you are of them.');
          done();
        }

        data.getData(callback);
      });
  });
});
