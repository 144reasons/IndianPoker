module.exports = {
	name: 'creategame',
	once: false,
	async execute(socket, args) {
		console.log('Contacting given socket with either given or default values');

		const req = {
			chips: args[0] || 100,
			fee: args[1] || 1,
		};

		socket.emit('creategame', req);
	},
};