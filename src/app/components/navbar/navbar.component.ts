import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars , faCaretDown , faSearch , faBookmark} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  public hamburgerMenu = faBars;
  public faCaretDown = faCaretDown;
  public faSearch = faSearch;
  public faBookmark = faBookmark;


  constructor(private readonly router : Router){}


  public gotoHomePage(){
    this.router.navigate(['/']);
  }
}
