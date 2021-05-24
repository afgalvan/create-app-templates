import '../assets/scss/normalize.css';

console.log('index');
export class Numbers {
  public isOdd(numbers: number[]): boolean[] {
    const answer = numbers.map((value: number) => {
      if (value % 2 == 0) return false;
      return true;
    });
    return answer;
  }
}
