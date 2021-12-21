/**
 * Create socket.io server
 */

const io = new Server(server);

/**
  * Log client connect (TEMP)
  */

io.on('connection', (socket) => {console.log('a user connected');});