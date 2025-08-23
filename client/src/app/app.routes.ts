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
import { CreateTheater } from './theaters/create-theater/create-theater';
import { EditTheater } from './theaters/edit-theater/edit-theater';
import { IndexTheaters } from './theaters/index-theaters/index-theaters';

export const routes: Routes = [
  { path: '', component: LandingPage },
  { path: 'genres', component: IndexGenres },
  { path: 'genres/create', component: CreateGenre },
  { path: 'genres/edit/:id', component: EditGenre },

  { path: 'actors', component: IndexActors },
  { path: 'actors/create', component: CreateActor },
  { path: 'actors/edit/:id', component: EditActor },

  { path: 'theaters', component: IndexTheaters },
  { path: 'theaters/create', component: CreateTheater },
  { path: 'theaters/edit/:id', component: EditTheater },

  { path: 'movies/search', component: MoviesSearch },
  { path: 'movies/create', component: CreateMovie },
  { path: 'movies/edit/:id', component: EditMovie },
  { path: 'movie/:id', component: MovieDetails },
  { path: '**', redirectTo: '' },
];
