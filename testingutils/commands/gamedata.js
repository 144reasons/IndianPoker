/* eslint-disable */

module.exports = {
	name: 'gamedata',
	once: false,
	async execute(socket, args) {
        let req = { id: args[0] }

        socket.emit('gamedata', req, function(responseData) {
            console.log(responseData)
        });
	},
};