import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasterStatsComponent } from './caster-stats.component';

describe('CasterStatsComponent', () => {
  let component: CasterStatsComponent;
  let fixture: ComponentFixture<CasterStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CasterStatsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CasterStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
