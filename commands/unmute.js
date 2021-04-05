module.exports = {
  name: `unmute`,
  description: `Command to unmute a unique mentioned user`,

  execute(message, ARGS, DISCORD) {
    const USER = message.mentions.users.first();

    if (!message.member.hasPermission("MUTE_MEMBERS"))
      return message.reply("You don't have permission!");

    if (USER) {
      const MEMBER = message.guild.member(USER);

      if (MEMBER) {
        MEMBER.voice.setMute(false).catch((err) => {
          message.reply("Fail to unmute the user");
          console.log(err);
        });
      } else {
        message.reply("The user is not a member of the guild!");
      }
    } else {
      message.reply("You didn't mention a user!");
    }
  },
};
