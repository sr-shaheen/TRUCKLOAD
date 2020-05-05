import { Component, OnInit } from '@angular/core';
// const data = {
//   chart: {
//     caption: ' Total Trip',
//     // subcaption: "In MMbbl = One Million barrels",
//     // xaxisname: "Country",
//     // yaxisname: "Reserves (MMbbl)",
//     // numbersuffix: "K",
//     theme: 'fusion',
//     "palettecolors": "5d62b5,29c3be,f2726f"
//   },

//   categories: [
//     {
//       category: [
//         {
//           label: 'Week 1',
//         },
//         {
//           label: 'Week 2',
//         },
//         {
//           label: 'Week 3',
//         },
//       ],
//     },
//   ],
//   dataset: [
//     {
//       seriesname: 'Target Value',
//       data: [
//         {
//           value: '16200',
//         },
//         {
//           value: '16400',
//         },
//         {
//           value: '19400',
//         },
//         {
//           value: '16600',
//         },
//         {
//           value: '17800',
//         },
//       ],
//     },
//     {
//       seriesname: 'Actual Projection',
//       data: [
//         {
//           value: '11600',
//         },
//         {
//           value: '12800',
//         },
//         {
//           value: '13400',
//         },
//         {
//           value: '14200',
//         },
//         {
//           value: '15400',
//         },
//       ],
//     },
//   ],
// };

const categories =  [
  {
    "category": [
      { "label": "Q1" },
      { "label": "Q2" },
      { "label": "Q3" },
      { "label": "Q4" }
    ]
  }
]
// STEP 3- Construct the dataset comprising multiple series
const dataset = [
  {
    "seriesname": "Previous Year",
    "data": [
      { "value": "12000" },
      { "value": "10500" },
      { "value": "23500" },
      { "value": "16000" }
    ]
  },
  {
    "seriesname": "Current Year",
    "data": [
      { "value": "24400" },
      { "value": "29800" },
      { "value": "20800" },
      { "value": "26800" }
    ]
  }
]

@Component({
  selector: 'app-admin-completed-trip',
  templateUrl: './admin-completed-trip.component.html',
  styleUrls: ['./admin-completed-trip.component.scss']
})
export class AdminCompletedTripComponent implements OnInit {
  dataSource: Object;
  constructor() {
  this.dataSource = {
  "chart": {
  "theme": "fusion",
  "caption": "Total Trip",
  // "xAxisname": "Quarter",
  // "yAxisName": "Revenues (In USD)",
  // "numberPrefix": "\$",
  "plotFillAlpha": "80",
  "divLineIsDashed": "1",
  "divLineDashLen": "1",
  "divLineGapLen": "1"
  },
  "categories": categories,
  "dataset": dataset,
  
      }; // end of this.dataSource
  
  }

  ngOnInit(): void {
  }

}
