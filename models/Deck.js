const Card = require('./Card'); 

class Deck {
    constructor() {
      this.suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
      this.values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
      this.deck = [];
      this.createDeck();
    }
  
    createDeck() {
      this.deck = [];
      for (let suit of this.suits) {
        for (let value of this.values) {
          this.deck.push(new Card(suit, value));
        }
      }
    }
  
    shuffle() {
      for (let i = this.deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
      }
    }
  
    dealHand() {
      if (this.deck.length < 5) {
        throw new Error('Not enough cards left to deal a hand.');
      }
      return this.deck.splice(0, 5);
    }
  }
  
  module.exports = Deck;
  