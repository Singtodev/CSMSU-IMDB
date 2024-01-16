import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import Movies from '../../../../assets/jsons/most-popular-movies-imdb.json';
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
    let allMovies = [];
    allMovies = Movies.filter((movie) =>  movie.idx % Math.floor(Math.random() * 10 ) == 0);
    if( allMovies.length > 6 ){
      allMovies.length = 6;
    }
    return allMovies || [];
  }
}
