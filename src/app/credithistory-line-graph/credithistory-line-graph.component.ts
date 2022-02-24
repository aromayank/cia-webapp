declare var require: any;

import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

const HighchartsMore = require('highcharts/highcharts-more.src');
HighchartsMore(Highcharts);


@Component({
  selector: 'app-credithistory-line-graph',
  templateUrl: './credithistory-line-graph.component.html',
  styleUrls: ['./credithistory-line-graph.component.scss']
})
export class CredithistoryLineGraphComponent implements OnInit {


  constructor() { }

  public options: any = {
    chart: {
      type: 'spline',
      height: 700
    },
    title: {
      text: 'Yearly Credit Score'
    },
    credits: {
      enabled: false
    },

    xAxis: {
      categories:["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

    },
    series: [
         {
            name: 'Credit Score',
            data: [710, 560, 450, 400, 560, 600, 610,659, 700, 720, 678, 789]
         },
         
      ]
  }


  ngOnInit(): void {

    this.init();

  }

  public init(){
    Highcharts.chart('container', this.options);
  }

}
