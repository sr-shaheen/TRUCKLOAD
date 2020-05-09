import { Component } from '@angular/core';
import { User } from '../_models';
import { AccountService } from '../_services';

@Component({ templateUrl: 'home.component.html',styleUrls: ['./home.component.scss'] },)
export class HomeComponent {
    user: User;
    color = 'sucess';
    mode = 'indeterminate';
    value = 50;
    bufferValue = 75;

    constructor(private accountService: AccountService) {
        this.user = this.accountService.userValue;
    }
}
