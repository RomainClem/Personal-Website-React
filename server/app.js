//
// const express = require('express')
//     , path = require('path')
//     , bodyParser = require('body-parser')
//     , morgan = require('morgan')
//
// const app = express();
//
// app.set('port', process.env.PORT || 5000)
// app.use(morgan('dev'))
// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(express.static(path.join(__dirname, 'client/build')))
//
// if (app.get('env') === 'development') {
//     app.locals.pretty = true;
// }
//
// // The "catchall" handler: for any request that doesn't
// // match one above, send back React's index.html file.
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname+'../client/build/index.html'));
// });
//
// app.listen(app.get('port'), function(){
//     console.log("Express server listening on port " + app.get('port'));
// });


require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const path = require('path');

const app = express();
const port = process.env.PORT || 5000;

// use body parser to get data from POST requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



// Serve any static files
app.use(express.static(path.join(__dirname, '../client/build')));

// Handle React routing, return all requests to React app
app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});


app.listen(port, () => console.log(`Listening on port ${port}`));