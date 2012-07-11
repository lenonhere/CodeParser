/**
 * @author yelp
 */
var MyUtil = require('./MyUtil').MyUtil;
var exports = module.exports;

function toString() {
    var tname = MyUtil.tokenNames[this.type];
    return "<'" + this.text + "'," + tname + ">";
}

function Token(type, text) {
    this.type = type;
    this.text = text;

    if (!this.hasOwnProperty(toString) || ('function' != typeof this.toString)) {
        Token.prototype.toString = toString;
    }
}

exports.Token = Token;
