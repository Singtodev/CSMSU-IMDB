import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCaretRight , faStar } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
export interface Movie {
  idx: number,
  name: string,
  image: string,
  imdbRate: string,
  rate: string
}

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})

export class CardComponent {
  public faCaretRight = faCaretRight;
  public faStar = faStar;

  @Input() item: Movie | any = {};

  constructor(private readonly router: Router){}


  public watchTrailer(){
    this.router.navigate(['/movie/trailer/' + this.item.idx]);
  }

  public watchMovieDetail(){
    this.router.navigate(['/movie/detail/' + this.item.idx]);
  }

  public watchOption(){
    alert("Options modal is worked! " + this.item.idx);
  }

}
