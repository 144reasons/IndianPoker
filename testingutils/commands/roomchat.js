module.exports = {
	name: 'roomchat',
	once: false,
	async execute(socket, args) {
		console.log('Contacting given socket with either given or default values');


		socket.emit('roomchat', args);
	},
};