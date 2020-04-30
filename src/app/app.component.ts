import { Component } from '@angular/core';

import { AccountService, AlertService } from './_services';
import { User } from './_models';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'truckload';
  user: User;

  constructor(
    private accountService: AccountService,
    private alertService: AlertService,
    public snackBar: MatSnackBar
  ) {
    this.accountService.user.subscribe((x) => (this.user = x));
  }

  logout() {
    this.accountService.logout();
    this.snackBar.open('Logout successfully!', '×', { panelClass: 'success', verticalPosition: 'top',horizontalPosition:'right', duration: 3000 });
  //   this.alertService.success('Logout successful', {
  //     keepAfterRouteChange: true,
  //   });
  }
}
