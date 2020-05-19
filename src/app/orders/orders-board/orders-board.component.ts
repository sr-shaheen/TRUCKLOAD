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
import { OrderService } from '../services/orders.service';
import { VendorAddModalComponent } from 'src/app/customer/vendor-add-modal/vendor-add-modal.component';
import { TruckList } from '../models/truck.model';
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
  //truckData: TruckList[] = [];
  truckData = [];
  status = statusDictionary;
  boardData: OrdersBoardItem;

  ordersBoardSub: Subscription;
  updateBoardSub: Subscription;

  loadLease: Subscription;
  orderLeaseConsignmentSub: Subscription;
  constructor(
    private commonService: CommonService,
    public asyncService: AsyncService,
    private orderService: OrderService,
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
    this.asyncService.start();
    // this.filterBoardData([
    //   {
    //     customer_id: '1',
    //     customer_name: 'Shahin',
    //     customer_phn: '01688024100',
    //     customer_email: 'shaheen@gmail.com',
    //     status: 'ordersPlaced',
    //   },
    //   {
    //     customer_id: '1',
    //     customer_name: 'Sumon',
    //     customer_phn: '01688024100',
    //     customer_email: 'sumon@gmail.com',
    //     status: 'ordersPlaced',
    //   },
    //   {
    //     customer_id: '1',
    //     customer_name: 'Juthi',
    //     customer_phn: '01709874653',
    //     customer_email: 'juthi@gmail.com',
    //     status: 'detailsCollected',
    //     truck_type: [
    //       {
    //         type: 'covered',
    //         capacity: '3',
    //         quantity: '2',
    //       },
    //       {
    //         type: 'open',
    //         capacity: '3',
    //         quantity: '1',
    //       },
    //     ],
    //   },
    //   {
    //     customer_id: '1',
    //     customer_name: 'Abrar',
    //     customer_phn: '01709809853',
    //     customer_email: 'abrar@gmail.com',
    //     status: 'loadCompleted',
    //   },
    //   {
    //     customer_id: '1',
    //     customer_name: 'Shahriar',
    //     customer_phn: '01777024100',
    //     customer_email: 'shah@gmail.com',
    //     status: 'inTransit',
    //   },
    //   {
    //     customer_id: '1',
    //     customer_name: 'Adiba',
    //     customer_phn: '01699924100',
    //     customer_email: 'Adiba@gmail.com',
    //     status: 'uploadComplete',
    //   },
    //   {
    //     customer_id: '1',
    //     customer_name: 'Sandil',
    //     customer_phn: '01685554100',
    //     customer_email: 'Sandil@gmail.com',
    //     status: 'consignmentDone',
    //   },
    //   {
    //     customer_id: '1',
    //     customer_name: 'Nabi',
    //     customer_phn: '01580004100',
    //     customer_email: 'Nabi@gmail.com',
    //     status: 'ordersPlaced',
    //   },
    //   {
    //     customer_id: '1',
    //     customer_name: 'Alif',
    //     customer_phn: '01580004100',
    //     customer_email: 'Nabi@gmail.com',
    //     status: 'ordersPlaced',
    //   },
    // ]);
    this.ordersBoardSub = this.orderService.getOrdersBoard().subscribe(
      (data) => {
        if (data) {
          this.filterBoardData(data);
        }
        this.asyncService.finish();
      },
      (error) => {
        this.asyncService.finish();
        this.commonService.showErrorMsg(
          'Error! Order board data is not loaded.'
        );
      }
    );
  };

  drop(event: CdkDragDrop<any[]>) {
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
            data: this.movingItem.item,
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
            data: this.movingItem.item,
          });

          dialogRef.afterClosed().subscribe((result) => {
            if (result) {
              this.loadOrdersBoard();
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
    let moveOrderStatus = [
      {
        pk: draggedServiceData.order_id,
        sk: draggedServiceData.customer_id,
        status: nextStatus,
      },
    ];

    if (nextStatus == 'consignmentDone') {
      this.loadLease = this.orderService
        .getLease(draggedServiceData.order_id)
        .subscribe(
          (data) => {
            if (data) {
              this.truckData = data[0].information;
              let mapData = this.truckData.map((item) => ({
                pk: item.pk,
                sk: item.sk,
                status:
                  item.status === 'notAvailable' ? 'Available' : 'returned',
              }));
              mapData = [...moveOrderStatus, ...mapData];
              this.updateBoardSub = this.orderService
                .updateConfirmed(mapData)
                .subscribe(
                  (data) => {
                    if (data) {
                      this.asyncService.finish();
                      this.commonService.showSuccessMsg('Board Updated!!!');
                      this.loadOrdersBoard();
                    } else {
                      this.asyncService.finish();
                      this.commonService.showErrorMsg('Error! Not Updated!!');
                    }
                  },
                  (error) => {
                    this.asyncService.finish();
                    this.commonService.showErrorMsg('Error! Not Updated!!');
                  }
                );
            } else {
              this.asyncService.finish();
              this.commonService.showErrorMsg(
                'Error! No lease Data could not found'
              );
            }
          },
          (error) => {
            this.asyncService.finish();
            this.commonService.showErrorMsg('Error! Customers could not found');
          }
        );
    } else {
      this.updateBoardSub = this.orderService
        .updateConfirmed(moveOrderStatus)
        .subscribe(
          (data) => {
            if (data) {
              this.asyncService.finish();
              this.commonService.showSuccessMsg('Board Updated!!!');
              this.loadOrdersBoard();
            } else {
              this.asyncService.finish();
              this.commonService.showErrorMsg('Error! Not Updated!!');
            }
          },
          (error) => {
            this.asyncService.finish();
            this.commonService.showErrorMsg('Error! Not Updated!!');
          }
        );
    }
  };
  // All modal functionality
  customerAdd(): void {
    const dialogRef = this.dialog.open(CustomerAddModalComponent, {
      width: '400px',
      height: '500px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
  vendorAdd(): void {
    const dialogRef = this.dialog.open(VendorAddModalComponent, {
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
      width: '600px',
      height: '450px',
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
      this.loadOrdersBoard();
    });
  }

  ngOnDestroy(): void {
    if (this.ordersBoardSub) {
      this.ordersBoardSub.unsubscribe();
    }
    if (this.updateBoardSub) {
      this.updateBoardSub.unsubscribe();
    }
    this.asyncService.finish();
  }
}
