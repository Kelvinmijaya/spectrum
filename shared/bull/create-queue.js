// @flow
var Queue = require('bull');

var redis = process.env.NODE_ENV === 'production'
  ? {
      port: process.env.COMPOSE_REDIS_PORT,
      host: process.env.COMPOSE_REDIS_URL,
      password: process.env.COMPOSE_REDIS_PASSWORD,
    }
  : undefined; // Use the local instance of Redis in development by not passing any connection string

// Leave the options undefined if we're using the default redis connection
const options = redis && { redis: redis };

function createQueue(name /*: string */) {
  return new Queue(name, options);
}

module.exports = createQueue;