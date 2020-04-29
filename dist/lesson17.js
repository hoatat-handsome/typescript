"use strict";
var Person17 = /** @class */ (function () {
    function Person17() {
    }
    Person17.prototype.run = function () {
        console.log("Run function is running...");
    };
    return Person17;
}());
var p1 = new Person17();
console.log(p1.run === Person17.prototype.run);
//console.log(typeof p1);
//console.log(typeof Person);
//# sourceMappingURL=lesson17.js.map