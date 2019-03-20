import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AccountService } from '../shared/account.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  constructor(
    public accountService: AccountService
  ) { }

  ngOnInit() {
    this.accountService.getAccounts();
  }

  clear() {
    if (confirm('データを消しますか？')) {
      this.accountService.clear();
    }
  }
}
