const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const compression = require('compression');
const responseTime = require('response-time');
const mongoose = require('mongoose');

const {
  server,
  db,
} = require('./config');

const app = express();

app.use(compression());
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(responseTime());

require('./routes')({
  app,
});

const PORT = server.port;

mongoose.connect(`mongodb://${db.DB_HOST}:${db.DB_PORT}/${db.DB_NAME}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.info('Successfully connected to the database');
  app.listen(PORT, () => {
    console.info(`Server is up and running on ${PORT}`);
  });
}).catch((err) => {
  console.error(err);
});
