module.exports = {
  name: `kick`,
  description: `This command KICKS a user from the server (ONE USER AT A TIME).`,

  // KICK COMMAND CODE BELOW THIS LINE

  execute(message, ARGS, DISCORD) {
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
      return message.channel.send(`Please specify a member to be kicked!`);
    }

    if (!KICKING_TARGET) {
      return message.channel.send(
        `The specified user isn't valid and/or is not in the server!`
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
        `You have no permission to kick this member!`
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
      .setTitle(`YOU'VE BEEN KICKED\n`)
      .setDescription(
        `The user **${KICKING_TARGET_ID}** has been successfully **KICKED** from **${message.guild.name}**.`
      )
      .addFields({
        name: `Reason:`,
        value: `${reason}.`,
      })
      .setTimestamp();

    message.channel
      .send(KICKED_EMBED)
      .then(() => KICKING_TARGET_ID.kick(reason));
  },
};
