const fs = require('fs');
const utils = require('../utils/utils');

module.exports = {
	name: 'gamedata',
	once: false,
	async execute(db, io, socket, arg, callback) {
		const socketrooms = Array.from(socket.rooms);

		if(!utils.isObject(arg)) return callback({ code: 'WRONGFORMAT' });

		if(!fs.existsSync(`${__dirname}/../data/${arg.id}.json`)) return callback({ code: 'DOESNTEXIST' });

		if(!socketrooms.includes(arg.id)) return callback({ code: 'NOPERMS' });

		try {
			const data = JSON.parse(fs.readFileSync(`${__dirname}/../data/${arg.id}.json`, 'utf8'));
			callback({ code: 'OK', data: data });
		}
		catch (err) {
			console.error(err);
		}
	},
};