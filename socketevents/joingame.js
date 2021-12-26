module.exports = {
	name: 'joingame',
	once: false,
	async execute(db, io, socket, arg) {
		socket.join(arg.id);
	},
};