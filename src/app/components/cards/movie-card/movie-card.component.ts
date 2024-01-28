import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCaretRight , faStar } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { People } from '../people-card/people.component';
export interface Movie {
  idx:   number;
  name:  string;
  image: string;
  video: string;
  about: About;
  imdbRate: string;
  popularity: string;
  categories: String[];
  shortDetail: String;
}

export interface About {
  users_added?: string;
  rate_movie?: RateMovie;
  details?:    Detail[];
  reviews?: Review;
}

export interface Review {
  userReview: string
  criticReview: string
}

export interface Detail {
  order?:  number;
  key?:    string;
  values?: People[];
}

export interface RateMovie {
  year?:     string;
  rate?:     string;
  duration?: string;
  
}

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.scss'
})
export class MovieCardComponent {
  public faCaretRight = faCaretRight;
  public faStar = faStar;

  @Input() item: Movie | any = {};

  constructor(private readonly router: Router){}


  public watchTrailer(){
   alert("Trailer Worked!")
  }

  public watchMovieDetail(){
    this.router.navigate(['/movies/' + this.item.idx]);
  }

  public watchOption(){
    alert("Options modal is worked! " + this.item.idx);
  }
}
