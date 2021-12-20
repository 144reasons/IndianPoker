const express = require('express');
const router = express.Router();
const utils = require('../utils/utils');
const randomWords = require('random-words');

/* POST game/newgame listing. */
router.post('/newgame', function(req, res, next) {
	const body = req.body;

	console.log(body);

	const gamename = randomWords({ exactly:1, wordsPerString:2, separator:'-' });

	const pswd = utils.pswd(4);

	res.send({
		message: 'Creating game...',
		settings: {
			name: gamename,
			password: pswd,
		},
	});
});

module.exports = router;
