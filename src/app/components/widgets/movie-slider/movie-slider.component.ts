import { Component, Input } from '@angular/core';
import { CardComponent, Movie } from '../../sections/what-to-watch/components/card/card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movie-slider',
  standalone: true,
  imports: [CommonModule,CardComponent ],
  templateUrl: './movie-slider.component.html',
  styleUrl: './movie-slider.component.scss'
})
export class MovieSliderComponent {

  @Input() movies: Movie[] = [];


}
