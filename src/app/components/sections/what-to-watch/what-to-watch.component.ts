import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCaretRight , faStar } from '@fortawesome/free-solid-svg-icons';
import Movies from '../../../../assets/jsons/most-popular-movies-imdb.json';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-what-to-watch',
  standalone: true,
  imports: [CommonModule,FontAwesomeModule],
  templateUrl: './what-to-watch.component.html',
  styleUrl: './what-to-watch.component.scss'
})
export class WhatToWatchComponent {
  public faCaretRight = faCaretRight;
  public faStar = faStar;
  public Movies: any[] = Movies
}
