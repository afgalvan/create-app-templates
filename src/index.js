"use strict";
exports.__esModule = true;
exports.Numbers = void 0;
require("./styles/main.css");
console.log('about');
var Numbers = /** @class */ (function () {
    function Numbers() {
    }
    Numbers.prototype.isOdd = function (numbers) {
        var answer = numbers.map(function (value) {
            if (value % 2 == 0)
                return false;
            return true;
        });
        return answer;
    };
    return Numbers;
}());
exports.Numbers = Numbers;
