const utils = require('../utils/utils');

module.exports = {
	name: 'loginaccount',
	once: false,
	async execute(db, io, socket, arg, callback) {
		if(!utils.isObject(arg)) return callback({ code: 'WRONGFORMAT' });

		if(socket.data.account) return callback({ code : 'LIA' });

		if(!arg.username || !arg.password) return callback({ code: 'MISSINGINFO' });

		const aaccount = await db.get(arg.username);

		if(!aaccount) return callback({ code: 'DOESNTEXIST' });

		if(arg.password !== aaccount.password) return callback({ code: 'WRONGINFO' });

		socket.data.account = aaccount;

		callback({ code: 'OK' });
	},
};