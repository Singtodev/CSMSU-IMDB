import { Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: MainComponent
    },
    {
        path: '**',
        component: NotfoundComponent
    }
];
