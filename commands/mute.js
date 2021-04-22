module.exports = {
  name: `mute`,
  description: `Command to mute a unique mentioned user`,

  execute(message, ARGS, DISCORD) {
    const USER = message.mentions.users.first();

    //Verifies if the user has permission to mute a member
    if (!message.member.hasPermission("MUTE_MEMBERS"))
      return message.reply("You don't have permission!");

    //Verifies if the command caller mentioned a user in his message
    if (USER) {
      const MEMBER = message.guild.member(USER);

      //Verifies if the user mentioned is member of the guild where the command was sent
      if (MEMBER) {
        //Execute the command to mute the mentioned user
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
