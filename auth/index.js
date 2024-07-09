const express = require('express');
const { connectDb } = require('./helpers/db');
const { PORT, db } = require('./configuration/index');
const authRoutes = require('./routes/authRoutes');
const app = express();

app.use(express.json());
app.use('/auth', authRoutes);

const startServer = () => {
    app.listen(PORT, () => {
        console.log(`Started auth server on port ${PORT}`);
        console.log(`Our db ${db}`);
    });
};

connectDb()
    .on('error', console.log)
    .on('disconnect', connectDb)
    .once('open', startServer);
