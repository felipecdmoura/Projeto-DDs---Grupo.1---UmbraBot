module.exports = {
  name: `del`,
  description: `Command to delete the lastest 0-100 messages of the channel`,

  execute(message, ARGS, DISCORD) {
    //Verifies if the command caller has admin permission to delete messages
    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.reply("You don't have permission!");

    //Verifies if the user insert a number of messages to be deleted
    if (!ARGS[0])
      return message.reply(
        "Specifies the number of messages you want to delete!"
      );

    //Verifies if the input number is a real number
    if (isNaN(ARGS[0])) return message.reply("Insert a real number!");

    //Limits the number of messages to be deleted to 100
    if (ARGS[0] > 100)
      return message.reply("The maximun messages to delete is 100!");

    //Verifies if the user is deleting at least one message
    if (ARGS[0] < 1)
      return message.reply("At least one message must be deleted!");

    message.channel.bulkDelete(ARGS[0]); //Deletes the last "x" messages the user iserted
  },
};
