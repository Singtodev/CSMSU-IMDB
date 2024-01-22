import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieStatsComponent } from './movie-stats.component';

describe('MovieStatsComponent', () => {
  let component: MovieStatsComponent;
  let fixture: ComponentFixture<MovieStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieStatsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MovieStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
