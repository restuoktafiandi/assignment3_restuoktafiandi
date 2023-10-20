const {
  DB_DIALECT_DEV,
  DB_DIALECT_PROD,
  DB_DIALECT_TEST,
  DB_NAME_DEV,
  DB_NAME_TEST,
  DB_NAME_PROD,
  DB_HOST_DEV,
  DB_HOST_TEST,
  DB_HOST_PROD,
  DB_USERNAME_DEV,
  DB_USERNAME_TEST,
  DB_USERNAME_PROD,
  DB_PASSWORD_DEV,
  DB_PASSWORD_TEST,
  DB_PASSWORD_PROD,
} = require('../config')

const config = {
  "development": {
    "username": DB_USERNAME_DEV,
    "password": DB_PASSWORD_DEV,
    "database": DB_NAME_DEV,
    "host": DB_HOST_DEV,
    "dialect": DB_DIALECT_DEV
  },
  "test": {
    "username": DB_USERNAME_TEST,
    "password": DB_PASSWORD_TEST,
    "database": DB_NAME_TEST,
    "host": DB_HOST_TEST,
    "dialect": DB_DIALECT_TEST
  },
  "production": {
    "username": DB_USERNAME_PROD,
    "password": DB_PASSWORD_PROD,
    "database": DB_NAME_PROD,
    "host": DB_HOST_PROD,
    "dialect": DB_DIALECT_PROD
  }
}

module.exports = config