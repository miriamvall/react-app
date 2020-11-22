const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

// Connect mongoDB
/*
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/mevn', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Database connected")
  },
  error => {
    console.log("Database could't be connected to: " + error)
  }
)
*/

mongoose.connect('mongodb://127.0.0.1:27017/mern');
mongoose.connection.on('error', console.error.bind(console, 'Database connection error:'));
mongoose.connection.once('open', function () {
  console.info('Successfully connected to the database');
});

const activityAPI = require('./routes/activity.route')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cors());

// API
app.use('/activities', activityAPI)

// Create port
const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
  console.log('Connected to port ' + port)
})

/*
// Find 404
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});
*/
