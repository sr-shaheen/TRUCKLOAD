// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.scss']
// })
// export class AppComponent {
//   title = 'truckload';
// }

import { Component } from '@angular/core';

import { AccountService, AlertService } from './_services';
import { User } from './_models';

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
    private alertService: AlertService
  ) {
    this.accountService.user.subscribe((x) => (this.user = x));
  }

  logout() {
    this.accountService.logout();
    this.alertService.success('Logout successful', {
      keepAfterRouteChange: true,
    });
  }
}
