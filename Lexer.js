/**
 * @author yelp
 */
var exports = module.exports;

exports.Lexer = function(){
    var thisLexer = this || {};
    var EOF = String.fromCharCode(-1);
    var EOF_TYPE = 1;
    String input;
    var p = 0;
    var c;
    
    function constructor(input){
        thisLexer.input = input;
        c = input.charAt(p);
    }
    
    function consume(){
        p++;
        if (p >= input.length) {
            c = EOF;
        } else {
            c = input.charAt(p);
        }
    }

    function match(x) {
        if (c == x) {
            consume();
        } else {
            throw ("expecting " + x + "; found " + c);
        }
    }
    
    function nextToken(){};
    function getTokenName(tokenType){};
    
    return {
        EOF : EOF,
        EOF_TYPE : EOF_TYPE,
        constructor : constructor,
        consume : consume,
        match : match,
        nextToken : nextToken,
        getTokenName : getTokenName
    };
};