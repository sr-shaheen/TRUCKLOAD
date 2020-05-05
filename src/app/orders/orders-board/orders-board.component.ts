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
import { CommonService } from 'src/app/shared/services/common.service';
import { AsyncService } from 'src/app/shared/services/async.service';
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
  constructor(
    private commonService: CommonService,
    private asyncService: AsyncService
  ) {}

  ngOnInit(): void {
    this.loadOrdersBoard();
  }

  private clearFeedbackBoard = (): void => {
    this.ordersPlaced = [];
    this.detailsCollected = [];
    this.orderConfirmed = [];
    this.loadCompleted = [];
    this.inTransit = [];
    this.uploadComplete = [];
    this.consignmentDone = [];
  };

  private filterBoardData = (feedbackBoardItem: OrdersBoardItem[]): void => {
    this.clearFeedbackBoard();
    feedbackBoardItem.forEach((item) => {
      if (statusList.includes(item.status)) {
        this[item.status].push(item);
      }
    });
  };
  private loadOrdersBoard = (): void => {
    // this.asyncService.start();
    this.filterBoardData([
      {
        customerId: '1',
        customerName: 'Shaheen',
        cellNo: '01688024100',
        email: 'shaheen@gmail.com',
        status: 'ordersPlaced',
        unloadingPoint: 'Dhaka',
      },
      {
        customerId: '1',
        customerName: 'Sumon',
        cellNo: '01688024100',
        email: 'sumon@gmail.com',
        status: 'ordersPlaced',
        unloadingPoint: 'Dhaka',
      },
      {
        customerId: '1',
        customerName: 'Juthi',
        cellNo: '01709874653',
        email: 'juthi@gmail.com',
        status: 'detailsCollected',
        unloadingPoint: 'Dhaka',
      },
      {
        customerId: '1',
        customerName: 'Abrar',
        cellNo: '01709809853',
        email: 'abrar@gmail.com',
        status: 'loadCompleted',
        unloadingPoint: 'Dhaka',
      },
      {
        customerId: '1',
        customerName: 'Shahriar',
        cellNo: '01777024100',
        email: 'shah@gmail.com',
        status: 'inTransit',
        unloadingPoint: 'Dhaka',
      },
      {
        customerId: '1',
        customerName: 'Adiba',
        cellNo: '01699924100',
        email: 'Adiba@gmail.com',
        status: 'uploadComplete',
        unloadingPoint: 'Dhaka',
      },
      {
        customerId: '1',
        customerName: 'Sandil',
        cellNo: '01685554100',
        email: 'Sandil@gmail.com',
        status: 'consignmentDone',
        unloadingPoint: 'Dhaka',
      },
      {
        customerId: '1',
        customerName: 'Nabi',
        cellNo: '01680004100',
        email: 'Nabi@gmail.com',
        status: 'ordersPlaced',
        unloadingPoint: 'Dhaka',
      },
    ]);
    // this.feedbackBoardSub = this.feedbackBoardService
    //   .getFeedbackBoardData()
    //   .subscribe(
    //     (data) => {
    //       if (data) {
    //         this.filterBoardData(data);
    //       }
    //       this.asyncService.finish();
    //     },
    //     (error) => {
    //       this.asyncService.finish();
    //       this.commonService.showErrorMsg(
    //         'Error! Feedback board data is not loaded.'
    //       );
    //     }
    //   );
  };

  drop(event: CdkDragDrop<any[]>) {
    console.log(event, 'eventttttt');

    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}