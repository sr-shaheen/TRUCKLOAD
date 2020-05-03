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
          value: '64',
        },
        {
          value: '64',
        },
        {
          value: '66',
        },
        {
          value: '78',
        },
      ],
    },
    {
      seriesname: 'Actual Projection',
      data: [
        {
          value: '16',
        },
        {
          value: '28',
        },
        {
          value: '34',
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
  selector: 'app-target-value',
  templateUrl: './target-value.component.html',
  styleUrls: ['./target-value.component.scss'],
})
export class TargetValueComponent implements OnInit {
  width = 500;
  height = 300;
  type = 'msline';
  dataFormat = 'json';
  dataSource = data;

  constructor() {}

  ngOnInit(): void {}
}
