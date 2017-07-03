"use strict";
/**
 * Created by liuyujing on 2017/5/2.
 */
var Person = (function () {
    function Person(name) {
        this.name = name;
    }
    ;
    Person.prototype.move = function () {
        console.log(this.name);
    };
    return Person;
}());
module.exports = { Person: Person };
//# sourceMappingURL=Person.js.map