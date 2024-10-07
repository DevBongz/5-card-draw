const Deck = require('../models/Deck');
const Hand = require('../models/Hand');

const startGame = (req, res) => {
  const deck = new Deck();
  deck.shuffle();
  const hand = deck.dealHand();
  console.log("Here is the hand: ", hand);

  const playerHand = new Hand(hand);
  const evaluation = playerHand.evaluateHand();

  console.log('Dealt Hand:', hand.map(card => card.getCard()));
  console.log('Evaluation:', evaluation);

  res.json({
    hand: hand.map(card => card.getCard()),
    evaluation
  });
};

module.exports = {
  startGame
};
