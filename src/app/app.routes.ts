// import { Routes } from '@angular/router';
// import { MainPageComponent } from './main-page/main-page.component';
// import { HomeComponent } from './home/home.component';
// import { FoodDetailComponent } from './food-detail/food-detail.component';
// import { SavedComponent } from './saved/saved.component';
// import { ProfileComponent } from './profile/profile.component';
// import { FavoritesComponent } from './favorites/favorites.component';
// import { ChatbotComponent } from './chatbot/chatbot.component';

// export const routes: Routes = [
//     {path:'',component:MainPageComponent},
//     {path:'home',component:HomeComponent},
//     {path:'food/:id',component:FoodDetailComponent},
//     {path:'saved',component:SavedComponent},
//     {path:'profile',component:ProfileComponent},
//     {path:'favorites',component:FavoritesComponent},
//     {path:'chatbot',component:ChatbotComponent},
//     {path:'**',redirectTo:''}
// ];


import { Routes } from '@angular/router';

export const routes: Routes = [
  {path: '',loadComponent: () => import('./main-page/main-page.component').then(c => c.MainPageComponent)},
  {path: 'home',loadComponent: () =>import('./home/home.component').then(c => c.HomeComponent)},
  {path: 'food/:id',loadComponent: () =>import('./food-detail/food-detail.component').then(c => c.FoodDetailComponent)},
  {path: 'saved',loadComponent: () =>import('./saved/saved.component').then(c => c.SavedComponent)},
  {path: 'profile',loadComponent: () =>import('./profile/profile.component').then(c => c.ProfileComponent)},
  {path: 'favorites',loadComponent: () =>import('./favourites/favourites.component').then(c => c.FavouritesComponent)},
  {path: 'chatbot',loadComponent: () =>import('./chatbot/chatbot.component').then(c => c.ChatbotComponent)},
  {path: '**',redirectTo: ''}
];
