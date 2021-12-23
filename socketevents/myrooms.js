module.exports = {
	name: 'myrooms',
	once: false,
	async execute(io, socket) {
		console.log(socket.rooms);
		socket.emit('yourrooms', Array.from(socket.rooms));
	},
};