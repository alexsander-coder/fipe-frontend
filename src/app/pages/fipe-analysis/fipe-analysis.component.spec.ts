import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FipeAnalysisComponent } from './fipe-analysis.component';

describe('FipeAnalysisComponent', () => {
  let component: FipeAnalysisComponent;
  let fixture: ComponentFixture<FipeAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FipeAnalysisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FipeAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
