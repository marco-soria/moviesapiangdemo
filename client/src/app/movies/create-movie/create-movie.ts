import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ActorAutoCompleteDTO } from '../../actors/actors.models';
import { Loading } from '../../shared/components/loading/loading';
import { MultipleSelectorDTO } from '../../shared/components/multiple-selector/MultipleSelectorDTO';
import { extractErrors } from '../../shared/functions/extractErrors';
import { MoviesForm } from '../movies-form/movies-form';
import { MovieCreationDTO } from '../movies.models';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-create-movie',
  imports: [MoviesForm, Loading],
  templateUrl: './create-movie.html',
  styleUrl: './create-movie.css',
})
export class CreateMovie {
  nonSelectedGenres: MultipleSelectorDTO[] = [];
  selectedGenres: MultipleSelectorDTO[] = [];
  nonSelectedTheaters: MultipleSelectorDTO[] = [];
  selectedTheaters: MultipleSelectorDTO[] = [];
  selectedActors: ActorAutoCompleteDTO[] = [];

  moviesService = inject(MoviesService);
  errors: string[] = [];
  router = inject(Router);

  constructor() {
    this.moviesService.postGet().subscribe((model) => {
      this.nonSelectedGenres = model.genres.map((genre) => {
        return <MultipleSelectorDTO>{ key: genre.id, description: genre.name };
      });

      this.nonSelectedTheaters = model.theaters.map((theater) => {
        return <MultipleSelectorDTO>{
          key: theater.id,
          description: theater.name,
        };
      });
    });
  }

  saveChanges(movie: MovieCreationDTO) {
    this.moviesService.create(movie).subscribe({
      next: () => {
        this.router.navigate(['/']);
      },
      error: (err) => {
        const errors = extractErrors(err);
        this.errors = errors;
      },
    });
  }
}
