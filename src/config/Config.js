class Config {
  static get(key) {
    return process.env[key];
  }
}

module.exports = { Config };