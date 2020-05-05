import { Component, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

import {
  statusDictionary,
  ordersBoardColors,
  statusList,
} from '../data/orders-board.constant';
import { OrdersBoardItem } from '../models/orders-board-item.model';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-orders-board',
  templateUrl: './orders-board.component.html',
  styleUrls: ['./orders-board.component.scss'],
})
export class OrdersBoardComponent implements OnInit {
  ordersPlaced: OrdersBoardItem[] = [];
  detailsCollected: OrdersBoardItem[] = [];
  orderConfirmed: OrdersBoardItem[] = [];
  loadCompleted: OrdersBoardItem[] = [];
  inTransit: OrdersBoardItem[] = [];
  uploadComplete: OrdersBoardItem[] = [];
  consignmentDone: OrdersBoardItem[] = [];

  colors = ordersBoardColors;

  status = statusDictionary;
  boardData: OrdersBoardItem;

  ordersBoardSub: Subscription;
  constructor() {}

  ngOnInit(): void {}
}
