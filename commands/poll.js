const { Message, DiscordAPIError } = require("discord.js");

module.exports = {
  name: `poll`,
  description: `command to set a poll on the channel`,

  async execute(message, ARGS, DISCORD) {
    let pollDescription = ARGS.join(" "); // Set the agruments of the command as the embed message description

    let pollEmbed = new DISCORD.MessageEmbed() // Structure of the embed message the bot sends
      .setTitle(`POLL`)
      .setDescription(pollDescription)
      .setColor(`PURPLE`);
    if (pollDescription.length === 0) {
      // Checks if the user inserted a description for the poll
      message.reply(`Please, describe your poll!`);
    } else {
      let msgEmbed = await message.channel.send(pollEmbed); // Sends the embed message to the channel
      await msgEmbed.react(`👍`); // Reacts with 👍 option
      await msgEmbed.react(`👎`); // Reaction with 👎 option
    }
  },
};
