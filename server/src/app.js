const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const compression = require('compression');
const config = require('./config');

const app = express();

app.use(compression());
app.use(cors());
app.use(helmet());
app.use(express.json());

require('./routes')(app);

const PORT = config.server.port;

app.listen(PORT, () => {
  console.info(`Server is up and running on ${PORT}`);
});
