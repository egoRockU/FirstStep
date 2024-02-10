const express = require('express');
const mongoose = require('mongoose');

const app = express();

/* Middleware */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* Routes */
const ApplicantProfileRoutes = require('./src/routes/ApplicantProfile')

app.use('/ApplicantProfile', ApplicantProfileRoutes)


/* Connection to MongoDB */
const dbConfig = 'mongodb://127.0.0.1:27017'
const dbName = 'backend22';

mongoose.connect(`${dbConfig}/${dbName}`)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

const port = 3001;

app.listen(port, () => {
  console.log('Listening on port:', port);
});
