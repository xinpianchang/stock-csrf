const express = require('express');
const csrf = require('../index.js');

const app = express();

const csrfProtection = csrf({ cookie: true, ignoreUrls: ['/a'] });

app.use(csrfProtection);

app.listen(3000);