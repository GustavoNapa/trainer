const mongose = require('mongoose');

mongose.connect('mongodb://localhost:27017/trainer', { useNewUrlParser: true, useUnifiedTopology: true });
mongose.Promise = global.Promise;

module.exports = mongose;