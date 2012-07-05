/**
 * @author yelp
 */
var exports = module.exports;

exports.Token = function(){
    var type, text;
    var thisToken = this || {};
    function constructor(type, text){
        thisToken.type = type;
        thisToken.text = text;
    };
    function toString(){
        
    }
}
