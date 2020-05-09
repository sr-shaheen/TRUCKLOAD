import { Component, OnInit } from '@angular/core';
import { AsyncService } from 'src/app/shared/services/async.service';

@Component({
  selector: 'app-truck-add-modal',
  templateUrl: './truck-add-modal.component.html',
  styleUrls: ['./truck-add-modal.component.scss'],
})
export class TruckAddModalComponent implements OnInit {
  constructor(public asyncService: AsyncService) {}

  ngOnInit(): void {}
}
