const { Command } = require("reconlx");
const { MessageEmbed } = require("discord.js");
const ee = require('../../settings/embed.json')
const config = require('../../settings/config.json')

module.exports = new Command({
    // options
    name: 'invite',
    description: `Get Bot Invite Link`,
    userPermissions: ['SEND_MESSAGES'],
    category: "Information",
    // command start
    run: async ({ client, interaction, args }) => {
        let embed = new MessageEmbed()
          .setColor(ee.embed_color)
          .setTitle(`Click the link below to invite me`)
          .setDescription(
            `>>> [Click to Invite](https://discord.com/api/oauth2/authorize?client_id=875148976272343041&permissions=8&redirect_uri=https%3A%2F%2Fdiscord.events.stdlib.com%2Fdiscord%2Fauth%2F&scope=applications.commands%20bot)`
          )
          .setFooter(ee.embed_footertext, ee.embed_footericon);
        interaction.followUp({ embeds: [embed], ephemeral: true })
    }
})