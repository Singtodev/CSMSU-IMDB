import { Component } from '@angular/core';
import { MovieSliderComponent } from '../../widgets/movie-slider/movie-slider.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SectionTitleComponent } from '../../widgets/section-title/section-title.component';
import Peoples from '../../../../assets/jsons/peoples.json';
import { PeopleSliderComponent } from '../../widgets/people-slider/people-slider.component';
@Component({
  selector: 'app-caster',
  standalone: true,
  imports: [FontAwesomeModule , SectionTitleComponent , PeopleSliderComponent],
  templateUrl: './caster.component.html',
  styleUrl: './caster.component.scss'
})
export class CasterComponent {
  public peoples: any[] = [];


  constructor(){
    this.peoples = Peoples;
    this.peoples.length = 6;
  }
}
