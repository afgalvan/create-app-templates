"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Numbers = void 0;
require("../assets/scss/normalize.css");
console.log('index');
class Numbers {
    isOdd(numbers) {
        const answer = numbers.map((value) => {
            if (value % 2 == 0)
                return false;
            return true;
        });
        return answer;
    }
}
exports.Numbers = Numbers;
