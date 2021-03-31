module.exports = {
  name: `unknown`,
  description: `This is the bot's automated response (as an EMBED) to the typing of an unrecognized command.`,

  execute(message, ARGS, userInput, DISCORD) {
    var placeholder;

    if (userInput.length <= 15) {
      placeholder = `"${userInput}"`;
    } else {
      placeholder = `the input value`;
    }

    const UNKNOWN_EMBED = new DISCORD.MessageEmbed()
      .setColor(`#a01a40`)
      .setTitle(`ERROR: UNRECOGNIZED COMMAND`)
      .setDescription(
        `Sorry, but \`${placeholder}\` is not a recognized command.`
      )
      .setFooter(`Type "--help" for a list of all available commands.`);

    message.channel.send(UNKNOWN_EMBED);
  },
};
