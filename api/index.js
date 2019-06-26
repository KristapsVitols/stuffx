const app = require('express')();
const PORT = process.env.PORT || 5000;

app.get('/api', (req, res) => {
    res.json({status: 200, message: 'Welcome to API'});
});

app.listen(PORT, () => console.log(`Server up on ${PORT}`));