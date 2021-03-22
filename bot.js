const Discord = require("Discord.js")
const client = new Discord.Client()
const config = require("./config.json")


/*
Nota:
client.on é um evento
*/

client.on("ready", () => {
    console.log(`O bot foi iniciado, com ${client.users.cache.size} usuários e em ${client.guilds.cache.size} servidores.`);
    client.user.setActivity(`Eu estou em ${client.guilds.cache.size} servidores`,{ type: 'PLAYING' });
    // ^^ Texto que aparece no "jogando" do bot ^^

   /*
    ${client.users.cache.size} = Nº de membros de todos os servidores que o bot ta
    ${client.channels.cache.size} = Nº canais 
    ${client.guilds.cache.size} = Nº servidores
   */
   
})

client.on("guildCreate", guild =>{
    // Quando o bot entra em um servidor essa parte é chamada
    console.log(`O Bot entrou no servidor: ${guild.name}(id: ${guild.id}). Número de membros: ${guild.memberCount} `)
    //Atualizar o status do bot
    client.user.setActivity(`Estou em ${clent.guilds.cache.size} servidores`)
})

client.on("guildDelete", guild => {
    // Quando o bot é deletado de um servidor
    console.log(`O bot foi removido do servidor: ${guild.name} (ID do servidor: ${guild.id})`);
    client.user.setActivity(`Serving ${client.guilds.cache.size} servers`)
})

client.on("message",async message =>{
  if(message.author.bot) 
  return;
    // Não responder outras coisas
  if(message.channel.type === "dm") 
  return;
    // Não responder chat privado
  if(!message.content.startsWith(config.prefix)) return;

  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const comando = args.shift().toLowerCase();
  
  // Função
  if(comando === "ola") {
    const m = await message.channel.send("...");
    m.edit("Olá! Eu sou o bot de teste.");
  }
  if(comando === "objetivo") {
    const m = await message.channel.send("...");
    m.edit("Meu objetivo é servir de teste para o melhor funcionamento do bot principal do projeto de DS.");
  }
  if(comando === "data") {
    const m = await message.channel.send("...");
    var data = new Date()
    m.edit("Meu objetivo é servir de teste para o melhor funcionamento do bot principal do projeto de DS.");
  }
})

client.login(config.BOT_TOKEN);
// Seta o token