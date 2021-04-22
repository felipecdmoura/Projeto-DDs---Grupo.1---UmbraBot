module.exports = {
  name: `help`,
  description: `This command displays a list of all available commands and their descriptions.`,

  execute(message, ARGS, DISCORD, BOT) {
    const HELP_EMBED = new DISCORD.MessageEmbed()
      .setColor(`#a01a40`)
      .setTitle(
        `\`COMMAND LIST - ${BOT.user.username} BOT #${BOT.user.discriminator}\``
      )
      .addFields(
        {
          name: `\`--kick\``,
          value: `${BOT.commands.get(`kick`).description}​`,
        },
        {
          name: `\`--ban\``,
          value: `${BOT.commands.get(`ban`).description}​`,
        },
        {
          name: `\`--unban\``,
          value: `${BOT.commands.get(`unban`).description}​`,
        },
        {
          name: `\`--ping\``,
          value: `${BOT.commands.get(`ping`).description}​`,
        }
      )
      .setFooter(
        `${BOT.user.username} BOT #${BOT.user.discriminator}`,
        `https://cdn.discordapp.com/avatars/824583769255051274/3482cdf346348b2be93ea9e7c575bdac.png?size=256`
      );

    message.channel.send(HELP_EMBED);
  },
};
