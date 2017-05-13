/**
 * Created by Sean on 2017/5/13.
 */

var mongoose = require("mongoose");

var UserSchema = new mongoose.Schema({
    uid: Number,
    username: String,
    createTime: Date,
    lastLogin: Date
});

mongoose.model('User', UserSchema);