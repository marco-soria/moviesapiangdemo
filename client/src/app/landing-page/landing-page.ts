import { Component, inject, OnInit } from '@angular/core';
import { MoviesList } from '../movies/movies-list/movies-list';
import { MoviesService } from '../movies/movies.service';

@Component({
  selector: 'app-landing-page',
  imports: [MoviesList],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.css',
})
export class LandingPage implements OnInit {
  upcomingReleasesMovies: any[] = [];
  inTheatersMovies: any[] = [];

  moviesService = inject(MoviesService);

  constructor() {}

  ngOnInit() {
    this.loadMovies();
  }

  loadMovies() {
    this.moviesService.getLanding().subscribe((response) => {
      this.upcomingReleasesMovies = response.upcomingReleases;
      this.inTheatersMovies = response.inTheaters;
    });
  }

  handleDelete() {
    this.loadMovies();
  }
}
