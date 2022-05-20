


const express = require('express');
const app = express ();
const bodyParser = require ('body-parser');
const cors = require ('cors');

//configure api router
const apiRouter = require ('./api/apiRouter')
app.use('/api', apiRouter);

const hostname = '127.0.0.1';
const port = 9000;

//config bodyParser
const jsonParser = bodyParser.json();
const urlEncodedPraser = bodyParser.urlencoded({extended: false});
app.use(jsonParser);
app.use(urlEncodedPraser);


//config cors
app.use(cors());

//configure the router
//apiRouter.user('/api',apiRouter);
var api = express.Router();
//get employees

app.get('/',(request,response) => {
    response.send(`<h5>Welcome to Express Server of Employee Portal</h5>`);
});

app.listen (port, hostname, () => {
    console.log(`Express Server is Started at http:// ${hostname}:${port}`);
});

