import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../cards/movie-card/movie-card.component';
import { CommonModule } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPlayCircle  } from '@fortawesome/free-regular-svg-icons'
@Component({
  selector: 'app-movie-detail',
  standalone: true,
  imports: [CommonModule , FontAwesomeModule],
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.scss',
})
export class MovieDetailComponent implements OnInit{

  @Input() movie: Movie = {};

  public safeURL: any;
  public showContent: boolean = true;
  public faPlayCircle  = faPlayCircle;
  
  constructor(private _sanitizer: DomSanitizer){
    
  }
  ngOnInit(): void {
    this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl(this.getEmbedVideo());
  }

  getEmbedVideo(): string{
    return 'https://www.youtube.com/embed/' + this.movie.video?.split('?v=')[1] || '';
  }

  onMouseEnter() {
    this.showContent = false;
  }

  onMouseLeave() {
    this.showContent = true;
  }

  onAddtoList(){
    alert("Add to list work!");
  }
}
