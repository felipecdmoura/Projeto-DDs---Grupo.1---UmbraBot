module.exports = {
  name: "deleterole",
  description: "Deletes a specified role.",
  synthax: `--removerole roleName (Only one role at a time!)`,

  execute(message, ARGS, DISCORD, BOT) {
    let roleName = ARGS[0]; // Get the role name specified.

    let role = message.guild.roles.cache.find((role) => role.name === roleName); // Find a role from all roles cache, based on the roleName specified.

    // Verifies if the command caller has permission to manage roles a member.
    if (!message.member.hasPermission(`MANAGE_ROLES`)) {
      return message.channel.send(
        `<@${message.member.id}>\nYou do not have permission to that!`
      );
    }

    // Verifies if only one role was specified.
    if (ARGS.lenght > 1) {
      message.reply("You can only delete one role at a time!");
    }

    // Verifies if at least one role was named.
    if (ARGS.length === 0) {
      return message.reply("At least one role must be named!");
    }

    // Checks if the role specified exist.
    if (typeof role === "undefined") {
      message.channel.send("The specified role doesn't exist!");
    } else {
      role.delete(); // Delete the specified role.

      message.channel.send(`The role ${roleName} was deleted!`);
    }
  },
};
