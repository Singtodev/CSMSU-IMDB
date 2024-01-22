import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { PeopleCardComponent  } from '../../cards/people-card/people.component';

@Component({
  selector: 'app-people-slider',
  standalone: true,
  imports: [CommonModule , PeopleCardComponent ],
  templateUrl: './people-slider.component.html',
  styleUrl: './people-slider.component.scss'
})
export class PeopleSliderComponent {
  @Input() peoples: any[] = [];
}
