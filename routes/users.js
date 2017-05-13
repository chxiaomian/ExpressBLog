var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var User  = mongoose.model("User");
/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});


router.get("/test", function (req, res, next) {
    var user = new User({uid: 1, username: 'zhang meng'})

    user.save(function (err) {
        if(err){
            res.end('Error');
            return next();
        }
        User.find({},function (err,doc) {
            if(err){
                res.end('Error');
                return next();
            }
            res.json(doc);
        })
    })
})
module.exports = router;
