const express = require('express');
const app = express();
const { port } = require('./config')
const apiRouter = require('./routes/api');
const bodyParser = require('body-parser');
const cors = require('cors');

//db
require('./db/mongoose')

//parsery
//Content-type: application/json
app.use(bodyParser.json());

//fix cors
app.use(cors());

// routes
app.use('/api/', apiRouter);


app.use(cors({
    origin: 'http://localhost:3001',
    credentials: true,
}));



//server
app.listen(port, function() {
    console.log('serwer słucha... http://localhost:' + port)
})