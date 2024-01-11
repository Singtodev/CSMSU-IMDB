import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopTenMovieComponent } from './top-ten-movie.component';

describe('TopTenMovieComponent', () => {
  let component: TopTenMovieComponent;
  let fixture: ComponentFixture<TopTenMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopTenMovieComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TopTenMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
