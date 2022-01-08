const readline = require('readline'),
	rl = readline.createInterface(process.stdin, process.stdout);

const { io } = require('socket.io-client');
const socket = io('ws://localhost:3000');
const fs = require('fs');

rl.setPrompt('IP> ');
rl.prompt();

rl.on('line', function(line) {
	const args = line.trim().split(/ +/);

	const command = args.shift().toLowerCase();

	const commandsFile = fs
		.readdirSync(__dirname + '/./commands')
		.filter((file) => file.endsWith('.js'));

	for (const file of commandsFile) {
		const commandfile = require(`./commands/${file}`);

		if(command === commandfile.name) {
			commandfile.execute(socket, args);
		}
		else if (command === 'clear') {
			console.clear();
		}

	}
	rl.prompt();
}).on('close', function() {
	console.log('exit\nExiting program...');
	process.exit(0);
});

socket.on('yourrooms', (...args) => {
	console.log('yourrooms event triggered\n');
	console.log(args);
	console.log('IP> ');
});

socket.on('update', (...args) => {
	console.log('update event triggered');
	console.log(args);
	console.log('IP> ');
});

socket.on();