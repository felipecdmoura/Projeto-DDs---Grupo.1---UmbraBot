module.exports = {
  name: `createrole`,
  description: `Creates one or more roles.`,
  synthax: `--createrole roleName roleName ... (You can create multiple roles at a time!)`,

  execute(message, ARGS, DISCORD, BOT) {
    let numberRoles = ARGS.length; // Gets the number os roles that are being created.
    let count = 0; // Counter for the loop.

    // Verifies if the command caller has permission to manage roles a member.
    if (!message.member.hasPermission(`MANAGE_ROLES`)) {
      return message.channel.send(
        `<@${message.member.id}>\nYou do not have permission to that!`
      );
    }
    // Check if at least one role was specified.
    if (ARGS.length === 0) {
      return message.reply("At least one role must be named!");
    }

    for (count = 0; count < numberRoles; count++) {
      message.guild.roles // Create the roles with the names specified.
        .create({
          data: {
            name: ARGS[count],
          },
        })
        .then((role) => console.log("Role Created!"))
        .catch((err) => console.log(err));

      message.channel.send(`The role ${ARGS[count]} was created.`);
    }
  },
};
