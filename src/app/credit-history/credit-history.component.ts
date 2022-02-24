import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {MatTableModule} from '@angular/material/table'
import { Router } from '@angular/router';
import { CreditHistory } from '../common/credit.history.model';
import { AppRoutes } from '../common/models/app.model';
import { Stack } from '../common/models/stack.model';
import { Legend } from '../generic-legend/generic-legend.component';

@Component({
  selector: 'app-credit-history',
  templateUrl: './credit-history.component.html',
  styleUrls: ['./credit-history.component.scss']
})


export class CreditHistoryComponent implements OnInit {
  @Output() public productOfferings = new EventEmitter();
  constructor(private route: Router) { }

  title = 'Credit Score Range';
  public appRoutesEnum = AppRoutes;
  public appRoutes = AppRoutes.ProductOfferings;
  public appRouteStack = new Stack<AppRoutes>();
  public isBackButtonVisible = false;

  legends: Legend[] = [
    { name: '300-550', color: '#D32F2F' },
    { name: '550-600', color: '#F2AF00' },
    { name: '600-720', color: '#2196F3' },
    { name: '720-800', color: '#4CAF50' }
  ];


  CredHistory : CreditHistory[] =[{
    "score": 750,
    "month": "January",
    "change": 5,
  }, {
    "score": 710,
    "month": "Feburary",
    "change": -40,
  }, 
  {
    "score": 700,
    "month": "March",
    "change": -10,
  }, {
    "score": 750,
    "month": "April",
    "change": +50,
  }, 
  {
    "score": 760,
    "month": "May",
    "change": +10,
  }, {
    "score": 770,
    "month": "June",
    "change": +10,
  }, 
  ];

  displayedColumns: string[] = ['score', 'month', 'change'];

  ngOnInit(): void {

  }

  public goToProductOfferings()
  {
    this.productOfferings.emit();
  }





}
