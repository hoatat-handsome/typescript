"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var person = require("./lesson17");
var Employment = /** @class */ (function (_super) {
    __extends(Employment, _super);
    function Employment() {
        var _this = _super.call(this, 'Hoa', 'Tat', 100) || this;
        console.log('constructor of Employment');
        return _this;
    }
    Employment.prototype.run = function () {
        _super.prototype.run.call(this);
        console.log('run of Employment.');
    };
    return Employment;
}(person.Person17));
var emp = new Employment();
emp.run();
//# sourceMappingURL=lesson19.js.map