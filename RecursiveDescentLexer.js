/**
 * @author yelp
 */
var Lexer = require('Lexer').Lexer;
var exports = module.exports;

exports.RecursiveDescentLexer = function(){
    var thisLexer = this || {};
    thisLexer.prototype = Lexer;
    
}
