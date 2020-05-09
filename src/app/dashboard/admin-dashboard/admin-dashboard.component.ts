import { Component, OnInit } from '@angular/core';
import { AsyncService } from 'src/app/shared/services/async.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
  showCustomerList: boolean = false;
  constructor(
    
    private asyncService: AsyncService
  ) { }

  ngOnInit(): void {
  }

  switchCustomerList(){
    this.showCustomerList = true;
}
}
