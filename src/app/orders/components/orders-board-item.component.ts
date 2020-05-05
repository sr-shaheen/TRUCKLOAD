import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrdersBoardItem } from '../models/orders-board-item.model';

@Component({
  selector: 'orders-board-item',
  template: `
    <div style="cursor: pointer;">
      <p>Name: {{ order?.customerName }}</p>
      <p>Cell No: {{ order?.cellNo }}</p>
      <p>Email: {{ order?.email }}</p>
      <p>Unloading:{{ order?.unloadingPoint }}</p>
    </div>
  `,
  styles: [
    `
      p {
        line-height: 5px;
      }
    `,
  ],
})
export class OrdersBoardItemComponent implements OnInit {
  constructor(private router: Router) {}
  @Input() order: OrdersBoardItem;
  ngOnInit() {}
}
