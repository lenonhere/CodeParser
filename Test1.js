/**
 * @author yelp
 */
var util = require('util');

function foo() {
    console.log(util.inspect(this, true, 0, true));
//    console.log(this["name"]);
}

foo();

console.log(foo == foo.prototype.constructor);

foo.prototype.constructor();
