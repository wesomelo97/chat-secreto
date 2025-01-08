const socket = io("https://chat-secreto.onrender.com/");
<<<<<<< HEAD
=======
//const socket = io("http://localhost:3000/");

>>>>>>> 6208a9d (Implementado o envio com o enter, e implementado modo localhost e geral)

function sendMessage() {
    const message = document.getElementById('message').value;
    if (message.trim() !== '') {
        const encryptedMessage = btoa(message); // Criptografia simples (Base64)
        socket.emit('chat message', encryptedMessage);
        document.getElementById('message').value = '';
    }
}

socket.on('chat message', (msg) => {
    const decryptedMessage = atob(msg); // Descriptografar (Base64)
    const chatBox = document.getElementById('chat-box');
    const newMessage = document.createElement('div');
    newMessage.textContent = decryptedMessage;
    chatBox.appendChild(newMessage);
    chatBox.scrollTop = chatBox.scrollHeight;
});
<<<<<<< HEAD
=======

>>>>>>> 6208a9d (Implementado o envio com o enter, e implementado modo localhost e geral)
