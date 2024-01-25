import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import Movies from '../../../../assets/jsons/movies.json';
import { Movie } from '../../../components/cards/movie-card/movie-card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { MovieStatsComponent } from '../../../components/widgets/movie-stats/movie-stats.component';
import { Location } from '@angular/common';
import { MovieDetailComponent } from '../../../components/widgets/movie-detail/movie-detail.component';

@Component({
  selector: 'app-movie-id',
  standalone: true,
  imports: [FontAwesomeModule , MovieStatsComponent , MovieDetailComponent],
  templateUrl: './movie-id.component.html',
  styleUrl: './movie-id.component.scss'
})

export class MovieIdComponent implements OnInit , OnDestroy {

  public movieId: number | null = null;
  private routeSub: Subscription;
  private movies: any[] = [];
  public movie: any;
  public movieRate: string = '';
  public movieVoteCount: string = '';
  public faArrowLeft = faArrowLeft;
  constructor(public activeRoute: ActivatedRoute , public location: Location , public router : Router){
    this.routeSub = this.activeRoute.paramMap.subscribe(params => {
      this.movieId = Number(params.get('id')) || null;
    });
    this.movies = Movies;
  }

  ngOnInit(): void {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0)
  });
    this.findMovieByIndex();
  }

  public findMovieByIndex(){
    this.movie = this.movies.filter((movie: Movie) => movie.idx == this.movieId)[0] || {};
    this.movieRate = this.movie.imdbRate?.split('\u00a0')[0] || '';
    this.movieVoteCount = this.movie.imdbRate?.split('\u00a0')[1] || '';
  }

  public onGoBack(){
    this.location.back();
  }

  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
  }

}
