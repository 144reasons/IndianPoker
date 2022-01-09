const fs = require('fs');

function pswd(length) {
	let result = '';
	// eslint-disable-next-line no-inline-comments
	const characters = 'ABCDEFGHIJKLMNOPQRTVWXYZ'; // I dont want any password to be susy or something with sus so i removed s and u
	const charactersLength = characters.length;
	for (let i = 0; i < length; i++) {
		result += characters.charAt(Math.floor(Math.random() *
 charactersLength));
	}
	return result;
}

function makeid(length) {
	let result = '';
	const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	const charactersLength = characters.length;
	for (let i = 0; i < length; i++) {
		result += characters.charAt(Math.floor(Math.random() *
charactersLength));
	}
	return result;
}

function isObject(obj) {
	return obj !== undefined && obj !== null && obj.constructor == Object;
}

function joinGame(callback, socket, id, pname) {
	socket.join(id);

	const data = JSON.parse(fs.readFileSync(`${__dirname}/../data/${id}.json`, 'utf8'));

	if(data.players.length > 3) return callback({ code: 'MAXPL' });

	data.players.push(pname);

	fs.writeFileSync(`${__dirname}/../data/${id}.json`, JSON.stringify(data, null, '\t'), 'utf-8');
}

module.exports = {
	pswd,
	makeid,
	isObject,
	joinGame,
};