import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCaretRight , faStar } from '@fortawesome/free-solid-svg-icons';
import Movies from '../../../../assets/jsons/movies.json';
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
