import { Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { MovieIdComponent } from './pages/movies/movie-id/movie-id.component';
import { CasterIdComponent } from './pages/caster/caster-id/caster-id.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: MainComponent
    },
    {
        path: 'caster/:id',
        component: CasterIdComponent,
    },
    {
        path: 'movies/:id',
        component: MovieIdComponent,
    },
    {
        path: '**',
        component: NotfoundComponent
    }
];
