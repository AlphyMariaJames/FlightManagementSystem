import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAirlinesComponent } from './get-airlines.component';

describe('GetAirlinesComponent', () => {
  let component: GetAirlinesComponent;
  let fixture: ComponentFixture<GetAirlinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAirlinesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetAirlinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
