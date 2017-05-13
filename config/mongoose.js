/**
 * Created by Sean on 2017/5/13.
 */
var mongoose = require("mongoose");
var config = require("./config.js");

module.exports = function() {
    var db = mongoose.connect(config.mongodb);

    require('../models/User.js');
    return db;
}