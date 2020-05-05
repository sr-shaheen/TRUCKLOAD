import { Component, OnInit } from '@angular/core';

const defaultData = {
  chart: {
    caption: 'Gross Profit',
    //  enablesmartlabels: '0',
    // showlabels: '0',
    // showValues: '0',
    // showpercentvalues: '0',
    // showToolTip: '0',
    // aligncaptionwithcanvas: '0',
    // captionpadding: '0',
    // decimals: '1',
    theme: 'fusion',
  },
  data: [
    // {
    //   label: 'No Data',
    //   value: '1'
    // }
    {
      label: 'Profit',
      value: '390',
    },
    {
      label: 'Loss',
      value: '60',
    },
  ],
};
@Component({
  selector: 'app-gross-profit',
  templateUrl: './gross-profit.component.html',
  styleUrls: ['./gross-profit.component.scss'],
})
export class GrossProfitComponent implements OnInit {
  // width = '100%';
  // height = 300;
  // type = 'doughnut2d';
  width = 520;
  height = 250;
  type = 'doughnut3d';
  dataFormat = 'json';
  dataSource: any = defaultData;
  constructor() {}

  ngOnInit(): void {}
}
