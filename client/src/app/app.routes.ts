import { Routes } from '@angular/router';
import { CreateActor } from './actors/create-actor/create-actor';
import { EditActor } from './actors/edit-actor/edit-actor';
import { IndexActors } from './actors/index-actors/index-actors';
import { CreateGenre } from './genres/create-genre/create-genre';
import { EditGenre } from './genres/edit-genre/edit-genre';
import { IndexGenres } from './genres/index-genres/index-genres';
import { LandingPage } from './landing-page/landing-page';
import { CreateMovie } from './movies/create-movie/create-movie';
import { EditMovie } from './movies/edit-movie/edit-movie';
import { MovieDetails } from './movies/movie-details/movie-details';
import { MoviesSearch } from './movies/movies-search/movies-search';
import { IndexUsers } from './security/index-users/index-users';
import { Login } from './security/login/login';
import { Register } from './security/register/register';
import { isAdminGuard } from './shared/guards/is-admin.guard';
import { CreateTheater } from './theaters/create-theater/create-theater';
import { EditTheater } from './theaters/edit-theater/edit-theater';
import { IndexTheaters } from './theaters/index-theaters/index-theaters';

export const routes: Routes = [
  { path: '', component: LandingPage, canActivate: [isAdminGuard] },
  { path: 'genres', component: IndexGenres, canActivate: [isAdminGuard] },
  {
    path: 'genres/create',
    component: CreateGenre,
    canActivate: [isAdminGuard],
  },
  {
    path: 'genres/edit/:id',
    component: EditGenre,
    canActivate: [isAdminGuard],
  },

  { path: 'actors', component: IndexActors, canActivate: [isAdminGuard] },
  {
    path: 'actors/create',
    component: CreateActor,
    canActivate: [isAdminGuard],
  },
  {
    path: 'actors/edit/:id',
    component: EditActor,
    canActivate: [isAdminGuard],
  },

  { path: 'theaters', component: IndexTheaters, canActivate: [isAdminGuard] },
  {
    path: 'theaters/create',
    component: CreateTheater,
    canActivate: [isAdminGuard],
  },
  {
    path: 'theaters/edit/:id',
    component: EditTheater,
    canActivate: [isAdminGuard],
  },

  { path: 'movies/search', component: MoviesSearch },
  {
    path: 'movies/create',
    component: CreateMovie,
    canActivate: [isAdminGuard],
  },
  {
    path: 'movies/edit/:id',
    component: EditMovie,
    canActivate: [isAdminGuard],
  },
  { path: 'movie/:id', component: MovieDetails },
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  { path: 'users', component: IndexUsers },
  { path: '**', redirectTo: '' },
];
