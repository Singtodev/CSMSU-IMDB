import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import Movies from '../../../../assets/jsons/movies.json';
import { MovieSliderComponent } from '../../widgets/movie-slider/movie-slider.component';
import { SectionTitleComponent } from '../../widgets/section-title/section-title.component';

@Component({
  selector: 'app-top-ten-movie',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, MovieSliderComponent , SectionTitleComponent],
  templateUrl: './top-ten-movie.component.html',
  styleUrl: './top-ten-movie.component.scss'
})
export class TopTenMovieComponent {
  public Movies: any[] = [];

  constructor(){
    this.Movies = this.randomMovie();
  }
  
  randomMovie(){
    let shuffledMovies = [...Movies];
    // Fisher-Yates shuffle algorithm
    for (let i = shuffledMovies.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledMovies[i], shuffledMovies[j]] = [shuffledMovies[j], shuffledMovies[i]];
    }
    // Take the first six elements
    return shuffledMovies.slice(0, 6);
  }
}
