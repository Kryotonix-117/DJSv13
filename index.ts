import DiscordJS, { Intents, Message } from 'discord.js'
import dotenv from 'dotenv'
dotenv.config()

const client = new DiscordJS.Client({
    intents: [
        Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
})

client.on('ready', () => {
    console.log('The bot is ready')

    var d = new Date();
    console.log(d.toLocaleTimeString());
    console.log(d.toLocaleString());
    console.log(d.toLocaleDateString());

    const guildId = '881673943616987177'
    const guild = client.guilds.cache.get(guildId)
    let commands

    if (guild) {
        commands = guild.commands
    } else {
        commands = client.application?.commands
    }

    commands?.create({
        name: 'ping',
        description: 'Replies with pong.',
    })

    commands?.create({
        name: 'add',
        description: 'Adds two numbers.',
        options: [
            {
                name: 'num1',
                description: 'The first number.',
                required: true,
                type: DiscordJS.Constants.ApplicationCommandOptionTypes.NUMBER
            },
            {
                name: 'num2',
                description: 'The second number.',
                required: true,
                type: DiscordJS.Constants.ApplicationCommandOptionTypes.NUMBER
            },
        ],
    })

    commands?.create({
        name: 'recruit',
        description: 'Logs in a new recruit with the information given.',
        options: [
            {
                name: 'player-id',
                description: 'The member\'s Player ID name.',
                required: true,
                type: DiscordJS.Constants.ApplicationCommandOptionTypes.STRING
            },
            {
                name: 'enrollment-date',
                description: 'Please type \"Today\" or use this format (MM/DD/YYYY).',
                required: true,
                type: DiscordJS.Constants.ApplicationCommandOptionTypes.STRING
            },
            {
                name: 'discord-username',
                description: 'The Discord username of the member.',
                required: false,
                type: DiscordJS.Constants.ApplicationCommandOptionTypes.USER
            },
            {
                name: 'character-name',
                description: 'Name of the main character the member uses.',
                required: false,
                type: DiscordJS.Constants.ApplicationCommandOptionTypes.STRING
            },
        ],
     }) 
})

client.on('interactionCreate', async (interaction) => {
    if(!interaction.isCommand()) {
        return
    }

    const { commandName, options } = interaction

    if (commandName === 'ping') {
        interaction.reply({
            content: 'pong',
            ephemeral: true,
        })
    } else if (commandName === 'add') {
        const num1 = options.getNumber('num1')!
        const num2 = options.getNumber('num2')!

        await interaction.deferReply({
            ephemeral: true,
        })

        await new Promise(resolve => setTimeout(resolve, 5000))

        await interaction.editReply({
            content: `The sum is ${num1 + num2}`,
        })
    } else if (commandName === 'recruit') {
        const playerId = options.getString('player-id')!
        let enrollDate = options.getString('enrollment-date')!
        const discordName = options.getUser('discord-username') || 'N/A'
        const characterName = options.getString('character-name') || 'N/A'
        const user = interaction.user
        let date = new Date()
        if (enrollDate === 'today' || enrollDate === 'Today') {
            enrollDate = date.toLocaleDateString()}
       
        const newRecruit = new DiscordJS.MessageEmbed()
         newRecruit
        .setColor('#CC1701')
	    .setTitle('New Alliance Member')
	    .setDescription(`A new alliance member was logged today,\nthis is their Recruitment ID`)
	    .addFields(
		    { name: '\u200B', value: `Player ID Name: **${playerId}**\nEnrollment Date: **${enrollDate}**\nCharacter Name: **${characterName}**\nDiscord Username: **<@${discordName}>**\n\u200B` },
            // { name: '\u200B', value: `Enrollment Date: **${enrollDate}**` },
		    // { name: '\u200B', value: `Character Name: **${characterName}**` },
		    // { name: '\u200B', value: `Discord Username: <@${discordName}>\n\u200B`},
	        )
	    .setTimestamp()
	    .setFooter(`Member logged by ${user.username}`);
        if (discordName != 'N/A') {
            newRecruit
            .setThumbnail(discordName.displayAvatarURL())
            }

            interaction.channel?.send({ embeds: [newRecruit] })

            await interaction.deferReply({
                ephemeral: true,
            })
    
            await new Promise(resolve => setTimeout(resolve, 3000))
    
            await interaction.editReply({
            content: 'Member added successfully!',
            })
    }

})

client.on('messageCreate', (message) => {
    if (message.content === 'ping') {
        message.reply({
            content: 'pong',
        })
        message.react('🏓')
     }
})

client.login(process.env.TOKEN)

function setFooter() {
    throw new Error('Function not implemented.')
}
