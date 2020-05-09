import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CustomerAddModalComponent } from '../customer-add-modal/customer-add-modal.component';

@Component({
  selector: 'app-component-customer',
  templateUrl: './component-customer.component.html',
  styleUrls: ['./component-customer.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ComponentCustomerComponent implements OnInit {

  color = 'warn';
  mode = 'indeterminate';
  value = 50;
  bufferValue = 75;

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  customerAdd(): void {
    console.log('aschi');

    const dialogRef = this.dialog.open(CustomerAddModalComponent, {
      width: '400px',
      height:'500px'
      // data: {name: this.name, animal: this.animal}
    })

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    })
  }
}
