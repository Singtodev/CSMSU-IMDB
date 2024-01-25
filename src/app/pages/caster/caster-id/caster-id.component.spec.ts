import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasterIdComponent } from './caster-id.component';

describe('CasterIdComponent', () => {
  let component: CasterIdComponent;
  let fixture: ComponentFixture<CasterIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CasterIdComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CasterIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
