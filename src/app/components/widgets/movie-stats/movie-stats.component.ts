import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as StarRegular} from '@fortawesome/free-regular-svg-icons';
import { Movie } from '../../cards/movie-card/movie-card.component';

@Component({
  selector: 'app-movie-stats',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './movie-stats.component.html',
  styleUrl: './movie-stats.component.scss'
})
export class MovieStatsComponent {
  public faStar = faStar;
  public StarRegular = StarRegular;

  @Input() movieVoteCount: string  = '';
  @Input() movieRate: string  = '';
  @Input() moviePopularity: string = '';
  @Input() movie: any;


  onClickYourRate() {
    alert('Your rate work!');
  }

  onClickImdbRate(){
    alert('Imdb rate work!');
  }

  onClickPopularity(){
    alert('Popularity work!');
  }


}
