const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

let PORT  = 4006;

const app = express();
app.use(bodyParser.json());
app.use(cors());


app.listen(PORT, (err) => {
    if (err)
        console.log(err);
    else
        console.log(`Listen on the port ${PORT}...`);
});