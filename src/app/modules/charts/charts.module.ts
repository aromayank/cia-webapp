import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { SolidGuageChartComponent } from './solid-guage-chart/solid-guage-chart.component';

import { ChartModule, HIGHCHARTS_MODULES } from 'angular-highcharts';
import more from 'highcharts/highcharts-more.src';
import solidGauge from 'highcharts/modules/solid-gauge.src';

export function highchartsModules() {
  // apply Highcharts Modules to this array
  return [more, solidGauge];
}


@NgModule({
  declarations: [SolidGuageChartComponent],
  imports: [CommonModule, ChartModule, BrowserAnimationsModule],
  providers: [
    { provide: HIGHCHARTS_MODULES, useFactory: highchartsModules } // add as factory to your providers
  ],
  exports: [SolidGuageChartComponent],
})
export class CiaChartsModule {}
