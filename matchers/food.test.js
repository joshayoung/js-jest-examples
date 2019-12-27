import Food from "./food"


describe('Food', () => {
  let food = '';

  beforeEach(() => {
    food = new Food();
  });

  describe('#tax', () => {
    it('returns the correct tax', () => {
      const tax = food.tax(35);

      expect(tax).toBe(7);
    });

    it('does not return the wrong percentage', () => {
      const tax = food.tax(35);

      expect(tax).not.toBe(10);
    });
  });

  describe('#amFull', () => {
    it('returns null and matches others', () => {
      const amFull = food.amFull();

      expect(amFull).toBeNull();
      expect(amFull).toBeDefined();
      expect(amFull).not.toBeUndefined();
      expect(amFull).not.toBeTruthy();
      expect(amFull).toBeFalsy();
    });
  });

  describe('#cashOnHand', () => {
    it('returns zero and matches others', () => {
      const cashOnHand = food.cashOnHand();

      expect(cashOnHand).not.toBeNull();
      expect(cashOnHand).toBeDefined();
      expect(cashOnHand).not.toBeUndefined();
      expect(cashOnHand).not.toBeTruthy();
      expect(cashOnHand).toBeFalsy();
    });
  });

  describe('#averageTipAmount', () => {
    it('is in the correct range', () => {
      const averageTipAmount = food.averageTipAmount();

      expect(averageTipAmount).toBeGreaterThan(3);
      expect(averageTipAmount).toBeGreaterThanOrEqual(5.25);
      expect(averageTipAmount).toBeLessThan(10);
      expect(averageTipAmount).toBeLessThanOrEqual(5.25);
      expect(averageTipAmount).toBe(5.25);
      expect(averageTipAmount).toEqual(5.25);
    });
  });

  describe('#specialtyDish', () => {
    it('matches the dish', () => {
      const specialtyDish = food.specialtyDish();

      expect(specialtyDish).toMatch(/eggs/);
    });

    it('does not match the wrong dish', () => {
      const specialtyDish = food.specialtyDish();

      expect(specialtyDish).not.toMatch(/ham/);
    });
  });

  describe('#recipe', () => {
    it('contains the correct value', () => {
      const recipe = food.recipe();

      expect(recipe).toContain('bacon');
    });
  });

  describe('#burn', () => {
    it('throws an error', () => {
      const burn = food.burn;

      expect(burn).toThrow();
      expect(burn).toThrow(Error);
      expect(burn).toThrow('Do not burn the recipe!');
      expect(burn).toThrow(/not burn/);
    });
  });
});
