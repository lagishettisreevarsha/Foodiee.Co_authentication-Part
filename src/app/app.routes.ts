import { Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { HomeComponent } from './home/home.component';
import { FoodDetailComponent } from './food-detail/food-detail.component';
import { SavedComponent } from './saved/saved.component';
import { ProfileComponent } from './profile/profile.component';
import { FavoritesComponent } from './favorites/favorites.component';

export const routes: Routes = [
    {path:'',component:MainPageComponent},
    {path:'home',component:HomeComponent},
    {path:'food/:id',component:FoodDetailComponent},
    {path:'saved',component:SavedComponent},
    {path:'profile',component:ProfileComponent},
    {path:'favorites',component:FavoritesComponent},
    {path:'**',redirectTo:''}
];
