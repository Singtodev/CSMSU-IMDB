import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as StarRegular} from '@fortawesome/free-regular-svg-icons';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-caster-stats',
  standalone: true,
  imports: [FontAwesomeModule , CommonModule , FormsModule],
  templateUrl: './caster-stats.component.html',
  styleUrl: './caster-stats.component.scss',
})
export class CasterStatsComponent {
  public faStar = faStar;
  public StarRegular = StarRegular;

  @Input() caster: any;

  onClickYourRate() {
    alert('Your rate work!');
  }

  onClickImdbRate() {
    alert('Imdb rate work!');
  }

  onClickPopularity() {
    alert('Popularity work!');
  }
}
