import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from '../../shared/account.service';
import { ClipboardService } from 'src/app/shared/clipboard.service';

@Component({
  selector: 'app-account-detail',
  templateUrl: './account-detail.component.html',
  encapsulation: ViewEncapsulation.None
})
export class AccountDetailComponent implements OnInit {
  account: Account;
  id = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private accountService: AccountService,
    private clipboardService: ClipboardService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        this.id = params.id || '';
        this.accountService.getAccount(this.id).subscribe(account => {
          if (!account) {
            return this.router.navigate(['/']);
          }

          this.account = account;
        });
      }
    );
  }

  onClickDelete() {
    if (confirm('データを消しますか？')) {
      this.accountService.deleteAccount(this.id);
      this.router.navigate(['/']);
    }
  }

  onClickCopy(text: string) {
    this.clipboardService.copy(text);
  }
}
