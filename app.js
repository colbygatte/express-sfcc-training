const express = require('express');
const path = require('path');
const router = express.Router();
const favicon = require('serve-favicon');
const mustacheExpress = require('mustache-express');
const app = express();
const mustache = mustacheExpress(path.join(__dirname, 'views', 'partials'));

require('dotenv').config();

mustache.cache = null;
app.engine('mustache', mustache);
app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');
app.use(express.static('dist'));

// "Controllers"
app.use('/login', require('./routes/login'));
app.use('/home', require('./routes/home'));

app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT || 3000}.`);
});
