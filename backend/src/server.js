const { WebSocketServer } = require("ws");
const dotenv = require("dotenv");

dotenv.config();

const wss = new WebSocketServer({ port: process.env.PORT || 8080 });

// Estrutura de dados para armazenar clientes
const clients = new Map();

wss.on("connection", (ws) => {
    ws.on("error", console.error);

    // Envia mensagens antigas para o cliente recém-conectado
    if (messages.length > 0) {
        messages.forEach((msg) => {
            ws.send(JSON.stringify(msg));
        });
    }

    ws.on("message", (data) => {
        const message = JSON.parse(data);

        if (!clients.has(message.userId)) {
            clients.set(message.userId, []);
        }
        clients.get(message.userId).push(message);

        wss.clients.forEach((client) => {
            client.send(data);
        });
    });

    console.log("client connected");
});
