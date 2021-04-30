module.exports = {
  name: `removerole`,
  description: `Removes a mentioned user from a specified role.`,
  synthax: `--removerole @user roleName (Only one user and one role at a time!)`,

  execute(message, ARGS, DISCORD, BOT) {
    let user = message.mentions.users.first(); // Gets the mentioned user on the message.
    let roleName = ARGS[1]; // Gets the role specified.

    let role = message.guild.roles.cache.find((r) => r.name === roleName); // Find a role from all roles cache, based on the roleName specified.
    // Verifies if the command caller mentioned a user in his message.
    if (user) {
      const member = message.guild.member(user);
      // Verifies if the user mentioned is member of the guild where the command was sent.
      if (member) {
        // Checks if the syntax is correct.
        if (ARGS.length === 2) {
          // Checks if the role specified exist.
          if (typeof role === "undefined") {
            message.channel.send("The specified role doesn't exist!");
          } else {
            member.roles.remove(role).catch(console.error); // Remove the mentioned user from the specified role.
            message.channel.send(
              `The user ${user} was successfully removed from "${roleName}" role!`
            );
          }
        } else {
          message.channel.send("Wrong syntax, please see &help!");
        }
      } else {
        message.reply("The user is not a member of the guild!");
      }
    } else {
      message.reply("You didn't mention a user!");
    }
  },
};
