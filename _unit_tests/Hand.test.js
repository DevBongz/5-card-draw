const Card = require('../models/Card');
const Hand = require('../models/Hand');

describe('Hand', () => {
  test('should initialize with correct cards', () => {
    const cards = [new Card('Hearts', '2'), new Card('Diamonds', 'Ace')];
    const hand = new Hand(cards);
    expect(hand.cards).toEqual(cards);
  });

  test('should evaluate hand correctly', () => {
    const cards = [
      new Card('Hearts', '2'),
      new Card('Diamonds', '3'),
      new Card('Clubs', 'Ace'),
      new Card('Spades', '10'),
      new Card('Hearts', 'Jack')
    ];
    const hand = new Hand(cards);
    expect(hand.evaluateHand()).toContain('Highest card: 14'); 
  });

  test('should evaluate a different hand correctly', () => {
    const cards = [
      new Card('Hearts', '2'),
      new Card('Diamonds', '3'),
      new Card('Clubs', '5'),
      new Card('Spades', '10'),
      new Card('Hearts', 'King')
    ];
    const hand = new Hand(cards);
    expect(hand.evaluateHand()).toContain('Highest card: 13'); 
  });
});
