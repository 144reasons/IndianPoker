const eventFiles = fs
	.readdirSync(`${__dirname}/../socketevents`)
	.filter((file) => file.endsWith('.js'));

for (const file of eventFiles) {
	const event = require(`${__dirname}/../socketevents/${file}`);
	if (event.once) {
		socket.once(event.name, () => event.execute(io, socket));
	}
	else {
		socket.on(event.name, (socket) => event.execute(io, socket));
	}
}