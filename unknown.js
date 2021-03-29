module.exports = {
  name: `unknown`,
  description: `This is the bot's automated response (as an EMBED) to the typing of an unrecognized command.`,

  execute(message, ARGS, userInput, DISCORD) {
    var placeholder;

    if (userInput.length <= 15) {
      placeholder = `["${userInput}"]`;
    } else {
      placeholder = `the input value`;
    }

    const UNKNOWN_EMBED = new DISCORD.MessageEmbed()
      .setColor(`#a01a40`)
      .setTitle(`[ERROR]: Unrecognized Command!\n`)
      .setDescription(`​`) /* Zero-Width WHITESPACE CHARACTER */
      .addFields({
        name: `Sorry, but ${placeholder} isn't a recognized command.`,
        value: `Type "--help" for a list of available commands.`,
      });

    message.channel.send(UNKNOWN_EMBED);
  },
};
