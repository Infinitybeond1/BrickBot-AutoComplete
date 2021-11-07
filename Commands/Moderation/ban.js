const { Command } = require("reconlx");
const ee = require("../../settings/embed.json");
const config = require("../../settings/config.json");

module.exports = new Command({
  // options
  name: "ban",
  description: `Ban a user from the server`,
  userPermissions: [],
  category: "Moderation",
  // command start
  run: async ({ client, interaction, args }) => {
    // Code
  },
});
