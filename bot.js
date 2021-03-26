const { MessageMentions, ClientUser, TextChannel } = require("discord.js");
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
    console.log(client.guilds.cache.filter(g => g.memberCount < 10).map(g => g.name).join("\n"));
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



// Função para o bot reconhecer comandos de mensagens
client.on("message",async message =>{
  if(message.author.bot) return;
    // Não responder outras coisas
  if(message.channel.type === "dm") return;
    // Não responder chat privado
  if(!message.content.startsWith(config.prefix)) return;

  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const comando = args.shift().toLowerCase();
  
  // Comandos 
  
  if(comando === "kick") {
    const usuario = message.mentions.users.first();
    //const razao = args.slice(1).join(" ");

    if(usuario){
      const membro = message.guild.member(usuario);

      if(membro){
        membro.kick("razao").then(() =>{
            message.reply(`Usuário ${usuario.tag} kickado com sucesso!`)
        })
        .catch(err => {
          message.reply("Falha ao kickar o usuário");
          console.log(err);
        })
      }else{
        message.reply("O usuário não é membro do servidor!")
      }
    }else{
      message.reply("Você não mencionou um usuário!");
    }
  }  
   

  if(comando === "del") {

      if(!args[0]) return message.reply("Insira a quantidade de mensagens a serem deletadas!");
      if(isNaN(args[0])) return message.reply("Insira um numero real!");
      if(args[0] > 100) return message.reply("O máximo de mensagens deletadas é 100");
      if(args[0] < 1) return message.reply("Pelo menos uma mensagem deve ser deletada!");
      
        message.channel.bulkDelete(args[0]);
    }
})

// Token de acesso do bot
client.login(config.BOT_TOKEN);
