module.exports = {
  name: `ban`,
  description: `This command BANS a user from the server (ONE USER AT A TIME).`,

  // KICK COMMAND CODE BELOW THIS LINE

  execute(message, ARGS, DISCORD) {
    const BANNING_TARGET = message.mentions.users.first();

    //  -----------------------------
    // [01] - Checking PERMISSION(s):
    if (!message.member.hasPermission(`BAN_MEMBERS`))
      return message.channel.send(
        `<@${message.member.id}>\nYou do not have permission to ban members!`
      );

    // ------------------------------
    // [02] - Checking the banning TARGET:
    if (!ARGS[0]) {
      return message.channel.send(`Please specify a member to be banned!`);
    }

    if (!BANNING_TARGET) {
      return message.channel.send(
        `The specified user isn't valid and/or is not in the server!`
      );
    }

    let targetHasAdmin = message.guild
      .member(BANNING_TARGET)
      .hasPermission(`ADMINISTRATOR`);

    let targetHasBan = message.guild
      .member(BANNING_TARGET)
      .hasPermission(`BAN_MEMBERS`);

    if (
      targetHasAdmin ||
      (!message.member.hasPermission(`ADMINISTRATOR`) && targetHasBan)
    ) {
      return message.channel.send(`You have no permission to ban this member!`);
    }

    // ------------------------------
    // [03] - Banning the TARGET:
    let reason = ARGS.slice(1).join(` `);
    if (!reason) {
      reason = `No reason given`;
    }

    const BANNING_TARGET_ID = message.guild.members.cache.get(
      BANNING_TARGET.id
    );

    const BANNED_EMBED = new DISCORD.MessageEmbed()
      .setColor(`#a01a40`)
      .setTitle(`YOU'VE BEEN BANNED\n`)
      .setDescription(
        `The user **${BANNING_TARGET_ID}** has been successfully **BANNED** from **${message.guild.name}**.`
      )
      .addFields({
        name: `Reason:`,
        value: `${reason}.`,
      })
      .setTimestamp();

    message.channel
      .send(BANNED_EMBED)
      .then(() => BANNING_TARGET_ID.ban({ reason: reason }));
  },
};
