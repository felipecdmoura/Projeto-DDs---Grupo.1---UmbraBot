const FS = require(`fs`);

module.exports = {
  name: `help`,
  description: `This command displays a list of all available commands and their descriptions.`,
  syntax: `--help`,

  // CODE BELOW THIS LINE

  execute(BOT, message, ARGS, DISCORD) {
    // STEP [01] -
    const COMMAND_FILES = FS.readdirSync(`./commands/`).filter((file) =>
      file.endsWith(`.js`)
    );

    // STEP [02] - Construct the text of the --help embed based on all the command's metadata.
    var embedDescription = ``;

    for (const FILE of COMMAND_FILES) {
      const COMMAND = require(`../commands/${FILE}`);
      if (COMMAND.name) {
        switch (COMMAND.name) {
          case `help`:
          case `unknown`:
            continue;

          default:
            embedDescription += `**• ${COMMAND.name.toUpperCase()}**\n${
              COMMAND.description
            }\n**syntax:** \`${COMMAND.syntax}\`\n\n`;

            break;
        }
      } else {
        continue;
      }
    }

    // STEP [03] - Construct the --help EMBED message.
    const HELP_EMBED = new DISCORD.MessageEmbed()
      .setColor(`BLURPLE`)
      .setTitle(
        `COMMAND LIST - ${BOT.user.username} BOT #${BOT.user.discriminator}`
      )
      .setDescription(embedDescription)
      .setFooter(
        `${BOT.user.username} BOT #${BOT.user.discriminator} - Always happy to be of service!`,
        `https://cdn.discordapp.com/avatars/824583769255051274/3482cdf346348b2be93ea9e7c575bdac.png?size=256`
      );

    // STEP [04] - Send the EMBED message.
    message.channel.send(HELP_EMBED);
  },
};
