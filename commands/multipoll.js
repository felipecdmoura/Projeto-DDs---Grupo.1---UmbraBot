module.exports = {
  name: "multipoll",
  description: "creates a poll with more than two options",

  async execute(message, ARGS, DISCORD) {
    let argsJoin = ARGS.join(" "); // Joins the separated arguments the main in one array, and then replace the empty spaces to maintain the sentence structure
    let pollDescription = argsJoin.split("/"); // Separate the joined argument by the "/" symbol
    let argsSize = pollDescription.length; // Gets the number of arguments

    let pollEmbed = new DISCORD.MessageEmbed() // Embed message structure
      .setTitle("MULTI POLL")
      .setDescription(pollDescription)
      .setColor(`PURPLE`);

    if (argsSize === 0) {
      // Checks if the user inserted a description
      message.reply(`Please, describe your poll!`);
    } else if (argsSize === 1) {
      // Checks if the user inserted at least 2 options, because one option polls don`t make sense
      message.reply(`You need to specify at least 2 options for the poll!`);
    } else {
      let embedMultiPoll = await message.channel.send(pollEmbed); // Send the embed message
      switch (
        argsSize // Send the number of options as reaction based on how many options the used inserted (WORKS ONLY WITH 2-9 OPTIONS!!)
      ) {
        case 2:
          await embedMultiPoll.react(`1️⃣`);
          await embedMultiPoll.react(`2️⃣`);
          break;

        case 3:
          await embedMultiPoll.react(`1️⃣`);
          await embedMultiPoll.react(`2️⃣`);
          await embedMultiPoll.react(`3️⃣`);
          break;

        case 4:
          await embedMultiPoll.react(`1️⃣`);
          await embedMultiPoll.react(`2️⃣`);
          await embedMultiPoll.react(`3️⃣`);
          await embedMultiPoll.react(`4️⃣`);
          break;

        case 5:
          await embedMultiPoll.react(`1️⃣`);
          await embedMultiPoll.react(`2️⃣`);
          await embedMultiPoll.react(`3️⃣`);
          await embedMultiPoll.react(`4️⃣`);
          await embedMultiPoll.react(`5️⃣`);
          break;

        case 6:
          await embedMultiPoll.react(`1️⃣`);
          await embedMultiPoll.react(`2️⃣`);
          await embedMultiPoll.react(`3️⃣`);
          await embedMultiPoll.react(`4️⃣`);
          await embedMultiPoll.react(`5️⃣`);
          await embedMultiPoll.react(`6️⃣`);
          break;

        case 7:
          await embedMultiPoll.react(`1️⃣`);
          await embedMultiPoll.react(`2️⃣`);
          await embedMultiPoll.react(`3️⃣`);
          await embedMultiPoll.react(`4️⃣`);
          await embedMultiPoll.react(`5️⃣`);
          await embedMultiPoll.react(`6️⃣`);
          await embedMultiPoll.react(`7️⃣`);
          break;

        case 8:
          await embedMultiPoll.react(`1️⃣`);
          await embedMultiPoll.react(`2️⃣`);
          await embedMultiPoll.react(`3️⃣`);
          await embedMultiPoll.react(`4️⃣`);
          await embedMultiPoll.react(`5️⃣`);
          await embedMultiPoll.react(`6️⃣`);
          await embedMultiPoll.react(`7️⃣`);
          await embedMultiPoll.react(`8️⃣`);
          break;

        case 9:
          await embedMultiPoll.react(`1️⃣`);
          await embedMultiPoll.react(`2️⃣`);
          await embedMultiPoll.react(`3️⃣`);
          await embedMultiPoll.react(`4️⃣`);
          await embedMultiPoll.react(`5️⃣`);
          await embedMultiPoll.react(`6️⃣`);
          await embedMultiPoll.react(`7️⃣`);
          await embedMultiPoll.react(`8️⃣`);
          await embedMultiPoll.react(`9️⃣`);
          break;

        default:
          message.reply(`Number of options unavailable(2-9 options only)!`); // Error when the user insert more than 9 options
          break;
      }
    }
  },
};
