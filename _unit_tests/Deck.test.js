const Deck = require('../models/Deck'); 
const Card = require('../models/Card'); 

describe('Deck', () => {
  let deck;

  // Run this before each test to set up a new deck
  beforeEach(() => {
    deck = new Deck();
  });

  test('should initialize with 52 cards', () => {
    expect(deck.deck.length).toBe(52);
  });

  test('should create the correct number of cards in the deck', () => {
    const expectedCards = 52; 
    expect(deck.deck).toHaveLength(expectedCards);
  });

  test('should shuffle the deck', () => {
    const originalOrder = [...deck.deck];
    deck.shuffle();
    expect(deck.deck).not.toEqual(originalOrder); 
  });

  test('should deal 5 cards and reduce deck size', () => {
    const hand = deck.dealHand();
    expect(hand.length).toBe(5);
    expect(deck.deck.length).toBe(47);
  });

  test('should not deal more cards than available', () => {
    for (let i = 0; i < 10; i++) {
      deck.dealHand(); 
    }
    expect(deck.deck.length).toBe(2); 

    expect(() => deck.dealHand()).toThrow('Not enough cards left to deal a hand.');
  });

  test('should reset the deck after shuffling', () => {
    deck.shuffle(); 
    const originalDeck = [...deck.deck]; 
    deck.shuffle();
    expect(deck.deck).not.toEqual(originalDeck); 
  });
});
