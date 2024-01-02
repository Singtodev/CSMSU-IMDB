import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPlayCircle , faCaretRight } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-slot-content',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './slot-content.component.html',
  styleUrl: './slot-content.component.scss'
})
export class SlotContentComponent {
  public faPlayCircle = faPlayCircle;
  public faCaretRight = faCaretRight;

}
