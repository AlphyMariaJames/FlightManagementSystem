import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetSchedulesComponent } from './get-schedules.component';

describe('GetSchedulesComponent', () => {
  let component: GetSchedulesComponent;
  let fixture: ComponentFixture<GetSchedulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetSchedulesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetSchedulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
