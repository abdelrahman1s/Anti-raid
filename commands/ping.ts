import type { Message, Command } from 'discord.js'

export class PingCommand implements Command {
	name = 'ping'
	async run(message: Message): Promise<unknown> {
		const m = await message.channel.send('Ping...')
        const ping = Math.abs(
            (m.createdTimestamp - message.createdTimestamp) - message.client.ws.ping
        )
		return m.edit(`Pong: \`${ping}ms\``)
	}
}