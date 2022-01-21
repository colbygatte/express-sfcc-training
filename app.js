const express = require('express');
const app = express();

require('./src/db').setup();
require('dotenv').config();

app.set('view engine', 'ejs');
app.use(express.static('dist'));

app.get('/', function (req, res) {
    res.redirect('/home/show');
});
app.use('/login', require('./routes/login'));
app.use('/home', require('./routes/home'));

app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT || 3000}.`);
});
