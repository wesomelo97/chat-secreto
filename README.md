# Chat Secreto (Projeto de Bate-Papo Pessoal)

Este é um projeto de bate-papo simples e seguro, desenvolvido para permitir a comunicação entre duas pessoas com a funcionalidade de mensagens que se apagam após 24 horas. A comunicação é criptografada, e as mensagens são temporárias, com a intenção de garantir privacidade e segurança.

## Funcionalidades

- **Bate-papo em tempo real**: Comunicação instantânea entre as duas partes, utilizando o Socket.IO.
- **Mensagens temporárias**: Mensagens desaparecem após 24 horas.
- **Interface simples e funcional**: Apenas uma área de texto para interação.
- **Criptografia**: A comunicação é protegida com uma conexão segura, mantendo a privacidade das mensagens.

## Tecnologias Utilizadas

- **Frontend**:
  - HTML5
  - CSS3
  - JavaScript
  - Socket.IO (para comunicação em tempo real)
  
- **Backend**:
  - Node.js
  - Express.js
  - Socket.IO (para comunicação em tempo real)
  - Armazenamento em memória para mensagens temporárias (com duração de 24 horas)

## Como Rodar Localmente

### Pré-requisitos

1. Ter o **Node.js** instalado em sua máquina. Se não tiver, baixe e instale a partir do [site oficial](https://nodejs.org/).
   
2. Clone o repositório para a sua máquina local:
   git clone https://github.com/usuario/projeto-chat-secreto.git
   cd projeto-chat-secreto
3. Instale as dependências:
    npm install
   


