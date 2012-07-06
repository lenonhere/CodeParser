/**
 * @author yelp
 */
var ListLexer = require('ListLexer').ListLexer;
var Token = require('Token').Token;

var lexer = new ListLexer(args[0]);
var t = lexer.nextToken();
while (t.type != Lexer.EOF_TYPE) {
    console.log(t);
    t = lexer.nextToken();
}
console.log(t);
// EOF