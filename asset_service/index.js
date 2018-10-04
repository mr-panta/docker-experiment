const express = require('express');
const mongoose = require('mongoose');

const userRouter = require('./api/user');

mongoose.connect(`mongodb://${process.env.MONGO_HOST}:27017/user`, { useNewUrlParser: true }, err => {
  if (err) {
    console.warn(err);
  } else {
    console.log('Database connected');
  }
});

const app = express();
userRouter(app);

const server = app.listen(process.env.PORT, () => {
  console.log(`Server started successfully, running on port ${process.env.PORT}`);
});