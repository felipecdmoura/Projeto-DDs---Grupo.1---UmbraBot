module.exports = {
  name: `help`,
  description: `This command displays a list of all available commands and their descriptions.`,

  // CODE BELOW THIS LINE

  execute(message, DISCORD, BOT) {
    const HELP_EMBED = new DISCORD.MessageEmbed()
      .setColor(`#a01a40`)
      .setTitle(
        `COMMAND LIST - ${BOT.user.username} BOT #${BOT.user.discriminator}`
      )
      .addFields(
        {
          name: `\`--kick\``,
          value: `${BOT.commands.get(`kick`).description}\n
          **syntax** \`${BOT.commands.get(`kick`).syntax}​\`\n​`, // ZERO-WIDTH WHITESPACE CHARACTER
        },
        {
          name: `\`--ban\``,
          value: `${BOT.commands.get(`ban`).description}​\n
         **syntax** \`${BOT.commands.get(`ban`).syntax}\`\n​`, // ZERO-WIDTH WHITESPACE CHARACTER
        },
        {
          name: `\`--unban\``,
          value: `${BOT.commands.get(`unban`).description}\n
          **syntax** \`${BOT.commands.get(`unban`).syntax}\`​\n​`, // ZERO-WIDTH WHITESPACE CHARACTER
        },
        {
          name: `\`--lots\``,
          value: `${BOT.commands.get(`lots`).description}\n
          **syntax** \`${BOT.commands.get(`lots`).syntax}​\`\n​`, // ZERO-WIDTH WHITESPACE CHARACTER
        },
        {
          name: `\`--ping\``,
          value: `${BOT.commands.get(`ping`).description}\n​`, // ZERO-WIDTH WHITESPACE CHARACTER
        }
      )
      .setFooter(
        `${BOT.user.username} BOT #${BOT.user.discriminator}`,
        `https://cdn.discordapp.com/avatars/824583769255051274/3482cdf346348b2be93ea9e7c575bdac.png?size=256`
      );

    message.channel.send(HELP_EMBED);
  },
};
