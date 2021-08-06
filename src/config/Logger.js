const pino = require('pino');

const Logger = pino({
  prettyPrint: {
    colorize: true,
    translateTime: true,
  },
});

module.exports = { Logger };
