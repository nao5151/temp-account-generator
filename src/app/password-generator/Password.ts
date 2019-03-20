export class Password {
  static alphabet = 'abcdefghijklmnopqrstuvwxyz';
  static allAlphabet = Password.alphabet + Password.alphabet.toUpperCase();
  static numbers = '0123456789';
  static symbols = '~!@#$%^&*()_+-={}|[]:;<>?,./';

  public static generate(
    length = 1,
    numberLength = 0,
    symbolLength = 0
  ): string {
    const password = [];
    for (let i = 0; i < length; i++) {
      if (symbolLength > 0) {
        password.push(Password.getRandomChar(Password.symbols));
        symbolLength--;
      } else if (numberLength > 0) {
        password.push(Password.getRandomChar(Password.numbers));
        numberLength--;
      } else {
        password.push(Password.getRandomChar(Password.allAlphabet));
      }
    }
    return this.shuffle(password).join('');
  }

  public static getRandomChar(str: string): string {
    return str[Math.floor(Math.random() * str.length)];
  }

  public static shuffle(password: string[]) {
    return password.sort(() => Math.random() - 0.5);
  }
}
