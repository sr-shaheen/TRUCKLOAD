import { Component, OnInit } from '@angular/core';
const data = {
  chart: {
    caption: 'Trip',
    // subcaption: "In MMbbl = One Million barrels",
    // xaxisname: "Country",
    // yaxisname: "Reserves (MMbbl)",
    // numbersuffix: "K",
    theme: 'fusion',
  },
  data: [
    {
      label: 'Steeltech',
      value: '290',
    },
    {
      label: 'Unilever',
      value: '260',
    },
    {
      label: 'Nannu Spinning',
      value: '180',
    },
    {
      label: 'Kazi Farms',
      value: '140',
    },
    {
      label: 'Lithe Group',
      value: '115',
    },
  ],
};

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.scss'],
})
export class TripComponent implements OnInit {
  // width = '100%';
  // height = 230;
  // type = 'scrollstackedcolumn2d';
  width = '100%';
  height = 200;
  type = 'column2d';
  dataFormat = 'json';
  dataSource = data;
  constructor() {}

  ngOnInit(): void {}
}
