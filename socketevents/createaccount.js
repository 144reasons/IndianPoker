const utils = require('../utils/utils');

module.exports = {
	name: 'createaccount',
	once: false,
	async execute(db, io, socket, arg, callback) {
		console.log(arg);

		if(!utils.isObject(arg)) return callback({ code: 'WRONGFORMAT' });

		if(!arg.username || !arg.password) return callback({ code: 'MISSINGINFO' });

		if(await db.has(arg.username) === true) return callback({ code: 'ALREADYEXISTS' });

		db.set(arg.username, { username: arg.username, password: arg.password });

		socket.data.account = db.get(arg.username);

		callback({ code: 'OK' });
	},
};