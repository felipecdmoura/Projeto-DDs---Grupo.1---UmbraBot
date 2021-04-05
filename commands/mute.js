module.exports = {
  name: `mute`,
  description: `Command to mute a unique mentioned user`,

  execute(message, ARGS, DISCORD) {
    const USER = message.mentions.users.first();

    if (!message.member.hasPermission("MUTE_MEMBERS"))
      return message.reply("You don't have permission!");

    if (USER) {
      const MEMBER = message.guild.member(USER);

      if (MEMBER) {
        MEMBER.voice.setMute(true).catch((err) => {
          message.reply("Fail to mute the user");
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
