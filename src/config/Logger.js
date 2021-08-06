const pino = require('pino');
const { Config } = require('./Config');

const Logger = pino({
  prettyPrint: {
    colorize: true,
    translateTime: true,
  },
  enabled: Config.get('ENVIRONMENT') !== 'TEST',
});

module.exports = { Logger };
