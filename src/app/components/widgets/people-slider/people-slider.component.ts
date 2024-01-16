import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { PeopleComponent } from '../../cards/people/people.component';

@Component({
  selector: 'app-people-slider',
  standalone: true,
  imports: [CommonModule , PeopleComponent],
  templateUrl: './people-slider.component.html',
  styleUrl: './people-slider.component.scss'
})
export class PeopleSliderComponent {
  @Input() peoples: any[] = [];
}
