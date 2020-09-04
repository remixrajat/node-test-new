const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

mongoose.connect('mongodb://localhost/apiproject', {useNewUrlParser: true, useUnifiedTopology: true});

const app = express();

const users = require("./routes/users");

app.use(logger('dev'));
app.use(bodyParser.json());

app.use('/users', users);

// app.get('/', (req, res, next) => {
//     res.status(200).json({
//         message: 'you requested index page'
//     })
// });





app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});


app.use((req, res, next) => {
    const error = app.get('env') === 'development' ? err : {};
    const status = err.status || 500;

    re.status(status).json({
        error: {
            message: err.message
        }
    });
    console.error(err);
});


const port = app.get('port') || 3000;

app.listen(port,() => console.log(`server is listening on port ${port}`));