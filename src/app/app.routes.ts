import { Routes } from '@angular/router';
import { HistoriaComponent } from '../components/historia/historia.component';
import { HomeComponent } from '../components/home/home.component';

export const routes: Routes = [
    {path: 'historia', component: HistoriaComponent},
    {path: '', component: HomeComponent},
    {path: '**', component: HomeComponent}
];
