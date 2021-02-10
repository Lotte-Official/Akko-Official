const Discord = require('discord.js');
const { Message } = require('discord.js');
const Client = require('../../classes/Unicron');
const BaseCommand = require('../../classes/BaseCommand');

module.exports = class extends BaseCommand {
    constructor() {
        super({
            config: {
                name: 'serverinfo',
                description: 'Shows this server\'s information.',
                permission: 'User',
            },
            options: {
                aliases: ['si'],
                clientPermissions: [],
                cooldown: 10,
                nsfwCommand: false,
                args: false,
                usage: '',
                donatorOnly: false,
                premiumServer: false,
            }
        });
    }
    /**
     * @returns {Promise<Message|boolean>}
     * @param {Client} client 
     * @param {Message} message 
     * @param {Array<string>} args 
     */
    async run(client, message, args) {
        return message.channel.send(new Discord.MessageEmbed()
            .setColor('#FC79E3')
            .setAuthor(`${message.guild.name} / ${message.guild.id}`)
            .setImage("https://i.imgur.com/2dte3ca.jpeg")
            .addField('Owner', `${message.guild.owner.user.tag} / ${message.guild.ownerID}`)
            .addField('Created At', message.guild.createdAt.toUTCString())
            .addField('Region', message.guild.region.toUpperCase(), true)
            .addField('Members', message.guild.memberCount, true)
            .addField('Emojis', message.guild.emojis.cache.size, true)
            .addField('Channel Categories', message.guild.channels.cache.filter(channel => channel.type === 'category').size, true)
            .addField('Text Channels', message.guild.channels.cache.filter(channel => channel.type === 'text').size, true)
            .addField('Voice Channels', message.guild.channels.cache.filter(channel => channel.type === 'voice').size, true)
            .addField('Shard ID', message.guild.shardID, true)
            .setTimestamp()
        );
    }
}