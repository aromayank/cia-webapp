declare var require: any;
import { Component, OnInit } from '@angular/core';

import { Chart } from 'angular-highcharts';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-solid-guage-chart',
  templateUrl: './solid-guage-chart.component.html',
  styleUrls: ['./solid-guage-chart.component.scss'],
})
export class SolidGuageChartComponent implements OnInit {
  public chart!: Chart;
  public gaugeOptions = {
    chart: {
      type: 'solidgauge',
    },
    title: null,
    pane: {
      size: '100%',
      startAngle: -90,
      endAngle: 90,
      background: {
        innerRadius: '60%',
        outerRadius: '100%',
        shape: 'arc'
      }
    },
    yAxis: {
      stops: [
          [0, 'rgb(211 47 47)'], // red
          [(550/850), 'rgb(242, 175, 0)'], // yellow
          [1, 'rgb(76, 175, 80);'], // green
      ],
      min: 100,
      max: 850,
      tickLength: 0,
      tickWidth:0,
      minorTicks: false,
      labels: {
        enabled: false
      },
      //tickAmount: null,
    },
    series: [{
      data: [780],
      dataLabels: {
        format: '<div style="text-align:center">' +
        '<span style="font-size:15px">{y}</span><br/>' +
        '</div>',
        borderWidth: 0,
        y: -25,
      },
    }]
  };

  constructor() {}

  ngOnInit(): void {
    this.init();
  }

  public init() {
    this.chart = new Chart(this.gaugeOptions as any);
    // Highcharts.chart(
    //   'container-gauge',
    //   Highcharts.merge(this.gaugeOptions as any, {})
    // );
  }
}
