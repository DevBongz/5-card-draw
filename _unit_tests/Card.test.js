// Import the necessary module
const Card = require('../models/Card');

describe('Card', () => {
  test('should initialize with correct suit and value', () => {
    const card = new Card('Hearts', 'Ace');
    expect(card.suit).toBe('Hearts');
    expect(card.value).toBe('Ace');
  });

  test('should return correct card description', () => {
    const card = new Card('Diamonds', '10');
    expect(card.getCard()).toBe('10 of Diamonds');
  });
});
