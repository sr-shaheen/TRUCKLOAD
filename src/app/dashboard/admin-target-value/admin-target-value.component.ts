import { Component, OnInit } from '@angular/core';
const data = {
  chart: {
    caption: "Today's Target Value",
    // yaxisname: "% of youth on this platform",
    // subcaption: "2012-2016",
    // showhovereffect: "1",
    // numbersuffix: "%",
    // drawcrossline: "1",
    // plottooltext: "<b>$dataValue</b> of youth were on $seriesName",
    theme: 'fusion',
  },
  categories: [
    {
      category: [
        {
          label: 'Week 1',
        },
        {
          label: 'Week 2',
        },
        {
          label: 'Week 3',
        },
        {
          label: 'Week 4',
        },
      ],
    },
  ],
  dataset: [
    {
      seriesname: 'Target Value',
      data: [
        {
          value: '62',
        },
        {
          value: '34',
        },
        {
          value: '14',
        },
        {
          value: '106',
        },
        {
          value: '88',
        },
      ],
    },
    {
      seriesname: 'Actual Projection',
      data: [
        {
          value: '0',
        },
        {
          value: '100',
        },
        {
          value: '84',
        },
        {
          value: '42',
        },
        {
          value: '54',
        },
      ],
    },
  ],
};
@Component({
  selector: 'app-admin-target-value',
  templateUrl: './admin-target-value.component.html',
  styleUrls: ['./admin-target-value.component.scss']
})
export class AdminTargetValueComponent implements OnInit {
  width = 500;
  height = 200;
  type = 'msline';
  dataFormat = 'json';
  dataSource = data;
  constructor() { }

  ngOnInit(): void {
  }

}
