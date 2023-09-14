const app = require('./src/app');
const sockeio = require('socket.io')


const server = app.listen(app.get('port'), () => {
    console.log(`corriendoo en el puerto: ${app.get('port')}`);
})

//Creamos le desimos al socke que escuche y como parametro le pasamas el sservidor ya creado
const io = sockeio(server);

io.on('connection', (socket) => {
    console.log('new connection ' + socket.id)
    
    socket.on('chat', (data) => {
        io.sockets.emit('chat', data)
    })

    socket.on('typing', (data) => {
        socket.broadcast.emit('typing', data)
    })
})  