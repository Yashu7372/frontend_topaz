import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketsChartComponent } from './tickets-chart.component';

describe('TicketsChartComponent', () => {
  let component: TicketsChartComponent;
  let fixture: ComponentFixture<TicketsChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketsChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TicketsChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
