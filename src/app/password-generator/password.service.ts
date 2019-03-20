import { Injectable } from '@angular/core';
import { Password } from './Password';

@Injectable({
  providedIn: 'root'
})
export class PasswordService {
  length = 64;
  numberLength = 10;
  symbolLength = 10;

  generate() {
    return Password.generate(this.length, this.numberLength, this.symbolLength);
  }
}
