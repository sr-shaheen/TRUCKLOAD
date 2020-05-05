import { Component, OnInit } from '@angular/core';
const logdata = {
  chart: {
    caption: 'Total Completed Trip',
    // enablesmartlabels: '0',
    // showlabels: '0',
    // showValues: '0',
    // showpercentvalues: '0',
    // aligncaptionwithcanvas: '0',
    // captionpadding: '0',
    // decimals: '0',
    // showToolTip: '',
    // "defaultCenterLabel": "Total revenue: $64.08K",
    // "centerLabel": "Revenue from $label: $value",
    decimals: '0',
    theme: 'fusion',
  },
  data: [
    {
      label: 'Corporate',
      value: '14633',
    },
    {
      label: 'SMI',
      value: '10507',
    },
    {
      label: 'Individual',
      value: '4910',
    },
  ],
};
@Component({
  selector: 'app-completed-trip',
  templateUrl: './completed-trip.component.html',
  styleUrls: ['./completed-trip.component.scss'],
})
export class CompletedTripComponent implements OnInit {
  // width = '100%';
  // height = 330;
  width = 520;
  height = 250;
  type = 'doughnut2d';
  dataFormat = 'json';
  dataSource: any = logdata;
  constructor() {}

  ngOnInit(): void {}
}
