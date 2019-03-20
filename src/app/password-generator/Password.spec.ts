import { Password } from './Password';

function random(max = 0, min = 0) {
  return Math.floor(Math.random() * (max - min)) + min;
}

describe('Password', () => {
  it('should be only alphabet', () => {
    for (let index = 0; index < 10; index++) {
      const length = random(100);
      const result = Password.generate(length);
      expect(result).toMatch(new RegExp(`^[a-zA-Z]{${length}}$`));
    }
  });

  it('should include number', () => {
    const numberRegExp = /([0-9])/g;
    for (let index = 0; index < 10; index++) {
      const length = random(100);
      const numberLength = random(length);
      const result = Password.generate(length, numberLength);
      const matchs = result.match(numberRegExp);
      if (numberLength > 0) {
        expect(matchs.length).toBe(numberLength);
      } else {
        expect(matchs).toBe(null);
      }
    }
  });

  it('should not include alphabet', () => {
    expect(Password.generate(10, 10).match(/([0-9])/g).length).toBe(10);
    expect(Password.generate(5, 10).match(/([0-9])/g).length).toBe(5);
  });

  it('should include symbol', () => {
    const symbolRegExp = /([^a-zA-Z0-9])/g;
    for (let index = 0; index < 10; index++) {
      const length = random(100);
      const numberCount = random(length);
      const symbolCount = random(length);
      const result = Password.generate(length, numberCount, symbolCount);
      const matchs = result.match(symbolRegExp);
      if (symbolCount > 0) {
        expect(matchs.length).toBe(symbolCount);
      } else {
        expect(matchs).toBe(null);
      }
    }
  });

  it('should not include alphabet and number', () => {
    expect(Password.generate(10, 10, 10).match(/([^a-zA-Z0-9])/g).length).toBe(10);
    expect(Password.generate(5, 10, 10).match(/([^a-zA-Z0-9])/g).length).toBe(5);
    expect(Password.generate(5, 5, 10).match(/([^a-zA-Z0-9])/g).length).toBe(5);
  });

  it('should be shuffled', () => {
    expect(Password.shuffle(['a', 'b', 'c', 'd', 'e']).join() !== 'abcde').toBeTruthy();
  });
});
