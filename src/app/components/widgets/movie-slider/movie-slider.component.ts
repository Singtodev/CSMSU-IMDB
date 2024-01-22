import { Component, Input } from '@angular/core';
import { MovieCardComponent, Movie } from '../../cards/movie-card/movie-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movie-slider',
  standalone: true,
  imports: [CommonModule,MovieCardComponent ],
  templateUrl: './movie-slider.component.html',
  styleUrl: './movie-slider.component.scss'
})
export class MovieSliderComponent {

  @Input() movies: Movie[] = [];


}
