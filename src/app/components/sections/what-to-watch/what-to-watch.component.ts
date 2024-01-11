import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCaretRight , faStar } from '@fortawesome/free-solid-svg-icons';
import Movies from '../../../../assets/jsons/most-popular-movies-imdb.json';
import { CommonModule } from '@angular/common';
import { CardComponent, Movie } from './components/card/card.component';
@Component({
  selector: 'app-what-to-watch',
  standalone: true,
  imports: [CommonModule,FontAwesomeModule , CardComponent],
  templateUrl: './what-to-watch.component.html',
  styleUrl: './what-to-watch.component.scss'
})
export class WhatToWatchComponent {
  public faCaretRight = faCaretRight;
  public faStar = faStar;
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
