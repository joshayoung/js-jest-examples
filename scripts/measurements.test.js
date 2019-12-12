import Measurements from "./measurements"

describe('Measurements', () => {
  describe('#bmi', () => {
    it('returns the correct output', () => {
      let measurements = new Measurements();
      expect(measurements.bmi(1, 2)).toBe("20");
    });
  });
});
