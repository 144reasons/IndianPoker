module.exports = {
	name: 'myrooms',
	once: false,
	async execute(socket, args) {
		socket.emit('myrooms');
	},
};