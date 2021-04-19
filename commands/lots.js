const { Guild } = require("discord.js");

module.exports = {
  name: `lots`,
  description: `This command selects a random member from amidst a pool.`,
  syntax: `--lots @user1 @user2 @user3 [...]`,

  // CODE BELOW THIS LINE

  execute(message, ARGS) {
    const SAMPLE_SIZE = message.mentions.members.size;

    switch (SAMPLE_SIZE) {
      case 0:
        return message.channel.send(
          `Please specify a list of members from which one's to be drawn!\n\`--lots @user1 @user2 @user3 [...]\``
        );

      case 1:
        return message.channel.send(
          `Please specify at least **TWO** members!\n\`--lots @user1 @user2 @user3 [...]\``
        );

      default:
        const ARRAY = message.mentions.members.array();

        var selectedUserIndex = Math.random() * SAMPLE_SIZE;
        if (selectedUserIndex - SAMPLE_SIZE >= 0.5) {
          selectedUserIndex = Math.ceil(selectedUserIndex);
        } else selectedUserIndex = Math.floor(selectedUserIndex);

        message.channel.send(
          `The chosen user was: ${ARRAY[selectedUserIndex]}`
        );

        break;
    }
  },
};
