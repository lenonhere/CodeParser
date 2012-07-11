/**
 * @author yelp
 */
var util = require('util');
var MyUtil = require('./MyUtil').MyUtil;
//var Lexer = require('./Lexer').Lexer;
var ListLexer = require('./ListLexer').ListLexer;
var Token = require('./Token').Token;

console.log('test is beginning...');

function SuperType(name){
    this.myname = name;
    this.colors = ["red", "blue", "yellow"];
SuperType.prototype.KEY = "Super";
}

SuperType.prototype.sayName = function(){
    console.log(this.myname);
}


function SubType(name, age){
    SuperType.call(this, name);
    this.age = age;
}

util.inherits(SubType, SuperType);
//MyUtil.inheritPrototype(SubType, SuperType);

SubType.prototype.sayAge = function(){
    console.log(this.age);
    console.log("SuperType.KEY : " + SuperType.KEY);
    console.log("SuperType.sayName : " + SuperType.sayName);
    console.log("SuperType.prototype.sayName : " + SuperType.prototype.sayName);
    console.log("SubType.KEY : " + SubType.KEY);
    console.log("this.KEY : " + this.KEY);
    console.log("SubType.sayName : " + SubType.sayName);
    console.log("this.sayName : " + this.sayName);
}

var sub = new SubType("lenon", 2)
console.log("sub.KEY : " + sub.KEY);

//console.log(util.inspect(SubType, true, 6, true));return;
//console.log(util.inspect(sub, true, 6, true));return;

console.log('inspect >> sub << ');
console.log(util.inspect(sub, true, 4, true));

console.log('inspect >> SuperType.prototype << ');
console.log(util.inspect(SuperType.prototype, true, 4, true));

console.log('inspect >> SubType.prototype << ');
console.log(util.inspect(SubType.prototype, true, 4, true));

sub.sayName();
sub.sayAge();

console.log("SubType.super_.name : " + SubType.super_.name);
console.log("SubType.name : " + SubType.name);
console.log('test ended...');
