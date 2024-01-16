import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-section-title',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './section-title.component.html',
  styleUrl: './section-title.component.scss'
})
export class SectionTitleComponent {
  public faCaretRight = faCaretRight;

  @Input() title: string = "";
  @Input() description: string ="";
}
