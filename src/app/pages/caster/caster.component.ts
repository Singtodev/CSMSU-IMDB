import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-caster',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './caster.component.html',
  styleUrl: './caster.component.scss',
})
export class CasterComponent {
  public faArrowLeft = faArrowLeft;

  constructor(public location: Location) {}

  onGoBack() {
    this.location.back();
  }
}
