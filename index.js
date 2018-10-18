const express = require('express');
const bodyParser = require('body-parser');
const verifyWebhook = require('./verify-webhook');
const app = express();
var port = process.env.PORT || 8080;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


    app.get('/', verifyWebhook);

app.listen(port, function() {
        console.log('Our app is running on http://localhost:' + port);
    });