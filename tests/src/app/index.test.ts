import { Numbers } from '@app/index';

describe('Numbers', () => {
  describe('isOdd', () => {
    // eslint-disable-next-line quotes
    it("Should return an array and his value must be true if it's odd", () => {
      const numbers = new Numbers();
      const expectedArray = [true, false, true, false, false, true, true];
      const subject = [3, 2, 9, 4, 6, 5, 23];

      expect(numbers.isOdd(subject)).toStrictEqual(expectedArray);
    });
  });
});

test('Numbers', async () => {
  const numbers = new Numbers();
  const subject = [3, 2, 9, 4, 6, 5, 23];
  const expectedArray = [true, false, true, false, false, true, true];
  const data = numbers.isOdd(subject);

  expect(data).toStrictEqual(expectedArray);
});
