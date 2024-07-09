const express = require('express');
const { connectDb } = require('./helpers/db');
const { PORT, db } = require('./configuration/index');
const catRoutes = require('./routes/catRoutes');
const app = express();

app.use(express.json());
app.use('/api', catRoutes);

const startServer = () => {
   app.listen(PORT, () => {
      console.log(`Started api server on port ${PORT}`);
      console.log(`Our db ${db}`);
   });
};

connectDb()
    .on('error', console.log)
    .on('disconnect', connectDb)
    .once('open', startServer);