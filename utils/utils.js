/* eslint-disable */

function pswd(length) {
	let result = '';
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

module.exports = {
	pswd,
	makeid,
};