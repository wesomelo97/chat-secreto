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

//development - localhost
// //production - render
const isProduction = process.env.NODE_ENV === 'development'; 
const port = process.env.PORT || 3000;  // Usar a porta fornecida pelo Render ou 3000 como fallback
const host = isProduction ? '0.0.0.0' : 'localhost';

server.listen(port, host, () => {
    console.log(`Servidor rodando em http://${host}:${port}`);
});