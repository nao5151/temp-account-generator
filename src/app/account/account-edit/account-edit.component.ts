import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FieldService } from '../../shared/field.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AccountService } from '../../shared/account.service';

@Component({
  selector: 'app-account-edit',
  templateUrl: './account-edit.component.html',
  encapsulation: ViewEncapsulation.None
})
export class AccountEditComponent implements OnInit {
  id: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private accountService: AccountService,
    public fieldService: FieldService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = params.id || null;
      this.fieldService.getFields(this.id);
    });
  }

  onClickCancel() {
    if (this.id) {
      this.router.navigate(['/', this.id]);
    } else {
      this.router.navigate(['/']);
    }
  }

  onSubmit(e: Event) {
    e.preventDefault();

    if (this.id) {
      this.accountService.updateAccount(
        this.id,
        this.fieldService.fields
      );
      this.router.navigate(['/', this.id]);
    } else {
      const id = this.accountService.addAccount(
        this.fieldService.fields
      );
      this.router.navigate(['/', id]);
    }
  }
}
