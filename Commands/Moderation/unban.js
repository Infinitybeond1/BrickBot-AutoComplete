const { Command } = require("reconlx");
const ee = require("../../settings/embed.json");
const config = require("../../settings/config.json");

module.exports = new Command({
  // options
  name: "unban",
  description: `Unban a user from the server`,
  userPermissions: [],
  category: "Moderation",
  // command start
  run: async ({ client, interaction, args }) => {
    // Code
  },
});
