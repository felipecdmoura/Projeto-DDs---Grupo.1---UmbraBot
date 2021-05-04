// [BOT CONFIGURATION]

const DISCORD = require(`discord.js`);

const BOT = new DISCORD.Client();

const PREFIX = `--`;

const FS = require(`fs`);

let cargo1;
let cargo2;
let cargo3;
let cargo4;
let cargo5;

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
      BOT.commands.get(`ping`).execute(message);
      break;

    case `kick`:
      BOT.commands.get(`kick`).run(message, ARGS, DISCORD);
      break;

    case `ban`:
      BOT.commands.get(`ban`).run(message, ARGS, DISCORD);
      break;

    case `unban`:
      BOT.commands.get(`unban`).execute(message, ARGS);
      break;

    case `help`:
      BOT.commands.get(`help`).execute(message, DISCORD, BOT);
      break;

    case `lots`:
      BOT.commands.get(`lots`).execute(message);
      break;
      
    case `stats`:
      BOT.commands.get(`stats`).execute(BOT, message, ARGS, DISCORD)
      break
      
    case `addrolelist`:
        //mudar o numero ali do mensagemSrt.substring . 14 é para --
        let mensagem = message.author.lastMessage;
        let mensagemSrt = mensagem.toString();
        let nomeCargo = mensagemSrt.substring(13);

        if(ARGS.length === 0)return message.channel.send("Digite --addRole <nome do cargo>. (Limite 5 cargos.)");

        if(cargo1 == undefined){
            cargo1=nomeCargo;
            message.channel.send(`O cargo ${nomeCargo} foi adicionado a lista.`)
        }else if(cargo2 == undefined){
            cargo2=nomeCargo;
            message.channel.send(`O cargo ${nomeCargo} foi adicionado a lista.`)
        }else if(cargo3 == undefined){
            cargo3=nomeCargo;
            message.channel.send(`O cargo ${nomeCargo} foi adicionado a lista.`)
        }else if(cargo4 == undefined){
            cargo4=nomeCargo;
            message.channel.send(`O cargo ${nomeCargo} foi adicionado a lista.`)
        }else if(cargo5 == undefined){
            cargo5=nomeCargo;
            message.channel.send(`O cargo ${nomeCargo} foi adicionado a lista.`)
        }else{
            message.channel.send("Número de cargos excedido!")
        }        
      break;
     case `removerolelist`:

        //mudar o numero ali do mensSrt.substring . 17 é para --
        let mens = message.author.lastMessage;
        let mensSrt = mens.toString();
        let nomeCargoR = mensSrt.substring(16);

        if(ARGS.length === 0)return message.channel.send("Digite --removerolelist <nome do cargo>.");

        if(cargo1 == nomeCargoR){
            cargo1=undefined;
            message.channel.send(`O cargo ${nomeCargoR} foi removido.`)
        }else if(cargo2 == nomeCargoR){
            cargo2=undefined;
            message.channel.send(`O cargo ${nomeCargoR} foi removido.`)
        }else if(cargo3 == nomeCargoR){
            cargo3=undefined;
            message.channel.send(`O cargo ${nomeCargoR} foi removido.`)
        }else if(cargo4 == nomeCargoR){
            cargo4=undefined;
            message.channel.send(`O cargo ${nomeCargoR} foi removido.`)
        }else if(cargo5 == nomeCargoR){
            cargo4=undefined;
            message.channel.send(`O cargo ${nomeCargoR} foi removido.`)
        }else{
            message.channel.send(`Cargo ${nomeCargoR} não encontrado.`)
        }        
        break;
      case 'putrole':
            const target1 = message.mentions.users.first();
        if (target1) {
            let memberTarget1 = message.guild.members.cache.get(target1.id);
        if (ARGS[1] === 0) return message.channel.send("Digite --putRole <@nome da pessoa> <nome do cargo>.");
            let Role1 = message.guild.roles.cache.find(role => role.name === ARGS[1]);
        if (cargo1 == ARGS[1]) {
            memberTarget1.roles.add(Role1.id);
            message.channel.send(`O usuário ${memberTarget1} foi adicionado ao cargo ${ARGS[1]}.`)
        } else if (cargo2 == ARGS[1]) {
            memberTarget1.roles.add(Role1.id);
            message.channel.send(`O usuário ${memberTarget1} foi adicionado ao cargo ${ARGS[1]}.`)
        } else if (cargo3 == ARGS[1]) {
            memberTarget1.roles.add(Role1.id);
            message.channel.send(`O usuário ${memberTarget1} foi adicionado ao cargo ${ARGS[1]}.`)
        } else if (cargo4 == ARGS[1]) {
            memberTarget1.roles.add(Role1.id);
            message.channel.send(`O usuário ${memberTarget1} foi adicionado ao cargo ${ARGS[1]}.`)
        } else if (cargo5 == ARGS[1]) {
            memberTarget1.roles.add(Role1.id);
            message.channel.send(`O usuário ${memberTarget1} foi adicionado ao cargo ${ARGS[1]}.`)
        } else {
            message.channel.send("Cargo não encontrado.")
        }
        } else {
            message.channel.send('Membro não localizado!');
        }
        break;
      case 'removerole':
            const target = message.mentions.users.first();
            if (target) {
                let memberTarget = message.guild.members.cache.get(target.id);
                if (ARGS[1] === 0) return message.channel.send("Digite --putRole <@nome da pessoa> <nome do cargo>.");
                let Role = message.guild.roles.cache.find(role => role.name === ARGS[1]);
                if (cargo1 == ARGS[1]) {
                    memberTarget.roles.remove(Role.id);
                    message.channel.send(`O usuário ${memberTarget} foi removido do cargo ${ARGS[1]}.`)
                } else if (cargo2 == ARGS[1]) {
                    memberTarget.roles.remove(Role.id);
                    message.channel.send(`O usuário ${memberTarget} foi removido do cargo ${ARGS[1]}.`)
                } else if (cargo3 == ARGS[1]) {
                    memberTarget.roles.remove(Role.id);
                    message.channel.send(`O usuário ${memberTarget} foi removido do cargo ${ARGS[1]}.`)
                } else if (cargo4 == ARGS[1]) {
                    memberTarget.roles.remove(Role.id);
                    message.channel.send(`O usuário ${memberTarget} foi removido do cargo ${ARGS[1]}.`)
                } else if (cargo5 == args[1]) {
                    memberTarget.roles.remove(Role.id);
                    message.channel.send(`O usuário ${memberTarget} foi removido do cargo ${ARGS[1]}.`)
                } else {
                    message.channel.send("Cargo não encontrado.")
                }
            } else {
                message.channel.send('membro não localizado!');
            }
      break;
     case `listrole`:  
        message.channel.send(`Os cargos adicionados na lista são:`)
        if(cargo1 != undefined){
        message.channel.send(`${cargo1}`)}
        if(cargo2 != undefined){
        message.channel.send(`${cargo2}`)}
        if(cargo3 != undefined){
        message.channel.send(`${cargo3}`)}
        if(cargo4 != undefined){
        message.channel.send(`${cargo4}`)}
        if(cargo5 != undefined){
        message.channel.send(`${cargo5}`)}
        break;
      
     case `poll`:
      BOT.commands.get(`poll`).execute(message, ARGS, DISCORD);
      break;

    case `multipoll`:
      BOT.commands.get(`multipoll`).execute(message, ARGS, DISCORD);
      break;
      
    case `play`:
      BOT.commands.get(`play`).execute(message, ARGS);
      break;
      
    case `stop`:
      BOT.commands.get(`stop`).execute(message, ARGS);
      break;

    default:
      BOT.commands
        .get(`unknown`)
        .execute(message, ARGS, message.content, DISCORD);
      break;
  }
});

BOT.login(`ODI0NTgzNzY5MjU1MDUxMjc0.YFxfeg.kVRV2CToFcqosnXPZLO5ehOP6No`);
