const { Events, ActivityType } = require('discord.js');
const { guildId } = require('../config.json');


module.exports = {
	name: Events.ClientReady,
	once: true,
	execute(client) {
		console.log(`Ready! Logged in as ${client.user.tag}`);
		// console.log(client.guilds.cache.get("guildId"))
		// const {memberCount, name } = client.guilds.cache.get("guildId");
		const guild = client.guilds.cache.get(guildId);
		updateMemberCount(guild)
		
		// Event listener for when a member joins/leaves the guild
			const handleMemberChange = member => {
				const guild = member.guild;
				updateMemberCount(guild);
		};

		client.on('guildMemberAdd', handleMemberChange);
		client.on('guildMemberRemove', handleMemberChange);

		function updateMemberCount(guild) {
			if (guild) {
					const { name, memberCount} = guild;
					client.user.setActivity(`${name}: ${memberCount} members`, { type: ActivityType.Watching });
			} else {
					console.error("Guild not found.");
			}
		};
	},
};



