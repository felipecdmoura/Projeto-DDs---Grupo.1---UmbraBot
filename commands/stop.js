module.exports = {
    name: 'stop',
    description: 'stop the music bot and leave the channel',
    syntax: '--stop',
    async execute(message, ARGS) {
        const voiceChannel = message.member.voice.channel;
 
        if(!voiceChannel) return message.channel.send("You need to be in a voice channel to stop the music!");
        await voiceChannel.leave();
        await message.channel.send('Leaving channel')
 
    }
}
