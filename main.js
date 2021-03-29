// [BOT CONFIGURATION]

const DISCORD = require(`discord.js`);

const BOT = new DISCORD.Client();

const PREFIX = `--`;

const FS = require(`fs`);

BOT.commands = new DISCORD.Collection();

const COMMAND_FILES = FS.readdirSync(`./commands`).filter((file) =>
  file.endsWith(`.js`)
);

for (const FILE of COMMAND_FILES) {
  const COMMAND = require(`./commands/${FILE}`);

  BOT.commands.set(COMMAND.name, COMMAND);
}

// [BOT SETUP]

BOT.once(`ready`, () => {
  console.log(`Yurnero's up n'running!`);
});

BOT.on(`message`, (message) => {
  if (!message.content.startsWith(PREFIX) || message.author.bot) return;

  const ARGS = message.content.slice(PREFIX.length).split(/ +/);
  const COMMAND = ARGS.shift().toLowerCase();

  // [COMMAND LIST]

  switch (COMMAND) {
    case `ping`:
      BOT.commands.get(`ping`).execute(message, ARGS);
      break;

    case `kick`:
      BOT.commands.get(`kick`).execute(message, ARGS, DISCORD);
      break;

    case `ban`:
      BOT.commands.get(`ban`).execute(message, ARGS, DISCORD);
      break;

    case `unban`:
      BOT.commands.get(`unban`).execute(message, ARGS, DISCORD);
      break;

    default:
      BOT.commands
        .get(`unknown`)
        .execute(message, ARGS, message.content, DISCORD);
      break;
  }
});

BOT.login(`ODI0NTgzNzY5MjU1MDUxMjc0.YFxfeg.kVRV2CToFcqosnXPZLO5ehOP6No`);
