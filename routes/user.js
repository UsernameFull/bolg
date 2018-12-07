/*
*  所有的增删改查的操作
*/
/*
 * GET comments listing.
 * 完整的定义增删改查
 */

var userSchema = require("../model/userDB.js"); // 引入的model，可用来操作数据库和生成Entity
var mongoose = require("mongoose");

var db1 = mongoose.createConnection("mongodb://127.0.0.1:27017/blog"); // 链接数据库
var user = db1.model("user", userSchema);

exports.login = function(req, res) {
  user.find({ _id: req.params.id }, function(err, user) {
    if (err) {
      console.log("用户 "+user.name+" 不存在");
    }
    res.json(user);
  });
};

exports.register = function(req, res) {
  user.find({ _id: req.params.id }, function(err, user) {
    if (err) {
      console.log("用户 "+user.name+" 不存在");
    }
    res.json(user);
  });
};
