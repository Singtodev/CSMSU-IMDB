import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPlayCircle  } from '@fortawesome/free-regular-svg-icons'
import { Router } from '@angular/router';

@Component({
  selector: 'app-caster-detail',
  standalone: true,
  imports: [CommonModule , FontAwesomeModule],
  templateUrl: './caster-detail.component.html',
  styleUrl: './caster-detail.component.scss'
})
export class CasterDetailComponent {

  @Input() caster: any;

  public safeURL: any;
  public showContent: boolean = true;
  public faPlayCircle  = faPlayCircle;

  constructor(private _sanitizer: DomSanitizer , private router: Router){}

  ngOnInit(): void {
    this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl(this.getEmbedVideo());
  }

  getEmbedVideo(): string{
    return 'https://www.youtube.com/embed/' + this.caster?.video?.split('?v=')[1] || '';
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

  gotoPerson(personId: string){
    this.router.navigate(['/caster/' + personId])
  }
}
