import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClipboardService {
  private input = document.createElement('input');

  constructor() {
    this.input.style.position = 'absolute';
    this.input.style.top = '-9999px';
    this.input.style.left = '-9999px';
  }

  copy(text: string) {
    document.body.appendChild(this.input);
    this.input.value = text;
    this.input.select();
    document.execCommand('copy');
    document.body.removeChild(this.input);
  }
}
