const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const path = require('path');
const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Servir o arquivo index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'index.html')); // Ajuste para acessar a pasta pai
});

// Servir arquivos estáticos das pastas 'js' e 'css'
app.use('/js', express.static(path.join(__dirname)));
app.use('/css', express.static(path.join(__dirname, '..', 'css')));

io.on('connection', (socket) => {
    console.log('Usuário conectado');

    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
    });

    socket.on('disconnect', () => {
        console.log('Usuário desconectado');
    });
});

const port = process.env.PORT || 3000;  // Usar a porta fornecida pelo Render ou 3000 como fallback
server.listen(port, '0.0.0.0', () => {
    console.log(`Servidor rodando em http://0.0.0.0:${port}`);
});