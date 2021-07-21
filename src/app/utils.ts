export const areAllOdds = (numbers: number[]): boolean => {
  for (const n of numbers) {
    if (!isOdd(n)) {
      return false;
    }
  }

  return true;
}

export const areOdds = (numbers: number[]): boolean[] =>
  numbers.map((value: number) => isOdd(value));

const isOdd = (value: number) => (value % 2 != 0 ? true : false);
