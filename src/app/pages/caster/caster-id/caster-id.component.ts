import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CasterDetailComponent } from '../../../components/widgets/caster-detail/caster-detail.component';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Location } from '@angular/common';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import Casters from '../../../../assets/jsons/peoples.json';
import { CasterStatsComponent } from '../../../components/widgets/caster-stats/caster-stats.component';
@Component({
  selector: 'app-caster-id',
  standalone: true,
  imports: [FontAwesomeModule, CasterDetailComponent , CasterStatsComponent],
  templateUrl: './caster-id.component.html',
  styleUrl: './caster-id.component.scss',
})
export class CasterIdComponent {
  public faArrowLeft = faArrowLeft;
  public casters = Casters;
  public routeSub;
  public casterId: number| null = null;
  public caster: any;

  constructor(public location: Location, public router: Router , public activeRoute: ActivatedRoute) {
    this.routeSub = this.activeRoute.paramMap.subscribe(params => {
      this.casterId = Number(params.get('id')) || null;
    });
  }
  onGoBack() {
    this.location.back();
  }

  ngOnInit(): void {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
    this.getCasterById();
  }

  getCasterById():void {
    this.caster = this.casters.filter((caster) => caster.id == this.casterId)[0] || {};
  }
}
