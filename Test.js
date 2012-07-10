/**
 * @author yelp
 */
var Util = require('./Util').Util;
var Lexer = require('./Lexer').Lexer;
var ListLexer = require('./ListLexer').ListLexer;
var Token = require('./Token').Token;

var lexer = new Lexer('[ java ]');
//var lexer = new ListLexer(arguments[0]);
//var lexer2 = new Lexer('[ dotnet ]');
var token = new Token(0, 'empty');
console.log('test is beginning...');
/*
for(var i in lexer){
    console.log(i + ' : ' + lexer[i]);//i就是test的属性名
}
console.log('lexer == lexer2 ? ' + (lexer == lexer2));
for(var i in lexer){
    console.log('lexer['+ i + '] === lexer2['+ i + '] ? ' + (lexer[i] === lexer2[i]));
    console.log('lexer hasOwnProperty >> ' + i + ' << : ' + lexer.hasOwnProperty(i));
}
for(var i=0,j=10; i<j; i++){
  lexer.sayPandplus();
  lexer2.sayPandplus();
};
debugger;
for(var i in Util){
    console.log(i + ' : ' + Util[i]);
}
*/
Util.printProperties(token);
//console.log('p is : >> ' + lexer.p +' <<');
//var t = lexer.nextToken();
//while (t.type != Lexer.EOF_TYPE) {
//    console.log(t);
//    t = lexer.nextToken();
//}

//console.log(t);
// EOF
console.log('test ended...');