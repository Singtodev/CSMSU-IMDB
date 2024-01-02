import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewResultComponent } from './preview-result.component';

describe('PreviewResultComponent', () => {
  let component: PreviewResultComponent;
  let fixture: ComponentFixture<PreviewResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreviewResultComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PreviewResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
