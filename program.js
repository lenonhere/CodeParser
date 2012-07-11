/**
 * @author yelp
 */
var util = require('util');
var MyUtil = require('./MyUtil').MyUtil;
//var Lexer = require('./Lexer').Lexer;
var ListLexer = require('./ListLexer').ListLexer;
var Token = require('./Token').Token;

//MyUtil.printProperties(arguments);

//console.log(util.inspect(lexer, false, 2, true));
//process.argv.forEach(function (val, index, array) {
//  console.log(index + ': ' + val);
//});

console.log('process.argv[2] : >> ' + process.argv[2] + ' <<');
//var lexer = new Lexer('[ java ]');
var lexer = new ListLexer(process.argv[2]);
//var lexer2 = new Lexer('[ dotnet ]');
//var token = new Token(0, 'empty');
//console.log(util.inspect(lexer, true, 2, true));
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
for(var i in MyUtil){
console.log(i + ' : ' + MyUtil[i]);
}
*/
//MyUtil.printProperties(token);
//console.log('p is : >> ' + lexer.p +' <<');
//MyUtil.printProperties(lexer);
//console.log(MyUtil.tokenNames[1]);
//console.log(util.inspect(ListLexer, true, 4, true));return;
//var t = lexer.nextToken();
//while (t.type != lexer.EOF_TYPE) {
//    console.log("t.type : " + t.type);
//    console.log("ListLexer.EOF_TYPE : " + ListLexer.EOF_TYPE);
//    console.log(t.toString());
//    t = lexer.nextToken();
//}
var t;
do {
    t = lexer.nextToken();
    console.log(t.toString());
} while(t.type != lexer.EOF_TYPE);

//console.log(t.toString());
// EOF
console.log('test ended...'); 