import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-offerings',
  templateUrl: './product-offerings.component.html',
  styleUrls: ['./product-offerings.component.scss']
})
export class ProductOfferingsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

}
