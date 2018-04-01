import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressAdvisorComponent } from './progress-advisor.component';

describe('ProgressAdvisorComponent', () => {
  let component: ProgressAdvisorComponent;
  let fixture: ComponentFixture<ProgressAdvisorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgressAdvisorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressAdvisorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
