module.exports = {
  name: `ping`,
  description: `This is a basic ping-pong command (mostly for testing purposes).`,
  syntax: `--ping`,

  // CODE BELOW THIS LINE

  execute(message) {
    message.channel.send(`pong!`);
  },
};
