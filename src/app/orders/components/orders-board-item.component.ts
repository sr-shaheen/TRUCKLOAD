import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrdersBoardItem } from '../models/orders-board-item.model';

@Component({
  selector: 'orders-board-item',
  template: `
    <div style="cursor: pointer;">
      <p>Name: {{ order?.name }}</p>
      <p>Loading : {{ order?.loading_point }}</p>
      <p>Unloading : {{ order?.unloading_point }}</p>
      <p>Starting : {{ order?.starting_date | date }}</p>
      <p>No of Truck:{{ order?.number_of_consignment }}</p>
    </div>
  `,
  styles: [
    `
      p {
        line-height: 15px;
      }
    `,
  ],
})
export class OrdersBoardItemComponent implements OnInit {
  constructor(private router: Router) {}
  @Input() order: OrdersBoardItem;
  ngOnInit() {}
}
