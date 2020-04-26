import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VotingChartDetailComponent } from './voting-chart-detail.component';

describe('VotingChartDetailComponent', () => {
  let component: VotingChartDetailComponent;
  let fixture: ComponentFixture<VotingChartDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VotingChartDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VotingChartDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
