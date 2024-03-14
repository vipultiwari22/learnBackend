const random = (req, res) => {
  let rnadom = Math.floor(Math.random() * 10);
  res.send(`Random Number :${rnadom}`); // Generates a random integer between 0 and 9
};

module.exports = random;
