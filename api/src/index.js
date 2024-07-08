const express = require('express');
const app = express();
const PORT = process.env.PORT;

app.get('/test', (req, res) => {
   res.send('Our api server is working correctly');
});

app.listen(PORT, () => {
   console.log(`Started api server on port ${PORT}`);
});