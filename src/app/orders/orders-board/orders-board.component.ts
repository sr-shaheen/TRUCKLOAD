import { Component, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-orders-board',
  templateUrl: './orders-board.component.html',
  styleUrls: ['./orders-board.component.scss'],
})
export class OrdersBoardComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
