module.exports = {
  name: `del`,
  description: `Command to delete the lastest 0-100 messages of the channel`,

  execute(message, ARGS, DISCORD) {
    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.reply("Você não tem permisssão!");

    if (!ARGS[0])
      return message.reply(
        "Insira a quantidade de mensagens a serem deletadas!"
      );

    if (isNaN(ARGS[0])) return message.reply("Insira um numero real!");

    if (ARGS[0] > 100)
      return message.reply("O máximo de mensagens deletadas é 100");

    if (ARGS[0] < 1)
      return message.reply("Pelo menos uma mensagem deve ser deletada!");

    message.channel.bulkDelete(ARGS[0]);
  },
};
