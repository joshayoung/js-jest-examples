import Measurements from "./measurements"

describe('Measurements', () => {
  describe('#bmi', () => {
    it('returns the correct output', () => {
      let measurements = new Measurements();
      expect(measurements.bmi(1, 2)).toBe("20");
    });
  });

  describe('#bmi with mock', () => {
    let measurements = new Measurements();
    let spy = jest.spyOn(measurements, 'bmi').mockImplementation(() => '10');

    let result = measurements.bmi(1, 2);

    expect(result).toBe("10");
    expect(spy).toHaveBeenCalled();
    expect(spy).toBeCalledWith(1, 2);
  });
});