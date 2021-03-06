const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.send('Server state: <span style="color: green">ON</span>');
});

require('./controllers/userController')(app);
require('./controllers/playerController')(app);

app.listen(3000); 