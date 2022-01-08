module.exports = {
	name: 'loginaccount',
	once: false,
	async execute(socket, args) {
		console.log('Contacting given socket with given values');

		const req = {
			username: args[0],
			password: args[1],
		};

		socket.emit('loginaccount', req);
	},
};