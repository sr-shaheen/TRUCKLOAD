import { Component, OnInit } from '@angular/core';
import { AsyncService } from 'src/app/shared/services/async.service';

@Component({
  selector: 'app-order-add-modal',
  templateUrl: './order-add-modal.component.html',
  styleUrls: ['./order-add-modal.component.scss'],
})
export class OrderAddModalComponent implements OnInit {
  constructor(public asyncService: AsyncService) {}
  ngOnInit(): void {}
}
