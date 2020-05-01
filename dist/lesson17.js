"use strict";
var Person17 = /** @class */ (function () {
    function Person17(name) {
        this.name = name;
        console.log(this.name + " constructor");
    }
    Person17.talk = function (name) {
        console.log(name + " static of talk");
    };
    Person17.prototype.run = function () {
        console.log("Run function is running...");
    };
    return Person17;
}());
var p1 = new Person17('Hoa Tat');
p1.run();
//console.log(p1.run === Person17.prototype.run);
Person17.talk("Hoa Tat");
//console.log(typeof p1);
//console.log(typeof Person);
//# sourceMappingURL=lesson17.js.map