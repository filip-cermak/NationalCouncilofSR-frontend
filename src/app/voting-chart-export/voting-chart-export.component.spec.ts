import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VotingChartExportComponent } from './voting-chart-export.component';

describe('VotingChartExportComponent', () => {
  let component: VotingChartExportComponent;
  let fixture: ComponentFixture<VotingChartExportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VotingChartExportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VotingChartExportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
