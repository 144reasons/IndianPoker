module.exports = {
	name: 'joingame',
	once: false,
	async execute(socket, args) {
		const req = {
			id: args[0],
		};

		socket.emit('joingame', req);
	},
};