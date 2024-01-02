import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPlayCircle , faBookmark} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-preview-result',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './preview-result.component.html',
  styleUrl: './preview-result.component.scss'
})
export class PreviewResultComponent {
  public faPlayCircle = faPlayCircle
  public faBookmark = faBookmark;
}
