import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleSliderComponent } from './people-slider.component';

describe('PeopleSliderComponent', () => {
  let component: PeopleSliderComponent;
  let fixture: ComponentFixture<PeopleSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PeopleSliderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PeopleSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
