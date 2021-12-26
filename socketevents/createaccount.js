const utils = require('../utils/utils');

// Broken for some dumb reason

module.exports = {
	name: 'createaccount',
	once: false,
	async execute(db, io, socket, arg) {
		if(!utils.isObject(arg)) return socket.emit('update', { code: 'WRONGFORMAT' });

		if(!arg.username || !arg.password) return socket.emit('update', { code: 'MISSINGINFO' });

		if(db.fetch(arg.username)) return socket.emit('update', { code: 'ALREADYEXISTS' });

		console.log('balls');

		db.set(arg.username, arg.password);
	},
};