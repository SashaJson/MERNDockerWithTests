const mongoose = require('mongoose');
const { db } = require('../configuration/index');

module.exports.connectDb = () => {
  mongoose.connect(db, { userNewUrlParser: true });

  return mongoose.connection;
};