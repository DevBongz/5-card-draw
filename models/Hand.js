class Hand {
    constructor(cards) {
      this.cards = cards; 
    }
  
    evaluateHand() {
      const valuesMap = { '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10, 'Jack': 11, 'Queen': 12, 'King': 13, 'Ace': 14 };
      const cardValues = this.cards.map(card => valuesMap[card.value]);
      const highestCard = Math.max(...cardValues);
  
      return `Highest card: ${highestCard}`;
    }
  }
  
  module.exports = Hand;
  