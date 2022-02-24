import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-disclaimer',
  templateUrl: './disclaimer.component.html',
  styleUrls: ['./disclaimer.component.scss']
})
export class DisclaimerComponent implements OnInit {
  @Output() public accepted = new EventEmitter();
  @Output() public rejected = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

}
