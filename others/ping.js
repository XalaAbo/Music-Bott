const { Client, Collection, MessageEmbed } = require(`discord.js`);
const {
  PREFIX,
  approveemoji,
  denyemoji
} = require(`../config.json`);

module.exports = {
  name: `ping`,
  description: "__**```(pg)Gives you the ping of the Bot```**__",
  aliases: ["pg"],
  cooldown: 3,
  edesc: "Type this command to see how fast the Bot can response to your messages / commands inputs!",
  execute(message, args, client) {
    //react with approve emoji
    message.react("769665713124016128");
    //send the Ping embed
    message.reply(new MessageEmbed().setColor("#c219d8").setTitle(":ping_pong: `" + client.ws.ping + "ms`"));
  }
}