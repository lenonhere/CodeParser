/**
 * @author yelp
 */
var Lexer = require('./Lexer').Lexer;
var Token = require('./Token').Token;
var exports = module.exports;

exports.ListLexer = function() {
    var thisLexer = this || {};
    thisLexer.prototype = Lexer;
    var NAME = 2;
    var COMMA = 3;
    var LBRACK = 4;
    var RBRACK = 5;
    var tokenNames = ["n/a", "<EOF>", "NAME", "COMMA", "LBRACK", "RBRACK"];

    function constructor(input) {
        thisLexer.prototype.constructor(input);
    }

    function getTokenName(x) {
        return tokenNames[x];
    }

    function isLETTER() {
        return ((c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z'));
    }

    function WS() {
        while (c == ' ' || c == '\t' || c == '\n' || c == '\r')consume();
    }

    function nextToken() {
        while (c != EOF) {
            switch(c) {
                case ' ':
                case '\t':
                case '\n':
                case '\r':
                    WS();
                    continue;
                case ',' :
                    consume();
                    return new Token(COMMA, ",");
                case '[' :
                    consume();
                    return new Token(LBRACK, "[");
                case ']' :
                    consume();
                    return new Token(RBRACK, "]");
                default:
                    if (isLETTER())
                        return NAME();
                    throw ("invalid character: " + c);
            }
        }
        return new Token(EOF_TYPE, "<EOF>");
    }

    function NAME() {
        var buf = new Array();
        do {
            buf.push(c);
            consume();
        } while ( isLETTER() );
        return new Token(NAME, buf.toString());
    }

    return {
        tempProperty : 1,
        prototype : Lexer,
        NAME : NAME,
        COMMA : COMMA,
        LBRACK : LBRACK,
        RBRACK : RBRACK,
        tokenNames : tokenNames,
        constructor : constructor,
        getTokenName : getTokenName,
        nextToken : nextToken
    };
};
