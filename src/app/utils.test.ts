import { areAllOdds, areOdds } from './utils';

const subject = [3, 2, 9, 4, 6, 5, 23];

test('Should return an array being true for each odd number', () => {
  const expectedArray = [true, false, true, false, false, true, true];
  const result = areOdds(subject);

  expect(result).toStrictEqual(expectedArray);
});

test('Should return false given an array with any even number', () => {
  const result =  areAllOdds(subject);
  expect(result).toBeFalsy();
});

test('Should return true given an array with no even number', () => {
  const oddSubject = [1, 3, 5];
  const result =  areAllOdds(oddSubject);
  expect(result).toBeTruthy();
});
