module.exports = {
  randomTurn() {
    const players = ['playerOne', 'playerTwo']
    let rand = players[Math.floor(Math.random() * players.length)];

    return rand
  }
};