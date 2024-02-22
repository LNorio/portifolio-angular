import { Routes } from '@angular/router';
import { HistoriaComponent } from '../components/historia/historia.component';
import { HomeComponent } from '../components/home/home.component';
import { HobbiesComponent } from '../components/historia/hobbies/hobbies.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'historia', component: HistoriaComponent},
    {path: 'hobbies', pathMatch: 'full', component: HobbiesComponent},
    {path: '**', redirectTo:''}
];
