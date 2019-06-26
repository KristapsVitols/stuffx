const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const PORT = process.env.PORT || 5000;

app.use(express.json());

let messages = [];

app.get('/api', (req, res) => {
    res.json({status: 200, message: 'Welcome to API'});
});

app.get('/api/get-messages', (req, res) => {
    res.json({status: 200, messages});
});

app.post('/api/add-message', (req, res) => {
    let data = {user: req.body.user, message: req.body.message};
    messages.push(data);

    io.emit('MESSAGE', data);
});

http.listen(PORT, () => console.log(`Server up on ${PORT}`));