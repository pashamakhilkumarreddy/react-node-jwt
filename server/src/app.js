const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const cors = require('cors');
const config = require('./config');
const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(helmet());
require('./routes')(app);

const PORT = config.server.port;

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
})