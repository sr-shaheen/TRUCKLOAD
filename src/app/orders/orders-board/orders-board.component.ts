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
import { OrdersBoardItem, MovingItem } from '../models/orders-board-item.model';
import { Subscription } from 'rxjs';
import { CommonService } from 'src/app/shared/services/common.service';
import { AsyncService } from 'src/app/shared/services/async.service';
import { MatDialog } from '@angular/material/dialog';
import { CustomerAddModalComponent } from 'src/app/customer/customer-add-modal/customer-add-modal.component';
import { TruckAddModalComponent } from '../truck-add-modal/truck-add-modal.component';
import { OrderAddModalComponent } from '../order-add-modal/order-add-modal.component';
import { DetailsCollectedModalComponent } from '../details-collected-modal/details-collected-modal.component';
import { OrderConfirmedModalComponent } from '../order-confirmed-modal/order-confirmed-modal.component';
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
  movingItem: MovingItem = null;
  colors = ordersBoardColors;

  status = statusDictionary;
  boardData: OrdersBoardItem;

  ordersBoardSub: Subscription;
  constructor(
    private commonService: CommonService,
    private asyncService: AsyncService,
    public dialog: MatDialog
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
        customerName: 'Shahin',
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
        cellNo: '01580004100',
        email: 'Nabi@gmail.com',
        status: 'ordersPlaced',
        unloadingPoint: 'Dhaka',
      },

      {
        customerId: '1',
        customerName: 'Alif',
        cellNo: '01580004100',
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
      try {
        this.movingItem = {
          item: event.previousContainer.data[event.previousIndex],
        };

        if (event.container.id === 'detailsCollected') {
          const dialogRef = this.dialog.open(DetailsCollectedModalComponent, {
            width: '800px',
            height: '550px',
          });

          dialogRef.afterClosed().subscribe((result) => {
            if (result) {
              this.loadOrdersBoard();
            } else {
              console.log(result, 'The dialog was closed');
            }
          });
        } else if (event.container.id === 'orderConfirmed') {
          const dialogRef = this.dialog.open(OrderConfirmedModalComponent, {
            width: '800px',
            height: '550px',
          });

          dialogRef.afterClosed().subscribe((result) => {
            if (result) {
              this.loadOrdersBoard();
            } else {
              console.log(result, 'The dialog was closed');
            }
          });
        } else {
          this.commonService.showDialog(
            {
              title: `Move!!  ${
                event.previousContainer.data[event.previousIndex].status
              } ==> ${event.container.id}.`,
              content: 'Are you sure?',
            },
            () => this.updateOrdersBoard(event)
          );
        }
      } catch (error) {
        this.movingItem = null;
        this.commonService.showErrorMsg('Error! The board is not updated.');
      }
    }
  }
  private updateOrdersBoard = (
    event: CdkDragDrop<OrdersBoardItem[]>,
    data?: any,
    callback?: Function
  ): void => {
    const currentStatus = event.previousContainer.id;
    const nextStatus = event.container.id;
    const draggedServiceData =
      event.previousContainer.data[event.previousIndex];

    transferArrayItem(
      event.previousContainer.data,
      event.container.data,
      event.previousIndex,
      event.currentIndex
    );
  };
  // All modal functionality
  customerAdd(): void {
    const dialogRef = this.dialog.open(CustomerAddModalComponent, {
      width: '400px',
      height: '500px',
      // data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
  truckAdd(): void {
    const dialogRef = this.dialog.open(TruckAddModalComponent, {
      width: '400px',
      height: '580px',
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
  orderAdd(): void {
    const dialogRef = this.dialog.open(OrderAddModalComponent, {
      width: '800px',
      height: '550px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}
