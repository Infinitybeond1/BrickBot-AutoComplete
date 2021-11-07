const { Command } = require("reconlx");
const ee = require("../../settings/embed.json");
const config = require("../../settings/config.json");

module.exports = new Command({
  // options
  name: "kick",
  description: `Kick a user from the server`,
  userPermissions: ["KICK_MEMBERS"],
  category: "Moderation",
    options: [
        {
            name: "user",
            description: "User you want to kick",
            type: "USER",
            required: true
        },
        {
            name: "reason",
            description: "Reason you want to kick the user",
            type: "STRING",
            required: true
        }
        
  ],
  // command start
  run: async ({ client, interaction, args }) => {
      const target = interaction.options.getMember('target');
      const reason = interaction.options.getString('reason') || "No reason provided"

      if (target.roles.highest.position >= interaction.member.roles.highest.position) return interaction.followUp({
          content: "You can't take action on this user as they are more powerfull than you"
      })

     await target.send(
          `You have been kicked from ${interaction.guild.name} /n Reason: ${reason}`
      );

      target.kick(reason)

      interaction.followUp({
          content: `Succesfully kicked ${target.user.tag} /n Reason: ${reason}`
      })
  },
});
