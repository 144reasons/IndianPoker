const express = require('express');
const router = express.Router();
const utils = require('../utils/utils');
const randomWords = require('random-words');
const fs = require('fs');

/* POST game/newgame listing. */
router.post('/newgame', function(req, res, next) {
	const body = req.body;

	console.log(body);

	const gamename = randomWords({ exactly:1, wordsPerString:2, separator:'-' });

	const pswd = utils.pswd(4);

	if(!body.players || !body.chips || !body.fee) {
		return res.status(400) && res.send(
			{
				error: 'You need to include in your response the following fields: players, chips, fee',
				example: {
					players: 2,
					chips: 100,
					fee: 1,
					adminpassword: 'Bazinga',
				},
			});
	}

	if(!body.adminpassword) {
		return res.status(400) && res.send(
			{
				error: 'You need to include in your response the adminpassword field. This is necessary to delete games!',
				example: {
					players: 2,
					chips: 100,
					fee: 1,
					adminpassword: 'Bazinga',
				},
			},
		);
	}

	const gamedata = {
		settings: {
			players: body.players,
			chips: body.chips,
			fee: body.fee,
		},
		password: pswd,
		adminpassword: body.adminpassword,
		gamename: gamename[0],
	};

	if(!fs.existsSync(`${__dirname}/../data/`)) fs.mkdirSync(`${__dirname}/../data/`);

	fs.writeFileSync(`${__dirname}/../data/${gamename}.json`, JSON.stringify(gamedata, null, '\t'), 'utf-8');

	res.send({
		message: 'Creating game...',
		settings: {
			name: gamename,
			password: pswd,
		},
	});
});

/* DELETE game/:id listing. */

router.delete('/:id', function(req, res, next) {
	if(!fs.existsSync(`${__dirname}/../data/${req.params.id}.json`)) return res.status(404) && res.send({ error: `${req.params.id} was not found!` });

	let gamedata = fs.readFileSync(`${__dirname}/../data/${req.params.id}.json`);

	gamedata = JSON.parse(gamedata);

	if(!req.body.adminpassword) return res.status(401) && res.send({ error: 'No adminpassword given' });

	if(gamedata.adminpassword !== req.body.adminpassword) return res.status(403) && res.send({ error: 'Admin passwords do not match' });


	fs.unlink(`${__dirname}/../data/${req.params.id}.json`, (err) => {
		if (err) {
			console.error(err);
			return;
		}

		console.log(`deleted ${req.params.id}`);
		res.send({ message: 'Game deleted successfully!' });
	});
});

module.exports = router;
