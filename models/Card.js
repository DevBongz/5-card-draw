class Card {
    constructor(suit, value) {
      this.suit = suit;
      this.value = value; 
    }
  
    getCard() {
      return `${this.value} of ${this.suit}`;
    }
  }
  
  module.exports = Card;