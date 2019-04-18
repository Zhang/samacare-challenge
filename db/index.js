const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/samacare');

const { connection } = mongoose;
connection.on('error', console.error.bind(console, 'connection error'));
connection.once('open', () => console.log('connected to mongodb'));

module.exports = connection;
