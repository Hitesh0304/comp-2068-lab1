const express = require('express');

const app = express();

app.get('/', (req, res) =>{
    res.send(`/ - Home, /about - A small blurb about me, /contact - contact details`);
});

app.get('/about', (req, res) => {
    res.send(`I am Hitesh Moudgil and I am a Computer programming student at Georgian College, Barrie.I am doing this lab individually.`);
});

app.get('/contact', (req, res) => {
    res.send(`You can contact me on :
    Email - 200378502@student.georgianc.on.ca`);
});

app.listen(3000, () => console.log('Listening on 3000'));