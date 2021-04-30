module.exports = (DISCORD, BOT, message) => {
  const PREFIX = process.env.PREFIX;

  if (!message.content.startsWith(PREFIX) || message.author.bot) return;

  const ARGS = message.content.slice(PREFIX.length).split(/ +/);
  const CMD = ARGS.shift().toLowerCase();

  const COMMAND = BOT.commands.get(CMD);

  if (COMMAND) {
    COMMAND.execute(BOT, message, ARGS, DISCORD);
  } else {
    BOT.commands.get(`unknown`).execute(BOT, message, ARGS, DISCORD);
  }
};
