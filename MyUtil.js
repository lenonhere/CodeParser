/**
 * @author yelp
 */
var util = require('util');
var exports = module.exports;

exports.MyUtil = (function() {
    function MyUtil() {
    }

    //        var thisUtil = this || {};
    MyUtil.prototype.tokenNames = ["n/a", "<EOF>", "NAME", "COMMA", "LBRACK", "RBRACK"];
    if ('function' != typeof (this.inheritPropertype)) {
        MyUtil.prototype.newObject = function(o) {
            function F() {};
            F.prototype = o;
//    console.log(util.inspect(F.prototype, true, 2, true));
            return new F();
        }

        MyUtil.prototype.inheritPrototype = function(subType, superType) {
//    console.log(util.inspect(superType.prototype, true, 2, true));
            var thePrototype = MyUtil.prototype.newObject(superType.prototype);
    console.log(util.inspect(thePrototype, true, 2, true));
            thePrototype.constructor = subType;
            subType.prototype = thePrototype;
        }

        MyUtil.prototype.printProperties = function(obj) {
            for (var t in obj) {
                console.log(t + ' : ' + obj[t]);
            }
        }
    }

    //        return thisUtil;
    var myUtil;
    if ('undefined' == typeof (myUtil)) {
        console.log("init MyUtil");
        myUtil = new MyUtil();
    }
    return myUtil;
})();
