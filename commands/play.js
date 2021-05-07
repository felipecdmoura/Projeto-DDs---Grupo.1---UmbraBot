const ytdl = require(`ytdl-core`);
const ytSearch = require(`yt-search`);

module.exports = {
  name: `play`,
  aliases: [`p`, `pl`],
  description: `This command makes me join a voice channel and play a music from YouTube.`,
  syntax: `--play\` \`name\` **or** \`URL`,

  async execute(BOT, message, ARGS, DISCORD) {
    const voiceChannel = message.member.voice.channel;

    if (!voiceChannel)
      return message.channel.send(
        `Sorry, but you need to be currently in a voice channel to call me into it!`
      );
    const permissions = voiceChannel.permissionsFor(message.client.user);
    if (!permissions.has(`CONNECT`) || !permissions.has(`SPEAK`))
      return message.channel.send(
        `Sorry, but you do not have the necessary permissions to call me into a voice channel.`
      );

    if (!ARGS.length)
      return message.channel.send(
        `Please input either the music's name or URL!\n**syntax:** \`${this.syntax}\``
      );

    const validURL = (str) => {
      var regex = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
      if (!regex.test(str)) {
        return false;
      } else {
        return true;
      }
    };

    if (validURL(ARGS[0])) {
      const connection = await voiceChannel.join();
      const stream = ytdl(ARGS[0], { filter: "audioonly" });

      connection.play(stream, { seek: 0, volume: 1 }).on("finish", () => {
        voiceChannel.leave();
        message.channel.send("Leaving channel!");
      });

      await message.reply(`Now playing \`your link\`!`);

      return;
    }

    const connection = await voiceChannel.join();

    const videoFinder = async (query) => {
      const videoResult = await ytSearch(query);

      return videoResult.videos.length > 1 ? videoResult.videos[0] : null;
    };

    const video = await videoFinder(ARGS.join(" "));

    if (video) {
      const stream = ytdl(video.url, { filter: "audioonly" });
      connection.play(stream, { seek: 0, volume: 1 }).on("finish", () => {
        voiceChannel.leave();
      });

      await message.reply(`Now playing \`${video.title}\`!`);
    } else {
      message.channel.send("No results found.");
    }
  },
};
