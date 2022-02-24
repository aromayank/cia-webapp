import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss']
})
export class WidgetComponent implements OnInit {
  @Output() public creditHistory = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  goToCreditHistory()
  {
    this.creditHistory.emit();
  }

}
