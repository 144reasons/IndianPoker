const fs = require('fs');
const utils = require('../utils/utils');

module.exports = {
	name: 'creategame',
	once: false,
	async execute(io, socket, arg) {

		console.log(arg);

		if(!utils.isObject(arg)) return socket.emit('update', { code: 'WRONGFORMAT' });

		if(!arg.chips || !arg.fee) return socket.emit('update', { code: 'MISSINGINFO' });

		const gamecode = utils.pswd(4);

		const gamedata = {
			chips: arg.chips,
			fee: arg.fee,
			gamecode: gamecode,
		};

		if(!fs.existsSync(`${__dirname}/../data/`)) fs.mkdirSync(`${__dirname}/../data/`);

		fs.writeFileSync(`${__dirname}/../data/${gamecode}.json`, JSON.stringify(gamedata, null, '\t'), 'utf-8');

		socket.join(gamecode);

		socket.emit('update', { code: 'CTOROOM' });
	},
};