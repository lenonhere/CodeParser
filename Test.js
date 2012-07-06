/**
 * @author yelp
 */
var Lexer = require('./Lexer').Lexer;
var ListLexer = require('./ListLexer').ListLexer;
var Token = require('./Token').Token;

//var lexer = Lexer;
var lexer = new ListLexer(arguments[0]);
for(i in lexer){
 console.log(i + ' : ' + lexer.i);//i就是test的属性名
}
//var t = lexer.nextToken();
//while (t.type != Lexer.EOF_TYPE) {
//    console.log(t);
//    t = lexer.nextToken();
//}

//console.log(t);
// EOF