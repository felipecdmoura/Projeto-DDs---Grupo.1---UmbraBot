module.exports = {
  name: `stop`,
  aliases: [`st`],
  description: `This command makes me leave the voice channel in which I currently am.`,
  syntax: `--stop`,
  async execute(BOT, message, ARGS, DISCORD) {
    const voiceChannel = message.member.voice.channel;

    if (!voiceChannel)
      return message.channel.send(
        `Sorry, but you need to be in a voice channel to stop the music!`
      );
    await voiceChannel.leave();
    await message.channel.send(`Leaving channel!`);
  },
};
