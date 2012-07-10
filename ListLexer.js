/**
 * @author yelp
 */
var Util = require('./Util').Util;
var Lexer = require('./Lexer').Lexer;
var Token = require('./Token').Token;
var exports = module.exports;

exports.ListLexer = function() {
    var thisLexer = this;;
    //thisLexer.prototype = Lexer;
    Util.inheritPrototype();
    thisLexer.NAME = 2;
    thisLexer.COMMA = 3;
    thisLexer.LBRACK = 4;
    thisLexer.RBRACK = 5;
    thisLexer.tokenNames = Util.tokenNames;

    thisLexer.constructor = function constructor(input) {
        thisLexer.prototype.constructor(input);
    }

    thisLexer.getTokenName = function getTokenName(x) {
        return tokenNames[x];
    }

    thisLexer.isLETTER = function isLETTER() {
        return ((c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z'));
    }

    thisLexer.nextToken = function nextToken() {
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

    function WS() {
        while (c == ' ' || c == '\t' || c == '\n' || c == '\r')consume();
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
