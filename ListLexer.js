/**
 * @author yelp
 */
var util = require('util');
var MyUtil = require('./MyUtil').MyUtil;
var Lexer = require('./Lexer').Lexer;
var Token = require('./Token').Token;
var exports = module.exports;

function getTokenName(x) {
    return this.tokenNames[x];
}

function isLETTER() {
    return ((this.c >= 'a' && this.c <= 'z') || (this.c >= 'A' && this.c <= 'Z'));
}

function nextToken() {
    while (this.c != this.EOF) {
        switch(this.c) {
            case ' ':
            case '\t':
            case '\n':
            case '\r':
                this.WS();
                continue;
            case ',' :
                this.consume();
                return new Token(this.COMMA, ",");
            case '[' :
                this.consume();
                return new Token(this.LBRACK, "[");
            case ']' :
                this.consume();
                return new Token(this.RBRACK, "]");
            default:
                if (this.isLETTER())
                    return this.NameToken();
                throw ("invalid character: " + c);
        }
    }
//    console.log('inspect >> Lexer << ');
//    console.log(util.inspect(Lexer, true, 2, true));
//    console.log("Lexer.EOF_TYPE : " + Lexer.EOF_TYPE);
    return new Token(this.EOF_TYPE, "<EOF>");
}

function NameToken() {
    var buf = new Array();
    do {
        buf.push(this.c);
        this.consume();
    } while ( this.isLETTER() );
    return new Token(this.NAME, buf.toString());
}

function WS() {
    while (this.c == ' ' || this.c == '\t' || this.c == '\n' || this.c == '\r') {
        this.consume();
    }
}

function ListLexer(input) {
    Lexer.call(this, input);
/*
    this.NAME = 2;
    this.COMMA = 3;
    this.LBRACK = 4;
    this.RBRACK = 5;
    this.tokenNames = MyUtil.tokenNames;
*/
}

//  MyUtil.inheritPropertype(ListLexer, Lexer);
util.inherits(ListLexer, Lexer);
console.log("typeof(this.isLETTER) : " + typeof (this.isLETTER));

//    console.log('inspect >> Lexer.prototype << ');
//    console.log(util.inspect(Lexer.prototype, true, 2, true));

if ('function' != typeof (this.isLETTER)) {
    console.log("run into prototype function injection")
    ListLexer.prototype.isLETTER = isLETTER;
    ListLexer.prototype.nextToken = nextToken;
    ListLexer.prototype.getTokenName = getTokenName;
    ListLexer.prototype.NameToken = NameToken;
    ListLexer.prototype.WS = WS;

    ListLexer.prototype.NAME = 2;
    ListLexer.prototype.COMMA = 3;
    ListLexer.prototype.LBRACK = 4;
    ListLexer.prototype.RBRACK = 5;
    ListLexer.prototype.tokenNames = MyUtil.tokenNames;
}

exports.ListLexer = ListLexer;
