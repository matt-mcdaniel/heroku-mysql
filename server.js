const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const port = process.env.PORT || 3000;

const app = express();

app.use(methodOverride('_method'));
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));

const exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

const routes = require('./controllers/burgers_controller');

app.use('/', routes);

app.listen(port, err => {
    if (err) throw err;

    console.log('listening on port', port);
});
