const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://abhishekdesai508:Hello12345@cluster0.tcfmmt2.mongodb.net/");

module.exports = mongoose.connection;
