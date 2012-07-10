/**
 * @author yelp
 */
var exports = module.exports;

exports.Util = (function() {
    function Util() {
    }

    //        var thisUtil = this || {};
    Util.prototype.tokenNames = ["n/a", "<EOF>", "NAME", "COMMA", "LBRACK", "RBRACK"];
    if ('function' != typeof (this.inheritPropertype)) {
        Util.prototype.newObject = function(o) {
            function F() {
            };
            F.prototype = o;
            return new F();
        }

        Util.prototype.inheritPropertype = function(subType, superType) {
            var thePrototype = newObject(superType.prototype);
            thePrototype.constructor = subType;
            subType.prototype = thePrototype;
        }

        Util.prototype.printProperties = function(obj) {
            for (var t in obj) {
                console.log(t + ' : ' + obj[t]);
            }
        }
    }

    //        return thisUtil;
    var util;
    if ('undefined' == typeof (util)) {
        util = new Util();
    }
    return util;
})();
