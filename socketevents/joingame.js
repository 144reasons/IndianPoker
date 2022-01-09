const fs = require('fs');
const utils = require('../utils/utils');

module.exports = {
	name: 'joingame',
	once: false,
	async execute(db, io, socket, arg, callback) {
		if(!utils.isObject(arg)) return callback({ code: 'WRONGFORMAT' });

		if(!fs.existsSync(`${__dirname}/../data/${arg.id}.json`)) return callback({ code: 'DOESNTEXIST' });

		if(!arg.id) return callback({ code: 'MISSINGINFO' });

		utils.joinGame(callback, socket, arg.id, socket.data.account.username);

		callback({ code: 'OK' });
	},
};