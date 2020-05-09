import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AsyncService } from 'src/app/shared/services/async.service';

@Component({
  selector: 'app-customer-add-modal',
  templateUrl: './customer-add-modal.component.html',
  styleUrls: ['./customer-add-modal.component.scss'],
})
export class CustomerAddModalComponent implements OnInit {
  constructor(
    public asyncService: AsyncService,
    public dialogRef: MatDialogRef<CustomerAddModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {}
}
