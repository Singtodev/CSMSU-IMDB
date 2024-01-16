import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-people',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './people.component.html',
  styleUrl: './people.component.scss'
})
export class PeopleComponent {
  @Input() data: any = {}

  constructor(public router: Router){

  }


  gotoCasterPage(){
    this.router.navigate(['/caster/' + this.data.id])
  }
}
