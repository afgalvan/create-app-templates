"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("@app/index");
describe('Numbers', () => {
    describe('isOdd', () => {
        // eslint-disable-next-line quotes
        it("Should return an array and his value must be true if it's odd", () => {
            const numbers = new index_1.Numbers();
            const expectedArray = [true, false, true, false, false, true, true];
            const subject = [3, 2, 9, 4, 6, 5, 23];
            expect(numbers.isOdd(subject)).toStrictEqual(expectedArray);
        });
    });
});
test('Numbers', () => __awaiter(void 0, void 0, void 0, function* () {
    const numbers = new index_1.Numbers();
    const subject = [3, 2, 9, 4, 6, 5, 23];
    const expectedArray = [true, false, true, false, false, true, true];
    const data = numbers.isOdd(subject);
    expect(data).toStrictEqual(expectedArray);
}));
