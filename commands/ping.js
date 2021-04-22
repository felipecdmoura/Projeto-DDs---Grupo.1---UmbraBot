module.exports = {
  name: `ping`,
  description: `This is a basic ping-pong command (mostly for testing purposes).`,
  execute(message, ARGS) {
    message.channel.send(`pong!`);
  },
};
