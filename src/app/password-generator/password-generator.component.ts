import { Component, OnInit, HostListener, Output, EventEmitter } from '@angular/core';
import { PasswordService } from './password.service';

@Component({
  selector: 'app-password-generator',
  templateUrl: './password-generator.component.html',
  styleUrls: ['./password-generator.component.scss']
})
export class PasswordGeneratorComponent implements OnInit {
  @Output() generated = new EventEmitter<string>();
  show = false;

  constructor(public ps: PasswordService) {}

  ngOnInit() {}

  @HostListener('click', ['$event'])
  onClick(e: Event) {
    e.stopPropagation();
  }

  @HostListener('window:click')
  closeDropdown() {
    this.show = false;
  }

  toggleDropdown() {
    this.show = !this.show;
  }

  onClickGenerate() {
    this.generated.emit(this.ps.generate());
  }
}
