import { Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path:'',component:MainPageComponent},
    {path:'home',component:HomeComponent},
    {path:'**',redirectTo:''}
];
