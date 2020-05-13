import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrdersBoardItem } from '../models/orders-board-item.model';

@Component({
  selector: 'orders-board-item',
  template: `
    <div style="cursor: pointer;">
      <p>Name: {{ order?.customer_name }}</p>
      <p>Cell No: {{ order?.customer_phn }}</p>
      <!-- <p>Unloading:{{ order?.unloadingPoint }}</p> -->
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
