module.exports = {
	name: 'hello',
	once: false,
	async execute(socket, args) {
		console.log('Hello there!');
	},
};