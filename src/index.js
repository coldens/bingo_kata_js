const express = require('express');
const helmet = require('helmet');
const { Config } = require('./config/Config');
const { Logger } = require('./config/logger');
const { sequelize } = require('./config/sequelize');
const { router } = require('./controllers/router');

const main = async () => {
  await sequelize.sync();

  const app = express();

  app.use(express.json());
  app.use(helmet());

  app.use(function (err, req, res, next) {
    Logger.error(err.stack);
    res.status(500).send('Something broke!');
  });

  app.use(router);

  const port = Config.get('APP_PORT');

  app.listen(port, () => {
    Logger.info(`app is listening on port ${port}`);
  });
};

main().catch((err) => {
  Logger.error(err);
  process.exit(1);
});
