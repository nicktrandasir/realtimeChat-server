const express = require('express');
const http = require('https');
const {Server} = require('socket.io');
const cors = require('cors');
const app = express();
const route = require('./route');
const port = 5000;

app.use(cors({origin: "*"}));
app.use(route);

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: '*',
        methods: ["GET", "POST"]
    }
})

server.listen(port, () => {
    console.log(`Server is running on port ${port}!`)
});
