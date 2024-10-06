const { SlashCommandBuilder } = require('discord.js');
const wait = require('node:timers/promises').setTimeout;

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with Pong!'),
	async execute(interaction) {
		await interaction.reply('Pong!');

		//deleting reply
		await wait(2_000);
		await interaction.deleteReply();

		//for additional followup
		// await interaction.followUp('Pong again!');

		//Ephemeral: makes the message available to `only you`
		// await interaction.reply({ content: 'Secret Pong!', ephemeral: true });
		
		//Editing Responses: we can add this to edit the reply after a certain time
		// await wait(2_000);
		// await interaction.editReply('Pong again!');

		//Deferred: makes your bot wait for a certain time before replying(only good if i have a command that takes 3 secs or more (i.e requesting api))
		//we can also pass ephemeral or dont pass
		// await interaction.deferReply({ ephemeral: true });
		// await wait(4_000);
		// await interaction.editReply('Pong!');
	},
};