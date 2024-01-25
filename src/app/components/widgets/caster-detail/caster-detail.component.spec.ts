import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasterDetailComponent } from './caster-detail.component';

describe('CasterDetailComponent', () => {
  let component: CasterDetailComponent;
  let fixture: ComponentFixture<CasterDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CasterDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CasterDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
