import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-generic-legend',
  templateUrl: './generic-legend.component.html',
  styleUrls: ['./generic-legend.component.scss']
})
export class GenericLegendComponent implements OnInit {

  @Input() title: string;
  @Input() legends: Legend[];

  constructor() { }

  ngOnInit(): void {
  }

}

export class Legend {
  name: string;
  color: string;
}
