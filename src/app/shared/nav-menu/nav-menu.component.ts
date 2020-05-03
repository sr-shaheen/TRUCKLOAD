import {
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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
  link:string;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private accountService: AccountService,
    private commonService: CommonService
  ) {
    this.accountService.user.subscribe((x) => (this.user = x));
  }

  ngOnInit(): void {
  }

  logout() {
    this.accountService.logout();
    this.commonService.showSuccessMsg('logout sucessfully');
  }
  ngOnDestroy() {}
}
