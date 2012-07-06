/**
 * @author yelp
 */
var exports = module.exports;

exports.Lexer = (function(){
    var thisLexer = this || {};
    thisLexer.EOF = String.fromCharCode(-1);
    thisLexer.EOF_TYPE = 1;
    thisLexer.input;
    thisLexer.p = 0;
    thisLexer.c = thisLexer.EOF;
    
    thisLexer.constructor = function constructor(input){
        thisLexer.input = input;
        thisLexer.c = input.charAt(p);
    }
    
    thisLexer.consume = function consume(){
        p++;
        if (p >= input.length) {
            c = EOF;
        } else {
            c = input.charAt(p);
        }
    }

    thisLexer.match = function match(x) {
        if (c == x) {
            consume();
        } else {
            throw ("expecting " + x + "; found " + c);
        }
    }
    
    thisLexer.nextToken = function nextToken(){};
    thisLexer.getTokenName = function getTokenName(tokenType){};
    
    return thisLexer;
})();