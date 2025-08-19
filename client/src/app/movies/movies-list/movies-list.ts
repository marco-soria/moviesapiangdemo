import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { GenericList } from '../../shared/components/generic-list/generic-list';

@Component({
  selector: 'app-movies-list',
  imports: [GenericList, MatButtonModule, MatIconModule],
  templateUrl: './movies-list.html',
  styleUrl: './movies-list.css',
})
export class MoviesList {
  @Input({ required: true })
  movies!: any[];

  addMovie() {
    this.movies?.push({
      title: 'Inception',
      releaseDate: new Date('2012-07-03'),
      price: 500,
    });
  }

  removeMovie(movie: any) {
    let index = this.movies.findIndex((m: any) => m.title === movie.title);
    this.movies.splice(index, 1);
  }
}
