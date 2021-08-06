const express = require('express');
const helmet = require('helmet');

const main = async () => {
  const app = express();

  app.use(express.json());
  app.use(helmet());
};

main();
