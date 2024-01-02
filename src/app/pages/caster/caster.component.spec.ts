import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasterComponent } from './caster.component';

describe('CasterComponent', () => {
  let component: CasterComponent;
  let fixture: ComponentFixture<CasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CasterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
