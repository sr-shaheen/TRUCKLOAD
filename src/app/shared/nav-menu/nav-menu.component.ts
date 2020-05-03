import { MediaMatcher } from '@angular/cdk/layout';
import {
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
  AfterViewInit,
  Input,
} from '@angular/core';
import { Observable, Subscription, of } from 'rxjs';
import { Router } from '@angular/router';
import { CommonService } from '../services/common.service';
import { AsyncService } from '../services/async.service';
import { AccountService } from 'src/app/_services';
import { User } from 'src/app/_models';

@Component({
  selector: 'nav-menu',
  templateUrl: 'nav-menu.component.html',
  styleUrls: ['nav-menu.component.scss'],
})
export class NavMenuComponent implements OnInit, OnDestroy {
  user: User;
  constructor(
    private accountService: AccountService,
    private commonService: CommonService
  ) {
    this.accountService.user.subscribe((x) => (this.user = x));
  }

  ngOnInit(): void {}

  logout() {
    this.accountService.logout();
    this.commonService.showSuccessMsg('logout sucessfully');
  }
  ngOnDestroy() {}
}
