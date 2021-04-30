module.exports = {
  name: `unknown`,
  description: `This is the bot's automated response (as an EMBED) to the typing of an unrecognized command.`,

  // CODE BELOW THIS LINE

  execute(BOT, message, ARGS, DISCORD) {
    if (
      message.content.slice(process.env.PREFIX.length).split(" ")[0].length == 0
    ) {
      message.channel.send("a");
    } else {
      var unrecognizedCommand = message.content.split(" ")[0];
      if (unrecognizedCommand.length - process.env.PREFIX.length <= 15) {
        placeholder = unrecognizedCommand;
      } else {
        placeholder = `the input value`;
      }

      message.channel.send(
        `Sorry, but \`${placeholder}\` is not a recognized command.\nDouble check for typos or type \`--help\` for a list of existing commands.`
      );
    }
  },
};
