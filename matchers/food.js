export default class Food {
  constructor() { }

  tax(amount) {
    return amount * 0.20;
  }

  amFull() {
    return null;
  }

  cashOnHand() {
    return 0;
  }

  averageTipAmount() {
    return 5.25;
  }

  specialtyDish() {
    return "eggs benedict";
  }

  recipe() {
    return [
      'eggs',
      'bacon',
      'grits',
      'bisquits',
      'butter',
      'gravy'
    ]
  }

  burn() {
    throw new Error('Do not burn the recipe!');
  }
}
