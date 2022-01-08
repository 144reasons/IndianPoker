const fs = require('fs');

module.exports = {
	name: 'connect',
	once: false,
	async execute(db, io, socket) {

		/* Socket event handler start */
		const eventFiles = fs
			.readdirSync(`${__dirname}/../socketevents`)
			.filter((file) => file.endsWith('.js'));

		for (const file of eventFiles) {
			const event = require(`${__dirname}/../socketevents/${file}`);
			if (event.once) {
				socket.once(event.name, (arg, callback) => event.execute(db, io, socket, arg, callback));
			}
			else {
				socket.on(event.name, (arg, callback) => event.execute(db, io, socket, arg, callback));
			}
		}
		/* Socket event handler end */

	},
};