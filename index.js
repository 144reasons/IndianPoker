const { Server } = require('socket.io');
const fs = require('fs');

const io = new Server(3000, { });

const eventFiles = fs
	.readdirSync('./ioevents')
	.filter((file) => file.endsWith('.js'));

for (const file of eventFiles) {
	const event = require(`./ioevents/${file}`);
	if (event.once) {
		io.once(event.name, (socket) => event.execute(io, socket));
	}
	else {
		io.on(event.name, (socket) => event.execute(io, socket));
	}
}