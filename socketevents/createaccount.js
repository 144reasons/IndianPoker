const utils = require('../utils/utils');

module.exports = {
	name: 'createaccount',
	once: false,
	async execute(db, io, socket, arg) {
		if(!utils.isObject(arg)) return socket.emit('update', { code: 'WRONGFORMAT' });

		if(!arg.username || !arg.password) return socket.emit('update', { code: 'MISSINGINFO' });

		if(db.has(arg.username)) return socket.emit('update', { code: 'ALREADYEXISTS' });

		db.set(arg.username, arg.password);
	},
};