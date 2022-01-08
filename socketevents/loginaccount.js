const utils = require('../utils/utils');

module.exports = {
	name: 'loginaccount',
	once: false,
	async execute(db, io, socket, arg) {
		if(!utils.isObject(arg)) return socket.emit('update', { code: 'WRONGFORMAT' });

		if(socket.data.account) return socket.emit('update', { code : 'LIA' });

		if(!arg.username || !arg.password) return socket.emit('update', { code: 'MISSINGINFO' });

		const aaccount = await db.get(arg.username);

		if(arg.password !== aaccount.password) return socket.emit('update', { code: 'WRONGINFO' });

		socket.data.account = aaccount;

		socket.emit('update', { code: 'LIS' });
	},
};