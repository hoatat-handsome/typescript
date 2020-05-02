"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Person17 = /** @class */ (function () {
    function Person17(firstname, lastname, age) {
        this.firstname = firstname;
        this.lastname = lastname;
        this._age = age;
        console.log(this.firstname + " constructor");
    }
    Object.defineProperty(Person17.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (age) {
            this._age = age;
        },
        enumerable: true,
        configurable: true
    });
    Person17.prototype.addOneYear = function () {
        this.age = this.age + 1;
        console.log(this.age + " add one year.");
    };
    Person17.talk = function (name) {
        console.log(name + " static of talk");
    };
    Person17.prototype.run = function () {
        console.log("Run function is running...");
    };
    return Person17;
}());
exports.Person17 = Person17;
var p1 = new Person17('Hoa', 'Tat', 100);
p1.addOneYear();
p1.age = 200;
p1.addOneYear();
console.log(p1.age);
//p1.run();
//console.log(p1.run === Person17.prototype.run);
Person17.talk("Hoa Tat");
//console.log(typeof p1);
//console.log(typeof Person);
//# sourceMappingURL=lesson17.js.map