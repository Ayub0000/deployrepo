const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 8000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(path.dirname, 'public', 'index.html '))
});

app.listen(PORT, (req, res) => {
    console.log(`server is running on port ${PORT}`)
});