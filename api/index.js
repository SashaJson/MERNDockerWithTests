const express = require('express');
const { connectDb } = require('../helpers/db')
const app = express();
const { PORT, db } = require('../configuration');

const startServer = () => {
   app.listen(PORT, () => {
      console.log(`Started api server on port ${PORT}`);
      console.log(`Our db ${db}`);
   });
};

app.get('/test', (req, res) => {
   res.send('Our api server is working correctly');
});

connectDb()
   .on('error', console.log)
   .on('disconnect', connectDb)
   .once('open', startServer);