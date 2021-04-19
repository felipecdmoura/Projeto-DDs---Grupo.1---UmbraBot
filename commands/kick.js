module.exports = {
  name: `kick`,
  description: `This command KICKS a user from the server (ONE USER AT A TIME).`,
  syntax: `--kick @user reason`,

  // CODE BELOW THIS LINE

  async run(message, ARGS, DISCORD) {
    const KICKING_TARGET = message.mentions.users.first();

    //  -----------------------------
    // [01] - Checking PERMISSION(s):
    if (!message.member.hasPermission(`KICK_MEMBERS`))
      return message.channel.send(
        `<@${message.member.id}>\nYou do not have permission to kick members!`
      );

    // ------------------------------
    // [02] - Checking the kicking TARGET:
    if (!ARGS[0]) {
      return message.channel.send(
        `Please specify a member to be kicked!\nsyntax: \`--kick @member reason\``
      );
    }

    if (!KICKING_TARGET) {
      return message.channel.send(
        `The specified user isn't valid and/or is not in the server!\nsyntax: \`--kick @member reason\``
      );
    }

    let targetHasAdmin = message.guild
      .member(KICKING_TARGET)
      .hasPermission(`ADMINISTRATOR`);

    let targetHasKick = message.guild
      .member(KICKING_TARGET)
      .hasPermission(`KICK_MEMBERS`);

    if (
      targetHasAdmin ||
      (!message.member.hasPermission(`ADMINISTRATOR`) && targetHasKick)
    ) {
      return message.channel.send(
        `I do not have permission to kick this member!`
      );
    }

    // ------------------------------
    // [03] - Kicking the TARGET:
    let reason = ARGS.slice(1).join(` `);
    if (!reason) {
      reason = `No reason given`;
    }

    const KICKING_TARGET_ID = message.guild.members.cache.get(
      KICKING_TARGET.id
    );

    const KICKED_EMBED = new DISCORD.MessageEmbed()
      .setColor(`#a01a40`)
      .setTitle(`\`NOTICE: YOU HAVE BEEN KICKED\``)
      .setDescription(
        `You have been **KICKED** from **${message.guild.name}**.\n`
      )
      .addFields({
        name: `\`REASON:\``,
        value: `\`${reason.toUpperCase()}​\``,
      })
      .setFooter(
        `Make sure to follow them rules next time, bucko!`,
        `https://cdn.discordapp.com/avatars/824583769255051274/3482cdf346348b2be93ea9e7c575bdac.png?size=256`
      );

    try {
      await KICKING_TARGET_ID.kick(reason);
      message.channel.send(
        `The user ${KICKING_TARGET_ID} was succesfully **KICKED**.`
      );

      try {
        await KICKING_TARGET_ID.send(KICKED_EMBED);
        message.channel.send(
          `\`[UPDATE]: The user has been successfully informed of their kicking.\``
        );
      } catch (err) {
        message.channel.send(
          `\`[UPDATE]: I was unable to inform the user of their kicking.\``
        );
      }
    } catch (err) {
      message.channel.send(
        `I was unable to kick ${KICKING_TARGET_ID}.\nMake sure my role is in a higher position than theirs.`
      );
    }
  },
};
