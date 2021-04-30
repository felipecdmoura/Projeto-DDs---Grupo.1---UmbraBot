module.exports = {
  name: `ping`,
  description: `Answers "pong!" (mostly for testing purposes).`,
  syntax: `--ping`,

  // CODE BELOW THIS LINE

  execute(BOT, message, ARGS, DISCORD) {
    message.channel.send(`pong!`);
  },
};
