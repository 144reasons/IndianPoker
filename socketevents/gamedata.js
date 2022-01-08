const fs = require('fs');
const utils = require('../utils/utils');

module.exports = {
	name: 'gamedata',
	once: false,
	async execute(db, io, socket, arg, callback) {
		if(!utils.isObject(arg)) return callback({ code: 'WRONGFORMAT' });

		if(!fs.existsSync(`${__dirname}/../data/${arg.id}`)) return callback({ code: 'DOESNTEXIST' });

		if(!socket.rooms.includes(arg.id)) return callback({ code: 'NOPERMS' });

		try {
			const data = fs.readFileSync(`${__dirname}/../data/${arg.id}`, 'utf8');
			console.log(data);
		}
		catch (err) {
			console.error(err);
		}

		callback({ code: 'OK', data: data });
	},
};