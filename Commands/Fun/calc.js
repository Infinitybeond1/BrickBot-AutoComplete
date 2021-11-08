const { Command } = require("reconlx");
const ee = require("../../settings/embed.json");
const config = require("../../settings/config.json");
const { Calculator } = require("weky-slash");


module.exports = new Command({
  // options
  name: "calculator",
  description: `Do some math`,
  userPermissions: [],
  category: "Fun",
  // command start
  run: async ({ client, interaction, args }) => {
    interaction.deferReply(); // Optional

    await Calculator({
      message: interaction,
      slash: true,
      embed: {
        title: "Calculator | Weky Development",
        color: "#5865F2",
        footer: "©️ Weky Development",
        timestamp: true,
      },
      disabledQuery: "Calculator is disabled!",
      invalidQuery: "The provided equation is invalid!",
      othersMessage: "Only <@{{author}}> can use the buttons!",
    });
  },
});
