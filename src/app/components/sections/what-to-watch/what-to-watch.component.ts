import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCaretRight , faStar } from '@fortawesome/free-solid-svg-icons';
import Movies from '../../../../assets/jsons/most-popular-movies-imdb.json';
import { CommonModule } from '@angular/common';
import { MovieSliderComponent } from '../../widgets/movie-slider/movie-slider.component';
import { SectionTitleComponent } from '../../widgets/section-title/section-title.component';
@Component({
  selector: 'app-what-to-watch',
  standalone: true,
  imports: [CommonModule,FontAwesomeModule, MovieSliderComponent , SectionTitleComponent],
  templateUrl: './what-to-watch.component.html',
  styleUrl: './what-to-watch.component.scss'
})
export class WhatToWatchComponent {
  public faCaretRight = faCaretRight;
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
