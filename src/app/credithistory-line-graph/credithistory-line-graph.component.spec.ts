import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CredithistoryLineGraphComponent } from './credithistory-line-graph.component';

describe('CredithistoryLineGraphComponent', () => {
  let component: CredithistoryLineGraphComponent;
  let fixture: ComponentFixture<CredithistoryLineGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CredithistoryLineGraphComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CredithistoryLineGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
