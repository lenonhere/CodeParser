/**
 * @author yelp
 */
var ListLexer = require('./ListLexer').ListLexer;
var exports = module.exports;

exports.Token = function(){
    var type, text;
    var thisToken = this || {};
    
    function constructor(type, text){
        thisToken.type = type;
        thisToken.text = text;
    };
    
    function toString(){
        var tname = ListLexer.tokenNames[type];
        return "<'"+text+"',"+tname+">";
    }
    
    return {
      type : type,
      text : text,
      constructor : constructor,
      toString : toString  
    };
};
