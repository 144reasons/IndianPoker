const readline = require('readline'),
	rl = readline.createInterface(process.stdin, process.stdout);

const { io } = require('socket.io-client');
const socket = io('ws://localhost:3000');

rl.setPrompt('IP> ');
rl.prompt();

rl.on('line', function(line) {
	const args = line.trim().split(/ +/);

	const command = args.shift().toLowerCase();

	switch(command) {
	case 'hello':
		console.log('world!');
		break;
	case 'myrooms':
		socket.emit('myrooms');
		break;
	case 'creategame':
		console.log('Contacting given socket with either given or default values');

		const req = {
			chips: args[0] || 100,
			fee: args[1] || 1,
		};

		socket.emit('creategame', req);

		break;
	case 'args':
		console.log(args);

		break;
	default:
		console.log(`${command} is not a command`);
		break;
	}
	rl.prompt();
}).on('close', function() {
	console.log('exit\nExiting program...');
	process.exit(0);
});

socket.on('yourrooms', (...args) => {
	console.log(args);
});

socket.on('update', (...args) => {
	console.log(args);
});