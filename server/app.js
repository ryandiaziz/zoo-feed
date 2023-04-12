require('dotenv').config();
const express = require('express');
const routes = require('./routes');
const cors = require('cors')
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'))
app.use(routes);


app.listen(port, () => {
    console.log(`App listen on port ${port}`);
})