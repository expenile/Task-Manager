const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');
require('./models/db');
const taskRoute = require('./routes/taskRoute');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 8080;
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.use('/tasks',taskRoute)


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

