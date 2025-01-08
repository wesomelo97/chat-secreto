document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#message-input');
    const input = document.querySelector('#message');
    const socket = io("http://localhost:3000/");

    // Adicionar listener para o Enter
    input.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault(); // Evitar a quebra de linha no input
            sendMessage(); // Chama a função do main.js
        }
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        sendMessage(); // Chama a função do main.js
    });
});

//teste de git