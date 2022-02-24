import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { DisclaimerComponent } from './components/disclaimer/disclaimer.component';

@NgModule({
  declarations: [
    DisclaimerComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatButtonModule,
  ],
  providers: [],
  exports: [
    DisclaimerComponent
  ]
})
export class SharedModule { }
