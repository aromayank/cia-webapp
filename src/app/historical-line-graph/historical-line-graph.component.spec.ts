import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricalLineGraphComponent } from './historical-line-graph.component';

describe('HistoricalLineGraphComponent', () => {
  let component: HistoricalLineGraphComponent;
  let fixture: ComponentFixture<HistoricalLineGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoricalLineGraphComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoricalLineGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
