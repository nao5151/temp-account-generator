import { Injectable } from '@angular/core';
import { Field } from './Field';
import { of, BehaviorSubject } from 'rxjs';

export class Account {
  constructor(
    public id: string,
    public fields: Field[]
  ) {}
}

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private STORAGE_KEY = 'TEMP_ACCOUNT_GENERATOR_ACCOUNTS';
  accounts$ = new BehaviorSubject<Account[]>([]);

  get accounts() {
    return this.accounts$.getValue();
  }

  constructor() {
    this.getAccounts();
  }

  getAccounts() {
    this.accounts$.next(
      JSON.parse(localStorage.getItem(this.STORAGE_KEY)) || []
    );
  }

  getAccount(id: string) {
    const matchedAccount = this.accounts.filter(account => account.id === id);
    if (matchedAccount.length > 0) {
      return of(matchedAccount[0]);
    } else {
      return of(null);
    }
  }

  addAccount(fields: Field[]) {
    const id = Date.now().toString();
    const accounts = [
      new Account(id, fields),
      ...this.accounts,
    ];
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(accounts));
    this.accounts$.next(accounts);
    return id;
  }

  updateAccount(id: string, fields: Field[]) {
    const accounts = this.accounts.map(account => {
      if (account.id === id) {
        account.fields = fields;
      }
      return account;
    });
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(accounts));
    this.accounts$.next(accounts);
  }

  deleteAccount(id: string) {
    const accounts = this.accounts.filter(account => account.id !== id);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(accounts));
    this.accounts$.next(accounts);
  }

  clear() {
    localStorage.clear();
    this.accounts$.next([]);
  }
}
