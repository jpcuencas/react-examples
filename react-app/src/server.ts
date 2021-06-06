const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const dotenv = require('dotenv');

dotenv.config();

const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/ping', function (req: any, res: any) {
 return res.send('pong');
});

app.get('/', function (req: any, res: any) {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

app.listen(PORT, () => {
    console.log("server now up at port " + PORT);
});