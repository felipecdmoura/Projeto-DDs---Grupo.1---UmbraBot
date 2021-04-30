module.exports = {
  name: `mutev`,
  description: `Command to mute a unique mentioned user`,
  syntax: `--mutev @user`,

  execute(BOT, message, ARGS, DISCORD) {
    const USER = message.mentions.users.first();

    //Verifies if the user has permission to mute a member
    if (!message.member.hasPermission(`MUTE_MEMBERS`))
      return message.channel.send(
        `Sorry, but you don't have the permission to mute members!`
      );

    //Verifies if the command caller mentioned a user in his message

    if (!USER) {
      return message.channel.send(
        `Please, inform a member (which is currently active in a voice chat) to be muted!`
      );
    }

    const MEMBER = message.guild.member(USER);

    if (!MEMBER) {
      return message.channel.send(
        `Im sorry, but the user mentioned is not currently a member of this server!`
      );
    }

    MEMBER.voice.setMute(true).catch((err) => {
      message.channel.send(
        `Muting failed. Are you sure the mentioned user is currently in a voice chat?`
      );
    });
  },
};
