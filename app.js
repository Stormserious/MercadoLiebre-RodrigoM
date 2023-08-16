const  express = require('express');
const app = express();
const path = require('path');


app.use(express.static('public'));
app.use(express.static('views'));
const PORT = process.env.PORT || 3001;

app.listen( PORT, () => console.log(`Server up:  PORT:${PORT}`) );

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html'))
})

app.get('/login', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/login.html'))
})

app.get('/register', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/register.html'))
})
