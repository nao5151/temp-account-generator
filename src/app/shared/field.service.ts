import { Injectable } from '@angular/core';
import { Field } from './Field';
import { AccountService, Account } from './account.service';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FieldService {
  fields$ = new BehaviorSubject<Field[]>([]);

  get fields() {
    return this.fields$.getValue();
  }

  constructor(private accountService: AccountService) {}

  get defaultFields() {
    return [
      new Field({
        label: 'id',
        type: 'text'
      }),
      new Field({
        label: 'password',
        type: 'password'
      }),
      new Field({
        label: 'memo',
        type: 'textarea'
      })
    ];
  }

  getFields(id?: string) {
    if (!id) {
      this.fields$.next(this.defaultFields);
      return;
    }

    this.accountService.getAccount(id).pipe(
      map((account: Account) => account.fields)
    ).subscribe(
      (fields: Field[]) => this.fields$.next(fields)
    );
  }
}
