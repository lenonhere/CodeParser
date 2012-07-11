/**
 * @author yelp
 */
var exports = module.exports;

var EOF = String.fromCharCode(-1);
var EOF_TYPE = 1;
//var input;
//var p = 0;
//var c = EOF;

function consume() {
    this.p++;
//    console.log("p : " + this.p);
    if (this.p >= this.input.length) {
        this.c = EOF;
    } else {
        this.c = this.input.charAt(this.p);
    }
}

function match(x) {
    if (this.c == x) {
        this.consume();
    } else {
        throw ("expecting " + x + "; found " + this.c);
    }
}

function nextToken() {
}

function getTokenName(tokenType) {
}

function sayPandplus(){
    console.log(this.p);
    this.p++;
}

function Lexer(input){
    this.p = 0;
    this.input = input;
    this.c = input.charAt(this.p);
    
    if('function' != typeof this.consume){
        Lexer.prototype.EOF = EOF;
        Lexer.prototype.EOF_TYPE = EOF_TYPE;
        Lexer.prototype.consume = consume;
        Lexer.prototype.match = match;
        Lexer.prototype.nextToken = nextToken;
        Lexer.prototype.getTokenName = getTokenName;
        Lexer.prototype.sayPandplus = sayPandplus;
    }
}

exports.Lexer = Lexer;