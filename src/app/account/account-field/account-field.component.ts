import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Field } from 'src/app/shared/Field';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-account-field',
  templateUrl: './account-field.component.html',
  styleUrls: ['./account-field.component.scss']
})
export class AccountFieldComponent implements OnInit {
  @Input() field: Field;
  @Input() key: number;

  constructor() { }

  ngOnInit() {}

  onGenerated(password: string) {
    this.field.value = password;
  }
}
