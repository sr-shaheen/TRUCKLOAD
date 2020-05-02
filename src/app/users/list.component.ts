import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { AccountService } from '../_services';
import { CommonService } from '../shared/services/common.service';

// import { AccountService } from '@app/_services';

@Component({ templateUrl: 'list.component.html' })
export class ListComponent implements OnInit {
  users = null;

  constructor(
    private accountService: AccountService,
    private commonService: CommonService
  ) {}

  ngOnInit() {
    this.accountService
      .getAll()
      .pipe(first())
      .subscribe((users) => (this.users = users));
  }

  onDeleteConfirmation = (id: string): void => {
    this.commonService.showDialog(
      {
        title: 'Confirmation - Delete Record',
        content: 'Are you sure?',
      },
      () => this.deleteUser(id)
    );
  };

  deleteUser(id: string) {
    const user = this.users.find((x) => x.id === id);
    user.isDeleting = true;
    this.accountService
      .delete(id)
      .pipe(first())
      .subscribe(() => {
        this.commonService.showErrorMsg('Deleted');
        this.users = this.users.filter((x) => x.id !== id);
      });
  }
}
